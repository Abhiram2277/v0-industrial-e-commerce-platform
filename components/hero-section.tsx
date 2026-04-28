import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Industrial Excellence, <span className="text-accent">Delivered</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Premium PPE and industrial tools from world-leading brands, serving Nellore and Kakinada with expertise and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/quote">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Information Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">6+</div>
              <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm md:text-base text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">7+</div>
              <div className="text-sm md:text-base text-muted-foreground">Partner Brands</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="border-t pt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3
                  className="font-bold text-lg mb-3 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Premium PPE
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete range of personal protective equipment for workplace safety
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
                <Award className="h-12 w-12 text-accent mb-4" />
                <h3
                  className="font-bold text-lg mb-3 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Certified Products
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All products meet international safety standards
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3
                  className="font-bold text-lg mb-3 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Expert Support
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated team to help you choose the right safety solutions
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="text-center mt-16 pt-16 border-t">
            <p className="text-2xl md:text-3xl font-bold text-accent mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              "Life is Precious"
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Our guiding philosophy that drives everything we do—from product selection to customer service
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
