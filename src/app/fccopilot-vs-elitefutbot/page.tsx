import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fcCopilotData } from "@/data/competitors/fccopilot";

export const metadata: Metadata = {
  title: "FC Copilot vs Elite FUT SNIPER (2026 Review): 3.67★ Tool vs 20ms AI Bot",
  description:
    "FC Copilot (fccopilot.com / FutBotManager) vs Elite FUT SNIPER comparison. Technical audit of 3.67★ store rating, expiring FCP token points, 70ms–110ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "fc copilot",
    "fccopilot",
    "fc copilot review",
    "fc copilot futbotmanager",
    "fc copilot vs elite fut sniper",
    "fc copilot alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fccopilot-vs-elitefutbot" },
  openGraph: {
    title: "FC Copilot vs Elite FUT SNIPER (2026 Review): 3.67★ Tool vs 20ms AI Bot",
    description:
      "FC Copilot (fccopilot.com / FutBotManager) vs Elite FUT SNIPER comparison. Technical audit of 3.67★ store rating, expiring FCP token points, 70ms–110ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://www.elitefutbot.com/fccopilot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC Copilot vs Elite FUT SNIPER (2026 Review): 3.67★ Tool vs 20ms AI Bot",
    description:
      "FC Copilot (fccopilot.com / FutBotManager) vs Elite FUT SNIPER comparison. Technical audit of 3.67★ store rating, expiring FCP token points, 70ms–110ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fcCopilotData} />;
}
