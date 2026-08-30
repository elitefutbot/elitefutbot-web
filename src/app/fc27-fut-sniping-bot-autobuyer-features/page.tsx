import type { Metadata } from "next";
import Link from "next/link";
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
  Tv,
  Wallet,
  Filter,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EA FC 27 Sniping Bot & Autobuyer Features – Everything You Need to Snipe | Elite FUT SNIPER",
  description:
    "Explore all features of Elite FUT SNIPER for EA FC 26 & FC 27. Auto sniping, Humanization++ anti-ban technology, live Futbin price reference, sub-20ms speed, side panel UI, and smart filters.",
  keywords:
    "fc27 fut sniping bot features, ea fc 27 autobuyer features, fut snipe bot, humanization anti ban, futbin price sync, local chrome extension, fc27 transfer market bot, elite fut sniper",
  alternates: {
    canonical: "https://elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
  },
  openGraph: {
    title: "EA FC 27 Sniping Bot & Autobuyer Features | Elite FUT SNIPER",
    description:
      "Everything you need to snipe, flip, and dominate the FC 26 & FC 27 transfer market. 100% local Chrome extension with zero bans to date.",
    type: "website",
    url: "https://elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
    images: [
      {
        url: "https://elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT SNIPER Features Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 Sniping Bot & Autobuyer Features | Elite FUT SNIPER",
    description:
      "Sub-20ms market scanning, Humanization++ anti-ban engine, Futbin pricing, and automated relisting for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

const FEATURES = [
  {
    num: "01",
    title: "Auto Snipe",
    tagline: "Sub-20ms Ultra-Fast Execution",
    description:
      "Scans transfer market listings in sub-20 millisecond micro-cycles and automatically purchases players matching your exact price, rating, and rarity criteria — executing buy actions exponentially faster than manual clicking.",
    icon: Zap,
    badge: "Core Engine",
  },
  {
    num: "02",
    title: "Auto List & Auto Sell",
    tagline: "Automated Profit Realization",
    description:
      "Instantly relists newly sniped cards at your predetermined sell margin or auto-sells them at true market value. Flips inventory 24/7 without needing you to babysit your transfer list.",
    icon: TrendingUp,
    badge: "Automation",
  },
  {
    num: "03",
    title: "Smart Filters & Multi-Search",
    tagline: "Surgical Market Targeting",
    description:
      "Define min/max buy-now, bid limits, exact player ratings, chemistry styles, and position modifiers. Run multiple player searches concurrently to cast a wider net across profitable market sectors.",
    icon: Sliders,
    badge: "Precision",
  },
  {
    num: "04",
    title: "Futbin Price Reference",
    tagline: "Live Real-Time Market Valuation",
    description:
      "Pulls live pricing telemetry directly from Futbin and overlays true market values inside the Web App interface. Trade against accurate live data, completely eliminating guesswork and overbidding.",
    icon: Tag,
    badge: "Market Intel",
  },
  {
    num: "05",
    title: "Anti-Detection Engine",
    tagline: "Natural Humanized Cadence",
    description:
      "Configurable, non-linear request delays and randomized interval pacing ensure your market interactions mirror the natural browsing rhythm of an active human trader.",
    icon: Cpu,
    badge: "Stealth",
  },
  {
    num: "06",
    title: "Humanization++",
    tagline: "0 Transfer Market Bans To Date",
    description:
      "Engineered specifically in response to EA automated detection waves. Simulates realistic Bézier mouse curves, authentic click coordinates, natural hover pauses, and dynamic scroll velocity so the extension interacts with the DOM exactly as a real person does.",
    icon: ShieldCheck,
    badge: "Flagship Stealth",
    isFeatured: true,
  },
  {
    num: "07",
    title: "Native Chrome Side Panel UI",
    tagline: "Zero-Interruption Workspace",
    description:
      "Runs directly within Chrome's native Side Panel API. All controls, filter presets, and live logs dock neatly beside the Ultimate Team Web App without covering or obstructing the gameplay window.",
    icon: Layout,
    badge: "UX Design",
  },
  {
    num: "08",
    title: "Web Command Dashboard",
    tagline: "Centralized Account Control",
    description:
      "Manage your license keys, monitor session status, update trading profiles, and adjust global configuration settings from an intuitive modern web portal — no digging through complex browser settings.",
    icon: Globe,
    badge: "Cloud Sync",
  },
  {
    num: "09",
    title: "Free Discord VIP Support",
    tagline: "Community Intel & Filter Drops",
    description:
      "Join our private Discord community for instant technical support, setup guidance, daily high-ROI filter drops, and collaborative trading strategies with fellow verified members at zero additional fee.",
    icon: MessageSquare,
    badge: "Community",
  },
  {
    num: "10",
    title: "Live Stats & Profit Sync",
    tagline: "Real-Time Telemetry & Earnings",
    description:
      "Track snipes executed, total coins generated, active session duration, and estimated net profit (including automated 5% EA tax deduction) in real time while your bot runs.",
    icon: BarChart3,
    badge: "Analytics",
  },
  {
    num: "11",
    title: "Secure Client-Side Auth",
    tagline: "100% Local Privacy Protection",
    description:
      "Authenticate seamlessly with your Elite FUT SNIPER account. Your EA login credentials, cookies, and session tokens remain strictly inside your local browser and are never uploaded to remote third-party servers.",
    icon: Lock,
    badge: "Zero-Knowledge",
  },
];

const OUTPERFORM_POINTS = [
  {
    title: "Snipe Automatically",
    desc: "Sub-20ms ultra-responsive search loops capture deals before human traders or cloud-hosted bots even render them.",
    icon: Zap,
  },
  {
    title: "List Automatically",
    desc: "Instant listing triggers immediately after a snipe, maintaining maximum liquidity and continuous coin turnaround.",
    icon: TrendingUp,
  },
  {
    title: "Futbin Integration",
    desc: "Live pricing feeds display real-time player values in your transfer interface so every buy is backed by accurate data.",
    icon: Tag,
  },
  {
    title: "100% Local Stealth",
    desc: "Runs exclusively on your device. Zero datacenter IP flags, zero credential transmission, and 100% localized browser security.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Filter Search",
    desc: "Search across multiple players, rating brackets, and rarity categories concurrently to maximize market coverage.",
    icon: Filter,
  },
  {
    title: "Snipe by Rating",
    desc: "Laser-target specific card ratings (83+, 84+, 88+) — ideal for high-profit SBC fodder trading during major promos.",
    icon: Sliders,
  },
  {
    title: "Auto Rarity Filler",
    desc: "Intelligent card rarity detection selects proper filters automatically, eliminating manual configuration errors.",
    icon: Sparkles,
  },
  {
    title: "Snipe Price Calculator",
    desc: "Calculates optimal purchase thresholds automatically with EA's 5% market tax factored in for guaranteed net profit.",
    icon: Coins,
  },
  {
    title: "Profit Calculator",
    desc: "Live ledger tracks exact coin margins and session earnings continuously as deals are bought and sold.",
    icon: Wallet,
  },
  {
    title: "Safe Sniping Safeguards",
    desc: "Configurable safety limits and coin reservation ceilings prevent overspending and protect your club balance.",
    icon: Shield,
  },
  {
    title: "Step-by-Step Video Guides",
    desc: "Master filter configurations and advanced sniping setups with detailed walkthroughs and video tutorials.",
    icon: Tv,
  },
  {
    title: "365-Day One-Time License",
    desc: "A single license covers 365 full days of access with all updates included across EA FC 26 and EA FC 27.",
    icon: Clock,
  },
];

const FAQS = [
  {
    q: "How does Elite FUT SNIPER work on EA FC 26 and FC 27?",
    a: "Elite FUT SNIPER is a native Chrome extension that runs directly inside your browser session alongside the official EA Ultimate Team Web App. It automates repetitive search, buy, and list actions locally with sub-20ms execution times without sending your account data to third-party servers.",
  },
  {
    q: "What makes Humanization++ different from ordinary sniping bots?",
    a: "Standard bots send repetitive, raw API calls at fixed intervals, making them easy targets for automated detection. Humanization++ simulates physical human interaction: smooth Bézier mouse movement trajectories, randomized click coordinates, natural hover micro-delays, and variable interval pacing. It has maintained a clean record of 0 bans to date.",
  },
  {
    q: "Does my license key transfer between FC 26 and FC 27?",
    a: "Yes! Your 365-day license grants full access across both EA FC 26 and FC 27. When EA launches new Web App versions, our development team pushes seamless extension updates included in your active plan.",
  },
  {
    q: "Can I run the bot on multiple accounts or multiple tabs?",
    a: "Yes. Because Elite FUT SNIPER operates locally inside your browser, you can utilize Chrome profiles to run isolated, concurrent sessions across multiple accounts safely.",
  },
];

export default function FC27FeaturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Elite FUT SNIPER – FC 26 & FC 27 Features",
        "operatingSystem": "Chrome OS, Windows, macOS",
        "applicationCategory": "BrowserApplication",
        "image": "https://elitefutbot.com/og-image.png",
        "brand": {
          "@type": "Brand",
          "name": "Elite FUT SNIPER",
        },
        "description":
          "Complete feature suite for EA FC 26 and FC 27 FUT Sniping Bot and Autobuyer Chrome Extension.",
        "offers": {
          "@type": "Offer",
          "url": "https://elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
          "price": "19.99",
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
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
            "item": "https://elitefutbot.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Features",
            "item": "https://elitefutbot.com/fc27-fut-sniping-bot-autobuyer-features",
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-dark text-white min-h-screen">
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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EA FC 26 &amp; FC 27 Ultimate Team Suite</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6">
            Everything You Need to <br className="hidden sm:inline" />
            <span className="bg-primary text-dark px-2 rounded box-decoration-clone">Snipe</span>, Flip &amp; Profit
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal mb-10">
            Elite FUT SNIPER handles the repetitive, high-stakes mechanics of Ultimate Team trading — continuously scanning the market in sub-20ms intervals, catching mispriced listings, and buying before anyone else can react.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
            >
              Start Free 7-Day Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#features-list"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Explore All Features
            </Link>
          </div>

          {/* Quick Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Anti-Ban</div>
              <div className="text-sm font-bold text-white mt-0.5">Humanization++</div>
              <div className="text-[11px] text-gray-300">0 bans reported to date</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Speed</div>
              <div className="text-sm font-bold text-white mt-0.5">&lt; 20ms Execution</div>
              <div className="text-[11px] text-gray-300">Fastest browser reaction</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Architecture</div>
              <div className="text-sm font-bold text-white mt-0.5">100% Local Extension</div>
              <div className="text-[11px] text-gray-300">Zero cloud server relay</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">Heritage</div>
              <div className="text-sm font-bold text-white mt-0.5">Bakers Bot Team</div>
              <div className="text-[11px] text-gray-300">Proven bot creators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section (01 - 11) */}
      <section id="features-list" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-3">
            Core Arsenal // 11 Modules
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Engineered For Pure Speed &amp; Total Stealth
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Every feature is purpose-built to give you an insurmountable technological edge on the transfer market without endangering your club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            const isFeatured = feat.isFeatured;

            return (
              <div
                key={feat.num}
                className={`rounded-2xl p-6 relative flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-gradient-to-b from-primary/[0.12] to-dark border-2 border-primary shadow-[0_0_30px_rgba(204,255,0,0.15)] md:col-span-2 lg:col-span-2"
                    : "glass-card hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-10 rounded-xl grid place-items-center ${
                          isFeatured
                            ? "bg-primary text-dark font-black"
                            : "bg-primary/10 border border-primary/20 text-primary"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-gray-400">
                        {feat.num} //
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isFeatured
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
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                    {feat.description}
                  </p>
                </div>

                {isFeatured && (
                  <div className="pt-4 border-t border-primary/20 flex flex-wrap items-center gap-3 text-xs text-gray-300">
                    <div className="flex items-center gap-1.5 text-primary font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Bézier Mouse Dynamics</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Randomized Micro-Jitter</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>0 Bans Across All Seasons</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why We Outperform Everything */}
      <section className="py-24 bg-surface border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-3">
              Architectural Advantage
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
              Why We Outperform Everything.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Elite FUT SNIPER outperforms competitor bots because it runs <strong className="text-white">100% locally inside your browser</strong> rather than relying on shared datacenter cloud servers. Developed by the legendary <strong className="text-white">Bakers Bot Dev Team</strong>, this secure architecture eliminates datacenter ping latency, ensuring you snipe FC 26 &amp; FC 27 players in milliseconds without compromising account safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OUTPERFORM_POINTS.map((pt) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.title}
                  className="p-5 rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/40 transition-colors"
                >
                  <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 text-primary grid place-items-center mb-3">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">
                    {pt.title}
                  </h3>
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
                <span>On the Roadmap // Coming Soon</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">
                AI SBC Solver Module
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Actively in development, not live yet — our upcoming AI solver calculates the mathematical optimum to complete Squad Building Challenges using unassigned cards and club fodder with absolute minimal coin cost.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Active Core Development in Progress</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark/80 border border-white/10 text-center shrink-0 min-w-[240px]">
              <div className="text-xs text-primary font-mono font-bold uppercase tracking-widest mb-1">
                Included in All Licenses
              </div>
              <div className="text-2xl font-black text-white font-display mb-2">
                Free Feature Update
              </div>
              <p className="text-xs text-gray-400">
                All 365-day active subscribers receive automatic access upon deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-2">
              Questions &amp; Answers
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
            Ready to Dominate the <br />
            <span className="text-primary">FC 26 &amp; FC 27 Market?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal">
            Join thousands of traders using Elite FUT SNIPER to make millions of coins every week. Start your 7-day free trial right now.
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
