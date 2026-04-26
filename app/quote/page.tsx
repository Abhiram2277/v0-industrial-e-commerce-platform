import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { QuoteForm } from "@/components/quote-form"

export const dynamic = "force-dynamic"

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
                Get competitive pricing on premium industrial equipment and PPE. Our experts will respond within 24 hours with a detailed quote.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="font-bold mb-1">Tell us what you need</div>
                  <div className="text-primary-foreground/80">Product, quantity, delivery timeline</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="font-bold mb-1">We'll prepare your quote</div>
                  <div className="text-primary-foreground/80">Custom pricing & availability within 24hrs</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="font-bold mb-1">You'll receive it directly</div>
                  <div className="text-primary-foreground/80">Via email with next steps to order</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
