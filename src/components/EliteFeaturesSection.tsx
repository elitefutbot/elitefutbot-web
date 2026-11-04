"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Coins,
  Sliders,
  Filter,
  BarChart3,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

export interface EliteFeaturesSectionProps {
  badge?: string;
  headingPre?: string;
  headingHighlight?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePill?: string;
  sectionId?: string;
}

const LEFT_FEATURES: Array<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  highlight?: boolean;
  badge?: string;
}> = [
  {
    icon: Zap,
    title: "Auto Buyer & Sniper",
    desc: "Sub-20ms market execution. Snipes undervalued cards the instant they drop in the 59th-minute window.",
  },
  {
    icon: TrendingUp,
    title: "Auto-Bidding Engine",
    desc: "Automatically place bids on expiring auctions with ceiling caps. Win cards below market value without overbidding.",
  },
  {
    icon: Sliders,
    title: "Multi-Filter Search",
    desc: "Target any transfer market filter: Country/Nation, Club, League, Position, Card Rarity (TOTW, Promos, Icons), exact Ratings (83+, 84+, 88+), and Gold/Silver/Bronze tiers.",
    highlight: true,
    badge: "v1.0.20 All Filters",
  },
  {
    icon: Filter,
    title: "Consumables & Chem Styles",
    desc: "Filter chemistry styles (Hunter, Shadow), position modifiers, contracts, or snipe players with consumable options pre-applied.",
  },
  {
    icon: Coins,
    title: "Auto Seller & Relister",
    desc: "Instantly list won transfers with automated 5% EA tax deduction and configurable profit margins for 24/7 coin flow.",
  },
  {
    icon: Target,
    title: "AI SBC Solver",
    desc: "Solve SBCs using dual FUTBIN & FUTGG price telemetry. Matches cheapest squad solutions and auto-buys missing cards.",
  },
];

const RIGHT_HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Simple and Powerful",
    desc: "Simple to use, customizable, configurable, and beautifully designed. Search, list, buy, stop — after 5 tries, pause. Multiple search requests per search. Animated update cycle, and get Telegram notifications for every update.",
  },
  {
    icon: BarChart3,
    title: "Multi-Platform",
    desc: "Xbox, PS4, PC players can use Elite FUT SNIPER. It uses the official Web App to interact with the transfer market.",
  },
  {
    icon: RefreshCcw,
    title: "Web-App on PC / Mac / Linux",
    desc: "Use the Web-App in your favourite browser with our integrated script on your PC or Mac. Mobile access is coming soon.",
  },
  {
    icon: ShieldCheck,
    title: "Support and Upgrades",
    desc: "Very frequent updates, fixes, improvements and new features! Contact us anytime: live 24/7 support, bug reporting and feature requests.",
  },
];

export default function EliteFeaturesSection({
  badge = "Elite FUT SNIPER Features",
  headingPre = "Elite FUT SNIPER",
  headingHighlight = "Features",
  description = "One Chrome extension that replaces hours of manual market grinding. Every function you need — automated, tax-aware, and anti-ban by design.",
  ctaLabel = "Start 2-Day Free Trial",
  ctaHref = "/fc27-fut-snipe-bot",
  secondaryLabel = "View All 12 Features",
  secondaryHref = "/fc27-fut-sniping-bot-autobuyer-features",
  imageSrc = "/snipe-guide-bot-advanced.png",
  imageAlt = "Elite FUT SNIPER advanced mode — full configuration with General settings, Action Delay, Sleep Settings, Limits, and auto-list with 5% EA tax",
  imagePill = "All Filters / Settings",
  sectionId = "elite-features",
}: EliteFeaturesSectionProps) {
  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      id={sectionId}
      className="relative overflow-hidden py-16 sm:py-20"
    >
      {/* Giant watermark heading */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black uppercase text-white/[0.025] leading-none tracking-tighter mt-4">
          FEATURES
        </span>
      </div>

      {/* Section header */}
      <div className="relative text-center mb-10 sm:mb-14 px-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-4">
          <Zap className="w-3 h-3" />
          {badge}
        </div>
        <h2
          id={`${sectionId}-heading`}
          className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight"
        >
          {headingPre} <span className="text-primary">{headingHighlight}</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
          {description}
        </p>
      </div>

      {/* Mobile & Tablet: stacked cards */}
      <div className="lg:hidden px-4 sm:px-6 space-y-3 mb-8">
        {LEFT_FEATURES.map(({ icon: Icon, title, desc, highlight, badge }) => (
          <div
            key={title}
            className={`flex items-start gap-3 p-4 rounded-xl transition-all group ${
              highlight
                ? "bg-primary/[0.08] border-2 border-primary/50 shadow-[0_0_25px_rgba(204,255,0,0.12)]"
                : "bg-white/[0.03] border border-white/[0.07] hover:border-primary/20"
            }`}
          >
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all mt-0.5 ${
                highlight
                  ? "bg-primary text-black font-bold shadow-md"
                  : "bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20"
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                  {title}
                </p>
                {badge && (
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: centre image */}
      <div className="lg:hidden flex justify-center mb-8 px-4">
        <div className="relative w-full max-w-[280px]">
          <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-3xl scale-90" />
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(204,255,0,0.15)]">
            <img src={imageSrc} alt={imageAlt} className="w-full h-auto" loading="lazy" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              {imagePill}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: right highlights */}
      <div className="lg:hidden px-4 sm:px-6 space-y-3 mt-8">
        {RIGHT_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-primary/20 transition-colors group"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all mt-0.5">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                {title}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: original 3-column layout */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-4 items-center px-4 sm:px-6">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          {LEFT_FEATURES.map(({ icon: Icon, title, desc, highlight, badge }) => (
            <div
              key={title}
              className={`flex items-center gap-4 group p-2.5 rounded-xl transition-all ${
                highlight
                  ? "bg-primary/[0.06] border border-primary/40 shadow-[0_0_25px_rgba(204,255,0,0.1)] -mr-2 pr-3"
                  : ""
              }`}
            >
              <div className="flex-1 text-right space-y-0.5">
                <div className="flex items-center justify-end gap-2">
                  {badge && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary text-black font-black">
                      {badge}
                    </span>
                  )}
                  <p className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                    {title}
                  </p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    highlight
                      ? "bg-primary text-black font-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      : "bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 group-hover:border-primary/40"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* CENTRE — bot screenshot */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[280px] lg:max-w-[300px]">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-3xl scale-90" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(204,255,0,0.15)]">
              <img src={imageSrc} alt={imageAlt} className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                {imagePill}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-7">
          {RIGHT_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                  {title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="relative mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
        <Link
          href={ctaHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-black font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_40px_rgba(204,255,0,0.25)]"
        >
          {ctaLabel} <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={secondaryHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-all"
        >
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
