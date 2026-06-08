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
      robots: {
        index: false,
      },
    }
  }

  // Build comprehensive description
  const baseDescription = product.description || `${product.name} - Premium industrial equipment`
  const features = product.features?.slice(0, 2).join(", ") || ""
  const fullDescription = features 
    ? `${baseDescription}. Features: ${features}`
    : baseDescription

  // Ensure description is under 160 characters for Google
  const metaDescription = fullDescription.length > 160 
    ? fullDescription.substring(0, 157) + "..." 
    : fullDescription

  const canonicalUrl = getProductCanonicalUrl(product.id)

  return {
    title: `${product.name} | Industrial Safety Equipment | PND Industrial Suppliers`,
    description: metaDescription,
    keywords: [
      product.name,
      product.category,
      product.brand || "safety equipment",
      "industrial suppliers",
      "PND",
      ...(product.tags || []),
    ].filter(Boolean).join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: `${product.name} | PND Industrial Suppliers`,
      description: metaDescription,
      type: "website",
      url: canonicalUrl,
      images: product.image ? [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        }
      ] : [],
      siteName: "PND Industrial Suppliers",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | PND Industrial Suppliers`,
      description: metaDescription,
      images: product.image ? [product.image] : [],
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

  // Generate Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description || `${product.name} - Premium industrial equipment`,
    brand: {
      "@type": "Brand",
      name: product.brand || "PND Industrial Suppliers",
    },
    category: product.category,
    image: product.image || "https://pndindustrialsuppliers.com/pnd-logo.png",
    url: getProductCanonicalUrl(product.id),
    offers: {
      "@type": "Offer",
      url: getProductCanonicalUrl(product.id),
      priceCurrency: "INR",
      price: product.price?.toString() || "Contact for pricing",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "PND Industrial Suppliers",
        url: "https://pndindustrialsuppliers.com",
      },
    },
    aggregateRating: product.rating && product.reviews ? {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      ratingCount: product.reviews.toString(),
    } : undefined,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ProductDetailClient product={product} />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      
      {/* Product Schema JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  )
}
