import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSnipingBotData } from "@/data/competitors/eafcsnipingbot";

export const metadata: Metadata = {
  title: {
    absolute: "EAFC Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "EAFC Sniping Bot vs Elite FUT SNIPER: compare a one-time FC 27 license and 12-hour trial with Elite's €19.90/year extension and 2-day trial.",
  keywords: [
    "eafc sniping bot",
    "eafcsnipingbot",
    "eafcsnipingbot.com",
    "eafc sniping bot review",
    "eafc sniping bot vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/eafcsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniping Bot vs Elite FUT SNIPER: compare a one-time FC 27 license and 12-hour trial with Elite's €19.90/year extension and 2-day trial.",
    url: "https://www.elitefutbot.com/eafcsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniping Bot vs Elite FUT SNIPER: compare a one-time FC 27 license and 12-hour trial with Elite's €19.90/year extension and 2-day trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSnipingBotData} />;
}
