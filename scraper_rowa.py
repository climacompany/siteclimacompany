import re
import time
from playwright.sync_api import sync_playwright
import urllib.parse

PRODUTOS_JS_FILE = "produtos.js"

def buscar_imagem_google_pw(page, query):
    print(f"[{time.strftime('%H:%M:%S')}] Pesquisando Google PW: {query}")
    query_buscada = f"{query} bomba fundo branco"
    
    url = f"https://www.google.com/search?tbm=isch&q={urllib.parse.quote(query_buscada)}"
    
    try:
        page.goto(url, wait_until="networkidle", timeout=20000)
        imgs = page.locator("img").all()
        for idx in range(min(15, len(imgs))):
             src = imgs[idx].get_attribute('src') or imgs[idx].get_attribute('data-src') or imgs[idx].get_attribute('data-ils')
             if src and ("http" in src or "data:image/jpeg;base64" in src or "data:image/png;base64" in src):
                 if "branding/googlelogo" not in src and "gstatic.com/images" not in src and len(src) > 100:
                      print(f"   -> Encontrada foto da Bomba Rowa!")
                      return src
                      
    except Exception as e:
        print(f"  PW Erro na extracao: {e}")
        
    return None

def process_js_rowa():
    print(f"Iniciando Robô PW Específico para ROWA...")
    
    with open(PRODUTOS_JS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    bloco_regex = r'(\{\s*(?:id|\"id\"):\s*\d+.*?\})'
    blocos = re.findall(bloco_regex, content, re.DOTALL)
    
    count_mod = 0
    novo_content = content
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        
        for b_idx, bloco in enumerate(blocos):
            # Condicao especifica para produtos da ROWA que ficaram com logo
            if "rowa-400-300" in bloco:
                 titulo_match = re.search(r'(?:titulo|\"titulo\"):\s*[\'"]([^\'"]+)[\'"]', bloco)
                 if titulo_match:
                     titulo = titulo_match.group(1)
                     img_url = buscar_imagem_google_pw(page, titulo)
                     if img_url:
                         bloco_novo = re.sub(r"(?:img|\"img\"):\s*[\'\"][^\'\"]*[\'\"]", lambda m: f"img: '{img_url}'", bloco)
                         novo_content = novo_content.replace(bloco, bloco_novo)
                         count_mod += 1
                         print(f"   -> [INJETADO ROWA] {count_mod}")
                         
                     time.sleep(1.5) 
                     
        browser.close()
                     
    with open(PRODUTOS_JS_FILE, "w", encoding="utf-8") as f:
         f.write(novo_content)
        
    print(f"\n============================================\nCorreção Concluída. {count_mod} imagens ROWA processadas!\n============================================")

if __name__ == "__main__":
    process_js_rowa()
