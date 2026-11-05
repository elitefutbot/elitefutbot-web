import { CompetitorData } from "./types";

export const futLockerData: CompetitorData = {
  slug: "futlocker-vs-elitefutbot",
  competitorName: "FUT Locker",
  competitorType: "desktop-app",
  tagline: "FUT Locker Moves Coins Between Accounts. Elite FUT SNIPER Snipes and Trades for Profit.",
  summaryPassage: "FUT Locker (futlocker.com) is a desktop transfer bot for Windows, macOS and Linux that moves coins between accounts by listing, buying back and relisting cards. It offers Month and Season plans and a 12-hour free trial requested through Discord. Elite FUT SNIPER does a different job: it is a Chrome extension that snipes, bids and relists cards to earn coins on your own club, for €19.90/year with a free 2-day trial.",
  verdict: "These tools do different jobs. FUT Locker is built for transferring coins between accounts. Elite FUT SNIPER is built for finding and trading underpriced cards on your own account, and it does not do coin transfers. If you want to earn coins by trading, Elite is the fit. Check FUT Locker's site for its current prices.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "FUT Locker's site calls its product an EA FC 27 transfer bot. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "FUT Locker (futlocker.com) is an EA FC 27 transfer bot. It moves coins between your accounts by listing, buying back and relisting cards. It is a desktop app for Windows, macOS and Linux that can run in the background, and it works with Web App and Companion App accounts. Its site mentions Month and Season plans without amounts, a 12-hour free trial with no card (started by raising a ticket in its Discord server), and payment by card, PayPal and USDT.",

  competitorPros: [
    "Desktop app for Windows, macOS and Linux",
    "Can run in the background while you use your computer",
    "12-hour free trial with no card required",
    "Accepts cards, PayPal and USDT"
  ],
  competitorCons: [
    "Built for moving coins between accounts, not for finding underpriced cards",
    "Prices are not shown on its homepage",
    "The free trial is requested through a Discord support ticket",
    "Installs as a separate desktop app outside your browser"
  ],

  elitePros: [
    "Sub-20ms direct protocol WebSocket execution that captures cards the exact millisecond they are listed",
    "Flat €19.90 all-inclusive 365-day license covering all 11 modules and both EA FC 26 and FC 27",
    "Integrated neural AI SBC solver that analyzes club untradeables, solves chemistry in sub-500ms, and auto-submits",
    "Docked Chrome Side Panel HUD keeping your workspace alongside the Web App with zero viewport clutter",
    "100% autonomous hands-free trading loops with automated batch repricing and EA tax margins",
    "Humanization++ engine with authentic Bézier curves and Gaussian jitter with an unbroken 0-ban track record",
    "Free VIP Discord trading community with daily filter presets, market alerts, and 24/7 architect support",
  ],
  idealFor: {
    "competitor": "Players who want a desktop tool for moving coins between their own accounts.",
    "elite": "Traders who want automated sniping, bidding and relisting to earn coins on one account."
  },

  communityIssuesAudit: {
    "headline": "Different Jobs: Coin Transfers vs Sniping",
    "subheadline": "FUT Locker and Elite FUT SNIPER are built for different tasks.",
    "issues": [
      {
        "title": "What the tool is for",
        "badge": "Different focus",
        "severity": "warning",
        "competitorFlaw": "FUT Locker is built to move coins between accounts. Its site does not describe sniping underpriced cards.",
        "eliteSolution": "Elite FUT SNIPER searches the transfer market nonstop and buys cards that match your price filters, then relists them for profit."
      },
      {
        "title": "Getting the free trial",
        "badge": "Trial",
        "severity": "warning",
        "competitorFlaw": "FUT Locker's 12-hour trial is started by opening a ticket in its Discord server.",
        "eliteSolution": "Elite FUT SNIPER's 2-day trial starts when you create an account, with no card and no ticket."
      },
      {
        "title": "Price visibility",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "FUT Locker mentions Month and Season plans, but amounts are not shown on its homepage.",
        "eliteSolution": "Elite FUT SNIPER costs €19.90/year with all features included, shown on the site."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: FUT Locker vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Coin transfers between accounts",
        "competitorReality": "Core feature.",
        "eliteAdvantage": "Not a feature of Elite FUT SNIPER."
      },
      {
        "advertisedName": "Sniping underpriced cards",
        "competitorReality": "Not described on its site.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Bidding",
        "competitorReality": "Not described on its site.",
        "eliteAdvantage": "Built-in auto bidder."
      },
      {
        "advertisedName": "Install",
        "competitorReality": "Desktop app for Windows, macOS and Linux.",
        "eliteAdvantage": "Chrome extension from the Chrome Web Store, or installed manually."
      },
      {
        "advertisedName": "Free trial",
        "competitorReality": "12 hours, requested through a Discord ticket.",
        "eliteAdvantage": "2 days, starts when you create an account, no card."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "Month and Season plans; amounts not shown on its homepage.",
        "eliteAdvantage": "€19.90/year, all features."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Month and Season Plans vs One Yearly License",
    "subheadline": "Compare the plans after checking FUT Locker's current prices.",
    "competitorModel": {
      "title": "FUT Locker",
      "price": "Month and Season plans (see futlocker.com for current prices)",
      "hiddenCosts": [
        "Prices are not shown on its homepage",
        "The free trial is limited to 12 hours",
        "The trial is requested through a Discord ticket"
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
    "summary": "FUT Locker and Elite FUT SNIPER are priced for different jobs. Elite costs €19.90/year for automated trading, with a free 2-day trial."
  },

  keyStatistics: [
    {
      "label": "Main focus",
      "value": "Coin transfers (FUT Locker) vs sniping and bidding (Elite)",
      "source": "futlocker.com and elitefutbot.com"
    },
    {
      "label": "FUT Locker free trial",
      "value": "12 hours",
      "source": "futlocker.com"
    },
    {
      "label": "Elite free trial",
      "value": "2 days",
      "source": "elitefutbot.com"
    },
    {
      "label": "Elite price",
      "value": "€19.90/year",
      "source": "elitefutbot.com"
    }
  ],

  citations: [
    {
      "label": "FUT Locker official site",
      "url": "https://futlocker.com"
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
      "feature": "Main purpose",
      "elite": "Automated sniping, bidding and trading",
      "competitor": "Coin transfers between accounts",
      "winner": "tie"
    },
    {
      "feature": "Sniping underpriced cards",
      "elite": "Yes, sub-20ms",
      "competitor": "Not described on its site",
      "winner": "elite"
    },
    {
      "feature": "Auto bidding",
      "elite": "Built-in auto bidder",
      "competitor": "Not described on its site",
      "winner": "elite"
    },
    {
      "feature": "Coin transfers between accounts",
      "elite": "Not offered",
      "competitor": "Core feature",
      "winner": "competitor"
    },
    {
      "feature": "Install",
      "elite": "Chrome extension",
      "competitor": "Desktop app (Windows, macOS, Linux)",
      "winner": "tie"
    },
    {
      "feature": "Free trial",
      "elite": "2 days, no card",
      "competitor": "12 hours, via Discord ticket",
      "winner": "elite"
    },
    {
      "feature": "Price shown on homepage",
      "elite": "€19.90/year",
      "competitor": "Not shown",
      "winner": "elite"
    }
  ],

  faqs: [
    {
      "question": "Is FUT Locker a Discord alert service?",
      "answer": "No. Its site describes a desktop transfer bot that moves coins between accounts. Discord is used for support and community."
    },
    {
      "question": "Can Elite FUT SNIPER transfer coins between accounts?",
      "answer": "No. Elite FUT SNIPER snipes, bids and relists cards to earn coins on your own account. It does not do coin transfers."
    },
    {
      "question": "How do I get the FUT Locker free trial?",
      "answer": "Its site says the 12-hour trial is started by raising a support ticket in its Discord server. No card is required."
    },
    {
      "question": "Which platforms does FUT Locker support?",
      "answer": "Its site lists Windows, macOS and Linux. It works with Web App and Companion App accounts."
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
