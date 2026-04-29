import { NextResponse } from 'next/server'

export async function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /private

# Sitemaps
Sitemap: https://pndindustrialsuppliers.com/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Respect crawl budget
Request-rate: 1/10s

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}

export const dynamic = 'force-dynamic'
