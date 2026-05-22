export interface FAQItem {
  question: string
  answer: string
}

export interface FAQPageSchema {
  "@context": string
  "@type": string
  mainEntity: Array<{
    "@type": string
    name: string
    acceptedAnswer: {
      "@type": string
      text: string
    }
  }>
}

const cities = [
  "Visakhapatnam",
  "Vijayawada",
  "Hyderabad",
  "Guntur",
  "Tirupati",
  "Rajahmundry",
  "Warangal",
  "Ongole",
  "Kadapa",
  "Kurnool",
  "Kakinada",
  "Nellore",
]

const cityPhones: Record<string, string> = {
  Kakinada: "+91 77309 40410",
  Nellore: "+91 9398644987",
}

const deliveryTimes: Record<string, string> = {
  Rajahmundry: "1-2 business days",
  Ongole: "1-2 business days",
  Guntur: "2-3 business days",
  Visakhapatnam: "3-5 business days",
  Vijayawada: "3-5 business days",
  Hyderabad: "5-7 business days",
  Tirupati: "within a week",
  Warangal: "5-7 business days",
  Kadapa: "2-3 business days",
  Kurnool: "3-5 business days",
  Kakinada: "1-2 business days",
  Nellore: "2-3 business days",
}

export function generateFAQSchema(productName: string, categorySlug: string): FAQPageSchema {
  // Map category slug to product name if not provided
  const productNameMap: Record<string, string> = {
    "foot-protection": "safety shoes",
    "head-protection": "safety helmets",
    "fall-protection": "safety harnesses",
    "eye-protection": "safety goggles and face shields",
    "respiratory": "respirators and masks",
    "hand-protection": "safety gloves",
    "high-vis": "protective workwear and FR clothing",
    "workwear": "protective workwear",
    "hearing-protection": "ear protection and earmuffs",
    "electrical-safety": "electrical safety equipment",
    "power-tools": "power tools",
    harness: "safety harnesses and fall arrest equipment",
    lanyards: "safety lanyards",
    lifeline: "lifeline systems",
    "confined-space": "confined space equipment",
    sgbi: "gas detection and breathing apparatus",
    "emergency-safety": "emergency eyewash and safety showers",
    "workplace-safety": "workplace safety solutions",
    "arc-heat-protection": "arc flash and heat protection",
  }

  const displayProductName = productNameMap[categorySlug] || productName

  const mainEntity = cities.map((city) => {
    const phone = cityPhones[city] || "+91 9398644987"
    const delivery = deliveryTimes[city] || "3-5 business days"
    const branch =
      city === "Rajahmundry" || city === "Ongole" || city === "Visakhapatnam"
        ? "Kakinada branch"
        : "Nellore branch"

    return {
      "@type": "Question",
      name: `Do you supply ${displayProductName} in ${city}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes, PND Industrial Suppliers supplies certified ${displayProductName} to ${city} from our ${branch} within ${delivery}. Call ${phone} for bulk pricing.`,
      },
    }
  })

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  }
}
