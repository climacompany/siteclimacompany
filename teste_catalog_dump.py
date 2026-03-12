from playwright.sync_api import sync_playwright

def dump_catalog():
    print("Iniciando dump do catálogo (wait fixo de 8s)...")
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page()
        page.goto("https://www.rinnai.com.br/produtos/aquecimento-a-gas", wait_until="domcontentloaded")
        page.wait_for_timeout(8000)
        
        html = page.content()
        with open("rinnai_catalog_dump.html", "w", encoding='utf-8') as f:
             f.write(html)
        print("HTML salvo em rinnai_catalog_dump.html")
        b.close()

if __name__ == '__main__':
    dump_catalog()
