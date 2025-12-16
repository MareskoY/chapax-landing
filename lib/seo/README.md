# SEO Configuration

Эта директория содержит все необходимые файлы для управления SEO на сайте Chapax.

## Файлы

### `metadata.ts`
Содержит переводы всех SEO мета-тегов для поддерживаемых языков:
- 🇬🇧 English (en)
- 🇷🇺 Русский (ru)
- 🇪🇸 Español (es)
- 🇩🇪 Deutsch (de)
- 🇫🇷 Français (fr)
- 🇸🇦 العربية (ar)

Для каждого языка определены:
- `title` - заголовок страницы
- `description` - описание для мета-тега description
- `keywords` - массив ключевых слов
- `ogTitle` - заголовок для Open Graph (Facebook, LinkedIn)
- `ogDescription` - описание для Open Graph
- `twitterTitle` - заголовок для Twitter Card
- `twitterDescription` - описание для Twitter Card
- `siteName` - название сайта

### `SEOHead.tsx`
React-компонент, который генерирует все необходимые SEO мета-теги:

#### Включает:
- ✅ Базовые мета-теги (title, description, keywords)
- ✅ Open Graph теги для социальных сетей
- ✅ Twitter Card теги
- ✅ Canonical URL
- ✅ Alternate hreflang для всех языков
- ✅ Structured Data (JSON-LD) для поисковиков
- ✅ Mobile-friendly теги
- ✅ Theme color
- ✅ Robots meta tags

#### Использование:

```tsx
import SEOHead from "@/lib/seo/SEOHead";

export default function Page() {
  return (
    <div>
      <SEOHead />
      {/* остальной контент */}
    </div>
  );
}
```

#### С кастомными параметрами:

```tsx
<SEOHead
  title="Custom Page Title"
  description="Custom description"
  ogImage="/custom-image.jpg"
  canonical="https://chapax.com/custom-page"
/>
```

## Добавление нового языка

1. Добавьте новый язык в `metadata.ts`:
```typescript
export const seoMetadata: Record<SupportedLocale, SEOMetadata> = {
  // ... существующие языки
  it: {
    title: "Chapax — ...",
    // ... остальные поля
  }
};
```

2. Обновите тип `SupportedLocale`:
```typescript
export type SupportedLocale = "en" | "ru" | "es" | "de" | "fr" | "ar" | "it";
```

3. Добавьте язык в массив `SUPPORTED_LOCALES` в `SEOHead.tsx`

## Рекомендации

### Изображение для Open Graph
- Размер: 1200×630 px (рекомендуемый Facebook/Twitter)
- Формат: JPG или PNG
- Расположение: `/public/chapax-og-image.jpg`
- Максимальный размер: до 8 MB

### Ключевые слова
- Используйте 10-20 релевантных ключевых слов
- Включите вариации названия продукта
- Добавьте основные функции и категории

### Описания
- **Title**: 50-60 символов (оптимально для Google)
- **Description**: 150-160 символов
- **OG Description**: до 200 символов
- **Twitter Description**: до 200 символов

## Проверка SEO

Используйте следующие инструменты для проверки:
- [Google Search Console](https://search.google.com/search-console)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Schema.org Validator](https://validator.schema.org/)

## Дополнительные файлы

Также созданы:
- `/public/robots.txt` - правила для поисковых роботов
- `/public/manifest.json` - манифест для PWA
- `/public/sitemap.xml` - карта сайта (создайте при необходимости)

