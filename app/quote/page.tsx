import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { QuoteForm } from "@/components/quote-form"
import { Suspense } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote | PND Industrial Suppliers",
  description: "Get competitive quotes on premium industrial equipment and PPE. Our experts respond within 24 hours.",
  alternates: {
    canonical: "https://www.pndindustrialsuppliers.com/quote",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Request a Quote
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-6">
                Submit your requirements and our team will provide a competitive quote within 24 hours
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center">Loading quote form...</div>}>
          <QuoteForm />
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
