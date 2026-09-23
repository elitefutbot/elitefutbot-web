import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Elite FUT SNIPER. Understand user agreements, billing terms, our strict no-refund SaaS policy, and 7-day free trial conditions.",
  alternates: { canonical: "https://www.elitefutbot.com/terms" },
  openGraph: {
    title: "Terms of Service | Elite FUT SNIPER",
    description: "Read the Terms of Service for Elite FUT SNIPER. Understand user agreements, billing terms, our strict no-refund SaaS policy, and 7-day free trial conditions.",
    url: "https://www.elitefutbot.com/terms",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Elite FUT SNIPER",
    description: "Read the Terms of Service for Elite FUT SNIPER. User agreements, billing terms, and trial conditions.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a] text-slate-300 font-body">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-sm text-gray-400 font-medium">Last updated: September 18, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Elite FUT SNIPER website (located at <a href="https://www.elitefutbot.com/" className="text-primary hover:underline underline">https://www.elitefutbot.com/</a>), services, browser helper overlays, and tools (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              2. Description of Service
            </h2>
            <p>
              Elite FUT SNIPER provides Squad Building Challenge (SBC) helper templates, market fee calculators, and user interface overlay utilities for browser applications. The Service is provided solely for educational, analytical, and entertainment purposes to optimize standard web app workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              3. User Accounts &amp; Security
            </h2>
            <p>
              To access certain features of the Service, you may be required to register for an account (e.g., using Discord authentication). You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              4. Subscription Plans &amp; Billing
            </h2>
            <p>
              Certain premium parts of the Service require a paid license or subscription. By purchasing a subscription or license, you receive immediate digital access to the software and agree to pay all applicable fees, including taxes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Billing Cycle:</strong> Subscriptions are billed on a recurring basis (monthly or annually) or sold as fixed-duration access passes depending on the plan selected at checkout.</li>
              <li><strong>Automatic Renewal:</strong> For recurring plans, your subscription will automatically renew at the end of each billing cycle unless you cancel it before the renewal date.</li>
              <li><strong>Price Adjustments:</strong> We reserve the right to change our subscription fees. Any price changes will be communicated in advance and will apply only to subsequent billing periods.</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-xl bg-white/[0.02] border border-primary/20">
            <h2 className="text-2xl font-headline font-bold text-primary border-b border-primary/10 pb-2">
              5. No Refunds Policy, 7-Day Free Trial &amp; Cancellations
            </h2>
            <p>
              Please read our billing terms carefully before completing any transaction. Because Elite FUT SNIPER provides immediate digital access to proprietary Software-as-a-Service (SaaS) tools and intellectual property, the following policy applies to all users:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Strict No-Refund Policy:</strong> Due to the digital, intangible nature of SaaS products, immediate software license provisioning, and instant access to proprietary algorithms and automated tools, <strong>all purchases and subscription charges are strictly non-refundable and final</strong>. Once payment is processed, no refunds, partial refunds, or prorated credits will be issued under any circumstances.
              </li>
              <li>
                <strong>Always Available 7-Day Free Trial:</strong> To ensure complete satisfaction and transparency before making any financial commitment, <strong>we provide a 7-day free trial on all new accounts</strong>. No credit card or payment information is required to access the trial. You can always use this 7-day trial period to test all features, bot settings, browser compatibility, and performance in your environment prior to purchasing. By completing a purchase, you acknowledge that you have had the opportunity to evaluate the software during the 7-day trial and expressly waive any right to claim a refund.
              </li>
              <li>
                <strong>Cancellations:</strong> You can cancel your recurring subscription at any time directly from your account settings page or by contacting support. Following cancellation, your payment method will not be charged again, and you will continue to have access to premium features until the end of your current active billing period.
              </li>
              <li>
                <strong>Chargebacks &amp; Dispute Policy:</strong> If a chargeback or payment dispute is initiated without first contacting our customer support team, your license keys, account access, and associated hardware identifiers will be permanently suspended.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              6. Acceptable Use Policy
            </h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any local, national, or international laws or regulations.</li>
              <li>Attempt to reverse engineer, copy, disrupt, or exploit the source code, databases, or API integrations of Elite FUT SNIPER.</li>
              <li>Use any automatic scripts or methods that violate third-party application terms or place an unreasonable load on our systems.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              7. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p className="italic text-gray-400">
              Elite FUT SNIPER is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not warrant that the website or tools will be uninterrupted, error-free, or fully secure. In no event shall Elite FUT SNIPER, its developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              9. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-white/5 p-6 rounded-lg space-y-2 font-mono text-sm border border-white/10">
              <p>Email: <a href="mailto:support@elitefutbot.com" className="text-primary hover:underline">support@elitefutbot.com</a></p>
              <p>Support Desk: <Link href="https://discord.gg/Rkb9nF6WG6" className="text-primary hover:underline">Discord Support Channel</Link></p>
              <p>Response SLA: Typically within 24 to 48 business hours.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
