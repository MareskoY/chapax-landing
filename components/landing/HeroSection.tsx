import { Trans } from "@lingui/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppleIcon, GooglePlayIcon } from "./Icons";

const SCHEMES = [
  { bg: '#ff3ad4', text: '#0B0B0B', dot: '#0B0B0B', bar: 'dark' },
  { bg: '#F7E8C8', text: '#1A40FF', dot: '#1A40FF', bar: 'dark' },
  { bg: '#FF6F61', text: '#1434FF', dot: '#1434FF', bar: 'dark' },
  { bg: '#0F2D1F', text: '#FF6FE0', dot: '#FF6FE0', bar: 'light' },
];

export default function HeroSection() {
  const selectedScheme = SCHEMES[0]; // Using the pink/magenta scheme

  return (
    <section className="relative pt-4 sm:pt-8 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 lg:mb-8 leading-[1.1]">
              <Trans id="Universal AI agent.">Universal AI agent.</Trans>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed">
              <Trans id="Chat, search, pair coding, deep thinking, generate images, edit photos, create videos, and bring photos to life — plus Magic Edit for instant text fixes and transformations.">
                Chat, search, pair coding, deep thinking, generate images, edit photos, create videos, and bring photos to life — plus Magic Edit for instant text fixes and transformations.
              </Trans>
            </p>

            {/* Desktop Layout - Buttons */}
            <div className="hidden lg:flex flex-col gap-4">
              <motion.a
                href="https://app.chapax.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: selectedScheme.bg, color: selectedScheme.text }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trans id="Get Started">Get Started</Trans>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <div className="flex gap-3">
                <motion.a
                  href="https://apps.apple.com/pt/app/chapax/id6754095566"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium rounded-xl bg-foreground/10 hover:bg-foreground/15 transition-all border border-foreground/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-70">
                      <Trans id="Download on the">Download on the</Trans>
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      <Trans id="App Store">App Store</Trans>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://play.google.com/store/apps/details?id=ai.chapax.app&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium rounded-xl bg-foreground/10 hover:bg-foreground/15 transition-all border border-foreground/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GooglePlayIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-70">
                      <Trans id="Get it on">Get it on</Trans>
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      <Trans id="Google Play">Google Play</Trans>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Mobile Layout - Stacked Buttons */}
            <div className="flex lg:hidden flex-col gap-3">
              <motion.a
                href="https://app.chapax.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl transition-all"
                style={{ backgroundColor: selectedScheme.bg, color: selectedScheme.text }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Trans id="Get Started">Get Started</Trans>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://apps.apple.com/pt/app/chapax/id6754095566"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium rounded-xl bg-foreground/10 hover:bg-foreground/15 transition-all border border-foreground/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AppleIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">
                    <Trans id="Download on the">Download on the</Trans>
                  </div>
                  <div className="text-sm font-semibold leading-tight">
                    <Trans id="App Store">App Store</Trans>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=ai.chapax.app&hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium rounded-xl bg-foreground/10 hover:bg-foreground/15 transition-all border border-foreground/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GooglePlayIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">
                    <Trans id="Get it on">Get it on</Trans>
                  </div>
                  <div className="text-sm font-semibold leading-tight">
                    <Trans id="Google Play">Google Play</Trans>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex w-full justify-center lg:justify-end"
          >
            <div 
              className="relative w-full rounded-[3rem] p-6 pb-0 sm:p-8 sm:pb-0 lg:p-12 lg:pb-0 xl:p-16 xl:pb-0 shadow-2xl"
              style={{ backgroundColor: selectedScheme.bg }}
            >
              {/* Clip to show ~50% of the phone like the reference */}
              <div className="relative mx-auto w-full max-w-[380px]">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[560px] xl:h-[620px] overflow-hidden rounded-[2.7rem] rounded-b-none">
                  {/* Phone Frame (full height, clipped by container; pushed down to show only top part) */}
                  <div className="absolute inset-x-0 bottom-[-230px] sm:bottom-[-250px] lg:bottom-[-300px] xl:bottom-[-300px] w-full aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border-[8px] sm:border-[10px] lg:border-[12px] border-black">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-black z-10 flex items-center justify-between px-4 sm:px-6 text-white text-[10px] sm:text-xs">
                      <span className="font-semibold">15:08</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 sm:h-7 bg-black rounded-full  z-20" />
                    
                    {/* App Screenshot */}
                    <img
                      src="/screen1.jpeg"
                      alt="Chapax app screenshot"
                      className="absolute inset-0 w-full h-full object-cover rounded-b-none"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Emoji/Icon */}
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-background shadow-xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl border border-foreground/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🤖
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

