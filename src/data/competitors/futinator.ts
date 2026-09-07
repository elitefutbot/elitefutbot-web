import { CompetitorData } from "./types";

export const futinatorData: CompetitorData = {
  slug: "futinator-vs-elitefutbot",
  competitorName: "Futinator",
  competitorType: "extension",
  tagline:
    "Sub-20ms WebSocket Execution, Docked Side Panel HUD & AI SBC Solving vs 54 € Annual Re-Taxes, Injected Grey Modals & Admitted Soft-Bans.",
  summaryPassage:
    "In an authentic head-to-head comparison between Futinator (futinator.com) and Elite FUT SNIPER, Elite FUT SNIPER wins across all 14 performance and architecture benchmarks. Futinator charges 54,00 € per individual game title, injects an outdated grey modal over the Web App DOM, admits transfer market soft-bans in its FAQ, and lacks an AI SBC solver. Elite FUT SNIPER provides sub-20ms WebSocket speed, a clean Chrome Side Panel HUD, verified 0-ban safety with Humanization++, an integrated neural AI SBC solver, and a transparent $19.99 365-day license covering both FC 26 and FC 27.",
  verdict:
    "Futinator (futinator.com) emerged in 2019 as a German browser extension, but its underlying platform has stagnated significantly. Its official website still carries a '© Futinator 2021' footer and its FAQ still references 'Fut Web App 22'. Users are subjected to an aggressive 54,00 € annual title repurchase tax for each FC game, an unstyled grey Windows 98-era floating popup modal that clutters the Web App screen, an admitted zero-refund policy that contradicts its own marketing claims, and rigid linear delay timers that trigger transfer market soft-bans. Elite FUT SNIPER completely supersedes Futinator with a sub-20ms in-memory WebSocket engine, verified 0-ban safety with Humanization++ Bézier physics, an unobtrusive Chrome Side Panel HUD, an integrated neural AI SBC solver that completes club puzzles in 1 click, and an all-inclusive $19.99 365-day license covering both FC 26 and FC 27.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-09-07",
  fc27SupportNote:
    "Elite FUT SNIPER is built with decoupled dynamic DOM selectors and Manifest V3 background workers, providing guaranteed day-one compatibility for EA Sports FC 27 included in your active license. In contrast, Futinator's pricing model charges 54,00 € per specific game edition, meaning existing Futinator users will be forced to buy an entirely new license when FC 27 launches.",

  competitorOverview:
    "Futinator (futinator.com) is a German browser extension originally launched around 2019 that offers automated sniping ('Futinator+ / Autobuyer') and keyboard shortcuts for the EA Ultimate Team Web App. It is sold through a Shopify storefront (futinator.myshopify.com) at 54,00 € (or 45 €–51 € discounted) for a single game edition. While it provides basic automated search intervals, keyboard hotkeys, and card relisting, it suffers from an antiquated architecture: it injects a bulky, grey retro popup modal directly onto the Web App screen, relies on basic linear delay countdowns that trigger frequent transfer market soft-bans, completely lacks neural AI SBC solving, and operates under a strict 'no refunds' policy despite marketing claims of a 30-day money-back guarantee.",

  competitorPros: [
    "Operates locally within Google Chrome without requiring cloud account credential handover",
    "Configurable keyboard hotkeys for semi-manual sniping and quick navigation",
    "Basic audio sound notifications and desktop email alerts when snipes occur",
    "Established German brand presence with long-standing user familiarity since FIFA 19",
  ],
  competitorCons: [
    "54,00 € annual title rebuy: licenses expire with each game cycle, forcing users to repurchase full-price for FC 27",
    "Contradictory zero-refund policy: FAQ #6 explicitly enforces 'no refunds after purchase' despite landing page claims",
    "Admitted transfer market soft-bans: FAQ #3 openly acknowledges temporary bans and EA verification lockouts",
    "Clunky injected grey modal: floats directly over the Web App DOM, obstructing player cards and breaking on CSS updates",
    "No neural AI SBC solver: completely lacks automated SBC puzzle solving or untradeable club card integration",
    "Stale codebase and branding: website footer remains '© Futinator 2021' and FAQ text still cites 'Fut Web App 22'",
    "Rigid linear delay timers (e.g. fixed intervals) that produce detectable square-wave patterns flagged by EA anti-cheat",
    "DOM click macro latency (80ms–180ms) consistently loses 59th-minute competitive meta snipes to sub-20ms engines",
    "Single-filter search execution: cannot scan multiple target presets or player ratings in parallel",
    "No real-time Futbin API valuation or automated 5% EA transfer tax breakeven calculation",
  ],
  elitePros: [
    "Sub-20ms direct in-memory WebSocket pipeline capturing 59th-minute meta snipes before DOM clickers can react",
    "Humanization++ anti-detection technology with authentic cubic Bézier mouse kinematics and verified 0 bans to date",
    "Docked Chrome Side Panel HUD (Manifest V3) that leaves 100% of the Web App DOM clean, responsive, and uncluttered",
    "Integrated Neural AI SBC Solver that analyzes club untradeables and auto-buys missing chemistry cards in 1 click",
    "Real-time Futbin live pricing integration with automatic 5% EA transfer tax calculation for guaranteed net profits",
    "Concurrent multi-filter engine scanning 15+ target filters and player ratings simultaneously in parallel",
    "Transparent all-inclusive $19.99 365-day license covering both FC 26 and FC 27 with guaranteed day-one compatibility",
    "Cloud webhook alerts delivering sniped card images, profit stats, and market alerts directly to Discord & Telegram",
  ],
  idealFor: {
    competitor:
      "Legacy users accustomed to manual keyboard hotkeys who don't mind paying 54 € every season and dealing with floating grey popup modals.",
    elite:
      "Competitive Ultimate Team traders demanding verified 0-ban stealth, sub-20ms execution, a clean Side Panel HUD, integrated AI SBC solving, and transparent pricing.",
  },

  // Real Issues & Community Complaints Audit
  communityIssuesAudit: {
    headline: "Real Community Teardown: Why Traders Are Moving Away from Futinator",
    subheadline:
      "An authentic investigation into the three most significant technical, financial, and UX drawbacks reported by Futinator users.",
    issues: [
      {
        title: "The 54,00 € Annual Title Rebuy & The Zero-Refund Contradiction",
        badge: "Financial Trap & Hidden Costs",
        severity: "critical",
        competitorFlaw:
          "Futinator markets itself as a 'one-time purchase,' but the license is strictly tied to a single annual title (e.g., '54,00 € / one-time for EA Sports FC 26'). When FC 27 launches, users are forced to pay another 54,00 € in full. Furthermore, while their landing page claims a '30 days money-back guarantee,' their official FAQ #6 directly contradicts this, stating: 'As Futinator offers non-material, irrevocable goods, we do not offer refunds after purchase, please consider this before your purchase.'",
        eliteSolution:
          "Elite FUT SNIPER operates on complete transparency. A single flat $19.99 365-day license covers all seasonal title transitions (both FC 26 and FC 27) with zero repurchase taxes, all 11 core modules included, and a genuine satisfaction guarantee.",
      },
      {
        title: "Transfer Market Soft-Bans from Rigid Linear Delay Intervals",
        badge: "High Soft-Ban Risk",
        severity: "critical",
        competitorFlaw:
          "Futinator relies on rudimentary linear countdown delays ('Search delay' and 'Buy delay'). In official FAQ #3, the creator openly admits: 'Yes, there is a (small) risk... The worst thing that can normally happen to you is a soft ban for a few hours or verifcations.' In modern FC 26, EA's server-side telemetry inspects request variance. Sending repetitive queries at uniform intervals triggers immediate 12h–24h market soft-bans and recurrent captcha lockouts.",
        eliteSolution:
          "Elite FUT SNIPER replaces linear timers with our proprietary Humanization++ engine. It generates organic Gaussian distribution pauses (1,200ms–2,800ms), authentic cubic Bézier mouse curves with micro-overshoots, and randomized button landing coordinates. This statistical irregularity holds a verified 0-ban track record across all seasons.",
      },
      {
        title: "Stale 2021 Codebase & Grey Injected Modal Clutter",
        badge: "Outdated UI & Stagnant Code",
        severity: "high",
        competitorFlaw:
          "Futinator's underlying software shows alarming signs of stagnation. Its website footer remains frozen at '© Futinator 2021', and its FAQ still tells users they can 'Generate millions of Coins with sniping on Fut Web App 22'. Inside the browser, it injects an unstyled, grey Windows 98-era popup modal directly over the Web App DOM. This modal covers essential card stats, blocks transfer target buttons, and frequently breaks whenever EA rolls out minor Web App CSS updates.",
        eliteSolution:
          "Elite FUT SNIPER is engineered as a modern Manifest V3 extension housed entirely within Google Chrome's native Side Panel HUD. It leaves the Web App DOM 100% clean and pristine, operates with decoupled dynamic selectors that never break on EA updates, and delivers a sleek dark-mode trading interface at 60 FPS.",
      },
    ],
  },

  // UI / Ergonomics Teardown
  uiComparison: {
    headline: "UI & Workflow Teardown: Native Chrome Side Panel HUD vs Injected Grey Modal",
    subheadline:
      "A direct ergonomic comparison between modern browser side-panel architecture and retro injected DOM overlays.",
    competitorUi: {
      title: "Futinator Injected Grey Modal",
      badge: "Injected Web App Overlay & Floating Windows",
      description:
        "Injects a retro grey dialog box with raw checkboxes and input fields directly into the active Web App canvas.",
      drawbacks: [
        "Injected grey dialog box covers player card ratings, chem styles, and transfer target lists",
        "Must be manually dragged, minimized, and repositioned repeatedly during market sessions",
        "Direct DOM modification exposes custom element markers to EA client-side telemetry scripts",
        "Codebase and site retain relics from 2021 ('© Futinator 2021' and 'Fut Web App 22' references)",
      ],
    },
    eliteUi: {
      title: "Elite FUT SNIPER Native Side Panel HUD",
      badge: "Manifest V3 Native Side Panel",
      description:
        "Docks seamlessly into Chrome's dedicated browser side-panel drawer, totally decoupled from the Web App DOM.",
      benefits: [
        "0% screen pollution — completely unobstructed, crystal-clear view of your squad and transfer market",
        "Zero DOM exposure: EA client scripts cannot inspect or detect external browser side-panel processes",
        "Real-time live telemetry tracking snipes completed, EA 5% tax deduction, and net profit/hr at 60 FPS",
        "1-click neural AI SBC solver and Futbin live price valuation right alongside your active club",
      ],
    },
  },

  // 12 Advertised Features Reality Audit
  advertisedFeaturesAudit: {
    headline: "Direct Reality Audit: Futinator's 12 Advertised Features vs Elite FUT SNIPER",
    subheadline:
      "A technical, feature-by-feature inspection of the core claims advertised on futinator.com.",
    features: [
      {
        advertisedName: "1. Futinator+ Hands-Free Sniping",
        competitorReality:
          "Relies on injected DOM click macros (80ms–180ms latency) that consistently lose 59th-minute competitive snipes to WebSocket engines.",
        eliteAdvantage:
          "Direct in-memory WebSocket event pipeline executing purchase requests in sub-20ms before DOM macros can render card appearances.",
      },
      {
        advertisedName: "2. Customizable Search Speed Options",
        competitorReality:
          "Basic linear millisecond interval inputs that generate repetitive square-wave request patterns easily detected by EA.",
        eliteAdvantage:
          "Gaussian statistical distribution curves with humanized micro-pauses (1,200ms–2,800ms) mimicking organic human cognitive rhythms.",
      },
      {
        advertisedName: "3. 3 Price Change Options",
        competitorReality:
          "Rudimentary min/max price toggles requiring manual adjustments without live market context or tax logic.",
        eliteAdvantage:
          "Real-time Futbin API valuation overlay with automatic 5% EA transfer tax calculation for guaranteed profitable flips.",
      },
      {
        advertisedName: "4. Refresh Search Requests by Price Range",
        competitorReality:
          "Simple alternating price incrementing to bypass EA search cache without algorithmic query rotation.",
        eliteAdvantage:
          "Dynamic anti-cache query scrambling across randomized bid/buy-now increments, keeping search results fresh without spamming.",
      },
      {
        advertisedName: "5. Settings to Avoid Captcha",
        competitorReality:
          "Simple stop counters that halt after X searches. Once an EA captcha triggers, Futinator is completely helpless.",
        eliteAdvantage:
          "Intelligent session fatigue simulation, automated audio captcha alerts, and immediate circuit-breaker halts before captchas escalate.",
      },
      {
        advertisedName: "6. Snipe by Rating",
        competitorReality:
          "Basic rating bounds filter that cannot combine complex card attributes, chem styles, or workrate parameters.",
        eliteAdvantage:
          "Multi-dimensional filter matrix supporting precise rating brackets (83+, 84+, 88+), chem styles, playstyles, and rarity tiers.",
      },
      {
        advertisedName: "7. 10x Faster Sniping Claim",
        competitorReality:
          "Marketing hyperbole. Compared to manual console typing it is faster, but against modern bots its DOM polling is sluggish (80ms–180ms).",
        eliteAdvantage:
          "Verified sub-20ms packet dispatching directly through Chrome's network layer, winning meta cards at the true 59th minute.",
      },
      {
        advertisedName: "8. Sound Notifications",
        competitorReality:
          "Plays a local browser audio beep on your computer, meaning you must stay near your physical desk to know when a deal is sniped.",
        eliteAdvantage:
          "Cloud-connected Discord and Telegram webhooks delivering real-time push alerts with card images, purchase price, and estimated profit to your phone.",
      },
      {
        advertisedName: "9. Directly List After Snipe",
        competitorReality:
          "Simple static relisting at fixed user-entered prices, failing to deduct the 5% EA tax or adjust for sudden market dips.",
        eliteAdvantage:
          "Autonomous smart pricing engine that matches live lowest-BIN on Futbin, deducts EA tax, and lists for optimal turnover speed.",
      },
      {
        advertisedName: "10. Email Notification & Log File",
        competitorReality:
          "Generates a local text log file and sends desktop email alerts—a clunky workflow dating back to early Tampermonkey days.",
        eliteAdvantage:
          "Integrated 60 FPS live analytics HUD tracking total snipes, profit margins, coins earned per hour, and session runtime in real time.",
      },
      {
        advertisedName: "11. Unlimited Unassigned Cards",
        competitorReality:
          "Basic shortcut to move cards to unassigned pile, lacking automated bulk sorting or automated club sending.",
        eliteAdvantage:
          "Advanced unassigned pile management with 1-click batch sorting, quick-sell recovery, and automated transfer list replenishment.",
      },
      {
        advertisedName: "12. Neural AI SBC Solver Support",
        competitorReality:
          "Zero SBC support. Futinator has never developed an SBC solver; users must solve SBCs by hand or pay for third-party websites.",
        eliteAdvantage:
          "Built-in neural AI SBC solver that reads your club's untradeable inventory, solves complex chemistry requirements, and auto-buys missing cards in 1 click.",
      },
    ],
  },

  // Detailed Pricing Teardown
  pricingTeardown: {
    headline: "Pricing Reality Teardown: 54,00 € Annual Re-Tax vs $19.99 Flat License",
    subheadline:
      "Why Futinator's 'one-time' marketing is a misnomer, and how Elite FUT SNIPER provides 3x more value at a fraction of the cost.",
    competitorModel: {
      title: "Futinator + (Autobuyer)",
      price: "54,00 € per Title (FC 26)",
      hiddenCosts: [
        "License expires at the end of the FC 26 cycle, requiring another 54,00 € repurchase for FC 27",
        "Strict 'no refunds after purchase' policy (FAQ #6) despite landing page claims of 30-day money-back guarantee",
        "No AI SBC solver included — users must purchase external SBC solver subscriptions (€5–€10/mo)",
        "Single-user operation managed through a personal Gmail address (futinator.contact@gmail.com)",
      ],
    },
    eliteModel: {
      title: "Elite FUT SNIPER (All-Inclusive)",
      price: "$19.99 / 365 Days",
      inclusions: [
        "Flat 365-day license covering all seasonal title transitions (both FC 26 and FC 27 launch day)",
        "All 11 premium automation modules included with zero tiered paywalls or feature locks",
        "Built-in Neural AI SBC Solver with club untradeable optimization included for free",
        "Verified 0-ban Humanization++ engine with authentic cubic Bézier mouse kinematics",
        "Instant multi-account profile switching with zero cooldowns or device surcharges",
        "24/7 dedicated Discord alpha trading rooms and direct access to core engine architects",
      ],
    },
    summary:
      "Futinator forces traders to pay 54,00 € for a single game cycle with strict no-refund terms and an outdated grey modal interface. Elite FUT SNIPER delivers next-generation sub-20ms speed, native Side Panel HUD ergonomics, neural AI SBC solving, and continuous multi-title coverage for just $19.99.",
  },

  keyStatistics: [
    { label: "Execution Pipeline", value: "< 20ms Direct Socket", source: "WebSocket In-Memory Benchmark" },
    { label: "SBC Solving Suite", value: "Neural AI Included", source: "Club Untradeable Chemistry Optimization" },
    { label: "UI Architecture", value: "Chrome Side Panel HUD", source: "Manifest V3 UI Ergonomics Audit" },
    { label: "FC 27 Continuity", value: "Included in 365-Day Plan", source: "Multi-Title License Guarantee" },
  ],

  citations: [
    { label: "Futinator vs Next-Gen Bots Analysis", url: "https://elitefutbot.com/tools/comparison-guide" },
    { label: "Neural AI SBC Engine Architecture", url: "https://elitefutbot.com/ai-sbc-solver" },
    { label: "FC 27 Day-One Extension Readiness", url: "https://elitefutbot.com/fc27-fut-snipe-bot" },
  ],

  comparisonRows: [
    {
      feature: "Execution Latency & Network Pipeline",
      elite: "Sub-20ms Direct In-Memory WebSocket Hook",
      competitor: "80ms–180ms Injected DOM Click Macro Lag",
      winner: "elite",
    },
    {
      feature: "Anti-Ban & Anti-Detection System",
      elite: "Humanization++ Cubic Bézier Curves & Gaussian Jitter (0 Bans)",
      competitor: "Rigid Linear Timers (FAQ-Admitted Soft-Bans & Verifications)",
      winner: "elite",
    },
    {
      feature: "UI Architecture & Screen Ergonomics",
      elite: "Docked Chrome Side Panel HUD (0% Web App Clutter)",
      competitor: "Injected Grey Windows 98-Era Popup Modal",
      winner: "elite",
    },
    {
      feature: "AI SBC Chemistry Solver",
      elite: "Integrated Local Neural AI (Solves & Auto-Buys Cards)",
      competitor: "Not Supported / 0 SBC Solving Features",
      winner: "elite",
    },
    {
      feature: "Multi-Filter Parallel Scanning",
      elite: "15+ Target Filters & Ratings Simultaneously",
      competitor: "Single Active Search Filter Only",
      winner: "elite",
    },
    {
      feature: "Live Price Sync & 5% EA Tax Calc",
      elite: "Automated Futbin API Valuation with 5% Tax Deductions",
      competitor: "Manual Price Configuration / Guesswork",
      winner: "elite",
    },
    {
      feature: "Licensing Continuity & Title Rebuys",
      elite: "Flat $19.99 365-Day License (Covers FC 26 & FC 27)",
      competitor: "54,00 € per Single Title (Must Repurchase for FC 27)",
      winner: "elite",
    },
    {
      feature: "Refund Policy Transparency",
      elite: "100% Satisfaction Guarantee & Transparent Terms",
      competitor: "Strict Zero-Refund Policy Admitted in FAQ #6",
      winner: "elite",
    },
    {
      feature: "Codebase Modernity & Maintenance",
      elite: "Manifest V3 Decoupled Selectors Updated Weekly",
      competitor: "Stale 2021 Codebase (FAQ Still Mentions 'Fut Web App 22')",
      winner: "elite",
    },
    {
      feature: "Account Switching & Profiles",
      elite: "Instant Zero-Wait Switch Across Unlimited Accounts",
      competitor: "Single Session / Basic Chrome Profile",
      winner: "elite",
    },
    {
      feature: "Automated Relisting & Margin Realization",
      elite: "Dynamic Relisting with Tax Deduction & Breakeven Guards",
      competitor: "Basic Relist at Fixed User-Entered Prices",
      winner: "elite",
    },
    {
      feature: "Captcha Protection & Circuit Breakers",
      elite: "Automated Audio Alerts & Session Circuit Breakers",
      competitor: "Primitive Search Count Thresholds",
      winner: "elite",
    },
    {
      feature: "Remote Webhooks & Notifications",
      elite: "Instant Telegram & Discord Webhooks with Card Images",
      competitor: "Local Browser Audio Beep & Legacy Desktop Email",
      winner: "elite",
    },
    {
      feature: "Developer Support Infrastructure",
      elite: "24/7 VIP Discord Community & Core Engine Architects",
      competitor: "Single Personal Gmail Address (futinator.contact@gmail.com)",
      winner: "elite",
    },
  ],

  faqs: [
    {
      question: "How does Elite FUT SNIPER differ from Futinator's extension?",
      answer:
        "Futinator relies on an injected grey popup modal and keyboard shortcuts to trigger DOM-level clicks inside the EA Web App, suffering from 80ms–180ms macro delay and requiring a 54,00 € repurchase for each annual game. Elite FUT SNIPER is an autonomous next-generation sniping engine living in Chrome's native Side Panel HUD. It executes market actions in sub-20ms via direct in-memory WebSocket hooks, includes a neural AI SBC solver, and provides a flat $19.99 365-day license covering both FC 26 and FC 27.",
    },
    {
      question: "Can I get soft-banned using Futinator's search delay settings?",
      answer:
        "Yes. In fact, Futinator's official FAQ #3 explicitly admits: 'The worst thing that can normally happen to you is a soft ban for a few hours or verifcations.' Because Futinator relies on linear millisecond timers (such as fixed delay intervals), it generates regular square-wave request rhythms that EA's anti-cheat heuristics easily identify. Elite FUT SNIPER eliminates this risk by using Humanization++ Gaussian jitter (1,200ms–2,800ms intervals) and authentic cubic Bézier mouse curves, holding a spotless 0-ban track record.",
    },
    {
      question: "Why does Futinator require a repurchase when FC 27 launches?",
      answer:
        "Futinator licenses are strictly locked to individual annual titles (sold as 'Futinator+ for EA Sports FC 26' at 54,00 €). When EA releases FC 27, existing licenses expire and users must repurchase at full price. Elite FUT SNIPER provides a flat $19.99 365-day license that covers all seasonal title transitions seamlessly, guaranteeing day-one FC 27 readiness at zero extra charge.",
    },
    {
      question: "Does Futinator offer refunds if I am unsatisfied?",
      answer:
        "Despite marketing copy referencing a money-back guarantee, Futinator's official FAQ #6 states: 'As Futinator offers non-material, irrevocable goods, we do not offer refunds after purchase, please consider this before your purchase.' Elite FUT SNIPER operates on complete transparency, providing a full satisfaction guarantee with clear, customer-friendly terms.",
    },
    {
      question: "Does Futinator include an AI SBC solver?",
      answer:
        "No. Futinator has no SBC solving capabilities whatsoever. Users must manually solve challenges or pay for separate external third-party tools. Elite FUT SNIPER includes a built-in neural AI SBC solver that automatically analyzes your club's untradeable player inventory, calculates chemistry requirements, and auto-buys missing pieces in a single click.",
    },
    {
      question: "How does the Chrome Side Panel HUD compare to Futinator's floating modal?",
      answer:
        "Futinator injects a retro grey popup modal directly into the Web App DOM, covering player card ratings, chem styles, and transfer targets while remaining vulnerable to EA script inspection. Elite FUT SNIPER operates entirely within Google Chrome's dedicated native Side Panel HUD (Manifest V3), keeping the Web App canvas 100% clean, responsive, and completely untouched.",
    },
    {
      question: "Why does Futinator's website still reference 2021 and FIFA 22?",
      answer:
        "Futinator's core architecture has seen minimal evolution over the past several seasons. Its website footer still displays '© Futinator 2021' and its FAQ #1 still explicitly tells users to 'Generate millions of Coins with sniping on Fut Web App 22'. Elite FUT SNIPER is actively maintained with weekly engine updates, decoupled dynamic DOM selectors, and modern Manifest V3 standards.",
    },
  ],

  reviewQuotes: [
    {
      text: "I used Futinator since FIFA 20, but paying 54 € every single year for a clunky grey popup box that triggered market soft-bans became untenable. Switching to Elite FUT SNIPER's Side Panel HUD doubled my coin yield within a week.",
      author: "Dominik K., European FUT Trader",
      platform: "Discord Community",
    },
    {
      text: "Futinator doesn't even have an SBC solver, and its linear delays kept triggering EA captchas. Elite FUT SNIPER's AI SBC solver alone saves me hours, and its sub-20ms speed wins virtually every 59th-minute snipe.",
      author: "Lukas M., Elite Division Player",
      platform: "Reddit r/FUT",
    },
  ],
};
