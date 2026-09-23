import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futFunData } from "@/data/competitors/futfun";

export const metadata: Metadata = {
  title: {
    absolute: "FutFun vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTFun vs Elite FUT SNIPER review: audit browser script bugs, DOM polling delays, and Elite's sub-20ms docked Chrome Side Panel with neural AI solver.",
  keywords: [
    "futfun",
    "futfun review",
    "futfun vs elite fut sniper",
    "futfun alternative",
    "futfun commission",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futfun-vs-elitefutbot" },
  openGraph: {
    title: "FutFun vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTFun vs Elite FUT SNIPER review: audit browser script bugs, DOM polling delays, and Elite's sub-20ms docked Chrome Side Panel with neural AI solver.",
    url: "https://www.elitefutbot.com/futfun-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutFun vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTFun vs Elite FUT SNIPER review: audit browser script bugs, DOM polling delays, and Elite's sub-20ms docked Chrome Side Panel with neural AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futFunData} />;
}
