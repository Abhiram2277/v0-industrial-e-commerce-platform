import type { MetadataRoute } from 'next'
import { getAllProducts, getAllCategories } from '@/lib/products-combined'
import { getBlogArticles } from '@/lib/blog-data'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pndindustrialsuppliers.com'

// Fallback date used only when a content item has no real updatedAt/createdAt.
// Using a fixed date (instead of `new Date()` / `Date.now()`) avoids sending Google
// a "this page changed" signal on every single deploy, which wastes crawl budget
// and undermines trust in our lastmod dates.
const FALLBACK_LAST_MODIFIED = new Date('2026-01-01T00:00:00.000Z')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages with their priorities and change frequencies
  // Homepage gets highest priority as it's the entry point
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: FALLBACK_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: FALLBACK_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: FALLBACK_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/quote`,
      lastModified: FALLBACK_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: FALLBACK_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: FALLBACK_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic category pages
  // Categories are key for navigation and SEO structure
  const categories = await getAllCategories()
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.slug}`,
    lastModified: FALLBACK_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic product pages
  // Products are updated regularly and important for commerce SEO
  const products = await getAllProducts()
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: product.updatedAt || product.createdAt || FALLBACK_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic blog pages
  // Blog posts drive organic traffic and improve indexing
  const blogArticles = getBlogArticles()
  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt || FALLBACK_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  // Combine all pages and return as a single sitemap
  // Sitemaps have a limit of 50,000 URLs per file
  // If you exceed this, you'll need to create a sitemap index
  return [...staticPages, ...categoryPages, ...productPages, ...blogPages]
}
