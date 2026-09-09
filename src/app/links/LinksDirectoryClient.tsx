"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Compass,
  EyeOff,
  Layers,
  ArrowUpRight,
  Sparkles,
  Bot,
  Wrench,
  BookOpen,
  UserCheck,
  Shield,
  Swords,
  Filter,
} from "lucide-react";

export interface DirectoryLink {
  href: string;
  label: string;
  category: string;
  desc: string;
  tag?: string;
  badge?: string;
  badgeColor?: string;
}

const ALL_LINKS: DirectoryLink[] = [
  // 1. Core & Products
  {
    href: "/",
    label: "Homepage",
    category: "Core & Products",
    desc: "Main landing page showcasing features, live benchmarks, pricing tiers, and community reviews.",
    tag: "Landing",
    badge: "Core",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/fc27-fut-snipe-bot",
    label: "FC 27 FUT Snipe Bot",
    category: "Core & Products",
    desc: "Dedicated product showcase for the FC 27 sniping bot & autobuyer extension with 20ms local speed.",
    tag: "Product",
    badge: "FC 27",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/fc27-fut-sniping-bot-autobuyer-features",
    label: "FC 27 Sniping Bot & Autobuyer Features",
    category: "Core & Products",
    desc: "Deep-dive feature catalog: AI SBC solver, humanized RPM delays, multi-filter sniping, and cloud presets.",
    tag: "Features",
    badge: "Architecture",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    href: "/install",
    label: "Extension Installation Guide",
    category: "Core & Products",
    desc: "Step-by-step setup guide for loading the Elite FUT SNIPER Chrome extension in developer mode.",
    tag: "Setup",
    badge: "Extension",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/bio",
    label: "Link in Bio Hub",
    category: "Core & Products",
    desc: "Official social media link tree: TikTok, Instagram, Twitter/X, Discord community, and Telegram channel.",
    tag: "Social",
    badge: "Hub",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  {
    href: "/affiliate",
    label: "Affiliate Partner Program",
    category: "Core & Products",
    desc: "Earn 30% lifetime recurring commissions by referring EA FC traders to Elite FUT SNIPER.",
    tag: "Monetization",
    badge: "30% RevShare",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/referral",
    label: "Referral & Rewards Portal",
    category: "Core & Products",
    desc: "Invite friends to unlock complimentary extension days, bonus trial extensions, and special perks.",
    tag: "Rewards",
    badge: "Community",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },

  // 2. SBC Solving Suite
  {
    href: "/ai-sbc-solver",
    label: "AI SBC Solver Engine",
    category: "SBC Solving Suite",
    desc: "1-Click AI-powered Squad Building Challenge solver that computes cheapest chemistry-compliant solutions.",
    tag: "AI Solver",
    badge: "1-Click AI",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/sbc-solver",
    label: "SBC Solutions Catalog",
    category: "SBC Solving Suite",
    desc: "Browse live solved SBC templates with lowest market cost player combinations and real-time prices.",
    tag: "Catalog",
    badge: "Solutions",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },

  // 3. Tools & Resources
  {
    href: "/tools/comparison-guide",
    label: "Full Competitor Comparison Guide",
    category: "Tools & Utilities",
    desc: "Side-by-side technical comparison matrix matching Elite FUT SNIPER against all 50 competitor bots.",
    tag: "Tool",
    badge: "50 Comparisons",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/tools/sniping-guide",
    label: "Ultimate Sniping & Trading Guide",
    category: "Tools & Resources",
    desc: "Mastery guide on search filter mechanics, millisecond delay tuning, and anti-ban safe configurations.",
    tag: "Guide",
    badge: "Mastery",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/tools/tax-calculator",
    label: "EA Tax & Profit Calculator",
    category: "Tools & Resources",
    desc: "Instant 5% EA transfer market tax calculator with profit margin and ROI projections for FUT flips.",
    tag: "Calculator",
    badge: "Tax / ROI",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/volt-velocity",
    label: "Volt Velocity Latency Engine",
    category: "Tools & Resources",
    desc: "Architectural overview of our sub-20ms direct DOM execution pipeline and anti-detection algorithms.",
    tag: "Performance",
    badge: "20ms Speed",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/bakers-bot-developer",
    label: "Developer Origin Story",
    category: "Tools & Resources",
    desc: "The authentic story of the original Baker's Bot engineer rebuilt for modern EA FC 26 & 27 market anti-cheat.",
    tag: "Story",
    badge: "Origin",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },

  // 4. Content & Intel
  {
    href: "/blog",
    label: "Tactical Intel Hub (Blog)",
    category: "Content & Intel",
    desc: "Market trend analysis, promo preparation breakdowns, and expert transfer trading strategies.",
    tag: "Blog",
    badge: "Market Intel",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    href: "/article/tactical-intel",
    label: "Tactical Market Intelligence Briefing",
    category: "Content & Intel",
    desc: "In-depth strategic market briefing covering high-yield filters and bot operational safety.",
    tag: "Briefing",
    badge: "Report",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },

  // 5. Account & Authentication
  {
    href: "/login",
    label: "Member Login",
    category: "Account & Portal",
    desc: "Secure Firebase authentication portal for active subscribers and trial users.",
    tag: "Auth",
    badge: "Portal",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/register",
    label: "Create Account / Sign Up",
    category: "Account & Portal",
    desc: "Free registration page to claim trial access and generate user credentials.",
    tag: "Auth",
    badge: "Registration",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/dashboard",
    label: "User Dashboard",
    category: "Account & Portal",
    desc: "Manage your active license key, download latest build archives, and monitor account status.",
    tag: "Member Area",
    badge: "Protected",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/forgot-password",
    label: "Forgot Password",
    category: "Account & Portal",
    desc: "Automated password recovery and email reset link generator.",
    tag: "Recovery",
    badge: "Self-Service",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },
  {
    href: "/reset-password",
    label: "Reset Password",
    category: "Account & Portal",
    desc: "Secure password reset confirmation view for authenticated recovery tokens.",
    tag: "Recovery",
    badge: "Secure",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },

  // 6. Support & Legal
  {
    href: "/contact",
    label: "Contact & Technical Support",
    category: "Support & Legal",
    desc: "Reach out directly to our developer team and community support desk.",
    tag: "Support",
    badge: "Help Desk",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    href: "/privacy",
    label: "Privacy Policy",
    category: "Support & Legal",
    desc: "Detailed data protection policy outlining zero server-side credential collection.",
    tag: "Compliance",
    badge: "GDPR / CCPA",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },
  {
    href: "/terms",
    label: "Terms of Service",
    category: "Support & Legal",
    desc: "Software licensing terms, refund policy, and acceptable usage agreements.",
    tag: "Legal",
    badge: "Terms",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },

  // 7. Competitor Comparison Pages (44 Pages)
  {
    href: "/bakers-bot-vs-elitefutbot",
    label: "Baker's Bot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Compare Baker's Bot cloud autobuyer vs Elite FUT SNIPER local browser extension.",
    tag: "Comparison",
    badge: "Same Dev",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/eafcsniper-vs-elitefutbot",
    label: "EAFC Sniper vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Detailed teardown of EAFC Sniper vs Elite FUT SNIPER speed, safety, and pricing.",
    tag: "Comparison",
    badge: "Desktop vs Ext",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/easyfutweb-vs-elitefutbot",
    label: "EasyFUT Web vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Analysis of EasyFUT Web browser scripts vs full-featured Elite FUT SNIPER automation.",
    tag: "Comparison",
    badge: "Script vs Suite",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/easysbc-vs-elitefutbot",
    label: "EasySBC vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Comparing EasySBC solving utility against our integrated 1-click in-game solver & sniper.",
    tag: "Comparison",
    badge: "Solver vs All-in-One",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/exesniper-vs-elitefutbot",
    label: "EXE Sniper vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "EXE Sniper standalone executable vs Elite FUT SNIPER cross-platform Chrome extension.",
    tag: "Comparison",
    badge: ".EXE vs Chrome",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/fc26snipingbot-vs-elitefutbot",
    label: "FC 26 Sniping Bot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Comparing FC26 Sniping Bot features against our Next-Gen FC 26 & FC 27 architecture.",
    tag: "Comparison",
    badge: "FC 26 Legacy",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/fifasnipebot-vs-elitefutbot",
    label: "FIFA Snipe Bot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Legacy FIFA Snipe Bot vs modernized, anti-detection Elite FUT SNIPER.",
    tag: "Comparison",
    badge: "Legacy Bot",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },
  {
    href: "/futbotclub-vs-elitefutbot",
    label: "FUT Bot Club vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Cloud service comparison: credential risks vs 100% local client-side security.",
    tag: "Comparison",
    badge: "Cloud vs Local",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/futbotmanager-vs-elitefutbot",
    label: "FUT Bot Manager vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Desktop multi-instance manager vs seamless lightweight in-browser automation.",
    tag: "Comparison",
    badge: "Desktop Client",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futcloud-vs-elitefutbot",
    label: "FUT Cloud vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Remote server latency vs 20ms local browser execution without password transfer.",
    tag: "Comparison",
    badge: "No Passwords",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/futcoinbuddy-vs-elitefutbot",
    label: "FUT Coin Buddy vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Coin Buddy feature analysis, pricing comparison, and response time testing.",
    tag: "Comparison",
    badge: "Comparison",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futdroid-vs-elitefutbot",
    label: "FUT Droid vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Android companion app automation vs desktop Chrome power and AI solver engine.",
    tag: "Comparison",
    badge: "Mobile vs PC/Mac",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  {
    href: "/futearn-vs-elitefutbot",
    label: "FutEarn vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FutEarn cloud bot vs zero-credential sharing local browser sniping technology.",
    tag: "Comparison",
    badge: "Cloud Autobuyer",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/futgenie-vs-elitefutbot",
    label: "FUT Genie vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Genie browser plugin comparison: AI SBC algorithms and speed benchmarks.",
    tag: "Comparison",
    badge: "Extension",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futgg-vs-elitefutbot",
    label: "FUT.GG vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT.GG database and squad builder vs in-game automated 1-click execution.",
    tag: "Comparison",
    badge: "Database vs Bot",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/futhunter-vs-elitefutbot",
    label: "FUT Hunter vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Hunter filter automation compared with Elite FUT SNIPER multi-target presets.",
    tag: "Comparison",
    badge: "Filters",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futinator-vs-elitefutbot",
    label: "Futinator vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Futinator extension features vs Elite FUT SNIPER humanized delays and anti-ban shield.",
    tag: "Comparison",
    badge: "Popular Tool",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/futlocker-vs-elitefutbot",
    label: "FUT Locker vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Evaluation of FUT Locker tools, UI responsiveness, and sniping reliability.",
    tag: "Comparison",
    badge: "Utility",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futmaker-vs-elitefutbot",
    label: "FUT Maker vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Maker automated squad builder vs Elite AI SBC solver & auto-buy engine.",
    tag: "Comparison",
    badge: "Squad Builder",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    href: "/futmania-vs-elitefutbot",
    label: "FUT Mania vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Comparing FUT Mania bot capabilities, pricing structure, and user security.",
    tag: "Comparison",
    badge: "Desktop Bot",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futmillionaire-vs-elitefutbot",
    label: "FUT Millionaire vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Classic FUT Millionaire program compared against modern, low-latency 2026 web tech.",
    tag: "Comparison",
    badge: "Legacy Software",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },
  {
    href: "/futrich-vs-elitefutbot",
    label: "FUT Rich vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Rich trading signals vs automated instant sniping and card flipping.",
    tag: "Comparison",
    badge: "Signals vs Bot",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futsimpletrader-vs-elitefutbot",
    label: "FUT Simple Trader vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Manual trading guides vs autonomous 20ms local sniping with an integrated AI SBC solver.",
    tag: "Comparison",
    badge: "Manual vs Auto",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futsniper-vs-elitefutbot",
    label: "FUT Sniper vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Legacy datacenter bot with 150–300ms delays vs instant in-browser execution.",
    tag: "Comparison",
    badge: "Datacenter Lag",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/futsniperweb-vs-elitefutbot",
    label: "FUT Sniper Web vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Sniper Web extension features, price, and ban-safety audit.",
    tag: "Comparison",
    badge: "Web Extension",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futsnipingbot-vs-elitefutbot",
    label: "FUT Sniping Bot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Comprehensive speed, reliability, and security breakdown between both autobuyers.",
    tag: "Comparison",
    badge: "Benchmark",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/futsnipingbot24-vs-elitefutbot",
    label: "FUT Sniping Bot 24 vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FC 24 legacy bot versus current FC 26 & FC 27 compatible architecture.",
    tag: "Comparison",
    badge: "FC 24 Legacy",
    badgeColor: "bg-gray-500/15 text-gray-300 border-gray-500/30",
  },
  {
    href: "/futstarz-vs-elitefutbot",
    label: "FUT Starz vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Starz sniping tools compared with Elite FUT SNIPER multi-filter capabilities.",
    tag: "Comparison",
    badge: "Autobuyer",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/futtbot-vs-elitefutbot",
    label: "FUTTBot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUTTBot open-source script vs hardened, enterprise-grade bot with anti-ban heuristics.",
    tag: "Comparison",
    badge: "Open Source vs Pro",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/futultimatesniper-vs-elitefutbot",
    label: "FUT Ultimate Sniper vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Ultimate Sniper features, UI ergonomics, and execution speed comparison.",
    tag: "Comparison",
    badge: "Sniping Tool",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/paletools-vs-elitefutbot",
    label: "Paletools vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Paletools web enhancement script vs dedicated autonomous sniping & AI SBC solving.",
    tag: "Comparison",
    badge: "Script vs Autobuyer",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    href: "/shortfuts-vs-elitefutbot",
    label: "ShortFUTs vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Keyboard shortcut assistant vs complete hands-free automated sniping & buying.",
    tag: "Comparison",
    badge: "Shortcuts vs Auto",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/sniperbotitalia-vs-elitefutbot",
    label: "Sniper Bot Italia vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Regional Italian sniping bot comparison with international 20ms Elite FUT SNIPER.",
    tag: "Comparison",
    badge: "Regional Bot",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/snipesensei-vs-elitefutbot",
    label: "Snipe Sensei vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Snipe Sensei trading utility compared against our real-time DOM interception suite.",
    tag: "Comparison",
    badge: "Trading Utility",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/steviessniper-vs-elitefutbot",
    label: "Stevie's Sniper vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Stevie's Sniper automation mechanics, pricing, and compatibility evaluation.",
    tag: "Comparison",
    badge: "Autobuyer",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/utsniper-vs-elitefutbot",
    label: "UT Sniper vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "UT Sniper bot features, speed benchmarks, and security comparison.",
    tag: "Comparison",
    badge: "UT Bot",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/fcenhancer-vs-elitefutbot",
    label: "FC Enhancer vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FC Enhancer (FUT Enhancer by FUTNext) DOM injection vs sub-20ms Chrome Side Panel HUD.",
    tag: "Comparison",
    badge: "Injected DOM",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  {
    href: "/futtradebuddy-vs-elitefutbot",
    label: "FUT Trade Buddy vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Trade Buddy linear delays and single-filter limits vs 15+ parallel targets and AI SBC solver.",
    tag: "Comparison",
    badge: "Single Filter",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/futfun-vs-elitefutbot",
    label: "FutFun vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FutFun predatory 10%–20% profit commission vs flat $19.99/yr license with 100% profit retention.",
    tag: "Comparison",
    badge: "Coin Siphon",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/futcoinharvester-vs-elitefutbot",
    label: "FUT Coin Harvester vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Coin Harvester password handover and datacenter IP bans vs 100% local, zero-credential AI engine.",
    tag: "Comparison",
    badge: "Cloud Ban Risk",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/futautobuyer-vs-elitefutbot",
    label: "FUT Auto Buyer vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "FUT Auto Buyer generic macro scripts and brittle selectors vs enterprise-grade Manifest V3 bot.",
    tag: "Comparison",
    badge: "Macro Scripts",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  {
    href: "/lenabot-vs-elitefutbot",
    label: "Lena Bot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Lena Bot PS Remote Play video lag and coin muling API risks vs 100% safe sub-20ms Chrome HUD.",
    tag: "Comparison",
    badge: "Muling Risk",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/magicbuyer-vs-elitefutbot",
    label: "MagicBuyer vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "MagicBuyer Tampermonkey thread locking and soft bans vs native sub-20ms WebSocket bot.",
    tag: "Comparison",
    badge: "Soft-Ban Risk",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/raven-vs-elitefutbot",
    label: "Raven vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Raven for FIFA abandoned userscript and selector rot vs actively maintained 20ms AI suite.",
    tag: "Comparison",
    badge: "Abandoned Script",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  {
    href: "/fc27autotrader-vs-elitefutbot",
    label: "FC27 Auto Trader vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Data Menu Limited extension linear delay soft bans vs isolated 20ms Side Panel with neural AI SBC solver.",
    tag: "Comparison",
    badge: "Linear Delay",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  {
    href: "/futisland-vs-elitefutbot",
    label: "FUT ISLAND vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "In-DOM button clutter, 75ms–120ms latency, and risky anti-captcha bypass claims vs sub-20ms WebSocket speed.",
    tag: "Comparison",
    badge: "Anti-Captcha Risk",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/nokafut-vs-elitefutbot",
    label: "NokaFut vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Hybrid 'NOLTOK' manual hotkeys and 80ms–150ms in-DOM delays vs autonomous 20ms WebSocket engine and AI SBC solver.",
    tag: "Comparison",
    badge: "NOLTOK Hotkeys",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/cheatas-vs-elitefutbot",
    label: "Cheat.as vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Dangerous $29/mo ($348/yr) desktop cheat launcher with severe EAAC ban risks vs sandboxed 20ms Chrome Side Panel.",
    tag: "Comparison",
    badge: "EAAC Ban Risk",
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    href: "/fccopilot-vs-elitefutbot",
    label: "FC Copilot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Disappointing 3.67★ store rating, expiring FCP token points, and 70ms–110ms click lag vs isolated 20ms Side Panel HUD.",
    tag: "Comparison",
    badge: "3.67★ Store Rating",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  {
    href: "/goatbot-vs-elitefutbot",
    label: "GOATBot vs Elite FUT SNIPER",
    category: "Competitor Comparisons",
    desc: "Manual developer-mode ZIP sideloading, unreleased roadmap-only SBC solver, and Gumroad billing vs production 20ms Side Panel HUD.",
    tag: "Comparison",
    badge: "Unpacked ZIP Sideload",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },

  // 8. International Localization (Tier 1)
  {
    href: "/es",
    label: "Spanish Homepage (Español)",
    category: "International (Tier 1)",
    desc: "Página principal en español para España y Latinoamérica.",
    tag: "Español",
    badge: "ES",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/es/fc27-fut-snipe-bot",
    label: "FC 27 FUT Snipe Bot (Español)",
    category: "International (Tier 1)",
    desc: "Bot de tradeo y sniping para EA FC 27 en español.",
    tag: "Español",
    badge: "ES",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/es/fc27-fut-sniping-bot-autobuyer-features",
    label: "FC 27 Autobuyer Features (Español)",
    category: "International (Tier 1)",
    desc: "Funciones completas del bot de tradeo en español.",
    tag: "Español",
    badge: "ES",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    href: "/pt",
    label: "Portuguese Homepage (Brasil / Portugal)",
    category: "International (Tier 1)",
    desc: "Página principal em português para o mercado brasileiro e português.",
    tag: "Português",
    badge: "PT",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/pt/fc27-fut-snipe-bot",
    label: "FC 27 FUT Snipe Bot (Português)",
    category: "International (Tier 1)",
    desc: "Bot de trade e autobuyer para EA FC 27 em português.",
    tag: "Português",
    badge: "PT",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/pt/fc27-fut-sniping-bot-autobuyer-features",
    label: "FC 27 Autobuyer Features (Português)",
    category: "International (Tier 1)",
    desc: "Recursos completos do bot de trade em português.",
    tag: "Português",
    badge: "PT",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    href: "/fr",
    label: "French Homepage (Français)",
    category: "International (Tier 1)",
    desc: "Page d'accueil en français pour la France, Belgique et Afrique francophone.",
    tag: "Français",
    badge: "FR",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/fr/fc27-fut-snipe-bot",
    label: "FC 27 FUT Snipe Bot (Français)",
    category: "International (Tier 1)",
    desc: "Bot achat revente et autobuyer EA FC 27 en français.",
    tag: "Français",
    badge: "FR",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/fr/fc27-fut-sniping-bot-autobuyer-features",
    label: "FC 27 Autobuyer Features (Français)",
    category: "International (Tier 1)",
    desc: "Fonctionnalités complètes du bot d'achat revente en français.",
    tag: "Français",
    badge: "FR",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    href: "/de",
    label: "German Homepage (Deutsch)",
    category: "International (Tier 1)",
    desc: "Hauptseite auf Deutsch für Deutschland, Österreich und die Schweiz.",
    tag: "Deutsch",
    badge: "DE",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  {
    href: "/de/fc27-fut-snipe-bot",
    label: "FC 27 FUT Snipe Bot (Deutsch)",
    category: "International (Tier 1)",
    desc: "FC 27 Autobuyer und Sniping Bot auf Deutsch.",
    tag: "Deutsch",
    badge: "DE",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  {
    href: "/de/fc27-fut-sniping-bot-autobuyer-features",
    label: "FC 27 Autobuyer Features (Deutsch)",
    category: "International (Tier 1)",
    desc: "Alle Funktionen des deutschen FC 27 Autobuyers.",
    tag: "Deutsch",
    badge: "DE",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
];

const CATEGORIES = [
  "All Pages",
  "Core & Products",
  "International (Tier 1)",
  "SBC Solving Suite",
  "Tools & Resources",
  "Content & Intel",
  "Account & Portal",
  "Support & Legal",
  "Competitor Comparisons",
];

export default function LinksDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Pages");

  const filteredLinks = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return ALL_LINKS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Pages" || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      return (
        item.label.toLowerCase().includes(query) ||
        item.href.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        (item.tag && item.tag.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Pages": ALL_LINKS.length };
    for (const link of ALL_LINKS) {
      counts[link.category] = (counts[link.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Group displayed links by category when viewing "All Pages" without a search query
  const groupedCategories = useMemo(() => {
    if (selectedCategory !== "All Pages" || searchQuery) {
      return null;
    }
    const categoriesInOrder = CATEGORIES.filter((c) => c !== "All Pages");
    return categoriesInOrder.map((cat) => ({
      name: cat,
      links: ALL_LINKS.filter((l) => l.category === cat),
    }));
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Core & Products":
        return <Bot className="w-4 h-4 text-primary" />;
      case "SBC Solving Suite":
        return <Sparkles className="w-4 h-4 text-primary" />;
      case "Tools & Resources":
        return <Wrench className="w-4 h-4 text-primary" />;
      case "Content & Intel":
        return <BookOpen className="w-4 h-4 text-primary" />;
      case "Account & Portal":
        return <UserCheck className="w-4 h-4 text-primary" />;
      case "Support & Legal":
        return <Shield className="w-4 h-4 text-primary" />;
      case "Competitor Comparisons":
        return <Swords className="w-4 h-4 text-primary" />;
      default:
        return <Layers className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-80 right-0 w-[450px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-10 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <EyeOff className="w-3.5 h-3.5" />
              <span>noindex, nofollow active</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{ALL_LINKS.length} Total Registered Pages</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase font-headline">
            Elite FUT SNIPER <span className="text-primary italic">Route Directory</span>
          </h1>
          <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
            Internal master index of all active production routes, tools, SBC solvers, guides, account views, and all 36 competitor teardown pages.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-400 font-mono">Total Routes</div>
              <div className="text-xl font-bold text-white mt-0.5">{ALL_LINKS.length}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-400 font-mono">Competitor Pages</div>
              <div className="text-xl font-bold text-amber-400 mt-0.5">36</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-400 font-mono">Categories</div>
              <div className="text-xl font-bold text-cyan-400 mt-0.5">7</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs text-gray-400 font-mono">Search Status</div>
              <div className="text-xl font-bold text-primary mt-0.5">
                {filteredLinks.length} match{filteredLinks.length === 1 ? "" : "es"}
              </div>
            </div>
          </div>
        </header>

        {/* Controls: Search & Category Filters */}
        <div className="sticky top-20 z-30 mb-8 p-4 rounded-2xl bg-[#0e0e0e]/90 backdrop-blur-xl border border-white/10 shadow-2xl space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by page name, route path (/sbc-solver), keyword, or competitor..."
              className="w-full pl-11 pr-10 py-3 bg-black/60 border border-white/10 focus:border-primary/60 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-400 hover:text-white px-1.5 py-0.5 bg-white/10 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-primary" />
              <span>Filter:</span>
            </div>
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-black font-bold shadow-lg shadow-primary/20"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-black/20 text-black font-black"
                        : "bg-black/40 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Links Grid View */}
        {groupedCategories ? (
          /* Grouped by category view */
          <div className="space-y-12">
            {groupedCategories.map((group) => (
              <section key={group.name} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(group.name)}
                    <h2 className="text-base font-bold uppercase tracking-wider text-white">
                      {group.name}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-gray-400">
                    {group.links.length} routes
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.links.map((link) => (
                    <DirectoryCard key={link.href} link={link} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Filtered or Searched view */
          <div>
            {filteredLinks.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono pb-2 border-b border-white/10">
                  <span>
                    Showing {filteredLinks.length} route{filteredLinks.length === 1 ? "" : "s"}
                  </span>
                  {selectedCategory !== "All Pages" && (
                    <span className="text-primary">{selectedCategory}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredLinks.map((link) => (
                    <DirectoryCard key={link.href} link={link} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <Compass className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">No Matching Routes Found</h3>
                <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">
                  No pages match &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try searching for another keyword or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Pages");
                  }}
                  className="mt-4 px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DirectoryCard({ link }: { link: DirectoryLink }) {
  return (
    <Link
      href={link.href}
      className="group flex flex-col justify-between p-4 sm:p-5 bg-[#121212]/70 hover:bg-[#181818] border border-white/10 hover:border-primary/40 rounded-xl transition-all duration-200 relative overflow-hidden shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
    >
      {/* Glow Hover Element */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-primary/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          {link.badge && (
            <span
              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                link.badgeColor || "bg-white/5 text-gray-300 border-white/10"
              }`}
            >
              {link.badge}
            </span>
          )}
          {link.tag && (
            <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded ml-auto">
              {link.tag}
            </span>
          )}
        </div>

        <h3 className="font-bold text-white group-hover:text-primary transition-colors text-sm sm:text-base mb-1.5 flex items-center gap-1.5">
          <span>{link.label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary shrink-0" />
        </h3>

        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {link.desc}
        </p>
      </div>

      <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 group-hover:text-gray-300">
        <span className="truncate max-w-[200px] text-gray-400 group-hover:text-primary transition-colors">
          {link.href}
        </span>
        <span className="text-[10px] uppercase text-gray-400 group-hover:text-white">
          Inspect →
        </span>
      </div>
    </Link>
  );
}
