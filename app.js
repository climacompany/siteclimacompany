/**
 * Clima Company - Parallax App Core
 */

// --- 1. CONFIG & VARIANTS ---
const variants = [
    {
        name: "CALDEIRA",
        subtitle: "A GÁS",
        description: "Sistema de calefação de alta eficiência para residências e empresas. Conforto térmico em todos os ambientes, com instalação profissional e garantia.",
        themeColor: "#ffffff",
        folder: "caldeira",
        frameCount: 192,
        extension: "webp",
        padding: 4,
        startIndex: 1
    },
    {
        name: "BOMBA",
        subtitle: "DE CALOR",
        description: "Sistema versátil que aquece piscinas e ambientes mesmo em dias frios, com baixo consumo de energia elétrica e controle preciso de temperatura.",
        themeColor: "#ffaa00",
        folder: "bomba de calor",
        frameCount: 122,
        customFileList: [
            'frame_000_delay-0.041s.webp', 'frame_001_delay-0.042s.webp', 'frame_002_delay-0.042s.webp', 'frame_003_delay-0.041s.webp', 'frame_004_delay-0.042s.webp', 'frame_005_delay-0.042s.webp', 'frame_006_delay-0.041s.webp', 'frame_007_delay-0.042s.webp', 'frame_008_delay-0.042s.webp', 'frame_009_delay-0.041s.webp', 'frame_010_delay-0.042s.webp', 'frame_011_delay-0.042s.webp', 'frame_012_delay-0.041s.webp', 'frame_013_delay-0.042s.webp', 'frame_014_delay-0.042s.webp', 'frame_015_delay-0.041s.webp', 'frame_016_delay-0.042s.webp', 'frame_017_delay-0.042s.webp', 'frame_018_delay-0.041s.webp', 'frame_019_delay-0.042s.webp', 'frame_020_delay-0.042s.webp', 'frame_021_delay-0.041s.webp', 'frame_022_delay-0.042s.webp', 'frame_023_delay-0.042s.webp', 'frame_024_delay-0.041s.webp', 'frame_025_delay-0.042s.webp', 'frame_026_delay-0.042s.webp', 'frame_027_delay-0.041s.webp', 'frame_028_delay-0.042s.webp', 'frame_029_delay-0.042s.webp', 'frame_030_delay-0.041s.webp', 'frame_031_delay-0.042s.webp', 'frame_032_delay-0.042s.webp', 'frame_033_delay-0.041s.webp', 'frame_034_delay-0.042s.webp', 'frame_035_delay-0.042s.webp', 'frame_036_delay-0.041s.webp', 'frame_037_delay-0.042s.webp', 'frame_038_delay-0.042s.webp', 'frame_039_delay-0.041s.webp', 'frame_040_delay-0.042s.webp', 'frame_041_delay-0.042s.webp', 'frame_042_delay-0.041s.webp', 'frame_043_delay-0.042s.webp', 'frame_044_delay-0.042s.webp', 'frame_045_delay-0.041s.webp', 'frame_046_delay-0.042s.webp', 'frame_047_delay-0.042s.webp', 'frame_048_delay-0.041s.webp', 'frame_049_delay-0.042s.webp', 'frame_050_delay-0.042s.webp', 'frame_051_delay-0.041s.webp', 'frame_052_delay-0.042s.webp', 'frame_053_delay-0.042s.webp', 'frame_054_delay-0.041s.webp', 'frame_055_delay-0.042s.webp', 'frame_056_delay-0.042s.webp', 'frame_057_delay-0.041s.webp', 'frame_058_delay-0.042s.webp', 'frame_059_delay-0.042s.webp', 'frame_060_delay-0.041s.webp', 'frame_061_delay-0.042s.webp', 'frame_062_delay-0.042s.webp', 'frame_063_delay-0.041s.webp', 'frame_064_delay-0.042s.webp', 'frame_065_delay-0.042s.webp', 'frame_066_delay-0.041s.webp', 'frame_067_delay-0.042s.webp', 'frame_068_delay-0.042s.webp', 'frame_069_delay-0.041s.webp', 'frame_070_delay-0.042s.webp', 'frame_071_delay-0.042s.webp', 'frame_072_delay-0.041s.webp', 'frame_073_delay-0.042s.webp', 'frame_074_delay-0.042s.webp', 'frame_075_delay-0.041s.webp', 'frame_076_delay-0.042s.webp', 'frame_077_delay-0.042s.webp', 'frame_078_delay-0.041s.webp', 'frame_079_delay-0.042s.webp', 'frame_080_delay-0.042s.webp', 'frame_081_delay-0.041s.webp', 'frame_082_delay-0.042s.webp', 'frame_083_delay-0.042s.webp', 'frame_084_delay-0.041s.webp', 'frame_085_delay-0.042s.webp', 'frame_086_delay-0.042s.webp', 'frame_087_delay-0.041s.webp', 'frame_088_delay-0.042s.webp', 'frame_089_delay-0.042s.webp', 'frame_090_delay-0.041s.webp', 'frame_091_delay-0.042s.webp', 'frame_092_delay-0.042s.webp', 'frame_093_delay-0.041s.webp', 'frame_094_delay-0.042s.webp', 'frame_095_delay-0.042s.webp', 'frame_096_delay-0.041s.webp', 'frame_097_delay-0.042s.webp', 'frame_098_delay-0.042s.webp', 'frame_099_delay-0.041s.webp', 'frame_100_delay-0.042s.webp', 'frame_101_delay-0.042s.webp', 'frame_102_delay-0.041s.webp', 'frame_103_delay-0.042s.webp', 'frame_104_delay-0.042s.webp', 'frame_105_delay-0.041s.webp', 'frame_106_delay-0.042s.webp', 'frame_107_delay-0.042s.webp', 'frame_108_delay-0.041s.webp', 'frame_109_delay-0.042s.webp', 'frame_110_delay-0.042s.webp', 'frame_111_delay-0.041s.webp', 'frame_112_delay-0.042s.webp', 'frame_113_delay-0.042s.webp', 'frame_114_delay-0.041s.webp', 'frame_115_delay-0.042s.webp', 'frame_116_delay-0.042s.webp', 'frame_117_delay-0.041s.webp', 'frame_118_delay-0.042s.webp', 'frame_119_delay-0.042s.webp', 'frame_120_delay-0.041s.webp', 'frame_121_delay-0.041s.webp'
        ]
    },
    {
        name: "COLETOR",
        subtitle: "SOLAR",
        description: "Solução sustentável e eficiente para aquecimento de piscinas o ano todo, captando a radiação solar com baixíssimo custo operacional.",
        themeColor: "#00eeff",
        folder: "coletor solar",
        frameCount: 122,
        lut: "cinematic",
        customFileList: [
            'frame_000_delay-0.041s.webp', 'frame_001_delay-0.042s.webp', 'frame_002_delay-0.042s.webp', 'frame_003_delay-0.041s.webp', 'frame_004_delay-0.042s.webp', 'frame_005_delay-0.042s.webp', 'frame_006_delay-0.041s.webp', 'frame_007_delay-0.042s.webp', 'frame_008_delay-0.042s.webp', 'frame_009_delay-0.041s.webp', 'frame_010_delay-0.042s.webp', 'frame_011_delay-0.042s.webp', 'frame_012_delay-0.041s.webp', 'frame_013_delay-0.042s.webp', 'frame_014_delay-0.042s.webp', 'frame_015_delay-0.041s.webp', 'frame_016_delay-0.042s.webp', 'frame_017_delay-0.042s.webp', 'frame_018_delay-0.041s.webp', 'frame_019_delay-0.042s.webp', 'frame_020_delay-0.042s.webp', 'frame_021_delay-0.041s.webp', 'frame_022_delay-0.042s.webp', 'frame_023_delay-0.042s.webp', 'frame_024_delay-0.041s.webp', 'frame_025_delay-0.042s.webp', 'frame_026_delay-0.042s.webp', 'frame_027_delay-0.041s.webp', 'frame_028_delay-0.042s.webp', 'frame_029_delay-0.042s.webp', 'frame_030_delay-0.041s.webp', 'frame_031_delay-0.042s.webp', 'frame_032_delay-0.042s.webp', 'frame_033_delay-0.041s.webp', 'frame_034_delay-0.042s.webp', 'frame_035_delay-0.042s.webp', 'frame_036_delay-0.041s.webp', 'frame_037_delay-0.042s.webp', 'frame_038_delay-0.042s.webp', 'frame_039_delay-0.041s.webp', 'frame_040_delay-0.042s.webp', 'frame_041_delay-0.042s.webp', 'frame_042_delay-0.041s.webp', 'frame_043_delay-0.042s.webp', 'frame_044_delay-0.042s.webp', 'frame_045_delay-0.041s.webp', 'frame_046_delay-0.042s.webp', 'frame_047_delay-0.042s.webp', 'frame_048_delay-0.041s.webp', 'frame_049_delay-0.042s.webp', 'frame_050_delay-0.042s.webp', 'frame_051_delay-0.041s.webp', 'frame_052_delay-0.042s.webp', 'frame_053_delay-0.042s.webp', 'frame_054_delay-0.041s.webp', 'frame_055_delay-0.042s.webp', 'frame_056_delay-0.042s.webp', 'frame_057_delay-0.041s.webp', 'frame_058_delay-0.042s.webp', 'frame_059_delay-0.042s.webp', 'frame_060_delay-0.041s.webp', 'frame_061_delay-0.042s.webp', 'frame_062_delay-0.042s.webp', 'frame_063_delay-0.041s.webp', 'frame_064_delay-0.042s.webp', 'frame_065_delay-0.042s.webp', 'frame_066_delay-0.041s.webp', 'frame_067_delay-0.042s.webp', 'frame_068_delay-0.042s.webp', 'frame_069_delay-0.041s.webp', 'frame_070_delay-0.042s.webp', 'frame_071_delay-0.042s.webp', 'frame_072_delay-0.041s.webp', 'frame_073_delay-0.042s.webp', 'frame_074_delay-0.042s.webp', 'frame_075_delay-0.041s.webp', 'frame_076_delay-0.042s.webp', 'frame_077_delay-0.042s.webp', 'frame_078_delay-0.041s.webp', 'frame_079_delay-0.042s.webp', 'frame_080_delay-0.042s.webp', 'frame_081_delay-0.041s.webp', 'frame_082_delay-0.042s.webp', 'frame_083_delay-0.042s.webp', 'frame_084_delay-0.041s.webp', 'frame_085_delay-0.042s.webp', 'frame_086_delay-0.042s.webp', 'frame_087_delay-0.041s.webp', 'frame_088_delay-0.042s.webp', 'frame_089_delay-0.042s.webp', 'frame_090_delay-0.041s.webp', 'frame_091_delay-0.042s.webp', 'frame_092_delay-0.042s.webp', 'frame_093_delay-0.041s.webp', 'frame_094_delay-0.042s.webp', 'frame_095_delay-0.042s.webp', 'frame_096_delay-0.041s.webp', 'frame_097_delay-0.042s.webp', 'frame_098_delay-0.042s.webp', 'frame_099_delay-0.041s.webp', 'frame_100_delay-0.042s.webp', 'frame_101_delay-0.042s.webp', 'frame_102_delay-0.041s.webp', 'frame_103_delay-0.042s.webp', 'frame_104_delay-0.042s.webp', 'frame_105_delay-0.041s.webp', 'frame_106_delay-0.042s.webp', 'frame_107_delay-0.042s.webp', 'frame_108_delay-0.041s.webp', 'frame_109_delay-0.042s.webp', 'frame_110_delay-0.042s.webp', 'frame_111_delay-0.041s.webp', 'frame_112_delay-0.042s.webp', 'frame_113_delay-0.042s.webp', 'frame_114_delay-0.041s.webp', 'frame_115_delay-0.042s.webp', 'frame_116_delay-0.042s.webp', 'frame_117_delay-0.041s.webp', 'frame_118_delay-0.042s.webp', 'frame_119_delay-0.042s.webp', 'frame_120_delay-0.041s.webp', 'frame_121_delay-0.041s.webp'
        ]
    }
];

let currentVariantIndex = Math.floor(Math.random() * variants.length);
let loadedImagesCache = {}; // Cache format: { "folder": [Image, Image, ...] }

// UI Elements
const ui = {
    loading: document.getElementById('loading'),
    loadingPercent: document.getElementById('loading-percent'),
    loadingBar: document.getElementById('loading-bar'),

    canvas: document.getElementById('parallax-canvas'),
    scrollProxy: document.getElementById('scroll-proxy'),

    title: document.getElementById('hero-title'),
    subtitle: document.getElementById('hero-subtitle'),
    description: document.getElementById('hero-description'),
    index: document.getElementById('variant-index'),

    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    bgLoader: document.getElementById('bg-loading-indicator'),
    bgLoaderText: document.getElementById('bg-loader-text'),

    themeToggle: document.getElementById('theme-toggle'),
    navbar: document.getElementById('navbar'),
    aboutTitle: document.querySelector('.section-title'), // Referência para Sobre Nós
    aboutSubtitle: document.querySelector('.section-subtitle'),
    aboutText: document.querySelector('.section-text')
};

async function loadTexts() {
    try {
        const response = await fetch('/dados/textos.json');
        const data = await response.json();
        
        // Hero
        if (data.hero) {
            variants[0].name = data.hero.hero_title || variants[0].name;
            variants[0].subtitle = data.hero.hero_subtitle || variants[0].subtitle;
            variants[0].description = data.hero.hero_description || variants[0].description;
        }

        // Sobre Nós
        if (data.sobre) {
            const aboutSection = document.getElementById('sobre');
            if (aboutSection) {
                const title = aboutSection.querySelector('.section-title');
                const subtitle = aboutSection.querySelector('.section-subtitle');
                const text = aboutSection.querySelector('.section-text');
                if (title) title.innerText = data.sobre.titulo;
                if (subtitle) subtitle.innerText = data.sobre.subtitulo;
                if (text) text.innerText = data.sobre.texto;
            }
        }

        // Stats
        if (data.stats) {
            const counters = document.querySelectorAll('.stat-value');
            counters.forEach(c => {
                if (c.getAttribute('data-target') < 100) {
                     c.setAttribute('data-target', data.stats.anos);
                     const label = c.closest('.stat-item').querySelector('.stat-label');
                     if (label) label.innerText = `${data.stats.anos} anos no mercado`;
                } else {
                     c.setAttribute('data-target', data.stats.projetos);
                }
            });
        }

        // WhatsApp
        if (data.contatos) {
            window.WHATSAPP_CONFIG = data.contatos;
        }

    } catch (e) {
        console.error("Erro ao carregar textos.json", e);
    }
}


const ctx = ui.canvas.getContext('2d');
let scrollFrameIndex = 0;

// --- 2. UTILS ---
const getFramePath = (variant, index) => {
    if (variant.customFileList) {
        return `/${variant.folder}/${variant.customFileList[index]}`;
    }
    const frameIndex = variant.startIndex + index;
    const padded = String(frameIndex).padStart(variant.padding, '0');
    const suffix = variant.suffix || "";
    return `/${variant.folder}/frame_${padded}${suffix}.${variant.extension}`;
};

// Canvas Resizing
const resizeCanvas = () => {
    // 4K Internal Resolution (3840 x 2160) for sharpest rendering
    ui.canvas.width = 3840;
    ui.canvas.height = 2160;
    renderFrame(scrollFrameIndex); // re-render current frame on resize
};
window.addEventListener('resize', resizeCanvas);


// --- 3. PRELOADING SYSTEM ---
const preloadImages = (variantIndex, isBackgroundLoad = false) => {
    return new Promise((resolve) => {
        const variant = variants[variantIndex];

        // If already loaded in cache, just resolve
        if (loadedImagesCache[variant.folder] && loadedImagesCache[variant.folder].length === variant.frameCount) {
            resolve();
            return;
        }

        const images = [];
        let loadedCount = 0;

        if (isBackgroundLoad) {
            ui.bgLoader.classList.add('active');
            ui.btnPrev.style.pointerEvents = 'none';
            ui.btnNext.style.pointerEvents = 'none';
        } else {
            ui.loading.classList.remove('hidden');
        }

        for (let i = 0; i < variant.frameCount; i++) {
            const img = new Image();
            img.src = getFramePath(variant, i);

            img.onload = () => {
                loadedCount++;
                images[i] = img;

                // Update UI
                if (!isBackgroundLoad) {
                    const percent = Math.floor((loadedCount / variant.frameCount) * 100);
                    ui.loadingPercent.textContent = percent;
                    ui.loadingBar.style.width = `${percent}%`;
                }

                if (loadedCount === variant.frameCount) {
                    loadedImagesCache[variant.folder] = images;

                    if (isBackgroundLoad) {
                        ui.bgLoader.classList.remove('active');
                        ui.btnPrev.style.pointerEvents = 'auto';
                        ui.btnNext.style.pointerEvents = 'auto';
                    } else {
                        // Give 500ms before hiding the overlay for smoothness
                        setTimeout(() => {
                            ui.loading.classList.add('hidden');
                        }, 500);
                    }
                    resolve();
                }
            };

            img.onerror = () => {
                // Fallback or skip if frame doesn't exist
                loadedCount++;
                images[i] = images[i - 1] || new Image(); // duplicate prev if error
                if (loadedCount === variant.frameCount) {
                    loadedImagesCache[variant.folder] = images;
                    if (isBackgroundLoad) ui.bgLoader.classList.remove('active');
                    else ui.loading.classList.add('hidden');
                    resolve();
                }
            };
        }
    });
};


// --- 4. RENDERER & SCROLL LOGIC ---
const renderFrame = (index) => {
    const variant = variants[currentVariantIndex];
    const images = loadedImagesCache[variant.folder];

    if (!images || !images[index]) return;

    const img = images[index];

    // Clear canvas
    ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height);

    // Force high quality image smoothing for 4K rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Calculate aspect ratio cover
    const canvasRatio = ui.canvas.width / ui.canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = ui.canvas.width;
    let drawHeight = ui.canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
        drawHeight = drawWidth / imgRatio;
        offsetY = (ui.canvas.height - drawHeight) / 2;
    } else {
        drawWidth = drawHeight * imgRatio;
        offsetX = (ui.canvas.width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
};

const setupScrollTimeline = () => {
    const variant = variants[currentVariantIndex];
    // 1 frame = 20px of scroll
    const scrollHeight = variant.frameCount * 20;
    ui.scrollProxy.style.height = `${scrollHeight}px`;

    // Position page content right after the scroll proxy
    const mainContent = document.querySelector('.page-content');
    if (mainContent) {
        mainContent.style.marginTop = `${scrollHeight}px`;
    }
};

window.addEventListener('scroll', () => {
    // Update Navbar Style
    if (window.scrollY > 50) {
        ui.navbar.classList.add('scrolled');
    } else {
        ui.navbar.classList.remove('scrolled');
    }

    // Calculate Parallax Canvas Frame
    const variant = variants[currentVariantIndex];
    const totalScrollFrames = variant.frameCount - 1;
    const maxScroll = ui.scrollProxy.offsetHeight - window.innerHeight;

    // Only update frames if we are within the scroll proxy area
    if (window.scrollY <= maxScroll && maxScroll > 0) {
        const scrollFraction = window.scrollY / maxScroll;
        const frameIndex = Math.min(
            totalScrollFrames,
            Math.max(0, Math.floor(scrollFraction * totalScrollFrames))
        );

        // Request Animation Frame for performance
        if (frameIndex !== scrollFrameIndex) {
            scrollFrameIndex = frameIndex;
            requestAnimationFrame(() => renderFrame(scrollFrameIndex));
        }
    } else if (window.scrollY > maxScroll) {
        // Stick to last frame when scrolling past hero
        if (scrollFrameIndex !== totalScrollFrames) {
            scrollFrameIndex = totalScrollFrames;
            requestAnimationFrame(() => renderFrame(scrollFrameIndex));
        }
        // Toggle WhatsApp Float when scrolling out of Hero Section
        const waFloat = document.getElementById('wa-float');
        if (waFloat) {
            if (window.scrollY > maxScroll) {
                waFloat.classList.add('visible');
            } else {
                waFloat.classList.remove('visible');
            }
        }

        // Hide hero to prevent it from showing on overscroll at the bottom of the page
        const heroSection = document.getElementById('inicio');
        if (heroSection) {
            if (window.scrollY >= maxScroll + window.innerHeight) {
                heroSection.style.visibility = 'hidden';
            } else {
                heroSection.style.visibility = 'visible';
            }
        }
    } else {
        const heroSection = document.getElementById('inicio');
        if (heroSection) heroSection.style.visibility = 'visible';
    }
});

// --- 5. VARIANT MANAGEMENT ---
const updateUIContent = (vIndex) => {
    const variant = variants[vIndex];

    // Animate Out
    ui.title.classList.add('fade-out');
    ui.subtitle.classList.add('fade-out');
    ui.description.classList.add('fade-out');
    ui.index.classList.add('fade-out');

    setTimeout(() => {
        // Update Text & Color
        ui.title.textContent = variant.name;
        ui.subtitle.textContent = variant.subtitle;
        ui.description.textContent = variant.description;
        ui.index.textContent = String(vIndex + 1).padStart(2, '0');

        document.documentElement.style.setProperty('--theme-color', variant.themeColor);

        // Toggle LUT Cinematic class
        const heroEl = document.getElementById('inicio');
        if (variant.lut === 'cinematic') {
            heroEl.classList.add('lut-cinematic');
        } else {
            heroEl.classList.remove('lut-cinematic');
        }

        // Animate In
        ui.title.classList.remove('fade-out');
        ui.subtitle.classList.remove('fade-out');
        ui.description.classList.remove('fade-out');
        ui.index.classList.remove('fade-out');

        // Re-setup timelines 
        setupScrollTimeline();

        // Render frame based on current scroll position
        renderFrame(scrollFrameIndex);

    }, 400); // match CSS transition duration
};

const switchVariant = async (direction) => {
    let newIndex = currentVariantIndex + direction;

    if (newIndex < 0) newIndex = variants.length - 1;
    if (newIndex >= variants.length) newIndex = 0;

    const targetVariant = variants[newIndex];

    // If target variant frames are not loaded, load them in background first
    if (!loadedImagesCache[targetVariant.folder]) {
        await preloadImages(newIndex, true);
    }

    currentVariantIndex = newIndex;
    updateUIContent(currentVariantIndex);
};

// Auto Play Logic for Hero Section
let autoSwitchTimer;
const startAutoSwitch = () => {
    clearInterval(autoSwitchTimer);
    autoSwitchTimer = setInterval(() => {
        switchVariant(1);
    }, 15000); // Switch every 15 seconds
};

ui.btnPrev.addEventListener('click', () => {
    switchVariant(-1);
    startAutoSwitch(); // Reset timer on manual click
});
ui.btnNext.addEventListener('click', () => {
    switchVariant(1);
    startAutoSwitch(); // Reset timer on manual click
});


// --- 6. THEME TOGGLE ---
const iconSun = ui.themeToggle.querySelector('.icon-sun');
const iconMoon = ui.themeToggle.querySelector('.icon-moon');

ui.themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {
        html.setAttribute('data-theme', 'light');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        html.setAttribute('data-theme', 'dark');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }
});


// --- 8. REAL REVIEWS (MANUAL FROM GOOGLE) ---
const renderRealReviews = () => {
    const reviewsGrid = document.querySelector('.testimonials-grid');
    if (!reviewsGrid) return;

    const realReviews = [
        {
            author: "Alessandra Góes",
            handle: "@alessandra",
            avatar: "imagens/logo.png", // fallback local avatar
            text: "A Clima Company é uma excelente empresa e presta um serviço de qualidade, considerando a melhor solução de acordo com a necessidade do cliente... Super recomendo."
        },
        {
            author: "Davison Venancio",
            handle: "@davison",
            avatar: "imagens/logo 2.png",
            text: "Estava a um ano com problema no aquecedor e quando achei essa assistência técnica resolveram. Coloquei um pressurizador e hoje conseguimos usar os chuveiros com pressão."
        },
        {
            author: "Fernando Serpa",
            handle: "@fernando",
            avatar: "imagens/logo.png",
            text: "Profissionais totalmente qualificados, equipe sempre disponível para atender. Índico com olhos fechados, confio somente neles. Parabéns a equipe Clima Company"
        },
        {
            author: "Mirella Caroline",
            handle: "@mirella",
            avatar: "imagens/logo 2.png",
            text: "Excelente! Atendimento e serviço nota 10. Super recomendo."
        }
    ];

    reviewsGrid.innerHTML = ''; // Limpar mockups

    const renderSet = () => {
        realReviews.forEach(review => {
            const card = document.createElement('div');
            card.className = 'testimonial-card relative';
            card.innerHTML = `
                <div class="testimonial-header">
                    <div class="user-info">
                        <strong>${review.author}</strong>
                        <span>${review.handle}</span>
                    </div>
                </div>
                <div class="stars" style="margin-bottom: 0.5rem; font-size: 1rem;">★★★★★</div>
                <p class="testimonial-text" style="font-size: 0.95rem;">"${review.text}"</p>
            `;
            reviewsGrid.appendChild(card);
        });
    };

    renderSet();
    renderSet();
};



// --- 7. REVEAL ON SCROLL ---
const setupRevealObserver = () => {
    const reveals = document.querySelectorAll('.section, .card, .footer-col');

    reveals.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => observer.observe(reveal));
};


// --- 10. MARCAS MARQUEE LOGIC ---
const setupMarcasSlider = () => {
    const track = document.getElementById('marcas-track');
    if (!track) return;

    // Duplicar os itens para criar o efeito de loop infinito
    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
};

// --- 11. COUNTER ANIMATION (SOBRE NÓS) ---
const initCounters = () => {
    const counters = document.querySelectorAll('.stat-value');
    if (counters.length === 0) return;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Velocidade baseada no valor (números menores sobem mais devagar proporcionalmente)
        const speed = target > 100 ? 5 : 40;
        const increment = target / (2000 / speed); // ~2 segundos de animação total

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), speed);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Animar apenas uma vez
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
};


// --- 9. INITIALIZATION ---
const init = async () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    await loadTexts();
    resizeCanvas();
    const variant = variants[currentVariantIndex];

    // Sync initial HTML content with the randomly chosen variant
    ui.title.textContent = variant.name;
    ui.subtitle.textContent = variant.subtitle;
    ui.description.textContent = variant.description;
    ui.index.textContent = String(currentVariantIndex + 1).padStart(2, '0');

    // Set initial theme color
    document.documentElement.style.setProperty('--theme-color', variant.themeColor);

    // Initial LUT check
    const heroEl = document.getElementById('inicio');
    if (variant.lut === 'cinematic') {
        heroEl.classList.add('lut-cinematic');
    } else {
        heroEl.classList.remove('lut-cinematic');
    }

    setupScrollTimeline();
    // Preload first variant blocks
    await preloadImages(currentVariantIndex, false);

    renderRealReviews(); // Carregar depoimentos reais manuais ANTES de observar
    setupRevealObserver();
    setupMarcasSlider();
    renderFrame(0);
    startAutoSwitch(); // Start the hero slideshow
};

// --- 11. GLOWING EFFECT LOGIC ---
const setupGlowingEffect = () => {
    const cards = document.querySelectorAll('.glowing-card-wrapper');

    cards.forEach(wrapper => {
        const glowLayer = wrapper.querySelector('.glow-layer');
        if (!glowLayer) return;

        let lastPos = { x: 0, y: 0 };
        let animationFrameId = null;

        const updateGlow = (e) => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                const rect = wrapper.getBoundingClientRect();
                const mouseX = e ? e.clientX : lastPos.x;
                const mouseY = e ? e.clientY : lastPos.y;

                if (e) lastPos = { x: mouseX, y: mouseY };

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const proximity = 64;
                const inactiveZone = 0.01;

                const distFromCenter = Math.hypot(mouseX - centerX, mouseY - centerY);
                const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * inactiveZone;

                if (distFromCenter < inactiveRadius) {
                    glowLayer.style.setProperty('--active', '0');
                    return;
                }

                const isActive = mouseX > rect.left - proximity &&
                    mouseX < rect.right + proximity &&
                    mouseY > rect.top - proximity &&
                    mouseY < rect.bottom + proximity;

                glowLayer.style.setProperty('--active', isActive ? '1' : '0');

                if (!isActive) return;

                const angle = (Math.atan2(mouseY - centerY, mouseX - centerX) * 180 / Math.PI) + 90;
                glowLayer.style.setProperty('--start', angle);
            });
        };

        window.addEventListener('pointermove', updateGlow, { passive: true });
        window.addEventListener('scroll', () => updateGlow(), { passive: true });
    });
};

// Re-initialize glowing effect when content changes if needed
window.addEventListener('variantChanged', setupGlowingEffect);

// --- 12. FAQ ACCORDION ---
const initFAQAccordion = () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Opcional: fechar outros itens ao abrir um novo
            faqItems.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
};

// Start
document.addEventListener('DOMContentLoaded', async () => {
    await init();
    setupGlowingEffect();
    initCounters();
    initFAQAccordion();
});

