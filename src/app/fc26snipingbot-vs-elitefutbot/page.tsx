import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc26SnipingBotData } from "@/data/competitors/fc26snipingbot";

export const metadata: Metadata = {
  title: {
    absolute: "FC26 Sniping Bot vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FC26 Sniping Bot vs Elite FUT SNIPER review: audit single-season repurchases, 80ms lag, ban flags, and Elite's unified 20ms FC 27 bot with AI solver.",
  keywords: [
    "fc26 sniping bot",
    "fc26snipingbot",
    "fc26 sniping bot review",
    "fc 26 sniping bot vs elite fut sniper",
    "ea fc 26 autobuyer extension",
    "ea sports fc 27 sniping bot",
    "title locked sniping bot",
    "fc26 sniping bot ban risk",
    "best ea fc sniping bot 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fc26snipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FC26 Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC26 Sniping Bot vs Elite FUT SNIPER review: audit single-season repurchases, 80ms lag, ban flags, and Elite's unified 20ms FC 27 bot with AI solver.",
    url: "https://www.elitefutbot.com/fc26snipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC26 Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC26 Sniping Bot vs Elite FUT SNIPER review: audit single-season repurchases, 80ms lag, ban flags, and Elite's unified 20ms FC 27 bot with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc26SnipingBotData} />;
}
