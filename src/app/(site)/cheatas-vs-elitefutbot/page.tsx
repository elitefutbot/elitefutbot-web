import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { cheatAsData } from "@/data/competitors/cheatas";

export const metadata: Metadata = {
  title: {
    absolute: "Cheat.as vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Cheat.as vs Elite FUT SNIPER review: compare $29/mo launchers, EA Anti-Cheat ban risks, and Elite's sub-20ms Chrome extension with AI SBC solver.",
  keywords: [
    "cheat.as",
    "cheat as fut bot",
    "cheat as sniping bot",
    "cheat.as review",
    "cheat as vs elite fut sniper",
    "cheat.as alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/cheatas-vs-elitefutbot" },
  openGraph: {
    title: "Cheat.as vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Cheat.as vs Elite FUT SNIPER review: compare $29/mo launchers, EA Anti-Cheat ban risks, and Elite's sub-20ms Chrome extension with AI SBC solver.",
    url: "https://www.elitefutbot.com/cheatas-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheat.as vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Cheat.as vs Elite FUT SNIPER review: compare $29/mo launchers, EA Anti-Cheat ban risks, and Elite's sub-20ms Chrome extension with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={cheatAsData} />;
}
