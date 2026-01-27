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
  const allProducts = await getAllProducts()
  const product = allProducts.find((p) => p.id === id)

  if (!product) {
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
