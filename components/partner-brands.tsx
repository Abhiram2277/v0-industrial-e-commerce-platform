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

  // Duplicate brands for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <section className="py-16 bg-background border-y">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">Authorized Channel Partner for Premium Brands</p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div className="scroll-animation group flex gap-6 w-fit">
            {duplicatedBrands.map((brand, index) => (
              <Card
                key={index}
                className="relative overflow-hidden flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            All products are genuine and backed by manufacturer warranties
          </p>
        </div>
      </div>
    </section>
  )
}
