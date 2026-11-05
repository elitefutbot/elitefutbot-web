import { CompetitorData } from "./types";

export const nokaFutData: CompetitorData = {
  slug: "nokafut-vs-elitefutbot",
  competitorName: "NokaFut",
  competitorType: "extension",
  tagline: "NokaFut Is a Free Toolkit With Paid Tiers. Elite FUT SNIPER Is One Focused Trading Extension.",
  summaryPassage: "NokaFut (nokafut.com) is a Spanish-language browser extension and iPhone/iPad app that adds tools to the EA FC 27 Web App: card prices, shortcuts, sniping tools, a free SBC solver called NOK-AI and duplicate management. Most features are free, PREMIUM starts at €5.99 per month and SUPERPREMIUM at €16.99 per month. Elite FUT SNIPER is a Chrome extension focused on sniping, bidding and relisting for €19.90/year with a free 2-day trial.",
  verdict: "NokaFut is a broad toolkit with a generous free tier, which makes it hard to beat on price if you only need prices, shortcuts and SBC help. Elite FUT SNIPER is built for automated sniping, bidding and relisting, with one price of €19.90 a year. Many players could use both.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "NokaFut's site is built around EA FC 27. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "NokaFut is a browser extension, plus a separate iPhone and iPad app, that adds tools on top of the EA FC 27 Web App. The free tier lists card prices on each card, market tables and summaries, keyboard shortcuts, sniping tools with saved search filters and rules, an SBC solver called NOK-AI, duplicate management that sends duplicates to SBCs in bulk, and a template creator for SBC rules. Nokalimbo, which tracks the cards you have bought, is Premium. It also hosts a player database, SBC solution pages, evolutions and guides. It works on Chrome, Edge, Brave, Opera and Vivaldi on desktop, on Android browsers that support extensions, and on iPhone/iPad through its app. Plans are free, PREMIUM from €5.99 per month and SUPERPREMIUM from €16.99 per month, with cheaper annual plans. Its site warns that automations in the paid tiers go against EA's terms of use and are the user's responsibility.",

  competitorPros: [
    "Most features are free, with no sign-up needed",
    "Free SBC solver (NOK-AI)",
    "Prices on cards, shortcuts, duplicate management and a player database",
    "Chrome Web Store install plus an iPhone/iPad app",
    "Premium from €5.99 per month, cancel any time"
  ],
  competitorCons: [
    "Advanced automation is in the paid tiers",
    "SUPERPREMIUM starts at €16.99 per month",
    "Its site and guides are mostly in Spanish",
    "Its site does not describe a free trial of the paid tiers"
  ],

  elitePros: [
    "Isolated Chrome Side Panel HUD docking cleanly beside the Web App with 0% DOM interference",
    "Sub-20ms direct in-memory WebSocket response time that wins meta 59th-minute deals",
    "Integrated neural AI SBC solver that evaluates club untradeables and auto-buys in sub-500ms",
    "Humanization++ mode with authentic Bézier curve mouse dynamics and Gaussian jitter (0 bans to date)",
    "Parallel multi-filter engine monitoring 15+ player targets simultaneously in one continuous loop",
    "Dynamic batch repricing checking live market floors and automatically deducting 5% EA tax",
    "Single transparent €19.90/year license covering both EA FC 26 and FC 27 with 24/7 VIP Discord support",
    "Runs client-side in your own Chrome session",
  ],
  idealFor: {
    "competitor": "Players who want free prices, shortcuts and SBC help, with optional paid tools.",
    "elite": "Traders who want automated sniping, bidding and relisting at one yearly price."
  },

  communityIssuesAudit: {
    "headline": "Where NokaFut and Elite FUT SNIPER Differ",
    "subheadline": "NokaFut is a broad toolkit. Elite FUT SNIPER is a focused trading extension.",
    "issues": [
      {
        "title": "Free tier",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "NokaFut offers most of its features free, with PREMIUM from €5.99 and SUPERPREMIUM from €16.99 per month.",
        "eliteSolution": "Elite FUT SNIPER has one paid plan, €19.90 a year, plus a free 2-day trial of everything."
      },
      {
        "title": "Focus",
        "badge": "Focus",
        "severity": "warning",
        "competitorFlaw": "NokaFut bundles prices, shortcuts, SBC help, duplicates and a database, with automations in paid tiers.",
        "eliteSolution": "Elite FUT SNIPER is focused on sniping, bidding and relisting, with a live profit display in the Side Panel."
      },
      {
        "title": "Language",
        "badge": "Language",
        "severity": "warning",
        "competitorFlaw": "NokaFut's site and guides are mostly in Spanish.",
        "eliteSolution": "Elite FUT SNIPER's site is available in several languages."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: NokaFut vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Sniping",
        "competitorReality": "Sniping tools with saved filters and rules.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Auto bidding and relisting",
        "competitorReality": "Not described on its page.",
        "eliteAdvantage": "Built-in auto bidder and batch relisting with EA's 5% tax built in."
      },
      {
        "advertisedName": "SBC solver",
        "competitorReality": "Free NOK-AI solver.",
        "eliteAdvantage": "See Elite's feature page for current SBC status."
      },
      {
        "advertisedName": "Prices and shortcuts",
        "competitorReality": "Card prices, market tables and keyboard shortcuts.",
        "eliteAdvantage": "Live Futbin pricing and a profit display in the Side Panel."
      },
      {
        "advertisedName": "Platforms",
        "competitorReality": "Desktop browsers, Android browsers and an iPhone/iPad app.",
        "eliteAdvantage": "Chrome on desktop."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "Free tier; PREMIUM from €5.99/month; SUPERPREMIUM from €16.99/month.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Free Tier plus Monthly Plans vs One Yearly License",
    "subheadline": "NokaFut's annual plans cost less per year than monthly.",
    "competitorModel": {
      "title": "NokaFut",
      "price": "Free · PREMIUM from €5.99/month · SUPERPREMIUM from €16.99/month",
      "hiddenCosts": [
        "Advanced automation sits in the paid tiers",
        "SUPERPREMIUM costs more per month than Elite's yearly price divided by twelve",
        "No free trial of the paid tiers is described"
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
    "summary": "NokaFut is free for most features. Elite FUT SNIPER is a single paid plan built for automated trading."
  },

  keyStatistics: [
    {
      "label": "NokaFut free tier",
      "value": "Most features",
      "source": "nokafut.com"
    },
    {
      "label": "NokaFut PREMIUM",
      "value": "From €5.99/month",
      "source": "nokafut.com"
    },
    {
      "label": "NokaFut SUPERPREMIUM",
      "value": "From €16.99/month",
      "source": "nokafut.com"
    },
    {
      "label": "Elite price",
      "value": "€19.90/year",
      "source": "elitefutbot.com"
    }
  ],

  citations: [
    {
      "label": "NokaFut official site",
      "url": "https://nokafut.com"
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
      "elite": "Automated sniping, bidding and relisting",
      "competitor": "Toolkit: prices, shortcuts, SBC help, sniping tools",
      "winner": "tie"
    },
    {
      "feature": "Automated sniping",
      "elite": "Yes, sub-20ms",
      "competitor": "Sniping tools; automations in paid tiers",
      "winner": "tie"
    },
    {
      "feature": "Auto bidding and relisting",
      "elite": "Built-in",
      "competitor": "Not described on its page",
      "winner": "elite"
    },
    {
      "feature": "SBC solver",
      "elite": "See Elite's feature page",
      "competitor": "Free NOK-AI solver",
      "winner": "tie"
    },
    {
      "feature": "Free tier",
      "elite": "2-day free trial",
      "competitor": "Most features free, no sign-up",
      "winner": "competitor"
    },
    {
      "feature": "Platforms",
      "elite": "Chrome on desktop",
      "competitor": "Desktop, Android browsers, iPhone/iPad app",
      "winner": "competitor"
    }
  ],

  faqs: [
    {
      "question": "Is NokaFut free?",
      "answer": "Mostly. Its site says most features are free to install and use with no sign-up. PREMIUM starts at €5.99 per month and SUPERPREMIUM at €16.99 per month."
    },
    {
      "question": "Does NokaFut have an SBC solver?",
      "answer": "Yes. NOK-AI, its SBC solver, is included free in the extension."
    },
    {
      "question": "Is NokaFut on the Chrome Web Store?",
      "answer": "Yes. Its site says to install the extension from the Chrome Web Store, and it also offers an iPhone/iPad app."
    },
    {
      "question": "Can I use NokaFut and Elite FUT SNIPER together?",
      "answer": "They do different jobs, so many traders use a toolkit like NokaFut alongside a trading extension."
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
