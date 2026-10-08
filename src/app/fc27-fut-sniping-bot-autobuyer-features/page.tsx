import type { Metadata } from "next";
import Link from "next/link";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import SetDocumentLang from "@/components/SetDocumentLang";
import { getHreflangAlternates } from "@/data/locales/registry";
import EliteFeaturesSection from "@/components/EliteFeaturesSection";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag,
  Sliders,
  TrendingUp,
  Cpu,
  Layout,
  Globe,
  MessageSquare,
  BarChart3,
  Lock,
  Sparkles,
  HelpCircle,
  Clock,
  Coins,
  CheckCircle2,
  Wallet,
  Filter,
  Shield,
  XCircle,
  MousePointerClick,
  Activity,
  Check,
  PlayCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "FREE FC 27 Sniping Bot & Autobuyer Features | Elite FUT Bot",
  },
  description:
    "Explore Elite FUT Bot features for EA FC 27: auto-snipe, autobuyer, auto-list, smart filters, FUTBIN & FUTGG pricing, free trading filters and a 7-day free trial.",
  keywords:
    "fc27 fut sniping bot features, ea fc 27 autobuyer features, fut snipe bot, humanization anti ban, futbin price sync, futgg price sync, local chrome extension, fc27 transfer market bot, elite fut sniper, fc27 autobuyer settings, 59th minute sniping bot",
  alternates: {
    canonical: "https://www.elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
    languages: getHreflangAlternates("/fc27-fut-sniping-bot-autobuyer-features"),
  },
  openGraph: {
    title: "FREE FC 27 Sniping Bot & Autobuyer Features | Elite FUT Bot",
    description:
      "Explore Elite FUT Bot features for EA FC 27: auto-snipe, autobuyer, auto-list, smart filters, FUTBIN & FUTGG pricing, free trading filters and a 7-day free trial.",
    type: "website",
    url: "https://www.elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FREE FC 27 Sniping Bot & Autobuyer Features | Elite FUT Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE FC 27 Sniping Bot & Autobuyer Features | Elite FUT Bot",
    description:
      "Explore Elite FUT Bot features for EA FC 27: auto-snipe, autobuyer, auto-list, smart filters, FUTBIN & FUTGG pricing, free trading filters and a 7-day free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

const FEATURES = [
  {
    num: "01",
    title: "Auto Snipe",
    tagline: "Sub-20ms High-Frequency Market Scanner",
    description:
      "Continuously scans transfer market pagination in sub-20ms execution loops, detecting mispriced cards the instant they enter the 59th-minute window and confirming purchases before rival cloud bots or human competitors can trigger a request.",
    icon: Zap,
    badge: "Core Velocity",
    specs: ["< 20ms local trigger latency", "Instant buy-now confirmation", "Custom max purchase limit caps"],
  },
  {
    num: "02",
    title: "Auto-Bidding Engine",
    tagline: "Automated Auction Sniping with Bid Ceilings",
    description:
      "Automatically places high-speed, calculated bids on expiring transfer market auctions. Capitalizes on underpriced cards right before auctions expire with strict bid ceiling bounds to prevent overpaying.",
    icon: Coins,
    badge: "v1.0.20 Auto-Bidder",
    specs: ["Expiring auction bid sniping", "Customizable bid ceiling limits", "Outbids rivals below market value"],
  },
  {
    num: "03",
    title: "Auto List & Auto Sell",
    tagline: "Autonomous Inventory Liquidity Engine",
    description:
      "Immediately pushes acquired cards to your transfer market list at predetermined profit multipliers or automated FUTBIN & FUTGG undercut bounds. Keeps club liquid coin balances compounding around the clock without manual supervision.",
    icon: TrendingUp,
    badge: "Cashflow",
    specs: ["Automated 5% EA tax deduction", "Configurable undercut margins", "Automatic expired item relisting"],
  },
  {
    num: "04",
    title: "Multi-Filter Search & Consumables Matrix",
    tagline: "Country, Club, League, Position, Rarity, Rating & Consumables",
    highlight: true,
    tags: [
      "Country / Nation",
      "Club",
      "League",
      "Position",
      "Gold / Silver / Bronze",
      "Card Rarity",
      "83+ / 84+ / 88+ Fodder",
      "Consumables",
    ],
    description:
      "Execute simultaneous multi-filter search queries across every transfer market parameter: Country/Nation, Club, League, Position, Quality (Gold, Silver, Bronze), Card Rarity (TOTW, Promos, Icons, Heroes), and specific Player Ratings (83+, 84+, 88+). Filter consumables directly (Hunter, Shadow, Position Modifiers, Contracts, Managers) or target player listings with valuable consumable options pre-applied.",
    icon: Sliders,
    badge: "v1.0.20 All Market Filters",
    specs: [
      "Simultaneous queries across Country, Club, League & Position",
      "Target exact player ratings (83+, 84+, 88+) for promo SBC fodder",
      "Gold, Silver, Bronze, card rarities & full consumables matrix",
    ],
  },
  {
    num: "05",
    title: "FUTBIN & FUTGG Live Price Reference",
    tagline: "Real-Time Dual-Source Valuation Overlay",
    description:
      "Integrates live pricing feeds from both FUTBIN and FUTGG directly into the Ultimate Team Web App interface. Displays real-time player values, hourly market fluctuations, and profit thresholds on every search card to prevent buying over-inflated listings.",
    icon: Tag,
    badge: "Live Telemetry",
    specs: ["Dual-source price badge overlay", "Real-time pricing cache", "Zero manual window switching"],
  },
  {
    num: "06",
    title: "Anti-Detection Engine",
    tagline: "Non-Linear Request Interval Pacing",
    description:
      "Applies Gaussian delay curves (1,200ms–2,800ms) with algorithmic jitter and randomized micro-pauses between transfer searches, ensuring request cadences remain mathematically indistinguishable from authentic human trading behavior.",
    icon: Cpu,
    badge: "Stealth Core",
    specs: ["Gaussian distribution timing", "Randomized session breaks", "Adaptive delay thresholds"],
  },
  {
    num: "07",
    title: "Humanization++ Mode",
    tagline: "0 Transfer Market Bans To Date",
    description:
      "Engineered specifically in response to EA automated anti-cheat detection waves. Generates realistic Bézier mouse trajectories, randomized micro-jitter movements, natural button dwell times, and variable scroll pacing directly inside the browser DOM.",
    icon: ShieldCheck,
    badge: "Flagship Safety",
    isFeatured: true,
    specs: [
      "Smooth mathematical Bézier curves",
      "Dynamic pixel micro-jitter",
      "Human dwell & click simulation",
      "Zero server bans across all seasons",
    ],
  },
  {
    num: "08",
    title: "Native Chrome Side Panel UI",
    tagline: "Docked Non-Intrusive Workspace",
    description:
      "Runs completely inside Google Chrome's native Side Panel API. Your controls, active search presets, session telemetry, and safety dials remain clearly accessible alongside the Web App without obstructing cards or menus.",
    icon: Layout,
    badge: "HUD Interface",
    specs: ["Chrome Side Panel native integration", "Zero viewport overlap", "Dark-mode optimized HUD"],
  },
  {
    num: "09",
    title: "Web Command Dashboard",
    tagline: "Centralized Account & License Hub",
    description:
      "Manage your 365-day license credentials, monitor session statistics, adjust global trading presets, and synchronize extension configurations from a dedicated web dashboard accessible on any desktop device.",
    icon: Globe,
    badge: "Cloud Sync",
    specs: ["Instant 1-click license activation", "Live multi-device status", "Cloud profile backups"],
  },
  {
    num: "10",
    title: "Free Discord Filters & VIP Alpha",
    tagline: "Daily Free Filters, Low-Budget Trading Tips & Tricks",
    description:
      "Instant free access to our Discord trading server. Get daily free low-budget trading filters, market tricks, and coin-compounding setups to make more coins every day without risking your balance. Plus, Paid Members unlock exclusive VIP Alpha channels with high-margin meta snipe drops (50k–500k+ profit per card) and direct 1-on-1 developer support.",
    icon: MessageSquare,
    badge: "Free Filters & VIP Alpha",
    specs: [
      "Daily free low-budget trading filters & coin tricks",
      "Regular market crash alerts, SBC fodder trends & flip tips",
      "VIP Paid-Member Alpha channels with high-margin meta drops",
      "24/7 technical setup assistance & verified trader lounge",
    ],
  },
  {
    num: "11",
    title: "Live Stats & Profit Sync",
    tagline: "Real-Time Ledger & Coin Analytics",
    description:
      "Live HUD displays snipes executed, total coins spent, gross revenue, active running time, and accurate net profit after automatically deducting the 5% EA transfer market tax, giving you total transparency on session ROI.",
    icon: BarChart3,
    badge: "Analytics",
    specs: ["Automated 5% EA tax deduction", "Live session coin counter", "Real-time win-rate tracking"],
  },
  {
    num: "12",
    title: "Secure Client-Side Auth",
    tagline: "Zero-Knowledge Local Sandboxing",
    description:
      "Authenticates once via Elite FUT SNIPER API. Your EA login credentials, authentication cookies, and persona tokens operate 100% locally within your browser sandbox and are never uploaded or accessible to remote third-party servers.",
    icon: Lock,
    badge: "Zero-Knowledge",
    specs: ["Zero password transmission", "Local browser cookie sandboxing", "Encrypted key validation"],
  },
];

const OUTPERFORM_COMPARISON = [
  {
    feature: "Search Latency",
    elite: "< 20ms (Local in-browser direct socket)",
    cloud: "150ms–350ms (Datacenter proxy hop)",
    highlight: true,
  },
  {
    feature: "EA Account Safety",
    elite: "Zero password sharing (100% client-side)",
    cloud: "Requires uploading EA password & cookies",
    highlight: true,
  },
  {
    feature: "Anti-Ban Detection",
    elite: "Humanization++ (Bézier mouse curves & jitter)",
    cloud: "Basic linear timers (High ban probability)",
    highlight: true,
  },
  {
    feature: "Bans Recorded",
    elite: "0 Transfer Market Bans To Date",
    cloud: "Frequent automated ban waves",
    highlight: true,
  },
  {
    feature: "Developer Heritage",
    elite: "FutSniping Bot Dev Team (5+ yrs proven track record)",
    cloud: "Anonymous copycat script providers",
    highlight: false,
  },
  {
    feature: "FUTBIN & FUTGG Live Pricing",
    elite: "Directly embedded in Web App interface (Dual-Source)",
    cloud: "Requires manual external tab lookups",
    highlight: false,
  },
  {
    feature: "Pricing Model",
    elite: "$19.99 One-Time Payment (365 Full Days)",
    cloud: "$15–$30/mo recurring subscriptions",
    highlight: false,
  },
  {
    feature: "Cross-Title Coverage",
    elite: "Covers both FC 26 & FC 27 seamlessly",
    cloud: "Forces users to purchase new yearly copies",
    highlight: false,
  },
  {
    feature: "Daily Discord Trading Filters & Coin Tips",
    elite: "Free daily low-budget filters, tricks & VIP pro alpha drops",
    cloud: "None (zero trading filters or expensive signal upsells)",
    highlight: true,
  },
];

const OUTPERFORM_POINTS = [
  {
    title: "Snipe Automatically",
    desc: "Our high-speed engine reacts in sub-20 milliseconds, executing snipes faster than any human reflex or cloud proxy bot.",
    icon: Zap,
  },
  {
    title: "List Automatically",
    desc: "Instant listing triggers immediately after purchase, maximizing coin velocity with non-stop inventory turnover.",
    icon: TrendingUp,
  },
  {
    title: "FUTBIN & FUTGG Integration",
    desc: "Live market prices from both FUTBIN and FUTGG display right inside the Web App interface so you always buy below market value.",
    icon: Tag,
  },
  {
    title: "Stealth & Security",
    desc: "100% Local: Runs directly in your browser session. Your EA password and cookies are never sent to third-party servers.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Filter Search",
    desc: "Run multiple player search queries simultaneously across Country/Nation, Club, League, Position, Gold/Silver/Bronze quality, Card Rarity (TOTW, Promos, Icons), and custom market criteria.",
    icon: Filter,
    highlight: true,
    badge: "v1.0.20 All Filters",
    tags: ["Country", "Club", "League", "Position", "Rarity", "83+ Fodder", "Consumables"],
  },
  {
    title: "Snipe by Rating",
    desc: "Laser-target specific player ratings (83+, 84+, 88+) with surgical precision — ideal for promo SBC fodder trading and high-volume sweeps.",
    icon: Sliders,
  },
  {
    title: "All FUT Cards & Consumables",
    desc: "All players across all skill and club tiers, and all consumables (Hunter, Shadow, Position Modifiers, Contracts, Managers) can be searched, filtered, and sniped instantly.",
    icon: Sparkles,
  },
  {
    title: "Snipe Price Calculator",
    desc: "Automated optimal price setting ensures you buy at a threshold that guarantees net profit after the 5% EA tax.",
    icon: Coins,
  },
  {
    title: "Profit Calculator",
    desc: "Track coin earnings in real time. See exactly how many coins your active session has generated.",
    icon: Wallet,
  },
  {
    title: "Safe Sniping Safeguards",
    desc: "Comprehensive coin protection ceilings and balance locks keep your club's budget safe while automating.",
    icon: Shield,
  },
  {
    title: "Free Discord Trading Filters & Daily Tips",
    desc: "Daily free sniping filters, low-budget trading tips, and coin-making tricks shared in Discord to help you compound coins safely every day.",
    icon: MessageSquare,
  },
  {
    title: "One Time Purchase",
    desc: "365 days of full access. Your license remains valid and updated across both EA FC 26 and FC 27.",
    icon: Clock,
  },
];

const FAQS = [
  {
    q: "What is Elite FUT SNIPER and how does it work for FC 26 & FC 27?",
    a: "Elite FUT SNIPER is a 100% local Chrome extension autobuyer and sniping bot designed for EA FC 26 and FC 27 Ultimate Team. It injects directly into the official EA Web App to automate market filtering, 59th-minute sniping, and auto-relisting at sub-20ms speeds without sending your credentials or session data to external cloud servers.",
  },
  {
    q: "How does Humanization++ Mode prevent transfer market bans in FC 27?",
    a: "Unlike traditional bots that send repetitive raw HTTP requests, Humanization++ generates authentic human-like DOM interactions: smooth mathematical Bézier mouse paths, pixel micro-jitter, randomized click coordinates, and Gaussian delay intervals (1,200ms–2,800ms). It has maintained a clean record of 0 transfer market bans to date.",
  },
  {
    q: "Why is local browser execution faster and safer than cloud-based bots?",
    a: "Local browser execution operates directly on your local machine using your home residential IP address, achieving sub-20ms search speeds with 0ms datacenter overhead. Cloud bots (like FutEarn or FUT Hunter) require your EA password, route requests through datacenter IPs that trigger instant EA security flags, and suffer 150ms–350ms of network latency.",
  },
  {
    q: "Does my license cover both EA FC 26 and the upcoming EA FC 27 Web App?",
    a: "Yes. Every Elite FUT SNIPER license includes 365 full days of access. When EA releases new season Web App updates, our development team pushes automated extension updates at zero additional upgrade cost.",
  },
  {
    q: "Can I run multiple sniping accounts or multiple tabs simultaneously?",
    a: "Yes. Because the extension runs locally in Google Chrome, you can set up separate Chrome browser profiles to operate multiple accounts concurrently with independent filter configurations and isolated session cookies.",
  },
];

export default function FC27FeaturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Elite FUT SNIPER – FC 26 & FC 27 Trading Suite",
        "inLanguage": "en",
        "operatingSystem": "Chrome OS, Windows, macOS, Linux",
        "applicationCategory": "BrowserApplication",
        "image": "https://www.elitefutbot.com/og-image.png",
        "brand": {
          "@type": "Brand",
          "name": "Elite FUT SNIPER",
        },
        "description":
          "100% local Chrome extension autobuyer and sniping bot for EA FC 26 & FC 27. Sub-20ms market search, Humanization++ anti-ban technology with 0 bans to date, live FUTBIN & FUTGG pricing, and 365-day licensing.",
        "offers": {
          "@type": "Offer",
          "url": "https://www.elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
          "price": "19.99",
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
        },
        "featureList": FEATURES.map((f) => `${f.num} ${f.title}: ${f.tagline}`),
      },
      {
        "@type": "ItemList",
        "name": "Elite FUT SNIPER 12-Module Features Arsenal",
        "inLanguage": "en",
        "itemListElement": FEATURES.map((feat, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": `${feat.num} ${feat.title}`,
          "description": feat.description,
        })),
      },
      {
        "@type": "FAQPage",
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
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.elitefutbot.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Features",
            "item": "https://www.elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-dark text-white min-h-screen">
      <SetDocumentLang lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-primary/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>v1.0.20 Update Live • Multi-Filter, Auto-Bidding &amp; Consumables</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6">
            Everything You Need to <br className="hidden sm:inline" />
            <span className="bg-primary text-dark px-2 rounded box-decoration-clone">Snipe</span>, Flip &amp; Profit
          </h1>

          {/* Standalone AEO / GEO Definition Passage (40-60 Words) */}
          <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 mb-8 text-left">
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
              <strong className="text-primary font-bold">Elite FUT SNIPER</strong> is a 100% local Chrome extension autobuyer and sniping suite for EA FC 26 and FC 27. Featuring our new v1.0.20 update with multi-filter search (country/nation, club, league, position, card rarity, specific ratings 83+, Gold/Silver/Bronze, consumables &amp; chem styles), and high-frequency auto-bidding, it operates in sub-20ms cycles with Humanization++ Bézier anti-detection physics and <strong className="text-white">0 transfer market bans to date</strong> across all seasons.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
            >
              Start Free 7-Day Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:border-primary/40 group backdrop-blur-sm"
            >
              <PlayCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              Watch Demo
            </a>
            <Link
              href="#features-list"
              className="w-full sm:w-auto px-6 py-4 text-gray-400 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5"
            >
              Explore 12 Modules
            </Link>
          </div>

          {/* Quick Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left mb-12">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Anti-Ban</div>
              <div className="text-sm font-bold text-white mt-0.5">Humanization++</div>
              <div className="text-xs text-gray-300">0 bans reported to date</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Execution Speed</div>
              <div className="text-sm font-bold text-white mt-0.5">&lt; 20ms Search</div>
              <div className="text-xs text-gray-300">Fastest browser reaction</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Architecture</div>
              <div className="text-sm font-bold text-white mt-0.5">100% Local Client</div>
              <div className="text-xs text-gray-300">Zero cloud server relay</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Engineering</div>
              <div className="text-sm font-bold text-white mt-0.5">FutSniping Bot Dev Team</div>
              <div className="text-xs text-gray-300">5+ yrs proven pedigree</div>
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
      </section>

      {/* Feature Grid Section (01 - 12) */}
      <section id="features-list" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-3">
            Core Arsenal // 12 Modules
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Engineered For Extreme Speed &amp; Total Stealth
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            Every module in Elite FUT SNIPER is purpose-built to deliver an insurmountable competitive edge on the FC 26 &amp; FC 27 transfer market while protecting your account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            const isFeatured = "isFeatured" in feat && Boolean(feat.isFeatured);
            const isHighlight = "highlight" in feat && Boolean(feat.highlight);
            const tags = "tags" in feat && Array.isArray(feat.tags) ? feat.tags : [];

            return (
              <div
                key={feat.num}
                className={`rounded-2xl p-6 relative flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-gradient-to-b from-primary/[0.14] via-dark to-dark border-2 border-primary shadow-[0_0_35px_rgba(204,255,0,0.18)] md:col-span-2 lg:col-span-2 ring-1 ring-primary/40"
                    : isHighlight
                    ? "bg-gradient-to-b from-primary/[0.10] via-[#13160e] to-dark border-2 border-primary/60 shadow-[0_0_35px_rgba(204,255,0,0.16)] ring-1 ring-primary/30"
                    : "glass-card hover:border-white/20"
                }`}
              >
                {isHighlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-10 rounded-xl grid place-items-center ${
                          isFeatured || isHighlight
                            ? "bg-primary text-dark font-black shadow-md shadow-primary/20"
                            : "bg-primary/10 border border-primary/20 text-primary"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-gray-400">
                        {feat.num} {"//"}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isFeatured || isHighlight
                          ? "bg-primary text-dark font-black"
                          : "bg-white/5 text-gray-300 border border-white/10"
                      }`}
                    >
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                    {feat.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-primary mb-3">
                    {feat.tagline}
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-primary/40 group-hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-1.5 mb-2">
                    {feat.specs.map((sp, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ELITE FUT SNIPER FEATURES — autobuyer angle */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <EliteFeaturesSection
          badge="Autobuyer Feature Breakdown"
          headingPre="How the FC 27 Autobuyer"
          headingHighlight="Works for You"
          description="Every module in the suite works together — snipe fast, bid smart, sell automatically, and keep your account safe. Here’s the full capability breakdown."
          ctaLabel="Get the Bot — Free Trial"
          ctaHref="/register"
          secondaryLabel="See FC 27 Sniping Bot"
          secondaryHref="/fc27-fut-snipe-bot"
          imageSrc="/snipe-guide-bot-advanced.png"
          imageAlt="Elite FUT SNIPER FC 27 autobuyer feature configuration — action delay, sleep settings, limits and tax-aware auto-list"
          imagePill="Autobuyer Settings"
          sectionId="autobuyer-breakdown"
        />
      </div>

      {/* Humanization++ Deep Dive Flagship Section */}
      <section className="py-20 bg-dark relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.04] blur-[150px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-primary/[0.1] via-[#111] to-dark border-2 border-primary shadow-[0_0_50px_rgba(204,255,0,0.15)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-dark font-mono text-xs font-black uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Flagship Stealth Protocol</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-white mb-4">
                  Humanization++ Mode: <br />
                  <span className="text-primary">0 Bans Across All Seasons</span>
                </h2>
                <p className="text-gray-200 text-base leading-relaxed mb-6 font-normal">
                  Standard bot scripts send predictable, robotic fetch requests directly to API endpoints. When EA&apos;s automated anti-cheat inspects DOM activity, non-human patterns are instantly flagged. <strong className="text-white">Humanization++</strong> eliminates this vulnerability by replicating physical human trading mechanics inside the browser.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="p-3.5 rounded-xl bg-dark/70 border border-white/10">
                    <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                      <MousePointerClick className="w-4 h-4 text-primary" />
                      Bézier Mouse Physics
                    </div>
                    <p className="text-xs text-gray-400">Curved velocity trajectories that replicate authentic arm and wrist mouse movement.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-dark/70 border border-white/10">
                    <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                      <Activity className="w-4 h-4 text-primary" />
                      Randomized Micro-Jitter
                    </div>
                    <p className="text-xs text-gray-400">Natural sub-pixel micro-tremors and variable click dwell times on all buttons.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-dark border border-white/15 text-center shrink-0 w-full lg:w-72">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-1">Safety Record</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-display my-2">0 BANS</div>
                <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 py-1 px-2.5 rounded-full border border-emerald-500/30 inline-block mb-3">
                  Verified Clean Record
                </div>
                <p className="text-xs text-gray-400">Tested across 14,000+ user sessions in FC 26 &amp; FC 27.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Outperform Everything (Architectural Comparison Table) */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-3">
              Architectural Advantage
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
              Why We Outperform Everything.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Elite FUT SNIPER outperforms competitor bots because it runs <strong className="text-white">100% locally inside your browser</strong> rather than relying on external cloud servers. Developed by the legendary <strong className="text-white">FutSniping Bot Dev Team</strong>, this secure architecture eliminates datacenter ping latency, ensuring you snipe FC 26 &amp; FC 27 players in milliseconds without compromising account safety.
            </p>
          </div>

          {/* Comparison Table for Answer Engines & Users */}
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-5 px-6 text-gray-300 font-bold text-xs uppercase tracking-wider">Trading Benchmark</th>
                    <th className="py-5 px-6 text-primary font-black text-sm uppercase tracking-wider bg-primary/10 border-l border-r border-primary/20">
                      Elite FUT SNIPER (Local Client)
                    </th>
                    <th className="py-5 px-6 text-gray-400 font-bold text-xs uppercase tracking-wider">
                      Cloud Autobuyers (FutEarn, Hunter, etc.)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {OUTPERFORM_COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-white">{row.feature}</td>
                      <td className="py-4 px-6 bg-primary/[0.04] border-l border-r border-primary/15 font-semibold text-primary">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{row.elite}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-400/60 shrink-0" />
                          <span>{row.cloud}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 12 Outperform Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OUTPERFORM_POINTS.map((pt) => {
              const Icon = pt.icon;
              const isHighlight = "highlight" in pt && Boolean(pt.highlight);
              const tags = "tags" in pt && Array.isArray(pt.tags) ? pt.tags : [];
              const badge = "badge" in pt && typeof pt.badge === "string" ? pt.badge : null;
              return (
                <div
                  key={pt.title}
                  className={`p-5 rounded-2xl transition-all relative overflow-hidden ${
                    isHighlight
                      ? "bg-gradient-to-b from-primary/[0.12] via-[#14170d] to-dark border-2 border-primary/60 shadow-[0_0_30px_rgba(204,255,0,0.15)] ring-1 ring-primary/30"
                      : "bg-dark/70 border border-white/10 hover:border-primary/40"
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`size-9 rounded-xl grid place-items-center ${
                        isHighlight
                          ? "bg-primary text-dark font-black shadow-md shadow-primary/20"
                          : "bg-primary/10 border border-primary/20 text-primary"
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    {badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/40">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    <span>{pt.title}</span>
                  </h3>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* On The Roadmap Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white/[0.04] to-dark border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>On the Roadmap // Actively in Development</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">
                Soon // AI SBC Solver Module
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
                Actively in development, not live yet — our upcoming AI engine auto-solves Squad Building Challenges using unassigned players and club fodder, calculating the mathematical cheapest combination to satisfy rating, chemistry, and league requirements.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>In Active Core Development</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark/90 border border-white/10 text-center shrink-0 min-w-[240px]">
              <div className="text-xs text-primary font-mono font-bold uppercase tracking-widest mb-1">
                365-Day License
              </div>
              <div className="text-2xl font-black text-white font-display mb-2">
                Free Feature Update
              </div>
              <p className="text-xs text-gray-400">
                All active license holders receive automatic access on deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO & LLM Citable Q&A) */}
      <section className="py-20 bg-surface border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-2">
              Verified Intel
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Master the <br />
            <span className="text-primary">FC 26 &amp; FC 27 Market?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal">
            Join thousands of traders using Elite FUT SNIPER to generate millions of coins every week. Start your 7-day free trial right now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="px-10 py-5 bg-primary text-dark font-black text-lg uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
            >
              Activate Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-white/5 border border-white/10 text-white font-bold text-base uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Join VIP Discord
            </Link>
          </div>
          <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mt-6">
            Instant Activation · No Credit Card Required · 100% Local Extension
          </p>
        </div>
      </section>
    </div>
  );
}
