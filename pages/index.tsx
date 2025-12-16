import Head from "next/head";
import { Trans, useLingui } from "@lingui/react";
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import PlatformsSection from "../components/landing/PlatformsSection";
import ModelsSection from "../components/landing/ModelsSection";
import FeaturesSection from "../components/landing/FeaturesSection";

export default function Home() {
  const { i18n } = useLingui();
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <Head>
        <title>{`Chapax — ${i18n._("Universal AI agent for the web")}`}</title>
        <meta
          name="description"
          content={i18n._(
            "Universal AI agent with a powerful web app and an on‑page browser extension. Chat, search, pair coding, deep thinking, and Magic Edit for instant text fixes and transformations."
          )}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={`Chapax — ${i18n._("Universal AI agent for the web")}`}
        />
        <meta
          property="og:description"
          content={i18n._(
            "Web app + browser extension with Magic Edit. Chat, search, pair coding, deep thinking, and instant fixes across any page and document."
          )}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon" />
      </Head>

      {/* Background Effects Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-10" />
        <div className="pointer-events-none absolute inset-0 bg-scanlines animate-scan opacity-10" />
        
        {/* Beams/Orbs */}
        <div className="beam absolute left-[-20%] top-[-10%] h-[60vh] w-[60vw] animate-beam" />
        <div className="beam absolute right-[-10%] bottom-[-20%] h-[50vh] w-[50vw] animate-beam" />
        <div className="orb absolute left-[10%] top-[40%] h-24 w-24 animate-orb" />
        <div className="orb absolute right-[15%] top-[20%] h-32 w-32 animate-orb" />
      </div>

      <Header />

      <main className="relative pt-[72px] sm:pt-[80px]">
        <HeroSection />
        
        <PlatformsSection />
        
        <ModelsSection />
        
        <FeaturesSection />
      </main>

      <footer className="relative border-t border-foreground/10 py-4 sm:py-6 text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          <span>© {new Date().getFullYear()} Chapax</span>
          <span><Trans id="Fast. Minimal. Helpful.">Fast. Minimal. Helpful.</Trans></span>
        </div>
      </footer>
    </div>
  );
}
