import { Metadata } from "next";
import Link from "next/link";
import EliteFeaturesSection from "@/components/EliteFeaturesSection";
import {
  Timer,
  PauseCircle,
  Shield,
  CheckCircle2,
  Zap,
  ArrowRight,
  Tag,
  TrendingUp,
  BarChart3,
  Sliders,
  MousePointerClick,
  Clock,
  RefreshCcw,
  List,
  Coins,
  Target,
  Filter,
  LineChart,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  ShieldCheck,
  Cpu,
  MessageSquare,
  ExternalLink,
  Flame,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "FC 27 Sniping Guide: Best FUT Filters & Trading Tips | Elite FUT Bot",
  },
  description:
    "Complete FC 27 FUT sniping guide: best transfer market filters, how to make FUT coins, daily Discord tips, coin investment strategies, and auto-snipe bot settings. Updated September 2026.",
  alternates: { canonical: "https://www.elitefutbot.com/tools/sniping-guide" },
  keywords: [
    "FC 27 sniping guide",
    "best FUT sniping filters FC 27",
    "FUT trading tips",
    "how to make FUT coins",
    "FUT coin investment strategy",
    "FC 27 transfer market guide",
    "FUT snipe bot",
    "best FUT filters FC 27",
    "FUT trading strategy 2026",
    "EA FC 27 autobuyer chrome extension",
    "FUT market investment",
    "make coins FC 27",
    "how to snipe in FC 27",
    "best time to snipe FUT",
    "SBC fodder filter FC 27",
    "59th minute sniping",
    "mass bidding FUT",
    "chemistry style investment FUT",
    "TOTW filter FC 27",
    "nudge refresh trick FUT",
    "bid status has changed FUT",
    "FUT web app sniping",
    "extinct card trading FUT",
    "daily discord tips and tricks",
    "discord fut trading tips",
    "make fut coins discord",
    "discord snipe filters",
    "fc 27 trading discord",
    "fut investment discord",
  ],
  openGraph: {
    title:
      "FC 27 Sniping Guide: Best FUT Filters & Trading Tips",
    description:
      "Complete FC 27 FUT sniping guide: best transfer market filters, how to make FUT coins, daily Discord tips, coin investment strategies, and auto-snipe bot settings. Updated September 2026.",
    url: "https://www.elitefutbot.com/tools/sniping-guide",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [
      { url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Sniping Guide: Best FUT Filters & Trading Tips",
    description:
      "Best FC 27 FUT sniping filters, trading tips, daily Discord coin strategies, and auto-snipe bot settings. Updated September 2026.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
  other: {
    "article:published_time": "2026-09-20T00:00:00.000Z",
    "article:modified_time": "2026-09-24T00:00:00.000Z",
    "article:author": "https://www.elitefutbot.com",
    "article:section": "FUT Trading Guides",
    "article:tag": "FC 27, FUT, sniping, trading, filters, coins, investment",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "FC 27 Sniping Guide: Best FUT Filters, Trading Tips & Coin Investment Strategy",
      description: "Complete FC 27 FUT sniping guide with best transfer market filters, daily Discord tips, coin investment strategies, and auto-snipe bot settings.",
      url: "https://www.elitefutbot.com/tools/sniping-guide",
      datePublished: "2026-09-20T00:00:00.000Z",
      dateModified: "2026-09-24T00:00:00.000Z",
      image: "https://www.elitefutbot.com/og-image.png",
      author: {
        "@type": "Organization",
        name: "Elite FUT SNIPER",
        url: "https://www.elitefutbot.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Elite FUT SNIPER",
        url: "https://www.elitefutbot.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.elitefutbot.com/og-image.png",
        },
      },
    },
    {
      "@type": "HowTo",
      name: "How to Snipe and Trade in EA FC 27 FUT Transfer Market",
      description:
        "Step-by-step guide to setting up automated transfer market sniping, filter configuration, and anti-ban protocols to make millions of FUT coins in FC 27.",
      step: [
        {
          "@type": "HowToStep",
          name: "Set Up Your Sniping Filters",
          text: "Choose a target card tier (e.g. 85-rated gold rares for SBC fodder). Set Max Buy at least 10-15% below the current FUTBIN BIN price. Apply Exact Rating filter to narrow the pool.",
        },
        {
          "@type": "HowToStep",
          name: "Use the Nudge Refresh Trick",
          text: "To see fresh transfer market listings instead of cached results, nudge your Max Buy price up by 100 coins, search, then nudge back down and search again. This forces EA's servers to return new data.",
        },
        {
          "@type": "HowToStep",
          name: "Configure Bot Speed & Anti-Ban Protocols",
          text: "Use Safe mode (3 RPM) or Caution mode (6 RPM). Enable Act like a Human and configure sleep cycles: 15 min on, 5 min rest. Never use fixed exact intervals — randomised delays are critical.",
        },
        {
          "@type": "HowToStep",
          name: "Enable Tax-Aware Auto-List",
          text: "Select Listing Mode: + Profit Margin. Enter your target margin (e.g. 500 coins). The bot auto-calculates Buy Price + Margin + 5% EA Tax and lists at that price immediately after purchase.",
        },
        {
          "@type": "HowToStep",
          name: "Monitor Session Stats & Reinvest",
          text: "Check the live console for per-card profit and EA tax deductions. Session profit after tax is displayed in real time. Reinvest profits into higher-tier cards as your coin stack grows.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best FC 27 sniping filter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best all-round filter for FC 27 is 84–85 rated gold rares with Exact Rating and a Max Buy price of 800–1,100 coins. This targets high-volume SBC fodder with near-zero risk. For higher profits, use 90+ rated promo cards set at 15% below the current FUTBIN BIN price.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make FUT coins with sniping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To make FUT coins with sniping, find cards listed below their market value on the FC 27 transfer market and buy them instantly, then re-list at market price. You profit the price difference minus EA's 5% transaction tax. A snipe bot like Elite FUT SNIPER automates this continuously — scanning up to 10 searches per minute, buying the moment a cheap card appears, and auto-listing at your target margin.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best time to snipe in FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best times to snipe in FC 27 are: 6 PM UK during content drops (packs are opened in mass, misplaced listings spike 300%), Monday morning when Weekend League rewards are delivered, Lightning Round events, and 9–10 AM UK when Asian market sellers list fresh overnight stock. EA content drop days always produce the highest sniping volume.",
          },
        },
        {
          "@type": "Question",
          name: "How do I avoid getting banned while sniping in FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To avoid bans while sniping in FC 27: use randomised search delays (1.2–2.5s, never fixed intervals), enable sleep cycles (15 min on / 5 min off), cap sessions at 300 searches per hour in Safe mode, and enable Act like a Human mode. Elite FUT SNIPER has completed 14,000+ sessions with zero transfer market bans by following these exact protocols.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I keep getting Bid Status Has Changed in FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 'Bid Status Has Changed' message in FC 27 means another player purchased the card before you completed the transaction. To fix this, press the Enter key on your keyboard instead of clicking 'OK' with your mouse when the Buy Now confirmation appears — keyboard inputs are significantly faster. Also, use the FC 27 Web App instead of the console app, as the web interface is 3–4× more responsive for sniping.",
          },
        },
        {
          "@type": "Question",
          name: "Is the FUT Web App better than console for sniping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The FC 27 Web App is significantly faster for sniping than the in-game console menus because it allows keyboard shortcuts (Enter to confirm), faster page navigation, and direct browser extension integration. Console players must navigate menus with a controller, adding 1–3 seconds of latency per trade. Most serious snipers and all auto-snipe bots use the Web App.",
          },
        },
        {
          "@type": "Question",
          name: "What is the nudge refresh trick in FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The nudge refresh trick in FC 27 involves slightly changing one filter parameter (e.g. nudging your Max Buy price up by 100–200 coins, then back down) each time you search, instead of hitting Search repeatedly with identical settings. This forces EA's servers to return fresh listing data rather than serving cached results, which is essential for catching newly-listed underpriced cards.",
          },
        },
        {
          "@type": "Question",
          name: "Does Elite FUT SNIPER auto-list after sniping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When Elite FUT SNIPER snipes a card, it immediately moves it to your Transfer List and lists it at your configured price — either Buy Price + Profit Margin (with 5% EA tax already included in the calculation) or the live FUTBIN market price. Your target profit is locked in automatically within seconds of the snipe.",
          },
        },
        {
          "@type": "Question",
          name: "What is coin investment in FUT trading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Coin investment in FUT trading means using your existing coins to buy cards that will increase in value, then selling at a profit when demand peaks. Common strategies include buying SBC fodder (84–87 rated gold rares) ahead of content event releases, stacking chemistry styles before a meta shift, buying promo players during low-supply periods, and holding TOTW in-forms before SBC upgrade drops.",
          },
        },
        {
          "@type": "Question",
          name: "What is extinct card trading in FUT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Extinct card trading in FUT refers to buying or sniping cards that have zero active listings on the transfer market — their demand exceeds supply, often because their price range cap is set too low for current demand. When you manage to snipe one at the maximum allowed price, you can typically sell it instantly for full price. Elite FUT SNIPER's auto-snipe mode catches these rare listings the moment they appear.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.elitefutbot.com" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.elitefutbot.com/tools/comparison-guide" },
        { "@type": "ListItem", position: 3, name: "FC 27 Sniping Guide", item: "https://www.elitefutbot.com/tools/sniping-guide" },
      ],
    },
  ],
};

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {text}
    </div>
  );
}

function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
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

const FILTER_PRESETS = [
  {
    title: "META ICON & PROMO FILTER",
    target: "Mbappé, Vinícius Jr., Bellingham — 92+ Rated",
    profitPerCard: "40,000 – 150,000 Coins",
    badge: "HIGH PROFIT",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    desc: "Target high-tier meta and promo cards during Lightning Packs and TOTY/TOTS events when sellers misprice expensive items. Massive profit margins — requires patience for the right snipe.",
    tip: "Best window: 6 PM UK during FP events. Set 30-min sessions with 10-min breaks.",
  },
  {
    title: "SBC FODDER FILTER (84–87 RATED)",
    target: "84, 85, 86, 87 Rated Gold Rares",
    profitPerCard: "1,500 – 5,000 Coins",
    badge: "HIGH VOLUME",
    badgeColor: "text-primary bg-primary/10 border-primary/30",
    desc: "The most consistent coin-making filter in any FUT cycle. SBC requirements keep fodder demand constant. Snipe at scale during pack-opening events when supply spikes.",
    tip: "Run 24/7 in Safe mode. A single 2-hour session can net 500K+ coins.",
  },
  {
    title: "TEAM OF THE WEEK (TOTW) FILTER",
    target: "Current TOTW In-Forms — 83+ Rated",
    profitPerCard: "3,000 – 10,000 Coins",
    badge: "CONSISTENT",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    desc: "TOTW in-forms are permanently required for SBC solutions. Price floors stay stable. Snipe cheap in-forms that dip during Weekend League then resell Sunday afternoon.",
    tip: "SBC upgrades drop Wednesday — stock up Tuesday night for max profit.",
  },
  {
    title: "GOLD RARE 83-RATED (DISCARD FLIP)",
    target: "Any 83 Rated Gold Rare",
    profitPerCard: "500 – 1,500 Coins",
    badge: "ZERO RISK",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/30",
    desc: "Buy at near-discard prices and sell at SBC value. Almost impossible to lose coins. Perfect for building coin stacks from scratch or running alongside higher-value filters.",
    tip: "Mass-run this filter overnight. Low profit per card, but 200+ cards = 200K+ coins.",
  },
  {
    title: "CHEMISTRY STYLE INVESTMENT",
    target: "Shadow, Engine, Anchor Chem Styles",
    profitPerCard: "2,000 – 8,000 Coins",
    badge: "INVESTMENT",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    desc: "Chemistry styles spike 40-80% during content events (TOTY, TOTS). Buy shadow and engine styles at base price ahead of a meta shift, hold 48-72 hours, then sell at peak.",
    tip: "Monitor FUT patch notes. New meta positions = chemistry style demand spike.",
  },
  {
    title: "POSITION MODIFIER FLIP",
    target: "LW→ST, CDM→CM, RB→CB Mods",
    profitPerCard: "1,500 – 6,000 Coins",
    badge: "FLIP TRADE",
    badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/30",
    desc: "Position modifiers spike whenever a new meta formation is released. Buy underpriced mods, hold for 24 hours after the patch, then sell to players desperate to fit their squad.",
    tip: "Patch day is payday. Stack mods 12 hours before and sell 6 hours after.",
  },
];

const BOT_FEATURES = [
  { icon: Zap, title: "Auto-Snipe (Buy-Now)", desc: "Scans up to 10 searches/min across your configured filters. Fires a Buy-Now request the millisecond it finds a card priced below your Max Buy threshold." },
  { icon: List, title: "Tax-Aware Auto-List", desc: "After each snipe, the bot immediately lists the card at Buy Price + Profit Margin + 5% EA Tax. Your margin is locked in before you even see the notification." },
  { icon: BarChart3, title: "FUTBIN Price Sync", desc: "Switch to FUTBIN listing mode and the bot auto-fetches the live Console or PC market price and sets it as your listing price. Perfect for high-tier meta flips." },
  { icon: Sliders, title: "Exact Rating Filter", desc: "Filter by exact card rating (e.g. Rating 85 only), min/max Buy-Now price range, chemistry style, nationality, or club. Precision configuration for your snipe tier." },
  { icon: ShieldCheck, title: "Safe / Caution / Risky Speed", desc: "Three pre-tuned speed profiles: Safe (3 RPM), Caution (6 RPM), Risky (9 RPM). Each includes automatic sleep cycles and adaptive rate-limit protection." },
  { icon: MousePointerClick, title: "Act Like Human + Human++", desc: "Randomised browse pauses, Bezier mouse paths, and natural scroll deceleration make the bot behaviourally indistinguishable from a real human trader." },
  { icon: Clock, title: "Sleep Cycles & Session Limits", desc: "Configure sleep intervals (e.g. 15 min on, 5 min off) and max purchase limits per session. Built-in protection against EA soft-ban rate thresholds." },
  { icon: RefreshCcw, title: "Live Console Profit Tracker", desc: "Real-time console logs every snipe, auto-list action, EA tax deduction, and net profit per card. Session totals update live so you always know your after-tax earnings." },
];

const TRADING_TIPS = [
  { n: "01", icon: Target, keyword: "Filter Setting", title: "Always Set Max Buy 10–15% Below BIN", body: "Your maximum buy price should sit at least 10–15% below the current FUTBIN lowest BIN. This leaves headroom for the 5% EA tax and your profit margin. Never set Max Buy = Market Price." },
  { n: "02", icon: TrendingUp, keyword: "Timing Strategy", title: "Target Peak Supply Windows", body: "The best sniping windows are: 6 PM UK content drops, Monday evening Weekend League rewards, and Lightning Rounds. More packs opened = more underpriced cards listed = more snipes." },
  { n: "03", icon: LineChart, keyword: "Investment Strategy", title: "Diversify Across 3 Filter Tiers", body: "Layer your filters: (1) a high-volume low-profit fodder filter running 24/7, (2) a mid-tier flip filter for 3-10K profit cards, and (3) an opportunistic meta filter for 50K+ snipes." },
  { n: "04", icon: Coins, keyword: "Coin Investment", title: "Reinvest Into Riskier Tiers As Stack Grows", body: "Start with 83-rated gold rares to build your coin stack safely. Once you have 500K+ coins, graduate to TOTW in-forms and promo cards. Scale your investment tier with your coin stack." },
  { n: "05", icon: Filter, keyword: "Filter Setup", title: "Use FUTBIN to Validate Your Max Buy Price", body: "Before setting any filter live, check FUTBIN for the lowest 5 listed prices. Set your Max Buy to at least 10% below the 5th-cheapest listing. This gives you a realistic snipe probability." },
  { n: "06", icon: Lightbulb, keyword: "FUT Trading Tip", title: "Hold SBC Fodder Ahead of Event Releases", body: "Every major content event requires new SBCs. 84–86 rated fodder prices spike 20–40% in the 6 hours before event announcement. Stockpile 200–400 cards with your bot and sell at peak." },
];

const SAFETY_RULES = [
  { icon: Timer, title: "Randomized Search Delays", desc: "Never search at fixed exact intervals. The bot uses randomised delays between 1.2s–2.5s to mirror genuine human typing speed. Fixed intervals are the #1 trigger for EA detection systems." },
  { icon: PauseCircle, title: "Automated Sleep Cycles", desc: "Configure 15-min run / 5-min sleep cycles. The bot auto-pauses and resumes without manual action. This keeps your session well within EA acceptable usage thresholds." },
  { icon: Shield, title: "Never Share Web App Credentials", desc: "Always run Elite FUT SNIPER locally in your own Chrome browser. Your EA login credentials never leave your machine. We do not store, transmit, or access your account data." },
  { icon: CheckCircle2, title: "Cap Sessions at 300 Searches/Hour", desc: "Even in Risky mode, the bot stays within EA rate limits. For maximum long-term safety, use Safe mode (180 searches/hour) for daily running sessions." },
];

export default function SnipingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden font-sans">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[50%] right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* HERO */}
          <div className="text-center space-y-5 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Complete FC 27 FUT Trading Guide
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-gray-400">
                <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Updated Sep 2026
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight uppercase leading-tight">
              FC 27 <span className="text-primary italic">SNIPING GUIDE</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              The complete FC 27 sniping guide — best FUT transfer market filters, how to make FUT coins fast, daily Discord trading tips, coin investment strategies, and auto-snipe bot settings for EA Sports FC 27.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-2 text-sm">
              {[
                { val: "6 Filter Presets", label: "ready to use" },
                { val: "6 Trading Tips", label: "tested strategies" },
                { val: "10 FAQs", label: "incl. PAA answers" },
                { val: "5% EA Tax", label: "auto-calculated by bot" },
                { val: "14,000+", label: "sessions completed" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-black text-primary font-mono">{s.val}</span>{" "}
                  <span className="text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
            {/* TABLE OF CONTENTS */}
            <nav aria-label="Table of Contents" className="pt-4">
              <div className="inline-flex flex-wrap justify-center gap-2">
                {[
                  { href: "#filter-presets", label: "Filter Presets" },
                  { href: "#bot-features", label: "Bot Features" },
                  { href: "#trading-tips", label: "Trading Tips" },
                  { href: "#advanced-techniques", label: "Advanced Techniques" },
                  { href: "#safety-protocols", label: "Anti-Ban Safety" },
                  { href: "#timing-guide", label: "Best Times" },
                  { href: "#discord-community", label: "Discord Tips" },
                  { href: "#faq", label: "FAQ" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <span className="text-primary/40">↓</span> {label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* QUICK-START CTA BOX */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-black/60 to-black/60 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(204,255,0,0.12)]">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Auto-Snipe Bot — Chrome Extension</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                Skip the Manual Grind.{" "}
                <span className="text-primary">Let the Bot Snipe 24/7.</span>
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
                Elite FUT SNIPER runs every filter in this guide automatically — sniping, auto-listing with your profit margin and 5% EA tax already priced in, sleeping between sessions, and tracking every coin made. No manual clicking required.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-400">
                {[
                  "Buys cards below your Max Buy price instantly",
                  "Auto-lists at Buy Price + Margin + 5% EA Tax",
                  "FUTBIN price sync for live market listing",
                  "Human++ anti-ban mode built in",
                ].map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 items-center shrink-0">
              <Link href="/fc27-fut-snipe-bot" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-black font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                Start 7-Day Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/fc27-fut-sniping-bot-autobuyer-features" className="text-xs text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2">
                View all 12 bot features →
              </Link>
            </div>
          </div>

          {/* DAILY DISCORD TIPS & TRICKS / COMMUNITY PROOF */}
          <section aria-labelledby="discord-community" className="space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 text-xs font-bold uppercase tracking-widest text-[#8b96f7]">
                <MessageSquare className="w-3.5 h-3.5 text-[#5865F2]" />
                <span>Daily Discord Tips & Tricks</span>
              </div>
              <h2 id="discord-community" className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
                Make FUT Coins Daily With{" "}
                <span className="text-[#5865F2] bg-gradient-to-r from-[#5865F2] via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Discord Snipe Filters & Tips
                </span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Stop guessing what to trade. Every day, our verified trading analysts post active transfer market filters, coin investment strategies, and live sniping tips directly in <span className="text-white font-semibold font-mono text-xs px-2 py-0.5 rounded bg-white/10">#daily-filters</span>. Plug them into Elite FUT Bot to make FUT coins on autopilot.
              </p>
            </div>

            {/* Quick Keyword & Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Daily Snipe Filters", desc: "Updated buy & sell limits posted daily", icon: Filter, highlight: "Fresh Alpha" },
                { label: "Make FUT Coins", desc: "1K to 100K+ profit per snipe verified", icon: Coins, highlight: "Live Proof" },
                { label: "FUT Trading Tips", desc: "Fodder timing, leak alerts & promo prep", icon: Lightbulb, highlight: "Pro Tactics" },
                { label: "Investment Guide", desc: "Safe coin scaling from 50K to 5M+", icon: TrendingUp, highlight: "Low Risk" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#5865F2]/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <item.icon className="w-4 h-4 text-[#5865F2]" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary font-mono">{item.highlight}</span>
                  </div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide">{item.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Top Showcase: Official Daily Filters Drop & User Testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Daily Filters Channel Showcase (7 cols) */}
              <div className="lg:col-span-7 rounded-3xl bg-[#0b0d14] border border-[#5865F2]/30 p-5 sm:p-7 flex flex-col justify-between shadow-[0_0_40px_rgba(88,101,242,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#5865F2]/10 blur-[90px] rounded-full pointer-events-none" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#5865F2] flex items-center justify-center text-white">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-white font-mono flex items-center gap-1.5">
                          # daily-filters
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </span>
                        <span className="text-[10px] text-gray-400 block">Elite FUT Bot Official Discord</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-bold">
                      UPDATED DAILY
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">
                      Live Filter Drops In #daily-filters
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Our analysts publish exact card names, Buy-Below limits, target sell prices, and estimated profit per card for immediate copy-pasting into your bot settings.
                    </p>
                  </div>

                  {/* The Screenshot */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl">
                    <img
                      src="/discord-daily-filters.png"
                      alt="Elite FUT Bot Discord #daily-filters channel: Ibrahima Konaté snipe below 4200 sell 5500 profit 1300, Nicolò Barella snipe below 6000 sell 7000 profit 1000"
                      className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Highlights from screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] font-bold text-primary uppercase font-mono block">Filter 1 Target</span>
                      <p className="font-bold text-white mt-0.5">Konaté 84 OVR</p>
                      <p className="text-gray-400 text-[11px]">Buy &lt; 4,200 • Sell 5,500 (+1,300/card)</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] font-bold text-[#8b96f7] uppercase font-mono block">Filter 2 Target</span>
                      <p className="font-bold text-white mt-0.5">Barella 87 OVR</p>
                      <p className="text-gray-400 text-[11px]">Buy &lt; 6,000 • Sell 7,000 (+1,000/card)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Testimonial + Discord Community Card (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                {/* Phantom Chat Screenshot Card */}
                <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/[0.07] space-y-4 hover:border-primary/30 transition-all flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                        VERIFIED TRADER FEEDBACK
                      </span>
                      <span className="text-[11px] text-gray-500 font-mono">Discord Chat</span>
                    </div>

                    <h3 className="text-base font-black text-white uppercase tracking-tight">
                      &quot;Bought for 300K, Sold for 400K&quot;
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Discord member <strong className="text-white">Phantom GENO</strong> sharing rapid flip results using our recommended high-tier card investment filters:
                    </p>

                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-xl">
                      <img
                        src="/discord-proof-phantom.png"
                        alt="Discord member Phantom GENO: no and this is the best one I use because I made the most quick coins. I bought these cards for 300k and sold them for 400k"
                        className="w-full hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs mt-2">
                    <p className="text-primary font-bold">100K Profit Per Batch</p>
                    <p className="text-gray-300 text-[11px] mt-0.5">
                      Traders scale from low-risk 84-rated fodder flips up to 300K+ special card filters once their coin bankroll grows.
                    </p>
                  </div>
                </div>

                {/* Quick Join CTA Card */}
                <div className="p-5 rounded-3xl bg-gradient-to-br from-[#5865F2]/20 via-[#5865F2]/10 to-transparent border border-[#5865F2]/40 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8b96f7] uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>5,000+ Discord Members</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Join free today. Get daily filters, market leak warnings, and direct trading strategy advice from our elite staff.
                  </p>
                  <a
                    href="https://discord.gg/Rkb9nF6WG6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(88,101,242,0.4)]"
                  >
                    <DiscordIcon className="w-4 h-4" />
                    <span>Join Free Discord Trading Desk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Proof Columns (Konaté Snipe, Barella Sales, Yamal 80K Profit) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Filter In Discord → <span className="text-primary">Executed by Bot</span> → Coin Profit
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Proof from real member setups: how daily Discord tips translate directly into transfer market snipes and verified coin balances.
                  </p>
                </div>
                <span className="text-[11px] text-gray-500 font-mono">Live Logs & Proof</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Proof 1: Konaté Snipe Confirmed */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-primary/40 transition-all space-y-3 flex flex-col justify-between group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 uppercase">
                        SNIPE CONFIRMED
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">Bot Search Log</span>
                    </div>
                    <p className="text-xs font-bold text-white">Konaté Sniped at 4,200 Coins</p>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
                      <img
                        src="/discord-proof-konate.png"
                        alt="Elite FUT Bot console confirming snipe: Konaté bought for 4200. Purchase Confirmed!"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                    Executing the exact <strong className="text-white">Konaté 4,200</strong> threshold posted in <span className="text-primary font-mono text-[10px]">#daily-filters</span>. Sniped in under 20ms and sent to transfer list.
                  </p>
                </div>

                {/* Proof 2: Barella Snipe + Sales Feed */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/40 transition-all space-y-3 flex flex-col justify-between group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 uppercase">
                        AUTO-LIST & SALES
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">Latest Sales Feed</span>
                    </div>
                    <p className="text-xs font-bold text-white">Barella Bought 6,000 → Sold 6.8K</p>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
                      <img
                        src="/discord-proof-barella.png"
                        alt="Elite FUT Bot console showing Barella bought for 6000 and sold instantly at 6.7K-6.8K"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                    Barella bought at 6,000 threshold and auto-listed for 6,800. Stream of rapid sales confirmed, netting ~460 coins profit per card after 5% EA tax.
                  </p>
                </div>

                {/* Proof 3: Yamal 80K Single Snipe Profit */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/40 transition-all space-y-3 flex flex-col justify-between group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 uppercase">
                        80K PROFIT • 1M+ BALANCE
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">Meta Snipe</span>
                    </div>
                    <p className="text-xs font-bold text-white">97 Lamine Yamal Mega-Flip</p>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center p-1">
                      <img
                        src="/discord-proof-yamal.png"
                        alt="Discord member proof: 97 Lamine Yamal bought for 337K, sold for 400K+, made 80k profit, account balance 1,005,378 coins"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                    Member sniped 97 Yamal for 337,000 and flipped it for 400,000+, generating <strong className="text-white">80,000 coins profit</strong> and crossing <strong className="text-primary font-mono">1,005,378 coins</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Discord Banner with Action Links */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#5865F2]/20 via-[#5865F2]/10 to-primary/10 border border-[#5865F2]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(88,101,242,0.15)]">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-black text-[#8b96f7] uppercase tracking-widest">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Daily Discord Tips, Tricks & FUT Coin Investments</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Want Today&apos;s Active Sniping Filters?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                  Join our Discord community to get daily filter updates, FUT market predictions, SBC investment calls, and live assistance configuring your auto-snipe bot.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center shrink-0 w-full sm:w-auto">
                <a
                  href="https://discord.gg/Rkb9nF6WG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(88,101,242,0.4)]"
                >
                  <DiscordIcon className="w-4 h-4" />
                  <span>Join Discord Community</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/fc27-fut-snipe-bot"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
                >
                  Download Snipe Bot
                </Link>
              </div>
            </div>
          </section>

          {/* FILTER PRESETS */}
          <section aria-labelledby="filter-presets">
            <div className="text-center mb-12">
              <SectionBadge text="FUT Transfer Market Filters" />
              <h2 id="filter-presets" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Best FC 27 <span className="text-primary">Sniping Filters</span>
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Every filter below has been tested across multiple FC 27 market cycles. Configure any of these directly in Elite FUT SNIPER and let the bot run them automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FILTER_PRESETS.map((filter) => (
                <div key={filter.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 space-y-4 group">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-black text-white uppercase tracking-wide leading-tight">{filter.title}</p>
                    <span className={`shrink-0 px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${filter.badgeColor}`}>{filter.badge}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{filter.desc}</p>
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-black/40 border border-white/[0.05] text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase mb-0.5">Target Cards</span>
                      <span className="font-bold text-white text-[11px] line-clamp-1">{filter.target}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase mb-0.5">Est. Profit / Card</span>
                      <span className="font-bold text-primary text-[11px]">{filter.profitPerCard}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/[0.04] border border-primary/20">
                    <Lightbulb className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-gray-400 leading-relaxed">{filter.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BOT IN ACTION — SCREENSHOTS */}
          <section aria-labelledby="bot-in-action" className="space-y-12">
            <div className="text-center">
              <SectionBadge text="Elite FUT SNIPER — Live Demo" />
              <h2 id="bot-in-action" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                See the Bot <span className="text-primary">Running These Filters</span>
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Elite FUT SNIPER applies every filter setting in this guide automatically. Here&apos;s a real session — Dybala sniped twice in under 15 minutes, auto-listed, taxed, and profit logged.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <img src="/snipe-guide-bot-simple.png" alt="Elite FUT SNIPER simple mode — rating 85 exact filter, max buy 10000, safe speed 3RPM, auto-list profit margin with 5% EA tax, act like human enabled" className="w-full" loading="lazy" />
                </div>
                <div className="px-1 space-y-1.5">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    Simple Mode — Filter Setup
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">Rating filter: 85 exact. Max Buy: 10,000 coins. Speed: Safe (3 RPM). Listing: + Profit Margin 500 coins + 5% EA Tax. Human mode: enabled.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-[#111]">
                  <img src="/snipe-guide-console.png" alt="Elite FUT SNIPER live console log: Dybala bought 9500, auto-listed 10750, EA tax 5% minus 537, profit plus 713, session total plus 1251 after tax" className="w-full" loading="lazy" />
                </div>
                <div className="px-1 space-y-1.5">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    Live Console — Profit Logged in Real Time
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Every snipe logged: buy price, auto-list price, 5% EA tax, coins received, and profit per card. Session total after tax:{" "}
                    <span className="text-primary font-mono">+1,251 coins</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <img src="/snipe-guide-bot-advanced.png" alt="Elite FUT SNIPER advanced mode with action delay settings, sleep settings, purchase limits, max buys per search configuration" className="w-full h-auto" loading="lazy" />
                </div>
                <div className="px-1 space-y-1.5">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    Advanced Mode — Full Precision Control
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">Unlock Action Delay, Sleep Settings, Purchase Limits, and Max Buys Per Search. Run extended sessions with full anti-ban configuration.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: "9,500", label: "Dybala snipe #1 (coins)", color: "text-primary" },
                { val: "−537", label: "EA 5% tax on first sale", color: "text-red-400" },
                { val: "+713", label: "Net profit — card #1", color: "text-primary" },
                { val: "+1,251", label: "Session total after tax", color: "text-primary" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center">
                  <p className={`text-xl font-black font-mono ${s.color}`}>{s.val}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ELITE FUT SNIPER FEATURES — reusable component */}
          <EliteFeaturesSection
            badge="Elite FUT SNIPER Features"
            headingPre="Elite FUT SNIPER"
            headingHighlight="Features"
            description="One Chrome extension that replaces hours of manual market grinding. Every function you need — automated, tax-aware, and anti-ban by design."
            ctaLabel="Start 7-Day Free Trial"
            ctaHref="/fc27-fut-snipe-bot"
            secondaryLabel="View All 12 Features"
            secondaryHref="/fc27-fut-sniping-bot-autobuyer-features"
            imageSrc="/snipe-guide-bot-advanced.png"
            imageAlt="Elite FUT SNIPER advanced mode — full configuration with General settings, Action Delay, Sleep Settings, Limits, and auto-list with 5% EA tax"
            imagePill="All Filters / Settings"
            sectionId="bot-features"
          />

          {/* TRADING TIPS */}
          <section aria-labelledby="trading-tips">
            <div className="text-center mb-12">
              <SectionBadge text="FUT Trading Tips & Coin Strategy" />
              <h2 id="trading-tips" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                6 FUT Coin Investment <span className="text-primary">Strategies That Work</span>
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Every serious FUT trader follows a layered coin investment strategy. Here are the six principles that separate consistent profit-makers from players who grind and never grow their coin stack.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TRADING_TIPS.map((tip) => (
                <div key={tip.n} className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-primary/20 transition-colors">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-black text-primary/15 leading-none font-mono block">{tip.n}</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/10 px-2 py-0.5 rounded-full">{tip.keyword}</span>
                    <p className="font-bold text-white text-sm">{tip.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ADVANCED TECHNIQUES */}
          <section aria-labelledby="advanced-techniques">
            <div className="text-center mb-12">
              <SectionBadge text="Advanced Sniping Techniques" />
              <h2 id="advanced-techniques" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Pro Tricks That <span className="text-primary">Most Guides Skip</span>
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                These techniques are not taught in basic guides. Master them to outpace every manual sniper and stay ahead of bans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: RefreshCcw,
                  badge: "REFRESH TRICK",
                  badgeColor: "text-primary bg-primary/10 border-primary/20",
                  title: "The Nudge Refresh Trick",
                  body: "Hitting 'Search' with the same filters returns cached results — not new listings. Instead, nudge your Max Buy price up by 100–200 coins, hit Search, then nudge it back down and search again. This forces EA's servers to return fresh data, giving you first-mover advantage on newly listed underpriced cards.",
                },
                {
                  icon: Zap,
                  badge: "SPEED TRICK",
                  badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
                  title: "Fix 'Bid Status Has Changed'",
                  body: "Getting 'Bid Status Has Changed' means a rival clicked Buy Now faster. The fix: press the Enter key instead of clicking your mouse when the confirmation dialog appears. Keyboard input is 200–400ms faster than mouse clicks — often the difference between winning and losing the snipe. Elite FUT SNIPER handles this automatically.",
                },
                {
                  icon: MousePointerClick,
                  badge: "PLATFORM",
                  badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
                  title: "FUT Web App vs Console for Sniping",
                  body: "The FC 27 Web App is 3–4× faster for sniping than in-game console menus. It supports keyboard shortcuts, faster page loads, and browser extension integration. Console snipers navigate menus with a controller, adding 1–3 seconds of latency per transaction. All serious snipers — and every auto-snipe bot — use the Web App.",
                },
                {
                  icon: Target,
                  badge: "RARE PLAY",
                  badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
                  title: "Extinct Card Trading",
                  body: "Extinct cards have zero active listings on the transfer market — demand exceeds supply, often because EA's price range cap is set too low. When you snipe one the moment it appears, you can instantly sell it at the maximum allowed price. Elite FUT SNIPER's auto-snipe catches these the millisecond they're listed, before any manual trader can react.",
                },
                {
                  icon: Coins,
                  badge: "MASS BIDDING",
                  badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
                  title: "Mass Bidding for Consistent Coins",
                  body: "Mass bidding means placing bids slightly below market value on a large volume of common gold players. Unlike sniping (instant Buy Now), bidding targets cards where sellers miss their auction expiry. Win 30–50 bids overnight and flip them at Buy Now price for consistent 200–500 coin margins per card — low risk, high volume.",
                },
                {
                  icon: LineChart,
                  badge: "INVESTMENT",
                  badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
                  title: "59th Minute Sniping (High Volume Window)",
                  body: "The '59th minute' refers to cards listed with a 1-hour auction that are about to expire. Sellers often underprice to guarantee a quick sale. Filtering specifically for cards in the last 10 minutes of their auction window is a proven high-volume sniping strategy, and Elite FUT SNIPER can run this filter automatically 24/7.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-primary/20 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${item.badgeColor}`}>{item.badge}</span>
                      <p className="font-bold text-white text-sm">{item.title}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Internal link to tax calculator */}
            <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Calculate Your After-Tax Profit</p>
                <p className="text-xs text-gray-400 mt-1">EA deducts 5% from every sale. Use our free tax calculator to find your exact profit margin before you set filters.</p>
              </div>
              <Link href="/tools/tax-calculator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all whitespace-nowrap flex-shrink-0">
                FC 27 Tax Calculator <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* ANTI-BAN SAFETY */}
          <section aria-labelledby="safety-protocols">
            <div className="text-center mb-12">
              <SectionBadge text="Anti-Detection Safety Protocols" />
              <h2 id="safety-protocols" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Zero Bans. <span className="text-primary">Non-Negotiable Rules.</span>
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                14,000+ Elite FUT SNIPER sessions completed with zero transfer market bans. Here&apos;s exactly why — and what you must never skip.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SAFETY_RULES.map((rule) => {
                const Icon = rule.icon;
                return (
                  <div key={rule.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-primary/20 transition-colors space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-white">{rule.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-5 rounded-2xl bg-red-500/5 border border-red-500/20 flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-red-400 mb-1">Never Do These Things</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Running at fixed exact intervals · Using Risky mode for 3+ hours straight · Sharing your Web App credentials with any external service · Running multiple bots on the same IP · Using a VPN that changes IP mid-session. Any of these can trigger EA flagging.
                </p>
              </div>
            </div>
          </section>

          {/* PEAK TIMING TABLE */}
          <section aria-labelledby="timing-guide">
            <div className="text-center mb-10">
              <SectionBadge text="FUT Market Timing Guide" />
              <h2 id="timing-guide" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Best Times to <span className="text-primary">Snipe &amp; Trade</span>
              </h2>
            </div>
            <div className="overflow-x-auto rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/[0.07] text-xs font-bold uppercase tracking-wider text-gray-400">
                    <th className="py-4 px-5">Time Window</th>
                    <th className="py-4 px-5">Why It Works</th>
                    <th className="py-4 px-5">Best Filter</th>
                    <th className="py-4 px-5">Volume</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                  {[
                    { time: "6 PM UK — Content Drop", why: "Millions of packs opened. Misplaced listings spike 300%.", filter: "SBC Fodder 84–87 + Meta Promo", volume: "🔥🔥🔥🔥🔥 Peak" },
                    { time: "Sunday-Monday — WL Rewards", why: "Weekend League rewards delivered. Players mass-sell duplicates.", filter: "High-Rated Gold Rares / TOTW", volume: "🔥🔥🔥🔥 Very High" },
                    { time: "Lightning Round Events", why: "Short pack sales. Sellers rush-list without checking price.", filter: "Icon & Promo Snipes", volume: "🔥🔥🔥🔥🔥 Peak" },
                    { time: "9–10 AM UK Weekdays", why: "Asian market sellers list overnight stock at low prices.", filter: "83-rated Discard Flip", volume: "🔥🔥🔥 High" },
                    { time: "Wednesday — TOTW Release", why: "New TOTW drops. Old TOTW prices dip. SBC requirements spike.", filter: "TOTW In-Form Flips", volume: "🔥🔥🔥🔥 Very High" },
                    { time: "Midnight–6 AM UK", why: "Low competition. Bots snipe with less human competition.", filter: "All filters — low competition", volume: "🔥🔥 Moderate" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-5 font-bold text-white">{row.time}</td>
                      <td className="py-3.5 px-5 text-gray-400">{row.why}</td>
                      <td className="py-3.5 px-5 text-primary font-medium">{row.filter}</td>
                      <td className="py-3.5 px-5 text-gray-300">{row.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq">
            <div className="text-center mb-10">
              <SectionBadge text="10 Most Asked Questions" />
              <h2 id="faq" className="text-3xl sm:text-4xl font-black uppercase tracking-tight">FC 27 Sniping Guide FAQ</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">Covering every common sniping, trading, and FUT coin investment question — including the ones Google highlights as &quot;People Also Ask.&quot;</p>
            </div>
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-xl divide-y divide-white/[0.07]">
              <FaqItem q="What is the best FC 27 sniping filter?" a="The best all-round filter for FC 27 is 84–85 rated gold rares with Exact Rating and a Max Buy of 800–1,100 coins. This targets SBC fodder at high volume with near-zero risk. For higher profits use 90+ promo cards set at 15% below the current FUTBIN BIN price." />
              <FaqItem q="How do I make FUT coins with sniping?" a="To make FUT coins with sniping: find cards listed below their market value on the FC 27 transfer market, buy them instantly, then re-list at market price. You profit the difference minus EA's 5% transaction tax. A snipe bot like Elite FUT SNIPER automates this continuously — scanning up to 10 searches per minute, buying the moment a cheap card appears, and auto-listing at your target margin." />
              <FaqItem q="What is the best time to snipe in FC 27?" a="The best sniping windows in FC 27 are: 6 PM UK during content drops (misplaced listings spike 300%), Monday morning after Weekend League rewards are delivered, Lightning Round events, and 9–10 AM UK when Asian market sellers list fresh overnight stock. EA content drop days always produce the highest volume of underpriced listings." />
              <FaqItem q="Why do I keep getting 'Bid Status Has Changed' in FC 27?" a="'Bid Status Has Changed' means another player bought the card before you completed the transaction. The fix: press the Enter key on your keyboard instead of clicking 'OK' with your mouse — keyboard input is 200–400ms faster. Also switch to the FC 27 Web App instead of the console game, as it is 3–4× more responsive. Elite FUT SNIPER handles confirmation inputs automatically in milliseconds." />
              <FaqItem q="Is the FUT Web App better than console for sniping?" a="Yes, significantly. The FC 27 Web App supports keyboard shortcuts (press Enter to confirm Buy Now), faster page navigation, and direct browser extension integration. Console players must navigate menus with a controller, adding 1–3 seconds of latency per trade. Every serious sniper — and every auto-snipe bot — runs on the Web App." />
              <FaqItem q="What is the nudge refresh trick in FC 27?" a="The nudge refresh trick means slightly changing one filter value each time you search (e.g. nudge Max Buy up 100–200 coins, search, then nudge back down and search again) instead of repeating the same search. This forces EA's servers to return fresh listing data instead of cached results, which is essential for catching newly-listed underpriced cards before anyone else." />
              <FaqItem q="How do I avoid getting banned while sniping?" a="Use randomised search delays (1.2–2.5s, never fixed intervals), enable sleep cycles (15 min on / 5 min off), cap sessions at 300 searches/hour in Safe mode, and use Act like a Human mode. Elite FUT SNIPER has completed 14,000+ sessions with zero transfer market bans by following these exact protocols." />
              <FaqItem q="Does Elite FUT SNIPER auto-list after sniping?" a="Yes. When a card is sniped, the bot immediately moves it to your Transfer List and lists it at your configured price — either Buy Price + Profit Margin (with 5% EA tax already included) or the live FUTBIN market price. Your target profit is locked in automatically within seconds of the snipe." />
              <FaqItem q="What is coin investment in FUT trading?" a="Coin investment means using your coin stack to buy cards that will increase in value, then selling at peak price. Common strategies include: buying SBC fodder (84–87 rated gold rares) ahead of content event releases, stacking chemistry styles before a meta shift, buying promo players during low-supply periods, and holding TOTW in-forms before SBC upgrade drops." />
              <FaqItem q="What is extinct card trading in FUT?" a="Extinct cards have zero active listings on the transfer market — their demand exceeds supply, often because the EA price range cap is set too low. When you snipe one the moment it appears, you can instantly sell it at the maximum allowed price. Elite FUT SNIPER's auto-snipe mode catches these rare listings the millisecond they're available, before any manual trader can react." />
            </div>
          </section>


          {/* BOTTOM CTA */}
          <section className="text-center space-y-6 py-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Every Filter. Every Snipe.{" "}
              <span className="text-primary">Fully Automated.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Elite FUT SNIPER runs all six filters in this guide simultaneously — sniping, tax-aware auto-listing, FUTBIN price sync, and human-mode anti-ban — all from inside the EA FC 27 Web App. Start your 7-day free trial — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/fc27-fut-snipe-bot" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-black font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_40px_rgba(204,255,0,0.25)]">
                Start 7-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/tools/tax-calculator" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
                <Cpu className="w-4 h-4" />
                FC 27 Tax Calculator
              </Link>
            </div>
            <p className="text-xs text-gray-600">
              No credit card required · Instant activation · 0 transfer market bans across 14,000+ sessions
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
