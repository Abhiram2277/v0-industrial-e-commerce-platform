import { Suspense } from "react"
import Link from "next/link"
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSearchBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PartnerBrands />
        <IndustriesServed />
        <Suspense fallback={<div className="py-20 container mx-auto px-4"><p className="text-center">Loading products...</p></div>}>
          <ProductExplorer />
        </Suspense>
        <CTASection />
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-sm mb-3">Blog & Resources</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/blog" className="text-primary hover:text-accent">All Blog Articles</Link></li>
                  <li><Link href="/blog?type=technical-guide" className="text-primary hover:text-accent">Technical Guides</Link></li>
                  <li><Link href="/blog?type=product-guide" className="text-primary hover:text-accent">Product Guides</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-3">Industries We Serve</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/blog?industry=petrochemical" className="text-primary hover:text-accent">Petrochemical & Refinery</Link></li>
                  <li><Link href="/blog?industry=ports-logistics" className="text-primary hover:text-accent">Ports & Logistics</Link></li>
                  <li><Link href="/blog?industry=pharma" className="text-primary hover:text-accent">Pharmaceutical</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
