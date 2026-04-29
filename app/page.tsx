import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PartnerBrands } from "@/components/partner-brands"
import { IndustriesServed } from "@/components/industries-served"
import { ProductExplorer } from "@/components/product-explorer"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PartnerBrands />
        <IndustriesServed />
        <Suspense fallback={<div className="py-20 container mx-auto px-4"><p className="text-center">Loading products...</p></div>}>
          <ProductExplorer />
        </Suspense>
        <CTASection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
