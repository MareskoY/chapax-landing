import Head from "next/head";
import { useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";

export default function Terms() {
  const { i18n } = useLingui();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Terms of Service — ChapaX</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Terms of Service for ChapaX" />
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
        <h1 className="text-2xl font-semibold">Terms of Service (Draft)</h1>
        <div className="mt-2 text-sm text-muted-foreground">Effective date: [Insert date]</div>

        <div className="mt-6 text-sm sm:text-base space-y-4">
          <p>
            Company: ChapaX (“we”, “us”, “our”)<br />
            Services: AI chat assistant, image/video tools, artifacts, web and mobile apps<br />
            Contact: <a href="mailto:support@chapax.ai" className="text-primary hover:underline">support@chapax.ai</a>
          </p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">Acceptance</h2>
          <p>By creating an account, accessing, or using ChapaX, you agree to these Terms and our Privacy Policy.</p>

          <h2 className="text-base font-medium">Eligibility</h2>
          <p>You must be at least 16 years old (or the age required by your jurisdiction). If you are under 18, you represent that you have guardian consent.</p>

          <h2 className="text-base font-medium">Account and Security</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep credentials confidential; you’re responsible for all activities under your account.</li>
            <li>Notify us immediately of unauthorized use.</li>
          </ul>

          <h2 className="text-base font-medium">Subscriptions, Trials, Billing, Refunds</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We offer paid subscriptions with recurring billing until cancelled.</li>
            <li>Pricing, features, and limits are described in-app and on the website.</li>
            <li>Payment processing is handled by third parties (e.g., Stripe, Apple App Store, Google Play, YooKassa). Their terms apply.</li>
            <li>Trials may convert to paid automatically unless cancelled before renewal.</li>
            <li>You can cancel anytime; access remains until the end of the current billing cycle.</li>
            <li>Unless required by law or specified otherwise, fees are non‑refundable after the billing period starts.</li>
            <li>We may offer prorations or credits at our discretion.</li>
          </ul>

          <h2 className="text-base font-medium">Fair Use and Acceptable Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Do not use ChapaX for illegal, harmful, infringing, or deceptive activities.</li>
            <li>No attempts to reverse engineer, scrape, bypass limits, or disrupt the Service.</li>
            <li>Do not upload content that violates IP rights, privacy, or applicable laws.</li>
            <li>Respect usage caps; excessive or abusive use may be throttled or suspended.</li>
          </ul>

          <h2 className="text-base font-medium">AI Outputs and Disclaimers</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI responses may be inaccurate, incomplete, or inappropriate. Verify critical information.</li>
            <li>No professional advice (medical, legal, financial, etc.) is provided.</li>
            <li>You are responsible for your use of outputs and for complying with applicable laws and policies.</li>
          </ul>

          <h2 className="text-base font-medium">User Content and License</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You retain ownership of content you provide.</li>
            <li>You grant us a worldwide, non‑exclusive, royalty‑free license to host, process, transmit, and display your content to operate, maintain, and improve the Service.</li>
            <li>You represent that you have rights to the content you submit.</li>
          </ul>

          <h2 className="text-base font-medium">Intellectual Property</h2>
          <p>ChapaX, including software, trademarks, and branding, is owned by us or our licensors. No rights are granted except as stated.</p>

          <h2 className="text-base font-medium">Third‑Party Services</h2>
          <p>We integrate third parties (auth, payments, storage, AI models, analytics, crash reporting). Their terms and privacy practices apply in addition.</p>

          <h2 className="text-base font-medium">Changes and Availability</h2>
          <p>Features may change or be discontinued. We may update these Terms with notice where required.</p>

          <h2 className="text-base font-medium">Termination</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You may stop using ChapaX at any time. We may suspend or terminate access for violations or risks.</li>
            <li>Upon termination, your right to use the Service ends; certain provisions survive (e.g., IP, disclaimers, limitation of liability, arbitration/venue).</li>
          </ul>

          <h2 className="text-base font-medium">Warranties and Liability</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service provided “as is” and “as available” without warranties.</li>
            <li>To the maximum extent permitted by law: we are not liable for indirect, consequential, exemplary, or punitive damages; our aggregate liability is limited to the greater of (a) amounts paid by you in the 3 months before the claim or (b) USD 50.</li>
          </ul>

          <h2 className="text-base font-medium">Indemnification</h2>
          <p>You agree to defend and hold harmless ChapaX from claims arising out of your content or use of the Service in violation of these Terms.</p>

          <h2 className="text-base font-medium">Governing Law and Dispute Resolution</h2>
          <p>Specify governing law and venue: [Insert jurisdiction]. Local consumer rights remain unaffected.</p>

          <h2 className="text-base font-medium">Contact</h2>
          <p>
            <a href="mailto:chatgpt@gmail.com" className="text-primary hover:underline">chatgpt@gmail.com</a>
          </p>
        </div>
      </main>
    </div>
  );
}


