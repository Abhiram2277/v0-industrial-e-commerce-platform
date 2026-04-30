export interface Product {
  id: string
  name: string
  category: string
  subcategory?: string
  brand?: string
  description: string
  features: string[]
  applications: string[]
  image?: string
  price?: number
  featured?: boolean
  inStock?: boolean
  stock?: number
  rating?: number
  reviews?: number
  slug?: string
  sku?: string
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
  specifications?: {
    [key: string]: string | undefined
    standard?: string
    material?: string
    activation?: string
    connection?: string
    showerFlow?: string
    eyewashFlow?: string
    inlet?: string
    outlet?: string
    drain?: string
    capacity?: string
    mounting?: string
    type?: string
    flowDuration?: string
    length?: string
  }
}

export interface Category {
  slug: string
  name: string
  description: string
  subcategories?: string[]
}
