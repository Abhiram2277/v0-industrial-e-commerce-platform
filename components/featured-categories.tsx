"use client"

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
  Cable,
} from "lucide-react"
import Link from "next/link"
import { getAllCategoriesClient } from "@/lib/products-combined-client"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

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
  lanyard: Cable, // Added icon for lanyard category
}

export function FeaturedCategories() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCategoriesClient().then((cats) => {
      setCategories(cats)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p>Loading categories...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Shop by Category
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive range of safety equipment and industrial tools for every workplace need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug] || Package
            return (
              <Card
                key={category.slug}
                className="group hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1"
              >
                <CardHeader className="pb-2 md:pb-4">
                  <div className="mb-3 md:mb-6 inline-flex h-10 md:h-14 w-10 md:w-14 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-5 md:h-7 w-5 md:w-7" />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {category.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed mt-1 md:mt-2 line-clamp-2 text-xs md:text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="ghost" className="group/btn text-xs md:text-sm">
                    <Link href={`/category/${category.slug}`}>
                      Browse Products
                      <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4 transition-transform group-hover/btn:translate-x-1" />
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
