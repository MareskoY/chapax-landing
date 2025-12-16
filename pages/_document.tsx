import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        {/* Theme colors и basic meta теги вынесены в SEOHead компонент */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
