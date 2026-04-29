export interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  brand?: string
  description: string
  features: string[]
  applications: string[]
  image?: string
  price?: number
  slug?: string
  inStock?: boolean
  stock?: number
  originalPrice?: number
  images?: string[]
  rating?: number
  reviews?: number
  featured?: boolean
  sku?: string
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
  specifications?: {
    standard?: string
    material?: string
    activation?: string
    connection?: string
    showerFlow?: string
    eyewashFlow?: string
    inlet?: string
    drain?: string
    capacity?: string
    mounting?: string
    type?: string
    flowDuration?: string
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: string
  subcategories?: string[]
  productCount?: number
}

export interface CartItem {
  productId: string
  quantity: number
  product?: Product
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: Date
  updatedAt: Date
}
