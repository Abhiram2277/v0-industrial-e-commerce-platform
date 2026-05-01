"use client"

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

  // Duplicate brands array for seamless looping
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <section className="section-spacing bg-background border-y">
      <div className="container mx-auto px-4 section-header-spacing">
        <div className="text-center">
          <h2 className="heading-h2 mb-4 md:mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="body-large text-muted-foreground">Authorized Channel Partner for Premium Brands</p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="marquee-item">
              <div className="relative w-full h-full flex items-center justify-center px-4">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={240}
                  height={160}
                  className="object-contain max-w-[90%] max-h-[90%]"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12 text-center px-4">
        <p className="body-small text-muted-foreground italic">
          All products are genuine and backed by manufacturer warranties
        </p>
      </div>
    </section>
  )
}
