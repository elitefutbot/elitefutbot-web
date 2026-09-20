import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperWebData } from "@/data/competitors/futsniperweb";

export const metadata: Metadata = {
  title: "FUT Sniper Web vs Elite FUT SNIPER (2026 Review): Cloud Portal vs 20ms Local HUD",
  description:
    "FUT Sniper Web vs Elite FUT SNIPER comparison. In-depth audit of cloud proxy lag (350ms+), datacenter IP ban flags, credential security risks, and Elite's sub-20ms local Chrome Side Panel with AI SBC solver.",
  keywords: [
    "fut sniper web",
    "futsniperweb",
    "fut sniper web review",
    "fut sniper web vs elite fut sniper",
    "cloud fut autobuyer",
    "web portal sniping bot",
    "ea fc 26 cloud bot",
    "fut sniper web ban risk",
    "best ea fc sniping bot 2026",
    "local chrome extension autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsniperweb-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper Web vs Elite FUT SNIPER (2026 Review): Cloud Portal vs 20ms Local HUD",
    description:
      "FUT Sniper Web vs Elite FUT SNIPER comparison. In-depth audit of cloud proxy lag (350ms+), datacenter IP ban flags, credential security risks, and Elite's sub-20ms local Chrome Side Panel with AI SBC solver.",
    url: "https://www.elitefutbot.com/futsniperweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper Web vs Elite FUT SNIPER (2026 Review): Cloud Portal vs 20ms Local HUD",
    description:
      "FUT Sniper Web vs Elite FUT SNIPER comparison. In-depth audit of cloud proxy lag (350ms+), datacenter IP ban flags, credential security risks, and Elite's sub-20ms local Chrome Side Panel with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperWebData} />;
}
