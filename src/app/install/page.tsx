import type { Metadata } from "next";
import Link from "next/link";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  PlayCircle,
  HelpCircle,
  ChevronRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "How to Install FUT SNIPING BOT FC27 | Step-by-Step Setup Guide | Elite FUT SNIPER",
  },
  description:
    "Official installation guide for Elite FUT SNIPER Chrome extension on EA FC 27 and FC 26 Web App. 2-minute setup, Developer Mode activation, and first snipe configuration.",
  keywords: [
    "how to install fc 27 autobuyer",
    "fc 27 sniping bot installation",
    "ea sports fc 27 chrome extension setup",
    "install fut snipe bot",
    "ea fc 27 web app bot guide",
    "load unpacked chrome extension",
    "fut autobuyer tutorial",
    "fc 27 trading bot setup guide",
    "elite fut sniper docs",
    "fc27 web app side panel setup",
  ],
  alternates: {
    canonical: "https://www.elitefutbot.com/install",
  },
  openGraph: {
    title:
      "How to Install FUT SNIPING BOT FC27 | Step-by-Step Setup Guide | Elite FUT SNIPER",
    description:
      "Step-by-step setup documentation for Elite FUT SNIPER Chrome extension on EA FC 27 and FC 26 Web App. 2-minute installation, 100% local client sandbox, and 0 bans.",
    type: "article",
    url: "https://www.elitefutbot.com/install",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT SNIPER Chrome Extension Installation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Install FUT SNIPING BOT FC27 | Step-by-Step Setup Guide | Elite FUT SNIPER",
    description:
      "2-minute step-by-step installation guide for Elite FUT SNIPER on EA FC 27 & FC 26 Web App. Manifest V3 local sandbox setup.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

interface StepLink {
  href: string;
  label: string;
  primary?: boolean;
  external?: boolean;
}

interface Step {
  step: string;
  title: string;
  body: string;
  links?: StepLink[];
}

const steps: Step[] = [
  {
    step: "01",
    title: "Log in to your account",
    body: "Elite FUT SNIPER needs an account to run — it's what your 7-day free trial and license are tied to. Create one (or log in if you already have one) before downloading the extension.",
    links: [
      { href: "/register", label: "Create Account", primary: true },
      { href: "/login", label: "Log In", primary: false },
    ],
  },
  {
    step: "02",
    title: "Download the extension",
    body: "Grab the packaged .zip archive from your account dashboard once you're logged in. Extract the downloaded ZIP file to a permanent folder on your computer.",
    links: [
      { href: "/dashboard", label: "Go to Dashboard", primary: true },
    ],
  },
  {
    step: "03",
    title: "Enable Developer Mode in Chrome",
    body: 'Open chrome://extensions in your browser address bar (or navigate to Menu > Extensions > Manage Extensions), and toggle the "Developer mode" switch in the top-right corner.',
  },
  {
    step: "04",
    title: "Load the unpacked extension",
    body: 'Click the "Load unpacked" button in the top-left corner and select the unzipped Elite FUT SNIPER directory. Elite FUT SNIPER will instantly appear in your active extensions list.',
  },
  {
    step: "05",
    title: "Pin it and open the Side Panel",
    body: "Pin Elite FUT SNIPER to your Chrome toolbar, open the official EA FC Ultimate Team Web App, and click the extension icon to launch your docking Side Panel HUD.",
    links: [
      {
        href: "https://www.ea.com/ea-sports-fc/ultimate-team/web-app/",
        label: "Open EA FC Web App",
        primary: true,
        external: true,
      },
    ],
  },
];

const FAQS = [
  {
    q: "Why does Elite FUT SNIPER require 'Load unpacked' instead of the Chrome Web Store?",
    a: "Google Chrome Web Store review cycles take 7 to 14 days per release. Because EA Sports deploys frequent micro-updates to the EA FC Ultimate Team Web App, loading the extension directly via Developer Mode enables instant hotfixes and same-day compatibility updates without waiting weeks for store approval.",
  },
  {
    q: "Do I need to repeat this installation process every time the extension updates?",
    a: "No. When an update is released, simply download the new ZIP, replace the files in your existing unpacked folder, and click the circular 'Reload' icon on the extension tile in chrome://extensions. Your saved settings, filters, and logs remain intact.",
  },
  {
    q: "Can this installation cause my EA account to be banned?",
    a: "Elite FUT SNIPER runs 100% locally in your Chrome browser sandbox under Manifest V3. It never sends your EA account password or credentials to external servers. Its built-in Humanization++ engine uses Gaussian randomized request intervals, Bezier curve mouse movements, and automatic cooldown cycles, resulting in 0 bans recorded across all verified seasons.",
  },
  {
    q: "Does it work with Brave, Edge, Opera, or Vivaldi?",
    a: "Yes. Elite FUT SNIPER is built on Chromium standards and operates identically in Google Chrome, Brave Browser, Microsoft Edge, Opera, and Vivaldi across Windows, macOS, and Linux/ChromeOS.",
  },
  {
    q: "What should I do if the extension doesn't open in the Web App?",
    a: "Make sure you are on the official EA FC Web App page (ea.com/ea-sports-fc/ultimate-team/web-app). Click Chrome's puzzle piece icon, find Elite FUT SNIPER, and ensure 'Site access' is set to 'On all sites' or 'On ea.com'. Then refresh the Web App page.",
  },
];

export default function InstallPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install Elite FUT SNIPER Chrome Extension",
    description:
      "Step-by-step instructions for installing Elite FUT SNIPER on Google Chrome and Chromium browsers for EA FC 27 and FC 26 Web App.",
    totalTime: "PT2M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.body,
      url: `https://www.elitefutbot.com/install#step-${s.step}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Elite FUT SNIPER Extension",
    applicationCategory: "BrowserExtension",
    operatingSystem: "Windows, macOS, Linux, ChromeOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "7-Day Free Trial",
    },
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "How to Install Elite FUT SNIPER Chrome Extension — Full Guide",
    description:
      "Step-by-step walkthrough showing how to install Elite FUT SNIPER in Google Chrome via Developer Mode, dock to the Side Panel, and configure for EA FC 27 Web App.",
    thumbnailUrl: [
      "https://www.elitefutbot.com/install-video-thumbnail.jpg",
      "https://i.ytimg.com/vi/CSGzXr2Z_8Q/maxresdefault.jpg",
    ],
    uploadDate: "2026-09-17T00:00:00Z",
    contentUrl: "https://youtu.be/CSGzXr2Z_8Q",
    embedUrl: "https://www.youtube-nocookie.com/embed/CSGzXr2Z_8Q",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        {/* SIMPLE HERO ON FIRST LOAD */}
        <header className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Quick Setup Guide (2 Minutes)
          </div>
          <h1 className="font-display text-5xl sm:text-6xl tracking-tight mb-4 text-white">
            Install{" "}
            <span className="bg-primary text-dark px-[0.06em] rounded-[0.06em] box-decoration-clone">
              Elite FUT SNIPER
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl text-base sm:text-lg">
            Try it free for 7 days, and setup takes about two minutes.
          </p>
        </header>

        {/* 5 SIMPLE NUMBERED STEPS */}
        <ol className="space-y-10 sm:space-y-12">
          {steps.map((s) => (
            <li
              key={s.step}
              id={`step-${s.step}`}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start scroll-mt-24"
            >
              <span className="font-display text-4xl inline-block shrink-0 w-fit bg-primary text-dark font-black px-[0.15em] py-[0.05em] rounded-[0.1em] box-decoration-clone leading-none">
                {s.step}
              </span>
              <div className="flex-1">
                <h2 className="font-bold text-xl sm:text-2xl text-white mb-2">
                  {s.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {s.body}
                </p>
                {s.links ? (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className={`px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-transform hover:scale-105 ${
                          l.primary
                            ? "bg-primary text-dark shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            : "bg-surface border border-white/10 text-white hover:bg-white/10"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        {/* STUCK / DISCORD HELP BANNER (BEFORE VIDEO) */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-sm">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/30 text-[#5865F2] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-[#8892f7]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Stuck or have questions? Get instant help
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Join our Discord community — our mod team and active traders are available 24/7.
              </p>
            </div>
          </div>
          <Link
            href="https://discord.gg/Rkb9nF6WG6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(88,101,242,0.35)] flex items-center justify-center gap-2 shrink-0 hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            Ask on Discord
          </Link>
        </div>

        {/* FULL GUIDE VIDEO SECTION (PLACED RIGHT AFTER STEPS) */}
        <div className="mt-12 pt-10 border-t border-white/10" id="video-guide">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-widest mb-2">
              <PlayCircle className="w-4 h-4 text-primary" />
              Full Video Walkthrough
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white">
              Watch Installation &amp; Setup Walkthrough
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Watch this complete walkthrough showing extension installation, Chrome Side Panel docking, and setting up your first automated snipe.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0d0d0d]">
            <div className="bg-[#141414] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-gray-400 ml-2">
                  Elite FUT SNIPER — Step-by-Step Installation Tutorial
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-mono">
                <PlayCircle className="w-3.5 h-3.5" />
                VIDEO GUIDE
              </div>
            </div>
            <div className="aspect-video w-full relative">
              <LiteYouTubeEmbed
                videoId="CSGzXr2Z_8Q"
                title="Elite FUT SNIPER Chrome Extension Full Installation Guide"
                customPoster="/install-video-thumbnail.jpg"
              />
            </div>
          </div>
        </div>

        {/* DEEPER DOC SECTIONS: CONFIGURATION, FAQ, SECURITY */}
        <div className="mt-16 pt-12 border-t border-white/10 space-y-14">
          {/* QUICK START CONFIG */}
          <section id="first-snipe">
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-widest mb-2">
              <Zap className="w-4 h-4" />
              Quick Start
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-4">
              Configuring Your First Snipe in 30 Seconds
            </h2>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Once Elite FUT SNIPER is docked in Chrome&apos;s Side Panel, configuring your trading parameters requires just three quick steps:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-300 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-primary font-mono font-bold text-sm mb-1">
                    1. Target Price
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Set your maximum Buy-It-Now ceiling for your target player below market floor.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-cyan-400 font-mono font-bold text-sm mb-1">
                    2. Safety Intervals
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Keep Humanization++ on the recommended default Gaussian intervals (1,200ms–2,800ms).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-emerald-400 font-mono font-bold text-sm mb-1">
                    3. Auto Relist
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Toggle &apos;Auto Relist&apos; ON to automatically calculate the 5% EA tax and list sniped cards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TROUBLESHOOTING & FAQ */}
          <section id="troubleshooting">
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-6">
              Troubleshooting &amp; Common Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-start gap-2.5">
                    <span className="text-primary font-mono text-xs shrink-0 mt-0.5">
                      0{index + 1}.
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ZERO PASSWORD SECURITY GUARANTEE */}
          <section className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                Security &amp; Sandboxing Guarantee
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                100% Local In-Browser Client Sandbox
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                Elite FUT SNIPER runs entirely inside your local browser. Your EA credentials, passwords, and session cookies are never transmitted to external servers.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/privacy"
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>Privacy Policy</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* EXPLORE / BOTTOM CTAS */}
          <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
              >
                Start Free 7-Day Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:border-primary/40"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                Join Discord VIP Community
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-gray-400 font-mono pt-2">
              <Link
                href="/fc27-fut-snipe-bot"
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                FC 27 Bot
              </Link>
              <span className="text-gray-600 select-none">•</span>
              <Link
                href="/fc27-fut-sniping-bot-autobuyer-features"
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                Features
              </Link>
              <span className="text-gray-600 select-none">•</span>
              <Link
                href="/tools/sniping-guide"
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                Guide
              </Link>
              <span className="text-gray-600 select-none">•</span>
              <Link
                href="/tools/comparison-guide"
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                Comparisons
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
