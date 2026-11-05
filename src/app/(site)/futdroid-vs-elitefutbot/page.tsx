import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futDroidData } from "@/data/competitors/futdroid";

export const metadata: Metadata = {
  title: {
    absolute: "FUTDroid vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTDroid vs Elite FUT SNIPER: an EA FC 25 store listing last updated in 2024 compared with Elite's FC 27 and FC 26 extension at €19.90/year.",
  keywords: [
    "futdroid",
    "fut droid",
    "futdroid review",
    "futdroid sniping bot",
    "futdroid vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.elitefutbot.com/futdroid-vs-elitefutbot" },
  openGraph: {
    title: "FUTDroid vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTDroid vs Elite FUT SNIPER: an EA FC 25 store listing last updated in 2024 compared with Elite's FC 27 and FC 26 extension at €19.90/year.",
    url: "https://www.elitefutbot.com/futdroid-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTDroid vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTDroid vs Elite FUT SNIPER: an EA FC 25 store listing last updated in 2024 compared with Elite's FC 27 and FC 26 extension at €19.90/year.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futDroidData} />;
}
