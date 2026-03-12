from playwright.sync_api import sync_playwright

def img_produto(url):
    print(f"=== {url} ===")
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page()
        page.goto(url, wait_until="domcontentloaded")
        page.wait_for_timeout(3000)
        imgs = page.evaluate("() => Array.from(document.querySelectorAll('img')).map(img => img.src || img.dataset.src)")
        for src in imgs:
            if src and '/img-produto/' in src and 'thumb' not in src:
                print(src)
        b.close()

if __name__ == '__main__':
    img_produto("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15")
    img_produto("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15-s")
    img_produto("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21")
    img_produto("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-c40")
