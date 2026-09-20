"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Tag,
  Cpu,
  Layers,
  HelpCircle,
  Clock,
  Coins,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  MousePointerClick,
  Check,
  X,
  Scale,
  DollarSign,
  Users,
  Server,
  Smartphone,
  Flame,
  TrendingUp,
  Sliders,
  Layout,
  Globe,
  MessageSquare,
  BarChart3,
  Lock,
  Shield,
} from "lucide-react";
import type { CompetitorData } from "@/data/competitors/types";

interface ElevenModuleSpec {
  num: string;
  name: string;
  tagline: string;
  icon: any;
  eliteSpec: string;
  competitorSpec: (compType: string, compName: string) => string;
}

const ELEVEN_MODULES: ElevenModuleSpec[] = [
  {
    num: "01",
    name: "Auto Snipe (Sub-20ms Engine)",
    tagline: "High-Frequency Market Scanner",
    icon: Zap,
    eliteSpec: "Sub-20ms direct in-memory WebSocket response; captures 59th-minute deals before cloud relays.",
    competitorSpec: (compType, compName) => {
      if (compType === "cloud" || compType === "web-app")
        return `${compName} relies on remote proxy queues adding 150ms–350ms latency, losing high-demand meta snipes.`;
      if (compType === "desktop-app")
        return `${compName} runs through heavy desktop wrapper virtualization with 70ms–140ms macro lag.`;
      if (compType === "userscript")
        return `${compName} injects scripts into the main render thread with 50ms–100ms script lag and frequent crashes.`;
      if (compType === "informational" || compType === "discord-alerts")
        return `${compName} does not support automated sniping; relies on manual clicking with 400ms–800ms human reaction time.`;
      return `${compName} uses standard DOM polling (60ms–120ms) without native in-memory WebSocket acceleration.`;
    },
  },
  {
    num: "02",
    name: "Auto List & Auto Sell",
    tagline: "Automated Profit Realization",
    icon: TrendingUp,
    eliteSpec: "Automatically computes 5% EA transfer tax and relists sniped cards at target profit margins 24/7.",
    competitorSpec: (compType, compName) => {
      if (compType === "informational" || compType === "discord-alerts")
        return `${compName} provides no automated listing; cards must be listed manually one-by-one.`;
      return `${compName} provides basic relisting without automated 5% EA tax net profit margin calculation.`;
    },
  },
  {
    num: "03",
    name: "Smart Filters & Multi-Search",
    tagline: "Multi-Dimensional Filter Matrix",
    icon: Sliders,
    eliteSpec: "Granular min/max buy-now, bid ceilings, exact rating bounds (83+, 84+, 88+), chemistry styles, and concurrent multi-card queries.",
    competitorSpec: (compType, compName) => {
      if (compType === "informational")
        return `${compName} provides database filters but cannot execute searches inside the Web App.`;
      return `${compName} supports single-player search filters only, missing concurrent multi-target query execution.`;
    },
  },
  {
    num: "04",
    name: "Futbin Live Price Reference",
    tagline: "Real-Time Market Valuation Overlay",
    icon: Tag,
    eliteSpec: "Integrates real-time Futbin market valuations directly on Web App card tiles to prevent overpaying.",
    competitorSpec: (compType, compName) => {
      if (compName === "FUT Genie" || compName === "Paletools" || compName === "FUT.GG")
        return `${compName} provides price badge lookups, but lacks automated 20ms execution on price drops.`;
      return `${compName} lacks real-time Futbin price integration, requiring manual price checks in separate tabs.`;
    },
  },
  {
    num: "05",
    name: "Anti-Detection Engine",
    tagline: "Gaussian Behavioral Jitter",
    icon: Cpu,
    eliteSpec: "Statistical Gaussian distribution curves with randomized micro-pauses (1,200ms–2,800ms) mimicking organic human rhythms.",
    competitorSpec: (compType, compName) => {
      if (compType === "cloud")
        return `${compName} runs from shared datacenter IP subnets easily flagged by EA cluster detection.`;
      return `${compName} uses rigid linear millisecond timers (e.g. fixed intervals) that create detectable square-wave patterns.`;
    },
  },
  {
    num: "06",
    name: "Humanization++ Mode (Flagship Stealth)",
    tagline: "0 Bans Record Across All Seasons",
    icon: MousePointerClick,
    eliteSpec: "Authentic Bézier mouse curve physics, randomized click coordinates, and human dwell times. Verified 0 bans to date.",
    competitorSpec: (compType, compName) => {
      return `${compName} lacks Bézier mouse physics and natural coordinate randomization, firing raw programmatic events.`;
    },
  },
  {
    num: "07",
    name: "Native Chrome Side Panel HUD",
    tagline: "Docked Zero-Clutter Interface",
    icon: Layout,
    eliteSpec: "Docks cleanly inside Chrome's Side Panel API, keeping the Web App completely unobstructed at 60 FPS.",
    competitorSpec: (compType, compName) => {
      if (compType === "desktop-app")
        return `${compName} operates in a separate desktop window that takes over your screen.`;
      if (compType === "cloud" || compType === "web-app")
        return `${compName} uses an external web dashboard separate from the Web App.`;
      return `${compName} injects floating banners and overlay buttons directly onto the Web App screen, causing UI clutter.`;
    },
  },
  {
    num: "08",
    name: "Web Command Dashboard",
    tagline: "Centralized Device Management",
    icon: Globe,
    eliteSpec: "Centralized cloud dashboard to manage device activations, monitor live session telemetry, and view license details.",
    competitorSpec: (compType, compName) => {
      return `${compName} lacks centralized cloud session overview or relies on disconnected local files.`;
    },
  },
  {
    num: "09",
    name: "Free Discord Trading Filters, Daily Tips & VIP Drops",
    tagline: "Daily Coin-Making Tricks & High-ROI Filters",
    icon: MessageSquare,
    eliteSpec: "Included daily free low-budget filters, coin-making tips/tricks, 24/7 technical setup assistance, and VIP Paid-Member alpha sniping drops.",
    competitorSpec: (compType, compName) => {
      if (compType === "discord-alerts")
        return `${compName} charges monthly subscription fees ($20–$30/mo) for signal callouts alone.`;
      return `${compName} provides limited community forum support without verified daily trading filter drops.`;
    },
  },
  {
    num: "10",
    name: "Live Stats & Profit Sync",
    tagline: "Automated Net Profit Tracking",
    icon: BarChart3,
    eliteSpec: "Real-time live session counter tracking snipes completed, gross profit, EA 5% tax deduction, and net coins/hr.",
    competitorSpec: (compType, compName) => {
      return `${compName} displays basic buy count counters only, requiring manual math to calculate true net profit after EA tax.`;
    },
  },
  {
    num: "11",
    name: "Secure Client-Side Auth",
    tagline: "100% Local Zero-Knowledge Privacy",
    icon: Lock,
    eliteSpec: "Zero EA password or 2FA handover. Authenticates via local browser session tokens in Google Chrome.",
    competitorSpec: (compType, compName) => {
      if (compType === "cloud" || compType === "web-app")
        return `${compName} requires uploading your EA password and 2FA backup codes to third-party servers.`;
      if (compType === "desktop-app")
        return `${compName} requires installing unsigned executables with full administrative disk access.`;
      return `${compName} operates locally but lacks isolated Manifest V3 extension sandboxing.`;
    },
  },
];

const FEATURE_DESCRIPTIONS: Record<string, string> = {
  "Execution Location": "Where the automation runs (your local browser vs a remote external server).",
  "EA Password Required": "Whether you need to share your EA password and login credentials.",
  "Market Search Speed": "The round-trip speed of search requests (lower latency wins snipes).",
  "AI SBC Solver": "Whether the bot automatically solves Squad Building Challenges using club players.",
  "Side Panel HUD Integration": "Chrome side panel dashboard so controls stay neatly next to your Web App.",
  "Pricing Model": "The pricing structure (e.g. flat purchase vs recurring monthly/seasonal keys).",
  "Monthly Subscription Price": "The recurring monthly fee to maintain access to the service.",
  "License Price": "The licensing structure (flat fee vs seasonal keys).",
  "Billing Method": "How you purchase the software licenses.",
  "Anti-Detection Delay": "Timing randomizers that mimic organic human speed to prevent account bans.",
  "Anti-Ban Protection": "Timing randomizers that mimic organic human speed to prevent account bans.",
  "Humanization++ Anti-Ban": "Simulates Bézier mouse physics, micro-jitter, and natural click coordinates.",
  "FC 27 Compatibility": "Immediate day-one update support for the latest EA Sports FC 27 Web App.",
  "FC 27 Web App Support": "Immediate day-one update support for the latest EA Sports FC 27 Web App.",
  "FC 27 Support": "Immediate day-one update support for the latest EA Sports FC 27 Web App.",
  "Telegram Control & Alerts": "Ability to send sniped deal alerts or control the bot remotely via Telegram.",
  "Setup Complexity": "Complexity of setting up the tool (Chrome store vs desktop database files).",
  "Multi-Account Support": "Whether it supports running dozens of EA accounts simultaneously for coin farming.",
  "Real-time Profit Sync": "Automatically updates coin counts and profits in real-time.",
  "Real-time Profit Tracking": "Automatically updates coin counts and profits in real-time.",
  "Session Data Leaves Your PC": "Whether session tokens are sent to external databases.",
  "PC Required to be On": "Whether you need to keep your computer running to execute market trades.",
  "Mobile Compatibility": "Availability of dedicated Android/iOS mobile companion apps or web scripts.",
  "Sound Alerts & Anti-Captcha": "Sound notifications when a deal is sniped or a captcha is encountered.",
  "Unlimited Unassigned Items": "Ability to bypass the 50-item unassigned limit to store infinite cards.",
  "Market Investment Guides": "Expert trading tips, gold/meta player buy guides, and market watch filters.",
  "Active Since": "How long the brand has been operating in the Ultimate Team trading space.",
  "Ban Risk": "Security profile and risk of catching a market ban from EA Sports.",
  "Installation Safety": "Security level of extension installation (unpacked developers files vs store).",
  "Futbin Live Price Sync": "Real-time Futbin market pricing overlaid directly in the Web App interface.",
};

export default function CompetitorComparisonPage({ data }: { data: CompetitorData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filterMode, setFilterMode] = useState<"all" | "elite" | "diff">("all");

  const comparisonRows = data?.comparisonRows || [];
  const faqs = data?.faqs || [];
  const citations = data?.citations || [];

  const eliteWins = comparisonRows.filter((r) => r.winner === "elite").length;
  const competitorWins = comparisonRows.filter((r) => r.winner === "competitor").length;
  const total = comparisonRows.length || 1;
  const elitePct = Math.round((eliteWins / total) * 100);

  const filteredRows = comparisonRows.filter((row) => {
    if (filterMode === "elite") return row.winner === "elite";
    if (filterMode === "diff") return String(row.elite) !== String(row.competitor);
    return true;
  });

  const renderValue = (val: string | boolean, side: "elite" | "competitor", winner: string) => {
    if (typeof val === "boolean") {
      if (val) {
        return (
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider ${
              side === "elite"
                ? "bg-primary/15 text-primary border border-primary/30 shadow-[0_0_12px_rgba(204,255,0,0.15)]"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            AVAILABLE
          </span>
        );
      } else {
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider bg-white/[0.04] text-gray-400 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
            MISSING
          </span>
        );
      }
    }
    const isElite = side === "elite";
    const isWinner = winner === side;
    return (
      <span
        className={`text-xs sm:text-sm tracking-wide ${
          isElite
            ? "text-primary font-bold drop-shadow-[0_0_8px_rgba(204,255,0,0.2)]"
            : isWinner
            ? "text-white font-semibold"
            : "text-gray-300 font-medium"
        }`}
      >
        {val}
      </span>
    );
  };

  // Generate fallback summary if not explicitly provided
  const summaryText =
    data.summaryPassage ||
    `In a direct head-to-head comparison between ${data.competitorName} and Elite FUT SNIPER, Elite FUT SNIPER outperforms in search speed (< 20ms local execution), account privacy (zero password sharing), and anti-ban security with Humanization++ (0 transfer market bans to date). While ${data.competitorName} offers ${data.competitorType === "database" ? "card database metrics" : data.competitorType === "userscript" ? "UI quality-of-life shortcuts" : "trading automation"}, Elite FUT SNIPER is the superior autonomous sniping suite for EA FC 27 & FC 26.`;

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Article",
        headline: `${data?.competitorName || "Competitor"} vs Elite FUT SNIPER – Honest Comparison & Review`,
        description: data?.verdict || "",
        image: "https://www.elitefutbot.com/og-image.png",
        datePublished: data?.publishedDate || "2026-08-01",
        dateModified: data?.modifiedDate || "2026-08-30",
        citation: citations.map((cite) => cite.url),
        author: {
          "@type": "Person",
          name: "Elite FUT SNIPER Engineering Team",
          url: "https://www.elitefutbot.com/bakers-bot-developer",
        },
        publisher: {
          "@type": "Organization",
          name: "Elite FUT SNIPER",
          logo: {
            "@type": "ImageObject",
            url: "https://www.elitefutbot.com/logo-elite.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.elitefutbot.com/" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.elitefutbot.com/tools/comparison-guide" },
          {
            "@type": "ListItem",
            position: 3,
            name: `${data.competitorName} vs Elite FUT SNIPER`,
            item: `https://www.elitefutbot.com/${data.slug}`,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Elite FUT SNIPER",
        applicationCategory: "BrowserApplication",
        operatingSystem: "Web, Windows, macOS, ChromeOS, Linux",
        image: "https://www.elitefutbot.com/og-image.png",
        description:
          "The leading 100% local FC 27 & FC 26 sniping bot, autobuyer, and AI SBC solver Chrome extension with 0 bans to date.",
        brand: {
          "@type": "Brand",
          name: "Elite FUT SNIPER",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.elitefutbot.com/#pricing",
          price: "19.99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1420",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.elitefutbot.com/${data.slug}`,
        url: `https://www.elitefutbot.com/${data.slug}`,
        name: `${data.competitorName} vs Elite FUT SNIPER`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "[aria-label='Quick Summary'] p", "[aria-label='Verdict'] p"],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <main className="min-h-screen bg-dark text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[50%] right-0 w-[500px] h-[500px] bg-primary/3 blur-[200px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[25%] left-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-mono" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors text-gray-400">
              Home
            </Link>
            <span className="text-gray-500" aria-hidden="true">/</span>
            <Link href="/tools/comparison-guide" className="hover:text-primary transition-colors text-gray-400">
              Compare
            </Link>
            <span className="text-gray-500" aria-hidden="true">/</span>
            <span className="text-gray-300">{data.competitorName} vs Elite FUT SNIPER</span>
          </nav>

          {/* Header */}
          <header className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(204,255,0,0.08)]">
                <Scale className="w-3.5 h-3.5 shrink-0" />
                Direct Comparison — Updated{" "}
                {new Date(data.modifiedDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                FC 27 &amp; FC 26 Ready
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
              <span className="text-gray-300">{data.competitorName}</span>
              <span className="text-primary mx-4 font-black">vs</span>
              <span className="text-white">Elite FUT SNIPER</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-normal">
              {data.tagline}
            </p>

            {/* FC 27 Readiness Highlight Box */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/25 text-xs sm:text-sm text-gray-200 font-medium max-w-2xl mx-auto backdrop-blur-md shadow-[0_0_25px_rgba(204,255,0,0.05)]">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <span className="text-left font-normal">{data.fc27SupportNote}</span>
            </div>
          </header>

          {/* Standalone AEO / GEO Definition Passage (40-60 Words) */}
          <section aria-label="Quick Summary" className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-left relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-1">
                  AI Overview // Direct Answer Passage
                </span>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
                  {summaryText}
                </p>
              </div>
            </div>
          </section>

          {/* Developer Origin Story Callout Banner (if available) */}
          {data.developerOriginNote && (
            <section
              aria-label="Engineering Pedigree"
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/15 via-primary/5 to-white/[0.02] border border-primary/35 shadow-[0_0_35px_rgba(204,255,0,0.1)] relative overflow-hidden backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/50 shrink-0 shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                    <Image
                      src="/bakersbot-avatar.webp"
                      alt="Original Engine Architect"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold font-mono uppercase tracking-wider">
                      <Cpu className="w-3 h-3" />
                      <span>{data.developerOriginNote.badge}</span>
                    </div>
                    <h2 className="text-base sm:text-lg font-black text-white font-headline uppercase tracking-tight">
                      {data.developerOriginNote.headline}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed max-w-3xl">
                      {data.developerOriginNote.text}
                    </p>
                  </div>
                </div>
                <Link
                  href={data.developerOriginNote.linkUrl}
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] inline-flex items-center gap-1.5"
                >
                  <span>{data.developerOriginNote.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          )}

          {/* Honest In-Depth Competitor Breakdown */}
          {data.competitorOverview && (
            <section aria-label="Competitor Evaluation" className="p-6 sm:p-8 rounded-3xl bg-surface border border-white/10 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                  Honest Teardown &amp; Analysis
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-headline uppercase">
                  Understanding {data.competitorName}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal pt-1">
                  {data.competitorOverview}
                </p>
              </div>

              {/* Pros & Cons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Competitor Pros */}
                <div className="p-5 rounded-2xl bg-dark/70 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-headline uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>What {data.competitorName} Does Well</span>
                  </div>
                  <ul className="space-y-2">
                    {(data.competitorPros || [
                      "Established community name in the Ultimate Team space",
                      "Capable of executing core search and filter parameters",
                      "Familiar interface for existing long-time users",
                    ]).map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-normal">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitor Limitations / Cons */}
                <div className="p-5 rounded-2xl bg-dark/70 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm font-headline uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Limitations &amp; Trade-offs</span>
                  </div>
                  <ul className="space-y-2">
                    {(data.competitorCons || [
                      "Lacks sub-20ms local browser execution speed",
                      "No integrated neural AI SBC solving engine",
                      "Missing Humanization++ Bézier anti-ban physics",
                    ]).map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-normal">
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ideal For / Guidance Box */}
              {data.idealFor && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      Best Suited For: {data.competitorName}
                    </span>
                    <p className="text-xs text-gray-300 font-normal leading-relaxed">{data.idealFor.competitor}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/[0.04] border border-primary/20 space-y-1">
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                      Best Suited For: Elite FUT SNIPER
                    </span>
                    <p className="text-xs text-gray-200 font-normal leading-relaxed">{data.idealFor.elite}</p>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Real Community Issues & Complaints Audit (if available) */}
          {data.communityIssuesAudit && (
            <section aria-label="Community Complaints Audit" className="space-y-6">
              <div className="space-y-1 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Verified User Pain Points</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  {data.communityIssuesAudit.headline}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  {data.communityIssuesAudit.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.communityIssuesAudit.issues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                            issue.severity === "critical"
                              ? "bg-red-500/15 border-red-500/40 text-red-400"
                              : issue.severity === "high"
                              ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                              : "bg-yellow-500/15 border-yellow-500/40 text-yellow-300"
                          }`}
                        >
                          {issue.badge}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">Issue #{idx + 1}</span>
                      </div>
                      <h3 className="text-base font-bold text-white font-headline leading-snug">
                        {issue.title}
                      </h3>
                      <div className="p-3.5 rounded-xl bg-red-500/[0.06] border border-red-500/20 space-y-1 text-xs">
                        <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                          <X className="w-3 h-3 text-red-400" />
                          {data.competitorName} Problem
                        </span>
                        <p className="text-gray-300 leading-relaxed font-normal">{issue.competitorFlaw}</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-primary/[0.06] border border-primary/25 space-y-1 text-xs mt-2">
                      <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-primary" />
                        Elite FUT SNIPER Solution
                      </span>
                      <p className="text-gray-200 leading-relaxed font-normal">{issue.eliteSolution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Comparison Score Matrix */}
          <section
            aria-label="Comparison Score"
            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] bg-black/40 backdrop-blur-md"
          >
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 sm:p-8 bg-white/[0.01] space-y-3 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Challenger</span>
                <p className="text-xl sm:text-2xl font-black font-headline text-gray-200">{data.competitorName}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{data.competitorType}</p>
                <div className="text-4xl font-black font-headline text-gray-300 pt-2">{competitorWins}</div>
                <div className="text-xs text-gray-400">categories won</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-black/60 border-x border-white/10 p-4 gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white/60 font-headline" aria-hidden="true">
                  VS
                </span>
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                <div className="px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold font-mono shadow-[0_0_15px_rgba(204,255,0,0.15)]">
                  {eliteWins} – {competitorWins}
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">score</span>
              </div>
              <div className="p-6 sm:p-8 bg-primary/[0.04] border-l border-primary/30 space-y-3 text-center relative overflow-hidden shadow-[inset_0_0_30px_rgba(204,255,0,0.03)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <span className="relative text-xs font-mono uppercase tracking-widest text-primary font-bold">Champion</span>
                <p className="relative text-xl sm:text-2xl font-black font-headline text-white">Elite FUT SNIPER</p>
                <p className="relative text-xs text-primary/80 uppercase tracking-wider font-medium">local extension</p>
                <div className="relative text-4xl font-black font-headline text-primary pt-2 [text-shadow:0_0_25px_rgba(204,255,0,0.6)]">
                  {eliteWins}
                </div>
                <div className="relative text-xs text-primary/90 font-medium">categories won</div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-white/5 bg-black/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  Elite FUT SNIPER Advantage
                </span>
                <span className="text-[10px] font-mono text-primary font-bold">{elitePct}% dominance</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(204,255,0,0.7)] transition-all duration-1000"
                  style={{ width: `${elitePct}%` }}
                />
              </div>
            </div>
          </section>

          {/* Key Statistics */}
          <section aria-label="Key Statistics" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.keyStatistics.map((stat, i) => (
              <div
                key={i}
                className="relative text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1.5 hover:bg-white/[0.04] hover:border-primary/30 transition-all group overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(204,255,0,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-2xl md:text-3xl font-black font-headline text-primary [text-shadow:0_0_15px_rgba(204,255,0,0.25)]">
                  {stat.value}
                </span>
                <p className="relative text-[11px] text-gray-300 font-semibold uppercase tracking-wider">{stat.label}</p>
                {stat.source && <p className="relative text-[9px] text-gray-400 font-mono">Source: {stat.source}</p>}
              </div>
            ))}
          </section>

          {/* Verdict Box */}
          <section
            aria-label="Verdict"
            className="relative p-8 sm:p-10 rounded-2xl border border-primary/35 bg-primary/[0.04] shadow-[0_0_50px_rgba(204,255,0,0.08)] overflow-hidden backdrop-blur-md"
          >
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div
              className="absolute top-4 right-6 font-mono text-[10px] text-primary/80 uppercase tracking-[0.3rem] flex items-center gap-2"
              aria-hidden="true"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              VERIFIED // VERDICT
            </div>
            <div className="flex items-start gap-4 relative">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Bottom Line Verdict
                </h2>
                <p className="text-gray-200 leading-relaxed text-base sm:text-lg font-normal">{data.verdict}</p>
              </div>
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="space-y-6" aria-label="Feature Comparison">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  Side-by-Side Breakdown
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  {data.competitorName} vs Elite FUT SNIPER
                </h2>
              </div>
              <div
                className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/15 self-start md:self-auto font-mono text-xs backdrop-blur-sm"
                role="group"
                aria-label="Filter comparison features"
              >
                <button
                  onClick={() => setFilterMode("all")}
                  aria-pressed={filterMode === "all"}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    filterMode === "all"
                      ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  All Features
                </button>
                <button
                  onClick={() => setFilterMode("elite")}
                  aria-pressed={filterMode === "elite"}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    filterMode === "elite"
                      ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Elite Advantages
                </button>
                <button
                  onClick={() => setFilterMode("diff")}
                  aria-pressed={filterMode === "diff"}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    filterMode === "diff"
                      ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Differences
                </button>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-black/60 font-mono text-[10px] tracking-widest text-gray-300">
                    <th className="px-6 py-5 font-bold uppercase">Feature / Attribute</th>
                    <th className="px-6 py-5 font-bold text-center w-[25%]">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="uppercase text-gray-200">{data.competitorName}</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.05] text-gray-300 font-bold font-mono text-[8px] uppercase tracking-wider">
                          CHALLENGER
                        </span>
                      </div>
                    </th>
                    <th className="px-6 py-5 font-bold text-center text-primary w-[30%] bg-primary/[0.03] border-x border-primary/20">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="uppercase text-primary font-black tracking-wide">Elite FUT SNIPER</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary text-black font-black font-mono text-[8px] uppercase tracking-wider shadow-[0_0_12px_rgba(204,255,0,0.5)]">
                          CHAMPION
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, i) => {
                      const isEliteWin = row.winner === "elite";
                      const isCompetitorWin = row.winner === "competitor";
                      const desc = FEATURE_DESCRIPTIONS[row.feature] || "";
                      return (
                        <tr
                          key={i}
                          className={`transition-all group ${
                            isEliteWin ? "hover:bg-primary/[0.03]" : "hover:bg-white/[0.01]"
                          }`}
                        >
                          <td className="px-6 py-5 space-y-1">
                            <span className="text-sm text-gray-200 font-bold tracking-wide group-hover:text-white transition-colors">
                              {row.feature}
                            </span>
                            {desc && <p className="text-xs text-gray-400 font-normal leading-relaxed">{desc}</p>}
                          </td>
                          <td className="px-6 py-5 text-center">
                            <div className="flex justify-center">
                              {renderValue(row.competitor, "competitor", row.winner)}
                            </div>
                            {isCompetitorWin && (
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 mt-1.5 block">
                                Challenger Win
                              </span>
                            )}
                          </td>
                          <td
                            className={`px-6 py-5 text-center border-x transition-all ${
                              isEliteWin
                                ? "bg-primary/[0.04] border-primary/20"
                                : "bg-primary/[0.01] border-primary/10"
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1.5">
                              {renderValue(row.elite, "elite", row.winner)}
                              {isEliteWin && (
                                <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/40 px-2.5 py-0.5 rounded-full text-primary shadow-[0_0_10px_rgba(204,255,0,0.2)]">
                                  WINS
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={3} className="px-6 py-12 text-center text-gray-400 font-mono text-sm bg-black/20">
                        No features match this filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-3">
              {filteredRows.length > 0 ? (
                filteredRows.map((row, i) => {
                  const isEliteWin = row.winner === "elite";
                  const isCompetitorWin = row.winner === "competitor";
                  const isTie = row.winner === "tie";
                  const desc = FEATURE_DESCRIPTIONS[row.feature] || "";
                  const renderMobileValue = (val: string | boolean) => {
                    if (typeof val === "boolean") return val ? "Available" : "Missing";
                    return val;
                  };
                  return (
                    <div
                      key={i}
                      className={`p-5 rounded-2xl border space-y-4 transition-all ${
                        isEliteWin
                          ? "border-primary/30 bg-primary/[0.03]"
                          : "border-white/10 bg-white/[0.01] hover:border-white/20"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white uppercase tracking-wider">
                            {row.feature}
                          </span>
                          {isEliteWin && (
                            <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/30 px-2 py-0.5 rounded-full text-primary">
                              ELITE WINS
                            </span>
                          )}
                          {isCompetitorWin && (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                              Challenger Win
                            </span>
                          )}
                          {isTie && <span className="text-[9px] font-mono text-gray-400 uppercase">Tie</span>}
                        </div>
                        {desc && <p className="text-xs text-gray-400 leading-normal font-normal">{desc}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div
                          className={`p-3 rounded-xl border text-center space-y-1 ${
                            isCompetitorWin
                              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                              : "bg-black/40 border-white/5 text-gray-300"
                          }`}
                        >
                          <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block">
                            {data.competitorName}
                          </span>
                          <span className="font-bold text-sm block">{renderMobileValue(row.competitor)}</span>
                        </div>
                        <div
                          className={`p-3 rounded-xl border text-center space-y-1 ${
                            isEliteWin
                              ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                              : isTie
                              ? "bg-white/5 border-white/10 text-white"
                              : "bg-black/40 border-white/5 text-gray-300"
                          }`}
                        >
                          <span className="text-[9px] font-mono uppercase tracking-widest text-primary/80 block">
                            Elite FUT SNIPER
                          </span>
                          <span className="font-bold text-sm block">{renderMobileValue(row.elite)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-400 border border-white/10 rounded-2xl bg-white/[0.01] font-mono text-xs">
                  No features match this filter criteria.
                </div>
              )}
            </div>

            {/* Score Bar Footer */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-primary/10 border border-primary/30 shadow-[0_0_25px_rgba(204,255,0,0.08)]">
              <div className="space-y-0.5">
                <span className="text-sm text-gray-200 font-semibold">Elite FUT SNIPER outperforms category battle</span>
                <p className="text-[10px] text-primary/80 font-mono uppercase tracking-widest">
                  across {total} benchmarks tested
                </p>
              </div>
              <span className="text-2xl font-black text-primary font-headline">
                {eliteWins}
                <span className="text-lg text-primary/70"> / {total}</span>
              </span>
            </div>
          </section>

          {/* UI & Ergonomics Teardown (if available) */}
          {data.uiComparison && (
            <section
              aria-label="UI Ergonomics Comparison"
              className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/10 space-y-8 backdrop-blur-md"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <Layout className="w-3.5 h-3.5" />
                  <span>Ergonomics &amp; HUD Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  {data.uiComparison.headline}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  {data.uiComparison.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Competitor UI */}
                <div className="p-6 rounded-2xl bg-black/50 border border-red-500/20 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white font-headline uppercase tracking-wide">
                      {data.uiComparison.competitorUi.title}
                    </h3>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400">
                      {data.uiComparison.competitorUi.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {data.uiComparison.competitorUi.description}
                  </p>
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                      Drawbacks on EA Web App:
                    </span>
                    <ul className="space-y-2">
                      {data.uiComparison.competitorUi.drawbacks.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-normal">
                          <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Elite UI */}
                <div className="p-6 rounded-2xl bg-primary/[0.04] border border-primary/30 space-y-4 shadow-[0_0_30px_rgba(204,255,0,0.05)]">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-primary font-headline uppercase tracking-wide">
                      {data.uiComparison.eliteUi.title}
                    </h3>
                    <span className="text-[9px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary">
                      {data.uiComparison.eliteUi.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed font-normal">
                    {data.uiComparison.eliteUi.description}
                  </p>
                  <div className="space-y-2 pt-2 border-t border-primary/20">
                    <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest block">
                      Ergonomic Advantages:
                    </span>
                    <ul className="space-y-2">
                      {data.uiComparison.eliteUi.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-200 font-normal">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Technical Architecture Deep Dive */}
          <section className="space-y-8 p-8 sm:p-10 rounded-3xl bg-surface border border-white/10 backdrop-blur-sm" aria-label="Architecture Comparison">
            <div className="flex items-center gap-3 text-primary">
              <Server className="w-6 h-6 text-primary shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                Technical Architecture: 100% Local Client vs {data.competitorName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  1. Zero Credential Handover
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {data.competitorType === "cloud" || data.competitorType === "web-app"
                    ? `${data.competitorName} requires you to upload your EA account passwords, 2FA backup codes, and session cookies to external datacenter servers. Elite FUT SNIPER operates 100% locally inside your Chrome sandbox — your credentials never leave your personal computer.`
                    : `Elite FUT SNIPER runs directly inside your authentic Web App session in Google Chrome. No external desktop binaries or risky userscripts required.`}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  2. Sub-20ms Execution Speed
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  Our direct DOM and native network hook triggers inside the EA Web App bypass round-trip delays. On high-demand meta player listings, Elite FUT SNIPER purchases underpriced deals in under 20ms before external cloud bots or manual clickers can react.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-primary shrink-0" />
                  3. Real-Time AI SBC Solver
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  Unlike {data.competitorName}, Elite FUT SNIPER features an integrated AI SBC solver that analyzes your live club inventory in real-time, calculates optimal chemistry solutions with untradeables, and automatically snipes missing cards at rock-bottom prices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <MousePointerClick className="w-4 h-4 text-primary shrink-0" />
                  4. Humanization++ Anti-Ban Mode
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  Replaces robotic, repetitive HTTP requests with authentic Bézier mouse curve physics, randomized click coordinates, and Gaussian interval pauses (1,200ms–2,800ms). Proudly holds a verified record of <strong className="text-white">0 transfer market bans to date</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Complete 11-Module Feature Suite Breakdown vs Competitor */}
          <section className="space-y-6" aria-label="11-Module Feature Breakdown">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>11-Module Capability Audit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                How Elite FUT SNIPER&apos;s 11 Features Outperform {data.competitorName}
              </h2>
              <p className="text-sm text-gray-300 max-w-3xl leading-relaxed font-normal">
                A systematic module-by-module feature audit evaluating automation speed, anti-ban stealth, pricing transparency, and UI ergonomics against {data.competitorName}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELEVEN_MODULES.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.num}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 hover:bg-white/[0.03] transition-all space-y-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 font-mono font-bold text-xs">
                          {mod.num}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white font-headline uppercase tracking-tight flex items-center gap-1.5">
                            <Icon className="w-4 h-4 text-primary shrink-0" />
                            <span>{mod.name}</span>
                          </h3>
                          <span className="text-[11px] font-mono text-primary font-semibold block">
                            {mod.tagline}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/40 px-2 py-0.5 rounded-full text-primary shrink-0">
                        ELITE ADVANTAGE
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-primary/[0.04] border border-primary/20 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          Elite FUT SNIPER
                        </span>
                        <p className="text-gray-200 leading-relaxed font-normal">{mod.eliteSpec}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold flex items-center gap-1.5">
                          <X className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                          {data.competitorName}
                        </span>
                        <p className="text-gray-400 leading-relaxed font-normal">
                          {mod.competitorSpec(data.competitorType, data.competitorName)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AI SBC Solver Roadmap Highlight */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/[0.08] via-surface to-surface border border-primary/30 shadow-[0_0_30px_rgba(204,255,0,0.06)] flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-wider">
                  <Cpu className="w-3 h-3" />
                  <span>Roadmap Highlight</span>
                </div>
                <h3 className="text-lg font-bold text-white font-headline uppercase">
                  Integrated Neural AI SBC Solver vs {data.competitorName}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  While {data.competitorName} requires manual card puzzle solving or external blueprint copying, Elite FUT SNIPER features an integer linear programming AI engine that scans your club untradeables and builds chemistry-compliant squads in 1 click.
                </p>
              </div>
              <Link
                href="/fc27-fut-sniping-bot-autobuyer-features"
                aria-label="Explore 11 Features – All EA FC 27 sniping bot and autobuyer features"
                className="shrink-0 px-6 py-3 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center gap-2"
              >
                Explore 11 Features
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Advertised Features Reality Audit (if available) */}
          {data.advertisedFeaturesAudit && (
            <section aria-label="12 Advertised Features Audit" className="space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Feature-by-Feature Reality Audit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  {data.advertisedFeaturesAudit.headline}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  {data.advertisedFeaturesAudit.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.advertisedFeaturesAudit.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-white font-headline uppercase tracking-wide">
                        {feat.advertisedName}
                      </h3>
                      <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/30 px-2 py-0.5 rounded-full text-primary">
                        ELITE WINS
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold flex items-center gap-1.5">
                          <X className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                          {data.competitorName} Reality
                        </span>
                        <p className="text-gray-400 leading-relaxed font-normal">{feat.competitorReality}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-primary/[0.04] border border-primary/20 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          Elite FUT SNIPER Advantage
                        </span>
                        <p className="text-gray-200 leading-relaxed font-normal">{feat.eliteAdvantage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing Model Teardown (if available) */}
          {data.pricingTeardown && (
            <section
              aria-label="Pricing Teardown"
              className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/10 space-y-6 backdrop-blur-md"
            >
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Cost Transparency</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  {data.pricingTeardown.headline}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  {data.pricingTeardown.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Competitor Pricing */}
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-gray-300 font-headline uppercase">
                      {data.pricingTeardown.competitorModel.title}
                    </span>
                    <span className="text-xs font-mono text-gray-400 font-bold">
                      {data.pricingTeardown.competitorModel.price}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                      Hidden Costs &amp; Limitations:
                    </span>
                    <ul className="space-y-2">
                      {data.pricingTeardown.competitorModel.hiddenCosts.map((cost, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-normal">
                          <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                          <span>{cost}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Elite Pricing */}
                <div className="p-6 rounded-2xl bg-primary/[0.04] border border-primary/30 space-y-4 shadow-[0_0_30px_rgba(204,255,0,0.06)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-primary font-headline uppercase">
                      {data.pricingTeardown.eliteModel.title}
                    </span>
                    <span className="text-xs font-mono text-primary font-bold">
                      {data.pricingTeardown.eliteModel.price}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest block">
                      All-Inclusive Package Benefits:
                    </span>
                    <ul className="space-y-2">
                      {data.pricingTeardown.eliteModel.inclusions.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-200 font-normal">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-gray-300 leading-relaxed font-normal">
                <strong className="text-white font-semibold">Bottom Line on Pricing: </strong>
                {data.pricingTeardown.summary}
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          <section className="space-y-6" aria-label="Frequently Asked Questions">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Frequently Asked</span>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                {data.competitorName} vs Elite FUT SNIPER FAQ
              </h2>
            </div>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-xl border overflow-hidden transition-all ${
                    openFaq === i
                      ? "border-primary/35 bg-primary/[0.04]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`competitor-faq-answer-${i}`}
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold leading-snug pr-4 transition-colors ${
                        openFaq === i ? "text-primary" : "text-white group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180 text-primary" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div
                      id={`competitor-faq-answer-${i}`}
                      className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-normal"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Community Feedback */}
          <section className="space-y-6" aria-label="Community Reviews">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Community Feedback</span>
              <h2 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">
                What Traders Say After Switching
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.reviewQuotes.map((quote, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-primary/30 hover:bg-primary/[0.03] transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex text-primary text-sm gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 fill-primary" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed relative font-normal">&ldquo;{quote.text}&rdquo;</p>
                  <div className="pt-1 border-t border-white/5">
                    <p className="text-xs font-mono text-gray-400">{quote.author}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{quote.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section
            className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_60px_rgba(204,255,0,0.08)] overflow-hidden"
            aria-label="Call to Action"
          >
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <h2 className="relative text-2xl sm:text-4xl font-black font-headline uppercase text-white tracking-tight">
              Ready to Leave {data.competitorName} Behind?
            </h2>
            <p className="relative text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
              Join thousands of FUT traders using Elite FUT SNIPER — the only 100% local Chrome extension with &lt; 20ms sniping speeds, AI SBC solving, zero password sharing, and full day-one FC 27 &amp; FC 26 support.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/register"
                aria-label="Start Free 7-Day Trial of Elite FUT SNIPER"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center justify-center gap-2"
              >
                Start Free 7-Day Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#pricing"
                aria-label="View Pricing Plans for Elite FUT SNIPER"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </section>

          {/* Sourcing & Reference Citations */}
          <footer className="pt-8 border-t border-white/5 text-center space-y-2">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Verified Sourcing &amp; Reference Material
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
              {data.citations.map((cite, i) => (
                <a
                  key={i}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline decoration-dotted text-gray-400"
                >
                  {cite.label}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
