import requests
from bs4 import BeautifulSoup
import json
import time

def scrape_rinnai_produto(url):
    print(f"Buscando dados em: {url}")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        produto = {
            "titulo": "Sem Título",
            "desc": "",
            "img": "",
            "features": [],
            "especificacoesTecnicas": {}
        }
        
        # 1. TÍTULO
        # No site da rinnai, costuma ser h1 com class title-product ou simplesmente o unico h1 main
        h1 = soup.find('h1')
        if h1:
            produto['titulo'] = h1.text.strip()
            
        # 2. IMAGEM COMERCIAL PRINCIPAL
        # Estratégia: Pegar a primeira imagem grande da galeria e garantir que não é "corte" nem "diagrama"
        # Rinnai as vezes usa WooCommerce ou custom divs (.woocommerce-product-gallery__image)
        imagens_validas = []
        todas_imagens = soup.find_all('img')
        
        for img in todas_imagens:
            src = ""
            if 'src' in img.attrs:
                src = img['src']
            elif 'data-src' in img.attrs:
                 src = img['data-src'] # Lazy loading
                 
            # Filtros de exclusão (ignorar ícones, favicons, selos inmetro, esquemas de instalação)
            if src and all(term not in src.lower() for term in ['corte', 'diagrama', 'icon', 'logo', 'selo', 'inmetro', 'dimens', 'svg', 'thumb']):
                # Se parecer uma imagem de produto (tamanho razoável na url ou estar na div de produto)
                if 'produto' in src.lower() or 'upload' in src.lower() or 'catalog' in src.lower():
                     if src not in imagens_validas:
                         # Resolver URL relativa
                         if src.startswith('/'):
                             src = "https://www.rinnai.com.br" + src
                         imagens_validas.append(src)
        
        if imagens_validas:
             produto['img'] = imagens_validas[0] # Pega a primeira que passou no filtro duro
             
        # 3. DESCRIÇÃO RICA
        # Textos das divs de descrição ou primeiro paragrafo longo
        desc_div = soup.find('div', class_=lambda x: x and 'description' in x.lower())
        if desc_div:
            # Pegar so texto limpo
            produto['desc'] = ' '.join([p.text.strip() for p in desc_div.find_all('p') if p.text.strip()])
        else:
            # Fallback: Procura o primeiro <p> depois do H1 que tenha mais de 50 caracteres
            if h1:
                proximo = h1.find_next('p')
                while proximo:
                     texto = proximo.text.strip()
                     if len(texto) > 50:
                          produto['desc'] = texto
                          break
                     proximo = proximo.find_next('p')
                     
        if not produto['desc']:
             produto['desc'] = "Descrição detalhada do produto."
             
        # 4. CARACTERÍSTICAS PRINCIPAIS (Features para os cards)
        # Geralmente em listas <ul> na aba de detalhes
        listas = soup.find_all('ul')
        for ul in listas:
            items = ul.find_all('li')
            # Se for uma lista que cada item tem algumas palavras, provavel ser features
            if len(items) >= 3 and len(items[0].text.strip()) > 5:
                 # Evitar menus de navegação (que tem links curtos)
                 if not ul.find('a', class_='nav-link'):
                     for li in items[:5]: # Pegar ate 5 props
                          texto_li = li.text.strip()
                          if len(texto_li) > 4 and len(texto_li) < 100:
                              produto['features'].append(texto_li)
                 if produto['features']:
                     break
                     
        # 5. ESPECIFICAÇÕES TÉCNICAS (Para a página de detalhes profunda)
        # Procurar tabelas técnicas
        tabelas = soup.find_all('table')
        if tabelas:
            # Pega a primeira/maior tabela do HTML
            tabela = max(tabelas, key=lambda t: len(t.find_all('tr')))
            linhas = tabela.find_all('tr')
            for row in linhas:
                colunas = row.find_all(['th', 'td'])
                if len(colunas) == 2:
                    chave = colunas[0].text.strip().replace(':', '')
                    valor = colunas[1].text.strip()
                    if chave and valor and len(chave) < 40:
                        produto['especificacoesTecnicas'][chave] = valor
                        
        return produto

    except Exception as e:
        print(f"Erro ao processar {url}: {e}")
        return None

if __name__ == "__main__":
    links_para_testar = [
        "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21",
        "https://www.rinnai.com.br/produto/caldeira-mural-rinnai-reu-b300-fea"
    ]
    
    resultados = []
    
    for idx, link in enumerate(links_para_testar):
        print("-" * 50)
        dados = scrape_rinnai_produto(link)
        if dados:
             # Add propriedades do sistema frontend
             dados['id'] = 400 + idx
             dados['categoria'] = 'aquecedores' if 'aquecedor' in link else 'caldeiras'
             dados['categoriaLabel'] = 'Aquecedor' if 'aquecedor' in link else 'Caldeiras'
             dados['destaque'] = idx == 0 # Teste de colocar um como destaque
             
             resultados.append(dados)
             print(f"Sucesso: {dados['titulo']}")
             print(f"IMG selecionada: {dados['img']}")
             print(f"Specs encontradas: {len(dados['especificacoesTecnicas'].keys())}")
        
        time.sleep(1) # delay para nao sobrecarregar servidor 
        
    with open('dados_raspados_rinnai_v2.json', 'w', encoding='utf-8') as f:
         json.dump(resultados, f, indent=4, ensure_ascii=False)
    
    print("-" * 50)
    print("Scraping V2 finalizado. Arquivo gerado.")
