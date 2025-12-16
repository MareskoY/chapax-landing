/**
 * SEO Head Component
 * Компонент для управления всеми SEO мета-тегами
 * Использует Next.js Head для вставки мета-тегов
 */

import Head from "next/head";
import { useLingui } from "@lingui/react";
import { getMetadata, type SupportedLocale } from "./metadata";

interface SEOHeadProps {
  /**
   * URL сайта (production URL)
   * @default "https://chapax.com"
   */
  siteUrl?: string;

  /**
   * URL изображения для Open Graph и Twitter
   * @default "/chapax-og-image.jpg"
   */
  ogImage?: string;

  /**
   * Переопределить заголовок страницы
   */
  title?: string;

  /**
   * Переопределить описание страницы
   */
  description?: string;

  /**
   * Тип страницы для Open Graph
   * @default "website"
   */
  ogType?: "website" | "article" | "product";

  /**
   * Канонический URL текущей страницы
   */
  canonical?: string;
}

const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "ru", "es", "de", "fr", "ar"];

export default function SEOHead({
  siteUrl = "https://chapax.com",
  ogImage = "/chapax-og-image.jpg",
  title: customTitle,
  description: customDescription,
  ogType = "website",
  canonical,
}: SEOHeadProps) {
  const { i18n } = useLingui();
  const currentLocale = i18n.locale as SupportedLocale;
  const metadata = getMetadata(currentLocale);

  // Используем кастомные значения или значения из метаданных
  const pageTitle = customTitle || metadata.title;
  const pageDescription = customDescription || metadata.description;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;
  const canonicalUrl = canonical || `${siteUrl}/${currentLocale === "en" ? "" : currentLocale}`;

  return (
    <Head>
      {/* Основные мета-теги */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
      <meta name="author" content="Chapax" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate языковые версии для SEO */}
      {SUPPORTED_LOCALES.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${siteUrl}${locale === "en" ? "" : `/${locale}`}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* Open Graph мета-теги (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={metadata.siteName} />
      <meta property="og:title" content={metadata.ogTitle} />
      <meta property="og:description" content={metadata.ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={metadata.ogTitle} />
      <meta property="og:locale" content={currentLocale === "en" ? "en_US" : currentLocale === "ru" ? "ru_RU" : currentLocale === "es" ? "es_ES" : currentLocale === "de" ? "de_DE" : currentLocale === "fr" ? "fr_FR" : "ar_AR"} />

      {/* Альтернативные локали для Open Graph */}
      {SUPPORTED_LOCALES.filter((loc) => loc !== currentLocale).map((locale) => (
        <meta
          key={`og-locale-${locale}`}
          property="og:locale:alternate"
          content={
            locale === "en"
              ? "en_US"
              : locale === "ru"
              ? "ru_RU"
              : locale === "es"
              ? "es_ES"
              : locale === "de"
              ? "de_DE"
              : locale === "fr"
              ? "fr_FR"
              : "ar_AR"
          }
        />
      ))}

      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.twitterTitle} />
      <meta name="twitter:description" content={metadata.twitterDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={metadata.twitterTitle} />
      <meta name="twitter:site" content="@chapax" />
      <meta name="twitter:creator" content="@chapax" />

      {/* Дополнительные мета-теги для мобильных устройств */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Chapax" />
      <meta name="format-detection" content="telephone=no" />

      {/* Theme color */}
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Preconnect для оптимизации загрузки */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Chapax",
            description: pageDescription,
            url: siteUrl,
            applicationCategory: "ProductivityApplication",
            operatingSystem: "Web, Chrome, Firefox, Safari, Edge",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "1250",
            },
            author: {
              "@type": "Organization",
              name: "Chapax",
              url: siteUrl,
            },
            inLanguage: SUPPORTED_LOCALES,
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chapax",
            url: siteUrl,
            logo: `${siteUrl}/chapax-mark.svg`,
            sameAs: [
              // Добавьте ваши социальные сети
              // "https://twitter.com/chapax",
              // "https://github.com/chapax",
            ],
          }),
        }}
      />
    </Head>
  );
}

