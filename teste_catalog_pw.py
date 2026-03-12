from playwright.sync_api import sync_playwright

def get_catalog():
    print("Iniciando varredura no catálogo SPA...")
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page()
        page.goto("https://www.rinnai.com.br/produtos/aquecimento-a-gas", wait_until="networkidle")
        page.wait_for_timeout(4000)
        
        # O SPA carrega os cards em anchors ou divs iterativas
        script = """
        () => {
            let res = [];
            document.querySelectorAll('a').forEach(a => {
                let img = a.querySelector('img');
                if (img) {
                    let title = a.innerText.trim();
                    let src = img.src || img.dataset.src;
                    if (title && src && src.includes('img-produto')) {
                        res.push(title + " === " + src);
                    }
                }
            });
            return res;
        }
        """
        cards = page.evaluate(script)
        for c in set(cards):
            print(c)
            
        b.close()

if __name__ == '__main__':
    get_catalog()
