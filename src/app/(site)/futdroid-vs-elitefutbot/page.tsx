import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futDroidData } from "@/data/competitors/futdroid";

export const metadata: Metadata = {
  title: {
    absolute: "FUTDroid vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTDroid vs Elite FUT SNIPER review: compare Android emulator setups, UI lag, and Elite's native sub-20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "futdroid",
    "futdroid review",
    "futdroid chrome extension",
    "futdroid apk",
    "futdroid ban",
    "is futdroid safe",
    "futdroid vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "futdroid download",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futdroid-vs-elitefutbot" },
  openGraph: {
    title: "FUTDroid vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTDroid vs Elite FUT SNIPER review: compare Android emulator setups, UI lag, and Elite's native sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://www.elitefutbot.com/futdroid-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTDroid vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTDroid vs Elite FUT SNIPER review: compare Android emulator setups, UI lag, and Elite's native sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futDroidData} />;
}
