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
  slug: string
  name: string
  description: string
  subcategories: string[]
}
