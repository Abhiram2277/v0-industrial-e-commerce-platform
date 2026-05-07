import { Suspense } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
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
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Nellore Branch */}
              <div>
                <h3 className="font-bold text-xl mb-6">Nellore Branch</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/85">Plot no: 23-18-19, Pardhasaradhi Nagar, Krishnapatnam Rd, Nellore</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-2">
                      <a href="tel:+919398644987" className="hover:text-accent transition-colors">+91 9398644987</a>
                      <a href="tel:+919701110242" className="hover:text-accent transition-colors">+91 9701110242</a>
                      <a href="tel:+918712268672" className="hover:text-accent transition-colors">+91 8712268672</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kakinada Branch */}
              <div>
                <h3 className="font-bold text-xl mb-6">Kakinada Branch</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/85">Door No. 2, 98/2, near Gangalamma Devi Temple, Vakalapudi, Kakinada, Andhra Pradesh 533005</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-2">
                      <a href="tel:+917730940410" className="hover:text-accent transition-colors">+91 77309 40410</a>
                      <a href="tel:+919182156665" className="hover:text-accent transition-colors">+91 91821 56665</a>
                      <a href="tel:+919948592229" className="hover:text-accent transition-colors">+91 99485 92229</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                    <a href="mailto:pndindustrialsuppliers@gmail.com" className="hover:text-accent transition-colors text-xs break-all">pndindustrialsuppliers@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-xl mb-6">Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <Link href="/blog" className="hover:text-accent transition-colors">Blog Articles</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <Link href="/blog?type=technical-guide" className="hover:text-accent transition-colors">Technical Guides</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    <Link href="/blog?type=product-guide" className="hover:text-accent transition-colors">Product Guides</Link>
                  </li>
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
