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
      "Universal AI agent with a powerful web app and browser extension. Chat with AI models, deep search, pair coding, deep thinking, and Magic Edit for instant text fixes across any page.",
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
    ],
    ogTitle: "Chapax — Universal AI Agent for the Web",
    ogDescription:
      "Web app + browser extension with Magic Edit. Chat with leading AI models, deep search, pair coding, instant text fixes across any page and document.",
    twitterTitle: "Chapax — Universal AI Agent for the Web",
    twitterDescription:
      "Universal AI agent: chat, search, code, and edit with AI. Powerful web app + browser extension with Magic Edit.",
    siteName: "Chapax",
  },
  ru: {
    title: "Chapax — Универсальный AI-агент для веба",
    titleTemplate: "Chapax — %s",
    description:
      "Универсальный AI-агент с мощным веб-приложением и расширением для браузера. Общайтесь с AI-моделями, глубокий поиск, парное программирование, глубокое мышление и Magic Edit для мгновенных исправлений текста на любой странице.",
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
    ],
    ogTitle: "Chapax — Универсальный AI-агент для веба",
    ogDescription:
      "Веб-приложение + расширение для браузера с Magic Edit. Общайтесь с ведущими AI-моделями, глубокий поиск, парное программирование, мгновенные исправления текста на любой странице.",
    twitterTitle: "Chapax — Универсальный AI-агент для веба",
    twitterDescription:
      "Универсальный AI-агент: общение, поиск, код и редактирование с помощью AI. Мощное веб-приложение + расширение для браузера с Magic Edit.",
    siteName: "Chapax",
  },
  es: {
    title: "Chapax — Agente de IA Universal para la Web",
    titleTemplate: "Chapax — %s",
    description:
      "Agente de IA universal con una potente aplicación web y extensión de navegador. Chatea con modelos de IA, búsqueda profunda, programación en pareja, pensamiento profundo y Magic Edit para correcciones instantáneas de texto en cualquier página.",
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
    ],
    ogTitle: "Chapax — Agente de IA Universal para la Web",
    ogDescription:
      "Aplicación web + extensión de navegador con Magic Edit. Chatea con los principales modelos de IA, búsqueda profunda, programación en pareja, correcciones instantáneas de texto en cualquier página.",
    twitterTitle: "Chapax — Agente de IA Universal para la Web",
    twitterDescription:
      "Agente de IA universal: chat, búsqueda, código y edición con IA. Potente aplicación web + extensión de navegador con Magic Edit.",
    siteName: "Chapax",
  },
  de: {
    title: "Chapax — Universeller KI-Agent für das Web",
    titleTemplate: "Chapax — %s",
    description:
      "Universeller KI-Agent mit leistungsstarker Web-App und Browser-Erweiterung. Chatten Sie mit KI-Modellen, tiefe Suche, Pair-Programming, tiefes Denken und Magic Edit für sofortige Textkorrektur auf jeder Seite.",
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
    ],
    ogTitle: "Chapax — Universeller KI-Agent für das Web",
    ogDescription:
      "Web-App + Browser-Erweiterung mit Magic Edit. Chatten Sie mit führenden KI-Modellen, Tiefensuche, Pair-Programming, sofortige Textkorrektur auf jeder Seite.",
    twitterTitle: "Chapax — Universeller KI-Agent für das Web",
    twitterDescription:
      "Universeller KI-Agent: Chat, Suche, Code und Bearbeitung mit KI. Leistungsstarke Web-App + Browser-Erweiterung mit Magic Edit.",
    siteName: "Chapax",
  },
  fr: {
    title: "Chapax — Agent IA Universel pour le Web",
    titleTemplate: "Chapax — %s",
    description:
      "Agent IA universel avec une application web puissante et une extension de navigateur. Discutez avec des modèles d'IA, recherche approfondie, programmation en binôme, réflexion profonde et Magic Edit pour des corrections de texte instantanées sur n'importe quelle page.",
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
    ],
    ogTitle: "Chapax — Agent IA Universel pour le Web",
    ogDescription:
      "Application web + extension de navigateur avec Magic Edit. Discutez avec les principaux modèles d'IA, recherche approfondie, programmation en binôme, corrections de texte instantanées sur n'importe quelle page.",
    twitterTitle: "Chapax — Agent IA Universel pour le Web",
    twitterDescription:
      "Agent IA universel : chat, recherche, code et édition avec l'IA. Application web puissante + extension de navigateur avec Magic Edit.",
    siteName: "Chapax",
  },
  ar: {
    title: "Chapax — وكيل الذكاء الاصطناعي الشامل للويب",
    titleTemplate: "Chapax — %s",
    description:
      "وكيل ذكاء اصطناعي شامل مع تطبيق ويب قوي وامتداد متصفح. تحدث مع نماذج الذكاء الاصطناعي، البحث العميق، البرمجة الثنائية، التفكير العميق وMagic Edit لإصلاحات النص الفورية على أي صفحة.",
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
    ],
    ogTitle: "Chapax — وكيل الذكاء الاصطناعي الشامل للويب",
    ogDescription:
      "تطبيق ويب + امتداد متصفح مع Magic Edit. تحدث مع نماذج الذكاء الاصطناعي الرائدة، البحث العميق، البرمجة الثنائية، إصلاحات النص الفورية على أي صفحة.",
    twitterTitle: "Chapax — وكيل الذكاء الاصطناعي الشامل للويب",
    twitterDescription:
      "وكيل ذكاء اصطناعي شامل: الدردشة، البحث، الكود والتحرير بالذكاء الاصطناعي. تطبيق ويب قوي + امتداد متصفح مع Magic Edit.",
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

