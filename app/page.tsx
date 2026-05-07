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
        <section className="py-16 bg-primary text-primary-foreground border-t border-primary-foreground/20">
          <div className="container mx-auto px-4">
            <div>
              <h3 className="font-bold text-xl mb-6">Resources</h3>
              <ul className="space-y-3 text-sm flex gap-8">
                <li>
                  <Link href="/blog" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span>📚</span>
                    <span>Blog Articles</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog?type=technical-guide" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span>📖</span>
                    <span>Technical Guides</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog?type=product-guide" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span>📋</span>
                    <span>Product Guides</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
