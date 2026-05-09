"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, RotateCcw, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { formatYearsActive } from "@/lib/utils"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ready to Enhance Your Workplace Safety?
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our expert team for personalized safety solutions and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="/quote">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges Below CTA - Enhanced Prominence */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12 md:pt-16">
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-3 md:mb-4">
                <Truck className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <div className="font-bold text-sm md:text-base text-primary-foreground leading-tight">Fast Delivery</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 mt-1 font-medium">7-10 business days</div>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-3 md:mb-4">
                <Lock className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <div className="font-bold text-sm md:text-base text-primary-foreground leading-tight">Secure Payment</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 mt-1 font-medium">SSL encrypted</div>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-3 md:mb-4">
                <RotateCcw className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <div className="font-bold text-sm md:text-base text-primary-foreground leading-tight">30-Day Replacements</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 mt-1 font-medium">Free if defective</div>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-3 md:mb-4">
                <CheckCircle className="h-7 w-7 md:h-8 md:w-8 text-accent" />
              </div>
              <div className="font-bold text-sm md:text-base text-primary-foreground leading-tight">1-Year Warranty</div>
              <div className="text-xs md:text-sm text-primary-foreground/80 mt-1 font-medium">Full coverage</div>
            </div>
          </div>
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm">
            <div>
              <div className="font-bold text-2xl text-accent">152+</div>
              <div className="text-primary-foreground/70">Registered Customers</div>
            </div>
            <div>
              <div className="font-bold text-2xl text-accent">7+</div>
              <div className="text-primary-foreground/70">Brand Partners</div>
            </div>
            <div>
              <div className="font-bold text-2xl text-accent">{formatYearsActive()}</div>
              <div className="text-primary-foreground/70">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
