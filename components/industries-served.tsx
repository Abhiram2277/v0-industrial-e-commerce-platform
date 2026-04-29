"use client"

import { Factory, Droplets, Building2, Car, ShoppingBag, Flag as Flask, Package } from "lucide-react"

export function IndustriesServed() {
  const industries = [
    { name: "Power Sector", icon: Factory },
    { name: "Oil Refineries", icon: Droplets },
    { name: "Steel Industries", icon: Building2 },
    { name: "Automotive", icon: Car },
    { name: "Food Processing", icon: ShoppingBag },
    { name: "Chemical Industries", icon: Flask },
    { name: "Manufacturing Units", icon: Package },
  ]

  return (
    <section className="py-8 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Industries Served
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Providing comprehensive safety solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1.5 md:gap-3 p-2 md:p-6 rounded-lg bg-background border hover:border-accent/50 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center px-0">
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-accent px-px py-px mx-px my-0 border-0" />
                </div>
                <span className="text-xs md:text-sm font-medium text-center leading-tight">{industry.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
