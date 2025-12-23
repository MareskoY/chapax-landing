import { Trans } from "@lingui/react";
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import PlatformsSection from "../components/landing/PlatformsSection";
import ModelsSection from "../components/landing/ModelsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";
import SEOHead from "../lib/seo/SEOHead";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <SEOHead />

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

      <Footer />
    </div>
  );
}
