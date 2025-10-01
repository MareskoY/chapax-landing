import "@/styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@lingui/react";
import { i18n, activateLocale, preactivateLocaleSync, isSupportedLocale, normalizeLocale, countryCodeToLocale } from "../lib/i18n";
import { useEffect } from "react";
import { messages as enMessages } from "../locales/en/messages";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// (removed module-scope preactivation to avoid race with page hydration)

export default function App({ Component, pageProps }: AppProps) {
  // Ensure locale is active before first client render, using SSR-provided value when available
  if (typeof window !== "undefined") {
    const hinted = (pageProps as any)?.__initialLocale as string | undefined;
    const initial = isSupportedLocale(hinted || "") ? hinted! : "en";
    preactivateLocaleSync(initial);
  }
  useEffect(() => {
    let cancelled = false;
    (async () => {
      // 1) If storage already has a value, respect it and never auto-detect
      const stored = typeof window !== "undefined" ? localStorage.getItem("chapax-locale") : null;
      if (stored && isSupportedLocale(stored)) {
        const applied = await activateLocale(stored, { persist: false });
        if (process.env.NODE_ENV === "development") {
          console.log("[i18n] locale from localStorage:", stored, "=>", applied);
        }
        return;
      }

      // 2) First visit: if cookie exists (SSR previously detected), apply it and persist to storage
      try {
        const cookie = document.cookie || "";
        const match = cookie.split(/;\s*/).find((c) => c.startsWith("chapax-locale="));
        const fromCookie = match ? decodeURIComponent(match.split("=")[1] || "") : "";
        if (fromCookie && isSupportedLocale(fromCookie)) {
          await activateLocale(fromCookie, { persist: true });
          if (process.env.NODE_ENV === "development") {
            console.log("[i18n] first-visit from cookie =>", fromCookie);
          }
          return;
        }
      } catch {}

      // 3) No cookie: detect once via API (server-side heuristics)
      try {
        const r = await fetch("/api/detect-locale", { cache: "no-store" });
        if (r.ok) {
          const j = (await r.json()) as { locale?: string; country?: string };
          const serverLocale = j?.locale && isSupportedLocale(j.locale) ? j.locale : countryCodeToLocale(j?.country || "");
          if (serverLocale) {
            await activateLocale(serverLocale, { persist: true });
            if (process.env.NODE_ENV === "development") {
              console.log("[i18n] first-visit detected (server):", j, "=>", serverLocale);
            }
            return;
          }
        }
      } catch {}

      // 4) Client-side geo fallback (use client IP): ipapi.co country → locale
      try {
        const r = await fetch("https://ipapi.co/country/", { cache: "no-store" });
        const t = r.ok ? (await r.text()).trim() : "";
        if (t) {
          const loc = countryCodeToLocale(t);
          if (loc) {
            await activateLocale(loc, { persist: true });
            if (process.env.NODE_ENV === "development") {
              console.log("[i18n] first-visit detected (client ipapi.co):", t, "=>", loc);
            }
            return;
          }
        }
      } catch {}

      // 5) Fallback if all else fails: use navigator, persist once
      const nav = typeof navigator !== "undefined" ? navigator.language : undefined;
      const navLocale = normalizeLocale(nav || "");
      await activateLocale(navLocale, { persist: true });
      if (process.env.NODE_ENV === "development") {
        console.log("[i18n] first-visit navigator fallback:", nav, "=>", navLocale);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange>
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </I18nProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = {
    pageProps: {},
  } as any;
  try {
    const cookieHeader = appContext?.ctx?.req?.headers?.cookie || "";
    const match = cookieHeader.split(/;\s*/).find((c) => c.startsWith("chapax-locale="));
    const cookieLocale = match ? decodeURIComponent(match.split("=")[1] || "") : "";
    if (cookieLocale && isSupportedLocale(cookieLocale)) {
      preactivateLocaleSync(cookieLocale);
      appProps.pageProps = { ...(appProps.pageProps || {}), __initialLocale: cookieLocale };
    } else {
      // No cookie: render SSR in English to match client's first render
      preactivateLocaleSync("en");
      appProps.pageProps = { ...(appProps.pageProps || {}), __initialLocale: "en" };
    }
  } catch {}
  if (typeof (appContext.Component as any).getInitialProps === "function") {
    const pageProps = await (appContext.Component as any).getInitialProps(appContext.ctx);
    appProps.pageProps = { ...(appProps.pageProps || {}), ...(pageProps || {}) };
  }
  return appProps;
};
