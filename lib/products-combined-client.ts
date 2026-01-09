import { products as fileProducts, categories as fileCategories } from "./products"
import { getDbProductsClient, getDbCategoriesClient } from "./db/products-client"
import type { Product } from "./types"

export async function getAllProductsClient(): Promise<Product[]> {
  const dbProducts = await getDbProductsClient()
  return [...fileProducts, ...dbProducts]
}

export async function getAllCategoriesClient() {
  const dbCategories = await getDbCategoriesClient()
  const combinedCategories = [...fileCategories]

  for (const dbCat of dbCategories) {
    if (!combinedCategories.find((c) => c.slug === dbCat.slug)) {
      combinedCategories.push(dbCat)
    }
  }

  return combinedCategories
}

export async function getProductsByCategoryClient(categorySlug: string): Promise<Product[]> {
  const allProducts = await getAllProductsClient()
  return allProducts.filter((p) => p.category === categorySlug)
}

export async function getProductByIdClient(id: string): Promise<Product | undefined> {
  const allProducts = await getAllProductsClient()
  return allProducts.find((p) => p.id === id)
}
