import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-semibold">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 text-accent border border-accent/20">
              <span className="text-sm font-semibold">Authorized Channel Partner</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Your Premier Partner for <span className="text-accent">Industrial Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              Serving from Nellore and Kakinada, we specialize in high-quality Personal Protective Equipment and industrial tools from
              world-leading brands. Guided by our philosophy:{" "}
              <span className="font-semibold text-accent">"Life is Precious"</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-bold text-accent">6+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-primary-foreground/70">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">7+</div>
                <div className="text-sm text-primary-foreground/70">Partner Brands</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border py-5">
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
              <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/30 px-6 py-10">
                <p className="text-2xl font-bold text-accent mb-2">"Life is Precious"</p>
                <p className="text-sm text-card-foreground">Our guiding philosophy in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
