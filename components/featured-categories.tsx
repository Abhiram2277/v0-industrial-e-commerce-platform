import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  HardHat,
  Eye,
  Footprints,
  Hand,
  Wrench,
  ShieldAlert,
  ShieldCheck,
  Ear,
  Wind,
  Zap,
  AlertTriangle,
  Anchor,
  Package,
  Flame,
  Droplets,
  HardDrive,
  Bell,
} from "lucide-react"
import Link from "next/link"
import { categories } from "@/lib/products"
import { ArrowRight } from "lucide-react"

const categoryIcons: Record<string, any> = {
  "head-protection": HardHat,
  "eye-protection": Eye,
  "face-protection": ShieldCheck,
  "hearing-protection": Ear,
  "hand-protection": Hand,
  "foot-protection": Footprints,
  "respiratory-protection": Wind,
  workwear: ShieldAlert,
  "electrical-safety": Zap,
  "fall-protection": Anchor,
  "safety-equipment": Bell,
  "workplace-safety": AlertTriangle,
  "confined-space": Droplets,
  "power-tools": Wrench,
  "welding-equipment": Flame,
  sgbi: HardDrive,
  miscellaneous: Package,
}

export function FeaturedCategories() {
  const featuredCategories = categories

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of safety equipment and industrial tools for every workplace need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => {
            const Icon = categoryIcons[category.slug] || Package
            return (
              <Card
                key={category.slug}
                className="group hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {category.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="group/btn">
                    <Link href={`/category/${category.slug}`}>
                      Browse Products
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
