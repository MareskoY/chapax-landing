import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Globe, Code2, Search, Sparkles, Zap } from "lucide-react";

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
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-background text-foreground">
      <Head>
        <title>Chapax — Universal AI agent for the web</title>
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
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 mask-chapa" aria-hidden />
              <span className="text-sm font-medium tracking-wider">CHAPAX</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 grow">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Hero */}
          <section className="relative py-12 sm:py-24">
            <div className="grid items-center gap-12 sm:gap-16 md:grid-cols-12">
              <div className="md:col-span-7 lg:col-span-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                  Universal AI agent. On any page.
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
                  Chat, search, pair code, think deeply, and transform text with Magic Edit. Fast, minimal, and works across the web and your documents.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://app.chapax.ai"
                    className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Open Web App
                  </a>
                  <a
                    href="https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo"
                    className="inline-flex items-center justify-center rounded-md border border-foreground/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/50"
                  >
                    Get Chrome Extension
                  </a>
                </div>
                <div className="mt-6 text-xs text-muted-foreground">
                  Integrates with your flow. Designed to support many AI models.
                </div>
              </div>

              {/* Tall narrow sidebar chat with animated, looping message skeletons */}
              <div className="md:col-span-5 lg:col-span-6">
                <div className="mx-auto flex h-[560px] w-[360px] flex-col overflow-hidden rounded-xl border border-foreground/12 bg-background/75 shadow-sm">
                  {/* Header */}
                  <div className="flex items-center gap-2 border-b border-foreground/10 px-3 py-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
                    <div className="h-3 w-24 rounded bg-foreground/10" />
                  </div>
                  {/* Messages + input */}
                  <div className="flex grow flex-col p-3">
                    <div className="space-y-3 pr-1">
                      {[0, 0.9, 1.8, 2.7, 3.6].map((delay, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 8] }}
                          transition={{ duration: 10, times: [0, 0.15, 0.85, 1], delay, repeat: Infinity, repeatDelay: 2 }}
                          className={
                            (idx % 2 === 1 ? "ml-auto max-w-[88%] bg-foreground/15" : "max-w-[92%] bg-foreground/10") +
                            " rounded-2xl p-4"
                          }
                        />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-3">
                      <div className="h-10 w-full rounded-md border border-foreground/15 bg-background" />
                      <div className="h-10 w-16 rounded-md bg-foreground/85" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Web App features with motion icons */}
          <section id="webapp" className="relative py-10 sm:py-16">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 mask-chapa opacity-70" aria-hidden />
                <h2 className="text-sm font-semibold tracking-wider">WEB APP</h2>
              </div>
              <a
                href="https://app.chapax.ai"
                className="hidden rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50 sm:inline-flex"
              >
                Open Web App
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="card-surface tilt-hover p-5">
                <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center gap-2">
                  <Brain size={16} />
                  <div className="text-sm font-semibold">Deep thinking workspace</div>
                </motion.div>
                <div className="mt-2 text-sm text-muted-foreground">Outline, analyze, and iterate with structured prompts.</div>
              </div>
              <div className="card-surface tilt-hover p-5">
                <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center gap-2">
                  <Search size={16} />
                  <div className="text-sm font-semibold">Search + browse</div>
                </motion.div>
                <div className="mt-2 text-sm text-muted-foreground">Grounded answers with live web context.</div>
              </div>
              <div className="card-surface tilt-hover p-5">
                <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center gap-2">
                  <Code2 size={16} />
                  <div className="text-sm font-semibold">Pair coding</div>
                </motion.div>
                <div className="mt-2 text-sm text-muted-foreground">Refactor, generate, and explain code with precision.</div>
              </div>
              {/* Duplicate CTA for mobile */}
              <a
                href="https://app.chapax.ai"
                className="sm:hidden mt-2 inline-flex items-center justify-center rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50"
              >
                Open Web App
              </a>
            </div>
          </section>

          {/* Browser Extension visual overhaul */}
          <section id="extension" className="relative py-10 sm:py-16">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 mask-chapa opacity-70" aria-hidden />
                <h2 className="text-sm font-semibold tracking-wider">BROWSER EXTENSION</h2>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo"
                className="hidden rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50 sm:inline-flex"
              >
                Get Extension
              </a>
            </div>
            <div className="grid items-start gap-6 md:grid-cols-2">
              {/* Left: Side-chat with looping bubbles */}
              <div className="card-surface tilt-hover overflow-hidden p-0">
                <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 text-xs text-muted-foreground">
                  <span>example.com/article</span>
                  <span>On‑page chat</span>
                </div>
                <div className="grid grid-cols-[1fr_320px]">
                  <div className="p-4">
                    <div className="h-40 rounded bg-foreground/10" />
                    <div className="mt-3 h-6 w-1/2 rounded bg-foreground/10" />
                    <div className="mt-2 h-24 rounded bg-foreground/10" />
                  </div>
                  <div className="flex flex-col border-l border-foreground/10 bg-background/80 p-3">
                    <div className="text-xs font-semibold">Chapax</div>
                    <div className="mt-3 space-y-2">
                      {[0, 0.9, 1.8].map((delay, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, 6] }}
                          transition={{ duration: 8, times: [0, 0.15, 0.85, 1], delay, repeat: Infinity, repeatDelay: 1.5 }}
                          className={(idx % 2 === 1 ? "ml-auto max-w-[90%] bg-foreground/15" : "max-w-[85%] bg-foreground/10") + " rounded-2xl p-2 text-xs"}
                        />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-3">
                      <div className="h-8 w-full rounded-md border border-foreground/15 bg-background" />
                      <div className="h-8 w-14 rounded-md bg-foreground/80" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Magic Edit overlay with looping corrected lines */}
              <div id="magic" className="card-surface tilt-hover overflow-hidden p-0">
                <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-2 text-xs text-muted-foreground">
                  <span>editor.example.com</span>
                  <span>Magic Edit</span>
                </div>
                <div className="relative grid grid-cols-[1fr] p-4">
                  <div className="h-48 rounded bg-foreground/10" />
                  <div className="pointer-events-none absolute inset-x-6 top-6 rounded-lg border border-foreground/15 bg-background/95 p-3 shadow-sm">
                    <div className="h-28 rounded bg-foreground/8 p-3">
                      <div className="space-y-2">
                        {[0, 0.8, 1.6].map((delay, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: [0, 1, 1, 0], x: [-6, 0, 0, -6] }}
                            transition={{ duration: 7, times: [0, 0.2, 0.8, 1], delay, repeat: Infinity, repeatDelay: 1 }}
                            className="h-3 w-full rounded bg-foreground/15"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-[1fr_120px] gap-2">
                      <div className="h-8 rounded-md border border-foreground/15 bg-background" />
                      <div className="h-8 rounded-md bg-foreground/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile CTA */}
            <a
              href="https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo"
              className="sm:hidden mt-3 inline-flex items-center justify-center rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50"
            >
              Get Extension
            </a>
          </section>

          {/* Benefits row */}
          <section className="relative py-10 sm:py-16">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="card-surface tilt-hover p-5">
                <div className="flex items-center gap-2"><Globe size={16} /><div className="text-sm font-semibold">Model‑agnostic</div></div>
                <div className="mt-2 text-sm text-muted-foreground">Built to support many AI models over time.</div>
              </div>
              <div className="card-surface tilt-hover p-5">
                <div className="flex items-center gap-2"><Sparkles size={16} /><div className="text-sm font-semibold">Works with your docs</div></div>
                <div className="mt-2 text-sm text-muted-foreground">Bring PDFs, notes, and knowledge — stay in flow.</div>
              </div>
              <div className="card-surface tilt-hover p-5">
                <div className="flex items-center gap-2"><Zap size={16} /><div className="text-sm font-semibold">One‑click actions</div></div>
                <div className="mt-2 text-sm text-muted-foreground">Apply Magic Edit, copy, insert, or open in app instantly.</div>
              </div>
            </div>
          </section>

          {/* Icon tiles with hover text */}
          <section className="relative py-10 sm:py-16">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
              {[
                { icon: Brain, text: "Think deeper, decide faster" },
                { icon: Globe, text: "Knowledge of the web, on tap" },
                { icon: Code2, text: "Pair code without context‑switch" },
                { icon: Search, text: "Grounded answers with live sources" },
                { icon: Sparkles, text: "Magic Edit: write, fix, translate" },
                { icon: Zap, text: "Speed: one‑click actions everywhere" },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-square overflow-hidden rounded-xl border border-foreground/10 bg-background/70">
                  <div className="absolute inset-0 grid place-items-center">
                    <item.icon size={40} className="opacity-70 transition-opacity group-hover:opacity-0" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="mx-4 text-center text-xs text-muted-foreground">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-foreground/10 py-6 text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          <span>© {new Date().getFullYear()} Chapax</span>
          <span>Fast. Minimal. Helpful.</span>
        </div>
      </footer>
    </div>
  );
}
