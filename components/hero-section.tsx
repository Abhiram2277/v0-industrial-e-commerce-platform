import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, RotateCcw, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { formatYearsActive } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-primary-foreground" style={{ backgroundColor: "#080d18" }}>
      {/* Background image: full photo anchored right, navy fills the rest (desktop only) */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/images/hero-ppe-inspection.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "right center",
        }}
        aria-hidden="true"
      />
      {/* Horizontal navy gradient: dark on the left, image visible on the right (desktop only) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,13,24,0.97) 0%, rgba(8,13,24,0.85) 35%, rgba(8,13,24,0.45) 65%, rgba(8,13,24,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom gradient for badge legibility (desktop only) */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 hidden md:block"
        style={{ background: "linear-gradient(0deg, rgba(8,13,24,0.55) 0%, rgba(8,13,24,0) 100%)" }}
        aria-hidden="true"
      />
      {/* Soft orange glow, top-right (desktop only) */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full blur-3xl hidden md:block"
        style={{ background: "rgba(232,116,42,0.4)" }}
        aria-hidden="true"
      />

      {/* Mobile image banner: full-bleed natural-ratio photo with badge and bottom fade */}
      <div className="relative md:hidden h-[480px] w-screen overflow-hidden">
        <img
          src="/images/hero-ppe-inspection.jpg"
          alt="Worker inspecting a hard hat beside safety gloves, goggles, ear defenders, boots and a fall-protection harness"
          className="h-full w-full object-cover object-center"
        />
        {/* Bottom fade into the content block */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{ background: "linear-gradient(0deg, #080d18 0%, rgba(8,13,24,0.6) 45%, rgba(8,13,24,0) 100%)" }}
          aria-hidden="true"
        />
        {/* Thin orange accent line at the very bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-1" style={{ backgroundColor: "#e8742a" }} aria-hidden="true" />
        {/* Radial dark gradient behind the badge for legibility */}
        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{ background: "radial-gradient(120% 100% at 20% 0%, rgba(8,13,24,0.55) 0%, rgba(8,13,24,0) 70%)" }}
          aria-hidden="true"
        />
        {/* Badge inside banner, orange-themed to match desktop */}
        <div className="absolute inset-x-0 top-0 p-4">
          <div
            className="inline-block rounded-full px-4 py-1.5 border-2"
            style={{
              backgroundColor: "rgba(232,116,42,0.15)",
              borderColor: "#e8742a",
              color: "#f4b479",
            }}
          >
            <span className="text-xs font-semibold tracking-wide uppercase">Authorized Channel Partner</span>
          </div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-20 lg:py-28">
        <div className="max-w-[600px] space-y-5 md:space-y-6">
          {/* Badge (desktop only; mobile badge lives in the image banner) */}
          <div className="hidden md:inline-block rounded-full bg-accent/15 px-4 py-1.5 text-accent border border-accent/40">
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">
              Authorized Channel Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Authorized PPE and Industrial Safety Equipment Supplier in AP
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-xl text-primary-foreground/80 leading-relaxed">
            Serving Nellore and Kakinada with certified PPE from world-leading brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-semibold w-full sm:w-auto text-sm md:text-base transition-all hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(232,116,42,0.5)]"
            >
              <Link href="/quote">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/70 bg-white/5 backdrop-blur-sm text-sm md:text-base"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="flex flex-col gap-1.5 bg-[#0d1424]/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-accent/40">
              <Truck className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <div>
                <div className="text-xs md:text-sm font-bold text-white">Fast Delivery</div>
                <div className="text-xs text-primary-foreground/70 font-medium">7-10 days</div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 bg-[#0d1424]/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-accent/40">
              <Lock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <div>
                <div className="text-xs md:text-sm font-bold text-white">Secure Payment</div>
                <div className="text-xs text-primary-foreground/70 font-medium">SSL encrypted</div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 bg-[#0d1424]/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-accent/40">
              <RotateCcw className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <div>
                <div className="text-xs md:text-sm font-bold text-white">30-Day</div>
                <div className="text-xs text-primary-foreground/70 font-medium">Replacement</div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 bg-[#0d1424]/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-accent/40">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <div>
                <div className="text-xs md:text-sm font-bold text-white">1-Year</div>
                <div className="text-xs text-primary-foreground/70 font-medium">Warranty</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-primary-foreground/20" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-accent">{formatYearsActive()}</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">Industry Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-accent">152+</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">Registered Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-accent">7+</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">Brand Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
