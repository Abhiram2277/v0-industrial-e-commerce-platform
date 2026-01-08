import type { Product } from "../types"

export const eyeProtectionProducts: Product[] = [
  {
    id: "ep-001",
    name: "UD 71",
    category: "eye-protection",
    subcategory: "Safety Goggles",
    brand: "Udyogi Safety",
    description: "Clear vision safety goggles with anti-fog coating and wrap-around protection",
    image: "https://udyogisafety.com/wp-content/uploads/2020/12/181025-146-UD-71-Smoke-Smoke-AF-2048x2048.jpg",
    features: ["Anti-fog lens", "UV protection", "Adjustable strap", "Indirect ventilation", "Impact resistant"],
    applications: ["Chemical handling", "Laboratory work", "Grinding operations", "Dust environments"],
  },
  {
    id: "ep-002",
    name: "UD 81",
    category: "eye-protection",
    subcategory: "Safety Goggles",
    brand: "Udyogi Safety",
    description: "Professional welding goggles with flip-up design for versatile protection",
    image: "https://udyogisafety.com/wp-content/uploads/2020/05/181025-122-UD-81-Clear-2048x2048.jpg",
    features: ["Flip-up design", "Impact resistant", "Comfortable fit", "Durable frame"],
    applications: ["Gas welding", "Cutting operations", "Brazing", "Industrial work"],
  },
  // ... existing code here ...
]
