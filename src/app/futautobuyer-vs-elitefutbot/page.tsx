import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futAutoBuyerData } from "@/data/competitors/futautobuyer";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Auto Buyer vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUT Autobuyer vs Elite FUT SNIPER review: compare cloud server lag, credential security, ban risks, and Elite's local 20ms Chrome extension with AI.",
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
  alternates: { canonical: "https://www.elitefutbot.com/futautobuyer-vs-elitefutbot" },
  openGraph: {
    title: "FUT Auto Buyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT Autobuyer vs Elite FUT SNIPER review: compare cloud server lag, credential security, ban risks, and Elite's local 20ms Chrome extension with AI.",
    url: "https://www.elitefutbot.com/futautobuyer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Auto Buyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT Autobuyer vs Elite FUT SNIPER review: compare cloud server lag, credential security, ban risks, and Elite's local 20ms Chrome extension with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futAutoBuyerData} />;
}
