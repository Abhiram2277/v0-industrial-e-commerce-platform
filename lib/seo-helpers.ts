/**
 * SEO Helper Functions for Canonical URLs and Meta Tags
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pndindustrialsuppliers.com'

/**
 * Generate canonical URL for a given path
 * Ensures proper HTTPS and domain consolidation
 */
export function getCanonicalUrl(path: string = ''): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Remove trailing slash for consistency (except for root)
  const cleanPath = normalizedPath === '/' ? '' : normalizedPath.replace(/\/$/, '')
  
  return `${BASE_URL}${cleanPath}`
}

/**
 * Generate canonical URL for a product page
 */
export function getProductCanonicalUrl(productId: string): string {
  return getCanonicalUrl(`/product/${productId}`)
}

/**
 * Generate canonical URL for a category page
 */
export function getCategoryCanonicalUrl(categorySlug: string): string {
  return getCanonicalUrl(`/category/${categorySlug}`)
}

/**
 * Generate canonical URL for a blog post (if applicable)
 */
export function getBlogCanonicalUrl(slug: string): string {
  return getCanonicalUrl(`/blog/${slug}`)
}
