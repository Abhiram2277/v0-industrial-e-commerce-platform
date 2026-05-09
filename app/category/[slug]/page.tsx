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

        {/* Rich Content Section with Location Keywords */}
        <section className="py-16 md:py-20 bg-background/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                PND Industrial Suppliers is your authorized distributor of premium {category.name.toLowerCase()} in Nellore and Kakinada, Andhra Pradesh. We partner with leading brands including Udyogi, Hillson, Bosch, DeWalt, and Ador Welding to provide industrial workers with reliable, certified safety equipment that meets all Indian and international standards.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Our {category.name.toLowerCase()} collection is specifically curated for the demanding industrial environments across Andhra Pradesh—from the Krishnapatnam Port and Kakinada refinery operations to pharmaceutical plants, manufacturing facilities, and chemical processing units in Nellore. Every product undergoes rigorous quality checks to ensure worker safety and regulatory compliance.
              </p>
              <div className="bg-accent/5 border-l-4 border-accent p-6 my-8 rounded">
                <p className="text-base font-semibold text-accent mb-2">Why Choose Our {category.name}?</p>
                <ul className="space-y-2 text-foreground/85">
                  <li>✓ Authorized distributor for Udyogi, Hillson, and other premium brands</li>
                  <li>✓ Same-day delivery available in Nellore and Kakinada</li>
                  <li>✓ Bulk orders with competitive wholesale pricing</li>
                  <li>✓ Expert consultation on workplace safety requirements</li>
                  <li>✓ Certified to Indian and international safety standards (ISI, CE, ANSI)</li>
                </ul>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Contact PND Industrial Suppliers today for your {category.name.toLowerCase()} needs. We serve industrial clients across Nellore, Kakinada, and surrounding areas of Andhra Pradesh with fast shipping, flexible payment options, and dedicated customer support.
              </p>
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
