import requests
from bs4 import BeautifulSoup

def fetch_catalog():
    print("Buscando catálogo Rinnai...")
    headers = {'User-Agent': 'Mozilla/5.0'}
    r = requests.get('https://www.rinnai.com.br/produtos/aquecimento-a-gas', headers=headers)
    soup = BeautifulSoup(r.text, 'html.parser')
    
    # Tentando achar vitrines
    prods = soup.find_all('div', class_=lambda c: c and 'product' in c.lower())
    for p in prods:
        a = p.find('a')
        img = p.find('img')
        if a and img:
            print(a.get('href', ''), "=>", img.get('src', '') or img.get('data-src', ''))
            
    # Se não achar, procura todas as imagens
    if not prods:
        print("Trazendo img pura...")
        for img in soup.find_all('img'):
            src = img.get('data-src') or img.get('src')
            alt = img.get('alt', '')
            if src and 'upload' in src:
                 print(alt, "=>", src)

if __name__ == '__main__':
    fetch_catalog()
