import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getAllProducts } from "@/lib/products-combined"
import { notFound } from "next/navigation"
import { ProductDetailClient } from "@/components/product-detail-client"
import type { Product } from "@/lib/types"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const products = await getAllProducts()
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ProductDetailClient product={product} />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
