import { Inter, Space_Grotesk, Public_Sans, Cairo } from "next/font/google";
import Script from "next/script";
import VercelAnalyticsWrapper from "@/components/VercelAnalyticsWrapper";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-public-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const buildJsonLd = (lang: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.elitefutbot.com/#software",
      "name": "Elite FUT SNIPER",
      "inLanguage": lang,
      "applicationCategory": "GameApplication",
      "operatingSystem": "Web, Windows, macOS",
      "image": "https://www.elitefutbot.com/og-image.png",
      "screenshot": "https://www.elitefutbot.com/og-image.png",
      "description": "World's fastest sniping bot and autobuyer for FC 26, FC 25 & FC 27 transfer market with sub-20ms speed and local security.",
      "brand": {
        "@type": "Brand",
        "name": "Elite FUT SNIPER"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.elitefutbot.com/#pricing",
        "price": "19.90",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Elite FUT SNIPER"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "19.90",
          "priceCurrency": "EUR",
          "billingDuration": "P1Y",
          "unitCode": "ANN"
        }
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.elitefutbot.com/#organization",
      "name": "Elite FUT SNIPER",
      "alternateName": ["Elite FUT Bot", "EliteFutBot"],
      "url": "https://www.elitefutbot.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.elitefutbot.com/logo-elite.png"
      },
      "sameAs": [
        "https://www.tiktok.com/@elitefutbotx",
        "https://www.instagram.com/elitefutbot/",
        "https://x.com/FutSnipeBot"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.elitefutbot.com/#website",
      "url": "https://www.elitefutbot.com",
      "name": "Elite FUT SNIPER",
      "alternateName": "EliteFutBot",
      "inLanguage": lang,
      "description": "World's fastest sniping bot and autobuyer for FC 26, FC 25 & FC 27.",
      "publisher": {
        "@id": "https://www.elitefutbot.com/#organization"
      }
    }
  ]
});

/**
 * The shared <html>/<body> shell. Each root layout passes the page language, so
 * the server-rendered HTML carries the correct lang and dir (e.g. ar -> rtl).
 */
export default function RootDocument({
  lang,
  dir,
  children,
}: Readonly<{
  lang: string;
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}>) {
  return (
    <html lang={lang} dir={dir} className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics with Next.js Script (Non-blocking / afterInteractive) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CB5DETL9CY"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CB5DETL9CY', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Open Graph & Social Share Fallback Tags for WhatsApp, X/Twitter, FB, iMessage, Discord, Telegram */}
        <meta property="og:image" content="https://www.elitefutbot.com/og-image.png" />
        <meta property="og:image:secure_url" content="https://www.elitefutbot.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Elite FUT SNIPER - #1 FC 26, FC 25 & FC 27 Sniping Bot & Autobuyer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.elitefutbot.com/og-image.png" />
        <meta name="twitter:site" content="@FutSnipeBot" />
        {/* Bing Webmaster Verification */}
        <meta name="msvalidate.01" content="DF183DB29828D77C74770B08A8F24DD0" />
        {/* Yandex Verification */}
        <meta name="yandex-verification" content="a303969db4d28193" />
        <AnalyticsScripts />
        {/* Critical Origin Preconnects for Ultra-Fast Core Web Vitals (FCP / LCP) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang)) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${publicSans.variable} ${cairo.variable} font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-dark min-h-screen flex flex-col`}>
        <SiteNav />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        <SiteFooter />
        <VercelAnalyticsWrapper />
      </body>
    </html>
  );
}
