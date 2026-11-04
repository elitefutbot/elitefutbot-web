import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easySbcData } from "@/data/competitors/easysbc";

export const metadata: Metadata = {
  title: {
    absolute: "EasySBC vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "EasySBC vs Elite FUT SNIPER review: audit manual blueprint alt-tabbing, price fixing traps, and Elite's 20ms autonomous bot with AI SBC solver.",
  keywords: [
    "easysbc",
    "easy sbc",
    "easysbc review",
    "easysbc vs elite fut sniper",
    "ai sbc solver ea fc 26",
    "fifa sbc auto buyer",
    "best sbc solver bot 2026",
    "easysbc alternative",
    "automated sbc builder",
    "1 click sbc solver",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/easysbc-vs-elitefutbot" },
  openGraph: {
    title: "EasySBC vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EasySBC vs Elite FUT SNIPER review: audit manual blueprint alt-tabbing, price fixing traps, and Elite's 20ms autonomous bot with AI SBC solver.",
    url: "https://www.elitefutbot.com/easysbc-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasySBC vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EasySBC vs Elite FUT SNIPER review: audit manual blueprint alt-tabbing, price fixing traps, and Elite's 20ms autonomous bot with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easySbcData} />;
}
