import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSimpleTraderData } from "@/data/competitors/futsimpletrader";

export const metadata: Metadata = {
  title: "FUT Simple Trader vs Elite FUT SNIPER (2026 Review): Real Data, Ban Risks & Speed",
  description:
    "Honest FUT Simple Trader vs Elite FUT SNIPER review. Real data on ban risks, pricing checks, external dashboard UI, and 20ms execution for FC 26 & FC 27.",
  keywords: [
    "fut simple trader",
    "futsimpletrader",
    "futsimpletrader.com",
    "fut simple trader review",
    "fut simple trader ban",
    "fut simple trader autobuyer",
    "futsimpletrader vs elite fut sniper",
    "is fut simple trader safe fc 26",
    "fc 26 sniping bot",
    "fc 27 autobuyer",
    "ai sbc solver",
  ],
  alternates: { canonical: "https://elitefutbot.com/futsimpletrader-vs-elitefutbot" },
  openGraph: {
    title: "FUT Simple Trader vs Elite FUT SNIPER (2026 Review): Real Data, Ban Risks & Speed",
    description:
      "Honest FUT Simple Trader vs Elite FUT SNIPER review. Real data on ban risks, pricing checks, external dashboard UI, and 20ms execution for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsimpletrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Simple Trader vs Elite FUT SNIPER (2026 Review): Real Data, Ban Risks & Speed",
    description:
      "Honest FUT Simple Trader vs Elite FUT SNIPER review. Real data on ban risks, pricing checks, external dashboard UI, and 20ms execution for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSimpleTraderData} />;
}
