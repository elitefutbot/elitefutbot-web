import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Elite FUT SNIPER. Understand user agreements, Stripe billing terms, our strict no-refund SaaS policy, and 2-day free trial conditions.",
  alternates: { canonical: "https://www.elitefutbot.com/terms" },
  openGraph: {
    title: "Terms of Service | Elite FUT SNIPER",
    description: "Read the Terms of Service for Elite FUT SNIPER. Understand user agreements, Stripe billing terms, our strict no-refund SaaS policy, and 2-day free trial conditions.",
    url: "https://www.elitefutbot.com/terms",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Elite FUT SNIPER",
    description: "Read the Terms of Service for Elite FUT SNIPER. User agreements, Stripe billing terms, no-refund policy, and trial conditions.",
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
          <p className="text-sm text-gray-400 font-medium">Last updated: November 5, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Elite FUT SNIPER website (located at <a href="https://www.elitefutbot.com/" className="text-primary hover:underline underline">https://www.elitefutbot.com/</a>), the FUT sniping bot browser extension, services, and tools (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              2. Description of Service
            </h2>
            <p>
              Elite FUT SNIPER is a subscription software service that provides a <strong>FUT sniping bot and autobuyer</strong> for the EA SPORTS FC Ultimate Team Web App. It is delivered as a browser extension together with a web dashboard for managing your account, license, and settings. The sniping bot automates searching, bidding, and buying on the Transfer Market according to the filters and settings you configure. We also provide related tools such as market fee calculators and Squad Building Challenge (SBC) helper templates.
            </p>
            <p>
              <strong>AI SBC Solver (coming soon):</strong> We are developing an AI SBC Solver. It is not yet available. Its release date and features are not guaranteed, and you should not purchase a subscription in reliance on it. We will update this section when it launches.
            </p>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-primary/30 space-y-2">
              <p className="font-bold text-primary">Account risk notice</p>
              <p>
                Elite FUT SNIPER is an independent product. We are not affiliated with, endorsed by, or sponsored by Electronic Arts Inc. (&quot;EA&quot;). Using third-party automation tools, including Elite FUT SNIPER, may breach EA&apos;s terms of service and user agreement. EA may take action against accounts it believes use such tools, which can include temporary or permanent bans, removal of coins or items, or loss of access to FC Ultimate Team.
              </p>
              <p>
                We build the Service to reduce this risk, but we cannot guarantee that your account will not be restricted, and we do not promise a ban-free experience. <strong>You use the Service entirely at your own risk and are solely responsible for your EA account.</strong>
              </p>
            </div>
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
              4. Subscription Plans &amp; Stripe Billing
            </h2>
            <p>
              Certain premium parts of the Service require a paid license or subscription. All payments and recurring subscriptions are securely processed through <strong>Stripe</strong>. By purchasing a subscription or license via Stripe Checkout, you receive immediate digital access to the software and agree to pay all applicable fees, including taxes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment Processor (Stripe):</strong> We use Stripe to process all subscription payments, add-ons, and billing management. We do not store your credit card or payment credentials on our servers. By submitting payment details at Stripe Checkout, you authorize Stripe to charge your designated payment method in accordance with your selected plan.</li>
              <li><strong>Billing Cycle:</strong> The Pro plan is billed annually (€19.90 per year at the current price). Licenses purchased before the switch to yearly billing remain valid until their stated expiry date.</li>
              <li><strong>Automatic Renewal:</strong> Your subscription automatically renews through Stripe at the end of each yearly billing cycle and the payment method on file is charged, unless you cancel before the renewal date. If you already hold an active license when you turn on automatic renewal, nothing is charged until that license&apos;s expiry date, which becomes your renewal date.</li>
              <li><strong>Mobile App Access Add-on:</strong> Mobile App Access is an optional add-on (€10 per year at the current price) available only together with an active Pro plan. It works only while your Pro plan is active and ends when your Pro plan ends. When added to an existing plan or license, it is charged pro rata via Stripe for the time remaining until your renewal or expiry date, and from then on renews together with Pro.</li>
              <li><strong>Price Adjustments:</strong> We reserve the right to change our subscription fees. Any price changes will be communicated in advance and will apply only to subsequent billing periods.</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-xl bg-white/[0.02] border border-primary/20">
            <h2 className="text-2xl font-headline font-bold text-primary border-b border-primary/10 pb-2">
              5. Strict No-Refund Policy, Free Trial &amp; Cancellations
            </h2>
            <p>
              Please read our refund and trial terms carefully before completing any payment via Stripe. Because Elite FUT SNIPER provides immediate digital access to proprietary Software-as-a-Service (SaaS) tools and intellectual property, the following policy strictly applies to all users:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Strict No-Refund Policy (All Sales Final):</strong> Due to the digital, intangible nature of SaaS products, immediate software license activation upon Stripe checkout completion, and instant access to proprietary algorithms and automated tools, <strong>all payments, subscription charges, renewals, and add-on fees processed via Stripe are strictly non-refundable and final</strong>. Once a transaction is processed through Stripe, <strong>no refunds, partial refunds, or prorated credits will be issued under any circumstances</strong> (including unused subscription time, forgotten renewals, user configuration errors, or third-party game account restrictions).
              </li>
              <li>
                <strong>Use the Free Trial Before Buying (2-Day Free Trial):</strong> Because all Stripe purchases are final and non-refundable, <strong>we provide a free 2-day trial on all new accounts</strong> so you can thoroughly test the software before paying. No credit card or Stripe checkout is required to activate the trial. <strong>You must use this free trial to verify all features, sniping speed, bot settings, browser compatibility, and performance in your own setup before purchasing.</strong> By completing a paid checkout on Stripe, you confirm that you have already evaluated (or had full opportunity to evaluate) the Service using the free trial, consent to immediate digital delivery, and expressly waive any right of withdrawal or refund.
              </li>
              <li>
                <strong>Cancellations via Stripe Customer Portal:</strong> You can cancel your recurring subscription at any time via &ldquo;Manage subscription&rdquo; on your account dashboard (which opens the official Stripe Customer Portal) or by contacting support before your renewal date. Following cancellation, Stripe will not charge your payment method for future billing cycles, and you will retain access to paid features until the end of your current active billing period. Cancelling a subscription stops future automatic renewals only and does not generate a refund for any current or past billing period.
              </li>
              <li>
                <strong>Stripe Chargebacks &amp; Dispute Policy:</strong> Initiating a chargeback or payment dispute through Stripe or your card issuer instead of using the free trial or cancelling prior to renewal is a violation of these Terms. If a payment dispute or chargeback is opened, your license, account access, and associated hardware identifiers will be immediately and permanently suspended, and we will provide trial usage records, login telemetry, and acceptance of this No-Refund Policy to Stripe to contest the dispute.
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
              <li>Interfere with, overload, or attack our systems or any third-party service, beyond the normal use of the Service as described in Section 2.</li>
              <li>Share, resell, or redistribute your license, account, or access to the Service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              7. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p className="italic text-gray-400">
              Elite FUT SNIPER is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not warrant that the website or tools will be uninterrupted, error-free, or fully secure. In no event shall Elite FUT SNIPER, its developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Service. This includes, without limitation, any ban, suspension, or restriction of your EA account and any loss of coins, players, or other in-game items.
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
