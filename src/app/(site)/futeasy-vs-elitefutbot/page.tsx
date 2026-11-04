import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futEasyData } from "@/data/competitors/futeasy";

export const metadata: Metadata = {
  title: {
    absolute: "FutEasy vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FutEasy vs Elite FUT SNIPER review: compare Russian userscript UI clutter, legacy FC 24 metadata, sub-20ms speed, and neural AI SBC solving.",
  keywords: [
    "futeasy",
    "futeasy review",
    "futeasy vs elite fut sniper",
    "futeasy.ru",
    "ea fc 27 autobuyer",
    "ea fc 27 web app shortcuts",
    "fut 27 grinding bot",
    "best ea fc autobuyer 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futeasy-vs-elitefutbot" },
  openGraph: {
    title: "FutEasy vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutEasy vs Elite FUT SNIPER review: compare Russian userscript UI clutter, legacy FC 24 metadata, sub-20ms speed, and neural AI SBC solving.",
    url: "https://www.elitefutbot.com/futeasy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutEasy vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutEasy vs Elite FUT SNIPER review: compare Russian userscript UI clutter, legacy FC 24 metadata, sub-20ms speed, and neural AI SBC solving.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futEasyData} />;
}
