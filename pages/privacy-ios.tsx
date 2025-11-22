import Head from "next/head";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";

export default function PrivacyIOS() {
  const { i18n } = useLingui();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Privacy Policy (iOS) — ChapaX</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Privacy Policy for ChapaX iOS mobile application" />
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
            ChapaX ("we", "our", or "us") operates the ChapaX iOS mobile application (the "App") and related services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect your information when you use the App, in compliance with the App Store Review Guidelines and Apple’s privacy requirements.
          </p>

          <h2 className="text-base font-medium mt-6">1. Information We Collect</h2>
          <p>We may collect the following categories of data when you use the App:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal information (such as email address, first and last name)</li>
            <li>Usage data (including device type, OS version, session duration, crash logs)</li>
            <li>In-App Purchase information (through Apple’s App Store payment system)</li>
            <li>Media content uploaded or created within the app (images, videos)</li>
            <li>Optional camera or photo library access, if you choose to use image generation features</li>
          </ul>
          <p>We do <strong>not</strong> access your camera, photos, or files without your explicit permission.</p>

          <h2 className="text-base font-medium mt-6">2. How We Use Your Data</h2>
          <p>We use the collected data to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide and maintain core app functionality</li>
            <li>Enable chat, image, and video generation features</li>
            <li>Process in-app subscriptions and purchases through Apple’s billing system</li>
            <li>Improve app stability and user experience</li>
            <li>Respond to support requests</li>
          </ul>

          <h2 className="text-base font-medium mt-6">3. Data Storage and Security</h2>
          <p>
            All user data (including chat history, generated content, and user settings) is securely stored on our cloud servers to provide synchronization and better AI model performance.
          </p>
          <p>We implement technical and organizational measures to protect your data from unauthorized access or misuse.</p>

          <h2 className="text-base font-medium mt-6">4. Sharing of Data</h2>
          <p>
            We do not sell or rent your data. We may share limited technical data (e.g., API logs) with third-party providers such as OpenAI, Google, or analytics platforms strictly to enable AI functionality and diagnostics.
          </p>

          <h2 className="text-base font-medium mt-6">5. In-App Purchases (IAP)</h2>
          <p>All payments and subscriptions are handled securely by Apple via the App Store. We do not process or store payment information.</p>

          <h2 className="text-base font-medium mt-6">6. Your Rights (GDPR & CCPA)</h2>
          <p>You may request access, correction, or deletion of your personal data by contacting us.</p>

          <h2 className="text-base font-medium mt-6">7. Contact</h2>
          <div className="space-y-1">
            <p>📩 Email: <a href="mailto:support@chapax.ai" className="text-primary hover:underline">support@chapax.ai</a></p>
            <p>👤 Data Controller: Nikita Bokarev (Individual Entrepreneur)</p>
          </div>

          <hr className="my-6 border-foreground/10" />
          <p>
            ChapaX complies with Apple’s App Store Privacy Guidelines and all applicable GDPR, CCPA, and local data protection laws.
          </p>
        </div>
      </main>
    </div>
  );
}


