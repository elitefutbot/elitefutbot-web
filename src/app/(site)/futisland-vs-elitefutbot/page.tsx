import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futIslandData } from "@/data/competitors/futisland";

export const metadata: Metadata = {
  title: {
    absolute: "FUT ISLAND vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUT ISLAND vs Elite FUT SNIPER: compare Standard and Premium plans (£9.99 to £49.99) with Elite's €19.90/year extension and free trial.",
  keywords: [
    "fut island",
    "futisland",
    "futisland review",
    "futisland.com",
    "futisland pricing",
    "fut island vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futisland-vs-elitefutbot" },
  openGraph: {
    title: "FUT ISLAND vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT ISLAND vs Elite FUT SNIPER: compare Standard and Premium plans (£9.99 to £49.99) with Elite's €19.90/year extension and free trial.",
    url: "https://www.elitefutbot.com/futisland-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT ISLAND vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT ISLAND vs Elite FUT SNIPER: compare Standard and Premium plans (£9.99 to £49.99) with Elite's €19.90/year extension and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futIslandData} />;
}
