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
            About Us
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">PND Industrial Suppliers</span> is a trusted distributor
              and supplier of premium-quality industrial products, established in{" "}
              <span className="font-semibold text-foreground">2020</span> with headquarters in{" "}
              <span className="font-semibold text-foreground">Nellore, Andhra Pradesh</span>. We recently expanded our
              operations to <span className="font-semibold text-accent">Kakinada</span> to better serve our growing
              customer base. We specialize in providing end-to-end industrial supply solutions with a strong focus on
              safety, reliability, and timely delivery.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are authorized distributors and channel partners for leading brands such as{" "}
              <span className="font-semibold text-foreground">
                UDYOGI, Hillson, Bosch, Dewalt, Ador Welding, Safepro Fire, and Asian Industrial Paints
              </span>
              .
            </p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-foreground">
                  With operations in <span className="font-semibold">Nellore</span> and{" "}
                  <span className="font-semibold text-accent">Kakinada</span> across South India and a growing base of
                  over <span className="font-semibold text-accent">152 registered customers</span>, we cater to diverse
                  industrial segments by delivering consistent quality and dependable service from both branches.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Our Specializations
            </h3>
            <div className="grid gap-3">
              {specializations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-all border-l-4 border-l-accent">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Mission Statement
                </h3>
              </div>
              <div className="inline-block rounded-full bg-accent/10 px-4 py-2 text-accent border border-accent/20 mb-4">
                <span className="text-base font-semibold">"Customer is our God."</span>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                To be recognized as a premier industrial service provider in South India through unwavering commitment,
                superior service standards, and complete customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Vision Statement
                </h3>
              </div>
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-primary border border-primary/20 mb-4">
                <span className="text-base font-semibold">"To Be a Frontrunner."</span>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                To deliver high-quality products on time with guaranteed performance, consistently exceeding customer
                expectations through reliable and comprehensive industrial supply solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
