import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futRichData } from "@/data/competitors/futrich";

export const metadata: Metadata = {
  title: "FUTRich vs Elite FUT SNIPER (2026 Review): Title-Lock Fees & Device Limits",
  description:
    "FUTRich vs Elite FUT SNIPER comparison. Real audit of futrich.com €39.99 single-title lock, strict single-device restrictions, linear delay macro risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
  keywords: [
    "futrich",
    "futrich review",
    "futrich sniping bot",
    "futrich vs elite fut sniper",
    "futrich autobuyer",
    "futrich ban",
    "is futrich safe",
    "futrich pricing",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "futrich sbc solver",
    "futrich extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futrich-vs-elitefutbot" },
  openGraph: {
    title: "FUTRich vs Elite FUT SNIPER (2026 Review): Title-Lock Fees & Device Limits",
    description:
      "FUTRich vs Elite FUT SNIPER comparison. Real audit of futrich.com €39.99 single-title lock, strict single-device restrictions, linear delay macro risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futrich-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTRich vs Elite FUT SNIPER (2026 Review): Title-Lock Fees & Device Limits",
    description:
      "FUTRich vs Elite FUT SNIPER comparison. Real audit of futrich.com €39.99 single-title lock, strict single-device restrictions, linear delay macro risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futRichData} />;
}
