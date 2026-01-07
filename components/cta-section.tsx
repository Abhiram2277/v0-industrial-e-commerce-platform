"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm">
            <div>
              <div className="font-bold text-2xl text-accent">24/7</div>
              <div className="text-primary-foreground/70">Customer Support</div>
            </div>
            <div>
              <div className="font-bold text-2xl text-accent">100%</div>
              <div className="text-primary-foreground/70">Genuine Products</div>
            </div>
            <div>
              <div className="font-bold text-2xl text-accent">Fast</div>
              <div className="text-primary-foreground/70">Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
