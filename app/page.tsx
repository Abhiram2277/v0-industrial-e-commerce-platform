import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSearchBar } from "@/components/hero-search-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PartnerBrands } from "@/components/partner-brands"
import { IndustriesServed } from "@/components/industries-served"
import { ProductExplorer } from "@/components/product-explorer"
import { CTASection } from "@/components/cta-section"
import { getAllProducts, getAllCategories } from "@/lib/products-combined"

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSearchBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PartnerBrands />
        <IndustriesServed />
        <ProductExplorer initialProducts={products} initialCategories={categories} />
        <CTASection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
