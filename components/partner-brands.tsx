"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export function PartnerBrands() {
  const [isPaused, setIsPaused] = useState(false)

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">Authorized Channel Partner for Premium Brands</p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-${brands.length} * (100% + 24px)));
              }
            }

            .carousel-track {
              animation: scroll-left 40s linear ${isPaused ? "paused" : "running"} infinite;
              display: flex;
              gap: 1.5rem;
              width: max-content;
            }

            .carousel-item {
              flex-shrink: 0;
              width: calc((100vw - 2rem) / 7);
              max-width: 160px;
            }

            @media (max-width: 1024px) {
              .carousel-item {
                width: calc((100vw - 2rem) / 6);
                max-width: 140px;
              }
            }

            @media (max-width: 768px) {
              .carousel-item {
                width: calc((100vw - 2rem) / 4);
                max-width: 130px;
              }
            }

            @media (max-width: 640px) {
              .carousel-item {
                width: calc((100vw - 2rem) / 3);
                max-width: 120px;
              }
            }
          `}</style>

          <div className="carousel-track">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="carousel-item group">
                <Card className="relative overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-28 flex items-center justify-center">
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
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
