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
  Check,
  X,
  Bot,
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
        operatingSystem: "Windows, macOS, ChromeOS",
        applicationCategory: "GameApplication",
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
            name: "Features Suite",
            item: `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/${locale}/fc27-fut-sniping-bot-autobuyer-features#faq`,
        mainEntity: dict.featuresPage.faqs.map((faq) => ({
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

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.2)]">
              <span className="text-xs font-black text-primary tracking-wider uppercase font-mono">
                {dict.featuresPage.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white leading-tight font-headline">
              {dict.featuresPage.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_16px_rgba(204,255,0,0.35)]">
                {dict.featuresPage.hero.titleHighlight}
              </span>
            </h1>

            <div className="max-w-3xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                {dict.featuresPage.hero.directAnswerSnippet}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                className="px-8 py-4 bg-primary text-black font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
                href="/register"
              >
                {dict.featuresPage.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
                href={`/${locale}/fc27-fut-snipe-bot#demo`}
              >
                <Zap className="w-5 h-5 text-primary" />
                {dict.featuresPage.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </header>

        {/* FEATURES GRID */}
        <section className="py-20 lg:py-28 relative border-b border-white/5" id="features">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-3">
                <Bot className="w-3.5 h-3.5" />
                {dict.featuresPage.featuresHeading.badge}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.featuresPage.featuresHeading.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                {dict.featuresPage.featuresHeading.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dict.featuresPage.features.map((module) => (
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
                    {module.highlights.map((item, i) => (
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
        <section className="py-20 bg-[#090909] border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.featuresPage.comparison.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                {dict.featuresPage.comparison.subtitle}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#121212]/80 shadow-2xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-gray-400 font-bold">
                      Feature
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-primary font-black bg-primary/10 border-x border-primary/20">
                      Elite FUT SNIPER
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-mono uppercase text-rose-400 font-bold">
                      Cloud Proxy Bots
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {dict.featuresPage.comparison.rows.map((row, idx) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0c0c0c] border border-primary/30 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight font-headline">
                {dict.featuresPage.cta.title}
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                {dict.featuresPage.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  className="px-8 py-4 bg-primary text-black font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 w-full sm:w-auto"
                  href="/register"
                >
                  {dict.featuresPage.cta.button}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
                  href="https://discord.gg/Rkb9nF6WG6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  {dict.featuresPage.cta.discord}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
