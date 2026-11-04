import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /dashboard, /forgot-password and /reset-password are not blocked here on
        // purpose: they are marked noindex, and Google can only see a noindex on a
        // page it is allowed to fetch.
        disallow: ['/api/'],
      },
      {
        userAgent: [
          // Google & Gemini (SEO / GEO)
          'Googlebot',
          'Googlebot-Image',
          'Google-Extended',
          // Bing & Microsoft Copilot
          'Bingbot',
          'msnbot',
          // OpenAI (ChatGPT & SearchGPT / AEO)
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          // Perplexity AI (AEO / Answer Engines)
          'PerplexityBot',
          // Anthropic (Claude / AEO)
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          // Apple (Apple Intelligence & Siri)
          'Applebot',
          'Applebot-Extended',
          // Meta (Llama & Meta AI)
          'Meta-ExternalAgent',
          'FacebookBot',
          // Amazon (Alexa & Rufus)
          'Amazonbot',
          // ByteDance / TikTok
          'Bytespider',
          // Cohere & Other LLM Search
          'cohere-ai',
          'YouBot',
          'DuckDuckBot',
        ],
        allow: '/',
        // /dashboard, /forgot-password and /reset-password are not blocked here on
        // purpose: they are marked noindex, and Google can only see a noindex on a
        // page it is allowed to fetch.
        disallow: ['/api/'],
      }
    ],
    sitemap: 'https://www.elitefutbot.com/sitemap.xml',
  }
}


