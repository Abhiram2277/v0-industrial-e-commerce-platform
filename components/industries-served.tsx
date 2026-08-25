"use client"

import Image from "next/image"

export function IndustriesServed() {
  const clients = [
    { name: "Reliance Industries Limited", logo: "/images/clients/reliance.png" },
    { name: "Tata Chemicals", logo: "/images/clients/tata-chemicals.png" },
    { name: "LG", logo: "/images/clients/lg.png" },
    { name: "Dodla Dairy", logo: "/images/clients/dodla.jpeg" },
    { name: "Coromandel", logo: "/images/clients/coromandel.png" },
    { name: "Amara Raja Power & Chemicals", logo: "/images/clients/amara-raja.png" },
    { name: "Continental Coffee", logo: "/images/clients/continental-coffee.png" },
    { name: "Jindal Steel & Power", logo: "/images/clients/jindal.png" },
    { name: "AM Green", logo: "/images/clients/am-green.jpg" },
    { name: "Patanjali", logo: "/images/clients/patanjali.png" },
  ]

  // Duplicate clients array for seamless looping
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-8 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Industries Served
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Trusted by leading names across power, chemicals, steel, and manufacturing sectors
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="marquee-container">
        <div className="marquee-track" style={{ "--marquee-items": clients.length } as React.CSSProperties}>
          {duplicatedClients.map((client, index) => (
            <div key={index} className="marquee-item">
              <div className="relative w-full h-full flex items-center justify-center px-4 rounded-lg bg-background border">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={240}
                  height={160}
                  className="object-contain max-w-[80%] max-h-[70%]"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
