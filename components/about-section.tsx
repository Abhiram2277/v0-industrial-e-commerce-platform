import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Eye, Shield, Zap, AlertTriangle, Briefcase, Flame } from "lucide-react"

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
    <section className="py-8 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12">
          <h2
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-balance"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About Us
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-4 md:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start mb-8 md:mb-16">
          <div className="space-y-3 md:space-y-6">
            <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">PND Industrial Suppliers</span> is a trusted distributor
              and supplier of premium-quality industrial products, established in{" "}
              <span className="font-semibold text-foreground">2020</span> with headquarters in{" "}
              <span className="font-semibold text-foreground">Nellore, Andhra Pradesh</span>. We recently expanded our
              operations to <span className="font-semibold text-accent">Kakinada</span> to better serve our growing
              customer base. We specialize in providing end-to-end industrial supply solutions with a strong focus on
              safety, reliability, and timely delivery.
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
              We are authorized distributors and channel partners for leading brands such as{" "}
              <span className="font-semibold text-foreground">
                UDYOGI, Hillson, Bosch, Dewalt, Ador Welding, Safepro Fire, and Asian Industrial Paints
              </span>
              .
            </p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-3 md:pt-6">
                <p className="text-xs md:text-base leading-relaxed text-foreground">
                  With operations in <span className="font-semibold">Nellore</span> and{" "}
                  <span className="font-semibold text-accent">Kakinada</span> across South India and a growing base of
                  over <span className="font-semibold text-accent">152 registered customers</span>, we cater to diverse
                  industrial segments by delivering consistent quality and dependable service from both branches.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Our Specializations
            </h3>
            <div className="hidden lg:grid grid-cols-1 gap-3">
              {specializations.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-base font-medium group-hover:text-accent transition-colors">{item.title}</span>
                  </div>
                )
              })}
            </div>
            <div className="lg:hidden grid grid-cols-2 gap-2">
              {specializations.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1.5 bg-card p-2 rounded-lg border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-xs font-medium group-hover:text-accent transition-colors text-center leading-tight">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-all border-l-4 border-l-accent">
            <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="h-10 md:h-12 w-10 md:w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Mission Statement
                </h3>
              </div>
              <div className="inline-block rounded-full bg-accent/10 px-3 md:px-4 py-1 md:py-2 text-accent border border-accent/20 mb-2 md:mb-4">
                <span className="text-xs md:text-base font-semibold">"Reliability Through Performance"</span>
              </div>
              <p className="text-xs md:text-base leading-relaxed text-muted-foreground">
                To provide industrial buyers with dependable, high-quality products and exceptional service through rapid delivery, technical support, and consistent quality—eliminating supply chain risks for our customers.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
            <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="h-10 md:h-12 w-10 md:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-5 md:h-6 w-5 md:w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Vision Statement
                </h3>
              </div>
              <div className="inline-block rounded-full bg-primary/10 px-3 md:px-4 py-1 md:py-2 text-primary border border-primary/20 mb-2 md:mb-4">
                <span className="text-xs md:text-base font-semibold">"Your Trusted Supply Partner"</span>
              </div>
              <p className="text-xs md:text-base leading-relaxed text-muted-foreground">
                To be the most reliable industrial supplier in South India by maintaining consistent product availability, on-time delivery, competitive pricing, and responsive customer support that industrial buyers depend on.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
