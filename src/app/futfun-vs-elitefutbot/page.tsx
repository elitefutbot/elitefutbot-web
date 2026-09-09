import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futFunData } from "@/data/competitors/futfun";

export const metadata: Metadata = {
  title: "FutFun vs Elite FUT SNIPER (2026 Review): Coin Commission vs 20ms AI Bot",
  description:
    "FutFun vs Elite FUT SNIPER comparison. Real technical audit of predatory 10%–20% profit commissions, linear delay soft bans, 80ms–140ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "futfun",
    "futfun review",
    "futfun vs elite fut sniper",
    "futfun alternative",
    "futfun commission",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://elitefutbot.com/futfun-vs-elitefutbot" },
  openGraph: {
    title: "FutFun vs Elite FUT SNIPER (2026 Review): Coin Commission vs 20ms AI Bot",
    description:
      "FutFun vs Elite FUT SNIPER comparison. Real technical audit of predatory 10%–20% profit commissions, linear delay soft bans, 80ms–140ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://elitefutbot.com/futfun-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutFun vs Elite FUT SNIPER (2026 Review): Coin Commission vs 20ms AI Bot",
    description:
      "FutFun vs Elite FUT SNIPER comparison. Real technical audit of predatory 10%–20% profit commissions, linear delay soft bans, 80ms–140ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futFunData} />;
}
