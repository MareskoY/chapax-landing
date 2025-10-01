import Head from "next/head";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";
import { motion } from "framer-motion";
import { Brain, Globe, Code2, Search, Sparkles, Zap } from "lucide-react";
import ModelChatSkeleton from "../components/webapp/ModelChatSkeleton";
import ImageEditSkeleton from "../components/webapp/ImageEditSkeleton";
import DeepSearchSkeleton from "../components/webapp/DeepSearchSkeleton";

const chatContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const chatBubble = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Home() {
  const { i18n } = useLingui();
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-background text-foreground">
      <Head>
        <title>{`Chapax — ${i18n._('Universal AI agent for the web')}`}</title>
        <meta
          name="description"
          content="Universal AI agent with a powerful web app and an on‑page browser extension. Chat, search, pair coding, deep thinking, and Magic Edit for instant text fixes and transformations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Chapax — Universal AI agent for the web" />
        <meta
          property="og:description"
          content="Web app + browser extension with Magic Edit. Chat, search, pair coding, deep thinking, and instant fixes across any page and document."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/chapa.svg" />
      </Head>

      <div className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-scanlines animate-scan opacity-10" />

      {/* Beams/Orbs */}
      <div className="beam left-[-20%] top-[-10%] h-[60vh] w-[60vw] animate-beam" />
      <div className="beam right-[-10%] bottom-[-20%] h-[50vh] w-[50vw] animate-beam" />
      <div className="orb left-[10%] top-[40%] h-24 w-24 animate-orb" />
      <div className="orb right-[15%] top-[20%] h-32 w-32 animate-orb" />

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-4 sm:py-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-6 w-6 sm:h-8 sm:w-8 mask-chapa" aria-hidden />
              <span className="text-xs sm:text-sm font-medium tracking-wider">CHAPAX</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="/pricing" className="text-xs underline opacity-80 hover:opacity-100">Pricing</a>
              <select
              value={i18n.locale}
                onChange={async (e) => {
                  const next = e.target.value;
                  await activateLocale(next);
                }}
                className="rounded-md border border-foreground/30 bg-background px-2 py-1 text-xs"
              >
                {SUPPORTED_LOCALES.map((l) => (
                  <option key={l} value={l}>
                    {l.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Hero */}
          <section className="relative py-12 sm:py-24">
            <div className="grid items-center gap-8 sm:gap-12 md:gap-16 md:grid-cols-12">
              <div className="md:col-span-7 lg:col-span-6">
                <h1 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight md:text-6xl">
                  <Trans id="Universal AI agent. On any page.">Universal AI agent. On any page.</Trans>
                </h1>
                <p className="mt-4 sm:mt-5 max-w-xl text-pretty text-sm sm:text-base text-muted-foreground md:text-lg">
                  <Trans id="Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.">Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.</Trans>
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://app.chapax.ai"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    <Trans id="Open Web App">Open Web App</Trans>
                  </a>
                  <a
                    href="https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-foreground/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/50"
                  >
                    <Trans id="Get Chrome Extension">Get Chrome Extension</Trans>
                  </a>
                </div>
                <div className="mt-4 sm:mt-6 text-xs text-muted-foreground">
                  <Trans id="Integrates with your flow. Designed to support many AI models.">Integrates with your flow. Designed to support many AI models.</Trans>
                </div>
              </div>

              {/* Tall narrow sidebar chat with animated, looping message skeletons */}
              <div className="md:col-span-5 lg:col-span-6">
                <div className="mx-auto flex h-[400px] w-[280px] sm:h-[480px] sm:w-[320px] md:h-[560px] md:w-[360px] flex-col overflow-hidden rounded-xl border border-foreground/12 bg-background/75 shadow-sm">
                  {/* Header */}
                  <div className="flex items-center gap-2 border-b border-foreground/10 px-3 py-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
                    <div className="h-3 w-16 sm:w-20 md:w-24 rounded bg-foreground/10" />
                  </div>
                  {/* Messages + input */}
                  <div className="flex grow flex-col p-2 sm:p-3">
                    <div className="space-y-2 sm:space-y-3 pr-1">
                      {[0, 0.9, 1.8, 2.7, 3.6].map((delay, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 8] }}
                          transition={{ duration: 10, times: [0, 0.15, 0.85, 1], delay, repeat: Infinity, repeatDelay: 2 }}
                          className={
                            (idx % 2 === 1 ? "ml-auto max-w-[88%] bg-foreground/15" : "max-w-[92%] bg-foreground/10") +
                            " rounded-2xl p-2 sm:p-3 md:p-4"
                          }
                        />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-2 sm:pt-3">
                      <div className="h-8 sm:h-10 w-full rounded-md border border-foreground/15 bg-background" />
                      <div className="h-8 sm:h-10 w-12 sm:w-16 rounded-md bg-foreground/85" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Web App features with motion icons */}
          <section id="webapp" className="relative py-8 sm:py-10 md:py-16">
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-4 w-4 sm:h-5 sm:w-5 mask-chapa opacity-70" aria-hidden />
                <h2 className="text-xs sm:text-sm font-semibold tracking-wider"><Trans id="WEB APP">WEB APP</Trans></h2>
              </div>
              <a
                href="https://app.chapax.ai"
                className="hidden rounded-md border border-foreground/30 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-foreground transition-colors hover:border-foreground/50 sm:inline-flex"
              >
                <Trans id="Open Web App">Open Web App</Trans>
              </a>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
              <div className="card-surface tilt-hover p-4 sm:p-5">
                <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center gap-2">
                  <Brain size={14} className="sm:w-4 sm:h-4" />
                  <div className="text-sm font-semibold"><Trans id="Smart model routing">Smart model routing</Trans></div>
                </motion.div>
                <div className="mt-1.5 text-sm text-muted-foreground"><Trans id="Top models from any provider — automatically selected.">Top models from any provider — automatically selected.</Trans></div>
                <ModelChatSkeleton />
              </div>
              <div className="card-surface tilt-hover p-4 sm:p-5">
                <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center gap-2">
                  <Sparkles size={14} className="sm:w-4 sm:h-4" />
                  <div className="text-sm font-semibold"><Trans id="AI image generation">AI image generation</Trans></div>
                </motion.div>
                <div className="mt-1.5 text-sm text-muted-foreground"><Trans id="Magic Wand photo edits in seconds.">Magic Wand photo edits in seconds.</Trans></div>
                <ImageEditSkeleton />
              </div>
              <div className="card-surface tilt-hover p-4 sm:p-5">
                <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center gap-2">
                  <Search size={14} className="sm:w-4 sm:h-4" />
                  <div className="text-sm font-semibold"><Trans id="Real‑time data & Deep Search">Real‑time data & Deep Search</Trans></div>
                </motion.div>
                <div className="mt-1.5 text-sm text-muted-foreground"><Trans id="Live search, reasoning, and grounded answers.">Live search, reasoning, and grounded answers.</Trans></div>
                <DeepSearchSkeleton />
              </div>
              {/* Duplicate CTA for mobile */}
              <a
                href="https://app.chapax.ai"
                className="sm:hidden mt-3 sm:mt-2 inline-flex w-full items-center justify-center rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50"
              >
                <Trans id="Open Web App">Open Web App</Trans>
              </a>
            </div>
          </section>

          {/* Browser Extension visual overhaul */}
          <section id="extension" className="relative py-8 sm:py-10 md:py-16">
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-4 w-4 sm:h-5 sm:w-5 mask-chapa opacity-70" aria-hidden />
                <h2 className="text-xs sm:text-sm font-semibold tracking-wider"><Trans id="BROWSER EXTENSION">BROWSER EXTENSION</Trans></h2>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo"
                className="hidden rounded-md border border-foreground/30 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-foreground transition-colors hover:border-foreground/50 sm:inline-flex"
              >
              <Trans id="Get Extension">Get Extension</Trans>
              </a>
            </div>
            <div className="grid items-start gap-6 md:grid-cols-2">
              {/* Left: Side-chat with looping bubbles */}
              <div className="card-surface tilt-hover overflow-hidden p-0">
                <div className="flex items-center justify-between border-b border-foreground/10 px-3 sm:px-4 py-2 text-xs text-muted-foreground">
                  <span className="text-[10px] sm:text-xs">example.com/article</span>
                  <span className="text-[10px] sm:text-xs"><Trans id="On‑page chat">On‑page chat</Trans></span>
                </div>
                <div className="grid grid-cols-[1fr_240px] sm:grid-cols-[1fr_280px] md:grid-cols-[1fr_320px]">
                  <div className="p-2 sm:p-3 md:p-4">
                    <div className="h-24 sm:h-32 md:h-40 rounded bg-foreground/10" />
                    <div className="mt-2 sm:mt-3 h-4 sm:h-5 md:h-6 w-1/2 rounded bg-foreground/10" />
                    <div className="mt-2 h-16 sm:h-20 md:h-24 rounded bg-foreground/10" />
                  </div>
                  <div className="flex flex-col border-l border-foreground/10 bg-background/80 p-2 sm:p-3">
                    <div className="text-[10px] sm:text-xs font-semibold">Chapax</div>
                    <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                      {[0, 0.9, 1.8].map((delay, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, 6] }}
                          transition={{ duration: 8, times: [0, 0.15, 0.85, 1], delay, repeat: Infinity, repeatDelay: 1.5 }}
                          className={(idx % 2 === 1 ? "ml-auto max-w-[90%] bg-foreground/15" : "max-w-[85%] bg-foreground/10") + " rounded-2xl p-1.5 sm:p-2 text-[10px] sm:text-xs"}
                        />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-1.5 sm:gap-2 pt-2 sm:pt-3">
                      <div className="h-6 sm:h-7 md:h-8 w-full rounded-md border border-foreground/15 bg-background" />
                      <div className="h-6 sm:h-7 md:h-8 w-10 sm:w-12 md:w-14 rounded-md bg-foreground/80" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Magic Edit overlay with looping corrected lines */}
              <div id="magic" className="card-surface tilt-hover overflow-hidden p-0">
                <div className="flex items-center justify-between border-b border-foreground/10 px-3 sm:px-4 py-2 text-xs text-muted-foreground">
                  <span className="text-[10px] sm:text-xs">editor.example.com</span>
                  <span className="text-[10px] sm:text-xs"><Trans id="Magic Edit">Magic Edit</Trans></span>
                </div>
                <div className="relative grid grid-cols-[1fr] p-2 sm:p-3 md:p-4">
                  <div className="h-32 sm:h-40 md:h-48 rounded bg-foreground/10" />
                  <div className="pointer-events-none absolute inset-x-3 sm:inset-x-4 md:inset-x-6 top-3 sm:top-4 md:top-6 rounded-lg border border-foreground/15 bg-background/95 p-2 sm:p-3 shadow-sm">
                    <div className="h-20 sm:h-24 md:h-28 rounded bg-foreground/8 p-2 sm:p-3">
                      <div className="space-y-1.5 sm:space-y-2">
                        {[0, 0.8, 1.6].map((delay, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: [0, 1, 1, 0], x: [-6, 0, 0, -6] }}
                            transition={{ duration: 7, times: [0, 0.2, 0.8, 1], delay, repeat: Infinity, repeatDelay: 1 }}
                            className="h-2.5 sm:h-3 w-full rounded bg-foreground/15"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-3 grid grid-cols-[1fr_80px] sm:grid-cols-[1fr_100px] md:grid-cols-[1fr_120px] gap-1.5 sm:gap-2">
                      <div className="h-6 sm:h-7 md:h-8 rounded-md border border-foreground/15 bg-background" />
                      <div className="h-6 sm:h-7 md:h-8 rounded-md bg-foreground/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile CTA */}
            <a
              href="https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo"
              className="sm:hidden mt-4 sm:mt-3 inline-flex w-full items-center justify-center rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50"
            >
              <Trans id="Get Extension">Get Extension</Trans>
            </a>
          </section>

          {/* Benefits row */}
          <section className="relative py-8 sm:py-10 md:py-16">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
              <div className="card-surface tilt-hover p-4 sm:p-5">
                <div className="flex items-center gap-2"><Globe size={14} className="sm:w-4 sm:h-4" /><div className="text-sm font-semibold"><Trans id="Model‑agnostic">Model‑agnostic</Trans></div></div>
                <div className="mt-2 text-sm text-muted-foreground"><Trans id="Built to support many AI models over time.">Built to support many AI models over time.</Trans></div>
              </div>
              <div className="card-surface tilt-hover p-4 sm:p-5">
                <div className="flex items-center gap-2"><Sparkles size={14} className="sm:w-4 sm:h-4" /><div className="text-sm font-semibold"><Trans id="Works with your docs">Works with your docs</Trans></div></div>
                <div className="mt-2 text-sm text-muted-foreground"><Trans id="Bring PDFs, notes, and knowledge — stay in flow.">Bring PDFs, notes, and knowledge — stay in flow.</Trans></div>
              </div>
              <div className="card-surface tilt-hover p-4 sm:p-5">
                <div className="flex items-center gap-2"><Zap size={14} className="sm:w-4 sm:h-4" /><div className="text-sm font-semibold"><Trans id="One‑click actions">One‑click actions</Trans></div></div>
                <div className="mt-2 text-sm text-muted-foreground"><Trans id="Apply Magic Edit, copy, insert, or open in app instantly.">Apply Magic Edit, copy, insert, or open in app instantly.</Trans></div>
              </div>
            </div>
          </section>

          {/* Icon tiles with hover text */}
          <section className="relative py-8 sm:py-10 md:py-16">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-6">
                {[
                { icon: Brain, text: <Trans id="Think deeper, decide faster">Think deeper, decide faster</Trans> },
                { icon: Globe, text: <Trans id="Knowledge of the web, on tap">Knowledge of the web, on tap</Trans> },
                { icon: Code2, text: <Trans id="Pair code without context‑switch">Pair code without context‑switch</Trans> },
                { icon: Search, text: <Trans id="Grounded answers with live sources">Grounded answers with live sources</Trans> },
                { icon: Sparkles, text: <Trans id="Magic Edit: write, fix, translate">Magic Edit: write, fix, translate</Trans> },
                { icon: Zap, text: <Trans id="Speed: one‑click actions everywhere">Speed: one‑click actions everywhere</Trans> },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-square overflow-hidden rounded-xl border border-foreground/10 bg-background/70">
                  <div className="absolute inset-0 grid place-items-center">
                    <item.icon size={32} className="sm:w-10 sm:h-10 opacity-70 transition-opacity group-hover:opacity-0" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="mx-2 sm:mx-4 text-center text-[10px] sm:text-xs text-muted-foreground">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-foreground/10 py-4 sm:py-6 text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          <span>© {new Date().getFullYear()} Chapax</span>
          <span><Trans id="Fast. Minimal. Helpful.">Fast. Minimal. Helpful.</Trans></span>
        </div>
      </footer>
    </div>
  );
}
