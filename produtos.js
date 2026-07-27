/**
 * Clima Company - Produtos Logic (Dynamic Edition)
 */

let produtosData = [];

// 1. CARREGAMENTO DOS DADOS
async function loadProdutos() {
    try {
        const response = await fetch('/dados/produtos.json');
        produtosData = await response.json();
        
        // Determina o filtro inicial (se houver algum botão ativo)
        const activeFilterBtn = document.querySelector('.filter-btn.active');
        const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
        
        if (currentFilter === 'all') {
            renderProducts(produtosData);
        } else {
            const filtered = produtosData.filter(p => p.categoria === currentFilter);
            renderProducts(filtered);
        }
    } catch (e) {
        console.error("Erro ao carregar produtos.json:", e);
        if (productGrid) {
            productGrid.innerHTML = '<div class="no-products">Erro ao carregar catálogo. Por favor, tente novamente mais tarde.</div>';
        }
    }
}

// 2. ELEMENTOS DA UI
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// 3. RENDERIZAÇÃO
const renderProducts = (produtos) => {
    if (!productGrid) return; 

    // Add fade out animation
    productGrid.classList.add('fade-out');

    setTimeout(() => {
        productGrid.innerHTML = '';

        if (!produtos || produtos.length === 0) {
            productGrid.innerHTML = '<div class="no-products">Nenhum produto encontrado nesta categoria no momento.</div>';
        } else {
            produtos.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'product-card reveal active';
                card.style.cursor = 'pointer';
                card.onclick = (e) => {
                    if (!e.target.closest('.btn-product-cta')) {
                        window.location.href = `produto-detalhe.html?id=${prod.id}`;
                    }
                };

                const featuresHtml = prod.features ? prod.features.map(f => `<li>${f}</li>`).join('') : '';

                // WhatsApp config fallback
                const contactNum = window.WHATSAPP_CONFIG ? window.WHATSAPP_CONFIG.whatsapp_number : '5512996812419';
                const msg = encodeURIComponent(`Olá Clima Company! Gostaria de fazer um orçamento ou saber mais sobre o produto: ${prod.titulo}.`);
                const waLink = `https://wa.me/${contactNum}?text=${msg}`;

                const destaqueSelo = prod.destaque ? `<div style="position: absolute; top: 0; left: 0; background: red; color: white; padding: 0.25rem 1rem; font-weight: bold; border-bottom-right-radius: 8px; z-index: 3;">DESTAQUE</div>` : '';

                card.innerHTML = `
                    <div class="product-image-wrapper">
                        ${destaqueSelo}
                        <span class="product-category-badge">${prod.categoriaLabel || ''}</span>
                        <img src="${prod.img || 'imagens/logo.png'}" alt="${prod.titulo}" class="product-image" onerror="this.src='imagens/logo.png'">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${prod.titulo}</h3>
                        <p class="product-desc">${prod.desc || ''}</p>
                        <ul class="product-features">
                            ${featuresHtml}
                        </ul>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
                            <a href="produto-detalhe.html?id=${prod.id}" class="btn-product-cta" style="flex: 1; text-align: center; background: transparent; border: 1px solid var(--text-light); color: var(--text-color);">Ver Detalhes</a>
                            <a href="${waLink}" target="_blank" class="btn-product-cta btn-comprar" style="flex: 1; text-align: center;">Comprar</a>
                        </div>
                    </div>
                `;

                productGrid.appendChild(card);
            });
        }

        productGrid.classList.remove('fade-out');
    }, 300);
};

// 4. LÓGICA DE FILTRAGEM
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        if (filterValue === 'all') {
            renderProducts(produtosData);
        } else {
            const filtered = produtosData.filter(p => p.categoria === filterValue);
            renderProducts(filtered);
        }
    });
});

// 5. THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const iconSun = themeToggle.querySelector('.icon-sun');
    const iconMoon = themeToggle.querySelector('.icon-moon');

    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';

        if (isDark) {
            html.setAttribute('data-theme', 'light');
            if (iconSun) iconSun.style.display = 'none';
            if (iconMoon) iconMoon.style.display = 'block';
        } else {
            html.setAttribute('data-theme', 'dark');
            if (iconSun) iconSun.style.display = 'block';
            if (iconMoon) iconMoon.style.display = 'none';
        }
    });
}

// 6. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty('--theme-color', 'var(--color-brand-accent)');

    // Carrega produtos dinamicamente
    loadProdutos();

    const navbar = document.getElementById('navbar');
    const waFloat = document.getElementById('wa-float');

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        if (waFloat) {
            if (window.scrollY > 300) {
                waFloat.classList.add('visible');
            } else {
                waFloat.classList.remove('visible');
            }
        }
    });
});
