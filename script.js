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
        feat_title: "Fonctionnalités Next-Gen",
        feat_subtitle: "L'arsenal ultime pour maximiser votre rentabilité et dominer le réseau PearlHash.",
        feat1_title: "Éco-Minage (Méthode Rigel)",
        feat1_desc: "Verrouillage de la VRAM à 810MHz via NVML. Économisez de 20 à 45W par carte pour pousser vos Tensor Cores au maximum sans surconsommer.",
        feat2_title: "Auto-Switch FP8 (Certificate-v4)",
        feat2_desc: "Prêt pour le Hard Fork (PR #311). Bascule automatique à chaud du noyau V3 au FP8 sans intervention humaine ni perte de session.",
        feat3_title: "Disjoncteur Anti-Rejet",
        feat3_desc: "Finis les rigs qui tournent dans le vide. Coupure immédiate du calcul si les rejets dépassent 5% et envois d'alertes Webhook.",
        feat4_title: "Débridage CMP Linux",
        feat4_desc: "Levée automatique des verrous de pilotes sur la gamme NVIDIA CMP (40HX à 170HX). Rentabilisez vos cartes d'occasion instantanément.",
        pricing_title: "Stratégie & Frais",
        pricing_subtitle: "Le meilleur modèle économique du marché. Clair, net et dégressif.",
        pricing1_title: "Lancement",
        pricing1_desc: "Pendant 30 jours, PinctadaMiner est 100% gratuit. Testez l'efficience énergétique sur vos rigs sans aucun frais.",
        pricing2_title: "Dev-Fee Standard",
        pricing2_desc: "Deux fois moins cher que PeakMiner ou ForgeMiner. Des logs clairs et transparents, sans frais cachés.",
        pricing3_title: "Grandes Fermes",
        pricing3_desc: "Tarif dégressif automatique : 0.75% au-delà de 500 TH/s, et 0.5% pour les fermes industrielles (> 2 PH/s).",
        comp_title: "Comparatif Concurrentiel",
        comp_col1: "Fonctionnalité",
        comp_row1: "Frais Développeur (Dev-Fee)",
        comp_row2: "Verrouillage VRAM Auto",
        comp_row3: "Disjoncteur Anti-Rejet",
        comp_row4: "Bascule FP8 (v4) Auto",
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
        feat_title: "Next-Gen Features",
        feat_subtitle: "The ultimate arsenal to maximize your profitability and dominate the PearlHash network.",
        feat1_title: "Eco-Mining (Rigel Method)",
        feat1_desc: "VRAM locking at 810MHz via NVML. Save 20 to 45W per card to push your Tensor Cores to the maximum without overconsuming.",
        feat2_title: "Auto-Switch FP8 (Certificate-v4)",
        feat2_desc: "Ready for the Hard Fork (PR #311). Automatic hot-swapping from V3 to FP8 kernel without human intervention or session loss.",
        feat3_title: "Anti-Reject Circuit Breaker",
        feat3_desc: "No more rigs running on empty. Immediate compute cutoff if rejects exceed 5%, with Webhook alert dispatch.",
        feat4_title: "Linux CMP Unlock",
        feat4_desc: "Automatic driver lock lifting on the NVIDIA CMP range (40HX to 170HX). Make your second-hand cards profitable instantly.",
        pricing_title: "Strategy & Fees",
        pricing_subtitle: "The best economic model on the market. Clear, clean, and sliding scale.",
        pricing1_title: "Launch",
        pricing1_desc: "For 30 days, PinctadaMiner is 100% free. Test the energy efficiency on your rigs at no cost.",
        pricing2_title: "Standard Dev-Fee",
        pricing2_desc: "Half the price of PeakMiner or ForgeMiner. Clear and transparent logs, with no hidden fees.",
        pricing3_title: "Large Farms",
        pricing3_desc: "Automatic sliding scale: 0.75% above 500 TH/s, and 0.5% for industrial farms (> 2 PH/s).",
        comp_title: "Competitive Comparison",
        comp_col1: "Feature",
        comp_row1: "Developer Fee (Dev-Fee)",
        comp_row2: "Auto VRAM Locking",
        comp_row3: "Anti-Reject Circuit Breaker",
        comp_row4: "Auto FP8 (v4) Switch",
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
        feat_title: "Next-Gen-Funktionen",
        feat_subtitle: "Das ultimative Arsenal, um Ihre Rentabilität zu maximieren und das PearlHash-Netzwerk zu dominieren.",
        feat1_title: "Öko-Mining (Rigel-Methode)",
        feat1_desc: "VRAM-Sperrung auf 810MHz über NVML. Sparen Sie 20 bis 45W pro Karte, um Ihre Tensor Cores maximal zu nutzen, ohne übermäßigen Verbrauch.",
        feat2_title: "Auto-Switch FP8 (Certificate-v4)",
        feat2_desc: "Bereit für den Hard Fork (PR #311). Automatischer Hot-Swap vom V3- zum FP8-Kernel ohne menschliches Eingreifen oder Sitzungsverlust.",
        feat3_title: "Anti-Reject-Schutzschalter",
        feat3_desc: "Keine leer laufenden Rigs mehr. Sofortige Berechnungsunterbrechung, wenn die Ablehnungen 5% überschreiten, mit Webhook-Warnmeldungen.",
        feat4_title: "Linux CMP Entsperrung",
        feat4_desc: "Automatische Aufhebung der Treibersperre bei der NVIDIA CMP-Reihe (40HX bis 170HX). Machen Sie Ihre gebrauchten Karten sofort rentabel.",
        pricing_title: "Strategie & Gebühren",
        pricing_subtitle: "Das beste Wirtschaftsmodell auf dem Markt. Klar, sauber und degressiv.",
        pricing1_title: "Einführung",
        pricing1_desc: "Für 30 Tage ist PinctadaMiner 100% kostenlos. Testen Sie die Energieeffizienz Ihrer Rigs ohne Kosten.",
        pricing2_title: "Standard Dev-Fee",
        pricing2_desc: "Halb so teuer wie PeakMiner oder ForgeMiner. Klare und transparente Protokolle, ohne versteckte Gebühren.",
        pricing3_title: "Große Farmen",
        pricing3_desc: "Automatischer Staffel-Tarif: 0.75% ab 500 TH/s und 0.5% für Industriefarmen (> 2 PH/s).",
        comp_title: "Wettbewerbsvergleich",
        comp_col1: "Funktion",
        comp_row1: "Entwicklergebühr (Dev-Fee)",
        comp_row2: "Auto VRAM-Sperrung",
        comp_row3: "Anti-Reject-Schutzschalter",
        comp_row4: "Auto FP8 (v4) Wechsel",
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
        feat_title: "下一代功能",
        feat_subtitle: "最大化您的盈利能力并主导 PearlHash 网络的终极武器。",
        feat1_title: "生态挖矿 (Rigel 方法)",
        feat1_desc: "通过 NVML 将显存 (VRAM) 锁定在 810MHz。每张卡节省 20 至 45W，让您的 Tensor 核心发挥最大性能，而不会过度消耗。",
        feat2_title: "自动切换 FP8 (Certificate-v4)",
        feat2_desc: "为硬分叉 (PR #311) 做好准备。从 V3 到 FP8 内核的自动热切换，无需人工干预，也不会丢失会话。",
        feat3_title: "防拒绝断路器",
        feat3_desc: "不再有空转的矿机。如果拒绝率超过 5%，则立即切断计算，并发送 Webhook 警报。",
        feat4_title: "Linux CMP 解锁",
        feat4_desc: "自动解除 NVIDIA CMP 系列 (40HX 至 170HX) 的驱动程序锁定。让您的二手卡立即实现盈利。",
        pricing_title: "策略与费用",
        pricing_subtitle: "市场上最好的经济模型。清晰、干净且采用递减费率。",
        pricing1_title: "启动优惠",
        pricing1_desc: "在 30 天内，PinctadaMiner 100% 免费。无需任何费用即可在您的矿机上测试其能效。",
        pricing2_title: "标准开发者费用",
        pricing2_desc: "价格只有 PeakMiner 或 ForgeMiner 的一半。清晰透明的日志，没有隐藏费用。",
        pricing3_title: "大型矿场",
        pricing3_desc: "自动递减费率：500 TH/s 以上为 0.75%，工业级矿场 (> 2 PH/s) 为 0.5%。",
        comp_title: "竞争对比",
        comp_col1: "功能",
        comp_row1: "开发者费用 (Dev-Fee)",
        comp_row2: "自动显存 (VRAM) 锁定",
        comp_row3: "防拒绝断路器",
        comp_row4: "自动 FP8 (v4) 切换",
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
