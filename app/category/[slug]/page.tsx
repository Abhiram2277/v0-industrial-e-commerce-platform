import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getAllProducts, getAllCategories } from "@/lib/products-combined"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { getCategoryCanonicalUrl } from "@/lib/seo-helpers"

// Enable static generation with dynamic params for all categories
export const dynamicParams = true
export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const categories = await getAllCategories()
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  const canonicalUrl = getCategoryCanonicalUrl(slug)
  return {
    title: `${category.name} | PND Industrial Suppliers`,
    description: category.description || `Browse ${category.name} products from PND Industrial Suppliers`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.name} | PND Industrial Suppliers`,
      description: category.description || `Browse ${category.name} products from PND Industrial Suppliers`,
      url: canonicalUrl,
      type: "website",
    },
  }
}

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

  // CollectionPage Schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: getCategoryCanonicalUrl(slug),
    isPartOf: {
      "@type": "WebSite",
      name: "PND Industrial Suppliers",
      url: "https://pndindustrialsuppliers.com",
    },
    numberOfItems: categoryProducts.length,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Schema markup for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Sticky Back Navigation Bar */}
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/50">
          <div className="container mx-auto px-4 py-3 flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h2 className="font-semibold text-sm md:text-base truncate">{category.name}</h2>
          </div>
        </div>

        {/* Category Header */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {category.name}
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">{category.description}</p>
              <div className="flex flex-wrap gap-3">
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

        {/* Modern B2B Description Section */}
        <section className="py-12 md:py-16 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Dynamic Headline */}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Authorized {category.name} Supplier in Nellore & Kakinada
              </h2>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <span className="text-accent text-lg">✓</span>
                  <span>Authorized Distributor</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <span className="text-accent text-lg">✓</span>
                  <span>IS/CE Certified</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <span className="text-accent text-lg">✓</span>
                  <span>Same-Day Stock</span>
                </div>
              </div>

              {/* Brands Line */}
              <div className="flex items-center gap-3 mb-8 text-sm md:text-base">
                <span className="font-semibold text-foreground">Brands:</span>
                <span className="text-foreground/80">Udyogi · Hillson · Bosch · DeWalt · Ador Welding</span>
              </div>

              {/* CTA Button */}
              <Link href="/quote">
                <Button size="lg" className="gap-2">
                  Get Bulk Quote →
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  All Products
                </h2>
                <p className="text-muted-foreground text-lg">{categoryProducts.length} products available</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {categoryProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products available in this category yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
