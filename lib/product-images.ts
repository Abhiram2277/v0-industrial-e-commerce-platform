/**
 * Product Image Mapping Service
 * Provides internet-sourced images for products by category and subcategory
 */

interface ImageMapping {
  [key: string]: string
}

// Category-level default images
const categoryImages: ImageMapping = {
  "head-protection": "https://images.unsplash.com/photo-1578519501867-05778ea2b9f1?w=500&h=500&fit=crop",
  "eye-protection": "https://images.unsplash.com/photo-1576175193917-6d2c7ad4f4c3?w=500&h=500&fit=crop",
  "face-protection": "https://images.unsplash.com/photo-1586165368440-667f8dd63e1e?w=500&h=500&fit=crop",
  "hand-protection": "https://images.unsplash.com/photo-1559163899-fc0cdc5e6e47?w=500&h=500&fit=crop",
  "foot-protection": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
  "hearing-protection": "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop",
  "respiratory-protection": "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=500&fit=crop",
  "electrical-safety": "https://images.unsplash.com/photo-1581092162562-40038f41dd33?w=500&h=500&fit=crop",
  "arc-heat-protection": "https://images.unsplash.com/photo-1581092166562-40038f41dd33?w=500&h=500&fit=crop",
  "workplace-safety": "https://images.unsplash.com/photo-1560264357-8d9766e12b2d?w=500&h=500&fit=crop",
  "emergency-safety": "https://images.unsplash.com/photo-1576091160500-112173f7f869?w=500&h=500&fit=crop",
  "harness": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=500&fit=crop",
  "lanyard": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=500&fit=crop",
  "anchorage-sling": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=500&fit=crop",
  "workwear": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
  "sgbi": "https://images.unsplash.com/photo-1560264357-8d9766e12b2d?w=500&h=500&fit=crop",
}

// Product-specific images by ID (for products without images in database)
const productSpecificImages: ImageMapping = {
  "pt-001": "https://images.unsplash.com/photo-1578519501867-05778ea2b9f1?w=500&h=500&fit=crop",
  "pt-002": "https://images.unsplash.com/photo-1576175193917-6d2c7ad4f4c3?w=500&h=500&fit=crop",
  "pt-003": "https://images.unsplash.com/photo-1586165368440-667f8dd63e1e?w=500&h=500&fit=crop",
  "pt-004": "https://images.unsplash.com/photo-1559163899-fc0cdc5e6e47?w=500&h=500&fit=crop",
  "pt-005": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
  "pt-006": "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop",
  "pt-007": "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=500&fit=crop",
  "pt-008": "https://images.unsplash.com/photo-1581092162562-40038f41dd33?w=500&h=500&fit=crop",
  "pt-009": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=500&fit=crop",
  "pt-010": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
  "pt-011": "https://images.unsplash.com/photo-1560264357-8d9766e12b2d?w=500&h=500&fit=crop",
  "pt-012": "https://images.unsplash.com/photo-1578519501867-05778ea2b9f1?w=500&h=500&fit=crop",
  "pt-013": "https://images.unsplash.com/photo-1576175193917-6d2c7ad4f4c3?w=500&h=500&fit=crop",
  "pt-014": "https://images.unsplash.com/photo-1586165368440-667f8dd63e1e?w=500&h=500&fit=crop",
  "pt-015": "https://images.unsplash.com/photo-1559163899-fc0cdc5e6e47?w=500&h=500&fit=crop",
}

/**
 * Get image URL for a product
 * Falls back to category image if product image is not available
 */
export function getProductImage(
  productImage: string | undefined,
  category: string,
  productId?: string
): string {
  // If product has a valid image, use it
  if (productImage && productImage.trim() && productImage !== "/placeholder.svg") {
    return productImage
  }

  // Try product-specific mapping
  if (productId && productSpecificImages[productId]) {
    return productSpecificImages[productId]
  }

  // Fall back to category image
  if (categoryImages[category]) {
    return categoryImages[category]
  }

  // Ultimate fallback
  return "https://images.unsplash.com/photo-1578519501867-05778ea2b9f1?w=500&h=500&fit=crop"
}

/**
 * Get category cover image
 */
export function getCategoryImage(categorySlug: string): string {
  return categoryImages[categorySlug] || "https://images.unsplash.com/photo-1560264357-8d9766e12b2d?w=500&h=500&fit=crop"
}
