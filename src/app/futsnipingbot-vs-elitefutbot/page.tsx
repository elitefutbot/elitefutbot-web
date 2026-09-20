import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBotData } from "@/data/competitors/futsnipingbot";

export const metadata: Metadata = {
  title: "FUT Sniping Bot vs Elite FUT SNIPER (2026 Review): Coin Selling Risks, Ban Telemetry & Speed",
  description:
    "Honest FUT Sniping Bot vs Elite FUT SNIPER review. Real data on futsnipingbot.com U7Buy coin selling ban hazards, seasonal rebuy fees, 7-day account locks, and sub-20ms sniping for FC 26 & FC 27.",
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
    title: "FUT Sniping Bot vs Elite FUT SNIPER (2026 Review): Coin Selling Risks, Ban Telemetry & Speed",
    description:
      "Honest FUT Sniping Bot vs Elite FUT SNIPER review. Real data on futsnipingbot.com U7Buy coin selling ban hazards, seasonal rebuy fees, 7-day account locks, and sub-20ms sniping for FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot vs Elite FUT SNIPER (2026 Review): Coin Selling Risks, Ban Telemetry & Speed",
    description:
      "Honest FUT Sniping Bot vs Elite FUT SNIPER review. Real data on futsnipingbot.com U7Buy coin selling ban hazards, seasonal rebuy fees, 7-day account locks, and sub-20ms sniping for FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBotData} />;
}
