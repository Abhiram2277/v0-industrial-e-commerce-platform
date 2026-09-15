"use client"

import Image from "next/image"

export function IndustriesServed() {
  const clients = [
    { name: "Reliance Industries Limited", logo: "/images/clients/reliance.png" },
    { name: "Tata Chemicals", logo: "/images/clients/tata-chemicals-v2.png" },
    { name: "LG", logo: "/images/clients/lg.png" },
    { name: "Dodla Dairy", logo: "/images/clients/dodla.jpeg" },
    { name: "Coromandel", logo: "/images/clients/coromandel.png" },
    { name: "Amara Raja Power & Chemicals", logo: "/images/clients/amara-raja.png" },
    { name: "Continental Coffee", logo: "/images/clients/continental-coffee.png" },
    { name: "Jindal Steel & Power", logo: "/images/clients/jindal.png" },
    { name: "AM Green", logo: "/images/clients/am-green.jpg" },
    { name: "Patanjali", logo: "/images/clients/patanjali.png" },
    { name: "Blue Star", logo: "/images/clients/blue-star.jpg" },
    { name: "Amrutanjan", logo: "/images/clients/amrutanjan.png" },
    { name: "The Ramco Cements", logo: "/images/clients/ramco-cements.avif" },
  ]

  // Duplicate clients array for seamless looping
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-8 md:py-16 bg-muted/30" style={{ fontSize: "18px" }}>
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Valued Clients
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Proud to supply industry leaders across power, chemicals, steel, and manufacturing sectors nationwide
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="marquee-container">
        <div className="marquee-track" style={{ "--marquee-items": clients.length } as React.CSSProperties}>
          {duplicatedClients.map((client, index) => (
            <div key={index} className="marquee-item">
              <div className="relative w-full h-full flex items-center justify-center px-2 rounded-lg bg-background border">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={240}
                  height={160}
                  className={`object-contain max-w-[100%] max-h-[100%] ${client.name === "Tata Chemicals" ? "scale-[1.08]" : ""} ${client.name === "Blue Star" ? "scale-[1.18]" : ""}`}
                  style={index === 23 ? { fontSize: "20px" } : index === 11 || index === 28 ? { fontSize: "18px" } : undefined}
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
