const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOCALES_DIR = path.join(ROOT, 'locales');

const languages = ['es','de','fr','ru','ar'];

const dict = {
  es: {
    'Pricing': 'Precios',
    'Universal AI agent for the web': 'Agente de IA universal para la web',
    'Universal AI agent. On any page.': 'Agente de IA universal. En cualquier página.',
    'Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.': 'Chatea, busca, programa en pareja, piensa a fondo y transforma texto con Magic Edit. Rápido, minimalista y funciona en toda la web y tus documentos.',
    'Open Web App': 'Abrir Web App',
    'Get Chrome Extension': 'Obtener extensión de Chrome',
    'Integrates with your flow. Designed to support many AI models.': 'Se integra con tu flujo. Diseñado para muchos modelos de IA.',
    'WEB APP': 'WEB APP',
    'Smart model routing': 'Enrutamiento inteligente de modelos',
    'Top models from any provider — automatically selected.': 'Mejores modelos de cualquier proveedor — seleccionados automáticamente.',
    'AI image generation': 'Generación de imágenes con IA',
    'Magic Wand photo edits in seconds.': 'Ediciones de fotos Magic Wand en segundos.',
    'Real‑time data & Deep Search': 'Datos en tiempo real y Búsqueda Profunda',
    'Live search, reasoning, and grounded answers.': 'Búsqueda en vivo, razonamiento y respuestas fundamentadas.',
    'BROWSER EXTENSION': 'EXTENSIÓN DEL NAVEGADOR',
    'On‑page chat': 'Chat en página',
    'Magic Edit': 'Magic Edit',
    'Get Extension': 'Obtener extensión',
    'Model‑agnostic': 'Independiente del modelo',
    'Built to support many AI models over time.': 'Diseñado para soportar muchos modelos de IA.',
    'Works with your docs': 'Funciona con tus documentos',
    'Bring PDFs, notes, and knowledge — stay in flow.': 'Trae PDFs, notas y conocimiento — mantén el flujo.',
    'One‑click actions': 'Acciones de un clic',
    'Apply Magic Edit, copy, insert, or open in app instantly.': 'Aplica Magic Edit, copia, inserta o abre en la app al instante.',
    'Think deeper, decide faster': 'Piensa más profundo, decide más rápido',
    'Knowledge of the web, on tap': 'Conocimiento de la web, al instante',
    'Pair code without context‑switch': 'Programa en pareja sin cambiar de contexto',
    'Grounded answers with live sources': 'Respuestas fundamentadas con fuentes en vivo',
    'Magic Edit: write, fix, translate': 'Magic Edit: escribe, corrige, traduce',
    'Speed: one‑click actions everywhere': 'Velocidad: acciones de un clic en todas partes',
    'Fast. Minimal. Helpful.': 'Rápido. Minimalista. Útil.'
  },
  de: {
    'Pricing': 'Preise',
    'Universal AI agent for the web': 'Universeller KI‑Agent fürs Web',
    'Universal AI agent. On any page.': 'Universeller KI‑Agent. Auf jeder Seite.',
    'Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.': 'Chatten, suchen, gemeinsam coden, tief nachdenken und Texte mit Magic Edit transformieren. Schnell, minimal und überall im Web und in deinen Dokumenten.',
    'Open Web App': 'Web‑App öffnen',
    'Get Chrome Extension': 'Chrome‑Erweiterung holen',
    'Integrates with your flow. Designed to support many AI models.': 'In deinen Flow integriert. Ausgelegt für viele KI‑Modelle.',
    'WEB APP': 'WEB‑APP',
    'Smart model routing': 'Intelligentes Modell‑Routing',
    'Top models from any provider — automatically selected.': 'Top‑Modelle jedes Anbieters — automatisch gewählt.',
    'AI image generation': 'KI‑Bildgenerierung',
    'Magic Wand photo edits in seconds.': 'Foto‑Bearbeitung mit Magic Wand in Sekunden.',
    'Real‑time data & Deep Search': 'Echtzeitdaten & Deep Search',
    'Live search, reasoning, and grounded answers.': 'Live‑Suche, Reasoning und fundierte Antworten.',
    'BROWSER EXTENSION': 'BROWSER‑ERWEITERUNG',
    'On‑page chat': 'On‑Page‑Chat',
    'Magic Edit': 'Magic Edit',
    'Get Extension': 'Erweiterung holen',
    'Model‑agnostic': 'Modell‑agnostisch',
    'Built to support many AI models over time.': 'Entwickelt für viele KI‑Modelle.',
    'Works with your docs': 'Funktioniert mit deinen Dokumenten',
    'Bring PDFs, notes, and knowledge — stay in flow.': 'Bringe PDFs, Notizen und Wissen ein — bleib im Flow.',
    'One‑click actions': 'Aktionen mit einem Klick',
    'Apply Magic Edit, copy, insert, or open in app instantly.': 'Magic Edit anwenden, kopieren, einfügen oder sofort in der App öffnen.',
    'Think deeper, decide faster': 'Tiefer denken, schneller entscheiden',
    'Knowledge of the web, on tap': 'Wissen aus dem Web, sofort verfügbar',
    'Pair code without context‑switch': 'Pair‑Coding ohne Kontextwechsel',
    'Grounded answers with live sources': 'Fundierte Antworten mit Live‑Quellen',
    'Magic Edit: write, fix, translate': 'Magic Edit: schreiben, korrigieren, übersetzen',
    'Speed: one‑click actions everywhere': 'Geschwindigkeit: Ein‑Klick‑Aktionen überall',
    'Fast. Minimal. Helpful.': 'Schnell. Minimal. Hilfreich.'
  },
  fr: {
    'Pricing': 'Tarifs',
    'Universal AI agent for the web': 'Agent IA universel pour le web',
    'Universal AI agent. On any page.': 'Agent IA universel. Sur n’importe quelle page.',
    'Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.': 'Discutez, recherchez, codez en binôme, réfléchissez en profondeur et transformez le texte avec Magic Edit. Rapide, minimal et fonctionne sur le web et vos documents.',
    'Open Web App': 'Ouvrir l’application web',
    'Get Chrome Extension': 'Obtenir l’extension Chrome',
    'Integrates with your flow. Designed to support many AI models.': 'S’intègre à votre flux. Conçu pour de nombreux modèles d’IA.',
    'WEB APP': 'APPLICATION WEB',
    'Smart model routing': 'Routage intelligent des modèles',
    'Top models from any provider — automatically selected.': 'Meilleurs modèles de tout fournisseur — sélectionnés automatiquement.',
    'AI image generation': 'Génération d’images par IA',
    'Magic Wand photo edits in seconds.': 'Retouches photo Magic Wand en quelques secondes.',
    'Real‑time data & Deep Search': 'Données en temps réel et Deep Search',
    'Live search, reasoning, and grounded answers.': 'Recherche en direct, raisonnement et réponses étayées.',
    'BROWSER EXTENSION': 'EXTENSION NAVIGATEUR',
    'On‑page chat': 'Chat sur la page',
    'Magic Edit': 'Magic Edit',
    'Get Extension': 'Obtenir l’extension',
    'Model‑agnostic': 'Indépendant du modèle',
    'Built to support many AI models over time.': 'Conçu pour prendre en charge de nombreux modèles d’IA.',
    'Works with your docs': 'Fonctionne avec vos documents',
    'Bring PDFs, notes, and knowledge — stay in flow.': 'Apportez des PDF, des notes et des connaissances — restez dans le flux.',
    'One‑click actions': 'Actions en un clic',
    'Apply Magic Edit, copy, insert, or open in app instantly.': 'Appliquez Magic Edit, copiez, insérez ou ouvrez dans l’app instantanément.',
    'Think deeper, decide faster': 'Réfléchissez plus, décidez plus vite',
    'Knowledge of the web, on tap': 'Le savoir du web, à portée de main',
    'Pair code without context‑switch': 'Coder en binôme sans changer de contexte',
    'Grounded answers with live sources': 'Réponses étayées avec sources en direct',
    'Magic Edit: write, fix, translate': 'Magic Edit : écrire, corriger, traduire',
    'Speed: one‑click actions everywhere': 'Vitesse : actions en un clic partout',
    'Fast. Minimal. Helpful.': 'Rapide. Minimal. Utile.'
  },
  ru: {
    'Pricing': 'Цены',
    'Universal AI agent for the web': 'Универсальный ИИ‑агент для веба',
    'Universal AI agent. On any page.': 'Универсальный ИИ‑агент. На любой странице.',
    'Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.': 'Чат, поиск, парное программирование, глубокое мышление и преобразование текста с Magic Edit. Быстро, минималистично и работает по всему вебу и в ваших документах.',
    'Open Web App': 'Открыть веб‑приложение',
    'Get Chrome Extension': 'Установить расширение Chrome',
    'Integrates with your flow. Designed to support many AI models.': 'Встраивается в ваш поток. Поддерживает множество ИИ‑моделей.',
    'WEB APP': 'ВЕБ‑ПРИЛОЖЕНИЕ',
    'Smart model routing': 'Умная маршрутизация моделей',
    'Top models from any provider — automatically selected.': 'Лучшие модели от любого провайдера — выбираются автоматически.',
    'AI image generation': 'Генерация изображений ИИ',
    'Magic Wand photo edits in seconds.': 'Редактирование фото Magic Wand за секунды.',
    'Real‑time data & Deep Search': 'Данные в реальном времени и Deep Search',
    'Live search, reasoning, and grounded answers.': 'Живой поиск, рассуждения и обоснованные ответы.',
    'BROWSER EXTENSION': 'РАСШИРЕНИЕ БРАУЗЕРА',
    'On‑page chat': 'Он‑пейдж чат',
    'Magic Edit': 'Magic Edit',
    'Get Extension': 'Установить расширение',
    'Model‑agnostic': 'Модель‑агностик',
    'Built to support many AI models over time.': 'Создано для поддержки многих ИИ‑моделей.',
    'Works with your docs': 'Работает с вашими документами',
    'Bring PDFs, notes, and knowledge — stay in flow.': 'Подключайте PDF, заметки и знания — оставайтесь в потоке.',
    'One‑click actions': 'Действия в один клик',
    'Apply Magic Edit, copy, insert, or open in app instantly.': 'Применяйте Magic Edit, копируйте, вставляйте или открывайте в приложении мгновенно.',
    'Think deeper, decide faster': 'Думай глубже, решай быстрее',
    'Knowledge of the web, on tap': 'Знание веба — на расстоянии клика',
    'Pair code without context‑switch': 'Парное программирование без смены контекста',
    'Grounded answers with live sources': 'Обоснованные ответы с живыми источниками',
    'Magic Edit: write, fix, translate': 'Magic Edit: писать, исправлять, переводить',
    'Speed: one‑click actions everywhere': 'Скорость: действия в один клик везде',
    'Fast. Minimal. Helpful.': 'Быстро. Минимально. Полезно.'
  },
  ar: {
    'Pricing': 'الأسعار',
    'Universal AI agent for the web': 'وكيل ذكاء اصطناعي عالمي للويب',
    'Universal AI agent. On any page.': 'وكيل ذكاء اصطناعي عالمي. على أي صفحة.',
    'Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.': 'دردشة وبحث وبرمجة ثنائية وتفكير عميق وتحويل النص باستخدام Magic Edit. سريع وبسيط ويعمل عبر الويب ومستنداتك.',
    'Open Web App': 'افتح تطبيق الويب',
    'Get Chrome Extension': 'احصل على إضافة كروم',
    'Integrates with your flow. Designed to support many AI models.': 'يتكامل مع سير عملك. مصمم لدعم نماذج ذكاء اصطناعي متعددة.',
    'WEB APP': 'تطبيق ويب',
    'Smart model routing': 'توجيه ذكي للنماذج',
    'Top models from any provider — automatically selected.': 'أفضل النماذج من أي مزود — يتم اختيارها تلقائيًا.',
    'AI image generation': 'توليد الصور بالذكاء الاصطناعي',
    'Magic Wand photo edits in seconds.': 'تعديلات صور Magic Wand في ثوانٍ.',
    'Real‑time data & Deep Search': 'بيانات فورية وبحث عميق',
    'Live search, reasoning, and grounded answers.': 'بحث مباشر واستدلال وإجابات موثّقة.',
    'BROWSER EXTENSION': 'إضافة متصفح',
    'On‑page chat': 'دردشة على الصفحة',
    'Magic Edit': 'Magic Edit',
    'Get Extension': 'احصل على الإضافة',
    'Model‑agnostic': 'غير معتمد على نموذج محدد',
    'Built to support many AI models over time.': 'مصمم لدعم العديد من نماذج الذكاء الاصطناعي.',
    'Works with your docs': 'يعمل مع مستنداتك',
    'Bring PDFs, notes, and knowledge — stay in flow.': 'أحضر ملفات PDF والملاحظات والمعرفة — وابق في التدفق.',
    'One‑click actions': 'إجراءات بنقرة واحدة',
    'Apply Magic Edit, copy, insert, or open in app instantly.': 'طبّق Magic Edit أو انسخ أو أدخل أو افتح في التطبيق فورًا.',
    'Think deeper, decide faster': 'فكّر بعمق واتخذ القرار أسرع',
    'Knowledge of the web, on tap': 'معرفة الويب في متناول يدك',
    'Pair code without context‑switch': 'برمجة ثنائية دون تبديل السياق',
    'Grounded answers with live sources': 'إجابات موثّقة بمصادر مباشرة',
    'Magic Edit: write, fix, translate': 'Magic Edit: كتابة وإصلاح وترجمة',
    'Speed: one‑click actions everywhere': 'السرعة: إجراءات بنقرة واحدة في كل مكان',
    'Fast. Minimal. Helpful.': 'سريع. بسيط. مفيد.'
  }
};

function fillLocale(locale) {
  const poPath = path.join(LOCALES_DIR, locale, 'messages.po');
  if (!fs.existsSync(poPath)) return;
  const content = fs.readFileSync(poPath, 'utf8');
  const lines = content.split(/\r?\n/);
  const out = [];
  let currentId = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('msgid "')) {
      currentId = line.slice(7, -1);
      out.push(line);
      continue;
    }
    if (line.startsWith('msgstr "')) {
      if (currentId) {
        const translation = (dict[locale] && dict[locale][currentId]) || (locale === 'en' ? currentId : currentId);
        out.push(`msgstr "${translation.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
        currentId = null;
        continue;
      }
    }
    out.push(line);
  }
  fs.writeFileSync(poPath, out.join('\n'), 'utf8');
}

function main() {
  for (const l of languages) {
    fillLocale(l);
  }
  console.log('Filled translations for: ' + languages.join(', '));
}

main();


