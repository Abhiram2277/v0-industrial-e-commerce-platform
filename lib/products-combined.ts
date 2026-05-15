import { products as fileProducts, categories as fileCategories } from "./products"
import { getDbProducts, getDbCategories } from "./db/products"
import type { Product } from "./types"

export async function getAllProducts(): Promise<Product[]> {
  const dbProducts = await getDbProducts()
  // Merge file-based products with database products
  return [...fileProducts, ...dbProducts]
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
