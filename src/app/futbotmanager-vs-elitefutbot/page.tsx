import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotManagerData } from "@/data/competitors/futbotmanager";

export const metadata: Metadata = {
  title: {
    absolute: "FutBotManager vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTBotManager vs Elite FUT SNIPER comparison: audit external app complexity, ban risks, and Elite's sub-20ms in-browser Chrome extension with AI.",
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
  alternates: { canonical: "https://www.elitefutbot.com/futbotmanager-vs-elitefutbot" },
  openGraph: {
    title: "FutBotManager vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTBotManager vs Elite FUT SNIPER comparison: audit external app complexity, ban risks, and Elite's sub-20ms in-browser Chrome extension with AI.",
    url: "https://www.elitefutbot.com/futbotmanager-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutBotManager vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTBotManager vs Elite FUT SNIPER comparison: audit external app complexity, ban risks, and Elite's sub-20ms in-browser Chrome extension with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotManagerData} />;
}
