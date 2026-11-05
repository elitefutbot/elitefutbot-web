import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futinatorData } from "@/data/competitors/futinator";

export const metadata: Metadata = {
  title: {
    absolute: "Futinator vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Futinator vs Elite FUT SNIPER: compare a 54,00 € one-time FC 26 autobuyer with Elite's €19.90/year extension covering FC 27 and FC 26.",
  keywords: [
    "futinator",
    "futinator review",
    "futinator price",
    "futinator.com",
    "futinator vs elite fut sniper",
    "futinator fc 27",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futinator-vs-elitefutbot" },
  openGraph: {
    title: "Futinator vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futinator vs Elite FUT SNIPER: compare a 54,00 € one-time FC 26 autobuyer with Elite's €19.90/year extension covering FC 27 and FC 26.",
    url: "https://www.elitefutbot.com/futinator-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futinator vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futinator vs Elite FUT SNIPER: compare a 54,00 € one-time FC 26 autobuyer with Elite's €19.90/year extension covering FC 27 and FC 26.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futinatorData} />;
}
