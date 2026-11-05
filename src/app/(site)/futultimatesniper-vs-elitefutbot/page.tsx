import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futUltimateSniperData } from "@/data/competitors/futultimatesniper";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Ultimate Sniper vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Ultimate Sniper vs Elite FUT SNIPER: compare Turbo Auto ($20.99, SBC solver, mobile) with Elite's €19.90/year extension and free trial.",
  keywords: [
    "fut ultimate sniper",
    "futultimatesniper",
    "fus turbo auto",
    "futultimatesniper.app",
    "fut ultimate sniper vs elite fut sniper",
    "fut ultimate sniper price",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futultimatesniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Ultimate Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Ultimate Sniper vs Elite FUT SNIPER: compare Turbo Auto ($20.99, SBC solver, mobile) with Elite's €19.90/year extension and free trial.",
    url: "https://www.elitefutbot.com/futultimatesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Ultimate Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Ultimate Sniper vs Elite FUT SNIPER: compare Turbo Auto ($20.99, SBC solver, mobile) with Elite's €19.90/year extension and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futUltimateSniperData} />;
}
