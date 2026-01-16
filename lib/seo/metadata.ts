/**
 * SEO Metadata для всех поддерживаемых языков
 * Содержит переводы всех мета-тегов для поисковой оптимизации
 */

export type SupportedLocale = "en" | "ru" | "es" | "de" | "fr" | "ar";

export interface SEOMetadata {
  title: string;
  titleTemplate: string; // для других страниц
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  siteName: string;
}

export const seoMetadata: Record<SupportedLocale, SEOMetadata> = {
  en: {
    title: "Chapax — Universal AI Agent for the Web",
    titleTemplate: "Chapax — %s",
    description:
      "Universal AI agent with a powerful web app and browser extension. Chat with AI models, deep search, pair coding, deep thinking, Magic Edit — plus generate product videos, ads, AI avatars for videos, and content for TikTok, Shorts, and Reels.",
    keywords: [
      "AI assistant",
      "artificial intelligence",
      "browser extension",
      "AI chat",
      "GPT-4",
      "Claude",
      "Gemini",
      "deep search",
      "pair programming",
      "code assistant",
      "text editor",
      "productivity tool",
      "web app",
      "AI agent",
      "ChatGPT alternative",
      "magic edit",
      "AI writing",
      "AI tools",
      "AI ad generator",
      "AI marketing",
      "product video ads",
      "TikTok ad generator",
      "Shorts generator",
      "Reels generator",
      "AI avatar",
      "AI avatar for videos",
      "video avatar generator",
      "avatar overlay video",
    ],
    ogTitle: "Chapax — Universal AI Agent for the Web",
    ogDescription:
      "Web app + browser extension with Magic Edit. Chat with leading AI models, deep search, pair coding — generate ads, product videos, and AI avatars for videos.",
    twitterTitle: "Chapax — Universal AI Agent for the Web",
    twitterDescription:
      "Universal AI agent: chat, search, code, and edit with AI — plus generate ads, product videos, and AI avatars for videos.",
    siteName: "Chapax",
  },
  ru: {
    title: "Chapax — Универсальный AI-агент для веба",
    titleTemplate: "Chapax — %s",
    description:
      "Универсальный AI-агент с мощным веб-приложением и расширением для браузера. Общайтесь с AI-моделями, делайте глубокий поиск, парное программирование, глубокое мышление и Magic Edit — плюс создавайте рекламу, продуктовые видео, AI‑аватары для видео и контент для TikTok, Shorts и Reels.",
    keywords: [
      "AI ассистент",
      "искусственный интеллект",
      "расширение для браузера",
      "AI чат",
      "GPT-4",
      "Claude",
      "Gemini",
      "глубокий поиск",
      "парное программирование",
      "помощник программиста",
      "текстовый редактор",
      "инструмент продуктивности",
      "веб приложение",
      "AI агент",
      "альтернатива ChatGPT",
      "магическое редактирование",
      "AI письмо",
      "AI инструменты",
      "генератор рекламы",
      "создание рекламы с ИИ",
      "ИИ маркетинг",
      "генерация видео рекламы",
      "TikTok генератор",
      "Shorts генератор",
      "ИИ аватар",
      "ИИ аватар для видео",
      "аватар для видео",
      "наложить аватар на видео",
    ],
    ogTitle: "Chapax — Универсальный AI-агент для веба",
    ogDescription:
      "Веб-приложение + расширение для браузера с Magic Edit. Общайтесь с ведущими AI-моделями, делайте глубокий поиск и создавайте рекламу, продуктовые видео и AI‑аватары для видео.",
    twitterTitle: "Chapax — Универсальный AI-агент для веба",
    twitterDescription:
      "Универсальный AI-агент: общение, поиск, код и редактирование с помощью AI — плюс генерация рекламы, продуктовых видео и AI‑аватаров для видео.",
    siteName: "Chapax",
  },
  es: {
    title: "Chapax — Agente de IA Universal para la Web",
    titleTemplate: "Chapax — %s",
    description:
      "Agente de IA universal con una potente aplicación web y extensión de navegador. Chat, búsqueda profunda, programación en pareja, pensamiento profundo y Magic Edit — además de anuncios, vídeos de producto, avatares de IA para vídeo y contenido para TikTok, Shorts y Reels.",
    keywords: [
      "asistente de IA",
      "inteligencia artificial",
      "extensión de navegador",
      "chat de IA",
      "GPT-4",
      "Claude",
      "Gemini",
      "búsqueda profunda",
      "programación en pareja",
      "asistente de código",
      "editor de texto",
      "herramienta de productividad",
      "aplicación web",
      "agente de IA",
      "alternativa a ChatGPT",
      "edición mágica",
      "escritura con IA",
      "herramientas de IA",
      "generador de anuncios con IA",
      "marketing con IA",
      "anuncios de vídeo de producto",
      "generador de anuncios para TikTok",
      "generador de Shorts",
      "generador de Reels",
      "avatar de IA",
      "avatar de IA para video",
      "generador de avatar para video",
      "poner avatar en video",
    ],
    ogTitle: "Chapax — Agente de IA Universal para la Web",
    ogDescription:
      "Aplicación web + extensión con Magic Edit. Chat con modelos líderes, búsqueda profunda y creación rápida de anuncios, vídeos de producto y avatares de IA para vídeo.",
    twitterTitle: "Chapax — Agente de IA Universal para la Web",
    twitterDescription:
      "Agente de IA universal: chat, búsqueda, código y edición con IA — además de anuncios, vídeos de producto y avatares de IA para vídeo.",
    siteName: "Chapax",
  },
  de: {
    title: "Chapax — Universeller KI-Agent für das Web",
    titleTemplate: "Chapax — %s",
    description:
      "Universeller KI-Agent mit Web-App und Browser-Erweiterung. Chat, Tiefensuche, Pair-Programming, tiefes Denken und Magic Edit — plus Produktvideos, Werbung, KI-Avatare für Videos und Content für TikTok, Shorts und Reels generieren.",
    keywords: [
      "KI-Assistent",
      "künstliche Intelligenz",
      "Browser-Erweiterung",
      "KI-Chat",
      "GPT-4",
      "Claude",
      "Gemini",
      "Tiefensuche",
      "Pair-Programming",
      "Code-Assistent",
      "Texteditor",
      "Produktivitätstool",
      "Web-App",
      "KI-Agent",
      "ChatGPT-Alternative",
      "Magic Edit",
      "KI-Schreiben",
      "KI-Tools",
      "KI Werbegenerator",
      "KI Marketing",
      "Produktvideo Werbung",
      "TikTok Werbegenerator",
      "Shorts Generator",
      "Reels Generator",
      "KI-Avatar",
      "KI-Avatar für Videos",
      "Video-Avatar Generator",
      "Avatar ins Video einfügen",
    ],
    ogTitle: "Chapax — Universeller KI-Agent für das Web",
    ogDescription:
      "Web-App + Browser-Erweiterung mit Magic Edit. Chatten, suchen, programmieren — und Werbung, Produktvideos sowie KI-Avatare für Videos erstellen.",
    twitterTitle: "Chapax — Universeller KI-Agent für das Web",
    twitterDescription:
      "Universeller KI-Agent: Chat, Suche, Code und Bearbeitung mit KI — plus Werbung, Produktvideos und KI-Avatare für Videos schneller erstellen.",
    siteName: "Chapax",
  },
  fr: {
    title: "Chapax — Agent IA Universel pour le Web",
    titleTemplate: "Chapax — %s",
    description:
      "Agent IA universel avec application web et extension de navigateur. Chat, recherche approfondie, programmation en binôme, réflexion profonde et Magic Edit — plus création de publicités, vidéos produit, avatars IA pour vidéo et contenu pour TikTok, Shorts et Reels.",
    keywords: [
      "assistant IA",
      "intelligence artificielle",
      "extension de navigateur",
      "chat IA",
      "GPT-4",
      "Claude",
      "Gemini",
      "recherche approfondie",
      "programmation en binôme",
      "assistant de code",
      "éditeur de texte",
      "outil de productivité",
      "application web",
      "agent IA",
      "alternative à ChatGPT",
      "édition magique",
      "écriture IA",
      "outils IA",
      "générateur de publicité IA",
      "marketing IA",
      "vidéo produit publicité",
      "générateur TikTok",
      "générateur Shorts",
      "générateur Reels",
      "avatar IA",
      "avatar IA pour vidéo",
      "générateur d’avatar vidéo",
      "incruster un avatar sur une vidéo",
    ],
    ogTitle: "Chapax — Agent IA Universel pour le Web",
    ogDescription:
      "Application web + extension avec Magic Edit. Discutez avec des modèles d’IA, faites de la recherche approfondie et créez des publicités, vidéos produit et avatars IA pour vidéo.",
    twitterTitle: "Chapax — Agent IA Universel pour le Web",
    twitterDescription:
      "Agent IA universel : chat, recherche, code et édition — plus publicités, vidéos produit et avatars IA pour vidéo générés plus vite.",
    siteName: "Chapax",
  },
  ar: {
    title: "Chapax — وكيل الذكاء الاصطناعي الشامل للويب",
    titleTemplate: "Chapax — %s",
    description:
      "وكيل ذكاء اصطناعي شامل مع تطبيق ويب قوي وامتداد متصفح. دردشة، بحث عميق، برمجة ثنائية، تفكير عميق وMagic Edit — بالإضافة إلى إنشاء إعلانات وفيديوهات منتجات وأفاتار ذكاء اصطناعي للفيديو ومحتوى لـ TikTok وShorts وReels.",
    keywords: [
      "مساعد الذكاء الاصطناعي",
      "الذكاء الاصطناعي",
      "امتداد المتصفح",
      "دردشة الذكاء الاصطناعي",
      "GPT-4",
      "Claude",
      "Gemini",
      "البحث العميق",
      "البرمجة الثنائية",
      "مساعد الكود",
      "محرر النصوص",
      "أداة إنتاجية",
      "تطبيق ويب",
      "وكيل الذكاء الاصطناعي",
      "بديل ChatGPT",
      "التحرير السحري",
      "الكتابة بالذكاء الاصطناعي",
      "أدوات الذكاء الاصطناعي",
      "مولد إعلانات بالذكاء الاصطناعي",
      "تسويق بالذكاء الاصطناعي",
      "إعلانات فيديو للمنتجات",
      "مولد إعلانات TikTok",
      "مولد Shorts",
      "مولد Reels",
      "أفاتار ذكاء اصطناعي",
      "أفاتار ذكاء اصطناعي للفيديو",
      "مولد أفاتار للفيديو",
      "دمج أفاتار على فيديو",
    ],
    ogTitle: "Chapax — وكيل الذكاء الاصطناعي الشامل للويب",
    ogDescription:
      "تطبيق ويب + امتداد متصفح مع Magic Edit. دردشة وبحث وبرمجة — وإنشاء إعلانات وفيديوهات منتجات وأفاتارات ذكاء اصطناعي للفيديو بسرعة.",
    twitterTitle: "Chapax — وكيل الذكاء الاصطناعي الشامل للويب",
    twitterDescription:
      "وكيل ذكاء اصطناعي شامل: دردشة وبحث وكود وتحرير — بالإضافة إلى إنشاء الإعلانات وفيديوهات المنتجات وأفاتار ذكاء اصطناعي للفيديو بسرعة.",
    siteName: "Chapax",
  },
};

/**
 * Получить метаданные для указанного языка
 */
export function getMetadata(locale: string): SEOMetadata {
  const normalizedLocale = locale.split("-")[0].toLowerCase() as SupportedLocale;
  return seoMetadata[normalizedLocale] || seoMetadata.en;
}

