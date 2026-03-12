import requests
from bs4 import BeautifulSoup
import json

def extrair_catalogo():
    # URL da loja da rinnai 
    url = "https://www.rinnai.com.br/produtos/aquecedores-de-agua-a-gas"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
    }

    print(f"Buscando catalogo em: {url}")
    try:
        session = requests.Session()
        r = session.get(url, headers=headers)
        r.raise_for_status()
        
        soup = BeautifulSoup(r.text, 'html.parser')
        produtos_encontrados = []
        
        # Inspecionar estrutura de items
        cards = soup.find_all('div', class_=lambda x: x and 'product' in x.lower() and ('item' in x.lower() or 'card' in x.lower()))
        print(f"Cards encontrados: {len(cards)}")
        
        # Testar captura do primeiro card
        if len(cards) == 0:
             # Tentativa 2: Procure tags 'a' com titulo do produto
             title_links = soup.find_all('h3')
             for h in title_links:
                  print("Achou Titulo:", h.text.strip())
        else:
             print("Exemplo card 1:", cards[0].text.strip()[:100])
             
    except Exception as e:
        print("Erro de Requisicao:", e)

if __name__ == "__main__":
    extrair_catalogo()
