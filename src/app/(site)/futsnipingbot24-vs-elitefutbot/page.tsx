import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBot24Data } from "@/data/competitors/futsnipingbot24";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Sniping Bot 24 vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Sniping Bot 24 vs Elite FUT SNIPER: a site describing FC 24 compared with Elite's FC 27 and FC 26 extension at €19.90/year.",
  keywords: [
    "fut sniping bot 24",
    "futsnipingbot24",
    "futsnipingbot24.com",
    "fut sniping bot 24 vs elite fut sniper",
    "fc 24 autobuyer",
    "ea fc 27 autobuyer",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.elitefutbot.com/futsnipingbot24-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot 24 vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot 24 vs Elite FUT SNIPER: a site describing FC 24 compared with Elite's FC 27 and FC 26 extension at €19.90/year.",
    url: "https://www.elitefutbot.com/futsnipingbot24-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot 24 vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot 24 vs Elite FUT SNIPER: a site describing FC 24 compared with Elite's FC 27 and FC 26 extension at €19.90/year.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBot24Data} />;
}
