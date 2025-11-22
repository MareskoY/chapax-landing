import Head from "next/head";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";

export default function PrivacyAndroid() {
  const { i18n } = useLingui();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Privacy Policy (Android) — ChapaX</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Privacy Policy for ChapaX Android mobile application" />
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
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <div className="mt-2 text-sm text-muted-foreground">Last updated: October 17, 2025</div>

        <div className="mt-6 text-sm sm:text-base space-y-4">
          <p>
            ChapaX ("we", "our", or "us") operates the ChapaX Android mobile application (the "App") and related services.
          </p>
          <p>
            This Privacy Policy describes how we collect, use, and protect your data when using the App, in compliance with Google Play’s User Data and Data Safety requirements.
          </p>

        <h2 className="text-base font-medium mt-6">1. Information We Collect</h2>
        <p>We may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Personal data (email, name, account ID)</li>
          <li>Usage data (device model, Android version, crash logs, diagnostics)</li>
          <li>Billing and purchase information via Google Play Billing</li>
          <li>Optional media (photos, videos) if you use AI generation features</li>
          <li>Camera access (only when you take a picture manually)</li>
        </ul>

        <h2 className="text-base font-medium mt-6">2. How We Use Data</h2>
        <p>We use your data to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Deliver chat, image, and video generation features</li>
          <li>Manage subscriptions and token purchases via Google Play Billing</li>
          <li>Analyze and improve app performance</li>
          <li>Provide customer support</li>
        </ul>

        <h2 className="text-base font-medium mt-6">3. Data Security and Storage</h2>
        <p>Data is securely stored on our servers and transmitted over encrypted connections (HTTPS). We never sell or share your personal information with third parties for marketing.</p>

        <h2 className="text-base font-medium mt-6">4. Data Sharing</h2>
        <p>
          We may share limited data with third-party AI providers (e.g., OpenAI, Google, or other LLM APIs) only for processing your requests (e.g., generating responses, images, or videos).
        </p>

        <h2 className="text-base font-medium mt-6">5. In-App Purchases</h2>
        <p>All payments are processed securely via Google Play Billing. We do not store any credit card or banking information.</p>

        <h2 className="text-base font-medium mt-6">6. Your Privacy Rights</h2>
        <p>Depending on your region, you may have the right to access, correct, or delete your data. To exercise these rights, contact us by email.</p>

        <h2 className="text-base font-medium mt-6">7. Contact</h2>
        <div className="space-y-1">
          <p>📩 Email: <a href="mailto:support@chapax.ai" className="text-primary hover:underline">support@chapax.ai</a></p>
          <p>👤 Data Controller: Nikita Bokarev (Individual Entrepreneur)</p>
        </div>

        <hr className="my-6 border-foreground/10" />
        <p>
          ChapaX follows Google Play’s User Data Policy, Data Safety guidelines, and applicable GDPR/CCPA standards.
        </p>
        </div>
      </main>
    </div>
  );
}


