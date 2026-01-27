import { products as fileProducts, categories as fileCategories } from "./products"
import { getDbProducts, getDbCategories } from "./db/products"
import type { Product } from "./types"

/**
 * Validates and deduplicates products by ID
 * Returns the first occurrence if duplicates exist
 */
function validateAndDeduplicateProducts(allProducts: Product[]): Product[] {
  const seen = new Map<string, Product>()
  const duplicates: string[] = []

  for (const product of allProducts) {
    if (!product.id || !product.id.trim()) {
      console.warn("[v0] Product found with empty or null ID:", product.name)
      continue
    }

    if (seen.has(product.id)) {
      duplicates.push(product.id)
      console.warn(`[v0] Duplicate product ID found: "${product.id}" (${product.name}). Using first occurrence.`)
    } else {
      seen.set(product.id, product)
    }
  }

  if (duplicates.length > 0) {
    console.error(`[v0] Found ${duplicates.length} duplicate product IDs:`, duplicates)
  }

  return Array.from(seen.values())
}

export async function getAllProducts(): Promise<Product[]> {
  const dbProducts = await getDbProducts()
  // Merge file-based products with database products
  const allProducts = [...fileProducts, ...dbProducts]
  return validateAndDeduplicateProducts(allProducts)
}

export async function getAllCategories() {
  const dbCategories = await getDbCategories()
  // Merge file-based categories with database categories
  const combinedCategories = [...fileCategories]

  // Add database categories that don't exist in file
  for (const dbCat of dbCategories) {
    if (!combinedCategories.find((c) => c.slug === dbCat.slug)) {
      combinedCategories.push(dbCat)
    }
  }

  return combinedCategories
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((p) => p.category === categorySlug)
}

export async function getProductById(id: string): Promise<Product | undefined> {
  if (!id || !id.trim()) {
    console.warn("[v0] getProductById called with empty ID")
    return undefined
  }
  const allProducts = await getAllProducts()
  const product = allProducts.find((p) => p.id === id)
  if (!product) {
    console.warn(`[v0] Product with ID "${id}" not found`)
  }
  return product
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((p) => p.featured)
}
