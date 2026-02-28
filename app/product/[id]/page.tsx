import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getAllProducts } from "@/lib/products-combined"
import { notFound } from "next/navigation"
import { ProductDetailClient } from "@/components/product-detail-client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
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

      {/* Floating Back to Categories Button - Fixed at bottom-left */}
      <Link href="/" className="fixed bottom-20 left-4 z-50 md:hidden">
        <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-full h-12 px-4">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
