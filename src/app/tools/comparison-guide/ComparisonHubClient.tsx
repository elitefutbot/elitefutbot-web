"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Search,
  Scale,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Filter,
  CheckCircle2,
} from "lucide-react";
import { COMPARISONS, type ComparisonItem } from "@/data/comparisons-hub";

export default function ComparisonHubClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredComparisons = useMemo(() => {
    return COMPARISONS.filter((comp) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        comp.name.toLowerCase().includes(query) ||
        comp.type.toLowerCase().includes(query) ||
        comp.summary.toLowerCase().includes(query) ||
        comp.badge.toLowerCase().includes(query);

      const matchesCat =
        selectedCategory === "all" || comp.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const categories = [
    { id: "all", label: "All Platforms", count: COMPARISONS.length },
    {
      id: "extension",
      label: "Browser Extensions",
      count: COMPARISONS.filter((c) => c.category === "extension").length,
    },
    {
      id: "cloud",
      label: "Cloud Bots",
      count: COMPARISONS.filter((c) => c.category === "cloud").length,
    },
    {
      id: "desktop",
      label: "Desktop & Apps",
      count: COMPARISONS.filter((c) => c.category === "desktop").length,
    },
    {
      id: "utility",
      label: "SBC & Web Utilities",
      count: COMPARISONS.filter((c) => c.category === "utility").length,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 font-mono" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors text-gray-400">
          Home
        </Link>
        <span className="text-gray-500" aria-hidden="true">/</span>
        <span className="text-gray-300">Comparison Hub</span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(204,255,0,0.08)]">
            <Scale className="w-3.5 h-3.5 shrink-0" />
            Official Comparison Hub — All 50 Major Platforms
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            FC 26 &amp; FC 27 Day-One Support
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
          Elite FUT SNIPER vs <span className="text-primary">Every Competitor</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-normal">
          Honest, side-by-side technical benchmarks and architectural comparisons evaluating Elite FUT SNIPER against all 50 major sniping bots, cloud autobuyers, desktop programs, and trading utilities on the market.
        </p>
      </header>

      {/* Key Architectural Advantage Highlights */}
      <section aria-label="Key Advantages" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Search Velocity", value: "< 20ms", sub: "vs 150–350ms cloud lag" },
          { label: "EA Password Risk", value: "0 Handover", sub: "100% local client sandbox" },
          { label: "Anti-Ban Safety", value: "0 Bans", sub: "Humanization++ Bézier curves" },
          { label: "FC 27 Ready", value: "Day-One", sub: "365-day forward compatibility" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-primary/30 transition-all shadow-sm"
          >
            <div className="text-2xl sm:text-3xl font-black text-primary font-headline [text-shadow:0_0_20px_rgba(204,255,0,0.3)]">
              {stat.value}
            </div>
            <div className="text-xs text-gray-200 font-bold uppercase tracking-wider">{stat.label}</div>
            <div className="text-[11px] text-gray-400 font-mono">{stat.sub}</div>
          </div>
        ))}
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-6" aria-label="Filter Comparisons">
        <h2 className="sr-only">Competitor Sniping Bot Directory and Comparisons</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div
            className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/50 border border-white/10 w-full md:w-auto backdrop-blur-md"
            role="group"
            aria-label="Filter by platform"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              aria-label="Search 36 competitors"
              placeholder="Search 36 competitors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors font-sans"
            />
          </div>
        </div>

        {/* Competitor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredComparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/${comp.slug}`}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between space-y-5 shadow-sm hover:shadow-[0_0_25px_rgba(204,255,0,0.08)] relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${comp.badgeColor}`}
                  >
                    {comp.badge}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {comp.categoryLabel}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-headline text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                    {comp.name}
                  </h3>
                  <p className="text-xs text-primary font-mono font-bold mt-0.5">
                    vs Elite FUT SNIPER
                  </p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  {comp.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono text-[11px]">
                  {comp.highlightMetric || "Sub-20ms Engine"}
                </span>
                <span className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Teardown &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredComparisons.length === 0 && (
          <div className="p-12 text-center text-gray-400 border border-white/10 rounded-2xl bg-white/[0.01] space-y-3">
            <p className="font-mono text-sm">No competitors match &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs text-primary hover:underline font-bold"
            >
              Clear filters and show all 36 platforms
            </button>
          </div>
        )}
      </section>

      {/* Featured Humanization++ Highlight */}
      <section className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-primary/[0.1] via-dark to-dark border-2 border-primary shadow-[0_0_40px_rgba(204,255,0,0.12)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-dark font-mono text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Anti-Ban Guarantee</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-headline uppercase">
              Why Elite FUT SNIPER Has 0 Bans vs All Competitors
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed font-normal">
              Most competitor tools either route requests through flagged cloud datacenter IP addresses or send repetitive, linear timing requests. Elite FUT SNIPER operates 100% locally on your personal residential IP with <strong className="text-white">Humanization++ mode</strong> — generating authentic Bézier mouse curve dynamics, randomized micro-jitter, and realistic human dwell times.
            </p>
          </div>
          <Link
            href="/fc27-fut-sniping-bot-autobuyer-features"
            className="shrink-0 px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center gap-2"
          >
            Explore 11 Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
