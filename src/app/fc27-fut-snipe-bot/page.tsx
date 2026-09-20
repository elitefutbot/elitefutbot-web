import type { Metadata } from "next";
import Link from "next/link";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import SetDocumentLang from "@/components/SetDocumentLang";
import { getHreflangAlternates } from "@/data/locales/registry";
import {
  ArrowRight,
  PlayCircle,
  Zap,
  ShieldCheck,
  Puzzle,
  Compass,
  Layout,
  Sliders,
  Sparkles,
  Tag,
  TrendingUp,
  HelpCircle,
  Bot,
  CheckCircle2,
  Lock,
  MessageSquare,
  BarChart3,
  SlidersHorizontal,
  Flame,
  Check,
  X,
  ArrowUpRight,
  RefreshCw,
  Calendar,
  BadgeCheck,
  Cpu,
  Layers,
  ShoppingBag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FC 27 Autobuyer & FUT Snipe Bot | Verified Working (Sep 17 FC 27 Update)",
  description:
    "Confirmed 100% working as of September 17 latest EA FC 27 Web App update. Fully compatible FC 27 autobuyer and FUT sniping bot with sub-20ms execution, Humanization++ zero-ban heuristics, and 1-click AI SBC solver.",
  keywords: [
    "fc27 autobuyer",
    "ea fc 27 autobuyer",
    "fc 27 fut snipe bot",
    "fc 27 sniping bot",
    "fut 27 autobuyer",
    "ea fc 27 trading bot",
    "fc 27 auto buyer",
    "fut web app autobuyer",
    "ea sports fc 27 autobuyer chrome extension",
    "59th minute snipe bot fc 27",
    "fc27 transfer market bot",
    "working fc 27 autobuyer sep 17",
    "fc 27 ai sbc solver",
    "anti ban fut autobuyer",
    "ultimate team autobuyer fc 27",
    "fut web app extension",
  ],
  alternates: {
    canonical: "https://www.elitefutbot.com/fc27-fut-snipe-bot",
    languages: getHreflangAlternates("/fc27-fut-snipe-bot"),
  },
  openGraph: {
    title: "FC 27 Autobuyer & FUT Snipe Bot | Verified Working (Sep 17 FC 27 Update)",
    description:
      "Confirmed 100% working as of September 17 latest EA FC 27 Web App update. Sub-20ms transfer market autobuyer, 59th-minute sniping, 1-click AI SBC solver, and Humanization++ zero-ban protection.",
    type: "website",
    url: "https://www.elitefutbot.com/fc27-fut-snipe-bot",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FC 27 Autobuyer and FUT Snipe Bot Working Interface - Sep 17 Update",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Autobuyer & FUT Snipe Bot | Verified Working (Sep 17 FC 27 Update)",
    description:
      "Now fully compatible with EA Sports FC 27 Web App! Sub-20ms autobuyer, sniping bot, AI SBC solver, and zero password sharing.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

const FEATURE_MODULES = [
  {
    num: "01",
    title: "Sub-20ms Autonomous Autobuyer",
    badge: "Direct DOM Socket",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
    icon: Zap,
    tagline: "Millisecond 59th-Minute Market Dominance",
    description:
      "Scans the EA FC 27 transfer market and executes instant buy-now confirmations directly through the browser DOM in under 20 milliseconds, capturing underpriced 59th-minute cards before cloud bots or human clicks can react.",
    highlights: [
      "< 20ms local DOM socket trigger",
      "Instant buy-now confirmation loop",
      "Configurable max buy price ceilings",
    ],
  },
  {
    num: "02",
    title: "Humanization++ Anti-Ban Heuristics",
    badge: "Flagship Safety",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    icon: ShieldCheck,
    tagline: "Zero Transfer Market Bans Recorded",
    description:
      "Applies authentic mathematical Bézier curve mouse trajectories, randomized micro-pixel jitter, and Gaussian distribution delays (1,200ms–2,800ms) to ensure bot requests remain completely indistinguishable from human trading behavior.",
    highlights: [
      "Dynamic Bézier mouse path simulation",
      "Gaussian randomized interval pacing",
      "0 bans recorded across tested seasons",
    ],
  },
  {
    num: "03",
    title: "Integrated 1-Click AI SBC Solver",
    badge: "1-Click AI Engine",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    icon: Sparkles,
    tagline: "Lowest Cost Chemistry Solutions in Seconds",
    description:
      "Calculates the mathematically cheapest, chemistry-compliant squad combinations from your existing club players or the active transfer market, auto-buying missing fodder and submitting challenges in 1 click.",
    highlights: [
      "Solves complex multi-league chemistry",
      "Prioritizes untradeable club fodder",
      "Automated card purchase & insertion",
    ],
  },
  {
    num: "04",
    title: "Automated Mass Bidding & Relisting",
    badge: "Automated Cashflow",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: TrendingUp,
    tagline: "Automated Bidding Engine & 5% Tax Calculation",
    description:
      "Places high-volume bids on expiring auctions with strict bid ceiling bounds, then automatically relists acquired inventory at target profit multipliers with automated 5% EA transfer tax deductions factored in.",
    highlights: [
      "Automated mass bidding on expiring cards",
      "Automatic 5% EA tax deduction calculation",
      "24/7 autonomous relisting of unsold auctions",
    ],
  },
  {
    num: "05",
    title: "Futbin Real-Time Price Telemetry",
    badge: "Live Telemetry",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    icon: Tag,
    tagline: "In-Game Market Value & Profit Badges",
    description:
      "Directly overlays real-time Futbin market valuations, hourly price trends, and target profit margins on every card in the Web App interface, preventing accidental purchases of falling cards.",
    highlights: [
      "Direct in-app price badge overlay",
      "Live price fluctuation tracking",
      "Eliminates manual browser tab switching",
    ],
  },
  {
    num: "06",
    title: "Multi-Target Smart Filter Matrix",
    badge: "Granular Precision",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    icon: SlidersHorizontal,
    tagline: "Simultaneous Multi-Player Search Profiles",
    description:
      "Configure complex buying rules by player rating, position, chemistry style, league, nation, card rarity, and minimum profit margins. Scan multiple target profiles concurrently to capture market-wide dips.",
    highlights: [
      "Concurrent multi-player filter profiles",
      "Exact rating & position constraints",
      "Custom chemistry style & rarity targeting",
    ],
  },
  {
    num: "07",
    title: "Native Chrome Side Panel HUD",
    badge: "Ergonomic HUD",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    icon: Layout,
    tagline: "Zero Viewport Obstruction",
    description:
      "Runs seamlessly inside Google Chrome's native Side Panel API. Your controls, active search profiles, session telemetry, and safety dials dock beside the Web App without obstructing player cards.",
    highlights: [
      "Native Google Chrome Side Panel integration",
      "Dark-mode optimized ergonomics",
      "Non-intrusive workspace docking",
    ],
  },
  {
    num: "08",
    title: "100% Client-Side Sandboxing",
    badge: "Zero-Knowledge",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    icon: Lock,
    tagline: "Zero Password or Cookie Transmission",
    description:
      "Operates entirely inside your local browser sandbox. Your EA login credentials, authentication cookies, and session tokens are never uploaded, stored, or accessible to external servers.",
    highlights: [
      "Zero password or token transmission",
      "Local browser storage sandboxing",
      "Encrypted license key verification",
    ],
  },
  {
    num: "09",
    title: "Live Profit Ledger & Session Analytics",
    badge: "Live Ledger",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    icon: BarChart3,
    tagline: "Transparent Net Coin Yield Telemetry",
    description:
      "Real-time HUD monitors snipes executed, total coins spent, gross revenue, active running time, and exact net profit after automated 5% EA tax deduction, providing total session transparency.",
    highlights: [
      "Real-time net profit ledger",
      "Hourly coin velocity calculation",
      "Snipe success-rate telemetry",
    ],
  },
  {
    num: "10",
    title: "24/7 VIP Discord Alpha Lounge",
    badge: "VIP Community",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
    icon: MessageSquare,
    tagline: "Curated High-ROI Filter Drops & 24/7 Support",
    description:
      "Instant access to our private Discord trading server. Receive daily high-ROI filter drops during major promo events, trade alongside verified elite traders, and access direct developer setup support.",
    highlights: [
      "Daily curated high-ROI filter drops",
      "Direct developer troubleshooting",
      "Active verified trader network",
    ],
  },
];

const COMPATIBILITY_LOG = [
  {
    date: "September 17, 2026",
    event: "EA Sports FC 27 Web App Launch & Update",
    status: "Verified 100% Working",
    statusColor: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    details:
      "Full compatibility confirmed across all transfer market endpoints. Sub-20ms DOM triggers, autobuyer relisting, mass bidding, and AI SBC solving operational with 0 soft bans.",
  },
  {
    date: "September 15, 2026",
    event: "FC 27 Pre-Season Protocol Calibration",
    status: "Completed",
    statusColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
    details:
      "Pre-tested against EA's updated payload structures and authentication handshakes to ensure zero downtime on day one.",
  },
  {
    date: "All Tested Seasons",
    event: "Humanization++ Anti-Ban Engine",
    status: "0 Bans Recorded",
    statusColor: "text-primary bg-primary/15 border-primary/30",
    details:
      "Bézier cursor smoothing and non-linear Gaussian distribution intervals maintain an unbroken safety record across thousands of active members.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Search & Trigger Latency",
    elite: "< 20ms (Direct in-browser DOM socket)",
    cloud: "180ms – 350ms (Datacenter proxy hop)",
    manual: "600ms – 1,200ms (Human reflex lag)",
  },
  {
    feature: "FC 27 Web App Compatibility",
    elite: "100% Verified Working (Sep 17 Update)",
    cloud: "Broken / Delayed selector updates",
    manual: "Compatible (Manual clicking)",
  },
  {
    feature: "Autobuyer & Automated Relisting",
    elite: "Autonomous buy-to-relist with 5% tax math",
    cloud: "Basic relist / Frequent crashes",
    manual: "Manual listing card by card",
  },
  {
    feature: "EA Account Password Safety",
    elite: "100% Private (Never leaves your browser)",
    cloud: "High Risk (Requires uploading login/cookies)",
    manual: "Safe (Manual login)",
  },
  {
    feature: "Anti-Ban Protection Engine",
    elite: "Humanization++ (Bézier curves & Gaussian jitter)",
    cloud: "Static Linear Delays (High ban risk)",
    manual: "Human (Natural behavior)",
  },
  {
    feature: "Recorded Account Bans",
    elite: "0 Bans Recorded across tested seasons",
    cloud: "Frequent automated ban waves",
    manual: "Zero ban risk",
  },
  {
    feature: "1-Click AI SBC Solver",
    elite: "Built-In 1-Click Neural AI Engine",
    cloud: "Not Supported / External site",
    manual: "20+ minutes manual card search",
  },
  {
    feature: "Futbin Real-Time Price Sync",
    elite: "Direct in-app live badge overlay",
    cloud: "Manual external tab lookup required",
    manual: "Manual tab switching required",
  },
  {
    feature: "Pricing Model",
    elite: "$19.99 One-Time (365 Full Days + Free Trial)",
    cloud: "$15 – $35/month recurring subscription",
    manual: "Free (Costs 4+ hours daily)",
  },
];

const STEP_PROCESS = [
  {
    num: "01",
    title: "Install Chrome Extension",
    desc: "Load Elite FUT SNIPER into Google Chrome in under 60 seconds and pin it to your browser toolbar.",
    icon: Puzzle,
    badge: "60s Setup",
  },
  {
    num: "02",
    title: "Open Web App & Side Panel",
    desc: "Log into the official EA FC 27 Ultimate Team Web App and launch the bot in Chrome's native Side Panel HUD.",
    icon: Layout,
    badge: "Native Docking",
  },
  {
    num: "03",
    title: "Set Autobuyer & Sniper Rules",
    desc: "Configure target players, max buy-now prices, chemistry styles, automated relist profit margins, or import verified VIP Discord presets.",
    icon: Sliders,
    badge: "Smart Filters",
  },
  {
    num: "04",
    title: "Activate Autonomous Trading",
    desc: "Toggle the engine ON. The bot scans the FC 27 market, snipes 59th-minute deals in sub-20ms, and auto-relists for maximum coin compounding.",
    icon: Zap,
    badge: "Autonomous Trading",
  },
];

const FAQS = [
  {
    q: "Is the FC 27 Autobuyer working after the September 17 EA FC 27 Web App update?",
    a: "Yes! Elite FUT SNIPER is verified 100% working as of the September 17, 2026 EA Sports FC 27 Web App update. Our decoupled in-browser architecture and dynamic DOM hooks ensure instant day-one synchronization with EA's latest Web App payload structures, guaranteeing uninterrupted 20ms sniping, automated mass bidding, and relisting.",
  },
  {
    q: "What is the difference between an FC 27 Sniping Bot and an FC 27 Autobuyer?",
    a: "While an FC 27 Sniping Bot focuses primarily on acquiring underpriced cards listed at the 59th minute in sub-20 milliseconds, an FC 27 Autobuyer handles the complete end-to-end trading loop: market scanning, automated mass bidding on expiring auctions, instant buy-now execution, automated 5% EA transfer tax profit calculation, and automatic relisting of inventory back onto the transfer market.",
  },
  {
    q: "Is using this FC 27 Autobuyer safe from EA transfer market bans?",
    a: "Yes. Elite FUT SNIPER is engineered with our proprietary Humanization++ anti-ban engine. It simulates natural human interaction using smooth mathematical Bézier mouse curves, dynamic pixel micro-jitter, and non-linear Gaussian distribution delays (1,200ms–2,800ms). Because it executes 100% locally on your machine, there are zero datacenter IP footprints, resulting in zero recorded bans.",
  },
  {
    q: "Do I need to share my EA account password or authentication cookies?",
    a: "No. Unlike cloud-based autobuyers that require uploading your EA account credentials to third-party servers, Elite FUT SNIPER runs 100% locally in your Google Chrome browser sandbox. Your EA password, session cookies, and persona tokens never leave your computer.",
  },
  {
    q: "How does the integrated 1-Click AI SBC Solver function for FC 27?",
    a: "Our AI SBC Solver engine analyses active FC 27 Squad Building Challenge requirements directly inside the Web App. It calculates the mathematically cheapest chemistry combination using unassigned or tradeable club cards and fills the squad in seconds, automatically auto-buying missing fodder cards under your target price limits.",
  },
  {
    q: "Does the autobuyer automatically calculate the 5% EA transfer market tax?",
    a: "Yes. The autonomous relisting engine automatically deducts EA's 5% transaction tax from every calculation before listing cards. This guarantees that every snipe and flip yields net-positive coin profit and eliminates accidental negative-margin sales.",
  },
  {
    q: "Can I run the FC 27 autobuyer on macOS, Windows, and ChromeOS?",
    a: "Yes. Because Elite FUT SNIPER is built as a standard Google Chrome extension utilizing the native Chrome Side Panel API, it runs on any desktop operating system supporting Google Chrome, Brave, Opera, or Microsoft Edge on Windows, macOS, and ChromeOS.",
  },
  {
    q: "Where do I get high-ROI FC 27 sniping filters and community support?",
    a: "Every user receives instant access to our private VIP Discord community. Our team posts daily curated high-ROI sniping filters during 6 PM content drops and promo events, along with 24/7 technical setup assistance.",
  },
];

export default function FC27FutSnipeBotPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.elitefutbot.com/fc27-fut-snipe-bot#software",
        "name": "FC 27 Autobuyer & FUT Snipe Bot",
        "inLanguage": "en",
        "operatingSystem": "Windows, macOS, ChromeOS",
        "applicationCategory": "GameApplication",
        "softwareVersion": "2.7.4 (Sep 17, 2026 EA FC 27 Web App Update)",
        "dateModified": "2026-09-17",
        "image": "https://www.elitefutbot.com/og-image.png",
        "brand": {
          "@type": "Brand",
          "name": "Elite FUT SNIPER",
        },
        "description":
          "Verified working as of September 17, 2026 for the EA FC 27 Web App update. The fastest, safest FC 27 autobuyer and FUT snipe bot Chrome extension with sub-20ms search speeds, Humanization++ anti-ban heuristics, automated mass bidding, and 1-click AI SBC solving.",
        "offers": {
          "@type": "Offer",
          "url": "https://www.elitefutbot.com/fc27-fut-snipe-bot",
          "price": "19.99",
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Elite FUT SNIPER",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1420",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.elitefutbot.com/fc27-fut-snipe-bot#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.elitefutbot.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FC 27 Autobuyer & FUT Snipe Bot",
            "item": "https://www.elitefutbot.com/fc27-fut-snipe-bot",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://www.elitefutbot.com/fc27-fut-snipe-bot#howto",
        "name": "How to Setup and Use the FC 27 Autobuyer on the EA FC 27 Web App",
        "inLanguage": "en",
        "description":
          "Step-by-step tutorial to installing Elite FUT SNIPER Chrome extension and configuring automated transfer market autobuying and sniping on the EA FC 27 Web App.",
        "step": STEP_PROCESS.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": s.title,
          "text": s.desc,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.elitefutbot.com/fc27-fut-snipe-bot#faq",
        "inLanguage": "en",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SetDocumentLang lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow bg-[#070707] text-white font-sans selection:bg-primary selection:text-black">
        {/* HERO SECTION */}
        <header className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-white/5">
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/10 blur-[140px] rounded-full -z-10 pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Real-time Status Notice Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-black text-emerald-300 tracking-wider uppercase font-mono">
                Working as of Sep 17 Latest FC 27 Web App Update
              </span>
              <span className="hidden sm:inline-block text-gray-500">•</span>
              <span className="text-[11px] font-bold text-gray-300 font-mono">
                Now Fully Compatible for FC 27
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white leading-tight font-headline">
              Fastest &amp; Safest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_16px_rgba(204,255,0,0.35)]">
                FC 27 Autobuyer &amp; FUT Snipe Bot
              </span>
            </h1>

            {/* AEO / GEO Direct Answer Block (Engineered for Google AI Overviews, Perplexity & ChatGPT) */}
            <div className="max-w-3xl mx-auto mb-8 p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-emerald-500/30 backdrop-blur-md text-left shadow-2xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-2.5">
                <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Status: Updated September 17, 2026 • 100% Operational for FC 27</span>
              </div>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                <strong>Elite FUT SNIPER is confirmed 100% working and fully compatible with the September 17 EA FC 27 Web App update.</strong> Operating locally inside Google Chrome with sub-20ms DOM-level response times, this autonomous FC 27 autobuyer and sniping bot executes 59th-minute card sniping, high-volume mass bidding, 1-click AI SBC solving, and automated tax-deducted relisting with zero password sharing and Humanization++ zero-ban protection.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                className="px-8 py-4 bg-primary text-black font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
                href="/register"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto hover:border-primary/40 group"
                href="#demo"
              >
                <PlayCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                Watch Demo
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span>Sub-20ms Execution Speed</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0 Bans Recorded</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <ShoppingBag className="w-4 h-4 text-amber-400 shrink-0" />
                <span>FC 27 Autobuyer Engine</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Local Sandbox</span>
              </div>
            </div>

            {/* YOUTUBE VIDEO EMBED CONTAINER */}
            <div className="relative mx-auto max-w-4xl group" id="demo">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-cyan-500/20 to-primary/30 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#0d0d0d]">
                <div className="bg-[#141414] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-gray-400 ml-2">
                      EA Sports FC 27 Web App Extension Interface
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium font-mono">
                    <PlayCircle className="w-3.5 h-3.5 text-primary" />
                    Video Walkthrough
                  </div>
                </div>
                <div className="aspect-video w-full relative">
                  <LiteYouTubeEmbed
                    videoId="bfqc1hCIAoQ"
                    title="EA FC 27 Sniping Bot & Autobuyer Demonstration"
                    customPoster="/fc27-video-thumbnail.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* VERIFIED COMPATIBILITY & RECENCY SECTION (GEO / AEO Freshness Signals) */}
        <section className="py-16 bg-[#0a0a0a] border-b border-white/5" id="compatibility">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    LIVE COMPATIBILITY TRACKER
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-headline">
                    EA Sports FC 27 Web App Compatibility Log
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Continuous protocol testing ensures day-one reliability whenever EA rolls out Web App revisions.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs font-mono text-gray-400">Current Build</div>
                    <div className="text-sm font-bold text-white font-mono">v2.7.4 (Sep 17, 2026)</div>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-black flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    VERIFIED ACTIVE
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {COMPATIBILITY_LOG.map((log, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-gray-400 font-bold">
                          {log.date}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${log.statusColor}`}
                        >
                          {log.status}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                        {log.event}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {log.details}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      <span>Full FC 27 Compatibility Confirmed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FC 27 AUTOBUYER VS SNIPING BOT DEDICATED SECTION (Rich Keyword Density) */}
        <section className="py-20 lg:py-24 relative border-b border-white/5" id="autobuyer-features">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-3">
                <ShoppingBag className="w-3.5 h-3.5" />
                COMPLETE FC 27 AUTOBUYER ARCHITECTURE
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                The All-In-One <span className="text-primary italic">FC 27 Autobuyer</span> Solution
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Whether you need sub-20ms 59th-minute card sniping or fully automated 24/7 mass bidding and relisting, Elite FUT SNIPER powers your entire EA FC 27 transfer market lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pillar 1: 59th-Minute Sniping */}
              <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-black transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    59th-Minute Instant Sniping
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Detects freshly listed cards at the 59th minute and triggers buy commands in sub-20ms via in-browser DOM sockets. Perfect for capturing mispriced meta cards, high-rated fodder dips, and panic sales during 6 PM GMT content drops.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-400 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Sub-20ms direct DOM socket execution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Beats cloud bots and human traders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Instant Buy-It-Now (BIN) triggers</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-primary font-bold">
                  MODE: ULTRA-FAST SNIPING
                </div>
              </div>

              {/* Pillar 2: Automated Mass Bidding */}
              <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <SlidersHorizontal className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Algorithmic Mass Bidding
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Automates bids across dozens of player auctions entering their final seconds. Locks in cards at auction discounts well below the lowest Buy-Now price, compounding coins during overnight low-traffic market cycles.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-400 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Automated bid-step ceiling constraints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Parallel monitoring of 50+ live auctions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Zero coin overspending risk</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-cyan-400 font-bold">
                  MODE: 24/7 MASS BIDDING
                </div>
              </div>

              {/* Pillar 3: Buy-to-Relist Pipeline */}
              <div className="p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Autonomous Buy-to-Relist
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Once acquired, cards are immediately listed back onto the transfer market at customizable profit thresholds. Automatically factors in the 5% EA transfer tax to safeguard profit margins and continuously clears your unassigned pile.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-400 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Automated 5% EA tax deduction math</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Automatic relisting of expired auctions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Dynamic undercut or Futbin pricing sync</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400 font-bold">
                  MODE: AUTONOMOUS CASHFLOW
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 TECHNICAL MODULES SECTION */}
        <section className="py-20 lg:py-28 relative border-b border-white/5" id="features">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-3">
                <Bot className="w-3.5 h-3.5" />
                COMPLETE 10-MODULE ARSENAL
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Engineered for Total <span className="text-primary italic">FC 27 Market Supremacy</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                From sub-20ms 59th-minute card sniping to autonomous 1-click AI SBC solving, explore every module built into the Elite FUT SNIPER FC 27 autobuyer suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURE_MODULES.map((module) => {
                const IconComponent = module.icon;
                return (
                  <div
                    key={module.num}
                    className="p-6 sm:p-7 rounded-2xl bg-[#111111]/80 hover:bg-[#161616] border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[35px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-black text-primary font-mono">
                          {module.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${module.badgeColor}`}
                      >
                        {module.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <div className="text-xs font-mono text-gray-400 mb-3">
                      {module.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                      {module.description}
                    </p>

                    <div className="pt-4 border-t border-white/5 space-y-2">
                      {module.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-gray-300 font-medium"
                        >
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPARISON BENCHMARK TABLE */}
        <section className="py-20 bg-[#090909] border-b border-white/5" id="comparison">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-3">
                <Flame className="w-3.5 h-3.5" />
                TECHNICAL BENCHMARKS
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Why Local Chrome Sniping <span className="text-primary italic">Crushes Cloud Bots</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Discover the architectural differences between local client-side execution, remote cloud proxies, and manual trading on the FC 27 Web App.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#121212]/80 shadow-2xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-gray-400 font-bold">
                      Feature &amp; Metric
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-primary font-black bg-primary/10 border-x border-primary/20">
                      Elite FUT SNIPER
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-rose-400 font-bold">
                      Cloud Proxy Autobuyers
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-gray-400 font-bold">
                      Manual Web App Trading
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-emerald-300 bg-primary/[0.04] border-x border-primary/20">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span>{row.elite}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-rose-300/80">
                        <div className="flex items-center gap-1.5">
                          <X className="w-4 h-4 text-rose-400 shrink-0" />
                          <span>{row.cloud}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-gray-400">
                        {row.manual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/tools/comparison-guide"
                className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-primary transition-colors underline underline-offset-4"
              >
                <span>Read our full 36-competitor comparison breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4-STEP HOW IT WORKS PROCESS */}
        <section className="py-20 lg:py-28 relative border-b border-white/5" id="how-it-works">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-3">
                <Compass className="w-3.5 h-3.5" />
                4-STEP ONBOARDING
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Start Sniping in <span className="text-primary italic">Under 2 Minutes</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                Zero complex command-line scripts or password uploads. Simply install, dock in Chrome, set your target price, and activate the FC 27 autobuyer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEP_PROCESS.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.num}
                    className="p-6 rounded-2xl bg-[#111111]/80 hover:bg-[#161616] border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-3xl font-black text-primary font-mono">
                          {step.num}
                        </span>
                        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span className="text-primary">{step.badge}</span>
                      <span>Verified ✓</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRO TRADING STRATEGIES ARTICLE CARD */}
        <section className="py-20 bg-[#090909] border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                  Trading Intel
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Confirmed Functional for Sep 17 FC 27 Web App Update
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Mastering the 59th Minute with the <span className="text-primary">FC 27 Autobuyer Suite</span>
              </h2>

              <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  During high-volume market windows—such as daily 6 PM GMT content drops, Marquee Matchups, Team of the Week announcements, and Weekend League reward distributions—thousands of casual gamers list valuable meta cards significantly below true market value.
                </p>
                <p>
                  Manual traders cannot refresh searches and click fast enough to beat automated bots. <strong>Elite FUT SNIPER</strong> levels the playing field by executing searches and buy orders locally in <strong>sub-20 milliseconds</strong>, locking in profitable flips before cards appear on rival screens.
                </p>
                <p>
                  Paired with our <strong>1-Click AI SBC Solver</strong>, automated <strong>Mass Bidding Engine</strong>, and automated <strong>5% EA Tax Relisting</strong>, you compound coin balances hands-free without ever risking your EA login credentials.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/register"
                  className="px-6 py-3 bg-primary text-black font-bold text-sm rounded-xl hover:bg-white transition-all flex items-center gap-2"
                >
                  Create Trial Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/tools/sniping-guide"
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Read Ultimate Sniping Guide
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 bg-[#070707] border-b border-white/5" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Everything You Need to <span className="text-primary italic">Know</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                Direct answers regarding FC 27 compatibility, September 17 updates, autobuyer speed, safety, and setup.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-primary/40 transition-all"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-2.5">
                    <span className="text-primary font-mono text-sm shrink-0 mt-0.5">
                      0{index + 1}.
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6 sm:pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM FINAL CALL TO ACTION */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0c0c0c] border border-primary/30 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                Verified Working • Sep 17 FC 27 Web App Update • 100% Ban Safe
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Ready to Dominate the <span className="text-primary">FC 27 Transfer Market</span>?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                Join thousands of Ultimate Team traders using the Elite FUT SNIPER autobuyer to generate millions of coins safely every week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  className="px-8 py-4 bg-primary text-black font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
                  href="/register"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
                  href="https://discord.gg/Rkb9nF6WG6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Join Discord VIP Community
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  Zero Credit Card Required for Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  Now Fully Compatible for FC 27
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  24/7 Live Discord Support
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
