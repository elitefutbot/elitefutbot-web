import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotClubData } from "@/data/competitors/futbotclub";

export const metadata: Metadata = {
  title: "FUT Bot Club vs Elite FUT SNIPER (2026 Review): Community Server vs Zero-Telemetry Local Bot",
  description:
    "FUT Bot Club vs Elite FUT SNIPER comparison. Real audit of community server crashes, 6 PM promo downtime, trade telemetry logging, and Elite's 100% local 20ms Chrome Side Panel with AI SBC solver.",
  keywords: [
    "fut bot club",
    "futbotclub",
    "fut bot club review",
    "fut bot club vs elite fut sniper",
    "community fut autobuyer",
    "cloud bot server crash",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "zero telemetry fut sniper",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futbotclub-vs-elitefutbot" },
  openGraph: {
    title: "FUT Bot Club vs Elite FUT SNIPER (2026 Review): Community Server vs Zero-Telemetry Local Bot",
    description:
      "FUT Bot Club vs Elite FUT SNIPER comparison. Real audit of community server crashes, 6 PM promo downtime, trade telemetry logging, and Elite's 100% local 20ms Chrome Side Panel with AI SBC solver.",
    url: "https://www.elitefutbot.com/futbotclub-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Bot Club vs Elite FUT SNIPER (2026 Review): Community Server vs Zero-Telemetry Local Bot",
    description:
      "FUT Bot Club vs Elite FUT SNIPER comparison. Real audit of community server crashes, 6 PM promo downtime, trade telemetry logging, and Elite's 100% local 20ms Chrome Side Panel with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotClubData} />;
}
