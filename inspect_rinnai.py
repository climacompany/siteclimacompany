import requests
from bs4 import BeautifulSoup

url = "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21"
headers = {'User-Agent': 'Mozilla/5.0'}

r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.text, 'html.parser')

print("H1 disponíveis:")
for h1 in soup.find_all('h1'):
    print(f"- {h1.text.strip()} (Classes: {h1.get('class', [])})")

print("\nDivs de características:")
for div in soup.find_all('div', class_=lambda x: x and ('caracteristica' in x.lower() or 'spec' in x.lower() or 'feature' in x.lower() or 'detalhe' in x.lower())):
    print(div.get('class'))

print("\nTabelas:")
for t in soup.find_all('table'):
    print(f"Tabela com {len(t.find_all('tr'))} linhas. Classes: {t.get('class')}")
    
print("\nPrimeiras 10 Imagens grandes:")
imgs = soup.find_all('img')
count = 0
for img in imgs:
    src = img.get('src') or img.get('data-src') or ''
    if src and len(src) > 10 and 'logo' not in src.lower() and 'icon' not in src.lower():
         print(f"- {src} (alt={img.get('alt','')})")
         count +=1
         if count > 10: break
