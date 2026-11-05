import { CompetitorData } from "./types";

export const futtbotData: CompetitorData = {
  slug: "futtbot-vs-elitefutbot",
  competitorName: "Futtbot",
  competitorType: "userscript",
  tagline: "Futtbot and Elite FUT SNIPER Both Automate the Transfer Market. Here Is How They Differ.",
  summaryPassage: "Futtbot (futtbot.com) is a paid autobuyer, sniper, bidder and seller script that runs inside the official EA Web App, with an SBC solver that uses Futbin. Its plans are 1 month (€7.49), 3 months (€14.99) and 1 year (€59.99) at the time of writing, and its purchases are non-refundable. The page we read targets EA FC 26 (v6, October 2025). Elite FUT SNIPER is a Chrome extension for €19.90/year with a free 2-day trial.",
  verdict: "Both tools automate buying, bidding and selling in the EA Web App. Futtbot is cheaper if you only want one month (€7.49), and it lists an SBC solver and Telegram control. Elite FUT SNIPER is cheaper over a full year (€19.90 against €59.99 at the time of writing), covers FC 27, and lets you test it free for 2 days.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "The Futtbot page we read targets EA FC 26 (version v6, October 2025). Check its site for FC 27 support. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "Futtbot (futtbot.com) describes itself as a simple autobuyer, sniper, bidding and selling bot for Ultimate Team. It is a paid script that runs inside the official web app. Its page lists auto buyer, auto sniper, auto bidder and auto seller, an SBC solver using a Futbin integration, coverage of players, staff, club items and consumables, and many settings: sell and buy prices, bid expiry window, relisting, wait time, max purchases per search, stop-after timers, pause cycles, rating filters, randomized min bid and buy, captcha handling, and sound or Telegram notifications. It works with the web app on PC, Mac, Linux and Chromebook, with Android and iOS in beta, and says it does not need your EA login details. It calls itself undetectable but always a risk. Plans are 1 month (€7.49, reduced from €14.99), 3 months (€14.99, with 1 month free) and 1 year (€59.99, with 4 months free), all non-refundable.",

  competitorPros: [
    "Covers buying, sniping, bidding and selling",
    "SBC solver using Futbin",
    "Telegram notifications and control",
    "Works on PC, Mac, Linux and Chromebook, with Android and iOS in beta",
    "A 1-month plan (€7.49) is a cheap way to try it"
  ],
  competitorCons: [
    "Purchases are non-refundable, per its site",
    "The 1-year plan is €59.99 at the time of writing",
    "The page we read targets EA FC 26",
    "We could not find a free trial on its page"
  ],

  elitePros: [
    "Install from the Chrome Web Store with no coding or environment setup",
    "Sleek visual Chrome Side Panel HUD with real-time profit tracking and Futbin valuation",
    "Sub-20ms direct in-memory WebSocket response time that consistently beats external HTTP scripts",
    "Integrated neural AI SBC solver that automatically builds chemistry with club untradeables in sub-500ms",
    "Humanization++ mode with authentic Bézier curves and Gaussian jitter with an unbroken 0-ban track record",
    "Continuous automated background updates with 24/7 zero-downtime maintenance by dedicated architects",
    "Free VIP Discord trading community with daily investment presets, market leak alerts, and 24/7 architect assistance",
  ],
  idealFor: {
    "competitor": "Traders who want a short, low-cost monthly plan with Telegram control and many settings.",
    "elite": "Traders who want a yearly price, a Chrome Web Store install and a free trial first."
  },

  communityIssuesAudit: {
    "headline": "Where Futtbot and Elite FUT SNIPER Differ",
    "subheadline": "Both automate trading. The main differences are price, plan length and the free trial.",
    "issues": [
      {
        "title": "Plan length and price",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "Futtbot's plans run from €7.49 for one month to €59.99 for one year at the time of writing, and purchases are non-refundable.",
        "eliteSolution": "Elite FUT SNIPER costs €19.90 for a full year. Purchases are also not refundable, so use the free 2-day trial first."
      },
      {
        "title": "Free trial",
        "badge": "Trial",
        "severity": "warning",
        "competitorFlaw": "We could not find a free trial on Futtbot's page. The free months are bonus time on paid plans.",
        "eliteSolution": "Every new Elite FUT SNIPER account gets a free 2-day trial with all features and no card."
      },
      {
        "title": "Game version",
        "badge": "FC 27 support",
        "severity": "warning",
        "competitorFlaw": "The Futtbot page we read targets EA FC 26 (version v6, October 2025).",
        "eliteSolution": "Elite FUT SNIPER supports both EA FC 27 and FC 26 with one license."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: Futtbot vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Sniping and auto-buying",
        "competitorReality": "Yes. Auto buyer and auto sniper.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Bidding",
        "competitorReality": "Yes. Auto bidder.",
        "eliteAdvantage": "Built-in auto bidder."
      },
      {
        "advertisedName": "Selling and relisting",
        "competitorReality": "Yes. Auto seller with relisting.",
        "eliteAdvantage": "Batch relisting with EA's 5% tax built in."
      },
      {
        "advertisedName": "SBC solver",
        "competitorReality": "SBC solver using a Futbin integration.",
        "eliteAdvantage": "See Elite's feature page for current SBC status."
      },
      {
        "advertisedName": "Platforms",
        "competitorReality": "PC, Mac, Linux, Chromebook; Android and iOS in beta.",
        "eliteAdvantage": "Chrome on desktop."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "€7.49 (1 month), €14.99 (3 months), €59.99 (1 year), non-refundable.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Monthly Plans vs One Yearly License",
    "subheadline": "Futtbot sells short plans. Elite FUT SNIPER sells one yearly license.",
    "competitorModel": {
      "title": "Futtbot",
      "price": "€7.49 (1 month) · €14.99 (3 months) · €59.99 (1 year), at the time of writing",
      "hiddenCosts": [
        "Purchases are non-refundable",
        "We could not find a free trial",
        "The 1-year plan costs more than Elite's €19.90/year"
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
    "summary": "Futtbot is cheaper for one month. Elite FUT SNIPER is cheaper over a year and starts with a free 2-day trial."
  },

  keyStatistics: [
    {
      "label": "Futtbot 1-year price",
      "value": "€59.99 (at the time of writing)",
      "source": "futtbot.com"
    },
    {
      "label": "Elite 1-year price",
      "value": "€19.90",
      "source": "elitefutbot.com"
    },
    {
      "label": "Futtbot game version",
      "value": "EA FC 26 (v6, October 2025)",
      "source": "futtbot.com"
    },
    {
      "label": "Elite free trial",
      "value": "2 days",
      "source": "elitefutbot.com"
    }
  ],

  citations: [
    {
      "label": "Futtbot official site",
      "url": "https://futtbot.com"
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
      "feature": "Sniping and auto-buy",
      "elite": "Yes, sub-20ms",
      "competitor": "Yes",
      "winner": "tie"
    },
    {
      "feature": "Bidding",
      "elite": "Built-in auto bidder",
      "competitor": "Yes",
      "winner": "tie"
    },
    {
      "feature": "Selling and relisting",
      "elite": "Yes, 5% tax built in",
      "competitor": "Yes",
      "winner": "tie"
    },
    {
      "feature": "SBC solver",
      "elite": "See Elite's feature page",
      "competitor": "SBC solver using Futbin",
      "winner": "tie"
    },
    {
      "feature": "Telegram control",
      "elite": "Side Panel display",
      "competitor": "Telegram notifications",
      "winner": "competitor"
    },
    {
      "feature": "Shortest plan",
      "elite": "No monthly plan",
      "competitor": "1 month at €7.49",
      "winner": "competitor"
    },
    {
      "feature": "Price for one year",
      "elite": "€19.90",
      "competitor": "€59.99",
      "winner": "elite"
    },
    {
      "feature": "Free trial",
      "elite": "2-day free trial",
      "competitor": "None found",
      "winner": "elite"
    }
  ],

  faqs: [
    {
      "question": "Is Futtbot free or open source?",
      "answer": "No. Its site presents Futtbot as a paid script with 1-month, 3-month and 1-year plans."
    },
    {
      "question": "Does Futtbot need my EA password?",
      "answer": "Its site says it does not need your EA login details."
    },
    {
      "question": "Does Futtbot have an SBC solver?",
      "answer": "Yes. Its site lists an SBC solver that uses a Futbin integration."
    },
    {
      "question": "How does the price compare?",
      "answer": "At the time of writing Futtbot costs €7.49 for one month and €59.99 for one year. Elite FUT SNIPER costs €19.90 for one year, with a free 2-day trial."
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

export const futtBotData = futtbotData;
