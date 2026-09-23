import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { abFutData } from "@/data/competitors/abfut";

export const metadata: Metadata = {
  title: {
    absolute: "ABFut 27 vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "ABFut 27 vs Elite FUT SNIPER review: compare iOS/Android mobile latency, monthly in-app subscriptions, desktop sub-20ms speed, and 0 ban safety.",
  keywords: [
    "abfut 27",
    "abfut autobuyer",
    "abfut review",
    "abfut vs elite fut sniper",
    "ea fc 27 mobile autobuyer",
    "fut 27 ios autobuyer",
    "fut android autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc autobuyer 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/abfut-vs-elitefutbot" },
  openGraph: {
    title: "ABFut 27 vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "ABFut 27 vs Elite FUT SNIPER review: compare iOS/Android mobile latency, monthly in-app subscriptions, desktop sub-20ms speed, and 0 ban safety.",
    url: "https://www.elitefutbot.com/abfut-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABFut 27 vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "ABFut 27 vs Elite FUT SNIPER review: compare iOS/Android mobile latency, monthly in-app subscriptions, desktop sub-20ms speed, and 0 ban safety.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={abFutData} />;
}
