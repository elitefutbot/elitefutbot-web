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
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Amazonbot',
          'Applebot-Extended',
          'Bytespider',
          'cohere-ai'
        ],
        allow: '/',
        disallow: ['/api/', '/dashboard', '/forgot-password', '/reset-password'],
      }
    ],
    sitemap: 'https://elitefutbot.com/sitemap.xml',
  }
}

