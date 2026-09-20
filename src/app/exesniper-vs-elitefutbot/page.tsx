import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { exeSniperData } from "@/data/competitors/exesniper";

export const metadata: Metadata = {
  title: "ExeSniper vs Elite FUT SNIPER (2026 Review): Standalone .EXE vs Sandboxed Chrome Extension",
  description:
    "ExeSniper vs Elite FUT SNIPER comparison. In-depth security audit of unsigned .exe binary risks, antivirus malware alerts, WebDriver macro lag, and Elite's sandboxed 20ms Chrome Side Panel with AI SBC solver.",
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
    title: "ExeSniper vs Elite FUT SNIPER (2026 Review): Standalone .EXE vs Sandboxed Chrome Extension",
    description:
      "ExeSniper vs Elite FUT SNIPER comparison. In-depth security audit of unsigned .exe binary risks, antivirus malware alerts, WebDriver macro lag, and Elite's sandboxed 20ms Chrome Side Panel with AI SBC solver.",
    url: "https://www.elitefutbot.com/exesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExeSniper vs Elite FUT SNIPER (2026 Review): Standalone .EXE vs Sandboxed Chrome Extension",
    description:
      "ExeSniper vs Elite FUT SNIPER comparison. In-depth security audit of unsigned .exe binary risks, antivirus malware alerts, WebDriver macro lag, and Elite's sandboxed 20ms Chrome Side Panel with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={exeSniperData} />;
}
