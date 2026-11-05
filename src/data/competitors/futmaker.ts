import { CompetitorData } from "./types";

export const futMakerData: CompetitorData = {
  slug: "futmaker-vs-elitefutbot",
  competitorName: "FUT Maker",
  competitorType: "desktop-app",
  tagline: "FUTmaker Is a Russian-Language Windows Transfer Bot With a Coin-Based Trial. Elite FUT SNIPER Is a Chrome Extension.",
  summaryPassage: "FUTmaker (futmaker.com) is a Russian-language transfer bot for EA FC 27 that runs as a Windows program and supports PC, PlayStation and Xbox accounts. Its trial runs free until the bot earns you 20,000 coins, and the site offers free subscriptions for referrals and promotion. It also solves captchas and sends Telegram updates. Elite FUT SNIPER is a Chrome extension for €19.90/year with a free 2-day trial.",
  verdict: "FUTmaker is a Windows program with a coin-based trial and a referral program, aimed at Russian speakers. Elite FUT SNIPER installs from the Chrome Web Store, works on any desktop that runs Chrome, and costs €19.90 a year with a free 2-day trial. Check futmaker.com for its current prices.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "FUTmaker's site is built around EA FC 27. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "FUTmaker (futmaker.com) calls itself a transfer bot for EA FC 27: a program that earns coins by buying and reselling player cards on the transfer market. It runs on a Windows computer and supports PC, PlayStation and Xbox accounts. Its site says the trial works free until you earn 20,000 coins. It lists flexible settings, automatic selling, automatic player and price selection, automatic captcha solving, and Telegram updates. It offers free subscription time for inviting clients or promoting the bot, and a 30% affiliate program. The site is in Russian with an English option. The page we read does not show prices.",

  competitorPros: [
    "Trial runs until you earn 20,000 coins",
    "Supports PC, PlayStation and Xbox accounts",
    "Automatic captcha solving and Telegram updates",
    "Free subscription time through referrals and promotion",
    "30% affiliate program"
  ],
  competitorCons: [
    "Windows program, not a browser extension",
    "The page we read does not show prices",
    "The site is mainly in Russian"
  ],

  elitePros: [
    "Lightweight footprint, running inside Chrome's Side Panel",
    "Sub-20ms direct in-memory WebSocket response time that wins meta 59th-minute snipes",
    "Integrated neural AI SBC solver that evaluates club untradeables and solves chemistry in sub-500ms",
    "100% cross-platform compatibility across macOS (Apple Silicon M1-M4 & Intel), Windows, Linux, and ChromeOS",
    "Docked Chrome Side Panel HUD leaving the official Web App viewport completely clean and responsive",
    "Humanization++ mode with Gaussian micro-jitter and authentic Bézier cursor physics (0 bans across all seasons)",
    "Official 1-click Chrome Web Store install with automatic background updates and €19.90 flat license",
  ],
  idealFor: {
    "competitor": "Russian-speaking traders who want a Windows program and a coin-based trial.",
    "elite": "Traders who want a Chrome Web Store install and a time-based free trial."
  },

  communityIssuesAudit: {
    "headline": "Where FUTmaker and Elite FUT SNIPER Differ",
    "subheadline": "The main differences are install method, trial type and language.",
    "issues": [
      {
        "title": "Install",
        "badge": "Install",
        "severity": "warning",
        "competitorFlaw": "FUTmaker is a Windows program you download.",
        "eliteSolution": "Elite FUT SNIPER installs from the Chrome Web Store."
      },
      {
        "title": "Trial",
        "badge": "Trial",
        "severity": "warning",
        "competitorFlaw": "FUTmaker's trial works until you earn 20,000 coins.",
        "eliteSolution": "Elite FUT SNIPER offers a free 2-day trial with all features and no card."
      },
      {
        "title": "Language",
        "badge": "Language",
        "severity": "warning",
        "competitorFlaw": "FUTmaker's site is mainly in Russian, with an English option.",
        "eliteSolution": "Elite FUT SNIPER's site is available in several languages."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: FUTmaker vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Trading",
        "competitorReality": "Buys and resells player cards automatically.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Platform",
        "competitorReality": "Windows program.",
        "eliteAdvantage": "Chrome on desktop."
      },
      {
        "advertisedName": "Captcha handling",
        "competitorReality": "Automatic captcha solving.",
        "eliteAdvantage": "Configurable delays and pacing controls."
      },
      {
        "advertisedName": "Notifications",
        "competitorReality": "Telegram updates.",
        "eliteAdvantage": "Live profit display in the Chrome Side Panel."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "Not shown on the page we read; trial until 20,000 coins.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Coin-Based Trial vs Time-Based Trial",
    "subheadline": "FUTmaker's prices were not on the page we read.",
    "competitorModel": {
      "title": "FUTmaker",
      "price": "See futmaker.com (free trial until you earn 20,000 coins)",
      "hiddenCosts": [
        "Prices not shown on the page we read",
        "Windows only"
      ]
    },
    "eliteModel": {
      "title": "Elite FUT SNIPER",
      "price": "€19.90 / year",
      "inclusions": [
        "Automated sniping and auto-buying",
        "Auto bidder",
        "Automatic relisting with EA's 5% tax built in",
        "Live profit display in a Chrome Side Panel",
        "Free 2-day trial, no card needed",
        "Covers EA FC 26 and FC 27"
      ]
    },
    "summary": "FUTmaker has a coin-based trial. Elite FUT SNIPER has a 2-day trial and one yearly price."
  },

  keyStatistics: [
    {
      "label": "FUTmaker trial",
      "value": "Until you earn 20,000 coins",
      "source": "futmaker.com"
    },
    {
      "label": "FUTmaker affiliate",
      "value": "30% of each sale",
      "source": "futmaker.com"
    },
    {
      "label": "Elite price",
      "value": "€19.90/year",
      "source": "elitefutbot.com"
    },
    {
      "label": "Elite free trial",
      "value": "2 days",
      "source": "elitefutbot.com"
    }
  ],

  citations: [
    {
      "label": "FUTmaker official site",
      "url": "https://futmaker.com"
    },
    {
      "label": "Elite FUT SNIPER comparison guide",
      "url": "https://www.elitefutbot.com/tools/comparison-guide"
    },
    {
      "label": "Automated Profit Generation in Ultimate Team",
      "url": "https://www.elitefutbot.com/tools/sniping-guide"
    },
    {
      "label": "EA Sports FC 27 Architecture Specification",
      "url": "https://www.elitefutbot.com/fc27-fut-snipe-bot"
    }
  ],

  comparisonRows: [
    {
      "feature": "Platform",
      "elite": "Chrome on desktop",
      "competitor": "Windows program",
      "winner": "tie"
    },
    {
      "feature": "Trial",
      "elite": "2 days, no card",
      "competitor": "Until you earn 20,000 coins",
      "winner": "tie"
    },
    {
      "feature": "Captcha solving",
      "elite": "Configurable pacing",
      "competitor": "Automatic",
      "winner": "competitor"
    },
    {
      "feature": "Install",
      "elite": "Chrome Web Store",
      "competitor": "Download",
      "winner": "elite"
    },
    {
      "feature": "Price shown",
      "elite": "€19.90/year",
      "competitor": "Not on the page we read",
      "winner": "elite"
    }
  ],

  faqs: [
    {
      "question": "What platforms does FUTmaker support?",
      "answer": "It runs on a Windows computer and supports PC, PlayStation and Xbox accounts."
    },
    {
      "question": "How does the FUTmaker trial work?",
      "answer": "Its site says the trial works free until the bot earns you 20,000 coins."
    },
    {
      "question": "Is the FUTmaker site in English?",
      "answer": "It is mainly in Russian, with an English option."
    },
    {
      "question": "Does Elite FUT SNIPER show profit statistics?",
      "answer": "Yes. Elite FUT SNIPER's Side Panel HUD provides a live real-time breakdown of total cards sniped, gross profit, EA 5% tax deductions, net coins earned, and profit per hour."
    },
    {
      "question": "Can I try Elite FUT SNIPER for free?",
      "answer": "Yes. Every new account gets a free 2-day trial with all features and no card needed. After that, Pro costs €19.90 per year. Purchases are not refundable, so the trial is the time to test it."
    }
  ],

  reviewQuotes: [],
};
