import Head from "next/head";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";

export default function TermsIOS() {
  const { i18n } = useLingui();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Chapax — Terms of Use (iOS)</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Terms of Use for ChapaX iOS mobile application" />
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

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="text-2xl font-semibold">Terms of Use</h1>

        <div className="mt-6 text-sm sm:text-base space-y-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>You must be 13+ to use the app.</li>
            <li>Auto-renewing subscription Chapax Plus Monthly renews every 1 month until canceled.</li>
            <li>Payment will be charged to your Apple ID at confirmation of purchase.</li>
            <li>Subscription automatically renews unless canceled at least 24 hours before the end of the current period.</li>
            <li>You can manage and cancel your subscription in Settings &gt; Apple ID &gt; Subscriptions after purchase.</li>
            <li>Any unused portion of a free trial will be forfeited when you purchase a subscription.</li>
            <li>Contact: <a href="mailto:support@chapax.ai" className="text-primary hover:underline">support@chapax.ai</a></li>
            <li>Privacy Policy: <a href="https://chapax.ai/privacy-ios" className="text-primary hover:underline">https://chapax.ai/privacy-ios</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}



