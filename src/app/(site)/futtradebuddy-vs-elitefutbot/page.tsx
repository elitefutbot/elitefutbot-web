import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futTradeBuddyData } from "@/data/competitors/futtradebuddy";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Trade Buddy vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Trade Buddy vs Elite FUT SNIPER: a delisted FC 26 autobuyer compared with Elite's available €19.90/year Chrome extension.",
  keywords: [
    "fut trade buddy",
    "futtradebuddy",
    "fut trade buddy review",
    "fut trade buddy chrome extension",
    "fut trade buddy vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.elitefutbot.com/futtradebuddy-vs-elitefutbot" },
  openGraph: {
    title: "FUT Trade Buddy vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Trade Buddy vs Elite FUT SNIPER: a delisted FC 26 autobuyer compared with Elite's available €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futtradebuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Trade Buddy vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Trade Buddy vs Elite FUT SNIPER: a delisted FC 26 autobuyer compared with Elite's available €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futTradeBuddyData} />;
}
