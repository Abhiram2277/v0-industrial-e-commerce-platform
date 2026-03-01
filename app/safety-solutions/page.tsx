import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingBackButton } from "@/components/floating-back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  HardHat, 
  Eye, 
  Shield, 
  Hand, 
  Ear, 
  Wind, 
  Shirt, 
  Zap, 
  AlertTriangle, 
  Flame,
  ArrowRight,
  CheckCircle,
  Footprints,
  Siren,
  Construction,
  Building2,
  Link2
} from "lucide-react"

export default function SafetySolutionsPage() {
  const safetySolutions = [
    {
      title: "Head Protection",
      description: "Industrial safety helmets, hard hats, and bump caps for complete head protection",
      icon: HardHat,
      slug: "head-protection",
      image: "/images/categories/head-protection.jpg",
      features: ["Impact Protection", "Electrical Insulation", "Heat Resistance", "Ventilated Options"]
    },
    {
      title: "Eye Protection",
      description: "Safety glasses, goggles, and spectacles for eye safety in industrial environments",
      icon: Eye,
      slug: "eye-protection",
      image: "/images/categories/eye-protection.jpg",
      features: ["UV Protection", "Anti-Fog Coating", "Impact Resistant", "Prescription Compatible"]
    },
    {
      title: "Face Protection",
      description: "Face shields, welding masks, and arc flash protection for complete face safety",
      icon: Shield,
      slug: "face-protection",
      image: "/images/categories/face-protection.jpg",
      features: ["Full Face Coverage", "Arc Flash Rated", "Chemical Splash", "Welding Protection"]
    },
    {
      title: "Hand Protection",
      description: "Industrial gloves for mechanical, chemical, and thermal protection",
      icon: Hand,
      slug: "hand-protection",
      image: "/images/categories/hand-protection.jpg",
      features: ["Cut Resistant", "Chemical Resistant", "Heat Resistant", "Grip Enhancement"]
    },
    {
      title: "Foot Protection",
      description: "Safety shoes and boots for various industrial applications with toe protection",
      icon: Footprints,
      slug: "foot-protection",
      image: "/images/categories/foot-protection.jpg",
      features: ["Steel Toe Cap", "Anti-Slip Sole", "Oil Resistant", "ESD Protection"]
    },
    {
      title: "Hearing Protection",
      description: "Earplugs and earmuffs for noise reduction in high-decibel environments",
      icon: Ear,
      slug: "hearing-protection",
      image: "/images/categories/hearing-protection.jpg",
      features: ["High NRR Rating", "Comfortable Fit", "Reusable Options", "Communication Compatible"]
    },
    {
      title: "Respiratory Protection",
      description: "Respirators, masks, and filters for protection against airborne hazards",
      icon: Wind,
      slug: "respiratory-protection",
      image: "/images/categories/respiratory-protection.jpg",
      features: ["Particle Filtration", "Gas & Vapor Protection", "NIOSH Approved", "Comfortable Seal"]
    },
    {
      title: "Body Protection",
      description: "Workwear, coveralls, and protective clothing for full body protection",
      icon: Shirt,
      slug: "workwear",
      image: "/images/categories/workwear.jpg",
      features: ["Flame Retardant", "Chemical Resistant", "High Visibility", "Arc Flash Rated"]
    },
    {
      title: "Electrical Safety",
      description: "Insulated tools, gloves, and equipment for electrical hazard protection",
      icon: Zap,
      slug: "electrical-safety",
      image: "/images/categories/electrical-safety.jpg",
      features: ["High Voltage Rated", "Insulated Tools", "Arc Flash PPE", "Testing Equipment"]
    },
    {
      title: "Fall Protection - Harness",
      description: "Full body harnesses for fall arrest and work positioning at heights",
      icon: AlertTriangle,
      slug: "harness",
      image: "/images/categories/harness.jpg",
      features: ["Full Body Harness", "Work Positioning", "Fall Arrest", "Rescue Ready"]
    },
    {
      title: "Arc & Heat Protection",
      description: "Arc flash suits and heat protection equipment for extreme conditions",
      icon: Flame,
      slug: "arc-heat-protection",
      image: "/images/categories/arc-heat-protection.jpg",
      features: ["High CAL Rating", "Complete Coverage", "Breathable Design", "NFPA Compliant"]
    },
    {
      title: "Emergency Safety",
      description: "Emergency eyewash stations, safety showers, and first response equipment",
      icon: Siren,
      slug: "emergency-safety",
      image: "/images/categories/emergency-safety.jpg",
      features: ["Eyewash Stations", "Safety Showers", "Combination Units", "Portable Units"]
    },
    {
      title: "SGBI - Safety Guards & Barriers",
      description: "Safety guards, barriers, bollards, and visual indicators for workplace safety",
      icon: Construction,
      slug: "sgbi",
      image: "/images/categories/sgbi.jpg",
      features: ["Machine Guards", "Safety Barriers", "Bollards", "Visual Indicators"]
    },
    {
      title: "Workplace Safety",
      description: "Anti-skid tapes, floor marking, safety signs, and workplace safety products",
      icon: Building2,
      slug: "workplace-safety",
      image: "/images/categories/workplace-safety.jpg",
      features: ["Anti-Skid Tapes", "Floor Marking", "Safety Signs", "Hazard Labels"]
    },
    {
      title: "Anchorage Sling & Solutions",
      description: "Anchorage points, slings, and connectors for fall protection systems",
      icon: Link2,
      slug: "anchorage-sling",
      image: "/images/categories/anchorage-sling.jpg",
      features: ["Anchorage Points", "Slings", "Connectors", "Temporary Anchors"]
    },
  ]

  const industries = [
    "Oil & Gas",
    "Manufacturing",
    "Construction",
    "Power & Energy",
    "Chemical Processing",
    "Mining",
    "Pharmaceuticals",
    "Food Processing",
    "Automotive",
    "Steel & Metal"
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Industrial Safety Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Comprehensive personal protective equipment and safety solutions for every industry. 
                Protecting your workforce with premium quality products from leading global brands.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/contact">Contact Our Experts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Safety Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of safety equipment designed to protect workers across all industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetySolutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                        <IconComponent className="h-6 w-6" />
                        <span className="font-semibold text-lg">{solution.title}</span>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs">
                            <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground bg-transparent">
                        <Link href={`/category/${solution.slug}`}>
                          View Products <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Industries We Serve
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our safety solutions are trusted by leading companies across diverse industrial sectors
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-background rounded-full text-sm font-medium border hover:border-accent hover:text-accent transition-colors"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-accent/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl md:text-3xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Why Choose PND Industrial Suppliers?
                  </CardTitle>
                  <CardDescription className="text-base">
                    Your trusted partner for all industrial safety requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Authorized Distributor</h4>
                          <p className="text-sm text-muted-foreground">Official channel partner for Udyogi, Bosch, Hillson, and more</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">100% Genuine Products</h4>
                          <p className="text-sm text-muted-foreground">All products come with manufacturer warranty and certification</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Expert Consultation</h4>
                          <p className="text-sm text-muted-foreground">Technical support to help you select the right safety equipment</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Competitive Pricing</h4>
                          <p className="text-sm text-muted-foreground">Best prices with bulk order discounts for businesses</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Pan-India Delivery</h4>
                          <p className="text-sm text-muted-foreground">Fast and reliable shipping to all locations across India</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">After-Sales Support</h4>
                          <p className="text-sm text-muted-foreground">Dedicated support for replacements, repairs, and queries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Need Help Selecting Safety Equipment?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our safety experts are ready to help you find the right protective equipment for your specific requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/quote">Get a Custom Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground hover:bg-accent-foreground hover:text-accent">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <FloatingBackButton />
    </div>
  )
}
