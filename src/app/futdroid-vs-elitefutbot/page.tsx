import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futDroidData } from "@/data/competitors/futdroid";

export const metadata: Metadata = {
  title: "FUTDroid vs Elite FUT SNIPER (2026 Review): Abandoned 66-User Script & Speed",
  description:
    "FUTDroid vs Elite FUT SNIPER comparison. Real audit of FUTDroid's v3.6.5 stagnation since October 2024, 66 users, data collection disclosures, and sub-20ms verified Chrome Side Panel HUD for EA FC 26 & FC 27.",
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
    title: "FUTDroid vs Elite FUT SNIPER (2026 Review): Abandoned 66-User Script & Speed",
    description:
      "FUTDroid vs Elite FUT SNIPER comparison. Real audit of FUTDroid's v3.6.5 stagnation since October 2024, 66 users, data collection disclosures, and sub-20ms verified Chrome Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futdroid-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTDroid vs Elite FUT SNIPER (2026 Review): Abandoned 66-User Script & Speed",
    description:
      "FUTDroid vs Elite FUT SNIPER comparison. Real audit of FUTDroid's v3.6.5 stagnation since October 2024, 66 users, data collection disclosures, and sub-20ms verified Chrome Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futDroidData} />;
}
