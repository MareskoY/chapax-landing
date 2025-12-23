import Head from "next/head";
import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";
import Footer from "../components/landing/Footer";

export default function Privacy() {
  const { i18n } = useLingui();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Privacy Policy — ChapaX</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Privacy Policy for ChapaX browser extension and website" />
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
        <div className="mt-2 text-sm text-muted-foreground">Last updated: December 22, 2024</div>

        <div className="mt-6 text-sm sm:text-base space-y-4">
          <p>
            ChapaX ("we", "our", or "us") operates the ChapaX browser extension and the website https://chapax.ai (the "Service").
          </p>
          <p>
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use the Service and the choices you have associated with that data. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">1. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve the Service to you.</p>

          <h3 className="text-sm font-medium mt-4">a. Personal Data</h3>
          <p>While using the Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Cookies and Usage Data</li>
            <li>Address, ZIP/Postal code, City (for paying customers only)</li>
          </ul>

          <h3 className="text-sm font-medium mt-4">b. Usage Data</h3>
          <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages of the Service visited</li>
            <li>Date and time of access</li>
            <li>Time spent on pages</li>
            <li>Device identifiers and diagnostic data</li>
          </ul>

          <h3 className="text-sm font-medium mt-4">c. Cookies and Tracking Data</h3>
          <p>We use cookies and similar tracking technologies to monitor activity on the Service and hold certain information. Cookies are small files with data that may include an anonymous unique identifier.</p>
          <p>You can set your browser to refuse cookies or to alert you when a cookie is being sent. However, some parts of the Service may not function properly if you refuse cookies.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">2. Use of Data</h2>
          <p>ChapaX uses the collected data for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to the Service</li>
            <li>To allow you to participate in interactive features when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To analyze usage and improve the Service</li>
            <li>To monitor usage of the Service</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">3. Your Data Protection Rights (GDPR)</h2>
          <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. ChapaX takes reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
          <p>Your rights include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access, update, or delete your information.</li>
            <li>Rectification of inaccurate or incomplete information.</li>
            <li>Objection to processing of your data.</li>
            <li>Restriction of processing in certain cases.</li>
            <li>Data portability (receive a copy in a machine-readable format).</li>
            <li>Withdraw consent at any time, where processing was based on consent.</li>
          </ul>
          <p>You may also file a complaint with your local Data Protection Authority in the EEA.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">4. Data Retention</h2>
          <p>We will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
          <p>Usage Data is generally retained for a shorter period, except when this data is used to strengthen security or to improve the functionality of the Service, or when we are legally obligated to retain this data for longer periods.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">5. Data Security</h2>
          <p>The security of your data is important to us. We implement appropriate technical and organizational measures to protect your Personal Data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">6. Third-Party Services</h2>
          <p>Our Service may contain links to other sites or integrate with third-party services (such as AI model providers, payment processors, authentication services, and analytics tools) that are not operated by us. If you click on a third-party link or use a third-party integration, you will be directed to that third party's site or service. We strongly advise you to review the Privacy Policy of every site you visit and every service you use.</p>
          <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">7. Children's Privacy</h2>
          <p>Our Service is not intended for use by children under the age of 16 (or the minimum age required in your jurisdiction). We do not knowingly collect personally identifiable information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">8. International Data Transfers</h2>
          <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
          <p>If you are located outside the Russian Federation and choose to provide information to us, please note that we transfer the data, including Personal Data, to the Russian Federation and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">9. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">10. Legal Basis for Processing (GDPR)</h2>
          <p>If you are from the European Economic Area (EEA), ChapaX's legal basis for collecting and using your personal information depends on the Personal Data we collect and the specific context in which we collect it. We may process your Personal Data because:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>We need to perform a contract with you (e.g., to provide the Service)</li>
            <li>You have given us permission to do so</li>
            <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
            <li>To comply with the law</li>
          </ul>

          <hr className="my-4 border-foreground/10" />

          <h2 className="text-base font-medium">11. Contact</h2>
          <p>For any questions or requests related to this Privacy Policy, please contact us:</p>
          <div className="mt-2 space-y-1">
            <p>📩 Email: <a href="mailto:support@chapax.ai" className="text-primary hover:underline">support@chapax.ai</a></p>
            <p>👤 Data Controller: Nikita Bokarev (Individual Entrepreneur)</p>
            <p>📍 For legal correspondence: Available upon request</p>
          </div>

          <hr className="my-4 border-foreground/10" />

          <p className="text-xs text-muted-foreground">
            This Privacy Policy complies with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable data protection laws and regulations.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
