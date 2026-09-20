import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  XCircle,
  MousePointerClick,
  Activity,
  Check,
  PlayCircle,
} from "lucide-react";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
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

const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Tag,
  Sliders,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Layout,
  Globe,
  MessageSquare,
  BarChart3,
  Lock,
  Sparkles,
  Coins,
  Wallet,
  Shield,
  Filter,
  Tv,
  Clock,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = getLocaleData(locale);
  const baseUrl = "https://elitefutbot.com";

  return {
    title: dict.featuresPage.meta.title,
    description: dict.featuresPage.meta.description,
    keywords: dict.featuresPage.meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features`,
      languages: {
        "x-default": `${baseUrl}/fc27-fut-sniping-bot-autobuyer-features`,
        en: `${baseUrl}/fc27-fut-sniping-bot-autobuyer-features`,
        es: `${baseUrl}/es/fc27-fut-sniping-bot-autobuyer-features`,
        pt: `${baseUrl}/pt/fc27-fut-sniping-bot-autobuyer-features`,
        fr: `${baseUrl}/fr/fc27-fut-sniping-bot-autobuyer-features`,
        de: `${baseUrl}/de/fc27-fut-sniping-bot-autobuyer-features`,
      },
    },
    openGraph: {
      title: dict.featuresPage.meta.ogTitle,
      description: dict.featuresPage.meta.ogDescription,
      url: `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features`,
      locale: dict.locale.ogLocale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `Features Suite – ${dict.locale.nativeName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.featuresPage.meta.ogTitle,
      description: dict.featuresPage.meta.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function LocalizedFeaturesPage({ params }: PageProps) {
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
        "@id": `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features#software`,
        name: dict.featuresPage.meta.title,
        operatingSystem: "Chrome OS, Windows, macOS, Linux",
        applicationCategory: "BrowserApplication",
        image: `${baseUrl}/og-image.png`,
        brand: {
          "@type": "Brand",
          name: "Elite FUT SNIPER",
        },
        description: dict.featuresPage.meta.description,
        offers: {
          "@type": "Offer",
          url: `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features`,
          price: "19.99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Elite FUT SNIPER",
          },
        },
        featureList: dict.featuresPage.features.map(
          (f) => `${f.num} ${f.title}: ${f.tagline}`
        ),
      },
      {
        "@type": "ItemList",
        name: `Elite FUT SNIPER 11-Module Features Arsenal (${dict.locale.nativeName})`,
        itemListElement: dict.featuresPage.features.map((feat, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${feat.num} ${feat.title}`,
          description: feat.description,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features#faq`,
        mainEntity: dict.featuresPage.faqs.items.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Features Suite",
            item: `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features`,
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

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.featuresPage.hero.eyebrow}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6">
            {dict.featuresPage.hero.titleLine1} <br className="hidden sm:inline" />
            <span className="bg-primary text-dark px-2 rounded box-decoration-clone">
              {dict.featuresPage.hero.titleHighlight}
            </span>
            {dict.featuresPage.hero.titleLine2}
          </h1>

          {/* Standalone AEO / GEO Definition Passage */}
          <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 mb-8 text-left">
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
              {dict.featuresPage.hero.directAnswerSnippet}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
            >
              {dict.featuresPage.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:border-primary/40 group backdrop-blur-sm"
            >
              <PlayCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>{dict.snipeBot.hero.ctaSecondary}</span>
            </a>
            <Link
              href="#features-list"
              className="w-full sm:w-auto px-6 py-4 text-gray-400 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5"
            >
              {dict.featuresPage.hero.ctaSecondary}
            </Link>
          </div>

          {/* Quick Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left mb-12">
            {dict.featuresPage.hero.trustHighlights.map((th, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
              >
                <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">
                  {th.label}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {th.title}
                </div>
                <div className="text-xs text-gray-300">{th.desc}</div>
              </div>
            ))}
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
                    {dict.snipeBot.hero.demoTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  {dict.snipeBot.hero.demoBadge}
                </div>
              </div>
              <div className="aspect-video w-full relative">
                <LiteYouTubeEmbed
                  videoId="bfqc1hCIAoQ"
                  title={`EA FC 27 Sniping Bot & Autobuyer Demonstration (${dict.locale.nativeName})`}
                  customPoster="/fc27-video-thumbnail.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID SECTION (01 - 11) */}
      <section id="features-list" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-3">
            {dict.featuresPage.featuresHeading.badge}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {dict.featuresPage.featuresHeading.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            {dict.featuresPage.featuresHeading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.featuresPage.features.map((feat) => {
            const Icon = (feat.iconName && ICONS_MAP[feat.iconName]) || Zap;
            const isFeatured = feat.isFeatured;

            return (
              <div
                key={feat.num}
                className={`rounded-2xl p-6 relative flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-gradient-to-b from-primary/[0.14] via-dark to-dark border-2 border-primary shadow-[0_0_35px_rgba(204,255,0,0.18)] md:col-span-2 lg:col-span-2 ring-1 ring-primary/40"
                    : "glass-card hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-10 rounded-xl grid place-items-center ${
                          isFeatured
                            ? "bg-primary text-dark font-black shadow-md"
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
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-1.5 mb-2">
                    {(feat.specs || []).map((sp, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-gray-300 font-medium"
                      >
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

      {/* HUMANIZATION++ DEEP DIVE FLAGSHIP SECTION */}
      <section className="py-20 bg-dark relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.04] blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-primary/[0.1] via-[#111] to-dark border-2 border-primary shadow-[0_0_50px_rgba(204,255,0,0.15)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-dark font-mono text-xs font-black uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{dict.featuresPage.humanizationDeepDive.badge}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-white mb-4">
                  {dict.featuresPage.humanizationDeepDive.title} <br />
                  <span className="text-primary">
                    {dict.featuresPage.humanizationDeepDive.titleHighlight}
                  </span>
                </h2>
                <p className="text-gray-200 text-base leading-relaxed mb-6 font-normal">
                  {dict.featuresPage.humanizationDeepDive.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="p-3.5 rounded-xl bg-dark/70 border border-white/10">
                    <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                      <MousePointerClick className="w-4 h-4 text-primary" />
                      {dict.featuresPage.humanizationDeepDive.bezierTitle}
                    </div>
                    <p className="text-xs text-gray-400">
                      {dict.featuresPage.humanizationDeepDive.bezierDesc}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-dark/70 border border-white/10">
                    <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                      <Activity className="w-4 h-4 text-primary" />
                      {dict.featuresPage.humanizationDeepDive.jitterTitle}
                    </div>
                    <p className="text-xs text-gray-400">
                      {dict.featuresPage.humanizationDeepDive.jitterDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-dark border border-white/15 text-center shrink-0 w-full lg:w-72">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-1">
                  {dict.featuresPage.humanizationDeepDive.safetyRecordLabel}
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-display my-2">
                  {dict.featuresPage.humanizationDeepDive.bansCount}
                </div>
                <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 py-1 px-2.5 rounded-full border border-emerald-500/30 inline-block mb-3">
                  {dict.featuresPage.humanizationDeepDive.verifiedBadge}
                </div>
                <p className="text-xs text-gray-400">
                  {dict.featuresPage.humanizationDeepDive.testSessionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE OUTPERFORM EVERYTHING (COMPARISON TABLE) */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-3">
              {dict.featuresPage.outperform.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
              {dict.featuresPage.outperform.title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              {dict.featuresPage.outperform.subtitle}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-5 px-6 text-gray-300 font-bold text-xs uppercase tracking-wider">
                      {dict.featuresPage.outperform.col1}
                    </th>
                    <th className="py-5 px-6 text-primary font-black text-sm uppercase tracking-wider bg-primary/10 border-l border-r border-primary/20">
                      {dict.featuresPage.outperform.col2}
                    </th>
                    <th className="py-5 px-6 text-gray-400 font-bold text-xs uppercase tracking-wider">
                      {dict.featuresPage.outperform.col3}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {dict.featuresPage.outperform.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-6 font-bold text-white">
                        {row.feature}
                      </td>
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
            {dict.featuresPage.outperform.points.map((pt) => {
              const Icon = (pt.iconName && ICONS_MAP[pt.iconName]) || Zap;
              return (
                <div
                  key={pt.title}
                  className="p-5 rounded-2xl bg-dark/70 border border-white/10 hover:border-primary/40 transition-colors"
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

      {/* ROADMAP SECTION */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white/[0.04] to-dark border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>{dict.featuresPage.roadmap.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">
                {dict.featuresPage.roadmap.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
                {dict.featuresPage.roadmap.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{dict.featuresPage.roadmap.status}</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark/90 border border-white/10 text-center shrink-0 min-w-[240px]">
              <div className="text-xs text-primary font-mono font-bold uppercase tracking-widest mb-1">
                {dict.featuresPage.roadmap.licenseBadge}
              </div>
              <div className="text-2xl font-black text-white font-display mb-2">
                {dict.featuresPage.roadmap.licenseTitle}
              </div>
              <p className="text-xs text-gray-400">
                {dict.featuresPage.roadmap.licenseDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-surface border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-2">
              {dict.featuresPage.faqs.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              {dict.featuresPage.faqs.title}
            </h2>
          </div>

          <div className="space-y-4">
            {dict.featuresPage.faqs.items.map((faq, idx) => (
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

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            {dict.featuresPage.cta.title} <br />
            <span className="text-primary">
              {dict.featuresPage.cta.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal">
            {dict.featuresPage.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="px-10 py-5 bg-primary text-dark font-black text-lg uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
            >
              {dict.featuresPage.cta.button}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-white/5 border border-white/10 text-white font-bold text-base uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {dict.featuresPage.cta.discord}
            </Link>
          </div>
          <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mt-6">
            {dict.featuresPage.cta.disclaimer}
          </p>
        </div>
      </section>
    </div>
  );
}
