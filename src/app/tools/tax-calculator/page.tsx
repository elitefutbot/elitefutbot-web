import { Metadata } from "next";
import TaxCalculatorComponent from "@/components/TaxCalculatorComponent";
import Link from "next/link";
import {
  Zap,
  Tag,
  ShieldCheck,
  Sliders,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  HelpCircle,
  BarChart3,
  MousePointerClick,
  Cpu,
  Star,
  RefreshCcw,
  List,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "FC 27 Tax Calculator: 5% EA Transfer Market Tax | Elite FUT Bot",
  },
  description:
    "Free FC 27 tax calculator. Calculate EA Sports FC 5% transfer market tax, net profit, break-even sell price, and coin profit margins with 100% precision.",
  alternates: { canonical: "https://www.elitefutbot.com/tools/tax-calculator" },
  openGraph: {
    title: "FC 27 Tax Calculator: 5% EA Transfer Market Tax | Elite FUT Bot",
    description:
      "Calculate EA Sports FC 27 5% transfer market tax, net profit, break-even sell price, and coin margins.",
    url: "https://www.elitefutbot.com/tools/tax-calculator",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Tax Calculator: 5% EA Transfer Market Tax | Elite FUT Bot",
    description: "Calculate EA Sports FC 27 5% transfer market tax & break-even price.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "FC 27 Tax Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser, Windows, macOS, ChromeOS",
      description:
        "Free calculator for EA Sports FC 27 5% transfer market tax, net profit, break-even sell price, and coin profit margin.",
      url: "https://www.elitefutbot.com/tools/tax-calculator",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.elitefutbot.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://www.elitefutbot.com/tools/comparison-guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "FC 27 Tax Calculator",
          item: "https://www.elitefutbot.com/tools/tax-calculator",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is EA's transfer market tax in FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EA Sports charges a flat 5% fee on the gross sell price of every card sold on the Ultimate Team transfer market. This is applied automatically — you receive 95% of your listed price.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate the break-even sell price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Divide your buy price by 0.95. If you paid 9,500 coins, your break-even is 9,500 ÷ 0.95 = 10,000 coins. The calculator above does this automatically in real time.",
          },
        },
        {
          "@type": "Question",
          name: "How much tax on a 100,000 coin sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EA deducts 5,000 coins (5%) and you receive 95,000 coins net. To profit you need to have bought the card for less than 95,000 coins.",
          },
        },
        {
          "@type": "Question",
          name: "Does the 5% tax apply to loans, SBCs, or packs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The 5% tax only applies to transfer market sales. Cards obtained from packs, SBCs, objectives, or loans do not incur this fee — only when you list and sell them on the market.",
          },
        },
        {
          "@type": "Question",
          name: "Can I avoid the 5% EA transfer market tax?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — it is mandatory and unavoidable. The only way to stay profitable is to ensure your buy price is low enough that 95% of your sell price still exceeds it. Our sniping bot automates exactly this strategy.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good profit margin target for FUT trading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the 5% tax, aim for at least 10–20% gross margin on your sell price. For example: buy at 85,000, sell at 110,000 → 5,500 tax, 19,500 net profit (a 23% gross margin on sell).",
          },
        },
        {
          "@type": "Question",
          name: "Does Elite FUT SNIPER calculate tax automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The bot uses the same 5% tax formula internally when displaying session profit estimates and when calculating the safe listing prices on auto-list. You don't need to run calculations manually.",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.elitefutbot.com/tools/tax-calculator",
      url: "https://www.elitefutbot.com/tools/tax-calculator",
      name: "FC 27 Tax Calculator: 5% Transfer Market Tax | Elite FUT Bot",
      description:
        "Free calculator for EA Sports FC 27 5% transfer market tax, net profit, break-even sell price, and coin profit margin.",
      inLanguage: "en-US",
    },
  ],
};

// ——— Sub-components ———

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {text}
    </div>
  );
}

function TaxExplainerCard({
  icon: Icon,
  title,
  body,
  accent = "primary",
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  accent?: "primary" | "red" | "amber" | "blue";
}) {
  const colors = {
    primary: "text-primary border-primary/20 bg-primary/5",
    red: "text-red-400 border-red-500/20 bg-red-500/5",
    amber: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    blue: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  };
  return (
    <div
      className={`p-5 rounded-2xl border ${colors[accent]} space-y-2 bg-black/40`}
    >
      <div className={`${colors[accent].split(" ")[0]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-sm font-bold text-white uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
    </div>
  );
}

function FeatureChip({
  icon: Icon,
  label,
  description,
}: {
  icon: React.ElementType;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-primary/30 hover:bg-primary/5 transition-all group">
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-bold text-white mb-0.5">{label}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="py-5 border-b border-white/[0.07] last:border-0">
      <div className="flex gap-3">
        <HelpCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-white mb-1.5">{q}</p>
          <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ——— Main Page ———

export default function TaxCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden font-sans">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* ── HERO HEADER ─────────────────────────────────────── */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live 5% Tax Calculation Engine • FC 27
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight uppercase leading-tight">
              FC 27 <span className="text-primary italic">TAX CALCULATOR</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              Calculate EA&apos;s 5% transfer market tax, net profit,
              break-even sell price, and profit margins with surgical accuracy.
            </p>
          </div>

          {/* ── INTERACTIVE CALCULATOR ──────────────────────────── */}
          <TaxCalculatorComponent />

          {/* ── HOW THE 5% TAX WORKS ────────────────────────────── */}
          <section aria-labelledby="how-tax-works">
            <div className="text-center mb-10">
              <SectionBadge text="Tax Mechanics" />
              <h2
                id="how-tax-works"
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
              >
                How EA&apos;s 5% Transfer Market Tax Works
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Every single card sold on the EA FC Ultimate Team transfer
                market is subject to a mandatory 5% platform fee. Understanding
                this is the difference between profitable trading and running a
                losing operation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <TaxExplainerCard
                icon={Tag}
                accent="red"
                title="Flat 5% Fee"
                body="EA deducts exactly 5% of the gross sell price before crediting coins to your account — no exceptions, no tiers."
              />
              <TaxExplainerCard
                icon={TrendingUp}
                accent="amber"
                title="Break-Even Formula"
                body="Break-even sell price = Buy Price ÷ 0.95. Buy at 9,500 → you must sell for at least 10,000 to recover your coins."
              />
              <TaxExplainerCard
                icon={BarChart3}
                accent="blue"
                title="Scales With Value"
                body="On a 1,000,000 coin sale you lose 50,000 coins to tax. This makes profit-margin planning critical for big-ticket flips."
              />
              <TaxExplainerCard
                icon={ShieldCheck}
                accent="primary"
                title="Cannot Be Avoided"
                body="The 5% fee is built into EA's marketplace. No workaround exists — your only lever is buying low enough to absorb it."
              />
            </div>

            {/* Tax formula visualiser */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                The Math — Simplified
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Sell Price
                  </p>
                  <p className="text-2xl font-black font-mono text-white">
                    100,000
                  </p>
                  <p className="text-xs text-gray-500">Gross coins listed</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    EA 5% Tax
                  </p>
                  <p className="text-2xl font-black font-mono text-red-500">
                    −5,000
                  </p>
                  <p className="text-xs text-gray-500">Deducted by EA</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    You Receive
                  </p>
                  <p className="text-2xl font-black font-mono text-primary">
                    95,000
                  </p>
                  <p className="text-xs text-gray-500">Net coins to club</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.07]">
                <p className="text-xs text-gray-500 text-center font-mono">
                  Net Received = Sell Price × 0.95 &nbsp;|&nbsp; Break-Even
                  Sell = Buy Price ÷ 0.95
                </p>
              </div>
            </div>

            {/* AEO / GEO Quick Reference Tax Table */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.07] pb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                    FC 27 Transfer Market Tax Reference Table
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Quick-reference deductions and break-even thresholds across common FC 27 coin tiers.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 self-start sm:self-auto">
                  Flat 5.0% Tax
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.07] text-xs font-bold uppercase tracking-wider text-gray-400">
                      <th className="py-3 px-3">Gross Sell Price</th>
                      <th className="py-3 px-3">5% EA Tax</th>
                      <th className="py-3 px-3">Net Coins Received</th>
                      <th className="py-3 px-3">Break-Even Buy Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] font-mono text-xs sm:text-sm">
                    {[
                      { gross: "10,000", tax: "−500", net: "9,500", maxBuy: "9,500" },
                      { gross: "25,000", tax: "−1,250", net: "23,750", maxBuy: "23,750" },
                      { gross: "50,000", tax: "−2,500", net: "47,500", maxBuy: "47,500" },
                      { gross: "100,000", tax: "−5,000", net: "95,000", maxBuy: "95,000" },
                      { gross: "250,000", tax: "−12,500", net: "237,500", maxBuy: "237,500" },
                      { gross: "500,000", tax: "−25,000", net: "475,000", maxBuy: "475,000" },
                      { gross: "1,000,000", tax: "−50,000", net: "950,000", maxBuy: "950,000" },
                      { gross: "2,000,000", tax: "−100,000", net: "1,900,000", maxBuy: "1,900,000" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3 font-bold text-white">{row.gross}</td>
                        <td className="py-3 px-3 text-red-400">{row.tax}</td>
                        <td className="py-3 px-3 text-primary font-bold">{row.net}</td>
                        <td className="py-3 px-3 text-gray-300">{row.maxBuy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── SNIPING TIPS THAT USE THE TAX CALC ─────────────── */}
          <section aria-labelledby="trading-tips">
            <div className="text-center mb-10">
              <SectionBadge text="FUT Trading Tips" />
              <h2
                id="trading-tips"
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
              >
                Pro FUT Trading Tips Using This Calculator
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  n: "01",
                  title: "Always Calculate Break-Even First",
                  body: "Before buying any card to flip, use the calculator to find the exact break-even sell price. Never guess — a 5,000 coin mistake on a bulk flip erases hours of profit.",
                },
                {
                  n: "02",
                  title: "Target ≥15% Gross Margin",
                  body: "After EA's 5% cut, your real margin shrinks. Aim for a minimum 15–20% gross margin on your sell price so your net profit stays meaningful after tax.",
                },
                {
                  n: "03",
                  title: "Use Quantity Multiplier",
                  body: "Buying the same card in bulk? Enter the quantity. A 2,000 coin profit per card becomes 40,000 coins on 20 cards — the multiplier shows you if the grind is worth it.",
                },
                {
                  n: "04",
                  title: "Set Your Snipe Bot's Max Buy Below Break-Even",
                  body: "Your bot's max buy price should always sit well below the break-even threshold. Leave at least 10% headroom above break-even as your profit floor before starting the bot.",
                },
              ].map((tip) => (
                <div
                  key={tip.n}
                  className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-primary/20 transition-colors"
                >
                  <span className="text-4xl font-black text-primary/20 leading-none font-mono flex-shrink-0">
                    {tip.n}
                  </span>
                  <div>
                    <p className="font-bold text-white mb-1.5">{tip.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {tip.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW EACH FEATURE USES THE TAX CALC ─────────────── */}
          <section aria-labelledby="bot-tax-integration">
            <div className="text-center mb-10 sm:mb-12">
              <SectionBadge text="Bot × Tax Calculator" />
              <h2
                id="bot-tax-integration"
                className="text-2xl sm:text-4xl font-black uppercase tracking-tight"
              >
                See It Live — Real Console Log
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
                This is a real Elite FUT SNIPER console session. Every line
                proves the bot calculates the 5% EA tax, auto-lists, and tracks
                net profit — automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              {/* Left — real console screenshot */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#111]">
                  <img
                    src="/tax-calc-console-log.png"
                    alt="Elite FUT SNIPER live console log showing Dybala bought for 9,500, auto-listed for 10,750, EA tax 5% deducted −537, profit +713 and session profit after EA tax +1,251"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                {/* Annotated callout boxes */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: "Cards Bought", val: "2", color: "text-primary" },
                    {
                      label: "EA Tax Paid",
                      val: "−1,049",
                      color: "text-red-400",
                    },
                    {
                      label: "Session Profit",
                      val: "+1,251",
                      color: "text-primary",
                    },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="p-2 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-center"
                    >
                      <p className={`text-base sm:text-lg font-black font-mono ${c.color}`}>
                        {c.val}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{c.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed px-1">
                  <span className="text-primary font-bold">Real session.</span>{" "}
                  Dybala sniped twice at 9,500 and 9,200 coins. Auto-listed at
                  10,750 and 10,250. EA deducted 5% each sale. Bot logged net
                  profit of +713 and +538 per card. Session total:{" "}
                  <span className="text-primary font-mono">+1,251 coins</span>{" "}
                  after tax.
                </p>
              </div>

              {/* Right — step-by-step breakdown */}
              <div className="space-y-3">
                {[
                  {
                    step: "Step 1 — Snipe",
                    icon: Zap,
                    tag: "09:12:08",
                    log: "Dybala bought for 9500",
                    desc: "Bot searches for cards where buyNowPrice ≤ your Max Price. Finds Dybala at 9,500 — fires Buy-Now instantly. Card lands in your Transfer List.",
                  },
                  {
                    step: "Step 2 — Auto-List Price Calculation",
                    icon: Tag,
                    tag: "09:12:09",
                    log: "Auto-list: Dybala listed for 10,750",
                    desc: "Bot calculates listing price: Buy Price (9,500) + Profit Margin (500) + 5% EA Tax (750) = 10,750. Listed immediately, no manual action needed.",
                  },
                  {
                    step: "Step 3 — Tax Deduction Logged",
                    icon: TrendingUp,
                    tag: "09:12:09",
                    log: "EA tax (5%): −537 · you receive 10,213 · profit +713",
                    desc: "After the card sells at 10,750, EA deducts 5% (537 coins). You receive 10,213 coins net. Bot logs your actual profit: +713 coins after all deductions.",
                  },
                  {
                    step: "Step 4 — Human Pause (Anti-Ban)",
                    icon: Clock,
                    tag: "09:12:15",
                    log: "Taking a human-like browsing pause...",
                    desc: "Between searches the bot inserts a natural pause to simulate human browsing behaviour. Timing is randomised so your pattern never looks like a bot.",
                  },
                  {
                    step: "Step 5 — Sleep & Auto-Resume",
                    icon: RefreshCcw,
                    tag: "09:12:41",
                    log: "Sleeping... Will wake up at 09:22:41",
                    desc: "After the configured run interval the bot enters a sleep cycle to stay within EA's rate limits, then automatically resumes without any manual input.",
                  },
                ].map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 transition-colors"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] sm:text-xs font-bold text-primary uppercase tracking-widest mb-1">
                          {row.step}
                        </p>
                        <p className="text-xs font-mono text-gray-500 mb-1.5 break-words">
                          <span className="text-gray-600">{row.tag}</span>{" "}
                          <span className="text-primary/80">{row.log}</span>
                        </p>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {row.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── EXTENSION FEATURES CTA ──────────────────────────── */}
          {/* Hero banner image */}
          <section aria-labelledby="extension-features" className="space-y-14">
            {/* Full-width banner */}
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(204,255,0,0.08)]">
              <img
                src="/tax-calc-banner-dark.png"
                alt="Elite FUT SNIPER Chrome extension — Skip the tax math, auto-list every snipe"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Extension feature detail — two-column with screenshots */}
            <div className="relative rounded-3xl bg-white/[0.02] border border-primary/20 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />

              <div className="relative p-8 sm:p-12">
                {/* Section header */}
                <div className="text-center mb-12">
                  <SectionBadge text="Elite FUT SNIPER Extension" />
                  <h2
                    id="extension-features"
                    className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
                  >
                    Skip the Tax Math.{" "}
                    <span className="text-primary">Let the Bot Handle It.</span>
                  </h2>
                  <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    Elite FUT SNIPER is the only FC 27 Chrome extension that
                    natively bakes the 5% EA tax formula into every buy, list,
                    and profit calculation — automatically, in real time, inside
                    the Web App.
                  </p>
                </div>

                {/* Two screenshots side-by-side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
                  {/* Left: Simple mode UI */}
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                      <img
                        src="/tax-calc-bot-ui-simple.png"
                        alt="Elite FUT SNIPER extension UI — Simple mode with Dybala sniping at 9,500 coins, auto-list enabled, profit margin + 5% EA tax mode selected"
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2 px-1">
                      <p className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        Simple Mode — Snipe &amp; List in One Click
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Set your target card (e.g. Dybala at Rating 85), choose
                        a speed profile (Safe / Caution / Risky), and enable{" "}
                        <strong className="text-gray-200">List automatically</strong>. The
                        bot buys at your Max Price, then immediately lists at{" "}
                        <span className="text-primary font-mono">
                          Buy Price + Profit Margin + 5% EA Tax
                        </span>{" "}
                        — all pre-calculated, all tax-accounted.
                      </p>
                    </div>
                  </div>

                  {/* Right: Advanced mode UI */}
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                      <img
                        src="/tax-calc-bot-ui-advanced.png"
                        alt="Elite FUT SNIPER extension — Advanced mode with action delay, sleep settings, purchase limits and all configuration options visible"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2 px-1">
                      <p className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                        Advanced Mode — Full Control, Zero Guesswork
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Unlock Action Delay, Sleep Settings, Purchase Limits, and
                        Max Buys Per Search for precision session management. Every
                        listing price is still tax-aware — the bot never lets you
                        sell at a loss.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature bullets in a clean 2x4 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    {
                      icon: Zap,
                      label: "Auto-Snipe (Buy-Now)",
                      description:
                        "Scans up to 10 searches/min, fires Buy-Now on the cheapest card matching your filters the moment it appears. Dybala at 9,500 → sniped in milliseconds.",
                    },
                    {
                      icon: List,
                      label: "Tax-Aware Auto-List",
                      description:
                        "Listing mode = Buy Price + Margin + 5% EA Tax. The bot calculates the exact list price so your profit margin is guaranteed after EA's cut.",
                    },
                    {
                      icon: BarChart3,
                      label: "FUTBIN Console / PC Sync",
                      description:
                        "Switch to FUTBIN Price mode and the bot fetches the live market rate for your platform (Console or PC) and lists at that price — tax floor still enforced.",
                    },
                    {
                      icon: Sliders,
                      label: "Rating & Price Precision Filters",
                      description:
                        "Filter by Exact Rating (e.g. 85), min/max Buy-Now, chemistry styles, or positions. Target exactly the card tier where your profit margins are strongest.",
                    },
                    {
                      icon: ShieldCheck,
                      label: "Safe / Caution / Risky Speed Profiles",
                      description:
                        "Three pre-tuned profiles: Safe (3 RPM), Caution (6 RPM), Risky (9 RPM) with automatic sleep cycles and rate-limit protection built in.",
                    },
                    {
                      icon: MousePointerClick,
                      label: "Act Like Human + Human++ Mode",
                      description:
                        "Randomised browse pauses, Bézier mouse curves, and natural scroll deceleration make the bot's fingerprint indistinguishable from a real trader.",
                    },
                    {
                      icon: Clock,
                      label: "Sleep Cycles (Anti-Soft-Ban)",
                      description:
                        "Default: 15-min run then 5-min rest. Fully configurable — keeps sessions well within EA's acceptable usage window with zero manual intervention.",
                    },
                    {
                      icon: RefreshCcw,
                      label: "Live Session Logs & Profit Sync",
                      description:
                        "Real-time console logs every snipe, auto-list, EA tax deduction, and net profit — so you always know exactly how much you made after tax.",
                    },
                  ].map(({ icon: Icon, label, description }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-0.5">
                          {label}
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Link
                    href="/fc27-fut-snipe-bot"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-black font-black text-sm uppercase tracking-wide hover:brightness-110 transition-all shadow-[0_0_30px_rgba(204,255,0,0.2)]"
                  >
                    Start 7-Day Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/fc27-fut-sniping-bot-autobuyer-features"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-all"
                  >
                    View All 12 Features
                  </Link>
                </div>

                {/* Stats bar */}
                <div className="mt-10 pt-8 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  {[
                    { val: "10 RPM", label: "Max search speed" },
                    { val: "5%", label: "Tax auto-calculated" },
                    { val: "3", label: "FUT accounts included" },
                    { val: "7 Days", label: "Free trial — no card" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-black text-primary font-mono">
                        {s.val}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── COMMON MISTAKES ─────────────────────────────────── */}
          <section aria-labelledby="common-mistakes">
            <div className="text-center mb-10">
              <SectionBadge text="Avoid These Mistakes" />
              <h2
                id="common-mistakes"
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
              >
                Common FUT Tax Calculation Mistakes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  bad: "Setting Max Buy = Market Price",
                  good: "Set Max Buy = Market Price × 0.85 (leave ≥15% for the 5% tax + desired profit margin)",
                },
                {
                  bad: "Forgetting tax on both sides of a flip",
                  good: "You only pay tax when selling — buying is tax-free. The calculator correctly applies tax to the sell side only.",
                },
                {
                  bad: "Listing at your buy price",
                  good: "The bot prevents this — it ensures Start Price > buyNowPrice, so you never list at a guaranteed loss.",
                },
                {
                  bad: "Using console price on PC accounts",
                  good: "FUTBIN prices differ between PS/Xbox and PC. The extension lets you pick the correct platform — always match your FUT account platform.",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-black/40 border border-white/[0.07] space-y-3"
                >
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <p className="text-xs font-bold uppercase tracking-wide">
                      Mistake
                    </p>
                  </div>
                  <p className="text-sm text-gray-300">{m.bad}</p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <p className="text-xs font-bold uppercase tracking-wide">
                      Fix
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">{m.good}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────────────── */}
          <section aria-labelledby="faq">
            <div className="text-center mb-8">
              <SectionBadge text="FAQ" />
              <h2
                id="faq"
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-xl divide-y divide-white/[0.07]">
              <FaqItem
                q="What is EA's transfer market tax in FC 27?"
                a="EA Sports charges a flat 5% fee on the gross sell price of every card sold on the Ultimate Team transfer market. This is applied automatically — you receive 95% of your listed price."
              />
              <FaqItem
                q="How do I calculate the break-even sell price?"
                a="Divide your buy price by 0.95. If you paid 9,500 coins, your break-even is 9,500 ÷ 0.95 = 10,000 coins. The calculator above does this automatically in real time."
              />
              <FaqItem
                q="How much tax on a 100,000 coin sale?"
                a="EA deducts 5,000 coins (5%) and you receive 95,000 coins net. To profit you need to have bought the card for less than 95,000 coins."
              />
              <FaqItem
                q="Does the 5% tax apply to loans, SBCs, or packs?"
                a="No. The 5% tax only applies to transfer market sales. Cards obtained from packs, SBCs, objectives, or loans do not incur this fee — only when you list and sell them on the market."
              />
              <FaqItem
                q="Can I avoid the 5% EA transfer market tax?"
                a="No — it is mandatory and unavoidable. The only way to stay profitable is to ensure your buy price is low enough that 95% of your sell price still exceeds it. Our sniping bot automates exactly this strategy."
              />
              <FaqItem
                q="What is a good profit margin target for FUT trading?"
                a="After the 5% tax, aim for at least 10–20% gross margin on your sell price. For example: buy at 85,000, sell at 110,000 → 5,500 tax, 19,500 net profit (a 23% gross margin on sell)."
              />
              <FaqItem
                q="Does Elite FUT SNIPER calculate tax automatically?"
                a="Yes. The bot uses the same 5% tax formula internally when displaying session profit estimates and when calculating the safe listing prices on auto-list. You don't need to run calculations manually."
              />
            </div>
          </section>

          {/* ── BOTTOM CTA ──────────────────────────────────────── */}
          <section className="space-y-8">
            {/* Full-width light banner */}
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(204,255,0,0.08)]">
              <img
                src="/tax-calc-banner-light.png"
                alt="Elite FUT SNIPER — Skip the tax math, auto-list every snipe with profit margin and 5% EA tax priced in"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text CTA block */}
            <div className="text-center space-y-6 py-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Every Snipe.{" "}
                <span className="text-primary">Every Coin Accounted For.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                You&apos;ve got the calculator. Now get the bot that runs it
                automatically — sniping, listing at your profit margin with the
                5% tax already priced in, sleeping between sessions, and logging
                every coin made. All from inside the EA FC 27 Web App.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/fc27-fut-snipe-bot"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-black font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_40px_rgba(204,255,0,0.25)]"
                >
                  Start 7-Day Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/fc27-fut-sniping-bot-autobuyer-features"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                >
                  <Cpu className="w-4 h-4" />
                  View All 12 Features
                </Link>
              </div>
              <p className="text-xs text-gray-600">
                No credit card required · Instant activation · 0 transfer
                market bans across 14,000+ sessions
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
