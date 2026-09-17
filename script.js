const translations = {
    fr: {
        doc_title: "Pinctada Miner | Pearl PoW Optimized",
        nav_features: "Fonctionnalités",
        nav_quickstart: "Démarrage Rapide",
        nav_download: "Releases",
        badge_beta: "Version Beta v1.3.0 Disponible",
        hero_title: 'Dominez le réseau Pearl avec <span class="text-gradient">Pinctada Miner</span>',
        hero_subtitle: "Le mineur CUDA ultra-optimisé conçu pour repousser les limites matérielles. Atteignez les sommets avec le double-buffering asynchrone et une architecture Tiled-32x8.",
        cta_download: "Télécharger la Beta (Windows)",
        stat1_label: "Max Kernel (RTX 4060)",
        stat2_label: "Moyenne E2E (PCIe 4.0x8)",
        stat3_label: "Cache L2 Pinning",
        feat_title: "Architecture de Pointe",
        feat_subtitle: "Construit pour l'efficacité absolue et conçu sur-mesure pour les GPUs NVIDIA Ampere et Ada Lovelace.",
        feat1_title: "Double-Buffering Asynchrone",
        feat1_desc: "Le pipeline E2E masque 100% de la latence PCIe. Pendant que le GPU calcule le batch N, le CPU rapatrie les résultats du batch N-1 en mémoire verrouillée (Pinned Host Memory).",
        feat2_title: "L2 Cache Pinning",
        feat2_desc: "Politique L2 persistante (cudaAccessPropertyPersisting) activée sur les architectures compatibles pour conserver les matrices A et B au plus près des cœurs de calcul, évitant les allers-retours VRAM coûteux.",
        feat3_title: "Tiled-32x8 Candidate Order",
        feat3_desc: "Le parcours mémoire des noyaux v12d et v8c a été redessiné pour une localité registre maximale, optimisant le warp-level caching et réduisant la pression mémoire.",
        qs_title: "Démarrage Rapide",
        qs_step1: "<strong>Téléchargez</strong> l'archive `.zip` depuis la page <a href=\"https://github.com/Laidbak83/PinctadaMiner/releases\" style=\"color:var(--primary);\">GitHub Releases</a>.",
        qs_step2: "<strong>Extrayez</strong> l'intégralité des fichiers dans un dossier sur votre bureau.",
        qs_step3: "<strong>Modifiez</strong> le fichier <code>start.bat</code> (clic droit -> Modifier) pour y insérer l'adresse de votre Wallet Pearl.",
        qs_step4: "<strong>Exécutez</strong> <code>start.bat</code> <em>(Recommandé: Lancer en tant qu'Administrateur pour permettre l'optimisation des horloges si configuré)</em>.",
        footer_copy: "&copy; 2026 Pinctada Miner - Laidbak83. Tous droits réservés.",
        footer_terms: "Conditions d'utilisation"
    },
    en: {
        doc_title: "Pinctada Miner | Pearl PoW Optimized",
        nav_features: "Features",
        nav_quickstart: "Quick Start",
        nav_download: "Releases",
        badge_beta: "Beta v1.3.0 Available",
        hero_title: 'Dominate the Pearl network with <span class="text-gradient">Pinctada Miner</span>',
        hero_subtitle: "The ultra-optimized CUDA miner designed to push hardware limits. Reach the top with asynchronous double-buffering and a Tiled-32x8 architecture.",
        cta_download: "Download Beta (Windows)",
        stat1_label: "Max Kernel (RTX 4060)",
        stat2_label: "E2E Average (PCIe 4.0x8)",
        stat3_label: "L2 Cache Pinning",
        feat_title: "Cutting-Edge Architecture",
        feat_subtitle: "Built for absolute efficiency and custom-designed for NVIDIA Ampere and Ada Lovelace GPUs.",
        feat1_title: "Asynchronous Double-Buffering",
        feat1_desc: "The E2E pipeline hides 100% of PCIe latency. While the GPU computes batch N, the CPU fetches batch N-1 results into pinned host memory.",
        feat2_title: "L2 Cache Pinning",
        feat2_desc: "Persistent L2 policy (cudaAccessPropertyPersisting) enabled on supported architectures to keep A and B matrices close to compute cores, avoiding costly VRAM round-trips.",
        feat3_title: "Tiled-32x8 Candidate Order",
        feat3_desc: "The memory traversal of v12d and v8c kernels has been redesigned for maximum register locality, optimizing warp-level caching and reducing memory pressure.",
        qs_title: "Quick Start",
        qs_step1: "<strong>Download</strong> the `.zip` archive from the <a href=\"https://github.com/Laidbak83/PinctadaMiner/releases\" style=\"color:var(--primary);\">GitHub Releases</a> page.",
        qs_step2: "<strong>Extract</strong> all files into a folder on your desktop.",
        qs_step3: "<strong>Edit</strong> the <code>start.bat</code> file (right-click -> Edit) to insert your Pearl Wallet address.",
        qs_step4: "<strong>Run</strong> <code>start.bat</code> <em>(Recommended: Run as Administrator to allow clock optimization if configured)</em>.",
        footer_copy: "&copy; 2026 Pinctada Miner - Laidbak83. All rights reserved.",
        footer_terms: "Terms of Use"
    },
    de: {
        doc_title: "Pinctada Miner | Pearl PoW Optimiert",
        nav_features: "Funktionen",
        nav_quickstart: "Schnellstart",
        nav_download: "Veröffentlichungen",
        badge_beta: "Beta v1.3.0 Verfügbar",
        hero_title: 'Beherrschen Sie das Pearl-Netzwerk mit <span class="text-gradient">Pinctada Miner</span>',
        hero_subtitle: "Der ultra-optimierte CUDA-Miner, entwickelt um Hardware-Grenzen zu überschreiten. Erreichen Sie Spitzenleistungen mit asynchronem Double-Buffering und einer Tiled-32x8 Architektur.",
        cta_download: "Beta Herunterladen (Windows)",
        stat1_label: "Max Kernel (RTX 4060)",
        stat2_label: "E2E Durchschnitt (PCIe 4.0x8)",
        stat3_label: "L2 Cache Pinning",
        feat_title: "Modernste Architektur",
        feat_subtitle: "Gebaut für absolute Effizienz und maßgeschneidert für NVIDIA Ampere und Ada Lovelace GPUs.",
        feat1_title: "Asynchrones Double-Buffering",
        feat1_desc: "Die E2E-Pipeline verbirgt 100% der PCIe-Latenz. Während die GPU Batch N berechnet, ruft die CPU die Ergebnisse von Batch N-1 in den Pinned Host Memory ab.",
        feat2_title: "L2 Cache Pinning",
        feat2_desc: "Persistente L2-Richtlinie (cudaAccessPropertyPersisting) auf unterstützten Architekturen aktiviert, um A- und B-Matrizen in der Nähe der Rechenkerne zu halten und teure VRAM-Umläufe zu vermeiden.",
        feat3_title: "Tiled-32x8 Candidate Order",
        feat3_desc: "Die Speicherdurchsuchung der v12d- und v8c-Kernel wurde für maximale Registerlokalität neu gestaltet, um das Warp-Level-Caching zu optimieren und den Speicherdruck zu reduzieren.",
        qs_title: "Schnellstart",
        qs_step1: "<strong>Laden</strong> Sie das `.zip`-Archiv von der <a href=\"https://github.com/Laidbak83/PinctadaMiner/releases\" style=\"color:var(--primary);\">GitHub Releases</a>-Seite herunter.",
        qs_step2: "<strong>Entpacken</strong> Sie alle Dateien in einen Ordner auf Ihrem Desktop.",
        qs_step3: "<strong>Bearbeiten</strong> Sie die Datei <code>start.bat</code> (Rechtsklick -> Bearbeiten), um Ihre Pearl-Wallet-Adresse einzufügen.",
        qs_step4: "<strong>Führen Sie</strong> <code>start.bat</code> aus <em>(Empfohlen: Als Administrator ausführen, um Taktoptimeirungen zuzulassen, falls konfiguriert)</em>.",
        footer_copy: "&copy; 2026 Pinctada Miner - Laidbak83. Alle Rechte vorbehalten.",
        footer_terms: "Nutzungsbedingungen"
    },
    zh: {
        doc_title: "Pinctada Miner | 针对 Pearl PoW 优化",
        nav_features: "功能特点",
        nav_quickstart: "快速开始",
        nav_download: "发布版本",
        badge_beta: "Beta v1.3.0 现已发布",
        hero_title: '使用 <span class="text-gradient">Pinctada Miner</span> 称霸 Pearl 网络',
        hero_subtitle: "这是一款旨在突破硬件极限的超优化 CUDA 挖矿软件。凭借异步双缓冲和 Tiled-32x8 架构达到顶峰。",
        cta_download: "下载 Beta 版 (Windows)",
        stat1_label: "内核峰值 (RTX 4060)",
        stat2_label: "E2E 平均值 (PCIe 4.0x8)",
        stat3_label: "二级缓存 (L2) 锁定",
        feat_title: "尖端架构",
        feat_subtitle: "为实现绝对效率而生，专为 NVIDIA Ampere 和 Ada Lovelace GPU 量身定制。",
        feat1_title: "异步双缓冲 (Double-Buffering)",
        feat1_desc: "E2E 管道隐藏了 100% 的 PCIe 延迟。当 GPU 计算批次 N 时，CPU 会将批次 N-1 的结果提取到锁定主机内存 (Pinned Host Memory) 中。",
        feat2_title: "L2 Cache 锁定",
        feat2_desc: "在支持的架构上启用持久性 L2 策略 (cudaAccessPropertyPersisting)，将 A 和 B 矩阵保留在计算核心附近，避免昂贵的显存 (VRAM) 往返。",
        feat3_title: "Tiled-32x8 候选顺序",
        feat3_desc: "v12d 和 v8c 内核的内存遍历经过重新设计，以实现最大的寄存器局部性，从而优化 warp 级缓存并降低内存压力。",
        qs_title: "快速开始",
        qs_step1: "从 <a href=\"https://github.com/Laidbak83/PinctadaMiner/releases\" style=\"color:var(--primary);\">GitHub Releases</a> 页面<strong>下载</strong> `.zip` 压缩包。",
        qs_step2: "将所有文件<strong>解压</strong>到桌面上的一个文件夹中。",
        qs_step3: "<strong>编辑</strong> <code>start.bat</code> 文件 (右键单击 -> 编辑) 以插入您的 Pearl 钱包地址。",
        qs_step4: "<strong>运行</strong> <code>start.bat</code> <em>(推荐：以管理员身份运行以允许时钟优化，如果已配置)</em>。",
        footer_copy: "&copy; 2026 Pinctada Miner - Laidbak83. 保留所有权利。",
        footer_terms: "使用条款"
    }
};

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- i18n Logic ---
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangText = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('#lang-dropdown a');
    
    // Set initial language from localStorage or default to 'fr'
    const savedLang = localStorage.getItem('pinctada_lang') || 'fr';
    setLanguage(savedLang);

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        if (langDropdown.classList.contains('show')) {
            langDropdown.classList.remove('show');
        }
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = option.getAttribute('data-lang');
            setLanguage(newLang);
            localStorage.setItem('pinctada_lang', newLang);
            langDropdown.classList.remove('show');
        });
    });
});

function setLanguage(lang) {
    if (!translations[lang]) return;
    
    // Update button text
    const currentLangText = document.getElementById('current-lang');
    if (currentLangText) {
        const flagMap = { fr: '🇫🇷', en: '🇬🇧', de: '🇩🇪', zh: '🇨🇳' };
        currentLangText.textContent = flagMap[lang] || '🌐';
    }
    
    // Document title
    if (translations[lang]['doc_title']) {
        document.title = translations[lang]['doc_title'];
    }

    // Replace text for all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Using innerHTML to support span/a/strong tags within translations
            el.innerHTML = translations[lang][key];
        }
    });
}
