import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easyFutWebData } from "@/data/competitors/easyfutweb";

export const metadata: Metadata = {
  title: "EasyFUTWeb vs Elite FUT SNIPER (2026 Review): Userscript vs Chrome Extension",
  description:
    "EasyFUTWeb vs Elite FUT SNIPER comparison. Real audit of Tampermonkey script crashes, main-thread freezing, CSP blocking, and Elite's sandboxed 20ms Chrome Side Panel HUD with AI SBC solver.",
  keywords: [
    "easyfutweb",
    "easy fut web",
    "easyfutweb review",
    "easyfutweb vs elite fut sniper",
    "tampermonkey fifa bot",
    "tampermonkey ea fc autobuyer",
    "fc 26 userscript sniper",
    "ea fc 27 chrome extension bot",
    "easyfutweb ban risk",
    "best ea fc sniping bot 2026",
  ],
  alternates: { canonical: "https://elitefutbot.com/easyfutweb-vs-elitefutbot" },
  openGraph: {
    title: "EasyFUTWeb vs Elite FUT SNIPER (2026 Review): Userscript vs Chrome Extension",
    description:
      "EasyFUTWeb vs Elite FUT SNIPER comparison. Real audit of Tampermonkey script crashes, main-thread freezing, CSP blocking, and Elite's sandboxed 20ms Chrome Side Panel HUD with AI SBC solver.",
    url: "https://elitefutbot.com/easyfutweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyFUTWeb vs Elite FUT SNIPER (2026 Review): Userscript vs Chrome Extension",
    description:
      "EasyFUTWeb vs Elite FUT SNIPER comparison. Real audit of Tampermonkey script crashes, main-thread freezing, CSP blocking, and Elite's sandboxed 20ms Chrome Side Panel HUD with AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easyFutWebData} />;
}
