import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc26SnipingBotData } from "@/data/competitors/fc26snipingbot";

export const metadata: Metadata = {
  title: {
    absolute: "FC26 Sniping Bot vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FC26 Sniping Bot PRO+ (powered by FUTReveal) vs Elite FUT SNIPER: a coming-soon FC 26 bot compared with Elite's available €19.90/year extension.",
  keywords: [
    "fc26 sniping bot",
    "fc26 sniping bot pro+",
    "fc26snipingbot",
    "fc26snipingbot.com",
    "futreveal",
    "fc26 sniping bot vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fc26snipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FC26 Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC26 Sniping Bot PRO+ (powered by FUTReveal) vs Elite FUT SNIPER: a coming-soon FC 26 bot compared with Elite's available €19.90/year extension.",
    url: "https://www.elitefutbot.com/fc26snipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC26 Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC26 Sniping Bot PRO+ (powered by FUTReveal) vs Elite FUT SNIPER: a coming-soon FC 26 bot compared with Elite's available €19.90/year extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc26SnipingBotData} />;
}
