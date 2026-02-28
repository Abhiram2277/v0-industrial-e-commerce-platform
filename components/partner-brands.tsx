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

  // Duplicate brands for seamless looping
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16 bg-background border-y overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">Authorized Channel Partner for Premium Brands</p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="carousel-scroll flex gap-6">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: "calc((100vw - 2rem - 24px * 6) / 7)",
                  minWidth: "120px",
                }}
              >
                <Card
                  className="relative overflow-hidden h-32 bg-white hover:shadow-lg transition-all hover:border-accent/50 hover:-translate-y-1 aspect-square flex items-center justify-center group cursor-pointer"
                >
                  <div className="relative w-full h-full p-3">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            All products are genuine and backed by manufacturer warranties
          </p>
        </div>
      </div>
    </section>
  )
}
