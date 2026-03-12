import time
import re
import random
import requests
import urllib.parse
from bs4 import BeautifulSoup

# Headers robustos para Bypass basico (simulando um user-agent popular)
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1'
}

def search_ddg_html_requests(query):
    print(f"Buscando via DDG HTML (Requests): {query}")
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    
    try:
        # A API de requests as vezes eh mais facil de setar headers que o urllib nativo
        # Alem disso podemos usar headers aleatorios
        session = requests.Session()
        res = session.post("https://html.duckduckgo.com/html/", data={'q': query}, headers=headers, timeout=10)
        
        if res.status_code == 200:
            soup = BeautifulSoup(res.text, 'html.parser')
            # O html ddg antigo carrega mídias em tags a com classe 'image' ou parametros url
            for link in soup.find_all('img'):
                src = link.get('src')
                # Ignorar rastreadores
                if src and "duckduckgo.com" not in src and src.startswith("http"):
                     print(f" [HTML] Possivel thumb: {src}")
                     
            for anchor in soup.find_all('a'):
                href = anchor.get('href')
                if href and ("jpg" in href.lower() or "png" in href.lower() or "webp" in href.lower()):
                    # Limpar as URLS redirect do duckduck
                    clean_url = urllib.parse.unquote(href.split("rut=")[-1] if "rut=" in href else href)
                    if clean_url.startswith("http"):
                        print(f" [HTML-Anchor] Encontrada img limpa candidata: {clean_url}")
                        return clean_url
                        
        else:
             print(f"Erro {res.status_code} na soliciacao")
                        
    except Exception as e:
        print(f"  Erro no request para '{query}': {e}")
        
    return None
    
# Teste de Fallback usando a busca do Bing qye costuma ser mais permissiva com crawlers estaticos baseados em requests
def search_bing_images(query):
    print(f"Buscando via BING HTML: {query}")
    url = f"https://www.bing.com/images/search?q={urllib.parse.quote(query)}"
    
    try:
        res = requests.get(url, headers=headers, timeout=10)
        if res.status_code == 200:
            # O Bing renderiza imgs de boa qualidade na tag a com classe 'iusc'
            match = re.search(r'm=\"\{.*?(?:murl|purl)\\\":\\\"(http[^\\"]+)', res.text)
            if match:
                 img_url = match.group(1).replace('\\/','/')
                 print(f" [BING] Sucesso absoluto! URL alta qualidade: {img_url}")
                 return img_url
                 
            # Fallback 2 do bing
            matches = re.findall(r'https?://[^\s\"\']+(?:\.jpg|\.png|\.webp)', res.text, re.IGNORECASE)
            valid = [m for m in matches if 'bing.net' not in m and 'th?' not in m]
            if valid:
                 print(f" [BING-Fallback] Achei na regex direta: {valid[0]}")
                 return valid[0]
        else:
            print(f"Erro bing: {res.status_code}")
    except Exception as e:
        print(f"Erro no bing request: {e}")
        
    return None

if __name__ == "__main__":
    search_ddg_html_requests("Ar Condicionado Split Cassete Agratto 36.000 Btus Frio")
    search_bing_images("bomba pressurizadora rowa press 410vf")
