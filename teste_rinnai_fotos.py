import requests
from bs4 import BeautifulSoup
import re

urls = [
    "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15",
    "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m20",
    "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e17",
    "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-c40"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for url in urls:
    print(f"--- {url} ---")
    try:
        r = requests.get(url, headers=headers)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # Meta og:image
        og = soup.find('meta', property='og:image')
        if og:
            print("OG:IMAGE ->", og['content'])
            
        imgs = soup.find_all('img')
        for idx, img in enumerate(imgs):
            src = img.get('src') or img.get('data-src') or ''
            alt = img.get('alt', '')
            if src and 'upload' in src and 'banner' not in src:
               print(f"IMG {idx}: {src}")
    except Exception as e:
        print("Erro", e)
