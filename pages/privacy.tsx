import Head from "next/head";

export default function Privacy() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Privacy Policy — ChapaX</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Privacy Policy for ChapaX browser extension and website" />
      </Head>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <div className="mt-2 text-sm text-muted-foreground">Last updated: August 29, 2025</div>

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

          <h2 className="text-base font-medium">4. Contact</h2>
          <p>For any questions or requests related to this Privacy Policy, please contact us:</p>
          <div className="mt-2 space-y-1">
            <p>📩 Email: <a href="mailto:chapagpt@gmail.com" className="text-primary hover:underline">chapagpt@gmail.com</a></p>
            <p>👤 Data Controller: Nikita Bokarev (Individual Entrepreneur)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
