import type { Product, Category } from "./types"

// Import all category product arrays
import { headProtectionProducts } from "./categories/head-protection"
import { eyeProtectionProducts } from "./categories/eye-protection"
import { faceProtectionProducts } from "./categories/face-protection"
import { arcHeatProtectionProducts } from "./categories/arc-heat-protection"
import { footProtectionProducts } from "./categories/foot-protection"
import { handProtectionProducts } from "./categories/hand-protection"
import { hearingProtectionProducts } from "./categories/hearing-protection"
import { respiratoryProtectionProducts } from "./categories/respiratory-protection"
import { workwearProducts } from "./categories/workwear"
import { electricalSafetyProducts } from "./categories/electrical-safety"
import { emergencySafetyProducts } from "./categories/emergency-safety"
import { sgbiProducts } from "./categories/sgbi"
import { workplaceSafetyProducts } from "./categories/workplace-safety"
import { anchorageSlingProducts } from "./categories/anchorage-sling"
import { harnessProducts } from "./categories/harness"
import { powerToolsProducts } from "./categories/power-tools"

// Combine all products
export const products: Product[] = [
  ...headProtectionProducts,
  ...eyeProtectionProducts,
  ...faceProtectionProducts,
  ...arcHeatProtectionProducts,
  ...footProtectionProducts,
  ...handProtectionProducts,
  ...hearingProtectionProducts,
  ...respiratoryProtectionProducts,
  ...workwearProducts,
  ...electricalSafetyProducts,
  ...emergencySafetyProducts,
  ...sgbiProducts,
  ...workplaceSafetyProducts,
  ...anchorageSlingProducts,
  ...harnessProducts,
  ...powerToolsProducts,
]

// Export categories
export const categories: Category[] = [
  {
    slug: "head-protection",
    name: "Head Protection",
    description: "Comprehensive range of safety helmets and bump caps",
    subcategories: [
      "Thermoguard Series",
      "Vista Series",
      "Ultravent Series",
      "Fusion Series",
      "Electra Series",
      "UltraTuff Series",
      "Bump Caps",
      "Lighton Series",
      "Ultra Series",
      "Proton Series",
      "Prithvi Series",
      "UI Series",
    ],
  },
  {
    slug: "eye-protection",
    name: "Eye & Face Protection",
    description: "Safety goggles, glasses, and face shields for comprehensive eye and face protection",
    subcategories: [
      "Safety Goggles",
      "Safety Glasses",
      "IR Protection",
      "Welding Goggles",
      "Over Glasses",
      "Anti-Fog Goggles",
    ],
  },
  {
    slug: "face-protection",
    name: "Face Protection",
    description: "Face shields, welding shields, and carriers for complete face protection",
    subcategories: ["Helmet-Mounted Shields", "Welding Visors", "Face Shields", "Face Shield Carriers"],
  },
  {
    slug: "arc-heat-protection",
    name: "Arc + Heat Protection",
    description: "Arc flash and heat protective equipment for electrical and high-temperature work",
    subcategories: ["Economic Arc Shields", "AmpShield Series", "Arc Shields for Hoods", "QuickView Welding Shields"],
  },
  {
    slug: "foot-protection",
    name: "Foot Protection",
    description: "Safety shoes and boots for various industrial applications",
    subcategories: [
      "Edge Series - High Ankle",
      "Edge Series - Low Ankle",
      "Edge Active Series",
      "Derby Series",
      "Protector Series",
    ],
  },
  {
    slug: "hand-protection",
    name: "Hand Protection",
    description: "Safety gloves for mechanical, chemical, and thermal protection",
    subcategories: [
      "Cut Resistant Gloves",
      "Chemical Resistant Gloves",
      "Heat Resistant Gloves",
      "General Purpose Gloves",
      "Leather Gloves",
    ],
  },
  {
    slug: "hearing-protection",
    name: "Hearing Protection",
    description: "Earplugs and earmuffs for noise reduction",
    subcategories: ["Earplugs", "Earmuffs"],
  },
  {
    slug: "respiratory-protection",
    name: "Respiratory Protection",
    description: "Respirators, masks, and breathing apparatus for air quality protection",
    subcategories: ["Disposable Masks", "Half-Face Respirators", "Full-Face Respirators", "SCBA"],
  },
  {
    slug: "workwear",
    name: "Workwear",
    description: "Protective clothing and coveralls for various work environments",
    subcategories: ["Coveralls", "Jackets", "Vests", "Aprons"],
  },
  {
    slug: "electrical-safety",
    name: "Electrical Safety",
    description: "Insulated tools and equipment for electrical work",
    subcategories: ["Insulated Gloves", "Insulated Mats", "Voltage Detectors", "Lock Out Tag Out"],
  },
  {
    slug: "emergency-safety",
    name: "Emergency Safety",
    description: "Emergency eyewash stations and safety showers",
    subcategories: ["Eyewash Stations", "Safety Showers", "Combination Units"],
  },
  {
    slug: "sgbi",
    name: "SGBI (Safety Guards, Barriers & Indicators)",
    description: "Safety guards, barriers, bollards, and visual indicators for workplace safety",
    subcategories: ["Safety Guards", "Barriers & Bollards", "Safety Indicators", "Traffic Management"],
  },
  {
    slug: "workplace-safety",
    name: "Workplace Safety Solutions",
    description: "Anti-skid tapes, floor marking, and workplace safety products",
    subcategories: ["Anti-Skid Tapes", "Floor Marking Tapes", "Safety Signs"],
  },
  {
    slug: "anchorage-sling",
    name: "Anchorage Sling & Solutions",
    description: "Anchorage points, slings, and connectors for fall protection systems",
    subcategories: ["Anchorage Points", "Slings", "Connectors"],
  },
  {
    slug: "harness",
    name: "Harness",
    description:
      "Complete range of 29 full body safety harnesses for fall arrest, work positioning, and height safety applications",
    subcategories: [
      "Professional Grade Harnesses",
      "Economical Harnesses",
      "High Visibility Vest Harnesses",
      "Standard Industrial Harnesses",
      "Comfort Plus Harnesses",
      "Flame Resistant Harnesses",
      "Electrical Safety Harnesses",
      "Arc Flash Harnesses",
      "Premium Leather Harnesses",
      "Lightweight Harnesses",
      "Work Positioning Harnesses",
      "Specialty Application Harnesses",
    ],
  },
  {
    slug: "power-tools",
    name: "Power Tools",
    description: "Professional grade power tools for construction, drilling, cutting, and grinding applications",
    subcategories: [
      "Angle Grinders",
      "Cordless Drills",
      "Die Grinders",
      "Jigsaws",
      "Saws",
      "Bench Grinders",
      "Polishers",
      "Multi-Tools",
    ],
  },
]

// Re-export types
export type { Product, Category }
