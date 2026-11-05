import { CompetitorData } from "./types";

export const shortFutsData: CompetitorData = {
  slug: "shortfuts-vs-elitefutbot",
  competitorName: "Shortfuts",
  competitorType: "extension",
  tagline: "shortfuts Binds Keyboard Shortcuts. Elite FUT SNIPER Automates Trading.",
  summaryPassage: "shortfuts is a Chrome extension that augments the FUT web app with keybinds so common actions are easier to do. Its Chrome Web Store listing shows about 20,000 users and a 3.7 rating from 771 ratings, states no prices, and says the developer will not collect your data. Elite FUT SNIPER is a Chrome extension focused on automated sniping, bidding and relisting for €19.90/year with a free 2-day trial.",
  verdict: "shortfuts and Elite FUT SNIPER do different jobs: shortfuts makes manual actions faster with keyboard shortcuts, while Elite FUT SNIPER automates searching, buying, bidding and relisting. They can be used side by side.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "shortfuts is described as a FIFA Ultimate Team web app extension, with version 14.4.0 updated September 17, 2026. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "shortfuts augments the FIFA Ultimate Team web app, primarily with keybinds that make common tasks easier. Its Chrome Web Store listing (developer site shortfuts.com) shows about 20,000 users, a 3.7 rating from 771 ratings, version 14.4.0 and a last update in September 2026. It shows no pricing and says the developer will not collect or use your data. The listing notes that EA does not support third-party extensions.",

  competitorPros: [
    "Keyboard shortcuts for common actions",
    "About 20,000 users on the Chrome Web Store",
    "No pricing shown on the listing",
    "Developer states it will not collect your data"
  ],
  competitorCons: [
    "The listing does not describe automated sniping or relisting",
    "A 3.7 rating from 771 ratings"
  ],

  elitePros: [
    "100% hands-free autonomous background loop searching, buying, and listing cards 24/7",
    "Sub-20ms direct in-memory WebSocket response time that wins meta 59th-minute deals",
    "Integrated neural AI SBC solver that evaluates club untradeables and auto-buys in sub-500ms",
    "Humanization++ mode with Gaussian micro-jitter and authentic Bézier cursor physics (0 bans to date)",
    "Docked Chrome Side Panel HUD keeping your Web App workspace clean, organized, and responsive",
    "Parallel multi-filter engine scanning 15+ player targets simultaneously in one continuous loop",
    "Flat €19.90/year single license covering both EA Sports FC 26 and FC 27",
  ],
  idealFor: {
    "competitor": "Players who want faster manual actions through keybinds.",
    "elite": "Traders who want automated sniping, bidding and relisting."
  },

  communityIssuesAudit: {
    "headline": "Different Jobs: Keybinds vs Automated Trading",
    "subheadline": "shortfuts and Elite FUT SNIPER are built for different tasks.",
    "issues": [
      {
        "title": "What it does",
        "badge": "Different focus",
        "severity": "warning",
        "competitorFlaw": "shortfuts binds common actions to keyboard keys so you can do them faster by hand.",
        "eliteSolution": "Elite FUT SNIPER searches the transfer market and buys, bids and relists automatically."
      },
      {
        "title": "Automation",
        "badge": "Automation",
        "severity": "warning",
        "competitorFlaw": "The shortfuts listing does not describe automated sniping.",
        "eliteSolution": "Elite FUT SNIPER automates buying and selling with a live profit display."
      },
      {
        "title": "Price",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "The shortfuts listing shows no pricing.",
        "eliteSolution": "Elite FUT SNIPER costs €19.90 a year, with a free 2-day trial."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: shortfuts vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Keyboard shortcuts",
        "competitorReality": "Yes. Main feature.",
        "eliteAdvantage": "Not a focus of Elite FUT SNIPER."
      },
      {
        "advertisedName": "Automated sniping",
        "competitorReality": "Not described.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Bidding and relisting",
        "competitorReality": "Not described.",
        "eliteAdvantage": "Built-in auto bidder and batch relisting."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "No pricing shown.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: Free-Looking Listing vs Paid Trading Tool",
    "subheadline": "shortfuts' listing shows no pricing.",
    "competitorModel": {
      "title": "shortfuts",
      "price": "No pricing shown on its listing",
      "hiddenCosts": [
        "Check shortfuts.com for any premium options"
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
    "summary": "shortfuts and Elite FUT SNIPER do different jobs and can run side by side."
  },

  keyStatistics: [
    {
      "label": "shortfuts users",
      "value": "About 20,000",
      "source": "Chrome Web Store listing"
    },
    {
      "label": "shortfuts rating",
      "value": "3.7 from 771 ratings",
      "source": "Chrome Web Store listing"
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
      "label": "shortfuts on the Chrome Web Store",
      "url": "https://chromewebstore.google.com/detail/shortfuts/piepdojghinggmddebidfkhfbdaggnmh"
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
      "feature": "Keyboard shortcuts",
      "elite": "Not a focus",
      "competitor": "Yes",
      "winner": "competitor"
    },
    {
      "feature": "Automated sniping",
      "elite": "Yes, sub-20ms",
      "competitor": "Not described",
      "winner": "elite"
    },
    {
      "feature": "Bidding and relisting",
      "elite": "Built-in",
      "competitor": "Not described",
      "winner": "elite"
    },
    {
      "feature": "Price",
      "elite": "€19.90/year",
      "competitor": "No pricing shown",
      "winner": "tie"
    }
  ],

  faqs: [
    {
      "question": "What does shortfuts do?",
      "answer": "It adds keybinds to the FUT web app so common actions are easier to do. It is not an autobuyer."
    },
    {
      "question": "Can I use shortfuts with Elite FUT SNIPER?",
      "answer": "They do different jobs, so many traders use both."
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
