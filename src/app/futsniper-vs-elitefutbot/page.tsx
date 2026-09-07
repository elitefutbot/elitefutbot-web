import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperData } from "@/data/competitors/futsniper";

export const metadata: Metadata = {
  title: "FUT Sniper vs Elite FUT SNIPER (2026 Review): Real Data, Domain Origins, Ban Risks & Speed",
  description:
    "Honest FUT Sniper vs Elite FUT SNIPER review. Real data on futsniperbot.com domain origins, unsigned .zip risks, DOM macro clickers, ban telemetry, and sub-20ms sniping for FC 26 & FC 27.",
  keywords: [
    "futsniper",
    "fut sniper",
    "futsniper review",
    "futsniper.com",
    "futsniperbot",
    "futsniperbot.com",
    "fut sniper bot",
    "is fut sniper safe",
    "futsniper ban",
    "futsniper vs elite fut sniper",
    "fc 26 sniping bot",
    "fc 27 autobuyer",
    "ai sbc solver",
  ],
  alternates: { canonical: "https://elitefutbot.com/futsniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper vs Elite FUT SNIPER (2026 Review): Real Data, Domain Origins, Ban Risks & Speed",
    description:
      "Honest FUT Sniper vs Elite FUT SNIPER review. Real data on futsniperbot.com domain origins, unsigned .zip risks, DOM macro clickers, ban telemetry, and sub-20ms sniping for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper vs Elite FUT SNIPER (2026 Review): Real Data, Domain Origins, Ban Risks & Speed",
    description:
      "Honest FUT Sniper vs Elite FUT SNIPER review. Real data on futsniperbot.com domain origins, unsigned .zip risks, DOM macro clickers, ban telemetry, and sub-20ms sniping for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperData} />;
}
