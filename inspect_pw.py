from playwright.sync_api import sync_playwright

def inspect_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://www.rinnai.com.br/produto/aquecedor-de-agua-a-gas-e21", wait_until="networkidle")
        page.wait_for_timeout(3000)
        
        with open("rinnai_dom.html", "w", encoding="utf-8") as f:
            f.write(page.content())
            
        print("DOM salvo em rinnai_dom.html")
        browser.close()

inspect_page()
