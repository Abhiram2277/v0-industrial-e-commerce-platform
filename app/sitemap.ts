import type { MetadataRoute } from 'next'
import { getAllProducts, getAllCategories } from '@/lib/products-combined'
import { getBlogArticles } from '@/lib/blog-data'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pndindustrialsuppliers.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages with their priorities and change frequencies
  // Homepage gets highest priority as it's the entry point
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic category pages
  // Categories are key for navigation and SEO structure
  const categories = await getAllCategories()
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic product pages
  // Products are updated regularly and important for commerce SEO
  const products = await getAllProducts()
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: new Date(product.updatedAt || product.createdAt || Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic blog pages
  // Blog posts drive organic traffic and improve indexing
  const blogArticles = getBlogArticles()
  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  // Combine all pages and return as a single sitemap
  // Sitemaps have a limit of 50,000 URLs per file
  // If you exceed this, you'll need to create a sitemap index
  return [...staticPages, ...categoryPages, ...productPages, ...blogPages]
}
