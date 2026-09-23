import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futinatorData } from "@/data/competitors/futinator";

export const metadata: Metadata = {
  title: {
    absolute: "Futinator vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Futinator vs Elite FUT SNIPER review: compare €54/yr annual re-tax, soft-ban risks, and Elite's sub-20ms local Chrome extension with neural AI solver.",
  keywords: [
    "futinator",
    "futinator review",
    "futinator.com",
    "futinator plus",
    "futinator autobuyer",
    "futinator ban",
    "is futinator safe",
    "futinator vs elite fut sniper",
    "futinator pricing",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "futinator extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futinator-vs-elitefutbot" },
  openGraph: {
    title: "Futinator vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futinator vs Elite FUT SNIPER review: compare €54/yr annual re-tax, soft-ban risks, and Elite's sub-20ms local Chrome extension with neural AI solver.",
    url: "https://www.elitefutbot.com/futinator-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futinator vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futinator vs Elite FUT SNIPER review: compare €54/yr annual re-tax, soft-ban risks, and Elite's sub-20ms local Chrome extension with neural AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futinatorData} />;
}
