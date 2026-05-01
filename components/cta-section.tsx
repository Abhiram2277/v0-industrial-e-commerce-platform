"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, RotateCcw, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="section-spacing-lg bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            className="heading-h1 text-balance"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ready to Enhance Your Workplace Safety?
          </h2>
          <p className="body-large text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our expert team for personalized safety solutions and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row card-button-gap justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="/quote">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges Below CTA - Standardized with Design System */}
          <div className="grid grid-cols-2 md:grid-cols-4 card-gap pt-12 md:pt-16">
            <div className="flex flex-col items-center text-center container-grouped rounded-xl card-spacing hover:container-grouped-hover transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-4 md:mb-6">
                <Truck className="icon-large text-accent" />
              </div>
              <div className="label-text text-primary-foreground leading-tight">Fast Delivery</div>
              <div className="body-small text-primary-foreground/80 mt-2 font-medium">7-10 business days</div>
            </div>
            <div className="flex flex-col items-center text-center container-grouped rounded-xl card-spacing hover:container-grouped-hover transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-4 md:mb-6">
                <Lock className="icon-large text-accent" />
              </div>
              <div className="label-text text-primary-foreground leading-tight">Secure Payment</div>
              <div className="body-small text-primary-foreground/80 mt-2 font-medium">SSL encrypted</div>
            </div>
            <div className="flex flex-col items-center text-center container-grouped rounded-xl card-spacing hover:container-grouped-hover transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-4 md:mb-6">
                <RotateCcw className="icon-large text-accent" />
              </div>
              <div className="label-text text-primary-foreground leading-tight">30-Day Replacements</div>
              <div className="body-small text-primary-foreground/80 mt-2 font-medium">Free if defective</div>
            </div>
            <div className="flex flex-col items-center text-center container-grouped rounded-xl card-spacing hover:container-grouped-hover transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 rounded-full p-3 mb-4 md:mb-6">
                <CheckCircle className="icon-large text-accent" />
              </div>
              <div className="label-text text-primary-foreground leading-tight">1-Year Warranty</div>
              <div className="body-small text-primary-foreground/80 mt-2 font-medium">Full coverage</div>
            </div>
          </div>
          <div className="pt-12 md:pt-16 flex flex-wrap justify-center card-gap text-sm">
            <div>
              <div className="text-3xl font-bold text-accent">152+</div>
              <div className="body-small text-primary-foreground/70">Registered Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">7+</div>
              <div className="body-small text-primary-foreground/70">Brand Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">6 Yrs</div>
              <div className="body-small text-primary-foreground/70">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
