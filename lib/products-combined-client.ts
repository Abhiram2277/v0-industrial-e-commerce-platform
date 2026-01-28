import { products as fileProducts, categories as fileCategories } from "./products"
import { getDbProductsClient, getDbCategoriesClient } from "./db/products-client"
import type { Product } from "./types"

export async function getAllProductsClient(): Promise<Product[]> {
  try {
    const dbProducts = await getDbProductsClient()
    return [...fileProducts, ...dbProducts]
  } catch (error) {
    console.debug("[v0] Error fetching all products, using local data only:", error)
    return fileProducts
  }
}

export async function getAllCategoriesClient() {
  try {
    const dbCategories = await getDbCategoriesClient()
    const combinedCategories = [...fileCategories]

    for (const dbCat of dbCategories) {
      if (!combinedCategories.find((c) => c.slug === dbCat.slug)) {
        combinedCategories.push(dbCat)
      }
    }

    return combinedCategories
  } catch (error) {
    console.debug("[v0] Error fetching categories, using local data only:", error)
    return fileCategories
  }
}

export async function getProductsByCategoryClient(categorySlug: string): Promise<Product[]> {
  const allProducts = await getAllProductsClient()
  return allProducts.filter((p) => p.category === categorySlug)
}

export async function getProductByIdClient(id: string): Promise<Product | undefined> {
  const allProducts = await getAllProductsClient()
  return allProducts.find((p) => p.id === id)
}
