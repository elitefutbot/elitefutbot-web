"use client";

import React from "react";

const liveTickerItems = [
  { player: "Kylian Mbappé 91", bought: "420,000", market: "650,000", profit: "+230,000", tag: "SNIPED ⚡" },
  { player: "Vinícius Jr 89", bought: "165,000", market: "260,000", profit: "+95,000", tag: "SNIPED ⚡" },
  { player: "Cole Palmer 86", bought: "34,500", market: "62,000", profit: "+27,500", tag: "AUTO-LISTED 🏷️" },
  { player: "Jude Bellingham 88", bought: "110,000", market: "175,000", profit: "+65,000", tag: "SNIPED ⚡" },
  { player: "Erling Haaland 91", bought: "210,000", market: "340,000", profit: "+130,000", tag: "SNIPED ⚡" },
  { player: "Aitana Bonmatí 90", bought: "140,000", market: "220,000", profit: "+80,000", tag: "SNIPED ⚡" },
];

export function MarketTicker() {
  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 overflow-hidden py-2.5 relative">
      <div className="flex items-center gap-2 px-4 absolute left-0 top-0 bottom-0 bg-dark/90 z-10 backdrop-blur-sm border-r border-primary/30 font-mono text-[10px] text-primary font-bold uppercase tracking-wider shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        LIVE MARKET ACTIVITY
      </div>

      <div className="animate-marquee pl-44">
        {[...liveTickerItems, ...liveTickerItems].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 mx-6 text-xs font-mono">
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-primary/20 text-primary border border-primary/30">
              {item.tag}
            </span>
            <span className="text-white font-medium">{item.player}</span>
            <span className="text-gray-400">Bought: <strong className="text-white">{item.bought}</strong></span>
            <span className="text-gray-400">Futbin: <strong className="text-white">{item.market}</strong></span>
            <span className="text-primary font-bold">Profit: {item.profit}</span>
            <span className="text-gray-600 ml-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
