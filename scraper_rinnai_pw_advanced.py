from playwright.sync_api import sync_playwright
import json
import time

def scrape_rinnai_pw_advanced(urls):
    resultados = []
    
    with sync_playwright() as p:
        # Args anti-deteção básicos
        browser = p.chromium.launch(
            headless=True,
            args=["--disable-blink-features=AutomationControlled"]
        )
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            viewport={"width": 1920, "height": 1080}
        )
        
        # Opcional: Adicionar script para esconder o webdriver
        context.add_init_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
            
        page = context.new_page()

        for idx, url in enumerate(urls):
            print(f"[{idx+1}/{len(urls)}] Acessando: {url}")
            try:
                # 'domcontentloaded' inves de 'networkidle' pra garantir que a pagina abre, e fazemos o wait manual
                page.goto(url, wait_until="domcontentloaded", timeout=45000)
                
                # Rolar a página para engatilhar lazy loads
                page.evaluate("window.scrollTo(0, document.body.scrollHeight/2)")
                page.wait_for_timeout(2000)
                page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                page.wait_for_timeout(3000)
                
                # Tenta forçar a espera do H1 principal do produto
                try:
                     page.wait_for_selector("h1", timeout=10000)
                except:
                     print(" Warning: H1 não apareceu em 10s, prosseguindo...")
                     
                produto = {
                    "id": 600 + idx, 
                    "titulo": "",
                    "desc": "",
                    "img": "",
                    "features": [],
                    "especificacoesTecnicas": {},
                    "categoria": 'aquecedores' if 'aquecedor' in url else 'caldeiras',
                    "categoriaLabel": 'Aquecedor' if 'aquecedor' in url else 'Caldeiras'
                }
                
                # Título (Usa evaluate para pegar direto do browser sem exceptions locator)
                titulos = page.evaluate("() => Array.from(document.querySelectorAll('h1')).map(h => h.innerText)")
                if titulos:
                     produto['titulo'] = sorted(titulos, key=len, reverse=True)[0] # Pega o mais longo
                     
                # Descricao Livre
                paragrafos = page.evaluate("() => Array.from(document.querySelectorAll('p')).map(p => p.innerText)")
                # Filtrar paragrafos tecnicos
                desc_text = [p for p in paragrafos if len(p) > 60 and "cookies" not in p.lower() and "política" not in p.lower()]
                if desc_text:
                     produto['desc'] = desc_text[0]
                     
                # Imagem - Pega todas as imagens do dom via js e filtra
                todas_imagens = page.evaluate("() => Array.from(document.querySelectorAll('img')).map(img => img.src || img.dataset.src)")
                imagens_validas = []
                for src in [s for s in todas_imagens if s]:
                     if src.startswith('/'): src = "https://www.rinnai.com.br" + src
                     
                     sl = src.lower()
                     if '.jpg' in sl or '.png' in sl or '.webp' in sl:
                          # Filtros de block super rigidos pra o que NÃO queremos:
                          if 'logo' not in sl and 'icon' not in sl and 'selo' not in sl and 'diagrama' not in sl \
                             and 'corte' not in sl and 'inmetro' not in sl and 'dimensoes' not in sl:
                               # Garante tamanho/formato real de foto da base
                               if 'upload' in sl or 'produto' in sl or 'banner' in sl:
                                    if src not in imagens_validas:
                                         imagens_validas.append(src)
                                         
                if imagens_validas:
                     produto['img'] = imagens_validas[0]
                     
                # Features - Itens de lista
                linhas = page.evaluate("() => Array.from(document.querySelectorAll('li')).map(li => li.innerText)")
                valid_features = [l for l in linhas if l and 5 < len(l) < 80 and '\n' not in l]
                # Limpa menus
                valid_features = [f for f in valid_features if not any(x in f.lower() for x in ['login', 'contato', 'sobre', 'menu', 'atendimento'])]
                produto['features'] = valid_features[:6]
                
                # Tabelas complexas JavaScript-renderizadas
                # Pega tds aos pares se estiverem na aba tecnica
                trs_textos = page.evaluate(
"""() => {
    let res = [];
    document.querySelectorAll('tr').forEach(tr => {
        let cols = Array.from(tr.querySelectorAll('td, th'));
        if(cols.length === 2) {
             res.push([cols[0].innerText.trim(), cols[1].innerText.trim()]);
        }
    });
    return res;
}"""
                )
                
                for k, v in trs_textos:
                     # limpa keys estranhas (menus mal parseados)
                     if len(k) < 50 and v:
                          produto['especificacoesTecnicas'][k.replace(':','')] = v

                print(f" -> Título: {produto['titulo']}")
                print(f" -> Imagem Final: {produto['img']}")
                print(f" -> Qtd Specs Técnicas: {len(produto['especificacoesTecnicas'].keys())}")
                print("-" * 30)
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
    
    print("Iniciando scraping por navegador headless AVANÇADO (By-pass & DOM Sync)...")
    dados = scrape_rinnai_pw_advanced(test_urls)
    
    with open("dados_raspados_pw_avancado.json", "w", encoding="utf-8") as f:
         json.dump(dados, f, indent=4, ensure_ascii=False)
         
    print(len(dados), "Produtos finalizados e salvos no json avanzado.")
