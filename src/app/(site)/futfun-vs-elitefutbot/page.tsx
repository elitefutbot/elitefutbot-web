import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futFunData } from "@/data/competitors/futfun";

export const metadata: Metadata = {
  title: {
    absolute: "FutFun vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FutFun vs Elite FUT SNIPER: compare a cloud bot that keeps 30% of profit with Elite's flat €19.90/year Chrome extension and free trial.",
  keywords: [
    "futfun",
    "fut fun",
    "futfun review",
    "futfun.com",
    "futfun 30%",
    "futfun vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futfun-vs-elitefutbot" },
  openGraph: {
    title: "FutFun vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutFun vs Elite FUT SNIPER: compare a cloud bot that keeps 30% of profit with Elite's flat €19.90/year Chrome extension and free trial.",
    url: "https://www.elitefutbot.com/futfun-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutFun vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutFun vs Elite FUT SNIPER: compare a cloud bot that keeps 30% of profit with Elite's flat €19.90/year Chrome extension and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futFunData} />;
}
