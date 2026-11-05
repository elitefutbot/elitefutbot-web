import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBotData } from "@/data/competitors/futsnipingbot";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Sniping Bot vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Sniping Bot vs Elite FUT SNIPER: compare a US$34.99 one-time FC 27 bot with Elite's €19.90/year extension and free trial.",
  keywords: [
    "fut sniping bot",
    "futsnipingbot",
    "futsnipingbot.com",
    "fut sniping bot review",
    "fut sniping bot price",
    "fut sniping bot vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot vs Elite FUT SNIPER: compare a US$34.99 one-time FC 27 bot with Elite's €19.90/year extension and free trial.",
    url: "https://www.elitefutbot.com/futsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot vs Elite FUT SNIPER: compare a US$34.99 one-time FC 27 bot with Elite's €19.90/year extension and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBotData} />;
}
