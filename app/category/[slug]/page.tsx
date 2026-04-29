import type { Metadata } from "next"
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

// SEO keywords and titles for each category
const categoryKeywords: Record<string, { title: string; description: string; keywords: string[] }> = {
  "head-protection": {
    title: "Safety Helmets & Head Protection Equipment in Nellore | PND Industrial",
    description:
      "Premium safety helmets and head protection equipment for construction and industrial use. Authorized Udyogi, Hillson distributor. Fast delivery, certified products. 152+ satisfied customers.",
    keywords: [
      "safety helmets",
      "head protection equipment",
      "hard hats Nellore",
      "industrial helmets",
      "construction safety helmets",
      "Udyogi helmets",
    ],
  },
  "eye-protection": {
    title: "Safety Goggles & Eye Protection Equipment | Nellore, Kakinada",
    description:
      "High-quality safety goggles and protective eyewear for industrial workers. UV protection, impact-resistant, certified. Same-day delivery available in Nellore & Kakinada.",
    keywords: [
      "safety goggles",
      "eye protection",
      "safety glasses",
      "UV protection goggles",
      "industrial eyewear",
      "protective eyewear",
    ],
  },
  "respiratory-protection": {
    title: "Safety Masks & Respirators | Industrial Respiratory Protection Nellore",
    description:
      "Professional-grade safety masks and respirators for dust and chemical protection. N95, N99, half-face and full-face options. Certified suppliers. Bulk pricing available.",
    keywords: [
      "safety masks",
      "respirators",
      "dust masks",
      "N95 masks",
      "respiratory protection",
      "gas masks",
    ],
  },
  "hand-protection": {
    title: "Safety Gloves & Hand Protection Equipment | Work Gloves Nellore",
    description:
      "Durable work gloves and hand protection for construction, welding, and manufacturing. Cut-resistant, oil-resistant, latex-free. Bulk pricing. Free consultation.",
    keywords: [
      "safety gloves",
      "work gloves",
      "hand protection",
      "cut-resistant gloves",
      "welding gloves",
      "nitrile gloves",
    ],
  },
  "foot-protection": {
    title: "Safety Shoes & Steel Toe Boots | Industrial Footwear Nellore",
    description:
      "Professional safety shoes and steel toe boots for industrial workers. Oil-resistant, slip-resistant, lightweight. OSHA certified. Free fitting consultation available.",
    keywords: [
      "safety shoes",
      "steel toe boots",
      "work boots",
      "foot protection",
      "safety footwear",
      "industrial shoes",
    ],
  },
  "hearing-protection": {
    title: "Earplugs & Hearing Protection Equipment | Noise Protection Nellore",
    description:
      "Professional hearing protection equipment including earplugs, earmuffs, and communication headsets. NRR rated for maximum noise reduction. Comfortable for all-day wear.",
    keywords: [
      "earplugs",
      "hearing protection",
      "noise protection",
      "earmuffs",
      "hearing protection equipment",
      "NRR protection",
    ],
  },
  "body-protection": {
    title: "Safety Vests & Protective Clothing | Hi-Vis Wear Kakinada",
    description:
      "High-visibility safety vests and protective body wear. Fire-resistant, chemical-resistant, reflective options. Professional grade equipment for all industries.",
    keywords: [
      "safety vests",
      "body protection",
      "hi-vis vests",
      "protective clothing",
      "reflective vests",
      "chemical protective wear",
    ],
  },
  "fall-protection": {
    title: "Safety Harnesses & Fall Protection Equipment | Height Safety Nellore",
    description:
      "Complete fall protection systems including safety harnesses, lanyards, and anchor points. OSHA certified. Professional installation and training available.",
    keywords: [
      "safety harness",
      "fall protection",
      "height safety",
      "safety lanyards",
      "fall arrest systems",
      "climbing gear",
    ],
  },
  "industrial-power-tools": {
    title: "Bosch & DeWalt Power Tools | Industrial Tools Supplier Nellore",
    description:
      "Authorized Bosch and DeWalt power tools distributor. Complete range of industrial drills, saws, grinders. Warranty support and after-sales service. 6 years experience.",
    keywords: [
      "Bosch tools",
      "DeWalt tools",
      "power tools",
      "industrial drills",
      "angle grinders",
      "power tools Nellore",
    ],
  },
  "welding-equipment": {
    title: "Welding Equipment & Supplies | Ador Welding Distributor Nellore",
    description:
      "Complete welding solutions with welding machines, electrodes, and protective gear. Authorized Ador Welding distributor. Technical support and training included.",
    keywords: [
      "welding equipment",
      "welding machines",
      "Ador welding",
      "arc welders",
      "welding supplies",
      "welding electrodes",
    ],
  },
  "safety-emergency-equipment": {
    title: "Safety & Emergency Equipment | First Aid Kits Kakinada",
    description:
      "Complete safety and emergency equipment including first aid kits, fire extinguishers, and emergency systems. OSHA compliant. Bulk orders available.",
    keywords: [
      "emergency equipment",
      "first aid kits",
      "fire extinguishers",
      "safety signs",
      "emergency equipment supplier",
      "workplace safety",
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const categories = await getAllCategories()
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested product category could not be found.",
    }
  }

  const seoData = categoryKeywords[slug]
  const title = seoData?.title || `${category.name} | PND Industrial Suppliers`
  const description = seoData?.description || category.description
  const keywords = seoData?.keywords || [category.name, "industrial suppliers", "safety equipment"]

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://pndindustrialsuppliers.com/category/${slug}`,
      siteName: "PND Industrial Suppliers",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://pndindustrialsuppliers.com/category/${slug}`,
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

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
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

        {/* Category Header with Back Button */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-24">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-block mb-8">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
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

        {/* Schema markup for product category page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: category.name,
              description: category.description,
              url: `https://pndindustrialsuppliers.com/category/${slug}`,
              provider: {
                "@type": "Organization",
                name: "PND Industrial Suppliers",
                url: "https://pndindustrialsuppliers.com",
                logo: "https://pndindustrialsuppliers.com/logo.png",
              },
              numberOfItems: categoryProducts.length,
            }),
          }}
        />

        {/* Products Grid */}
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

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}
