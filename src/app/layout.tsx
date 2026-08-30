import type { Metadata } from "next";
import { Inter, Space_Grotesk, Public_Sans } from "next/font/google";
import Script from "next/script";
import VercelAnalyticsWrapper from "@/components/VercelAnalyticsWrapper";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elitefutbot.com'),
  title: {
    default: "Elite FUT SNIPER – FC 26 & FC 27 Sniping Bot & Autobuyer",
    template: "%s | Elite FUT SNIPER"
  },
  description: "Dominate the EA FC 26 & FC 27 transfer markets. The fastest FC 27 FUT sniping bot and autobuyer, plus FC 26 & FC 25 support, featuring 20ms speeds and local security.",
  alternates: {
    canonical: "https://elitefutbot.com/",
  },
  openGraph: {
    title: "Elite FUT SNIPER – FC 26 & FC 27 Sniping Bot & Autobuyer",
    description: "World's fastest FC 27 FUT sniping bot and autobuyer, also supporting FC 26 & FC 25. Advanced anti-ban engine and cloud-based SBC solving.",
    url: "https://elitefutbot.com/",
    siteName: "Elite FUT SNIPER",
    images: [
      {
        url: "https://elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT SNIPER - #1 FC 26, FC 25 & FC 27 Sniping Bot & Autobuyer",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite FUT SNIPER – FC 26 & FC 27 Sniping Bot & Autobuyer",
    description: "Elite FC 27 FUT sniping bot and autobuyer, also supporting FC 26 & FC 25. 20ms speeds and anti-ban engine.",
    images: ["https://elitefutbot.com/og-image.png"],
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
      "@id": "https://elitefutbot.com/#software",
      "name": "Elite FUT SNIPER",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Web, Windows, macOS",
      "image": "https://elitefutbot.com/og-image.png",
      "screenshot": "https://elitefutbot.com/og-image.png",
      "description": "World's fastest sniping bot and autobuyer for FC 26, FC 25 & FC 27 transfer market with sub-20ms speed and local security.",
      "brand": {
        "@type": "Brand",
        "name": "Elite FUT SNIPER"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://elitefutbot.com/#pricing",
        "price": "19.00",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://elitefutbot.com/#organization",
      "name": "Elite FUT SNIPER",
      "url": "https://elitefutbot.com",
      "logo": "https://elitefutbot.com/logo-elite.png",
      "sameAs": [
        "https://www.tiktok.com/@elitefutbotx",
        "https://www.instagram.com/elitefutbot/",
        "https://x.com/FutSnipeBot"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://elitefutbot.com/#website",
      "url": "https://elitefutbot.com",
      "name": "Elite FUT SNIPER",
      "description": "World's fastest sniping bot and autobuyer for FC 26, FC 25 & FC 27.",
      "publisher": {
        "@id": "https://elitefutbot.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://elitefutbot.com/?q={search_term_string}"
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Open Graph & Social Share Fallback Tags for WhatsApp, X/Twitter, FB, iMessage, Discord, Telegram */}
        <meta property="og:image" content="https://elitefutbot.com/og-image.png" />
        <meta property="og:image:secure_url" content="https://elitefutbot.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Elite FUT SNIPER - #1 FC 26, FC 25 & FC 27 Sniping Bot & Autobuyer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://elitefutbot.com/og-image.png" />
        <meta name="twitter:site" content="@FutSnipeBot" />
        {/* Bing Webmaster Verification */}
        <meta name="msvalidate.01" content="DF183DB29828D77C74770B08A8F24DD0" />
        {/* Yandex Verification */}
        <meta name="yandex-verification" content="a303969db4d28193" />
        <AnalyticsScripts />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${publicSans.variable} font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-dark min-h-screen flex flex-col`}>
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
