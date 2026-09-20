import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fifaSnipeBotData } from "@/data/competitors/fifasnipebot";

export const metadata: Metadata = {
  title: "FIFA Snipe Bot vs Elite FUT SNIPER (2026 Review): Legacy Script vs 20ms Engine",
  description:
    "FIFA Snipe Bot vs Elite FUT SNIPER comparison. Real audit of legacy FIFA script selector rot, linear timer ban risks, abandoned GitHub repositories, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
  keywords: [
    "fifa snipe bot",
    "fifasnipebot",
    "fifa snipe bot review",
    "fifa sniping bot github",
    "fifa snipe bot vs elite fut sniper",
    "legacy fifa autobuyer",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "fifa bot ban risk",
    "is fifa snipe bot safe",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fifasnipebot-vs-elitefutbot" },
  openGraph: {
    title: "FIFA Snipe Bot vs Elite FUT SNIPER (2026 Review): Legacy Script vs 20ms Engine",
    description:
      "FIFA Snipe Bot vs Elite FUT SNIPER comparison. Real audit of legacy FIFA script selector rot, linear timer ban risks, abandoned GitHub repositories, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/fifasnipebot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA Snipe Bot vs Elite FUT SNIPER (2026 Review): Legacy Script vs 20ms Engine",
    description:
      "FIFA Snipe Bot vs Elite FUT SNIPER comparison. Real audit of legacy FIFA script selector rot, linear timer ban risks, abandoned GitHub repositories, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fifaSnipeBotData} />;
}
