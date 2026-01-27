import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductPageClient } from "@/components/product-page-client"
import { getAllProducts } from "@/lib/products-combined"
import { notFound } from "next/navigation"
import type { Product } from "@/lib/types"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  
  if (!id || !id.trim()) {
    console.warn("[v0] ProductPage: Received empty product ID")
    notFound()
  }

  const allProducts = await getAllProducts()
  console.log(`[v0] ProductPage: Looking for product ID "${id}" among ${allProducts.length} total products`)
  
  const product = allProducts.find((p) => p.id === id)

  if (!product) {
    console.warn(`[v0] ProductPage: Product not found for ID "${id}"`)
    console.log(`[v0] Available product IDs:`, allProducts.slice(0, 10).map(p => p.id).join(", "))
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <ProductPageClient product={product} />
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
