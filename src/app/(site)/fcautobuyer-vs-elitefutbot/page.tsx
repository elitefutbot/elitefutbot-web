import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fcAutoBuyerData } from "@/data/competitors/fcautobuyer";

export const metadata: Metadata = {
  title: {
    absolute: "FC AutoBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FC AutoBuyer vs Elite FUT SNIPER: compare a £7.99 one-month extension and 2-hour trial with Elite's €19.90/year license and 2-day trial.",
  keywords: [
    "fc autobuyer",
    "fcautobuyer",
    "fcautobuyer.com",
    "fc autobuyer review",
    "fc autobuyer price",
    "fc autobuyer vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fcautobuyer-vs-elitefutbot" },
  openGraph: {
    title: "FC AutoBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC AutoBuyer vs Elite FUT SNIPER: compare a £7.99 one-month extension and 2-hour trial with Elite's €19.90/year license and 2-day trial.",
    url: "https://www.elitefutbot.com/fcautobuyer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC AutoBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC AutoBuyer vs Elite FUT SNIPER: compare a £7.99 one-month extension and 2-hour trial with Elite's €19.90/year license and 2-day trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fcAutoBuyerData} />;
}
