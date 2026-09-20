import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easySbcData } from "@/data/competitors/easysbc";

export const metadata: Metadata = {
  title: "EasySBC vs Elite FUT SNIPER (2026 Review): External Blueprints vs 1-Click AI Auto-Buy",
  description:
    "EasySBC vs Elite FUT SNIPER comparison. Real audit of manual blueprint alt-tabbing, public price-fixing traps, zero market bot features, and Elite's in-browser AI SBC solver with 1-click auto-buy & 20ms sniper.",
  keywords: [
    "easysbc",
    "easy sbc",
    "easysbc review",
    "easysbc vs elite fut sniper",
    "ai sbc solver ea fc 26",
    "fifa sbc auto buyer",
    "best sbc solver bot 2026",
    "easysbc alternative",
    "automated sbc builder",
    "1 click sbc solver",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/easysbc-vs-elitefutbot" },
  openGraph: {
    title: "EasySBC vs Elite FUT SNIPER (2026 Review): External Blueprints vs 1-Click AI Auto-Buy",
    description:
      "EasySBC vs Elite FUT SNIPER comparison. Real audit of manual blueprint alt-tabbing, public price-fixing traps, zero market bot features, and Elite's in-browser AI SBC solver with 1-click auto-buy & 20ms sniper.",
    url: "https://www.elitefutbot.com/easysbc-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasySBC vs Elite FUT SNIPER (2026 Review): External Blueprints vs 1-Click AI Auto-Buy",
    description:
      "EasySBC vs Elite FUT SNIPER comparison. Real audit of manual blueprint alt-tabbing, public price-fixing traps, zero market bot features, and Elite's in-browser AI SBC solver with 1-click auto-buy & 20ms sniper.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easySbcData} />;
}
