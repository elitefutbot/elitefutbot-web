import { CompetitorData } from "./types";

export const futGgData: CompetitorData = {
  slug: "futgg-vs-elitefutbot",
  competitorName: "FUT.GG",
  competitorType: "database",
  tagline: "FUT.GG Is a Database and SBC Site. Elite FUT SNIPER Is an Automated Trading Extension.",
  summaryPassage: "FUT.GG (fut.gg) is a website for EA SPORTS FC 27 Ultimate Team with a player database, SBC and objective listings, a Squad Builder, Evolutions, an Evo Lab and GG Club, plus mobile apps on Google Play and the App Store. Its homepage does not describe sniping or an autobuyer. Elite FUT SNIPER is a Chrome extension that snipes, bids and relists automatically, for €19.90/year with a free 2-day trial.",
  verdict: "FUT.GG and Elite FUT SNIPER do different jobs: FUT.GG is a reference site for players, SBCs and squads, and Elite FUT SNIPER automates transfer market trading. Most traders use a database like FUT.GG alongside a trading tool.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "FUT.GG's homepage is built around EA SPORTS FC 27. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "FUT.GG is a website for EA SPORTS FC 27 Ultimate Team. Its homepage lists a player database, SBC and objective listings, a Squad Builder, Evolutions, an Evo Lab, price ranges, momentum trends and GG Club, which it describes as an official EA SPORTS FC community partner. Mobile apps are linked on Google Play and the App Store. The homepage we read does not mention an extension, sniping or an autobuyer, and lists no pricing.",

  competitorPros: [
    "Large player database and SBC listings",
    "Squad Builder, Evolutions and Evo Lab",
    "Price ranges and momentum trends",
    "Mobile apps on Google Play and the App Store"
  ],
  competitorCons: [
    "The homepage we read does not describe sniping or an autobuyer",
    "It is a reference site, not an automated trading tool"
  ],

  elitePros: [
    "Active in-browser automation suite executing autonomous snipes in sub-20ms intervals",
    "Integrated real-time Futbin price feeds and 5% EA transfer tax deductions overlaid directly on cards",
    "Neural AI SBC solver that evaluates club untradeables, solves chemistry in sub-500ms, and auto-buys in 1 click",
    "Humanization++ mode with Gaussian micro-jitter and authentic Bézier cursor physics (0 bans across all seasons)",
    "Docked Chrome Side Panel HUD leaving the official Web App viewport completely clean and responsive",
    "Parallel multi-filter engine scanning 15+ player targets simultaneously in one continuous loop",
    "Single flat €19.90/year license covering both FC 26 and FC 27 with day-one support",
  ],
  idealFor: {
    "competitor": "Players who want player data, SBC guides and squad planning.",
    "elite": "Traders who want automated sniping, bidding and relisting."
  },

  communityIssuesAudit: {
    "headline": "Different Jobs: Reference Site vs Trading Extension",
    "subheadline": "FUT.GG and Elite FUT SNIPER are built for different tasks and work well together.",
    "issues": [
      {
        "title": "What it does",
        "badge": "Different focus",
        "severity": "warning",
        "competitorFlaw": "FUT.GG lists players, SBCs, evolutions and prices for you to read and plan with.",
        "eliteSolution": "Elite FUT SNIPER searches the transfer market and buys, bids and relists automatically."
      },
      {
        "title": "Automation",
        "badge": "Automation",
        "severity": "warning",
        "competitorFlaw": "The FUT.GG homepage we read does not describe sniping or an autobuyer.",
        "eliteSolution": "Elite FUT SNIPER automates buying and selling with a live profit display."
      },
      {
        "title": "Cost",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "The FUT.GG homepage we read lists no pricing.",
        "eliteSolution": "Elite FUT SNIPER costs €19.90 a year, with a free 2-day trial."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: FUT.GG vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Player database",
        "competitorReality": "Yes.",
        "eliteAdvantage": "Live Futbin pricing in the Side Panel."
      },
      {
        "advertisedName": "SBC help",
        "competitorReality": "SBC and objective listings.",
        "eliteAdvantage": "See Elite's feature page for current SBC status."
      },
      {
        "advertisedName": "Automated trading",
        "competitorReality": "Not described on the homepage we read.",
        "eliteAdvantage": "Sniping, auto bidder and batch relisting."
      },
      {
        "advertisedName": "Platforms",
        "competitorReality": "Website plus Android and iOS apps.",
        "eliteAdvantage": "Chrome on desktop."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "No pricing on the homepage we read.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Reference Site vs Trading Extension",
    "subheadline": "The two products do different jobs, so the price is not like for like.",
    "competitorModel": {
      "title": "FUT.GG",
      "price": "No pricing on the homepage we read",
      "hiddenCosts": [
        "Not a trading tool",
        "Check its site for any premium options"
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
    "summary": "FUT.GG is a reference site. Elite FUT SNIPER is a trading tool. Many traders use both."
  },

  keyStatistics: [
    {
      "label": "FUT.GG type",
      "value": "Database and SBC site",
      "source": "fut.gg"
    },
    {
      "label": "FUT.GG mobile apps",
      "value": "Google Play and App Store",
      "source": "fut.gg"
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
      "label": "FUT.GG",
      "url": "https://www.fut.gg"
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
      "elite": "Automated trading",
      "competitor": "Database, SBCs and squad tools",
      "winner": "tie"
    },
    {
      "feature": "Automated sniping",
      "elite": "Yes, sub-20ms",
      "competitor": "Not described",
      "winner": "elite"
    },
    {
      "feature": "Player database",
      "elite": "Futbin prices in the Side Panel",
      "competitor": "Full database",
      "winner": "competitor"
    },
    {
      "feature": "Mobile apps",
      "elite": "Not available yet",
      "competitor": "Google Play and App Store",
      "winner": "competitor"
    }
  ],

  faqs: [
    {
      "question": "Is FUT.GG a sniping bot?",
      "answer": "No. The homepage we read describes a player database, SBC listings and squad tools, not an autobuyer."
    },
    {
      "question": "Can I use FUT.GG with Elite FUT SNIPER?",
      "answer": "Yes. They do different jobs, so many traders use a reference site alongside a trading extension."
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
