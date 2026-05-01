import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users, Truck, RotateCcw, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1.5 text-accent border border-accent/20">
              <span className="body-small font-semibold">Authorized Channel Partner</span>
            </div>
            <h1
              className="heading-h1"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Your Premier Partner for <span className="text-accent">Industrial Excellence</span>
            </h1>
            <p className="body-large text-primary-foreground/90 leading-relaxed">
              Serving from Nellore and Kakinada, we specialize in high-quality PPE and industrial tools from world-leading brands. Guided by our philosophy: <span className="font-semibold text-accent">"Life is Precious"</span>
            </p>
            <div className="flex flex-col sm:flex-row card-button-gap">
              <div>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto">
                  <Link href="/quote">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>
                <p className="body-small text-primary-foreground/70 mt-1">Response within 24 hours • No obligation</p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges - Enhanced with Consistent Styling */}
            <div className="grid grid-cols-2 md:grid-cols-4 card-gap pt-8 md:pt-12 border-t border-primary-foreground/20">
              <div className="flex items-start gap-3 container-grouped rounded-lg card-spacing hover:container-grouped-hover transition-all">
                <Truck className="icon-medium text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="label-text text-primary-foreground">Fast Delivery</div>
                  <div className="body-small text-primary-foreground/80">7-10 days</div>
                </div>
              </div>
              <div className="flex items-start gap-3 container-grouped rounded-lg card-spacing hover:container-grouped-hover transition-all">
                <Lock className="icon-medium text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="label-text text-primary-foreground">Secure Payment</div>
                  <div className="body-small text-primary-foreground/80">SSL encrypted</div>
                </div>
              </div>
              <div className="flex items-start gap-3 container-grouped rounded-lg card-spacing hover:container-grouped-hover transition-all">
                <RotateCcw className="icon-medium text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="label-text text-primary-foreground">30-Day</div>
                  <div className="body-small text-primary-foreground/80">Replacement</div>
                </div>
              </div>
              <div className="flex items-start gap-3 container-grouped rounded-lg card-spacing hover:container-grouped-hover transition-all">
                <CheckCircle className="icon-medium text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="label-text text-primary-foreground">1-Year</div>
                  <div className="body-small text-primary-foreground/80">Warranty</div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 md:pt-12 border-t border-primary-foreground/20">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">6+</div>
                <div className="body-small text-primary-foreground/70">Years</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">1000+</div>
                <div className="body-small text-primary-foreground/70">Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">7+</div>
                <div className="body-small text-primary-foreground/70">Brands</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 card-gap">
            <div className="space-y-4">
              <div className="bg-card rounded-xl card-spacing shadow hover:shadow-lg transition-all border border-border">
                <Shield className="icon-large text-accent mb-4" />
                <h3
                  className="heading-h3 mb-2 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Premium PPE
                </h3>
                <p className="body-small text-muted-foreground leading-relaxed">
                  Complete range of personal protective equipment for workplace safety
                </p>
              </div>
              <div className="bg-card rounded-xl card-spacing shadow hover:shadow-lg transition-all border border-border">
                <Award className="icon-large text-accent mb-4" />
                <h3
                  className="heading-h3 mb-2 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Certified Products
                </h3>
                <p className="body-small text-muted-foreground leading-relaxed">
                  All products meet international safety standards
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-card rounded-xl card-spacing shadow hover:shadow-lg transition-all border border-border">
                <Users className="icon-large text-accent mb-4" />
                <h3
                  className="heading-h3 mb-2 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Expert Support
                </h3>
                <p className="body-small text-muted-foreground leading-relaxed">
                  Dedicated team to help you choose the right safety solutions
                </p>
              </div>
              <div className="bg-white rounded-xl card-spacing border-primary-visual">
                <p className="text-2xl font-bold text-accent mb-2">"Life is Precious"</p>
                <p className="body-small font-medium text-primary">Our guiding philosophy in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
