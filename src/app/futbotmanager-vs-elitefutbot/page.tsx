import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotManagerData } from "@/data/competitors/futbotmanager";

export const metadata: Metadata = {
  title: "FutBotManager vs Elite FUT SNIPER (2026 Review): FBM Points, Ban Risks & Speed",
  description:
    "Honest FutBotManager vs Elite FUT SNIPER review. Real data on futbotmanager.com FBM Points token trap, API SELL mule ban hazards, Windows .EXE bloat, and sub-20ms sniping for FC 26 & FC 27.",
  keywords: [
    "futbotmanager",
    "futbotmanager review",
    "futbotmanager.com",
    "futbotmanager pro",
    "fc copilot",
    "fbm points",
    "futbotmanager ban",
    "is futbotmanager safe",
    "futbotmanager vs elite fut sniper",
    "futbotmanager pricing",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "futbotmanager download",
  ],
  alternates: { canonical: "https://elitefutbot.com/futbotmanager-vs-elitefutbot" },
  openGraph: {
    title: "FutBotManager vs Elite FUT SNIPER (2026 Review): FBM Points, Ban Risks & Speed",
    description:
      "Honest FutBotManager vs Elite FUT SNIPER review. Real data on futbotmanager.com FBM Points token trap, API SELL mule ban hazards, Windows .EXE bloat, and sub-20ms sniping for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futbotmanager-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutBotManager vs Elite FUT SNIPER (2026 Review): FBM Points, Ban Risks & Speed",
    description:
      "Honest FutBotManager vs Elite FUT SNIPER review. Real data on futbotmanager.com FBM Points token trap, API SELL mule ban hazards, Windows .EXE bloat, and sub-20ms sniping for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotManagerData} />;
}
