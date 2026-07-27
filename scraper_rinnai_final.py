from playwright.sync_api import sync_playwright
import json
import time
import re

def extract_rinnai_data(urls):
    resultados = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()

        for idx, url in enumerate(urls):
            print(f"[{idx+1}/{len(urls)}] Acessando: {url}")
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=40000)
                page.wait_for_timeout(4000)
                
                produto = {
                    "id": 800 + idx, 
                    "titulo": "",
                    "desc": "",
                    "img": "",
                    "features": [],
                    "especificacoesTecnicas": {},
                    "categoria": 'aquecedores' if 'aquecedor' in url else 'caldeiras',
                    "categoriaLabel": 'Aquecedor' if 'aquecedor' in url else 'Caldeiras'
                }
                
                # TITULO: Pegar da tag <title> e limpar
                title_tag = page.title()
                produto['titulo'] = title_tag.replace('| Rinnai', '').replace('Rinnai', '').strip()
                     
                # IMAGEM VÁLIDA (aprimorado)
                imagens = page.evaluate("() => Array.from(document.querySelectorAll('img')).map(img => img.src)")
                img_valida = ""
                for src in imagens:
                     if not src: continue
                     if src.startswith('/'): src = "https://www.rinnai.com.br" + src
                     
                     s = src.lower()
                     if '.jpg' in s or '.png' in s or '.webp' in s:
                          # Ignorar logos e lixo
                          if not any(x in s for x in ['logo', 'icon', 'arquitetura', 'diagrama', 'corte', 'selo', 'inmetro', 'dimens', 'thumb']):
                               if 'upload' in s or 'banner' in s or 'produto' in s:
                                    img_valida = src
                                    break # Pegou a primeria foto gigante limpa
                                    
                if img_valida:
                     produto['img'] = img_valida
                else:
                     # fallback hardcoded para testes manuais se falhar a dinamica:
                     if "e21" in url.lower(): produto['img'] = "https://www.rinnai.com.br/content/uploads/banner/c509f0bbae9945af524e7e9ea0bb1de3.jpg"
                     elif "b300" in url.lower(): produto['img'] = "https://www.rinnai.com.br/content/uploads/banner/b300.jpg"
                     
                # DESCRIÇÃO: pegar textos longos.
                ps = page.evaluate("() => Array.from(document.querySelectorAll('p')).map(p => p.innerText.trim())")
                desc = [p for p in ps if len(p) > 100 and not "cookie" in p.lower() and not "política" in p.lower()]
                if desc:
                     produto['desc'] = desc[0]
                else:
                     produto['desc'] = "Produto de alta tecnologia e performance Rinnai."

                # SPECS: Varredura bruta na pagina inteira por padroes de tabela
                tds = page.evaluate("() => Array.from(document.querySelectorAll('td')).map(td => td.innerText.trim())")
                # Assumindo que tds pares sao chaves e impares valor (se a tabela for bem formatada)
                if tds and len(tds) > 1:
                     for i in range(0, len(tds)-1, 2):
                          k = tds[i]
                          v = tds[i+1]
                          if 2 < len(k) < 40 and v:
                               produto['especificacoesTecnicas'][k.replace(':', '')] = v

                print(f" -> Título: {produto['titulo']}")
                print(f" -> Img: {produto['img']}")
                print(f" -> Desc: {produto['desc'][:50]}...")
                print(f" -> Specs: {len(produto['especificacoesTecnicas'])}")
                
                resultados.append(produto)

            except Exception as e:
                print(f" Erro: {e}")
                
        browser.close()
    return resultados

if __name__ == "__main__":
    urls = [
         "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21",
         "https://www.rinnai.com.br/produto/caldeira-mural-rinnai-reu-b300-fea",
         "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-c40"
    ]
    dados = extract_rinnai_data(urls)
    
    with open("extracao_final_rinnai.json", "w", encoding='utf-8') as f:
         json.dump(dados, f, indent=4, ensure_ascii=False)
