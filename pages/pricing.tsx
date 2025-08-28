import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useMemo } from "react";

type Limits = {
  messagesPerMonth: number;
  messagesWithFilesPerMonth: number;
  modalPerMonth: number;
};

type PlanInfo = {
  id: "FREE" | "PLUS";
  title: string;
  priceLabel: string;
  features: string[];
  cta: string;
  limits: Limits;
};

export default function PricingPage({ isRussia }: { isRussia: boolean }) {
  const freeLimits: Limits = {
    messagesPerMonth: 80,
    messagesWithFilesPerMonth: 10,
    modalPerMonth: 10,
  };

  const plusLimits: Limits = {
    messagesPerMonth: 1000,
    messagesWithFilesPerMonth: 50,
    modalPerMonth: 100,
  };

  const currencyLabel = isRussia ? "₽ 560" : "€ 8.5";

  const plans: PlanInfo[] = useMemo(() => {
    return [
      {
        id: "FREE",
        title: "Free",
        priceLabel: "0",
        cta: "Current plan",
        features: [
          "Chat with basic models",
          `${freeLimits.messagesPerMonth} messages/mo`,
          `${freeLimits.messagesWithFilesPerMonth} with files/mo`,
          `${freeLimits.modalPerMonth} text fixes/mo`,
        ],
        limits: freeLimits,
      },
      {
        id: "PLUS",
        title: "Plus",
        priceLabel: currencyLabel.replace(/^€\s*/, ""),
        cta: "Choose Plus",
        features: [
          "Chat with advanced models",
          "Priority access",
          `${plusLimits.messagesPerMonth} messages/mo`,
          `${plusLimits.messagesWithFilesPerMonth} with files/mo`,
          `${plusLimits.modalPerMonth} text fixes/mo`,
        ],
        limits: plusLimits,
      },
    ];
  }, [currencyLabel]);

  return (
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <Head>
        <title>Pricing — Chapax</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pricing</h1>
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
                    {p.id === "FREE" ? "Best to try the app" : "More headroom and priority"}
                    {p.id === "PLUS" && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Most popular</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {p.id === "FREE" ? (
                    <>
                      <div className="text-2xl font-semibold">Free</div>
                      <div className="text-xs text-muted-foreground">/mo</div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-semibold">{isRussia ? "₽560" : `€${p.priceLabel}`}</div>
                      <div className="text-xs text-muted-foreground">/mo</div>
                    </>
                  )}
                </div>
              </div>
              <div className="text-sm">
                <div className="text-xs font-medium text-muted-foreground mb-1">What you get</div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-[2px] text-primary">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-2">
                {p.id === "PLUS" ? (
                  <a
                    href="https://app.chapax.ai/plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm text-background hover:bg-foreground/90"
                  >
                    Get in App
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Region note intentionally removed */
      </main>
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


