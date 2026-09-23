import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { lenaBotData } from "@/data/competitors/lenabot";

export const metadata: Metadata = {
  title: {
    absolute: "Lena Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Lena Bot vs Elite FUT SNIPER review: compare Remote Play streaming lag, $120/yr console fees, and Elite's sub-20ms local Chrome extension with AI.",
  keywords: [
    "lena bot",
    "lena bot review",
    "lenabot",
    "lenabot.com",
    "lena bot vs elite fut sniper",
    "lena bot alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "fut coin muling bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/lenabot-vs-elitefutbot" },
  openGraph: {
    title: "Lena Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Lena Bot vs Elite FUT SNIPER review: compare Remote Play streaming lag, $120/yr console fees, and Elite's sub-20ms local Chrome extension with AI.",
    url: "https://www.elitefutbot.com/lenabot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lena Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Lena Bot vs Elite FUT SNIPER review: compare Remote Play streaming lag, $120/yr console fees, and Elite's sub-20ms local Chrome extension with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={lenaBotData} />;
}
