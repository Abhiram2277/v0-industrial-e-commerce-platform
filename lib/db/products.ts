import { createClient } from "@/lib/supabase/server"
import type { Product } from "@/lib/types"

export interface Category {
  slug: string
  name: string
  description: string
  image: string
}

export async function getDbProducts(): Promise<Product[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("products").select("*").order("id", { ascending: true })

    if (error) {
      console.error("[v0] Error fetching products from database:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("[v0] Error in getDbProducts:", error)
    return []
  }
}

export async function getDbCategories(): Promise<Category[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("categories").select("*").order("slug", { ascending: true })

    if (error) {
      console.error("[v0] Error fetching categories from database:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("[v0] Error in getDbCategories:", error)
    return []
  }
}

export async function getDbProductsByCategory(category: string): Promise<Product[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .order("id", { ascending: true })

    if (error) {
      console.error("[v0] Error fetching products by category:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("[v0] Error in getDbProductsByCategory:", error)
    return []
  }
}
