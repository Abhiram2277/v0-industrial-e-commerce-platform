import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PartnerBrands } from "@/components/partner-brands"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function BrandsPage() {
  const brands = [
    {
      name: "Udyogi Safety PPE",
      description: "Leading manufacturer of personal protective equipment",
      products: ["Safety Helmets", "Eye Protection", "Face Shields", "Industrial Gloves", "Safety Shoes"],
    },
    {
      name: "Bosch Tools",
      description: "World-class power tools and accessories",
      products: ["Angle Grinders", "Drills", "Rotary Hammers", "Sanders", "Measuring Tools"],
    },
    {
      name: "DeWalt",
      description: "Professional-grade power tools and hand tools",
      products: ["Cordless Drills", "Impact Drivers", "Circular Saws", "Tool Sets", "Accessories"],
    },
    {
      name: "Stanley",
      description: "Trusted hand tools and storage solutions",
      products: ["Hand Tools", "Power Tools", "Measuring Tools", "Storage Systems", "Safety Equipment"],
    },
    {
      name: "Hillson Shoes",
      description: "Premium safety footwear manufacturer",
      products: ["Safety Shoes", "Safety Boots", "Gumboots", "ESD Footwear", "Specialized Footwear"],
    },
    {
      name: "Ador Welding",
      description: "Complete welding solutions provider",
      products: ["Welding Electrodes", "MIG Wire", "Welding Equipment", "Accessories", "Consumables"],
    },
    {
      name: "Black+Decker",
      description: "Innovative power tools and accessories",
      products: ["Power Drills", "Jigsaws", "Sanders", "Screwdrivers", "Garden Tools"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Our Partner Brands
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Authorized channel partner for world-leading industrial equipment and safety brands
              </p>
            </div>
          </div>
        </section>

        <PartnerBrands />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Brand Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of products from industry-leading manufacturers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {brand.name}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{brand.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-sm mb-3">Product Categories:</h4>
                    <ul className="space-y-2">
                      {brand.products.map((product, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-accent/50">
              <CardContent className="pt-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Why Our Brand Partnerships Matter
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As an authorized channel partner, we guarantee 100% genuine products, full manufacturer warranties,
                    and direct technical support. Our relationships with these industry leaders enable us to offer
                    competitive pricing, latest product availability, and expert guidance on selecting the right
                    equipment for your specific needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
