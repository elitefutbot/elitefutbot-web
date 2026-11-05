import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { remxData } from "@/data/competitors/remx";

export const metadata: Metadata = {
  title: {
    absolute: "RemX Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "RemX vs Elite FUT SNIPER: compare RemX's £14.99 one-time FC 27 license with Elite's €19.90/year extension, auto bidder and free trial.",
  keywords: [
    "remx",
    "remx sniping bot",
    "remx review",
    "snipingboteafc.com",
    "remx vs elite fut sniper",
    "remx price",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/remx-vs-elitefutbot" },
  openGraph: {
    title: "RemX Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "RemX vs Elite FUT SNIPER: compare RemX's £14.99 one-time FC 27 license with Elite's €19.90/year extension, auto bidder and free trial.",
    url: "https://www.elitefutbot.com/remx-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemX Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "RemX vs Elite FUT SNIPER: compare RemX's £14.99 one-time FC 27 license with Elite's €19.90/year extension, auto bidder and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={remxData} />;
}
