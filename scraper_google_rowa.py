import re
import time
import urllib.parse
from playwright.sync_api import sync_playwright

PRODUTOS_JS_FILE = "produtos.js"

def buscar_google_images(page, query):
    print(f"Buscando: {query}")
    url = f"https://www.google.com/search?tbm=isch&q={urllib.parse.quote(query)}"
    
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=15000)
    except Exception as e:
        print(f"Erro ao carregar a página: {e}")
        return None
        
    time.sleep(1)  # Aguardar imagens carregarem
    
    # 1. Tentar pegar as imagens ricas (ignorar os logos e gstatics pequenos de cache do Google)
    # Procurar por `div` de imagens que contém o link original. A classe `rg_i` geralmente é para as imagens da grade
    img_elements = page.locator('img.rg_i').all()
    
    for img in img_elements:
        try:
            # Pega o atributo data-src (frequentemente usado pelo Google images para base64 longa) ou src
            src = img.get_attribute("src")
            if not src:
                src = img.get_attribute("data-src")
                
            if src:
                # Se for Base64 (ignora as tiny < 100 char e pega a boa qualidade embutida)
                if src.startswith("data:image"):
                    if len(src) > 1000:  
                        print(" -> [Base64 HQ Encontrada]")
                        return src
                # Se for um JPG ou WEBP publico
                elif src.startswith("http") and "gstatic" not in src:
                    print(f" -> [URL Encontrada]: {src[:60]}")
                    return src
        except:
            continue
            
    # Fallback rigoroso se falhar
    imgs = page.locator("img").all()
    for img in imgs:
        try:
            src = img.get_attribute("src") or img.get_attribute("data-src")
            if src and (src.startswith("http") and "gstatic" not in src) or src.startswith("data:image"):
                if len(src) > 500:  # Imagem com no minimo alguma qualidade
                     print(f" -> [Fallback Encontrado]")
                     return src
        except:
            continue
            
    return None

def process_js_file_rowa():
    print(f"Iniciando Extração ROWA via Playwright Local...")
    with open(PRODUTOS_JS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    bloco_regex = r'(\{\s*(?:id|\"id\"):\s*\d+.*?\})'
    blocos = re.findall(bloco_regex, content, re.DOTALL)
    count_mod = 0
    novo_content = content
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Fingerprint simples para evitar capchas de imediato
        page = browser.new_page(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            viewport={"width": 1280, "height": 720}
        )
        
        for b_idx, bloco in enumerate(blocos):
            # Identificar items Rowa (seja pela string ou classe de bombas)
            if "Bombas ROWA" in bloco or "Rowa" in bloco or "ROWA" in bloco:
                 titulo_match = re.search(r'(?:titulo|\"titulo\"):\s*[\'"]([^\'"]+)[\'"]', bloco)
                 if titulo_match:
                     titulo = titulo_match.group(1)
                     
                     if titulo.strip().lower() in ["produto", "produtos"]:
                          continue
                          
                     if "350E" in titulo:
                         # Usuário informou que o 350E deu certo, pulamos
                         print(f"Pulando {titulo} (Já está correto)")
                         continue 

                     # Construir busca hiper especifica (o modelo e as palavras matadoras)
                     query = f"bomba pressurizadora rowa {titulo} fundo branco"

                     img_url = buscar_google_images(page, query)
                     if img_url:
                         bloco_novo = re.sub(r"(?:img|\"img\"):\s*[\'\"][^\'\"]*[\'\"]", lambda m: f"img: '{img_url}'", bloco)
                         novo_content = novo_content.replace(bloco, bloco_novo)
                         count_mod += 1
                 
                 # Pausa humana para não estourar limite do bot no google
                 time.sleep(1)
        
        browser.close()
                 
    with open(PRODUTOS_JS_FILE, "w", encoding="utf-8") as f:
        f.write(novo_content)
        
    print(f"================================\nConcluído. {count_mod} imagens Rowa atualizadas via Engine Imagens.\n================================")

if __name__ == "__main__":
    process_js_file_rowa()
