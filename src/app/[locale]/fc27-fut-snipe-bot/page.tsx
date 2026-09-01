import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
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
  Filter,
  Cpu,
  Shield,
  TrendingUp,
  HelpCircle,
  Coins,
  Bot,
  CheckCircle2,
  Lock,
  MessageSquare,
  BarChart3,
  Flame,
  Check,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  SUPPORTED_LOCALES,
  isValidLocale,
  getLocaleData,
  SupportedLocale,
} from "@/data/locales";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = getLocaleData(locale);
  const baseUrl = "https://elitefutbot.com";

  return {
    title: dict.snipeBot.meta.title,
    description: dict.snipeBot.meta.description,
    keywords: dict.snipeBot.meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/fc27-fut-snipe-bot`,
      languages: {
        "x-default": `${baseUrl}/fc27-fut-snipe-bot`,
        en: `${baseUrl}/fc27-fut-snipe-bot`,
        es: `${baseUrl}/es/fc27-fut-snipe-bot`,
        pt: `${baseUrl}/pt/fc27-fut-snipe-bot`,
        fr: `${baseUrl}/fr/fc27-fut-snipe-bot`,
        de: `${baseUrl}/de/fc27-fut-snipe-bot`,
      },
    },
    openGraph: {
      title: dict.snipeBot.meta.ogTitle,
      description: dict.snipeBot.meta.ogDescription,
      url: `${baseUrl}/${locale}/fc27-fut-snipe-bot`,
      locale: dict.locale.ogLocale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `FC 27 FUT Snipe Bot – ${dict.locale.nativeName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.snipeBot.meta.ogTitle,
      description: dict.snipeBot.meta.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function LocalizedFC27FutSnipeBotPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getLocaleData(locale);
  const baseUrl = "https://elitefutbot.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/${locale}/fc27-fut-snipe-bot#software`,
        name: dict.snipeBot.meta.title,
        operatingSystem: "Windows, macOS, ChromeOS",
        applicationCategory: "GameApplication",
        image: `${baseUrl}/og-image.png`,
        brand: {
          "@type": "Brand",
          name: "Elite FUT SNIPER",
        },
        description: dict.snipeBot.meta.description,
        offers: {
          "@type": "Offer",
          url: `${baseUrl}/${locale}/fc27-fut-snipe-bot`,
          price: "19.99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Elite FUT SNIPER",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1420",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/${locale}/fc27-fut-snipe-bot#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FC 27 FUT Snipe Bot",
            item: `${baseUrl}/${locale}/fc27-fut-snipe-bot`,
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${baseUrl}/${locale}/fc27-fut-snipe-bot#howto`,
        name: dict.snipeBot.howItWorks.title,
        description: dict.snipeBot.howItWorks.subtitle,
        step: dict.snipeBot.howItWorks.steps.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.title,
          text: s.desc,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${locale}/fc27-fut-snipe-bot#faq`,
        mainEntity: dict.snipeBot.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow bg-[#070707] text-white font-sans selection:bg-primary selection:text-black">
        {/* HERO SECTION */}
        <header className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/10 blur-[140px] rounded-full -z-10 pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-xs font-black text-primary tracking-wider uppercase font-mono">
                {dict.snipeBot.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white leading-tight font-headline">
              {dict.snipeBot.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_16px_rgba(204,255,0,0.35)]">
                {dict.snipeBot.hero.titleHighlight}
              </span>
            </h1>

            <div className="max-w-3xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                {dict.snipeBot.hero.directAnswerSnippet}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                className="px-8 py-4 bg-primary text-black font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
                href="/register"
              >
                {dict.snipeBot.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto hover:border-primary/40"
                href="#demo"
              >
                <PlayCircle className="w-5 h-5 text-primary" />
                {dict.snipeBot.hero.ctaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span>{dict.snipeBot.hero.stats.speed}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{dict.snipeBot.hero.stats.bans}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{dict.snipeBot.hero.stats.solver}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark/60 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{dict.snipeBot.hero.stats.sandbox}</span>
              </div>
            </div>

            <div className="relative mx-auto max-w-4xl group" id="demo">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-cyan-500/20 to-primary/30 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#0d0d0d]">
                <div className="bg-[#141414] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-gray-400 ml-2">
                      EA FC 27 Live Sniping HUD – {dict.locale.nativeName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-mono">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    20MS LIVE DEMO
                  </div>
                </div>
                <div className="aspect-video w-full relative">
                  <LiteYouTubeEmbed
                    videoId="S0YuEelYNQ8"
                    title="EA FC 27 Sniping Bot & Autobuyer Live Demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 10 TECHNICAL MODULES */}
        <section className="py-20 lg:py-28 relative border-b border-white/5" id="features">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-3">
                <Bot className="w-3.5 h-3.5" />
                {dict.snipeBot.featuresHeading.badge}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.snipeBot.featuresHeading.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                {dict.snipeBot.featuresHeading.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dict.snipeBot.features.map((module) => (
                <div
                  key={module.num}
                  className="p-6 sm:p-7 rounded-2xl bg-[#111111]/80 hover:bg-[#161616] border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-primary font-mono">
                      {module.num}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        module.badgeColor || "bg-primary/15 text-primary border-primary/30"
                      }`}
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
                    {(module.highlights || []).map((item, i) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 bg-[#090909] border-b border-white/5" id="comparison">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 mb-3">
                <Flame className="w-3.5 h-3.5" />
                {dict.snipeBot.comparison.badge}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.snipeBot.comparison.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                {dict.snipeBot.comparison.subtitle}
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
                      Cloud Proxy Bots
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-gray-400 font-bold">
                      Manual Trading
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {dict.snipeBot.comparison.rows.map((row, idx) => (
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
          </div>
        </section>

        {/* 4-STEP HOW IT WORKS */}
        <section className="py-20 lg:py-28 relative border-b border-white/5" id="how-it-works">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-3">
                <Compass className="w-3.5 h-3.5" />
                {dict.snipeBot.howItWorks.badge}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.snipeBot.howItWorks.title}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                {dict.snipeBot.howItWorks.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dict.snipeBot.howItWorks.steps.map((step) => (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-[#111111]/80 hover:bg-[#161616] border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-primary font-mono">
                        {step.num}
                      </span>
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
                    <span>✓</span>
                  </div>
                </div>
              ))}
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
                  {dict.snipeBot.article.badge}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {dict.snipeBot.article.season}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.snipeBot.article.title}
              </h2>

              <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
                {dict.snipeBot.article.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/register"
                  className="px-6 py-3 bg-primary text-black font-bold text-sm rounded-xl hover:bg-white transition-all flex items-center gap-2"
                >
                  {dict.snipeBot.article.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/tools/sniping-guide"
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  {dict.snipeBot.article.ctaSecondary}
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
                FAQ
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {dict.snipeBot.faqs.map((faq, index) => (
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0c0c0c] border border-primary/30 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-4">
                {dict.snipeBot.cta.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.snipeBot.cta.title}
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                {dict.snipeBot.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  className="px-8 py-4 bg-primary text-black font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
                  href="/register"
                >
                  {dict.snipeBot.cta.button}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
                  href="https://discord.gg/Rkb9nF6WG6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  {dict.snipeBot.cta.discord}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
                {dict.snipeBot.cta.perks.map((perk, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
