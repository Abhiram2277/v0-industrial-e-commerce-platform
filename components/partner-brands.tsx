"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export function PartnerBrands() {
  const brands = [
    { name: "Udyogi Safety", logo: "/images/brands/udyogi-logo.png" },
    { name: "Bosch", logo: "/images/brands/bosch-logo.jpg" },
    { name: "DeWalt", logo: "/images/brands/dewalt-logo.jpg" },
    { name: "Stanley", logo: "/images/brands/stanley-logo.jpg" },
    { name: "Hillson", logo: "/images/brands/hillson-logo.jpg" },
    { name: "Ador Welding", logo: "/images/brands/ador-logo.jpg" },
    { name: "Black+Decker", logo: "/images/brands/black-decker-logo.jpg" },
  ]

  return (
    <section className="py-8 md:py-16 bg-background border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">Authorized Channel Partner for Premium Brands</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-all hover:border-accent/50 bg-white hover:-translate-y-1 aspect-square"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain p-2 my-0 py-0 px-0"
                loading="lazy"
                quality={80}
              />
            </Card>
          ))}
        </div>

        <div className="mt-4 md:mt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground italic">
            All products are genuine and backed by manufacturer warranties
          </p>
        </div>
      </div>
    </section>
  )
}
