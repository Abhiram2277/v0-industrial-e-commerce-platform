import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getAllProducts } from "@/lib/products-combined"
import { notFound } from "next/navigation"
import { ProductDetailClient } from "@/components/product-detail-client"
import type { Product } from "@/lib/types"
import type { Metadata } from "next"
import { getProductCanonicalUrl } from "@/lib/seo-helpers"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const products = await getAllProducts()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | PND Industrial Suppliers`,
    description: product.description || `${product.name} - Premium industrial equipment from PND Industrial Suppliers`,
    alternates: {
      canonical: getProductCanonicalUrl(product.id),
    },
  }
}

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
