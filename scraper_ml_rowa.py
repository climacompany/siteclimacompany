import re
import time
import cloudscraper
import urllib.parse
from bs4 import BeautifulSoup

PRODUTOS_JS_FILE = "produtos.js"
OUTPUT_FILE = "produtos.js"

scraper = cloudscraper.create_scraper(
    browser={
        'browser': 'chrome',
        'platform': 'windows',
        'desktop': True
    }
)

def buscar_imagem_mercadolivre_rowa(query, retries=2):
    print(f"[{time.strftime('%H:%M:%S')}] ML Search Rowa: {query}")
    
    # Adicionar "Bomba Rowa" na frente limpa qualquer confusao do algoritmo no ML
    query_opt = f"Bomba Rowa {query}" 
    url = f"https://lista.mercadolivre.com.br/{urllib.parse.quote(query_opt)}"
    
    for attempt in range(retries):
        try:
            res = scraper.get(url, timeout=12)
            if res.status_code == 200:
                soup = BeautifulSoup(res.text, 'html.parser')
                
                imgs = soup.find_all('img', class_=re.compile(r'(poly-component__|ui-search-)'))
                linhas_de_fuga = soup.find_all('img')
                
                all_imgs = imgs + linhas_de_fuga
                
                for img in all_imgs:
                    src = img.get('data-src') or img.get('src')
                    if src and src.startswith("http") and "data:image" not in src and "mercadolivre.com" in src:
                        # Extrair a versão em Alta Qualidade (HQ) 2X para catálogos do Mercado Livre
                        if "http2.mlstatic.com/D_NQ_NP_" in src or "http2.mlstatic.com/D_Q_NP_" in src:
                            url_hq = src.replace("-I.jpg", "-O.jpg").replace("-I.webp", "-O.webp")
                            print(f"   -> Link Válido HQ Rowa: {url_hq}")
                            return url_hq
                
                print("   -> Nenhuma imagem valida recuperada no DOM.")
            else:
                 print(f"   Http Erro ML: {res.status_code}")
                 
        except Exception as e:
            print(f"   Erro Fetch: {e}")
            
        time.sleep(1)
        
    return None

def process_js_file_rowa():
    print(f"Iniciando Extração de Alta Qualidade ROWA via ML...")
    with open(PRODUTOS_JS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    bloco_regex = r'(\{\s*(?:id|\"id\"):\s*\d+.*?\})'
    blocos = re.findall(bloco_regex, content, re.DOTALL)
    
    count_mod = 0
    novo_content = content
    
    for b_idx, bloco in enumerate(blocos):
        # Identificar items Rowa que tiveram as imagens baseadas no scrap falho base64 ou vazio
        if "Bombas ROWA Brasil" in bloco or "Rowa" in bloco or "ROWA" in bloco:
             titulo_match = re.search(r'(?:titulo|\"titulo\"):\s*[\'"]([^\'"]+)[\'"]', bloco)
             if titulo_match:
                 titulo = titulo_match.group(1)
                 
                 # Ignorar alguns genericos
                 if titulo.strip().lower() in ["produto", "produtos"]:
                      continue
                      
                 img_url = buscar_imagem_mercadolivre_rowa(titulo)
                 if img_url:
                     # Substitui qualquer URL na tag img pela nova injetada
                     bloco_novo = re.sub(r"(?:img|\"img\"):\s*[\'\"][^\'\"]*[\'\"]", lambda m: f"img: '{img_url}'", bloco)
                     novo_content = novo_content.replace(bloco, bloco_novo)
                     count_mod += 1
                     print(f"   -> [INJETADO HQ ROWA] Total: {count_mod}")
                     
                 time.sleep(1.5)
                 
    with open(PRODUTOS_JS_FILE, "w", encoding="utf-8") as f:
        f.write(novo_content)
        
    print(f"\n============================================\nVarredura ROWA Concluída. {count_mod} imagens de e-commerce raspadas em HQ!\n============================================")

if __name__ == "__main__":
    process_js_file_rowa()
