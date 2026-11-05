import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotClubData } from "@/data/competitors/futbotclub";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Bot Club vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUT Bot Club vs Elite FUT SNIPER: FUTBot lists an auto buyer, bidder and SBC solver. Compare with Elite's €19.90/year extension and free trial.",
  keywords: [
    "fut bot club",
    "futbotclub",
    "futbot fc 27",
    "futbot.club",
    "fut bot club vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futbotclub-vs-elitefutbot" },
  openGraph: {
    title: "FUT Bot Club vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT Bot Club vs Elite FUT SNIPER: FUTBot lists an auto buyer, bidder and SBC solver. Compare with Elite's €19.90/year extension and free trial.",
    url: "https://www.elitefutbot.com/futbotclub-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Bot Club vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT Bot Club vs Elite FUT SNIPER: FUTBot lists an auto buyer, bidder and SBC solver. Compare with Elite's €19.90/year extension and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotClubData} />;
}
