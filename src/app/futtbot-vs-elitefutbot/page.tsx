import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futtBotData } from "@/data/competitors/futtbot";

export const metadata: Metadata = {
  title: "Futtbot vs Elite FUT SNIPER (2026 Review): CLI Scripts vs 20ms Chrome HUD",
  description:
    "Futtbot vs Elite FUT SNIPER comparison. Real audit of open-source CLI script friction, manual DevTools cookie sniffing, Node.js breaking updates, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
  keywords: [
    "futtbot",
    "futtbot review",
    "futtbot github",
    "futtbot vs elite fut sniper",
    "ea fc open source sniping bot",
    "futtbot nodejs python",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "is futtbot safe",
    "futtbot ban risk",
    "fifa cli trading bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futtbot-vs-elitefutbot" },
  openGraph: {
    title: "Futtbot vs Elite FUT SNIPER (2026 Review): CLI Scripts vs 20ms Chrome HUD",
    description:
      "Futtbot vs Elite FUT SNIPER comparison. Real audit of open-source CLI script friction, manual DevTools cookie sniffing, Node.js breaking updates, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futtbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futtbot vs Elite FUT SNIPER (2026 Review): CLI Scripts vs 20ms Chrome HUD",
    description:
      "Futtbot vs Elite FUT SNIPER comparison. Real audit of open-source CLI script friction, manual DevTools cookie sniffing, Node.js breaking updates, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futtBotData} />;
}
