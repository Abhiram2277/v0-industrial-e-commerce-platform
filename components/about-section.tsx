import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Eye } from "lucide-react"

export function AboutSection() {
  const specializations = [
    "Personal Protective Equipment (PPE)",
    "Industrial Power Tools",
    "Safety & Emergency Equipment",
    "Workwear & Arc Flash Protection",
    "Gas Detection Systems",
    "Welding Equipment & Supplies",
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-balance"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About PND Industrial Suppliers
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Since <span className="font-semibold text-foreground">2020</span>, PND Industrial Suppliers has been your
              trusted partner for premium industrial products. Now serving from both{" "}
              <span className="font-semibold text-foreground">Nellore</span> and{" "}
              <span className="font-semibold text-accent">Kakinada</span>, we bring safety and quality to over{" "}
              <span className="font-semibold text-accent">152+ registered customers</span> across South India.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We specialize in Personal Protective Equipment (PPE), industrial tools, and safety solutions from world
              leading brands, delivered with unwavering commitment to quality and reliability.
            </p>
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 text-accent border border-accent/20">
              <span className="text-sm font-semibold">"Life is Precious" - Our Guiding Philosophy</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Our Core Offerings
            </h3>
            <div className="grid gap-3">
              {specializations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card p-3 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Authorized channel partners for <span className="font-semibold">UDYOGI, Hillson, Bosch, Dewalt, Ador Welding, Safepro Fire, and Asian Industrial Paints</span>
          </p>
          <a
            href="/about"
            className="mt-6 inline-block text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            Learn More About Us →
          </a>
        </div>
      </div>
    </section>
  )
}
