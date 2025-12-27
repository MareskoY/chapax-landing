import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useMemo, useState, type ReactNode } from "react";
import { Info, Check, Sparkles } from "lucide-react";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { motion } from "framer-motion";


type Limits = {
  chokensPerMonth: number;
};

type PlanInfo = {
  id: "FREE" | "PLUS";
  title: ReactNode;
  priceLabel: string;
  features: ReactNode[];
  cta?: ReactNode;
  limits: Limits;
};

export default function PricingPage({ isRussia }: { isRussia: boolean }) {
  const { i18n } = useLingui();
  const freeLimits: Limits = {
    chokensPerMonth: 400,
  };

  const plusLimits: Limits = {
    chokensPerMonth: 14000,
  };

  const currencyLabel = isRussia ? "₽ 1200" : "€ 12.5";

  const plans: PlanInfo[] = useMemo(() => {
    return [
      {
        id: "FREE",
        title: <Trans id="Free">Free</Trans>,
        priceLabel: "0",
        cta: <Trans id="Get in App">Get in App</Trans>,
        features: [
          <Trans id="Chat with basic models">Chat with basic models</Trans>,
        ],
        limits: freeLimits,
      },
      {
        id: "PLUS",
        title: <Trans id="Plus">Plus</Trans>,
        priceLabel: currencyLabel.replace(/^€\s*/, ""),
        cta: <Trans id="Get in App">Get in App</Trans>,
        features: [
          <Trans id="Chat with advanced models">Chat with advanced models</Trans>,
          <Trans id="Priority access">Priority access</Trans>,
          <Trans id="Video Generation">Video Generation</Trans>,
        ],
        limits: plusLimits,
      },
    ];
  }, [currencyLabel]);

  return (
    <div className="relative min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Head>
        <title>{`Chapax — ${i18n._("Pricing")}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Background Effects Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-10" />
        <div className="pointer-events-none absolute inset-0 bg-scanlines animate-scan opacity-10" />
        
        {/* Beams/Orbs with subtle pink tint */}
        <div className="beam absolute left-[-20%] top-[-10%] h-[60vh] w-[60vw] animate-beam opacity-40" style={{ background: 'radial-gradient(circle, rgba(255, 58, 212, 0.15) 0%, transparent 70%)' }} />
        <div className="beam absolute right-[-10%] bottom-[-20%] h-[50vh] w-[50vw] animate-beam opacity-30" style={{ background: 'radial-gradient(circle, rgba(255, 111, 224, 0.1) 0%, transparent 70%)' }} />
      </div>

      <Header />

      <main className="relative pt-[72px] sm:pt-[80px] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title Section */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <Trans id="Pricing">Pricing</Trans>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <Trans id="Choose the perfect plan for your AI needs">Choose the perfect plan for your AI needs</Trans>
            </p>
            
            {isRussia && (
              <div className="flex items-center justify-center gap-3 mt-6">
                <a
                  href="/rekvizity"
                  className="rounded-lg border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40 transition-all"
                >
                  <Trans id="Реквизиты">Реквизиты</Trans>
                </a>
                <a
                  href="/oferta"
                  className="rounded-lg border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40 transition-all"
                >
                  <Trans id="Договор оферты">Договор оферты</Trans>
                </a>
              </div>
            )}
          </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
          {plans.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl border ${
                p.id === "PLUS" 
                  ? "border-[#ff3ad4]/30 bg-gradient-to-br from-[#ff3ad4]/5 via-card to-card shadow-xl shadow-[#ff3ad4]/10" 
                  : "border-foreground/10 bg-card"
              } p-6 sm:p-8 flex flex-col gap-6 hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Popular Badge */}
              {p.id === "PLUS" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                    style={{ backgroundColor: '#ff3ad4', color: '#0B0B0B' }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <Trans id="Popular">Popular</Trans>
                  </div>
                </div>
              )}
              
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-2xl font-bold mb-2">{p.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {p.id === "FREE" ? <Trans id="Best to try the app">Best to try the app</Trans> : <Trans id="More headroom and priority">More headroom and priority</Trans>}
                  </div>
                </div>
                <div className="text-right">
                  {p.id === "FREE" ? (
                    <>
                      <div className="text-4xl font-bold"><Trans id="Free">Free</Trans></div>
                      <div className="text-sm text-muted-foreground mt-1"><Trans id="/mo">/mo</Trans></div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold" style={{ color: '#ff3ad4' }}>
                        {isRussia ? "₽1200" : `€${p.priceLabel}`}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1"><Trans id="/mo">/mo</Trans></div>
                    </>
                  )}
                </div>
              </div>

              <TokensSummary chokens={p.limits.chokensPerMonth} isPlus={p.id === "PLUS"} />

              <div className="text-sm flex-1">
                <div className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  <Trans id="What you get">What you get</Trans>
                </div>
                <div className={`rounded-2xl border p-5 ${
                  p.id === "PLUS" ? "border-[#ff3ad4]/20 bg-[#ff3ad4]/5" : "border-foreground/10 bg-muted/30"
                }`}>
                  <ul className="space-y-3">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${
                          p.id === "PLUS" ? "bg-[#ff3ad4]" : "bg-foreground/20"
                        }`}>
                          <Check className="w-3.5 h-3.5 text-background" />
                        </div>
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                    <li className="flex items-center justify-between pt-2 border-t border-foreground/10">
                      <span className="text-muted-foreground"><Trans id="≈ chat replies">≈ chat replies</Trans></span>
                      <span className="tabular-nums font-semibold">{p.id === "FREE" ? 400 : 14000}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground"><Trans id="≈ photo analysis">≈ photo analysis</Trans></span>
                      <span className="tabular-nums font-semibold">{p.id === "FREE" ? 150 : 8000}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground"><Trans id="≈ image gens">≈ image gens</Trans></span>
                      <span className="tabular-nums font-semibold">{p.id === "FREE" ? 4 : 900}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground"><Trans id="≈ edit photos">≈ edit photos</Trans></span>
                      <span className="tabular-nums font-semibold">{p.id === "FREE" ? 5 : 1150}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                {p.id === "FREE" ? (
                  <div className="text-sm text-center text-muted-foreground py-3">
                    <Trans id="This plan is free for everyone.">This plan is free for everyone.</Trans>
                  </div>
                ) : (
                  <motion.a
                    href="https://app.chapax.ai/plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold shadow-lg transition-all hover:scale-105"
                    style={{ backgroundColor: '#ff3ad4', color: '#0B0B0B' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trans id="Get in App">Get in App</Trans>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Token Packs Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <Trans id="One‑time token packs">One‑time token packs</Trans>
            </h2>
            <p className="text-muted-foreground">
              <Trans id="Need more tokens? Get them as you go">Need more tokens? Get them as you go</Trans>
            </p>
          </div>
          <TokenPacks isRussia={isRussia} />
        </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TokensSummary({ chokens, isPlus }: { chokens: number; isPlus?: boolean }) {
  const [open, setOpen] = useState(false);
  const { i18n } = useLingui();
  return (
    <div className={`relative flex items-center justify-between rounded-2xl border px-4 py-4 ${
      isPlus ? "border-[#ff3ad4]/30 bg-[#ff3ad4]/10" : "border-foreground/10 bg-muted/30"
    }`}>
      <div className="text-2xl md:text-3xl font-bold tabular-nums">
        {chokens.toLocaleString()} <span className="text-base font-normal text-muted-foreground"><Trans id="tokens/mo">tokens/mo</Trans></span>
      </div>
      <button
        type="button"
        className="text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label={i18n._("What are tokens?")}
      >
        <Info className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 z-10 w-72 rounded-xl border border-foreground/10 bg-background/95 backdrop-blur-lg p-4 text-sm shadow-xl">
          <div className="font-semibold mb-2"><Trans id="What are tokens?">What are tokens?</Trans></div>
          <div className="text-muted-foreground">
            <Trans id="Tokens explainer">A token is a unified credit used to price different AI features consistently. One token roughly equals a small chat response. Heavier tasks (coding, images) consume more tokens.</Trans>
          </div>
        </div>
      )}
    </div>
  );
}

function TokenPacks({ isRussia }: { isRussia: boolean }) {
  type Pack = { id: string; amount: number; priceEUR?: number; priceRUB?: number };
  const packs: Pack[] = [
    { id: "pack-5k", amount: 5000, priceEUR: 5, priceRUB: 480 },
    { id: "pack-10k", amount: 10000, priceEUR: 10, priceRUB: 940 },
    { id: "pack-20k", amount: 20000, priceEUR: 20, priceRUB: 1860 },
    { id: "pack-40k", amount: 40000, priceEUR: 38, priceRUB: 3700 },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {packs.map((p, idx) => (
        <motion.div 
          key={p.id} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
          className="group relative rounded-2xl border border-foreground/10 bg-card p-6 flex flex-col gap-4 hover:border-[#ff3ad4]/30 hover:shadow-xl hover:shadow-[#ff3ad4]/5 transition-all duration-300 hover:scale-105"
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff3ad4]/0 to-[#ff3ad4]/0 group-hover:from-[#ff3ad4]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-3xl sm:text-4xl font-bold tabular-nums mb-1">
              {p.amount.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              <Trans id="tokens">tokens</Trans>
            </div>
          </div>
          
          <div className="relative z-10 mt-auto pt-4 border-t border-foreground/10">
            <div className="text-2xl font-bold tabular-nums" style={{ color: '#ff3ad4' }}>
              {isRussia ? `₽${p.priceRUB?.toLocaleString()}` : `€${p.priceEUR}`}
            </div>
          </div>
          
          <motion.a
            href="https://app.chapax.ai/plans"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-2 rounded-xl border border-foreground/20 px-4 py-2.5 text-sm font-medium hover:border-[#ff3ad4]/50 hover:bg-[#ff3ad4]/10 text-center transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Trans id="Get in App">Get in App</Trans>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}

function getIpFromHeaders(req: any): string | null {
  const xForwardedFor = (req.headers["x-forwarded-for"] as string | undefined) || "";
  const candidate = xForwardedFor.split(",")[0]?.trim() || (req.headers["x-real-ip"] as string | undefined) || (req.socket?.remoteAddress as string | undefined) || null;
  if (!candidate) return null;
  // strip IPv6 prefix if present
  if (candidate.startsWith("::ffff:")) return candidate.replace("::ffff:", "");
  return candidate;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Check common CDN headers first (Cloudflare / Vercel)
  const cfCountry = (req.headers["cf-ipcountry"] as string | undefined)?.toUpperCase();
  const vercelCountry = (req.headers["x-vercel-ip-country"] as string | undefined)?.toUpperCase();
  if (cfCountry === "RU" || vercelCountry === "RU") {
    return { props: { isRussia: true } };
  }

  const ip = getIpFromHeaders(req);
  let isRussia = false;
  try {
    if (ip) {
      // 0) ipinfo (SDK) — prioritized if token is available
      const token = process.env.IPINFO_TOKEN;
      if (token) {
        try {
          const { default: IPinfoWrapper } = await import("node-ipinfo");
          const ipinfo = new IPinfoWrapper(token);
          const info = await ipinfo.lookupIp(ip);
          const c0 = (info?.country || "").toUpperCase();
          if (c0 === "RU") isRussia = true;
        } catch {}
      }

      // If still not RU, try plain HTTP fallbacks
      // 1) ip2c.org (very fast plain text)
      if (!isRussia) {
        const r1 = await fetch(`https://ip2c.org/${encodeURIComponent(ip)}`, { cache: "no-store" });
        const t1 = r1.ok ? await r1.text() : "";
        const c1 = t1 && t1[0] === "1" ? t1.split(";")[1] : ""; // format: 1;CC;Country;Region
        if (c1?.toUpperCase() === "RU") isRussia = true;
      }

      // 2) ipapi.co country fallback
      if (!isRussia) {
        const r2 = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/country/`, { cache: "no-store" });
        const t2 = r2.ok ? (await r2.text()).trim() : "";
        if (t2.toUpperCase() === "RU") isRussia = true;
      }

      // 3) ipwho.is JSON fallback
      if (!isRussia) {
        const r3 = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}?fields=country_code`, { cache: "no-store" });
        const j3 = r3.ok ? await r3.json() : null;
        const c3 = (j3?.country_code || "").toUpperCase();
        if (c3 === "RU") isRussia = true;
      }
    }
  } catch {}

  return { props: { isRussia } };
};


