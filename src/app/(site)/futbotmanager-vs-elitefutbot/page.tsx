import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotManagerData } from "@/data/competitors/futbotmanager";

export const metadata: Metadata = {
  title: {
    absolute: "FutBotManager vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FutBotManager vs Elite FUT SNIPER: compare FC Copilot, a Chrome Web Store extension, with Elite's €19.90/year extension, auto bidding and free trial.",
  keywords: [
    "futbotmanager",
    "fut bot manager",
    "futbotmanager review",
    "fc copilot",
    "futbotmanager vs elite fut sniper",
    "ea fc 27 autobuyer",
    "ea fc sniping bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futbotmanager-vs-elitefutbot" },
  openGraph: {
    title: "FutBotManager vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutBotManager vs Elite FUT SNIPER: compare FC Copilot, a Chrome Web Store extension, with Elite's €19.90/year extension, auto bidding and free trial.",
    url: "https://www.elitefutbot.com/futbotmanager-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutBotManager vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutBotManager vs Elite FUT SNIPER: compare FC Copilot, a Chrome Web Store extension, with Elite's €19.90/year extension, auto bidding and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotManagerData} />;
}
