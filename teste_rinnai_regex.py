import requests
import re
import json

urls = {
    "M15": "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15",
    "M15 S": "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15-s",
    "E21": "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21",
    "E17": "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e17",
    "C40": "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-c40",
    "M20": "https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m20"
}

headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in urls.items():
    print(f"--- {name} ---")
    r = requests.get(url, headers=headers)
    html = r.text
    
    # Busca por padrões rinnai.com.br/.../.jpg
    links = re.findall(r'"(https://www\.rinnai\.com\.br/content/uploads/[^"]+\.(?:jpg|png|webp))"', html)
    
    # Filtro
    validos = [l for l in links if 'banner' not in l and 'icon' not in l and 'logo' not in l and 'categoria' not in l]
    # Pega imagens unicas
    validos = list(set(validos))
    
    for v in validos[:3]:
        print(v)
