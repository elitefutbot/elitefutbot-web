import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Monitor,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Zap,
} from "lucide-react";
import { PRO_PRICE_LABEL } from "@/lib/pricing";

const PAGE_URL = "https://www.elitefutbot.com/fut-sniping-bot-free-trial";
const TITLE = "FUT Sniping Bot Free Trial (EA FC 27) | Elite FUT SNIPER";
const DESCRIPTION =
  "Try the Elite FUT SNIPER FUT sniping bot and autobuyer free for 2 days. All features, no credit card, quick Chrome setup. See what is included and how to start.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT SNIPER FUT sniping bot free trial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

const quickFacts = [
  { icon: Clock, label: "2 days", sub: "free access from account creation" },
  { icon: Sparkles, label: "All features", sub: "the same bot as Pro" },
  { icon: CreditCard, label: "No credit card", sub: "to create an account and start" },
  { icon: Monitor, label: "1 device", sub: "per free trial" },
];

const included = [
  {
    title: "Auto-sniping on the Transfer Market",
    body: "Scan the market with your own filters and buy underpriced cards as they appear, including the 59th-minute window when prices dip.",
  },
  {
    title: "Autobuyer and auto-listing",
    body: "Relist cards you bought automatically. The 5% EA transfer tax is calculated for you so you can see your real profit.",
  },
  {
    title: "Multi-filter search",
    body: "Search by country, club, league, position, quality, rarity, ratings, consumables and chemistry styles, and run several searches at once.",
  },
  {
    title: "Live Futbin prices in the Web App",
    body: "Price badges appear on the cards inside the EA Web App, so you do not need to keep switching tabs to check values.",
  },
  {
    title: "Humanization++ behaviour engine",
    body: "Randomised timing, mouse curves and pauses that imitate how a person uses the Web App. It is built to reduce risk; it cannot remove it (see the safety section below).",
  },
  {
    title: "Chrome side panel interface",
    body: "Controls and stats sit beside the Web App instead of covering your club, and the extension runs inside your own browser.",
  },
  {
    title: "Profit and session stats",
    body: "Track coins spent, coins earned and your net profit after tax for each session.",
  },
  {
    title: "Free community filters on Discord",
    body: "Daily low-budget filters and trading tips are shared in our Discord community.",
  },
];

const steps = [
  {
    n: "01",
    title: "Create your free account",
    body: "Sign up with email or Discord. You do not enter any card or payment details, and your 2 days start when the account is created.",
  },
  {
    n: "02",
    title: "Download and install the extension",
    body: "Download the ZIP from your account dashboard, turn on Developer Mode in Chrome and load it unpacked. It is not on the Chrome Web Store. The install guide walks through it in about two minutes.",
  },
  {
    n: "03",
    title: "Open the EA FC Web App",
    body: "Log in to the Web App as usual and open Elite FUT SNIPER from the Chrome side panel.",
  },
  {
    n: "04",
    title: "Set your filters and start sniping",
    body: "Pick a player or card type, set a maximum buy price and a sell target, then start the bot and watch the session stats.",
  },
];

const testIdeas = [
  "Run one cheap, low-risk filter first to see how searches, buys and relists behave in your own setup.",
  "Check that the price badges and profit numbers match what you see in the Web App.",
  "Try two or three different filters and compare the results before spending real coins.",
  "Time how long installation and setup take on your computer and browser.",
  "Join the Discord community and test a free daily filter against your own.",
];

const compareRows: Array<[string, string, string]> = [
  ["Price", "Free", `${PRO_PRICE_LABEL}, renews yearly until you cancel`],
  ["Length", "2 days from account creation", "1 year per payment"],
  ["Features", "All features", "All features"],
  ["Devices", "1", "Up to 2"],
  ["Payment details to start", "Not required", "Stripe checkout"],
  ["Discord", "Free daily filters and tips", "Free filters plus VIP Alpha channels and direct developer support"],
  ["Refunds", "Not applicable", "No refunds: all sales are final"],
];

const faqs: Array<{ q: string; a: string }> = [
  {
    q: "Is there a free FUT sniping bot?",
    a: "Elite FUT SNIPER offers a free 2-day trial of the full FUT sniping bot and autobuyer. It is a trial, not a free plan: after 2 days you need a Pro license to keep using it.",
  },
  {
    q: "Do I need a credit card for the free trial?",
    a: "No. You create an account and start. No card or payment details are needed to begin the trial.",
  },
  {
    q: "How long is the free trial, and when does it start?",
    a: "The trial lasts 2 days and starts when you create your account, so it is worth installing the extension and testing soon after signing up.",
  },
  {
    q: "Does the free trial include all features?",
    a: "Yes. The trial includes the same features as the paid plan, including Humanization++. The differences are the length, a limit of 1 device instead of 2, and the VIP Discord channels, which are for Pro members.",
  },
  {
    q: "What happens when the free trial ends?",
    a: `The bot stops working on your account. Nothing is charged automatically because we never took a card. To keep using it you can buy a Pro license (${PRO_PRICE_LABEL}). All purchases are final, which is why the trial is free.`,
  },
  {
    q: "Can I get a second free trial?",
    a: "The trial is meant to be used once. To prevent repeat trials we check a device identifier, as described in our Privacy Policy, so creating another account on the same device does not give you a new trial.",
  },
  {
    q: "Which browsers and computers does it work on?",
    a: "A desktop Chrome-based browser (Chrome, Brave, Opera or Edge) on Windows, macOS or ChromeOS, plus access to the EA FC Web App. Mobile access is coming soon.",
  },
  {
    q: "Can I get banned using a FUT sniping bot?",
    a: "Using any automation tool, including Elite FUT SNIPER, can go against EA's terms and put your account at risk. Humanization++ is built to reduce that risk and we have no ban reports to date, but we cannot guarantee that your account will never be restricted. Read the Terms of Service before you start.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.elitefutbot.com/" },
    { "@type": "ListItem", position: 2, name: "FUT Sniping Bot Free Trial", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": "https://www.elitefutbot.com/#website" },
  about: { "@id": "https://www.elitefutbot.com/#software" },
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
};

export default function FutSnipingBotFreeTrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs font-mono text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">FUT Sniping Bot Free Trial</li>
          </ol>
        </nav>

        {/* HERO */}
        <header className="mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            2 days · all features · no credit card
          </div>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight mb-5 text-white">
            FUT Sniping Bot{" "}
            <span className="bg-primary text-dark px-[0.06em] rounded-[0.06em] box-decoration-clone">
              Free Trial
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Try the full Elite FUT SNIPER FUT sniping bot and autobuyer for EA FC 27 free for 2
            days. No card needed to start, and you can see how it runs on your own computer before
            you pay anything.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="px-8 py-4 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
            >
              Start 2-Day Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="px-6 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
            >
              How the trial works
            </Link>
          </div>
        </header>

        {/* QUICK FACTS */}
        <section aria-label="Free trial at a glance" className="mb-16">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map(({ icon: Icon, label, sub }) => (
              <li
                key={label}
                className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col gap-2"
              >
                <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="font-black text-white text-lg">{label}</span>
                <span className="text-xs text-gray-400 leading-snug">{sub}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-16">
          {/* WHAT'S INCLUDED */}
          <section aria-labelledby="included">
            <h2 id="included" className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
              What you get in the FUT sniping bot free trial
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
              The free trial is not a cut-down demo. You get the same FC 27 sniping bot and autobuyer
              that Pro members use, so what you see in two days is what you would be paying for.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <li
                  key={item.title}
                  className="glass-card rounded-2xl p-5 border border-white/10 flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-6 max-w-3xl">
              Not available yet: the AI SBC Solver is still in development, and mobile access is coming
              soon. Neither is part of the trial.
            </p>
          </section>

          {/* HOW IT WORKS */}
          <section aria-labelledby="how-it-works-heading" id="how-it-works" className="scroll-mt-24">
            <h2
              id="how-it-works-heading"
              className="font-display text-2xl sm:text-3xl font-black text-white mb-8"
            >
              How to start your free trial
            </h2>
            <ol className="space-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  <span className="font-display text-3xl inline-block shrink-0 w-fit bg-primary text-dark font-black px-[0.15em] py-[0.05em] rounded-[0.1em] leading-none">
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl text-white mb-1">{s.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="px-6 py-3 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Create free account
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/install"
                className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
              >
                Read the install guide
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* WHAT TO TEST */}
          <section aria-labelledby="test-ideas">
            <h2 id="test-ideas" className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
              What to test during your 2 days
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
              Two days go quickly, so have a plan. These checks tell you whether a FUT sniping bot
              fits the way you trade.
            </p>
            <ul className="space-y-3">
              {testIdeas.map((t) => (
                <li key={t} className="flex gap-3 text-gray-300 text-sm sm:text-base">
                  <Zap className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* COMPARE */}
          <section aria-labelledby="trial-vs-pro">
            <h2 id="trial-vs-pro" className="font-display text-2xl sm:text-3xl font-black text-white mb-6">
              Free trial vs Pro
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Comparison of the free trial and the Pro plan</caption>
                <thead className="bg-white/5 text-gray-300">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">
                      &nbsp;
                    </th>
                    <th scope="col" className="px-4 py-3 font-bold">
                      Free trial
                    </th>
                    <th scope="col" className="px-4 py-3 font-bold text-primary">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-gray-300">
                  {compareRows.map(([label, trial, pro]) => (
                    <tr key={label}>
                      <th scope="row" className="px-4 py-3 font-semibold text-white align-top">
                        {label}
                      </th>
                      <td className="px-4 py-3 align-top">{trial}</td>
                      <td className="px-4 py-3 align-top">{pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Full pricing details are on the{" "}
              <Link href="/#pricing" className="text-primary hover:underline">
                pricing section
              </Link>
              .
            </p>
          </section>

          {/* AFTER TRIAL */}
          <section aria-labelledby="after-trial">
            <h2 id="after-trial" className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
              What happens when the free trial ends
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Because we never ask for a card, nothing is charged when the 2 days are up. The bot
              simply stops working on your account until you choose to buy a Pro license{" "}
              {`(${PRO_PRICE_LABEL}, paid through Stripe)`}. Pro renews automatically each year and you can cancel at any time to
              stop future renewals. All purchases are final and non-refundable, which is exactly why the
              trial is free and includes everything. The full wording is in our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </section>

          {/* SAFETY */}
          <section
            aria-labelledby="safety"
            className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30"
          >
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-3">
              <ShieldCheck className="w-4 h-4" />
              Read before you start
            </div>
            <h2 id="safety" className="font-display text-xl sm:text-2xl font-black text-white mb-3">
              Is a FUT sniping bot safe to use?
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-3xl">
              Every automation tool carries risk. Using a FUT sniping bot, including Elite FUT SNIPER,
              can go against EA&apos;s terms and put your account at risk. What we can tell you is how
              ours is built: it runs locally in your own browser, your EA password and cookies are not
              sent to our servers, and Humanization++ varies timing and mouse movement to reduce risk.
              We have no ban reports to date, but we cannot promise that your account will never be
              restricted. Use the trial to decide whether the risk is acceptable to you.
            </p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq">
            <h2 id="faq" className="font-display text-2xl sm:text-3xl font-black text-white mb-6">
              FUT sniping bot free trial: frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="glass-card rounded-2xl p-6 border border-white/10">
                  <h3 className="font-bold text-white mb-2">{f.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="pt-8 border-t border-white/10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-3">
              Try it free for 2 days
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Create an account, install the extension and see how a FUT sniping bot works for you.
              No card needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
              >
                Start 2-Day Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                Join the Discord
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Related:{" "}
              <Link href="/install" className="text-primary hover:underline">
                install guide
              </Link>
              {" · "}
              <Link href="/fc27-fut-snipe-bot" className="text-primary hover:underline">
                FC 27 snipe bot
              </Link>
              {" · "}
              <Link href="/tools/comparison-guide" className="text-primary hover:underline">
                compare 54 FUT tools
              </Link>
              {" · "}
              <Link href="/tools/tax-calculator" className="text-primary hover:underline">
                EA tax calculator
              </Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
