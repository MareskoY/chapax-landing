import { i18n as lingui } from "@lingui/core";
import { detect, fromNavigator, fromStorage, fromHtmlTag } from "@lingui/detect-locale";
// Statically import messages to allow synchronous preactivation on the client
import { messages as arMessages } from "../../locales/ar/messages";
import { messages as esMessages } from "../../locales/es/messages";
import { messages as deMessages } from "../../locales/de/messages";
import { messages as frMessages } from "../../locales/fr/messages";
import { messages as ruMessages } from "../../locales/ru/messages";
import { messages as enMessages } from "../../locales/en/messages";

export const SUPPORTED_LOCALES = ["ar", "es", "de", "fr", "ru", "en"] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export function isSupportedLocale(locale: string | undefined | null): locale is SupportedLocale {
  if (!locale) return false;
  const base = locale.split("-")[0];
  return (SUPPORTED_LOCALES as readonly string[]).includes(base);
}

export function normalizeLocale(locale: string | undefined | null): SupportedLocale {
  const base = (locale || "en").split("-")[0].toLowerCase();
  return (isSupportedLocale(base) ? base : "en") as SupportedLocale;
}

export function countryCodeToLocale(countryCode: string | undefined | null): SupportedLocale | null {
  const c = (countryCode || "").toUpperCase();
  switch (c) {
    case "RU":
      return "ru";
    case "DE":
      return "de";
    case "FR":
      return "fr";
    case "ES":
    case "AR":
    case "MX":
    case "CL":
    case "CO":
      return "es";
    case "AE":
    case "SA":
    case "EG":
    case "QA":
    case "KW":
    case "BH":
    case "JO":
    case "MA":
    case "DZ":
    case "TN":
      return "ar";
    case "US":
    case "GB":
    case "CA":
    case "AU":
    case "IE":
    case "IN":
      return "en";
    default:
      return null;
  }
}

const PRELOADED_MESSAGES: Record<SupportedLocale, any> = {
  ar: arMessages as any,
  es: esMessages as any,
  de: deMessages as any,
  fr: frMessages as any,
  ru: ruMessages as any,
  en: enMessages as any,
};

async function dynamicImportMessages(locale: SupportedLocale) {
  switch (locale) {
    case "ar": {
      const mod: any = await import("../../locales/ar/messages.js");
      return mod?.messages || mod?.default?.messages || mod?.default || {};
    }
    case "es": {
      const mod: any = await import("../../locales/es/messages.js");
      return mod?.messages || mod?.default?.messages || mod?.default || {};
    }
    case "de": {
      const mod: any = await import("../../locales/de/messages.js");
      return mod?.messages || mod?.default?.messages || mod?.default || {};
    }
    case "fr": {
      const mod: any = await import("../../locales/fr/messages.js");
      return mod?.messages || mod?.default?.messages || mod?.default || {};
    }
    case "ru": {
      const mod: any = await import("../../locales/ru/messages.js");
      return mod?.messages || mod?.default?.messages || mod?.default || {};
    }
    case "en":
    default: {
      const mod: any = await import("../../locales/en/messages.js");
      return mod?.messages || mod?.default?.messages || mod?.default || {};
    }
  }
}

export async function activateLocale(localeHint?: string, opts?: { persist?: boolean }) {
  const detected = normalizeLocale(
    localeHint ||
      detect(fromStorage("chapax-locale"), fromHtmlTag("lang"), fromNavigator()) ||
      "en"
  );
  const messages = await dynamicImportMessages(detected);
  lingui.load(detected, messages || {});
  lingui.activate(detected);
  try {
    const shouldPersist = opts?.persist !== false; // default to true
    if (shouldPersist && typeof window !== "undefined") localStorage.setItem("chapax-locale", detected);
    if (typeof document !== "undefined") {
      document.documentElement.lang = detected;
      document.documentElement.dir = detected === "ar" ? "rtl" : "ltr";
      if (shouldPersist) {
        // Persist cookie so SSR can render the same locale and avoid hydration mismatch
        try {
          document.cookie = `chapax-locale=${detected}; Path=/; Max-Age=31536000; SameSite=Lax`;
        } catch {}
      }
    }
  } catch {}
  return detected;
}

// Synchronous preactivation used at app boot to avoid language flash when a stored locale exists
export function preactivateLocaleSync(localeHint?: string): SupportedLocale | null {
  let hint = localeHint || "";
  if (!hint && typeof window !== "undefined") {
    hint = localStorage.getItem("chapax-locale") || "";
    if (!hint && typeof document !== "undefined") {
      try {
        const cookie = document.cookie || "";
        const match = cookie.split(/;\s*/).find((c) => c.startsWith("chapax-locale="));
        const fromCookie = match ? decodeURIComponent(match.split("=")[1] || "") : "";
        if (fromCookie) hint = fromCookie;
      } catch {}
    }
  }
  const desired = normalizeLocale(hint);
  const messages = PRELOADED_MESSAGES[desired];
  if (!messages) return null;
  try {
    lingui.load(desired, messages || {});
    lingui.activate(desired);
    if (typeof document !== "undefined") {
      document.documentElement.lang = desired;
      document.documentElement.dir = desired === "ar" ? "rtl" : "ltr";
    }
  } catch {}
  return desired;
}

export const i18n = lingui;


