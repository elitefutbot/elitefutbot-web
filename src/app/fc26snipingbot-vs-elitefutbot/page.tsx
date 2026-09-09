import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc26SnipingBotData } from "@/data/competitors/fc26snipingbot";

export const metadata: Metadata = {
  title: "FC26 Sniping Bot vs Elite FUT SNIPER (2026 Review): Title-Locked vs Multi-Season",
  description:
    "FC26 Sniping Bot vs Elite FUT SNIPER comparison. In-depth audit of single-season repurchase costs, 80ms DOM polling, heuristic ban flags, and Elite's unified 20ms FC 26 & FC 27 engine with AI SBC solver.",
  keywords: [
    "fc26 sniping bot",
    "fc26snipingbot",
    "fc26 sniping bot review",
    "fc 26 sniping bot vs elite fut sniper",
    "ea fc 26 autobuyer extension",
    "ea sports fc 27 sniping bot",
    "title locked sniping bot",
    "fc26 sniping bot ban risk",
    "best ea fc sniping bot 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://elitefutbot.com/fc26snipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FC26 Sniping Bot vs Elite FUT SNIPER (2026 Review): Title-Locked vs Multi-Season",
    description:
      "FC26 Sniping Bot vs Elite FUT SNIPER comparison. In-depth audit of single-season repurchase costs, 80ms DOM polling, heuristic ban flags, and Elite's unified 20ms FC 26 & FC 27 engine with AI SBC solver.",
    url: "https://elitefutbot.com/fc26snipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC26 Sniping Bot vs Elite FUT SNIPER (2026 Review): Title-Locked vs Multi-Season",
    description:
      "FC26 Sniping Bot vs Elite FUT SNIPER comparison. In-depth audit of single-season repurchase costs, 80ms DOM polling, heuristic ban flags, and Elite's unified 20ms FC 26 & FC 27 engine with AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc26SnipingBotData} />;
}
