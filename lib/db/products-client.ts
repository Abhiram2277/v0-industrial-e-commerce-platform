import { createBrowserClient } from "@supabase/ssr"
import type { Product } from "@/lib/types"

export interface Category {
  slug: string
  name: string
  description: string
  image: string
}

export async function getDbProductsClient(): Promise<Product[]> {
  try {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )

    const { data, error } = await supabase.from("products").select("*").order("id", { ascending: true })

    if (error) {
      console.error("[v0] Error fetching products from database:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("[v0] Error in getDbProductsClient:", error)
    return []
  }
}

export async function getDbCategoriesClient(): Promise<Category[]> {
  try {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )

    const { data, error } = await supabase.from("categories").select("*").order("slug", { ascending: true })

    if (error) {
      console.error("[v0] Error fetching categories from database:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("[v0] Error in getDbCategoriesClient:", error)
    return []
  }
}
