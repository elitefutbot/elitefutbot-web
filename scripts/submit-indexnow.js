/**
 * IndexNow URL Submission Script for Bing, Yandex, Naver, and Seznam
 * Key: a8aab332f59c4658ae233009350b3a08
 * Verification: https://www.elitefutbot.com/a8aab332f59c4658ae233009350b3a08.txt
 */

const HOST = "www.elitefutbot.com";
const KEY = "a8aab332f59c4658ae233009350b3a08";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function fetchSitemapUrls() {
  const sitemapUrls = [
    `https://${HOST}/sitemap.xml`,
    "http://localhost:3000/sitemap.xml",
  ];

  for (const sitemapUrl of sitemapUrls) {
    try {
      console.log(`Fetching sitemap from ${sitemapUrl}...`);
      const res = await fetch(sitemapUrl, {
        headers: { "User-Agent": "EliteFUTBot-IndexNow-Client/1.0" },
      });
      if (res.ok) {
        const xml = await res.text();
        const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
        const urlList = urlMatches.map((m) => m.replace(/<\/?loc>/g, "").trim());
        if (urlList.length > 0) {
          console.log(`Found ${urlList.length} URLs from ${sitemapUrl}`);
          return Array.from(new Set(urlList));
        }
      }
    } catch {
      // Continue to next fallback
    }
  }

  throw new Error("Unable to retrieve URLs from sitemap.xml. Ensure the site is running or deployed.");
}

async function submitIndexNow() {
  try {
    const urlList = await fetchSitemapUrls();

    console.log(`\nSubmitting ${urlList.length} URLs to IndexNow...`);
    console.log(`Host: ${HOST}`);
    console.log(`Key: ${KEY}`);
    console.log(`Key Location: ${KEY_LOCATION}\n`);

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
          console.log(` Successfully submitted to ${endpoint}`);
        } else {
          const text = await response.text();
          console.warn(`[${endpoint}] Response body: ${text}`);
        }
      } catch (err) {
        console.error(` Failed to submit to ${endpoint}:`, err.message);
      }
    }
  } catch (err) {
    console.error("Error during IndexNow submission:", err.message);
    process.exit(1);
  }
}

submitIndexNow();
