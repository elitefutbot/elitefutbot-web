import { CompetitorData } from "./types";

export const futCoinHarvesterData: CompetitorData = {
  slug: "futcoinharvester-vs-elitefutbot",
  competitorName: "FUT Coin Harvester",
  competitorType: "desktop-app",
  tagline: "FUT Coin Harvester Is a Windows Trading Bot. Elite FUT SNIPER Is a Chrome Extension.",
  summaryPassage: "FUT Coin Harvester is a Windows application for sniping, bidding and auto-selling on the EA Web App, with SBC automation through its Harv Solver. It runs on a Windows PC or a Windows VPS, supports multiple accounts depending on your license, and does not show prices on its homepage. Elite FUT SNIPER is a Chrome extension that snipes, bids and relists for €19.90/year, with a free 2-day trial.",
  verdict: "Choose FUT Coin Harvester if you want a Windows program that runs many accounts around the clock on a PC or VPS, with per-account schedules and proxies. Choose Elite FUT SNIPER if you want a Chrome extension with one clear price and a free trial. Check FUT Coin Harvester's pricing page for current license costs.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "FUT Coin Harvester's site describes trading for PlayStation, Xbox and PC Ultimate Team accounts. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "FUT Coin Harvester is a Windows application that snipes deals, wins bids and auto-sells for profit. Its site lists trading filters for single players, leagues or market segments, auto-selling with a profit margin you set, SBC automation through Harv Solver, saved solutions and club search templates, per-account schedules with randomized start and end times, a statistics view, optional Discord or Telegram alerts, and optional proxies per account. A license supports as many accounts as it allows and is bound to one machine. Prices depend on account capacity and runtime and are on a separate pricing page. Support is through Discord, email and guides.",

  competitorPros: [
    "Snipes, bids and auto-sells with profit margins you set",
    "SBC automation through its Harv Solver",
    "Runs many accounts, each with its own schedule and optional proxy",
    "Optional Discord and Telegram notifications",
    "Supports PlayStation, Xbox and PC Ultimate Team accounts"
  ],
  competitorCons: [
    "Windows only: needs a Windows PC or a Windows VPS",
    "Prices are not shown on its homepage and depend on account capacity and runtime",
    "Harv SBC solver requests, proxies and hosting may cost extra",
    "We could not find a free trial or refund terms on its homepage"
  ],

  elitePros: [
    "100% local client-side execution in Chrome: zero password sharing, zero cloud token leaks",
    "Sub-20ms direct in-memory WebSocket response time that wins meta 59th-minute deals",
    "Integrated neural AI SBC solver that evaluates club untradeables and auto-buys in sub-500ms",
    "Humanization++ mode with authentic Bézier curve mouse dynamics and Gaussian jitter (0 bans to date)",
    "Parallel multi-filter engine scanning 15+ player targets simultaneously in one continuous loop",
    "Dynamic batch repricing checking live market floors and automatically deducting 5% EA tax",
    "Isolated Chrome Side Panel HUD docking cleanly alongside the Web App with zero canvas clutter",
    "Single transparent €19.90/year license covering both EA FC 26 and FC 27 with 24/7 VIP Discord support",
  ],
  idealFor: {
    "competitor": "Traders who run several accounts around the clock on a Windows PC or VPS.",
    "elite": "Traders who want a Chrome extension with one price, a free trial and no VPS."
  },

  communityIssuesAudit: {
    "headline": "Where FUT Coin Harvester and Elite FUT SNIPER Differ",
    "subheadline": "Both trade automatically. The main differences are where they run, how pricing works and the trial.",
    "issues": [
      {
        "title": "Where it runs",
        "badge": "Install",
        "severity": "warning",
        "competitorFlaw": "FUT Coin Harvester is a Windows application. For 24/7 trading its site suggests a Windows PC or a Windows VPS, and each license is bound to one machine.",
        "eliteSolution": "Elite FUT SNIPER is a Chrome extension that runs in your own Chrome session. A Pro license covers up to 2 devices."
      },
      {
        "title": "Pricing",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "License prices depend on account capacity and runtime and sit on a separate pricing page. Harv SBC solver requests, proxies and hosting may cost extra.",
        "eliteSolution": "Elite FUT SNIPER costs €19.90/year with all features included."
      },
      {
        "title": "Trial and refunds",
        "badge": "Trial",
        "severity": "warning",
        "competitorFlaw": "We could not find a free trial or refund terms on FUT Coin Harvester's homepage.",
        "eliteSolution": "Every new Elite FUT SNIPER account gets a free 2-day trial with all features and no card."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: FUT Coin Harvester vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Sniping and bidding",
        "competitorReality": "Yes. Snipes deals and wins bids.",
        "eliteAdvantage": "Searches continuously and buys matching cards (sub-20ms), plus a built-in auto bidder."
      },
      {
        "advertisedName": "Auto-selling",
        "competitorReality": "Yes, with a profit margin you set.",
        "eliteAdvantage": "Batch relisting with EA's 5% tax built in."
      },
      {
        "advertisedName": "Multiple accounts",
        "competitorReality": "As many accounts as your license allows, each with its own schedule and optional proxy.",
        "eliteAdvantage": "Pro license covers up to 2 devices."
      },
      {
        "advertisedName": "Platform",
        "competitorReality": "Windows application.",
        "eliteAdvantage": "Chrome extension from the Chrome Web Store, or installed manually."
      },
      {
        "advertisedName": "Notifications",
        "competitorReality": "Optional Discord or Telegram alerts.",
        "eliteAdvantage": "Live profit display in the Chrome Side Panel."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "Depends on account capacity and runtime; see its pricing page.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Capacity-Based Licenses vs One Yearly License",
    "subheadline": "Check FUT Coin Harvester's pricing page for current costs.",
    "competitorModel": {
      "title": "FUT Coin Harvester",
      "price": "Depends on account capacity and runtime (see its pricing page)",
      "hiddenCosts": [
        "Prices are not shown on its homepage",
        "Harv SBC solver requests may cost extra",
        "Proxies and VPS hosting may cost extra",
        "We could not find a free trial or refund terms"
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
    "summary": "FUT Coin Harvester prices by account capacity and runtime. Elite FUT SNIPER has one price, €19.90/year, with a free 2-day trial."
  },

  keyStatistics: [
    {
      "label": "FUT Coin Harvester platform",
      "value": "Windows (PC or VPS)",
      "source": "futcoinharvester.com"
    },
    {
      "label": "FUT Coin Harvester license",
      "value": "Bound to one machine",
      "source": "futcoinharvester.com"
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
      "label": "FUT Coin Harvester official site",
      "url": "https://futcoinharvester.com"
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
      "feature": "Sniping and bidding",
      "elite": "Yes, sub-20ms plus auto bidder",
      "competitor": "Yes",
      "winner": "tie"
    },
    {
      "feature": "Auto-selling and relisting",
      "elite": "Yes, 5% tax built in",
      "competitor": "Yes, with profit margin",
      "winner": "tie"
    },
    {
      "feature": "Many accounts at once",
      "elite": "Up to 2 devices on Pro",
      "competitor": "As many as the license allows",
      "winner": "competitor"
    },
    {
      "feature": "Runs without a PC left on",
      "elite": "No, runs in your Chrome",
      "competitor": "Windows VPS option",
      "winner": "competitor"
    },
    {
      "feature": "Install",
      "elite": "Chrome extension",
      "competitor": "Windows application",
      "winner": "tie"
    },
    {
      "feature": "Price shown on homepage",
      "elite": "€19.90/year",
      "competitor": "Not shown",
      "winner": "elite"
    },
    {
      "feature": "Free trial",
      "elite": "2 days, no card",
      "competitor": "None found on its homepage",
      "winner": "elite"
    }
  ],

  faqs: [
    {
      "question": "Is FUT Coin Harvester a browser extension?",
      "answer": "Its site describes a Windows application that you run on a Windows PC or a Windows VPS. Elite FUT SNIPER is a Chrome extension."
    },
    {
      "question": "Does FUT Coin Harvester have an SBC solver?",
      "answer": "Yes. Its site describes SBC automation through Harv Solver, saved solutions and club search templates. Harv SBC solver requests may cost extra."
    },
    {
      "question": "How much does FUT Coin Harvester cost?",
      "answer": "Its homepage does not list prices. It says license prices depend on account capacity and runtime, and links to a pricing page."
    },
    {
      "question": "Can FUT Coin Harvester run many accounts?",
      "answer": "Yes. Its site says it supports as many accounts as your license allows, each with its own schedule and optional proxy."
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
