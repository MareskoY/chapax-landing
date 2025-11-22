import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useMemo, useState, type ReactNode } from "react";
import { Info, Check } from "lucide-react";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";


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
    chokensPerMonth: 500,
  };

  const plusLimits: Limits = {
    chokensPerMonth: 10000,
  };

  const currencyLabel = isRussia ? "₽ 1200" : "€ 12.5";

  const plans: PlanInfo[] = useMemo(() => {
    return [
      {
        id: "FREE",
        title: "Free",
        priceLabel: "0",
        cta: <Trans id="Get in App">Get in App</Trans>,
        features: [
          <Trans id="Chat with basic models">Chat with basic models</Trans>,
        ],
        limits: freeLimits,
      },
      {
        id: "PLUS",
        title: "Plus",
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
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <Head>
        <title>{`Chapax — ${i18n._("Pricing")}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-4 sm:py-6">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <img src="/chapa.svg" alt="" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden />
              <span className="text-xs sm:text-sm font-medium tracking-wider">CHAPAX</span>
            </a>
            <div className="flex items-center gap-3">
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

      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold"><Trans id="Pricing">Pricing</Trans></h1>
          {isRussia && (
            <div className="flex items-center gap-2">
              <a
                href="/rekvizity"
                className="rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50"
              >
                Реквизиты
              </a>
              <a
                href="/oferta"
                className="rounded-md border border-foreground/30 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-foreground/50"
              >
                Договор оферты
              </a>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl border bg-card p-4 flex flex-col gap-3 ${p.id === "PLUS" ? "ring-1 ring-primary/40" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-medium">{p.title}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    {p.id === "FREE" ? <Trans id="Best to try the app">Best to try the app</Trans> : <Trans id="More headroom and priority">More headroom and priority</Trans>}
                    {p.id === "PLUS" && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary"><Trans id="Popular">Popular</Trans></span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {p.id === "FREE" ? (
                    <>
                      <div className="text-2xl font-semibold"><Trans id="Free">Free</Trans></div>
                      <div className="text-xs text-muted-foreground"><Trans id="/mo">/mo</Trans></div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-semibold">{isRussia ? "₽1200" : `€${p.priceLabel}`}</div>
                      <div className="text-xs text-muted-foreground"><Trans id="/mo">/mo</Trans></div>
                    </>
                  )}
                </div>
              </div>
              <TokensSummary chokens={p.limits.chokensPerMonth} />
              <div className="text-sm">
                <div className="text-xs font-medium text-muted-foreground mb-1"><Trans id="What you get">What you get</Trans></div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <ul className="space-y-2">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="size-4 mt-[2px] text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                    <li className="flex items-center justify-between text-muted-foreground">
                      <span><Trans id="≈ chat replies">≈ chat replies</Trans></span>
                      <span className="tabular-nums text-foreground">{p.id === "FREE" ? 450 : 8500}</span>
                    </li>
                    <li className="flex items-center justify-between text-muted-foreground">
                      <span><Trans id="≈ code edits">≈ code edits</Trans></span>
                      <span className="tabular-nums text-foreground">{p.id === "FREE" ? 200 : 4250}</span>
                    </li>
                    <li className="flex items-center justify-between text-muted-foreground">
                      <span><Trans id="≈ image gens">≈ image gens</Trans></span>
                      <span className="tabular-nums text-foreground">{p.id === "FREE" ? 5 : 250}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-2">
                {p.id === "FREE" ? (
                  <div className="text-xs text-muted-foreground"><Trans id="This plan is free for everyone.">This plan is free for everyone.</Trans></div>
                ) : (
                  <a
                    href="https://app.chapax.ai/plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm text-background hover:bg-foreground/90"
                  >
                    <Trans id="Get in App">Get in App</Trans>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Token Packs Section */}
        <div className="mt-10">
          <div className="text-lg font-semibold mb-3"><Trans id="One‑time token packs">One‑time token packs</Trans></div>
          <TokenPacks isRussia={isRussia} />
        </div>
      </main>
    </div>
  );
}

function TokensSummary({ chokens }: { chokens: number }) {
  const [open, setOpen] = useState(false);
  const { i18n } = useLingui();
  return (
    <div className="flex items-center justify-between rounded-xl border bg-muted/30 px-3 py-3">
      <div className="text-xl md:text-2xl font-semibold tabular-nums">
        {chokens} <span className="text-base font-normal text-muted-foreground"><Trans id="tokens/mo">tokens/mo</Trans></span>
      </div>
      <button
        type="button"
        className="text-muted-foreground hover:text-foreground"
        onClick={() => setOpen((v) => !v)}
        aria-label={i18n._("What are tokens?")}
      >
        <Info className="size-5" />
      </button>
      {open && (
        <div className="absolute mt-24 right-6 z-10 w-64 rounded-md border bg-background p-3 text-xs shadow-sm">
          <div className="font-medium mb-1"><Trans id="What are tokens?">What are tokens?</Trans></div>
          <div>
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
    { id: "pack-5k", amount: 5000, priceEUR: 5, priceRUB: 490 },
    { id: "pack-10k", amount: 10000, priceEUR: 10, priceRUB: 950 },
    { id: "pack-20k", amount: 20000, priceEUR: 20, priceRUB: 1950 },
    { id: "pack-40k", amount: 40000, priceEUR: 38, priceRUB: 3750 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {packs.map((p) => (
        <div key={p.id} className="rounded-xl border bg-card p-4 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-bold tabular-nums">{p.amount.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground"><Trans id="tokens">tokens</Trans></div>
            </div>
            <div className="text-lg font-semibold">
              {isRussia ? `₽${p.priceRUB?.toLocaleString()}` : `€${p.priceEUR}`}
            </div>
          </div>
          {/* <a
            href="https://app.chapax.ai/plans"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto rounded-md border px-3 py-1.5 text-sm hover:bg-muted text-center"
          >
            <Trans id="Get in App">Get in App</Trans>
          </a> */}
        </div>
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


