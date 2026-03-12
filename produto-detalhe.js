document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-detail-container');

    // Obter o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Validar se existe ID
    if (!productId) {
        showError("Produto não especificado.");
        return;
    }

    // Encontrar o produto na base de dados (produtosData importado do produtos.js)
    if (typeof produtosData === 'undefined') {
        showError("Banco de dados de produtos indisponível.");
        return;
    }

    const produto = produtosData.find(p => p.id == productId);

    if (!produto) {
        showError("Produto não encontrado.");
        return;
    }

    // Renderizar Produto
    renderProductDetails(produto, container);
});

function showError(message) {
    const container = document.getElementById('product-detail-container');
    if (container) {
        container.innerHTML = `
            <div class="error-container">
                <h2>Oops!</h2>
                <p>${message}</p>
                <a href="produtos.html" class="btn-primary">Voltar aos Produtos</a>
            </div>
        `;
    }
}

function renderProductDetails(produto, container) {
    // Definir breadcrumb / título da página
    document.title = `${produto.titulo} | Clima Company`;

    // Montagem da mensagem de whatsapp
    const msg = encodeURIComponent(`Olá Clima Company! Gostaria de fazer um orçamento ou saber mais sobre o produto: ${produto.titulo}.`);
    const waLink = `https://wa.me/5512996812419?text=${msg}`;

    // Features / Especificações básicas (Lista)
    const featuresList = produto.features && produto.features.length > 0
        ? produto.features.map(f => `<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="check-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${f}</li>`).join('')
        : '<li>Nenhuma característica adicional especificada.</li>';

    // Para gerar dados técnicos mockados ricos, já que a base atual de produtos.js tem apenas 'features'
    // Na fase do scraping, o produto() JSON trará uma tabela de "especificacoesTecnicas" reais.
    let specsHtml = '';

    if (produto.especificacoesTecnicas) {
        specsHtml = `
            <h3 class="detail-section-title">Especificações Técnicas</h3>
            <div class="specs-grid">
                ${Object.entries(produto.especificacoesTecnicas).map(([key, val]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}:</span>
                        <span class="spec-value">${val}</span>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        specsHtml = `
            <h3 class="detail-section-title">Dados Técnicos Extras</h3>
            <div class="specs-grid">
                <div class="spec-item"><span class="spec-label">Categoria:</span><span class="spec-value">${produto.categoriaLabel}</span></div>
                <div class="spec-item"><span class="spec-label">Código:</span><span class="spec-value">#${produto.id}</span></div>
                <div class="spec-item"><span class="spec-label">Disponibilidade:</span><span class="spec-value text-success">Sob Consulta</span></div>
                <div class="spec-item"><span class="spec-label">Garantia:</span><span class="spec-value">Consulte</span></div>
            </div>
            <p class="specs-note"><small>*As informações técnicas aprofundadas serão integradas nesta área.</small></p>
        `;
    }

    container.innerHTML = `
        <div class="breadcrumb">
            <a href="produtos.html">Produtos</a> <span>/</span> 
            <a href="produtos.html?cat=${produto.categoria}">${produto.categoriaLabel}</a> <span>/</span> 
            <span class="current">${produto.titulo}</span>
        </div>
        
        <div class="product-detail-layout">
            <!-- Galeria / Imagem Principal -->
            <div class="detail-gallery reveal active">
                <div class="main-image-wrapper">
                    <img src="${produto.img}" alt="${produto.titulo}" id="main-product-img" onerror="this.src='imagens/logo.png'">
                    ${produto.destaque ? '<span class="detail-badge">Destaque</span>' : ''}
                </div>
                <!-- Miniaturas podem entrar aqui no futuro -->
            </div>
            
            <!-- Informações Primárias -->
            <div class="detail-info reveal active" style="transition-delay: 100ms;">
                <span class="detail-category">${produto.categoriaLabel}</span>
                <h1 class="detail-title">${produto.titulo}</h1>
                
                <div class="detail-description">
                    <p>${produto.desc}</p>
                </div>
                
                <div class="detail-features-box">
                    <h3>Principais Características</h3>
                    <ul class="detail-feature-list">
                        ${featuresList}
                    </ul>
                </div>
                
                <div class="detail-actions">
                    <a href="${waLink}" target="_blank" class="btn-solid btn-large action-wa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Comprar
                    </a>
                    <p class="action-note">Fale com um consultor especialista para dimensionamento e valores.</p>
                </div>
            </div>
        </div>
        
        <!-- Bloco de Especificações Detalhadas Inferior -->
        <div class="detail-specs-section reveal active" style="transition-delay: 200ms;">
            ${specsHtml}
        </div>
    `;
}
