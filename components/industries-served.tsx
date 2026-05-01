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
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center section-header-spacing">
          <h2 className="heading-h2 mb-4 md:mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Industries Served
          </h2>
          <p className="body-large text-muted-foreground">
            Providing comprehensive safety solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 card-gap">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center card-gap card-spacing rounded-lg bg-background border border-border shadow hover:shadow-lg hover:border-accent/50 transition-all hover:-translate-y-1"
              >
                <div className="inline-flex icon-large rounded-full bg-accent/10 items-center justify-center">
                  <Icon className="icon-medium text-accent" />
                </div>
                <span className="label-text text-center leading-tight">{industry.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
