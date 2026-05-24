import { products as fileProducts, categories as fileCategories } from "./products"
import { getDbProducts, getDbCategories } from "./db/products"
import type { Product } from "./types"
import type { Category } from "./db/products"

export async function getAllProducts(): Promise<Product[]> {
  const dbProducts = await getDbProducts()
  // Merge file-based products with database products
  return [...fileProducts, ...dbProducts]
}

export async function getAllCategories(): Promise<Category[]> {
  const dbCategories = await getDbCategories()
  // Merge file-based categories with database categories
  const combinedCategories = [...(fileCategories as any), ...dbCategories] as Category[]

  return combinedCategories.reduce((acc: Category[], category) => {
    if (!acc.find((c) => c.slug === category.slug)) {
      acc.push(category)
    }
    return acc
  }, [])
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
