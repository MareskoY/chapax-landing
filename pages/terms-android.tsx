import Head from "next/head";
import { useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";

export default function TermsAndroid() {
  const { i18n } = useLingui();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Terms of Use (Android) — ChapaX</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Terms of Use for ChapaX Android mobile application" />
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
        <div className="mt-2 text-sm text-muted-foreground">Last updated: [replace with date]</div>

        <div className="mt-6 text-sm sm:text-base space-y-4">
          <p>
            ChapaX (“we”, “our”, or “us”) provides the ChapaX Android mobile application (“the App”) and related services. By using the App, you agree to these Terms of Use. If you do not agree to these Terms, please stop using the App.
          </p>
          <p>
            These Terms are written in accordance with Google Play’s requirements for apps with subscriptions and in-app purchases.
          </p>

          <h2 className="text-base font-medium mt-6">1. Introduction</h2>
          <p>
            The App provides AI-powered chat, media generation, and related features. Some features require an account, an active subscription, or one-time token purchases. You must be at least 18 years old (or the age of majority in your region) to use the App.
          </p>

          <h2 className="text-base font-medium mt-6">2. Account Registration</h2>
          <p>
            To access certain features, you may need to create an account. You agree to provide accurate information and keep it updated. You are responsible for maintaining the confidentiality of your login credentials and all activity under your account. We may suspend or terminate accounts that violate these Terms or show suspicious or fraudulent behavior.
          </p>

          <h2 className="text-base font-medium mt-6">3. Subscriptions</h2>
          <p>The App offers paid subscriptions that unlock additional features or higher usage limits.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Subscriptions are purchased through Google Play Billing,</li>
            <li>clearly displayed with price, duration, and included features before purchase,</li>
            <li>automatically renewing unless cancelled,</li>
            <li>managed through your Google Play account settings.</li>
          </ul>
          <p>
            We do not process or store your payment information; all billing is handled by Google Play.
          </p>

          <h2 className="text-base font-medium mt-6">4. One-Time Token Purchases</h2>
          <p>
            You may purchase one-time token packs (“Tokens”), which can be used for AI interactions, image generation, or other App features. Tokens are:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>non-refundable,</li>
            <li>non-transferable,</li>
            <li>not redeemable for real money,</li>
            <li>usable only inside the App.</li>
          </ul>
          <p>Tokens do not represent any real-world currency or financial product.</p>

          <h2 className="text-base font-medium mt-6">5. Cancellations and Refunds</h2>
          <p>
            To cancel a subscription, use Google Play account settings. After canceling, your subscription remains active until the end of the paid period.
          </p>
          <p>
            Refunds for subscriptions or token purchases are handled according to Google Play’s refund policies. You must request refunds directly from Google Play.
          </p>
          <p>
            We may provide goodwill compensation (e.g., bonus tokens) at our discretion, but this is not guaranteed.
          </p>

          <h2 className="text-base font-medium mt-6">6. Use of the App</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>use the App for illegal activities, harmful content, or harassment,</li>
            <li>attempt to reverse-engineer, modify, or bypass security measures,</li>
            <li>automate usage in ways not supported by the App,</li>
            <li>sell, rent, or transfer your account.</li>
          </ul>
          <p>
            We may limit or revoke access to protect the App, users, or comply with legal obligations.
          </p>

          <h2 className="text-base font-medium mt-6">7. Intellectual Property</h2>
          <p>
            All materials within the App—including code, design, logos, text, and graphics—belong to us or are licensed to us. You receive a limited, personal, non-transferable license to use the App solely in accordance with these Terms. You may not copy, distribute, or modify the App’s contents without permission.
          </p>

          <h2 className="text-base font-medium mt-6">8. Disclaimer and Limitation of Liability</h2>
          <p>The App is provided “as is” without guarantees of uninterrupted or error-free operation.</p>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>service interruptions caused by network issues, hardware failures, or third-party providers (e.g., OpenAI, Google, Google Play Billing),</li>
            <li>data loss caused by unauthorized access or user actions,</li>
            <li>indirect or consequential damages arising from use of the App.</li>
          </ul>
          <p>
            To the maximum extent permitted by law, our total liability is limited to the amount you paid for App features in the 3 months before the issue occurred.
          </p>

          <h2 className="text-base font-medium mt-6">9. Privacy</h2>
          <p>
            Your data is handled according to our Privacy Policy. By using the App, you acknowledge and accept the Privacy Policy.
          </p>

          <h2 className="text-base font-medium mt-6">10. Changes to the App and Terms</h2>
          <p>
            We may update the App or modify these Terms at any time. Continuing to use the App after changes means you accept the updated Terms. If the App or certain features are discontinued, we will notify users when reasonably possible.
          </p>

          <h2 className="text-base font-medium mt-6">11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Portugal, unless local laws in your region require otherwise. Any disputes should first be addressed through communication with us.
          </p>

          <h2 className="text-base font-medium mt-6">12. Contact</h2>
          <div className="space-y-1">
            <p>📩 Email: <a href="mailto:support@chapax.ai" className="text-primary hover:underline">support@chapax.ai</a></p>
            <p>👤 Data Controller: Nikita Bokarev (Individual Entrepreneur)</p>
          </div>

          <hr className="my-6 border-foreground/10" />
          <p>
            ChapaX complies with Google Play’s User Data Policy, Data Safety requirements, and applicable GDPR/CCPA standards.
          </p>
        </div>
      </main>
    </div>
  );
}








