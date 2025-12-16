# Landing Page Components

Компоненты для главной страницы лендинга Chapax.

## Структура компонентов

### Header.tsx
Хедер сайта с навигацией и кнопками действий.

Особенности:
- Адаптивный дизайн (мобильный и десктоп)
- Переключатель темы (светлая/темная)
- Выбор языка (через Lingui)
- CTA кнопки (Sign up, Download App)
- Минималистичный логотип

### HeroSection.tsx
Главная героическая секция страницы.

Особенности:
- Двухколоночный layout (контент слева, телефон справа)
- Яркая цветовая схема фона (#ff3ad4 - розовый/пурпурный)
- Mockup iPhone с реальным скриншотом приложения
- Анимированная иконка робота
- Кнопки для скачивания (App Store, Google Play)
- Get Started кнопка с ярким фоном
- Scroll indicator внизу

Цветовые схемы (SCHEMES):
```typescript
{ bg: '#ff3ad4', text: '#0B0B0B', dot: '#0B0B0B', bar: 'dark' }  // Розовый/пурпурный
{ bg: '#F7E8C8', text: '#1A40FF', dot: '#1A40FF', bar: 'dark' }  // Бежевый
{ bg: '#FF6F61', text: '#1434FF', dot: '#1434FF', bar: 'dark' }  // Коралловый
{ bg: '#0F2D1F', text: '#FF6FE0', dot: '#FF6FE0', bar: 'light' } // Темно-зеленый
```

### PlatformsSection.tsx
Секция с карточками платформ.

Особенности:
- 4 карточки платформ: Web App, Chrome Extension, iOS, Android
- Hover эффекты с увеличением и подсветкой
- Анимация появления при скролле (Framer Motion)
- Респонсивная сетка (1-2-4 колонки)

### Icons.tsx
Переиспользуемые иконки для платформ.

Экспортируемые иконки:
- `AppleIcon` - логотип Apple
- `GooglePlayIcon` - логотип Google Play
- `WebIcon` - иконка глобуса для веб-приложения
- `ChromeIcon` - иконка для Chrome расширения

Все иконки принимают prop `className` для кастомизации размера.

## Использование

```tsx
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import PlatformsSection from "../components/landing/PlatformsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PlatformsSection />
        {/* остальные секции */}
      </main>
    </>
  );
}
```

## Зависимости

- `@lingui/react` - интернационализация
- `framer-motion` - анимации
- `lucide-react` - иконки
- Tailwind CSS - стилизация

## Адаптивность

Все компоненты полностью адаптивны и используют Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## Дизайн референс

Дизайн основан на современных трендах:
- Яркие акцентные цвета
- Большие, жирные заголовки
- Mockup устройств с реальными скриншотами
- Плавные анимации и hover эффекты
- Минималистичная навигация



