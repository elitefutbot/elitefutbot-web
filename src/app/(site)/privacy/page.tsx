import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for Elite FUT SNIPER. Learn how we collect, use, and safeguard personal information, 2-day trial eligibility data, and transaction records.",
  alternates: { canonical: "https://www.elitefutbot.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Elite FUT SNIPER",
    description: "Read the Privacy Policy for Elite FUT SNIPER. Learn how we collect, use, and safeguard personal information, 2-day trial eligibility data, and transaction records.",
    url: "https://www.elitefutbot.com/privacy",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Elite FUT SNIPER",
    description: "Read the Privacy Policy for Elite FUT SNIPER. Learn how we safeguard user data and trial information.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a] text-slate-300 font-body">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-sm text-gray-400 font-medium">Last updated: November 24, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              1. Introduction
            </h2>
            <p>
              At Elite FUT SNIPER (accessible via <a href="https://www.elitefutbot.com/" className="text-primary underline hover:underline">https://www.elitefutbot.com/</a>), we respect your privacy and are committed to protecting any personal data we process. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or use our website, our FUT sniping bot browser extension, and our related tools and services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information to provide a reliable user experience, manage trial eligibility, and facilitate digital SaaS transaction processing. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Registration &amp; 2-Day Trial Data:</strong> When you register or activate our 2-day free trial, we collect your email address, name (if provided), phone number (if provided), and a password, which we store only as a salted hash. To enforce trial duration, prevent duplicate trial abuse, and maintain license integrity, we also record the IP address and approximate country (derived from the IP) used at registration and at each login, and a random device identifier (see below).</li>
              <li><strong>Extension Device Identifier:</strong> The Chrome extension generates a random identifier (a UUID) the first time it runs and stores it locally in your browser. It is not derived from your hardware and contains no personal information. It is sent to our servers with each request so we can enforce the number of devices allowed per license (one for trials, two for paid licenses).</li>
              <li><strong>Extension Usage Data Sent to Our Servers:</strong> While you are signed in, the extension sends us: your bot status (idle, running, or stopped) and last-active time; the search filters currently active; the name, price, and trade ID of players the bot has bought, shown on your dashboard; and your running totals of purchases and estimated profit. This powers your dashboard, statistics, and notifications. If you enable push notifications, we also store a push notification token (Firebase Cloud Messaging).</li>
              <li><strong>Data Stored Locally in Your Browser:</strong> Your bot settings, filters, preferences, and sign-in tokens are stored in your browser using chrome.storage and localStorage. Your EA account username, password, or session cookies are never read, collected, or transmitted by us.</li>
              <li><strong>Billing &amp; Transaction Details:</strong> When you purchase a software license or subscription, payments are processed by <strong>Stripe</strong>. You enter your card and billing details directly at Stripe Checkout. <strong>We do not store your credit card numbers or banking passwords on our servers.</strong> We receive from Stripe a transaction reference, your billing email, subscription status, renewal dates, and product tokens, which we use to verify your digital license entitlement. Because SaaS licenses are delivered immediately and purchases are final and non-refundable (see our Terms of Service), transaction records are securely logged for accounting, tax, and fraud prevention.</li>
              <li><strong>Website Usage &amp; Performance Data:</strong> When you visit our website, we automatically collect information such as IP address, browser type, device information, pages viewed, and diagnostic telemetry, to help us optimize performance and safeguard platform security.</li>
            </ul>
            <p>
              <strong>What we do not collect:</strong> we do not collect your EA/EA FC login credentials, payment card numbers, browsing history outside the sites listed below, or the content of other web pages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              Browser Extension: Permissions &amp; Page Access
            </h2>
            <p>
              The Elite FUT SNIPER Chrome extension requests only the access it needs for its single purpose of helping you trade on the EA FC Ultimate Team Web App:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>ea.com Ultimate Team Web App:</strong> A content script runs on the Web App to read transfer-market listings and perform the search, buy, and list actions you configure. This data is processed locally in your browser and is not sent to us, except the purchase summary described above.</li>
              <li><strong>futbin.com and fut.gg:</strong> The extension opens these sites in background tabs to read publicly displayed player prices, which are used locally to compute your buy and sell values. No personal data is sent to these sites by us.</li>
              <li><strong>Our API (elitefutbot-backend-three.vercel.app):</strong> Used for sign-in, license checks, and the data described in Section 2.</li>
              <li><strong>storage, tabs, scripting, sidePanel:</strong> Used to save your settings, find and open the tabs above, inject the price-reading script, and display the extension side panel. We do not use tab access to read your browsing history or any other site.</li>
            </ul>
            <p>
              The extension does not use remote code. All executable code is bundled in the extension package.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect for essential operational and business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our FUT sniping bot, market tools, and SBC helper tools (and the AI SBC Solver once it is released).</li>
              <li>To administer the 2-day free trial period, evaluate device trial eligibility, and prevent trial exploitation.</li>
              <li>To process digital SaaS license provisioning, verify active subscriptions, and handle authorized cancellations.</li>
              <li>To send transactional communications, including receipts, access links, and critical system alerts.</li>
              <li>To respond to customer support inquiries and provide technical assistance.</li>
              <li>To enforce our Terms of Service, defend against fraudulent chargebacks, and protect platform security.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              4. Data Sharing &amp; Third-Party Services
            </h2>
            <p>
              <strong>We do not sell, rent, or trade your personal information to third parties.</strong> We share data exclusively with trusted service providers necessary to operate the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment Processors:</strong> We use Stripe to securely process payments and manage subscriptions (license keys purchased earlier were processed by Gumroad). These providers adhere to strict industry security standards and have their own privacy policies.</li>
              <li><strong>Analytics:</strong> We use analytics tools, including Google Tag Manager, Google Analytics, and Microsoft Clarity, to understand how the website is used and to improve it. Clarity may record how you interact with pages (such as clicks and scrolling).</li>
              <li><strong>Hosting &amp; Infrastructure:</strong> Our web services, APIs, and databases are hosted on secure modern cloud infrastructure (such as Vercel).</li>
              <li><strong>Push Notifications:</strong> If you enable notifications, Google Firebase Cloud Messaging delivers them using your push token.</li>
              <li><strong>Legal Compliance &amp; Protection:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities, or to defend against fraudulent chargeback attempts.</li>
            </ul>
            <p>
              <strong>Limited Use disclosure:</strong> The use of information received through the Chrome extension adheres to the{" "}
              <a href="https://developer.chrome.com/docs/webstore/program-policies/limited-use" className="text-primary underline hover:underline">Chrome Web Store User Data Policy</a>, including the Limited Use requirements. We use this data only to provide and improve the extension&apos;s single purpose; we do not sell it, do not use or transfer it for advertising, creditworthiness, or lending purposes, and do not allow humans to read it except with your consent, for security or abuse investigation, to comply with law, or in aggregated and anonymized form.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              Data Storage &amp; Retention
            </h2>
            <p>
              Account and usage data is stored in a MongoDB database hosted on cloud infrastructure and is transmitted over HTTPS. Passwords are hashed and never stored in plain text. We keep account data for as long as your account exists. Transaction records are retained as required for accounting, tax, and fraud-prevention obligations. When you ask us to delete your account, we delete your personal data from active systems, except records we are legally required to keep. Data stored locally in your browser is removed when you sign out, clear extension data, or uninstall the extension.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              5. Cookies and Local Storage
            </h2>
            <p>
              We use cookies and local storage tokens to keep you logged in, remember your preferences (like tax calculations or themes), and gather anonymous analytics about site usage. You can instruct your browser to refuse all cookies, but doing so may prevent you from using some parts of our active dashboard.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              6. GDPR &amp; California Privacy Rights (CCPA)
            </h2>
            <p>
              Depending on your location, you have rights regarding your personal information under the General Data Protection Regulation (GDPR) or California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You can request copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can request that we update or correct inaccurate details.</li>
              <li><strong>Right to Erasure (Deletion):</strong> You can request that we delete all your account records and personal data from our active databases.</li>
            </ul>
            <p>
              To exercise any of these rights, please email us directly at <a href="mailto:support@elitefutbot.com" className="text-primary underline hover:underline">support@elitefutbot.com</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              7. Security of Your Data
            </h2>
            <p>
              We implement industry-standard security measures (such as SSL encryption and tokenized authentication) to safeguard your personal data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              Children&apos;s Privacy &amp; Policy Changes
            </h2>
            <p>
              Our services are not directed to children under 13 (or the minimum age in your country), and we do not knowingly collect their data. We may update this policy from time to time; changes are posted on this page with a new &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or how we manage your information, please contact our support desk:
            </p>
            <div className="bg-white/5 p-6 rounded-lg space-y-2 font-mono text-sm border border-white/10">
              <p>Email: <a href="mailto:support@elitefutbot.com" className="text-primary hover:underline">support@elitefutbot.com</a></p>
              <p>Support Desk: <Link href="https://discord.gg/Rkb9nF6WG6" className="text-primary hover:underline">Discord Support Channel</Link></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
