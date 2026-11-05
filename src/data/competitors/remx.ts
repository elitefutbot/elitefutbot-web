import { CompetitorData } from "./types";

export const remxData: CompetitorData = {
  slug: "remx-vs-elitefutbot",
  competitorName: "RemX Sniping Bot",
  competitorType: "extension",
  tagline: "RemX Is a One-Time EA FC 27 Purchase. Elite FUT SNIPER Is a Yearly License With a Free Trial.",
  summaryPassage: "RemX (snipingboteafc.com) is a sniping bot and autobuyer for EA FC 27 with auto sniping, autobidding, auto selling and a built-in SBC solver. It is sold as a one-time payment of £14.99 for the whole FC 27 title (mobile £12.99, bundle £20.99, at the time of writing), with a 24-hour money-back guarantee if the key is unused. Elite FUT SNIPER is a Chrome extension for €19.90/year that includes a free 2-day trial.",
  verdict: "RemX is cheaper for one title (£14.99 once) and has a short money-back window if you have not used your key. Elite FUT SNIPER costs more (€19.90 a year) but covers both FC 27 and FC 26, includes an auto bidder with batch relisting, and lets you test everything free for 2 days.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-11-05",
  fc27SupportNote: "RemX's site is built around EA FC 27 only. Elite FUT SNIPER supports both EA FC 27 and FC 26 with one €19.90/year license.",

  competitorOverview: "RemX calls itself an all-in-one EA FC 27 sniping bot and autobuyer. Its site lists auto sniping with your player and price filters, autobidding, auto selling at a target price, delay settings, multifilter switching without stopping the bot, a built-in SBC solver, and FUT.GG and Futbin price lookups. It runs in the browser alongside the Web App on Windows PC, Mac and iPhone Safari, and links a Chrome Web Store listing. Access is emailed after purchase and each license covers one device. The site shows £14.99 one-time for the whole FC 27 title, a mobile bot at £12.99, a PC bot with SBC solver at £14.99, and a bundle at £20.99, paid by card or PayPal. It offers a 24-hour money-back guarantee if the license key has not been used, and support through Discord or email. It states that automated trading can breach the game's terms of service.",

  competitorPros: [
    "One-time payment of £14.99 for the whole FC 27 title",
    "Auto sniping, autobidding and auto selling",
    "Built-in SBC solver",
    "24-hour money-back guarantee if the key is unused",
    "Support through Discord or email, typically within an hour"
  ],
  competitorCons: [
    "Covers EA FC 27 only",
    "One license covers one device",
    "We could not find a free trial on its page",
    "Its page makes conflicting safety statements"
  ],

  elitePros: [
    "Sub-20ms direct in-memory WebSocket response time that wins meta 59th-minute deals",
    "Integrated Neural AI SBC Solver that scans untradeables and auto-buys missing chemistry in sub-500ms",
    "Daily curated high-ROI sniping filters included 100% free within the single flat license",
    "Humanization++ mode with mathematical Bézier physics and Gaussian jitter (0 bans across 14,000+ sessions)",
    "Clean Manifest V3 Chrome Side Panel HUD docking beside the Web App with zero DOM overlay clutter",
    "Generous 2-day free trial with instant activation and no credit card required",
    "Flat €19.90/year for full-season access covering both FC 27 and legacy FC 26",
    "24/7 VIP Discord trading alpha with direct access to core software engineers",
  ],
  idealFor: {
    "competitor": "Players who want a one-time purchase for a single title, with a built-in SBC solver.",
    "elite": "Traders who want a yearly license covering two titles, a free trial and batch relisting."
  },

  communityIssuesAudit: {
    "headline": "Where RemX and Elite FUT SNIPER Differ",
    "subheadline": "Both are sniping tools. The main differences are payment model, trial and titles covered.",
    "issues": [
      {
        "title": "Payment model",
        "badge": "Pricing",
        "severity": "warning",
        "competitorFlaw": "RemX is a one-time payment of £14.99 for the whole FC 27 title, with mobile and bundle options.",
        "eliteSolution": "Elite FUT SNIPER is €19.90 for a year and covers both EA FC 27 and FC 26."
      },
      {
        "title": "Trial and refunds",
        "badge": "Trial",
        "severity": "warning",
        "competitorFlaw": "RemX offers a 24-hour money-back guarantee if the license key has not been used. We could not find a free trial.",
        "eliteSolution": "Elite FUT SNIPER gives every new account a free 2-day trial with all features and no card. Purchases are not refundable."
      },
      {
        "title": "Devices",
        "badge": "Devices",
        "severity": "warning",
        "competitorFlaw": "Each RemX license covers one device. Multi-device use needs a multi-license through support.",
        "eliteSolution": "Elite FUT SNIPER's Pro license covers up to 2 devices."
      }
    ]
  },

  advertisedFeaturesAudit: {
    "headline": "Feature Comparison: RemX vs Elite FUT SNIPER",
    "subheadline": "What each tool says it does, side by side.",
    "features": [
      {
        "advertisedName": "Auto sniping",
        "competitorReality": "Searches with your filters and buys underpriced listings.",
        "eliteAdvantage": "Searches continuously and buys matching cards automatically (sub-20ms)."
      },
      {
        "advertisedName": "Bidding",
        "competitorReality": "Autobidding within your price range.",
        "eliteAdvantage": "Built-in auto bidder."
      },
      {
        "advertisedName": "Selling",
        "competitorReality": "Auto selling at a target price.",
        "eliteAdvantage": "Batch relisting with EA's 5% tax built in."
      },
      {
        "advertisedName": "SBC solver",
        "competitorReality": "Built-in SBC solver.",
        "eliteAdvantage": "See Elite's feature page for current SBC status."
      },
      {
        "advertisedName": "Platforms",
        "competitorReality": "Windows PC, Mac and iPhone Safari.",
        "eliteAdvantage": "Chrome on desktop."
      },
      {
        "advertisedName": "Price",
        "competitorReality": "£14.99 one-time for FC 27; mobile £12.99; bundle £20.99.",
        "eliteAdvantage": "€19.90/year, free 2-day trial."
      }
    ]
  },

  pricingTeardown: {
    "headline": "Pricing: One-Time Title License vs Yearly License",
    "subheadline": "RemX prices are sale prices at the time of writing.",
    "competitorModel": {
      "title": "RemX",
      "price": "£14.99 one-time (FC 27) · £12.99 mobile · £20.99 bundle, at the time of writing",
      "hiddenCosts": [
        "Covers EA FC 27 only",
        "Each license covers one device",
        "We could not find a free trial"
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
    "summary": "RemX is cheaper for a single title. Elite FUT SNIPER covers two titles and starts with a free trial."
  },

  keyStatistics: [
    {
      "label": "RemX FC 27 license",
      "value": "£14.99 one-time",
      "source": "snipingboteafc.com"
    },
    {
      "label": "RemX money-back window",
      "value": "24 hours, if the key is unused",
      "source": "snipingboteafc.com"
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
      "label": "RemX official site",
      "url": "https://snipingboteafc.com"
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
      "feature": "Auto sniping",
      "elite": "Yes, sub-20ms",
      "competitor": "Yes",
      "winner": "tie"
    },
    {
      "feature": "Bidding",
      "elite": "Built-in auto bidder",
      "competitor": "Autobidding",
      "winner": "tie"
    },
    {
      "feature": "Selling and relisting",
      "elite": "Batch relisting, 5% tax built in",
      "competitor": "Auto selling",
      "winner": "tie"
    },
    {
      "feature": "SBC solver",
      "elite": "See Elite's feature page",
      "competitor": "Built-in SBC solver",
      "winner": "tie"
    },
    {
      "feature": "Price for FC 27",
      "elite": "€19.90/year (FC 27 and FC 26)",
      "competitor": "£14.99 one-time (FC 27 only)",
      "winner": "competitor"
    },
    {
      "feature": "Free trial",
      "elite": "2 days, no card",
      "competitor": "None found",
      "winner": "elite"
    },
    {
      "feature": "Money-back",
      "elite": "None after purchase",
      "competitor": "24 hours if the key is unused",
      "winner": "competitor"
    },
    {
      "feature": "Devices",
      "elite": "Up to 2 on Pro",
      "competitor": "1 per license",
      "winner": "elite"
    }
  ],

  faqs: [
    {
      "question": "How much does RemX cost?",
      "answer": "At the time of writing its site shows £14.99 one-time for the FC 27 title, £12.99 for the mobile bot and £20.99 for the bundle, paid by card or PayPal."
    },
    {
      "question": "Does RemX have an SBC solver?",
      "answer": "Yes. Its site lists a built-in SBC solver."
    },
    {
      "question": "Does RemX offer refunds?",
      "answer": "Its site offers a 24-hour money-back guarantee if your license key has not been used."
    },
    {
      "question": "Does RemX have a free trial?",
      "answer": "We could not find one on its page."
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
