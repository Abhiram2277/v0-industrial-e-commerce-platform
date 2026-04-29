import { Shield, Zap, AlertTriangle, Briefcase, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const specializations = [
    { title: "Personal Protective Equipment (PPE)", icon: Shield },
    { title: "Industrial Power Tools", icon: Zap },
    { title: "Safety & Emergency Equipment", icon: AlertTriangle },
    { title: "Workwear & Arc Flash Protection", icon: Briefcase },
    { title: "Gas Detection Systems", icon: AlertTriangle },
    { title: "Welding Equipment & Supplies", icon: Flame },
  ]

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Centered About Us Heading - Desktop Only */}
        <div className="hidden md:block text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            About Us
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">PND Industrial Suppliers</span> is a trusted distributor and
              supplier of premium-quality industrial products, established in{" "}
              <span className="font-bold text-foreground">2020</span> with headquarters in{" "}
              <span className="font-bold text-foreground">Nellore, Andhra Pradesh</span>. We recently expanded our
              operations to <span className="font-bold text-accent">Kakinada</span> to better serve our growing
              customer base. We specialize in providing end-to-end industrial supply solutions with a strong focus on
              safety, reliability, and timely delivery.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              We are authorized distributors and channel partners for leading brands such as{" "}
              <span className="font-bold text-foreground">
                UDYOGI, Hillson, Bosch, Dewalt, Ador Welding, Safepro Fire, and Asian Industrial Paints
              </span>
              .
            </p>

            <Card className="bg-background border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-foreground">
                  With operations in <span className="font-bold">Nellore</span> and{" "}
                  <span className="font-bold text-accent">Kakinada</span> across South India and a growing base of
                  over <span className="font-bold text-accent">152 registered customers</span>, we cater to diverse
                  industrial segments by delivering consistent quality and dependable service from both branches.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Specializations */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Our Specializations
            </h2>

            {/* Mobile: 2-column grid, Desktop: Single column with cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
              {specializations.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 md:bg-secondary/50 rounded md:rounded-lg border border-transparent md:border-border hover:border-accent/30 transition-colors group"
                  >
                    <div className="h-8 w-8 md:h-6 md:w-6 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 md:h-5 md:w-5 text-accent" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-foreground leading-tight md:leading-normal">
                      {item.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
