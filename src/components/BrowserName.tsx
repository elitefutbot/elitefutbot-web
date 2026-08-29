"use client";

import { useEffect, useState } from "react";

function detectFromUserAgent(ua: string): string {
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("OPR/") || ua.includes("Opera")) return "Opera";
  return "Chrome";
}

export function BrowserName() {
  const [name, setName] = useState("Chrome");

  useEffect(() => {
    const nav = navigator as Navigator & {
      brave?: { isBrave: () => Promise<boolean> };
    };

    if (nav.brave?.isBrave) {
      nav.brave.isBrave().then((isBrave) => {
        setName(isBrave ? "Brave" : detectFromUserAgent(navigator.userAgent));
      });
    } else {
      setName(detectFromUserAgent(navigator.userAgent));
    }
  }, []);

  return <>{name}</>;
}
