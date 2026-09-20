import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard', '/forgot-password', '/reset-password'],
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
        disallow: ['/api/', '/dashboard', '/forgot-password', '/reset-password'],
      }
    ],
    sitemap: 'https://www.elitefutbot.com/sitemap.xml',
  }
}


