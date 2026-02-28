import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AboutSection } from "@/components/about-section"
import { PartnerBrands } from "@/components/partner-brands"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize workplace safety above all, guided by our philosophy: Life is Precious",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Only genuine, certified products from authorized channels meeting international standards",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support and expert guidance to help you choose the right safety solutions",
    },
    {
      icon: Zap,
      title: "Industry Expertise",
      description: "6+ years of experience serving industrial clients across South India",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                About PND Industrial Suppliers
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Your trusted partner for industrial safety and excellence since 2020 • Serving from Nellore & Kakinada
              </p>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at PND Industrial Suppliers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <PartnerBrands />

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Our Growing Presence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expanding our reach across South India to serve you better
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Nellore Branch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our headquarters and primary operational hub, serving the Nellore region and surrounding areas with
                    comprehensive industrial supply solutions.
                  </p>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground font-semibold">Est. 2020</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-center text-accent" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Kakinada Branch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our newest expansion, bringing premium industrial products and expertise to Kakinada and the
                    surrounding region with the same commitment to quality.
                  </p>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-accent font-semibold">Recently Launched</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Official Certifications & Authorizations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are proud authorized dealers and channel partners for leading industrial brands
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:border-accent/50 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4]">
                    <img
                      src="/images/authorised-20distributor-20to-20-20udyogi-page-0001.jpg"
                      alt="UDYOGI Authorized Distributor Certificate"
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                  <div className="p-4 bg-secondary/30">
                    <h3 className="font-bold text-lg text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      UDYOGI Safety Equipment
                    </h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:border-accent/50 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4]">
                    <img
                      src="/images/hillson-20authorization-20certificate-page-0001.jpg"
                      alt="Hillson Authorized Dealer Certificate"
                      className="w-full h-full object-contain bg-white"
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  </div>
                  <div className="p-4 bg-secondary/30">
                    <h3 className="font-bold text-lg text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Hillson Shoes
                    </h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:border-accent/50 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4]">
                    <img
                      src="/images/authorised-20distributor-20-20bosch-page-0001.jpg"
                      alt="Bosch Authorized Dealer Certificate"
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                  <div className="p-4 bg-secondary/30">
                    <h3 className="font-bold text-lg text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Bosch Power Tools
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-full bg-accent/10 px-6 py-3 text-accent border border-accent/20 mb-6">
                <span className="text-lg font-semibold">"Life is Precious"</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At PND Industrial Suppliers, we believe that every life is precious. This core philosophy drives our
                commitment to providing the highest quality personal protective equipment and industrial tools. We
                understand that behind every safety product is a worker, a family, and a community that depends on their
                well-being.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our partnership with world-leading brands like UDYOGI, Hillson, Bosch, Dewalt, Ador Welding, Safepro
                Fire, and Asian Industrial Paints ensures that we can offer you the best protection and performance
                available in the market today.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
