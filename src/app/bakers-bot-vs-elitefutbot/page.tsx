import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { bakersBotData } from "@/data/competitors/bakers-bot";

export const metadata: Metadata = {
  title: {
    absolute: "Baker's Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Honest Baker's Bot vs Elite FUT SNIPER review. Built by original dev: sub-20ms speed, 0 bans, clean Side Panel HUD & AI SBC solver for EA FC 27.",
  keywords: [
    "baker's bot",
    "bakers bot",
    "bakers-bot.com",
    "bakers bot alternative",
    "bakers bot vs elitefutbot",
    "bakers bot ban",
    "fc 26 sniping bot",
    "fc 27 sniping bot",
    "fut autobuyer",
    "ai sbc solver",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/bakers-bot-vs-elitefutbot" },
  openGraph: {
    title: "Baker's Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Honest Baker's Bot vs Elite FUT SNIPER review. Built by original dev: sub-20ms speed, 0 bans, clean Side Panel HUD & AI SBC solver for EA FC 27.",
    url: "https://www.elitefutbot.com/bakers-bot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baker's Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Honest Baker's Bot vs Elite FUT SNIPER review. Built by original dev: sub-20ms speed, 0 bans, clean Side Panel HUD & AI SBC solver for EA FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={bakersBotData} />;
}
