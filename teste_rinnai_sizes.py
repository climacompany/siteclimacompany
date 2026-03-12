from playwright.sync_api import sync_playwright

def find_product_images(url):
    print(f"=== {url} ===")
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page()
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(3000)
        
        script = """
        () => {
            let res = [];
            document.querySelectorAll('img').forEach(img => {
                let w = img.naturalWidth;
                let h = img.naturalHeight;
                let src = img.src || img.dataset.src;
                if (src && src.includes('rinnai.com') && w > 400 && h > 400) {
                   res.push({src: src, w: w, h: h});
                }
            });
            return res;
        }
        """
        imgs = page.evaluate(script)
        for i in imgs:
            print(f"w: {i['w']}, h: {i['h']}, src: {i['src']}")
        b.close()

if __name__ == '__main__':
    find_product_images("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15")
    find_product_images("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m15-s")
    find_product_images("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21")
    find_product_images("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e17")
    find_product_images("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-c40")
    find_product_images("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-m20")
