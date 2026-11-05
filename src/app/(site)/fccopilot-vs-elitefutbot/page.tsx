import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fcCopilotData } from "@/data/competitors/fccopilot";

export const metadata: Metadata = {
  title: {
    absolute: "FC Copilot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FC Copilot vs Elite FUT SNIPER: both are Chrome extensions. Compare store ratings, price clarity, auto bidding and Elite's free 2-day trial.",
  keywords: [
    "fc copilot",
    "fccopilot",
    "fc copilot review",
    "fccopilot.com",
    "fc copilot vs elite fut sniper",
    "ea fc 27 autobuyer",
    "ea fc sniping bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fccopilot-vs-elitefutbot" },
  openGraph: {
    title: "FC Copilot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC Copilot vs Elite FUT SNIPER: both are Chrome extensions. Compare store ratings, price clarity, auto bidding and Elite's free 2-day trial.",
    url: "https://www.elitefutbot.com/fccopilot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC Copilot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC Copilot vs Elite FUT SNIPER: both are Chrome extensions. Compare store ratings, price clarity, auto bidding and Elite's free 2-day trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fcCopilotData} />;
}
