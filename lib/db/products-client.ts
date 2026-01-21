import { createBrowserClient } from "@supabase/ssr"
import type { Product } from "@/lib/types"

export interface Category {
  slug: string
  name: string
  description: string
  image: string
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "[v0] Supabase environment variables are not available. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.",
    )
    return null
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

export async function getDbProductsClient(): Promise<Product[]> {
  try {
    const supabase = getSupabaseClient()

    if (!supabase) {
      console.warn("[v0] Supabase client not initialized. Returning empty product list.")
      return []
    }

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
    const supabase = getSupabaseClient()

    if (!supabase) {
      console.warn("[v0] Supabase client not initialized. Returning empty categories list.")
      return []
    }

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
