import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LiteYouTubeEmbed from '@/components/LiteYouTubeEmbed';
import { 
  Terminal, 
  Network, 
  Cpu, 
  Laptop, 
  Zap, 
  Shield, 
  Brain, 
  Code2, 
  Check, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Activity, 
  Lock,
  Server,
  AlertTriangle,
  ChevronDown,
  Layers,
  Sliders,
  TrendingUp,
  Workflow,
  CheckCircle2,
  XCircle,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: "Engineering Origin: The Core Developer Behind FIFASniping Bot Built Elite FUT SNIPER",
  },
  description: "Built by the original core automation engineer behind FIFASniping Bot (2020–2025). Discover how Elite FUT SNIPER was engineered from scratch as a 100% local, sub-20ms FC 27 Chrome extension.",
  alternates: { canonical: "https://www.elitefutbot.com/bakers-bot-developer" },
  openGraph: {
    title: "Engineering Origin: The Core Developer Behind FIFASniping Bot Built Elite FUT SNIPER",
    description: "Built by the original core automation engineer behind FIFASniping Bot (2020–2025). Discover how Elite FUT SNIPER was engineered from scratch as a 100% local, sub-20ms FC 27 Chrome extension.",
    url: "https://www.elitefutbot.com/bakers-bot-developer",
    siteName: "Elite FUT SNIPER",
    type: "article",
  },
  twitter: {
    title: "Engineering Origin: The Core Developer Behind FIFASniping Bot Built Elite FUT SNIPER",
    description: "Built by the original core automation engineer behind FIFASniping Bot (2020–2025). Discover how Elite FUT SNIPER was engineered from scratch as a 100% local, sub-20ms FC 27 Chrome extension.",
  }
};

export default function BakersBotDeveloperPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Is Elite FUT SNIPER made by the same developer who built the FIFASniping Bot engine?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. From 2020 through 2025, I was hired directly to architect, build, and maintain the core automation engine, market search timing routines, and anti-ban heuristics for FIFASniping Bot (operating historically at fifasnipebot.com, which permanently redirects to bakers-bot.com). In 2025, I launched Elite FUT SNIPER independently as a new, standalone codebase engineered from scratch.",
        },
      },
      {
        '@type': 'Question',
        name: "Does the domain fifasnipebot.com redirect to bakers-bot.com?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Verifiable HTTP 308 response headers and DNS routing confirm that fifasnipebot.com permanently redirects to https://bakers-bot.com/, documenting the direct operational lineage between the platforms where our lead engineer previously served as core automation architect.",
        },
      },
      {
        '@type': 'Question',
        name: "What makes Elite FUT SNIPER architecturally different from legacy cloud bots?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Elite FUT SNIPER was re-architected from scratch to eliminate the fatal flaws of legacy bots: it runs 100% locally as a Manifest V3 Chrome extension (no cloud relays or datacenter IP flags), delivers sub-20ms WebSocket response times (15x faster than cloud proxies), implements authentic cubic Bézier mouse humanization (0 bans recorded across 14,000+ sessions), docks cleanly in Chrome's Side Panel, and includes a neural AI SBC solver.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Elite FUT SNIPER ever ask for or store my EA account password?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Never. Because Elite FUT SNIPER functions as a 100% local browser extension operating directly inside your active EA Web App session, it never asks for, transmits, or stores your EA account credentials, passwords, or 2FA codes. All authentication is client-locked.",
        },
      },
      {
        '@type': 'Question',
        name: "Why do legacy cloud bots risk bans while Elite FUT SNIPER has 0 bans recorded?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Legacy cloud bots route requests from shared datacenter IP addresses (AWS, Hetzner, DigitalOcean) and use rigid linear timers with synthetic, straight-line clicks that fail EA's biometric telemetry checks. Elite FUT SNIPER runs exclusively on your genuine residential IP and uses cubic Bézier mouse physics with randomized Gaussian micro-delays, generating indistinguishable human telemetry.",
        },
      },
      {
        '@type': 'Question',
        name: "Can I test Elite FUT SNIPER for free before buying?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes! We offer a full-featured 2-day free trial with instant activation upon registration (no credit card required), as well as daily free sniping filters and direct developer assistance in our official Discord community.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.elitefutbot.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Engineering Origin & Technical Lineage',
        item: 'https://www.elitefutbot.com/bakers-bot-developer',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[#060606] text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[60%] left-0 w-[600px] h-[600px] bg-[#f97316]/5 blur-[200px] rounded-full pointer-events-none -z-10" />

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* ========================================================================= */}
          {/* HEADER & HERO SECTION */}
          {/* ========================================================================= */}
          <header className="space-y-6 text-center max-w-4xl mx-auto">
            {/* Top Lineage Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.15)]">
              <Image 
                src="/logo-elite.png" 
                alt="Elite FUT SNIPER Logo" 
                width={20} 
                height={20} 
                className="w-5 h-5 object-contain shrink-0 drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]" 
              />
              <span>Engineering History &amp; Technical Lineage</span>
            </div>

            {/* H1 with Parodied Logo Badge */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2] uppercase font-headline">
              The Developer Behind{' '}
              <span className="inline-flex items-center align-middle gap-2 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-1.5 mx-1 rounded-2xl sm:rounded-full bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] shadow-[0_0_25px_rgba(249,115,22,0.2)] hover:border-[#f97316]/60 transition-all">
                <Image 
                  src="/jokersbot-avatar.webp" 
                  alt="Jokers Bot Logo" 
                  width={36} 
                  height={36} 
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border border-[#f97316]/60 shadow-[0_0_10px_rgba(249,115,22,0.3)] shrink-0" 
                />
                <span className="text-[#f97316] font-black drop-shadow-[0_0_12px_rgba(249,115,22,0.35)] tracking-normal normal-case">
                  FIFASNIPE BOT
                </span>
              </span>{' '}
              Built Something New:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
                Elite FUT SNIPER
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              For five years (2020–2025), I was the lead software engineer responsible for architecting the transfer market automation engine, search timing routines, and anti-ban logic behind <strong className="text-white">FIFASniping Bot</strong> (historical domain <code className="text-[#f97316] font-mono text-sm px-1.5 py-0.5 rounded bg-white/5 border border-white/10">fifasnipebot.com</code>, which permanently redirects to <strong className="text-white">bakers-bot.com</strong>). In 2025, I walked away from legacy cloud dependencies to engineer <span className="text-primary font-bold">Elite FUT SNIPER</span> — the world&apos;s first 100% local, sub-20ms Chrome extension built from a clean sheet of code.
            </p>

            {/* Quick Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center gap-2 active:scale-95"
              >
                <span>Claim 2-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#open-letter"
                className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Read The Engineer&apos;s Letter</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </a>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* QUICK METRICS BAR */}
          {/* ========================================================================= */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5 hover:border-primary/30 transition-all">
              <span className="block text-2xl sm:text-3xl font-black text-primary font-headline">5+ Years</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold block">Core Engine Development</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5 hover:border-primary/30 transition-all">
              <span className="block text-2xl sm:text-3xl font-black text-white font-headline">&lt; 20ms</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold block">In-Memory Search Speed</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5 hover:border-primary/30 transition-all">
              <span className="block text-2xl sm:text-3xl font-black text-primary font-headline">0 Bans</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold block">14,000+ Recorded Sessions</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5 hover:border-primary/30 transition-all">
              <span className="block text-2xl sm:text-3xl font-black text-white font-headline">Zero</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold block">Password Sharing Required</span>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* VIDEO SHOWCASE FRAME */}
          {/* ========================================================================= */}
          <section className="space-y-4">
            <div className="p-2 sm:p-4 rounded-3xl bg-white/[0.02] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D0D] rounded-t-2xl border-b border-white/10 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>ENGINE ARCHITECTURE BRIEFING // VERIFIED SPEED DEMO</span>
                </div>
                <div className="text-xs font-mono text-gray-400 hidden sm:block">
                  v1.0.21 CLIENT-SIDE MANIFEST V3
                </div>
              </div>

              {/* YouTube Responsive Video Container */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/5 shadow-2xl">
                <LiteYouTubeEmbed
                  videoId="uaXx0upIiGU"
                  title="Elite FUT SNIPER Technical Demonstration"
                />
              </div>

              {/* Real-Time Telemetry Bar */}
              <div className="mt-3 px-4 py-2.5 rounded-xl bg-black/60 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">CLIENT_RUNTIME:</span>
                  <span className="text-white">Google Chrome MV3 Sandbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">PACKET_LATENCY:</span>
                  <span className="text-emerald-400">18.4ms (Direct In-Memory)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">SECURITY_POSTURE:</span>
                  <span className="text-emerald-400">0 Passwords Stored // 0 Cloud Relays</span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* THE ENGINEER'S OPEN LETTER */}
          {/* ========================================================================= */}
          <section id="open-letter" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0D0D0D] to-[#080808] border border-white/10 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[90px] pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3 text-primary">
                <Code2 className="w-7 h-7" />
                <div>
                  <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block">Developer Editorial</span>
                  <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                    An Open Letter: Why I Left Legacy Bots After 5 Years
                  </h2>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                DOCUMENT NO. 2025-DEV-01
              </span>
            </div>

            <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
              <p>
                In early 2020, I was contracted to build the first production automation algorithms for what became known as <strong className="text-white">FIFASniping Bot</strong>. Over the next five years, I single-handedly wrote and maintained the market search routines, anti-captcha pauses, and price polling systems that powered tens of thousands of automated snipes across FIFA 21, 22, 23, FC 24, and early FC 25.
              </p>
              
              <p>
                During that era, cloud bots and Tampermonkey scripts were acceptable. EA&apos;s anti-cheat was rudimentary — basic rate limits and elementary request counts. But by late 2024, EA executed a massive infrastructure overhaul. They introduced <strong className="text-white">biometric mouse trajectory analysis</strong>, client-side canvas fingerprinting, and automated blacklisting of datacenter IP ranges (AWS, Hetzner, DigitalOcean).
              </p>

              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-3">
                <h4 className="text-white font-bold text-sm uppercase flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  The Three Fatal Flaws of Old-Generation Bots
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-400">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                    <strong className="text-red-300 block">1. Datacenter IP Flagging</strong>
                    Cloud bots route your requests through remote server farms. EA immediately flags simultaneous sessions originating from shared hosting IPs.
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                    <strong className="text-red-300 block">2. Inherent Ping Penalty</strong>
                    Routing card search requests from your PC → Cloud Server → EA adds 150ms–350ms of network latency. You lose every 59th-minute card to local extensions.
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                    <strong className="text-red-300 block">3. Credential Vulnerability</strong>
                    Old bots demand your EA email, password, and 2FA codes on their central servers. A single breach compromises thousands of clubs.
                  </div>
                </div>
              </div>

              <p>
                I advocated internally for a ground-up rewrite: abandoning cloud servers, moving 100% into a client-side Manifest V3 Chrome extension, and replacing rigid linear timers with mathematical cubic Bézier physics. When corporate priorities favored maintaining legacy code rather than investing in user safety, <strong className="text-white">I walked away</strong>.
              </p>

              <p className="text-white font-medium">
                In 2025, I engineered <span className="text-primary font-bold">Elite FUT SNIPER</span> from a completely blank repository. No legacy technical debt. No password sharing. Sub-20ms speed. Undetectable Bézier physics. This is the bot I always wanted to build.
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* ARCHITECTURAL PIPELINE COMPARISON: CLOUD VS LOCAL */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                <Workflow className="w-3.5 h-3.5" />
                <span>Network Execution Topology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase text-white">
                How Request Flow Determines Ban Safety &amp; Speed
              </h2>
              <p className="text-sm text-gray-400">
                Visualizing why remote cloud proxy bots lose competitive snipes and trigger EA security scrutiny.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Legacy Cloud Diagram */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0C0C0C] border border-red-500/20 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                      Legacy Cloud Bot Flow
                    </span>
                    <span className="text-xs font-mono text-gray-500">2020–2025 Era</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-headline uppercase">
                    The Remote Proxy Bottleneck
                  </h3>

                  {/* Flow Diagram */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                      <span className="text-gray-300">1. Trader PC</span>
                      <span className="text-gray-500 text-[10px]">Sends parameters</span>
                    </div>
                    <div className="text-center text-red-400 text-xs">↓ Transmits EA Credentials (Unsafe)</div>
                    <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-between">
                      <span className="text-red-300 font-bold">2. Shared Cloud Server Farm</span>
                      <span className="text-red-400 text-[10px]">+150ms-350ms Latency</span>
                    </div>
                    <div className="text-center text-red-400 text-xs">↓ Shared Datacenter IP (AWS / Hetzner)</div>
                    <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                      <span className="text-gray-300">3. EA Transfer Market Gateway</span>
                      <span className="text-red-400 text-[10px]">FLAGGED: Datacenter IP</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                  <strong>The Result:</strong> High latency causes missed 59th-minute snipes. Shared datacenter IPs trigger captchas and market lockouts.
                </div>
              </div>

              {/* Elite FUT SNIPER Local Pipeline */}
              <div className="p-6 sm:p-8 rounded-3xl bg-primary/[0.03] border border-primary/40 space-y-5 flex flex-col justify-between shadow-[0_0_35px_rgba(204,255,0,0.06)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black uppercase tracking-widest text-dark bg-primary px-3 py-1 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                      Elite FUT SNIPER Pipeline
                    </span>
                    <span className="text-xs font-mono text-primary font-bold">100% Local</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-headline uppercase">
                    Direct Client-Side Memory Hook
                  </h3>

                  {/* Flow Diagram */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                      <span className="text-white font-bold">1. Chrome Manifest V3 Side Panel</span>
                      <span className="text-primary text-[10px]">Zero DOM Injection</span>
                    </div>
                    <div className="text-center text-primary text-xs">↓ Direct In-Memory WebSocket (&lt; 20ms)</div>
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-between">
                      <span className="text-primary font-bold">2. Your Genuine Residential Browser Session</span>
                      <span className="text-primary text-[10px]">Zero EA Passwords Stored</span>
                    </div>
                    <div className="text-center text-primary text-xs">↓ Cubic Bézier Biometric Telemetry</div>
                    <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                      <span className="text-white font-bold">3. EA Transfer Market Gateway</span>
                      <span className="text-emerald-400 text-[10px]">CLEARED: 100% Natural Human</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/30 text-xs text-primary font-bold">
                  <strong>The Result:</strong> First-bid priority on every snipe, zero server downtime, and a spotless 0-ban safety record across 14,000+ sessions.
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* COMPREHENSIVE FEATURE & SPECIFICATION MATRIX */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Head-To-Head Engineering Audit</span>
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase text-white">
                Technical Specification Matrix
              </h2>
              <p className="text-sm text-gray-400">
                Detailed comparison of the legacy 2020–2025 engine versus the newly engineered Elite FUT SNIPER codebase.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0D0D0D] shadow-2xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-gray-400 font-mono text-[11px] uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Engineering Parameter</th>
                    <th className="p-4 sm:p-5 text-[#f97316]">Legacy Engine (FIFASniping Era)</th>
                    <th className="p-4 sm:p-5 text-primary">Elite FUT SNIPER (Next-Gen)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Network className="w-4 h-4 text-primary shrink-0" />
                      Execution Environment
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      Cloud servers &amp; Tampermonkey script injection
                    </td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      100% Client-Side Manifest V3 Chrome Extension
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary shrink-0" />
                      Search-To-Buy Latency
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      150ms – 350ms (cloud queue bottleneck)
                    </td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      &lt; 20ms (in-memory browser WebSocket hook)
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary shrink-0" />
                      EA Account Credentials
                    </td>
                    <td className="p-4 sm:p-5 text-red-400 font-medium">
                      Stored remotely on external company servers
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-bold">
                      Zero credentials requested or stored. 100% client-locked.
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      Mouse Kinematics &amp; Telemetry
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      Rigid linear coordinates &amp; fixed timers
                    </td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      Mathematical cubic Bézier curves + Gaussian jitter micro-pauses
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-primary shrink-0" />
                      Interface Footprint
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      Injected floating canvas buttons (obscures ratings)
                    </td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      Clean Chrome Side Panel HUD (0 DOM injection clutter)
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary shrink-0" />
                      SBC Solving Automation
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      Manual copy-paste or third-party web scraper
                    </td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      Neural AI Club Inventory Solver + 1-Click Auto-Buy
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary shrink-0" />
                      Anti-Ban Safety Record
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      Susceptible to EA biometric telemetry patches
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-bold">
                      0 Bans Recorded Across 14,000+ Recorded User Sessions
                    </td>
                  </tr>

                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      Patch Update Cadence
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      Dependent on middleman resellers; 2–5 day delay
                    </td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      Direct Lead Engineer hotfixes deployed in minutes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 5-YEAR CHRONOLOGICAL MILESTONE TIMELINE */}
          {/* ========================================================================= */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Chronological Milestone Log</span>
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase text-white">
                The 5-Year Engineering Journey
              </h2>
              <p className="text-sm text-gray-400">
                How half a decade of hands-on Web App automation engineering led directly to the creation of Elite FUT SNIPER.
              </p>
            </div>

            <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
              {/* 2020 Milestone */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white/20 border-2 border-black"></span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-white/10 text-white">
                    2020
                  </span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    FOUNDATION ERA // FIFASNIPING BOT
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-headline uppercase">
                  Contracted as Lead Automation Architect
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  Contracted by the owner of FIFASniping Bot to architect its core automation engine. Engineered the initial market search algorithms, rate throttlers, card buying loops, and basic anti-captcha cooldown sequences that established its early market reputation.
                </p>
              </div>

              {/* 2022 Milestone */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white/20 border-2 border-black"></span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-white/10 text-white">
                    2022
                  </span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    SCALE &amp; OPTIMIZATION
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-headline uppercase">
                  Handling Scaled Telemetry Inspections
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  As EA deployed advanced behavioral telemetry, I engineered randomized Gaussian timing variance, multi-account session rotation, and dynamic Futbin price synchronization to protect thousands of active traders from algorithmic detection.
                </p>
              </div>

              {/* 2024 Milestone */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#f97316] border-2 border-black shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#f97316]/20 border border-[#f97316]/40 text-[#f97316]">
                    2024
                  </span>
                  <span className="text-xs font-mono text-[#f97316] uppercase tracking-wider">
                    THE BREAKING POINT OF CLOUD BOTS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-headline uppercase">
                  The Limitations of Legacy Architecture Exposed
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal max-w-3xl">
                  EA&apos;s new server-side telemetry made cloud-based proxy architectures and linear timers obsolete. I realized that keeping bots on external servers created inherent security risks (sharing EA passwords) and unacceptable ping delays that could not be solved within the old codebase.
                </p>
              </div>

              {/* 2025–Present Milestone */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-black shadow-[0_0_15px_rgba(204,255,0,0.8)]"></span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-primary text-dark">
                    2025 – PRESENT
                  </span>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider font-bold">
                    INDEPENDENT CLEAN-SHEET LAUNCH
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-headline uppercase">
                  Engineering the Next-Gen Elite FUT SNIPER
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed font-normal max-w-3xl">
                  I stepped away completely to build Elite FUT SNIPER from scratch. Designed exclusively as a 100% local Chrome extension (Manifest V3), sub-20ms WebSocket engine, authentic Bézier mouse physics, and an integrated AI SBC solver — with 0 EA passwords shared and 0 bans recorded.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* UNDER THE HOOD: FOUR PROPRIETARY INNOVATIONS */}
          {/* ========================================================================= */}
          <section className="space-y-8 p-8 sm:p-12 rounded-3xl bg-[#090909] border border-primary/20 shadow-[0_0_50px_rgba(204,255,0,0.04)]">
            <div className="flex items-center gap-3 text-primary">
              <Cpu className="w-8 h-8" />
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block">Deep Technical Specification</span>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  Under The Hood: Four Proprietary Innovations
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Innovation 1 */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-primary uppercase bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      PERF_INDEX: &lt;20MS
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-headline uppercase">
                    Sub-20ms In-Memory WebSocket Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    Direct network and DOM hook listeners process card listing events in under 20 milliseconds — 15x faster than cloud bots routing through remote proxy server farms. You consistently capture the critical 59th-minute market window before other bots even receive the packet.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-gray-500">
                  Hook: <code className="text-primary">WebSocket.prototype.send</code> interceptor
                </div>
              </div>

              {/* Innovation 2 */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      STEALTH: 0 BANS
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-headline uppercase">
                    Humanization++ Bézier Physics &amp; Gaussian Jitter
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    Mouse cursor movements follow authentic mathematical cubic Bézier trajectories with randomized deceleration and click coordinates. Coupled with Gaussian delay micro-pauses (1,200ms–2,800ms), our engine produces natural human telemetry with a verified 0-ban record across all FC titles.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-gray-500">
                  Physics: <code className="text-primary">B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + ...</code>
                </div>
              </div>

              {/* Innovation 3 */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-white uppercase bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      UI: 60 FPS
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-headline uppercase">
                    Native Manifest V3 Chrome Side Panel Isolation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    Instead of injecting fragile, intrusive HTML buttons on top of the EA Web App canvas, Elite FUT SNIPER docks completely inside Google Chrome&apos;s native Side Panel drawer. The Web App screen remains 100% clean, unobstructed, and performs at a smooth 60 FPS.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-gray-500">
                  Architecture: <code className="text-primary">chrome.sidePanel API</code> isolated context
                </div>
              </div>

              {/* Innovation 4 */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Brain className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      AI_SOLVER: &lt;500MS
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-headline uppercase">
                    Neural AI SBC Solver &amp; 1-Click Auto-Buy
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    An embedded integer linear programming solver analyzes your untradeable club inventory, computes the mathematically cheapest solution for complex multi-league chemistry requirements in sub-500ms, and automatically purchases missing fodder at market floor in a single click.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-gray-500">
                  Algorithm: <code className="text-primary">Branch-and-Cut ILP</code> optimization
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* TECHNICAL VERIFICATION: LINEAGE AUDIT */}
          {/* ========================================================================= */}
          <section className="p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]"></span>
                <strong className="text-white uppercase">Historical Lineage Verification Audit</strong>
              </div>
              <span className="text-[11px] font-mono text-gray-500">RFC 7238 HTTP REDIRECT PROOF</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              For full public transparency and verifiable technical provenance, the legacy domain where our lead developer served as core architect (<code className="text-[#f97316] font-mono">fifasnipebot.com</code>) permanently routes to <code className="text-[#f97316] font-mono">https://bakers-bot.com/</code> via standard HTTP 308 redirection:
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/5 font-mono text-xs text-gray-400 overflow-x-auto space-y-1">
              <div className="text-gray-500"># Verify operational lineage in any terminal:</div>
              <div className="text-white">$ curl -sIL https://fifasnipebot.com | grep -E &quot;HTTP|location&quot;</div>
              <div className="text-emerald-400">HTTP/2 308 Permanent Redirect</div>
              <div className="text-primary">location: https://bakers-bot.com/</div>
            </div>

            <p className="text-xs text-gray-400">
              This documented technical pedigree is why Elite FUT SNIPER is the authentic engineering successor — designed by the same brain, but built with next-generation client-side architecture.
            </p>
          </section>

          {/* ========================================================================= */}
          {/* BUILT BY AN ENGINEER, NOT A CORPORATE RESELLER */}
          {/* ========================================================================= */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Code2 className="w-7 h-7" />
              <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                Built By an Engineer, Not a Corporate Reseller
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
              Most bot websites in the FIFA/FC community are white-labeled reseller templates marketed by Discord affiliates who have never written a single line of JavaScript. When EA pushes a Web App security patch, resellers are helpless for days waiting on upstream script updates.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
              With Elite FUT SNIPER, you are dealing directly with the core engineer. I code every algorithmic update, optimize the DOM selectors, and personally monitor Discord feedback. There are no middleman delays — when an EA update goes live, hotfixes are deployed in minutes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-gray-400 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-primary">
                <Check className="w-4 h-4" /> Direct Developer Discord Support
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Check className="w-4 h-4" /> Weekly Feature Iterations
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Check className="w-4 h-4" /> Day-One FC 27 Web App Readiness
              </span>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* EXTENDED ACCORDION FAQ SECTION */}
          {/* ========================================================================= */}
          <section className="space-y-6 pt-4">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Questions &amp; Direct Answers</span>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                Origin &amp; Architecture FAQ
              </h2>
              <p className="text-sm text-gray-400">
                Straightforward technical answers regarding our developer history, account safety, and engine architecture.
              </p>
            </div>

            <div className="space-y-4">
              <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base sm:text-lg font-headline list-none">
                  <span>Is Elite FUT SNIPER made by the same developer who built the FIFASniping Bot engine?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform shrink-0 ml-2" />
                </summary>
                <div className="pt-4 text-gray-400 text-sm leading-relaxed font-normal border-t border-white/5 mt-4">
                  Yes. From 2020 through 2025, I was hired directly to architect, build, and maintain the core automation engine, market search timing routines, and anti-ban heuristics for FIFASniping Bot. In 2025, I launched Elite FUT SNIPER independently as a new, standalone codebase engineered from scratch.
                </div>
              </details>

              <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base sm:text-lg font-headline list-none">
                  <span>Does the domain fifasnipebot.com redirect to bakers-bot.com?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform shrink-0 ml-2" />
                </summary>
                <div className="pt-4 text-gray-400 text-sm leading-relaxed font-normal border-t border-white/5 mt-4">
                  Yes. Network telemetry and HTTP 308 response headers confirm that <code className="text-[#f97316] font-mono">fifasnipebot.com</code> permanently redirects directly to <code className="text-[#f97316] font-mono">https://bakers-bot.com/</code>, documenting the direct operational and product lineage between the platforms where our lead engineer previously served as core automation architect.
                </div>
              </details>

              <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base sm:text-lg font-headline list-none">
                  <span>What makes Elite FUT SNIPER architecturally different from legacy bots?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform shrink-0 ml-2" />
                </summary>
                <div className="pt-4 text-gray-400 text-sm leading-relaxed font-normal border-t border-white/5 mt-4">
                  Elite FUT SNIPER was re-architected from scratch to eliminate the fatal flaws of legacy bots: it runs 100% locally as a Manifest V3 Chrome extension (no cloud relays or datacenter IP flags), delivers sub-20ms WebSocket response times (15x faster than cloud proxies), implements authentic cubic Bézier mouse humanization (0 bans recorded across 14,000+ sessions), docks cleanly in Chrome&apos;s Side Panel, and includes a neural AI SBC solver.
                </div>
              </details>

              <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base sm:text-lg font-headline list-none">
                  <span>Does Elite FUT SNIPER ever ask for or store my EA password?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform shrink-0 ml-2" />
                </summary>
                <div className="pt-4 text-gray-400 text-sm leading-relaxed font-normal border-t border-white/5 mt-4">
                  Never. Because Elite FUT SNIPER functions as a 100% local browser extension operating directly inside your active EA Web App session, it never asks for, transmits, or stores your EA account credentials, passwords, or 2FA codes. All authentication is client-locked on your device.
                </div>
              </details>

              <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base sm:text-lg font-headline list-none">
                  <span>Why do legacy cloud bots risk bans while Elite FUT SNIPER has 0 bans recorded?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform shrink-0 ml-2" />
                </summary>
                <div className="pt-4 text-gray-400 text-sm leading-relaxed font-normal border-t border-white/5 mt-4">
                  Legacy cloud bots route requests from shared datacenter IP addresses (AWS, Hetzner, DigitalOcean) and use rigid linear timers with synthetic, straight-line clicks that fail EA&apos;s biometric telemetry checks. Elite FUT SNIPER runs exclusively on your genuine residential IP and uses cubic Bézier mouse physics with randomized Gaussian micro-delays, generating indistinguishable human telemetry.
                </div>
              </details>

              <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-base sm:text-lg font-headline list-none">
                  <span>Can I test Elite FUT SNIPER for free before buying?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform shrink-0 ml-2" />
                </summary>
                <div className="pt-4 text-gray-400 text-sm leading-relaxed font-normal border-t border-white/5 mt-4">
                  Yes! We offer a full-featured 2-day free trial with instant activation upon registration (no credit card required), as well as daily free sniping filters and direct developer assistance in our official Discord community.
                </div>
              </details>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* HIGH-CONVERTING DUAL CTA BOX */}
          {/* ========================================================================= */}
          <section className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_60px_rgba(204,255,0,0.12)] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-primary/20 blur-[70px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              2-Day Free Trial Available
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-headline uppercase text-white tracking-tight leading-tight">
              Test The Next-Gen Engine <br />
              <span className="text-primary">100% Free on Discord</span>
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              Join our active community to claim your free trial, test sub-20ms local market speeds on the active FC 27 Web App, and chat directly with the developer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-dark font-black text-base uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_35px_rgba(204,255,0,0.35)] inline-flex items-center justify-center gap-2.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join Discord &amp; Claim Free Trial
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-base uppercase tracking-wider hover:bg-white/10 hover:border-primary/40 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>View Access Plans (€19.90)</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
            </div>

            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-2">
              No Credit Card Required · Instant In-Browser Setup · Verified 0-Ban History
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
