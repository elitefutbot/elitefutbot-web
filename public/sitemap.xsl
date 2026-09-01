<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Elite FUT SNIPER</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: #0d0d0d;
            color: #e5e5e5;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 13px;
            line-height: 1.6;
            padding: 40px 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header {
            background: #141414;
            border: 1px solid #262626;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
          }
          .header-left h1 {
            color: #ffffff;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.5px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .header-left h1 span.highlight {
            color: #ccff00;
          }
          .header-left p {
            color: #888888;
            font-size: 14px;
          }
          .badge-count {
            background: rgba(204, 255, 0, 0.1);
            border: 1px solid rgba(204, 255, 0, 0.3);
            color: #ccff00;
            font-weight: 700;
            padding: 8px 16px;
            border-radius: 9999px;
            font-size: 13px;
          }
          .table-wrapper {
            background: #141414;
            border: 1px solid #262626;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            background: #1a1a1a;
            color: #a3a3a3;
            font-weight: 700;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 14px 20px;
            border-bottom: 1px solid #262626;
          }
          td {
            padding: 14px 20px;
            border-bottom: 1px solid #1f1f1f;
            color: #d4d4d4;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background: #171717;
          }
          a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.15s ease;
          }
          a:hover {
            color: #ccff00;
            text-decoration: underline;
          }
          .priority-pill {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 11px;
            background: #222222;
            color: #ffffff;
          }
          .priority-high {
            background: rgba(204, 255, 0, 0.15);
            color: #ccff00;
            border: 1px solid rgba(204, 255, 0, 0.3);
          }
          .priority-mid {
            background: rgba(16, 185, 129, 0.15);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }
          .changefreq {
            color: #888888;
            font-size: 12px;
            text-transform: capitalize;
          }
          .lastmod {
            color: #888888;
            font-family: monospace;
            font-size: 11px;
          }
          .languages-tags {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;
          }
          .lang-badge {
            background: #222222;
            color: #a3a3a3;
            border-radius: 4px;
            padding: 2px 6px;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
          }
          .footer {
            margin-top: 24px;
            text-align: center;
            color: #666666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-left">
              <h1><span>Elite FUT</span> <span class="highlight">SNIPER</span> · XML Sitemap</h1>
              <p>Search engine index &amp; multi-language alternate hreflang index for Google, Bing, Yandex, and AI Search Crawlers.</p>
            </div>
            <div class="badge-count">
              Total Indexed URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 48%;">URL Destination</th>
                  <th style="width: 16%;">Languages</th>
                  <th style="width: 10%;">Priority</th>
                  <th style="width: 12%;">Change Frequency</th>
                  <th style="width: 14%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <div class="languages-tags">
                        <xsl:for-each select="xhtml:link">
                          <span class="lang-badge">
                            <xsl:value-of select="@hreflang"/>
                          </span>
                        </xsl:for-each>
                        <xsl:if test="not(xhtml:link)">
                          <span class="lang-badge">en</span>
                        </xsl:if>
                      </div>
                    </td>
                    <td>
                      <xsl:variable name="p" select="sitemap:priority"/>
                      <xsl:choose>
                        <xsl:when test="$p &gt;= 0.9">
                          <span class="priority-pill priority-high"><xsl:value-of select="$p"/></span>
                        </xsl:when>
                        <xsl:when test="$p &gt;= 0.7">
                          <span class="priority-pill priority-mid"><xsl:value-of select="$p"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-pill"><xsl:value-of select="$p"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <span class="changefreq"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                    <td>
                      <span class="lastmod"><xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/></span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            Generated automatically by Elite FUT SNIPER Next.js Engine · Fully compliant with Sitemaps.org Protocol 0.9 &amp; Google International SEO Guidelines
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
