import { CompetitorData } from "./types";

export const futIslandData: CompetitorData = {
  slug: "futisland-vs-elitefutbot",
  competitorName: "FUT ISLAND",
  competitorType: "extension",
  tagline: "FUT ISLAND Offers Monthly and One-Time Plans With a 24-Hour Trial. Elite FUT SNIPER Is One Yearly License.",
  summaryPassage: "FUT ISLAND (futisland.com) is an EA FC 27 sniping automation Chrome extension with custom filters, an auto bidder, an AI SBC solver, bulk listing and relisting, FUT.GG and FUTBIN price checks and alerts. Standard is £9.99 a month or £29.99 one-time, Premium is £16.99 a month or £49.99 one-time, with a 24-hour trial (48 hours if you connect Discord). Elite FUT SNIPER is a Chrome extension for €19.90/year with a free 2-day trial.",
  verdict: "FUT ISLAND has a similar feature set (sniping, bidding, listing) and an SBC solver, with two tiers and both monthly and one-time pricing. Elite FUT SNIPER has one plan at €19.90 a year and a free 2-day trial. Compare the tier you would need with Elite's single price.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "FUT ISLAND's site is built around EA FC 27 only. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "FUT ISLAND is an EAFC 27 sniping automation tool for the Ultimate Team web app, installed from the Chrome Web Store. Its site lists transfer market sniping with custom filters, an auto bidder, an AI SBC solver, bulk listing and relisting, FUT.GG and FUTBIN price checks and audio or mobile alerts. Prices are shown in GBP, with EUR, USD and PLN selectors. Standard is £9.99 monthly (cancel any time) or £29.99 one-time. Premium is £16.99 monthly or £49.99 one-time. Both are listed as valid until 15.09.2027. It offers a 24-hour trial with no card, or 48 hours if you connect Discord first.",

  competitorPros: [
    "Auto bidder, bulk relisting and an AI SBC solver",
    "Chrome Web Store install",
    "24-hour trial, 48 hours with Discord",
    "Monthly (cancel any time) or one-time plans",
    "Prices selectable in GBP, EUR, USD or PLN"
  ],
  competitorCons: [
    "Two tiers (Standard and Premium)",
    "Premium is £49.99 one-time or £16.99 a month",
    "The page does not state refund terms"
  ],

  elitePros: [
    "Isolated Chrome Side Panel HUD docking seamlessly beside the Web App with 0% DOM interference",
    "Sub-20ms direct in-memory WebSocket response time that wins meta 59th-minute deals",
    "Integrated neural AI SBC solver that evaluates club untradeables and auto-buys in sub-500ms",
    "Humanization++ mode featuring authentic Bézier curve physics and Gaussian jitter (0 bans to date)",
    "Parallel multi-filter engine monitoring 15+ player targets simultaneously in one continuous loop",
    "Dynamic batch repricing checking live market floors and automatically deducting 5% EA tax",
    "Single transparent €19.90/year license covering both EA FC 26 and FC 27 with 24/7 VIP Discord support",
    "Runs client-side in your own Chrome session",
  ],
  idealFor: {
    "competitor": "Traders who want monthly or one-time options and an AI SBC solver.",
    "elite": "Traders who want one plan, one yearly price and a free trial without a tier choice."
  },

  communityIssuesAudit: {
    "headline": "Where FUT ISLAND and Elite FUT SNIPER Differ",
    "subheadline": "Both are Chrome sniping extensions. The main differences are tiers, billing and trial length.",
    "issues": [
      {
        "title": "Tiers and billing",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "FUT ISLAND has Standard (£9.99 monthly or £29.99 one-time) and Premium (£16.99 monthly or £49.99 one-time).",
        "eliteSolution": "Elite FUT SNIPER has one plan, €19.90 for a year, with all features included."
      },
      {
        "title": "Trial",
        "badge": "Trial",
        "severity": "warning",
        "competitorFlaw": "FUT ISLAND offers 24 hours free, or 48 hours if you connect Discord first.",
        "eliteSolution": "Elite FUT SNIPER offers a free 2-day trial with all features and no Discord step."
      },
      {
        "title": "Titles",
        "badge": "Titles",
        "severity": "warning",
        "competitorFlaw": "FUT ISLAND's site covers EA FC 27 only.",
        "eliteSolution": "Elite FUT SNIPER covers EA FC 27 and FC 26."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: FUT ISLAND vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Sniping",
        "competitorReality": "Transfer market sniping with custom filters.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Bidding",
        "competitorReality": "Auto Bidder.",
        "eliteAdvantage": "Built-in auto bidder."
      },
      {
        "advertisedName": "Listing",
        "competitorReality": "Bulk listing and relisting.",
        "eliteAdvantage": "Batch relisting with EA's 5% tax built in."
      },
      {
        "advertisedName": "SBC solver",
        "competitorReality": "AI SBC Solver.",
        "eliteAdvantage": "See Elite's feature page for current SBC status."
      },
      {
        "advertisedName": "Price checks and alerts",
        "competitorReality": "FUT.GG and FUTBIN checks, audio and mobile alerts.",
        "eliteAdvantage": "Live Futbin pricing and profit display in the Side Panel."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "£9.99 to £49.99 depending on tier and billing.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Two Tiers vs One Yearly License",
    "subheadline": "FUT ISLAND prices are shown in GBP and may change.",
    "competitorModel": {
      "title": "FUT ISLAND",
      "price": "Standard £9.99/month or £29.99 one-time · Premium £16.99/month or £49.99 one-time",
      "hiddenCosts": [
        "Two tiers to choose between",
        "Covers EA FC 27 only",
        "Refund terms are not stated on the page we read"
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
    "summary": "FUT ISLAND offers two tiers and two billing options. Elite FUT SNIPER offers one yearly plan."
  },

  keyStatistics: [
    {
      "label": "FUT ISLAND Standard",
      "value": "£9.99/month or £29.99 one-time",
      "source": "futisland.com"
    },
    {
      "label": "FUT ISLAND Premium",
      "value": "£16.99/month or £49.99 one-time",
      "source": "futisland.com"
    },
    {
      "label": "FUT ISLAND trial",
      "value": "24h, or 48h with Discord",
      "source": "futisland.com"
    },
    {
      "label": "Elite price",
      "value": "€19.90/year",
      "source": "elitefutbot.com"
    }
  ],

  citations: [
    {
      "label": "FUT ISLAND official site",
      "url": "https://futisland.com"
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
      "feature": "Sniping",
      "elite": "Yes, sub-20ms",
      "competitor": "Yes",
      "winner": "tie"
    },
    {
      "feature": "Bidding",
      "elite": "Built-in auto bidder",
      "competitor": "Auto Bidder",
      "winner": "tie"
    },
    {
      "feature": "Listing",
      "elite": "Batch relisting, 5% tax built in",
      "competitor": "Bulk listing and relisting",
      "winner": "tie"
    },
    {
      "feature": "SBC solver",
      "elite": "See Elite's feature page",
      "competitor": "AI SBC Solver",
      "winner": "tie"
    },
    {
      "feature": "Free trial",
      "elite": "2 days, no card",
      "competitor": "24h (48h with Discord)",
      "winner": "elite"
    },
    {
      "feature": "Plans",
      "elite": "One",
      "competitor": "Standard and Premium",
      "winner": "tie"
    },
    {
      "feature": "Titles covered",
      "elite": "EA FC 27 and FC 26",
      "competitor": "EA FC 27",
      "winner": "elite"
    }
  ],

  faqs: [
    {
      "question": "How much does FUT ISLAND cost?",
      "answer": "Its site shows Standard at £9.99 a month or £29.99 one-time, and Premium at £16.99 a month or £49.99 one-time."
    },
    {
      "question": "Does FUT ISLAND have an SBC solver?",
      "answer": "Yes. Its site lists an AI SBC Solver."
    },
    {
      "question": "Does FUT ISLAND have a free trial?",
      "answer": "Yes. 24 hours with no card, or 48 hours if you connect Discord before starting."
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
