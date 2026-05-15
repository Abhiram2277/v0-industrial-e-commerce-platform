import { products as fileProducts, categories as fileCategories } from "./products"
import { getDbProducts, getDbCategories } from "./db/products"
import type { Product } from "./types"

export async function getAllProducts(): Promise<Product[]> {
  // Use file-based products only
  // Database products have different ID schemes (fp-002 vs foot-001) which causes conflicts
  // File-based products are the source of truth for this application
  return fileProducts
}

export async function getAllCategories() {
  const dbCategories = await getDbCategories()
  // Merge file-based categories with database categories
  const combinedCategories = [...fileCategories]

  // Add database categories that don't exist in file
  for (const dbCat of dbCategories) {
    if (!combinedCategories.find((c) => c.slug === dbCat.slug)) {
      combinedCategories.push({ ...dbCat, subcategories: [] })
    }
  }

  return combinedCategories
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((p) => p.category === categorySlug)
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const allProducts = await getAllProducts()
  return allProducts.find((p) => p.id === id)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((p) => p.featured)
}
