import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getAllProducts, getAllCategories } from "@/lib/products-combined"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const categories = await getAllCategories()
  const products = await getAllProducts()

  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.category === slug)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Category Header with Back Button */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-block mb-6">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {category.name}
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(category.subcategories ?? []).map((sub, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  All Products
                </h2>
                <p className="text-muted-foreground">{categoryProducts.length} products available</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {categoryProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products available in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Sticky Back Button for Mobile/Scrolled Views */}
        <div className="fixed bottom-24 right-4 lg:hidden z-40">
          <Link href="/">
            <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-full h-14 w-14 p-0 flex items-center justify-center">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
