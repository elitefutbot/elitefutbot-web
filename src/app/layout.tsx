import type { Metadata } from "next";
import { Inter, Space_Grotesk, Public_Sans, Cairo } from "next/font/google";
import Script from "next/script";
import VercelAnalyticsWrapper from "@/components/VercelAnalyticsWrapper";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elitefutbot.com'),
  title: {
    default: "EA FC 27 Sniping Bot & Autobuyer Ultimate Team | Elite FUT Bot",
    template: "%s | Elite FUT SNIPER"
  },
  description: "EA FC 27 sniping bot and FUT autobuyer for Ultimate Team. Snipe underpriced players, auto-buy, auto-list and use smart filters with a local Chrome extension.",
  openGraph: {
    title: "EA FC 27 Sniping Bot & Autobuyer Ultimate Team | Elite FUT Bot",
    description: "EA FC 27 sniping bot and FUT autobuyer for Ultimate Team. Snipe underpriced players, auto-buy, auto-list and use smart filters with a local Chrome extension.",
    url: "https://www.elitefutbot.com/",
    siteName: "Elite FUT SNIPER",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT SNIPER - EA FC 27 Sniping Bot & Autobuyer Ultimate Team",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 Sniping Bot & Autobuyer Ultimate Team | Elite FUT Bot",
    description: "EA FC 27 sniping bot and FUT autobuyer for Ultimate Team. Snipe underpriced players, auto-buy, auto-list and use smart filters with a local Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
    creator: "@FutSnipeBot",
  },
  verification: {
    other: {
      "msvalidate.01": "DF183DB29828D77C74770B08A8F24DD0",
      "yandex-verification": "a303969db4d28193",
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.elitefutbot.com/#software",
      "name": "Elite FUT SNIPER",
      "inLanguage": "en",
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
        "price": "19.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Elite FUT SNIPER"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "USD"
          },
          "shippingDestination": [
            {
              "@type": "DefinedRegion",
              "addressCountry": "US"
            }
          ],
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 0,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 0,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
        }
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.elitefutbot.com/#organization",
      "name": "Elite FUT SNIPER",
      "url": "https://www.elitefutbot.com",
      "logo": "https://www.elitefutbot.com/logo-elite.png",
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
      "inLanguage": "en",
      "description": "World's fastest sniping bot and autobuyer for FC 26, FC 25 & FC 27.",
      "publisher": {
        "@id": "https://www.elitefutbot.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.elitefutbot.com/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
