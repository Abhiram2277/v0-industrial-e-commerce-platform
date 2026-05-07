import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const categories = [
  { slug: "head-protection", name: "Head Protection", icon: "👷" },
  { slug: "foot-protection", name: "Foot Protection", icon: "👢" },
  { slug: "fall-protection", name: "Fall Protection", icon: "⛓️" },
  { slug: "hand-protection", name: "Hand Protection", icon: "🧤" },
  { slug: "harness", name: "Harness", icon: "🔗" },
  { slug: "lanyard", name: "Lanyards", icon: "🪢" },
  { slug: "workwear", name: "Workwear", icon: "👕" },
  { slug: "face-protection", name: "Face Protection", icon: "😷" },
  { slug: "workplace-safety", name: "Workplace Safety Solutions", icon: "🏭" },
  { slug: "work-at-height", name: "Work at Height Safety Equipment", icon: "📍" },
  { slug: "retractable-block", name: "Retractable Block", icon: "⬆️" },
  { slug: "lifeline-height-access", name: "Lifeline & Height Access Equipment", icon: "🪜" },
  { slug: "anchorage-sling", name: "Anchorage Sling & Solutions", icon: "⛓️" },
  { slug: "confined-space-solution", name: "Confined Space Solution", icon: "📦" },
  { slug: "emergency-safety", name: "Emergency Safety Shower & Eyewash", icon: "🚿" },
  { slug: "electrical-safety", name: "Electrical Safety Solutions", icon: "⚡" },
  { slug: "sgbi", name: "SGBI", icon: "🛡️" },
  { slug: "powertools", name: "PowerTools", icon: "🔧" },
]

export const metadata = {
  title: "Shop by Category | PND Industrial Suppliers",
  description: "Browse all product categories from PND Industrial Suppliers. Find head protection, foot protection, safety equipment, and more.",
}

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
            <p className="text-lg text-primary-foreground/90">Browse our complete range of industrial safety equipment and tools</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Browse</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
