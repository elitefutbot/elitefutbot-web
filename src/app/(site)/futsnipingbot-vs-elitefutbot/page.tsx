import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBotData } from "@/data/competitors/futsnipingbot";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Sniping Bot vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Sniping Bot vs Elite FUT SNIPER review: compare coin selling hazards, account locks, and Elite's verified 0-ban 20ms Chrome bot with AI solver.",
  keywords: [
    "futsnipingbot",
    "fut sniping bot",
    "futsnipingbot review",
    "futsnipingbot.com",
    "futsnipingbot ban",
    "is futsnipingbot safe",
    "futsnipingbot vs elite fut sniper",
    "futsnipingbot u7buy",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "fut sniping bot 0 ban",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot vs Elite FUT SNIPER review: compare coin selling hazards, account locks, and Elite's verified 0-ban 20ms Chrome bot with AI solver.",
    url: "https://www.elitefutbot.com/futsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot vs Elite FUT SNIPER review: compare coin selling hazards, account locks, and Elite's verified 0-ban 20ms Chrome bot with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBotData} />;
}
