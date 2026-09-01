import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Puzzle,
  Zap,
  Tag,
  Cpu,
  Shield,
  Filter,
  Award,
  Sparkles,
  Calculator,
  TrendingUp,
  CheckCircle2,
  GraduationCap,
  CalendarCheck,
  XCircle,
  X,
  Flame,
  Clock,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import {
  SUPPORTED_LOCALES,
  isValidLocale,
  getLocaleData,
} from "@/data/locales";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

const PRICE_TIER = {
  sold: 4,
  threshold: 10,
  currentPrice: 19.99,
  nextPrice: 29.99,
};

// Map string icon names to Lucide components
const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Tag,
  Cpu,
  Shield,
  Filter,
  Award,
  Sparkles,
  Calculator,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  CalendarCheck,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = getLocaleData(locale);
  const baseUrl = "https://elitefutbot.com";

  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    keywords: dict.home.meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "x-default": `${baseUrl}/`,
        en: `${baseUrl}/`,
        es: `${baseUrl}/es`,
        pt: `${baseUrl}/pt`,
        fr: `${baseUrl}/fr`,
        de: `${baseUrl}/de`,
      },
    },
    openGraph: {
      title: dict.home.meta.ogTitle,
      description: dict.home.meta.ogDescription,
      url: `${baseUrl}/${locale}`,
      locale: dict.locale.ogLocale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `Elite FUT SNIPER – ${dict.locale.nativeName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.home.meta.ogTitle,
      description: dict.home.meta.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function LocalizedHomePage({ params }: PageProps) {
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
        "@id": `${baseUrl}/${locale}#software`,
        name: "Elite FUT SNIPER",
        operatingSystem: "Windows, macOS, ChromeOS",
        applicationCategory: "GameApplication",
        image: `${baseUrl}/og-image.png`,
        brand: {
          "@type": "Brand",
          name: "Elite FUT SNIPER",
        },
        description: dict.home.meta.description,
        offers: {
          "@type": "Offer",
          url: `${baseUrl}/${locale}`,
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
        "@id": `${baseUrl}/${locale}#breadcrumb`,
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
            name: dict.locale.nativeName,
            item: `${baseUrl}/${locale}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${locale}#faq`,
        mainEntity: dict.home.faqs.items.map((faq) => ({
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

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Creator & Beta badges */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-card/60 border border-primary/25 hover:border-primary/45 px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full mb-7 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest bg-primary text-dark px-2 py-0.5 rounded-md shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                {dict.home.creatorBadge.originalCreator}
              </span>
              <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                {dict.home.creatorBadge.byDeveloper}
                <span className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/40 px-2.5 py-0.5 rounded-full text-white font-black shadow-[0_0_12px_rgba(204,255,0,0.2)]">
                  <Image
                    alt="Bakers Bot Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-full object-cover border border-primary/50"
                    src="/bakersbot-avatar.webp"
                  />
                  <span className="text-primary font-black">Bakers Bot</span>
                </span>
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-3.5 bg-white/15" />
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-md">
                {dict.home.creatorBadge.freeBeta}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] w-[87%]" />
                </div>
                <span className="text-xs font-black text-emerald-400 font-technical">
                  {dict.home.creatorBadge.slotsFilled}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 tracking-tight leading-tight text-white">
            {dict.home.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_8px_rgba(204,255,0,0.35)]">
              {dict.home.hero.titleHighlight}
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_8px_rgba(204,255,0,0.35)]">
              {dict.home.hero.titleHighlight2}
            </span>
            <br />
            {dict.home.hero.titleLine3}
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-7 leading-relaxed font-medium">
            {dict.home.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-8">
            <Link
              className="group relative px-7 py-3.5 bg-primary text-dark font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.4)] overflow-hidden"
              href="#pricing"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                {dict.home.hero.ctaPricing}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link
              className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
              href={`/${locale}/fc27-fut-snipe-bot#demo`}
            >
              <PlayCircle className="w-5 h-5" />
              {dict.home.hero.ctaDemo}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 font-medium border-t border-white/5 pt-6 sm:pt-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-primary" />
              {dict.home.hero.stats.antiBan}
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
            <div className="flex items-center gap-2">
              <Puzzle className="w-4.5 h-4.5 text-primary" />
              {dict.home.hero.stats.localExtension}
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              <span className="text-[9px] font-black text-primary uppercase tracking-tighter mr-1">
                PROVEN LEGACY
              </span>
              <Image
                alt="Bakers Bot Dev Team"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full object-cover border border-primary/40 shadow-sm"
                src="/bakersbot-avatar.webp"
              />
              <span className="text-white font-bold text-xs">
                {dict.home.hero.stats.provenLegacy}
              </span>
            </div>
          </div>

          {/* FLOATING PROOF UI */}
          <div className="mt-16 sm:mt-24 relative mx-auto max-w-4xl flex items-center justify-center">
            <div className="absolute size-[350px] rounded-full bg-primary/10 blur-[90px]" />

            <div className="relative w-full max-w-[380px] drop-shadow-[0_0_60px_rgba(198,255,61,0.18)] transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute -inset-3 rounded-2xl border border-primary/20 pointer-events-none" />

              {/* Main Bot Console UI */}
              <Image
                alt="Elite FUT SNIPER side panel UI showing snipe filters, price range, and live stats"
                width={600}
                height={958}
                className="w-full h-auto relative rounded-xl shadow-2xl z-10"
                src="/product-screenshot-panel.png"
                priority
              />

              {/* FLOATING PROOF 1 (LEFT): Yamal Snipe Price Stats */}
              <div className="absolute -left-16 sm:-left-44 lg:-left-56 top-1/6 w-[180px] sm:w-[240px] -rotate-6 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 hover:-rotate-3 transition-all duration-300 group/left">
                <div className="relative rounded-2xl p-1 bg-[#090909] border border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.2)] overflow-hidden">
                  <div className="bg-[#121212] px-3 py-1.5 border-b border-emerald-500/30 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {dict.home.hero.proof.snipeProfitBadge}
                    </span>
                    <span className="text-emerald-300 font-bold text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      {dict.home.hero.proof.snipeProfitValue}
                    </span>
                  </div>
                  <Image
                    alt="Yamal 97 Snipe Price Stats Proof"
                    width={292}
                    height={339}
                    quality={85}
                    className="w-full h-auto rounded-xl block"
                    src="/yamal-snipe-proof-stats.png"
                  />
                </div>
              </div>

              {/* FLOATING PROOF 2 (RIGHT): 97 Lamine Yamal TOTS Player Card */}
              <div className="absolute -right-14 sm:-right-36 lg:-right-48 -bottom-10 w-[150px] sm:w-[200px] rotate-6 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 hover:rotate-12 transition-all duration-300 group/right">
                <div className="relative rounded-2xl p-1 bg-[#090909] border border-primary/50 shadow-[0_0_25px_rgba(204,255,0,0.2)] overflow-hidden">
                  <div className="bg-[#121212] px-2.5 py-1 border-b border-primary/30 text-center text-xs">
                    <span className="text-primary font-bold">
                      {dict.home.hero.proof.yamalBadge}
                    </span>
                  </div>
                  <Image
                    alt="97 Lamine Yamal Rating TOTS Card Snipe Result"
                    width={219}
                    height={257}
                    quality={85}
                    className="w-full h-auto rounded-xl block"
                    src="/yamal-97-card.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHY WE OUTPERFORM SECTION */}
      <section className="py-24 bg-[#0A0A0A] relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {dict.home.outperform.title}{" "}
              <span className="text-primary">
                {dict.home.outperform.titleHighlight}
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
              {dict.home.outperform.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FEATURED: Humanization++ Mode */}
            <div className="glass-card p-8 rounded-2xl md:col-span-2 lg:col-span-3 border-2 border-primary bg-gradient-to-r from-primary/[0.12] via-primary/[0.05] to-transparent shadow-[0_0_40px_rgba(204,255,0,0.15)] relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary text-dark font-black flex items-center justify-center shadow-md">
                      <ShieldCheck className="w-7 h-7 text-dark" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/30 px-2.5 py-0.5 rounded-full">
                        {dict.home.outperform.humanization.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                        {dict.home.outperform.humanization.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed mb-6 font-normal">
                    {dict.home.outperform.humanization.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    {dict.home.outperform.humanization.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold ${
                          i === 0
                            ? "bg-primary text-dark font-black tracking-wider uppercase text-[11px]"
                            : "bg-white/10 text-white border border-white/10"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            i === 0 ? "text-dark" : "text-primary"
                          }`}
                        />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-dark/80 border border-white/10 text-center min-w-[200px]">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                    {dict.home.outperform.humanization.stealthStatus}
                  </span>
                  <span className="text-3xl font-black text-white font-display my-1">
                    {dict.home.outperform.humanization.safeBadge}
                  </span>
                  <span className="text-xs text-gray-300">
                    {dict.home.outperform.humanization.protectionLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* 11 Module Cards */}
            {dict.home.outperform.cards.map((card, idx) => {
              const IconComp = ICONS_MAP[card.iconName] || Zap;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <IconComp className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/fc27-fut-sniping-bot-autobuyer-features`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)]"
            >
              {dict.home.outperform.viewAllFeaturesCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* US VS COMPETITORS */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black mb-6">
              {dict.home.comparison.title}{" "}
              <span className="text-primary">
                {dict.home.comparison.titleHighlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {dict.home.comparison.subtitle}
            </p>
          </div>

          <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-8 px-8 text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">
                      {dict.home.comparison.col1}
                    </th>
                    <th className="py-8 px-8 text-primary font-black text-center bg-primary/5 border-l border-r border-primary/20">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-2">
                          {dict.home.comparison.goldStandard}
                        </span>
                        <span className="text-2xl tracking-tighter">
                          {dict.home.comparison.col2}
                        </span>
                      </div>
                    </th>
                    <th className="py-8 px-8 text-gray-400 font-bold text-xs uppercase tracking-[0.2em] text-center">
                      {dict.home.comparison.col3}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {dict.home.comparison.rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-6 px-8 font-bold text-white">
                        {row.feature}
                      </td>
                      <td className="py-6 px-8 text-center bg-primary/5 border-l border-r border-primary/10">
                        <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
                      </td>
                      <td className="py-6 px-8 text-center">
                        <XCircle className="w-8 h-8 text-red-500/50 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 relative" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {dict.home.pricing.title}{" "}
              <span className="text-primary">
                {dict.home.pricing.titleHighlight}
              </span>
            </h2>
            <p className="text-gray-400">{dict.home.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Beta Card */}
            <div className="glass-card rounded-3xl p-8 flex flex-col relative group">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {dict.home.pricing.freeCard.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">
                    {dict.home.pricing.freeCard.price}
                  </span>
                  <span className="text-gray-400 font-medium">
                    {dict.home.pricing.freeCard.period}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {dict.home.pricing.freeCard.desc}
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {dict.home.pricing.freeCard.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                className="block text-center py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-white"
                href="/register"
              >
                {dict.home.pricing.freeCard.cta}
              </Link>
            </div>

            {/* Pro Sniper Card */}
            <div className="glass-card rounded-3xl p-8 flex flex-col border-primary/40 bg-primary/5 relative overflow-hidden shadow-[0_0_40px_rgba(204,255,0,0.05)] transform md:-translate-y-4">
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-dark text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  {dict.home.pricing.proCard.badge}
                </div>
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {dict.home.pricing.proCard.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">
                    {dict.home.pricing.proCard.price}
                  </span>
                  <span className="text-gray-400 line-through text-lg decoration-2 decoration-red-500/50">
                    {dict.home.pricing.proCard.originalPrice}
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {dict.home.pricing.proCard.guarantee}
                </div>

                <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-400/[0.06] px-4 py-3.5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-amber-400 font-black text-sm uppercase tracking-wide">
                      {dict.home.pricing.proCard.spotsLeft}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-red-500 transition-all"
                      style={{
                        width: `${
                          (PRICE_TIER.sold / PRICE_TIER.threshold) * 100
                        }%`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span className="text-gray-400">
                      {dict.home.pricing.proCard.soldText}
                    </span>
                    <span className="font-bold text-white">
                      {dict.home.pricing.proCard.nextPrice}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-300 mb-4 relative z-10">
                {dict.home.pricing.proCard.featuresHeader}
              </p>

              <ul className="space-y-3.5 mb-8 flex-grow relative z-10 divide-y divide-white/5">
                {dict.home.pricing.proCard.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-medium text-white pt-3.5 first:pt-0"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span>{item.text}</span>
                      {item.subtext && (
                        <span className="block text-xs text-gray-400 font-normal mt-0.5">
                          {item.subtext}
                        </span>
                      )}
                      {item.isSoon && (
                        <span className="ml-2 text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-1.5 py-0.5 rounded uppercase tracking-wide">
                          Soon
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              <Link
                className="relative z-10 block text-center py-4 rounded-xl bg-primary text-dark font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                href="https://checkout.dodopayments.com/buy/pdt_0NmKLEkBOT5JF3qkdNt0t?quantity=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.home.pricing.proCard.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCORD COMMUNITY REVIEWS */}
      <section
        className="py-20 bg-[#080808] border-t border-white/5 relative overflow-hidden"
        id="reviews"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-purple-400 mb-4">
              <svg
                className="w-4 h-4 fill-current text-[#5865F2]"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              {dict.home.reviews.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
              {dict.home.reviews.title}{" "}
              <span className="text-purple-400">
                {dict.home.reviews.titleHighlight}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              {dict.home.reviews.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {dict.home.reviews.items.map((rev, idx) => (
              <div
                key={idx}
                className={`relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                  <span className="text-purple-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {rev.user}
                  </span>
                  <span
                    className={`font-semibold text-[11px] ${rev.badgeColor}`}
                  >
                    {rev.badge}
                  </span>
                </div>
                <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                  <Image
                    src={rev.img}
                    alt={rev.alt}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 text-sm w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              {dict.home.reviews.discordCta}
            </Link>
            <Link
              href="https://github.com/elitefutbot/elitefutbot-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 text-sm border border-white/10 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {dict.home.reviews.githubCta}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="py-24 bg-dark" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-bold text-primary mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              {dict.home.faqs.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {dict.home.faqs.title}{" "}
              <span className="text-primary">
                {dict.home.faqs.titleHighlight}
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              {dict.home.faqs.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {dict.home.faqs.items.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all"
              >
                <div className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className="w-5 h-5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <div className="px-6 pb-6 text-gray-400 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA 1 */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
            {dict.home.ctaBottom1.title} <br />{" "}
            <span className="text-primary">
              {dict.home.ctaBottom1.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            {dict.home.ctaBottom1.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="px-10 py-5 bg-primary text-dark font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
              href="/register"
            >
              {dict.home.ctaBottom1.button}
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest font-bold">
            {dict.home.ctaBottom1.disclaimer}
          </p>
        </div>
      </section>

      {/* BOTTOM CTA 2 */}
      <section className="py-24 bg-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
            {dict.home.ctaBottom2.title}{" "}
            <span className="text-primary">
              {dict.home.ctaBottom2.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            {dict.home.ctaBottom2.subtitle}{" "}
            <span className="text-white font-bold decoration-primary decoration-4 underline underline-offset-4">
              {dict.home.ctaBottom2.subtitleHighlight}
            </span>
            !
          </p>
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-dark font-black text-2xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_60px_rgba(204,255,0,0.5)] active:scale-95"
              href="https://discord.gg/Rkb9nF6WG6"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              {dict.home.ctaBottom2.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
