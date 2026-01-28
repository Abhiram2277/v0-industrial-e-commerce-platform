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
    console.debug(
      "[v0] Supabase environment variables not set - database features disabled. Products will be loaded from local data.",
    )
    return null
  }

  try {
    return createBrowserClient(supabaseUrl, supabaseAnonKey)
  } catch (error) {
    console.error("[v0] Failed to initialize Supabase client:", error)
    return null
  }
}

export async function getDbProductsClient(): Promise<Product[]> {
  try {
    const supabase = getSupabaseClient()

    if (!supabase) {
      return []
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true })

    if (error) {
      console.debug("[v0] Database query error (falling back to local products):", error.message)
      return []
    }

    if (!data || data.length === 0) {
      return []
    }

    return data
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.debug("[v0] Failed to fetch products from database:", errorMessage)
    return []
  }
}

export async function getDbCategoriesClient(): Promise<Category[]> {
  try {
    const supabase = getSupabaseClient()

    if (!supabase) {
      return []
    }

    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("slug", { ascending: true })

    if (error) {
      console.debug("[v0] Database query error (falling back to local categories):", error.message)
      return []
    }

    if (!data || data.length === 0) {
      return []
    }

    return data
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.debug("[v0] Failed to fetch categories from database:", errorMessage)
    return []
  }
}
