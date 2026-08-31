const fs = require("fs");
const path = require("path");

const HOST = "elitefutbot.com";
const KEY = "8162850e4eb3469e985782ed38c4da65";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    console.error("sitemap.xml not found at:", sitemapPath);
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
  const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
  const urlList = urlMatches.map((m) => m.replace(/<\/?loc>/g, "").trim());

  if (urlList.length === 0) {
    console.error("No URLs found in sitemap.xml");
    process.exit(1);
  }

  console.log(`Found ${urlList.length} URLs to submit to IndexNow...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      console.log(`[${endpoint}] Response status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`Successfully submitted to ${endpoint}`);
      } else {
        const text = await response.text();
        console.warn(`Response body: ${text}`);
      }
    } catch (err) {
      console.error(`Failed to submit to ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow();
