from playwright.sync_api import sync_playwright

def listar_imagens(url):
    print(f"=== {url} ===")
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page()
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(3000)
        
        imgs = page.evaluate("() => Array.from(document.querySelectorAll('img')).map(img => img.src || img.dataset.src)")
        for src in imgs:
            if src and 'rinnai.com.br' in src:
               if 'banner' in src:
                   print("BANNER:", src)
               elif 'upload' in src and 'icon' not in src and 'logo' not in src:
                   print("PRODUTO:", src)
        b.close()

if __name__ == '__main__':
    listar_imagens("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15")
    listar_imagens("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21")
