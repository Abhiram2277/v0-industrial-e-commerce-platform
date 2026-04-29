export interface Product {
  id: string
  name: string
  slug: string
  category: string
  description: string
  price: number
  originalPrice?: number
  stock: number
  image: string
  images?: string[]
  rating?: number
  reviews?: number
  featured?: boolean
  inStock: boolean
  sku?: string
  specifications?: Record<string, string>
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
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
