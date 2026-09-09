import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futAutoBuyerData } from "@/data/competitors/futautobuyer";

export const metadata: Metadata = {
  title: "FUT Auto Buyer vs Elite FUT SNIPER (2026 Review): Macro Scripts vs 20ms AI Bot",
  description:
    "FUT Auto Buyer vs Elite FUT SNIPER comparison. Real technical audit of predictable linear timing loops, brittle DOM selector breakage, 80ms–150ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "fut auto buyer",
    "fut auto buyer review",
    "futautobuyer",
    "fut auto buyer vs elite fut sniper",
    "fut auto buyer alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "ea fc web app macro scripts",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://elitefutbot.com/futautobuyer-vs-elitefutbot" },
  openGraph: {
    title: "FUT Auto Buyer vs Elite FUT SNIPER (2026 Review): Macro Scripts vs 20ms AI Bot",
    description:
      "FUT Auto Buyer vs Elite FUT SNIPER comparison. Real technical audit of predictable linear timing loops, brittle DOM selector breakage, 80ms–150ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://elitefutbot.com/futautobuyer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Auto Buyer vs Elite FUT SNIPER (2026 Review): Macro Scripts vs 20ms AI Bot",
    description:
      "FUT Auto Buyer vs Elite FUT SNIPER comparison. Real technical audit of predictable linear timing loops, brittle DOM selector breakage, 80ms–150ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futAutoBuyerData} />;
}
