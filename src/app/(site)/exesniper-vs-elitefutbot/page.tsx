import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { exeSniperData } from "@/data/competitors/exesniper";

export const metadata: Metadata = {
  title: {
    absolute: "ExeSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "ExeSniper vs Elite FUT SNIPER review: compare unsafe .exe binaries, antivirus alerts, macro lag, and Elite's sandboxed 20ms Chrome extension with AI.",
  keywords: [
    "exesniper",
    "exe sniper",
    "exesniper review",
    "exesniper vs elite fut sniper",
    "fifa exe bot",
    "ea fc executable autobuyer",
    "ea fc 26 sniping bot mac",
    "exesniper trojan malware warning",
    "best ea fc sniping bot 2026",
    "sandboxed chrome autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/exesniper-vs-elitefutbot" },
  openGraph: {
    title: "ExeSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "ExeSniper vs Elite FUT SNIPER review: compare unsafe .exe binaries, antivirus alerts, macro lag, and Elite's sandboxed 20ms Chrome extension with AI.",
    url: "https://www.elitefutbot.com/exesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExeSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "ExeSniper vs Elite FUT SNIPER review: compare unsafe .exe binaries, antivirus alerts, macro lag, and Elite's sandboxed 20ms Chrome extension with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={exeSniperData} />;
}
