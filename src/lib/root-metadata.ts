import type { Metadata } from "next";

/** Site-wide metadata shared by every root layout (English site + translated pages). */
export const rootMetadata: Metadata = {
  metadataBase: new URL('https://www.elitefutbot.com'),
  title: {
    default: "EA FC 27 FUT Sniping Bot & Autobuyer | Elite FUT Sniper",
    template: "%s | Elite FUT SNIPER"
  },
  description: "Elite FUT Sniper is the #1 EA FC 27 FUT sniping bot, FUT FIFA snipe bot & Ultimate Team autobuyer (FC 27 compatible). 0 Transfer market bans & free trial.",
  openGraph: {
    title: "EA FC 27 FUT Sniping Bot & Autobuyer | Elite FUT Sniper",
    description: "Elite FUT Sniper is the #1 EA FC 27 FUT sniping bot, FUT FIFA snipe bot & Ultimate Team autobuyer (FC 27 compatible). 0 Transfer market bans & free trial.",
    url: "https://www.elitefutbot.com/",
    siteName: "Elite FUT SNIPER",
    images: [
      {
        url: "https://www.elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT Sniper - EA FC 27 FUT Sniping Bot & Autobuyer",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 FUT Sniping Bot & Autobuyer | Elite FUT Sniper",
    description: "Elite FUT Sniper is the #1 EA FC 27 FUT sniping bot, FUT FIFA snipe bot & Ultimate Team autobuyer (FC 27 compatible). 0 Transfer market bans & free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
    creator: "@FutSnipeBot",
  },
  verification: {
    other: {
      "msvalidate.01": "DF183DB29828D77C74770B08A8F24DD0",
      "yandex-verification": "a303969db4d28193",
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
