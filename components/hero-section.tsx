import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users, Truck, RotateCcw, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center font-semibold">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1.5 text-accent border border-accent/20">
              <span className="text-xs md:text-sm font-semibold">Authorized Channel Partner</span>
            </div>
            <h1
              className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-balance"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Authorized PPE & <span className="text-accent">Industrial Safety</span> Equipment Supplier in Nellore & Kakinada, Andhra Pradesh
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-foreground/90 leading-relaxed">
              Your Premier Partner for Industrial Excellence
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
              Serving from Nellore and Kakinada, we specialize in high-quality PPE and industrial tools from world-leading brands. Guided by our philosophy: <span className="font-semibold text-accent">"Life is Precious"</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <div>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto text-sm md:text-base">
                  <Link href="/quote">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>
                <p className="text-xs text-primary-foreground/70 mt-1">Response within 24 hours • No obligation</p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-sm md:text-base"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges - Enhanced Prominence */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8 border-t border-primary-foreground/20">
              <div className="flex items-start gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <Truck className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-primary-foreground">Fast Delivery</div>
                  <div className="text-xs text-primary-foreground/80 font-medium">7-10 days</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <Lock className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-primary-foreground">Secure Payment</div>
                  <div className="text-xs text-primary-foreground/80 font-medium">SSL encrypted</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <RotateCcw className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-primary-foreground">30-Day</div>
                  <div className="text-xs text-primary-foreground/80 font-medium">Replacement</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-primary-foreground">1-Year</div>
                  <div className="text-xs text-primary-foreground/80 font-medium">Warranty</div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">6 Yrs</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Industry Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">152+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Registered Customers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">7+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">Brand Partners</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <Shield className="h-10 w-10 text-accent mb-4" />
                <h3
                  className="font-bold text-lg mb-2 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Premium PPE
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete range of personal protective equipment for workplace safety
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <Award className="h-10 w-10 text-accent mb-4" />
                <h3
                  className="font-bold text-lg mb-2 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Certified Products
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All products meet international safety standards
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h3
                  className="font-bold text-lg mb-2 text-card-foreground"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Expert Support
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated team to help you choose the right safety solutions
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-accent/30">
                <p className="text-2xl font-bold text-accent mb-2">"Life is Precious"</p>
                <p className="text-sm font-medium text-primary">Our guiding philosophy in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
