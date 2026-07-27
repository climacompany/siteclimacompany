from playwright.sync_api import sync_playwright
import json
import time

def scrape_rinnai_playwright_urls(urls):
    resultados = []
    
    with sync_playwright() as p:
        # Lança Chromium invisível
        browser = p.chromium.launch(headless=True)
        # Contexto com User-Agent real para evitar bloqueio Cloudflare/403
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            viewport={"width": 1920, "height": 1080}
        )
        page = context.new_page()

        for idx, url in enumerate(urls):
            print(f"[{idx+1}/{len(urls)}] Acessando: {url}")
            try:
                # Usa waitUntil = networkidle para esperar requisições AJAX finalizarem
                page.goto(url, wait_until="networkidle", timeout=30000)
                
                # Dar tempo extra pra render geral do React
                page.wait_for_timeout(2000)
                
                produto = {
                    "id": 500 + idx, # IDs únicos para os novos
                    "titulo": "",
                    "desc": "",
                    "img": "",
                    "features": [],
                    "especificacoesTecnicas": {},
                    "categoria": 'aquecedores' if 'aquecedor' in url else 'caldeiras',
                    "categoriaLabel": 'Aquecedor' if 'aquecedor' in url else 'Caldeiras',
                    "destaque": idx == 0
                }
                
                # === Título ===
                # Procura <h1>
                h1_elements = page.locator('h1').all_inner_texts()
                if h1_elements:
                   produto["titulo"] = next((text for text in h1_elements if len(text.strip()) > 5), "Produto Sem Título").strip()
                
                # === Descrição ===
                # Captura parágrafos p com uma certa densidade de caracteres
                all_ps = page.locator('p').all_inner_texts()
                desc_texts = [text.strip() for text in all_ps if len(text.strip()) > 80 and "política" not in text.lower() and "termos" not in text.lower() and "copyright" not in text.lower()]
                if desc_texts:
                   produto["desc"] = desc_texts[0]
                else:
                   produto["desc"] = "Descrição técnica completa não identificada no momento."

                # === Imagem ===
                # Vamos buscar todas as imagens e filtrar as técnicas
                imagens_validas = []
                # Pega as props "src" de todas imgs
                locator_imgs = page.locator('img')
                count = locator_imgs.count()
                
                for i in range(count):
                    src = locator_imgs.nth(i).get_attribute('src')
                    if src and len(src) > 15:
                         if src.startswith('/'): src = "https://www.rinnai.com.br" + src
                         
                         src_lower = src.lower()
                         # Regras rígidas de RECUSA de imagem:
                         bad_terms = ['logo', 'icon', 'corte', 'diagrama', 'selo', 'inmetro', 'dimens', 'thumb']
                         is_bad = any(term in src_lower for term in bad_terms)
                         
                         # Regras de ACEITE da imagem:
                         if not is_bad:
                             # Verifica se esta no diretorio de uploads banners/produtos e é jpeg/png
                             if ('upload' in src_lower or 'produto' in src_lower or 'banner' in src_lower) and ('.jpg' in src_lower or '.png' in src_lower or '.webp' in src_lower):
                                  if src not in imagens_validas:
                                       imagens_validas.append(src)
                
                # Se achou fotos validas, pega a primeira (que geralmente é a main view montada na loja vue)
                if imagens_validas:
                     produto['img'] = imagens_validas[0]
                     
                # === Características Secundárias (Features) ===
                # Pegando linhas de lista que são razoáveis
                li_texts = page.locator('li').all_inner_texts()
                valid_features = [text.strip() for text in li_texts if len(text.strip()) > 5 and len(text.strip()) < 80 and '\n' not in text]
                # Pula os que parecem navbar e rodapé
                valid_features = [f for f in valid_features if 'Login' not in f and 'Contato' not in f and 'Sobre' not in f]
                produto['features'] = valid_features[:4]

                # === Especificações Técnicas (Tabelas Html) ===
                tds = page.locator('td').all_inner_texts()
                ths = page.locator('th').all_inner_texts()
                # Construção ingênua mas efetiva baseada em linhas de tabela se existirem no DOM
                rows = page.locator('tr')
                rcount = rows.count()
                for r in range(rcount):
                    row_locator = rows.nth(r)
                    cols = row_locator.locator('td, th').all_inner_texts()
                    if len(cols) == 2:
                        key = cols[0].strip().replace(':', '')
                        val = cols[1].strip()
                        if len(key) > 1 and len(key) < 40 and val:
                             produto['especificacoesTecnicas'][key] = val

                print(f" [+] Puxou: {produto['titulo']}")
                print(f" [+] Imagem: {produto['img']}")
                print(f" [+] Specs Qtd: {len(produto['especificacoesTecnicas'].keys())}")
                
                resultados.append(produto)

            except Exception as e:
                print(f" Erro pesado no url {url}: {e}")
                
        browser.close()
    return resultados

if __name__ == "__main__":
    test_urls = [
         "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21",
         "https://www.rinnai.com.br/produto/caldeira-mural-rinnai-reu-b300-fea",
         "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-c40"
    ]
    
    print("Iniciando scraping por navegador headless (Playwright)...")
    dados = scrape_rinnai_playwright_urls(test_urls)
    
    with open("dados_raspados_playwright.json", "w", encoding="utf-8") as f:
         json.dump(dados, f, indent=4, ensure_ascii=False)
         
    print(f"\nFinalizado! {len(dados)} produtos raspados com sucesso e guardados.")
