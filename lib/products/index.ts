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
]

// Export categories
export const categories: Category[] = [
  {
    slug: "head-protection",
    name: "Head Protection",
    description: "Comprehensive range of safety helmets and bump caps",
    seoTitle: "Safety Helmets Supplier in Andhra Pradesh & Telangana — Nellore & Kakinada | PND Industrial Suppliers",
    seoDescription: "Authorized Udyogi safety helmets in Andhra Pradesh & Telangana. IS 2925 certified. Serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada, Nellore & all major cities.",
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
    seoTitle: "Safety Goggles & Eye Protection Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "IS 5983 certified safety goggles & face shields in Andhra Pradesh & Telangana. Authorized dealer serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada & Nellore.",
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
    seoTitle: "Face Shields & Welding Visors Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Helmet-mounted face shields & welding visors in Andhra Pradesh & Telangana. Authorized dealer serving all major AP & TS cities. Bulk pricing available.",
    subcategories: ["Helmet-Mounted Shields", "Welding Visors", "Face Shields", "Face Shield Carriers"],
  },
  {
    slug: "arc-heat-protection",
    name: "Arc + Heat Protection",
    description: "Arc flash and heat protective equipment for electrical and high-temperature work",
    seoTitle: "Arc Flash & Heat Protection Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "NFPA 70E arc flash suits & heat protection in Andhra Pradesh & Telangana. Authorized dealer serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada & Nellore.",
    subcategories: ["Economic Arc Shields", "AmpShield Series", "Arc Shields for Hoods", "QuickView Welding Shields"],
  },
  {
    slug: "foot-protection",
    name: "Foot Protection",
    description: "Safety shoes and boots for various industrial applications",
    seoTitle: "Safety Shoes Supplier in Andhra Pradesh & Telangana — Nellore & Kakinada | PND Industrial Suppliers",
    seoDescription: "Authorized Hillson & Udyogi safety shoes in Andhra Pradesh & Telangana. IS 15298 certified. Serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada & Nellore.",
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
    seoTitle: "Safety Gloves Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Nitrile, leather & cut-resistant gloves in Andhra Pradesh & Telangana. Authorized dealer serving all major AP & TS cities. Wholesale pricing available.",
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
    seoTitle: "Hearing Protection Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "IS 4008 certified ear plugs & ear muffs in Andhra Pradesh & Telangana. Authorized dealer serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada & Nellore.",
    subcategories: ["Earplugs", "Earmuffs"],
  },
  {
    slug: "respiratory-protection",
    name: "Respiratory Protection",
    description: "Respirators, masks, and breathing apparatus for air quality protection",
    seoTitle: "Respiratory Protection Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Half face & full face respirators in Andhra Pradesh & Telangana. H2S rated for Kakinada refineries. Authorized dealer AP & TS.",
    subcategories: ["Disposable Masks", "Half-Face Respirators", "Full-Face Respirators", "SCBA"],
  },
  {
    slug: "workwear",
    name: "Workwear",
    description: "Protective clothing and coveralls for various work environments",
    seoTitle: "Safety Workwear Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "IS 15809 hi-vis jackets & FR clothing in Andhra Pradesh & Telangana. Authorized dealer serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada & Nellore.",
    subcategories: ["Coveralls", "Jackets", "Vests", "Aprons"],
  },
  {
    slug: "electrical-safety",
    name: "Electrical Safety",
    description: "Insulated tools and equipment for electrical work",
    seoTitle: "Electrical Safety Equipment Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "IEC certified electrical safety tools & arc flash kits in Andhra Pradesh & Telangana. Authorized dealer for power plants & contractors across AP & TS.",
    subcategories: ["Insulated Gloves", "Insulated Mats", "Voltage Detectors", "Lock Out Tag Out"],
  },
  {
    slug: "emergency-safety",
    name: "Emergency Safety",
    description: "Emergency eyewash stations and safety showers",
    seoTitle: "Emergency Eyewash & Safety Shower Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "BIS certified eyewash stations & safety showers in Andhra Pradesh & Telangana. Authorized dealer serving all major AP & TS industrial cities.",
    subcategories: ["Eyewash Stations", "Safety Showers", "Combination Units"],
  },
  {
    slug: "sgbi",
    name: "SGBI (Safety Guards, Barriers & Indicators)",
    description: "Safety guards, barriers, bollards, and visual indicators for workplace safety",
    seoTitle: "Workplace Safety Signs & SGBI Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Explosion-proof blowers & BIS certified safety signs in Andhra Pradesh & Telangana. Authorized dealer serving all major AP & TS cities.",
    subcategories: ["Safety Guards", "Barriers & Bollards", "Safety Indicators", "Traffic Management"],
  },
  {
    slug: "workplace-safety",
    name: "Workplace Safety Solutions",
    description: "Anti-skid tapes, floor marking, and workplace safety products",
    seoTitle: "Workplace Safety Solutions Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "OSHA & IS compliant safety storage cabinets & workplace safety solutions in Andhra Pradesh & Telangana. Serving all major AP & TS cities.",
    subcategories: ["Anti-Skid Tapes", "Floor Marking Tapes", "Safety Signs"],
  },
  {
    slug: "anchorage-sling",
    name: "Anchorage Sling & Solutions",
    description: "Anchorage points, slings, and connectors for fall protection systems",
    seoTitle: "Anchorage Slings & Solutions Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Certified anchorage slings & solutions in Andhra Pradesh & Telangana. Authorized dealer serving Visakhapatnam, Vijayawada, Hyderabad, Kakinada & Nellore.",
    subcategories: ["Anchorage Points", "Slings", "Connectors"],
  },
  {
    slug: "harness",
    name: "Harness",
    description:
      "Complete range of 27 full body safety harnesses for fall arrest, work positioning, and height safety applications",
    seoTitle: "Safety Harness Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "IS 3521 certified professional & economical harnesses in Andhra Pradesh & Telangana. Authorized dealer serving all major AP & TS cities.",
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
    slug: "fall-protection",
    name: "Fall Protection",
    description: "Complete fall protection systems and equipment for safe work at heights",
    seoTitle: "Fall Protection Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "IS 3521 certified harnesses & lanyards in Andhra Pradesh & Telangana. Authorized dealer serving all major AP & TS cities.",
    subcategories: ["Harnesses", "Lanyards", "Anchorage", "Fall Arrest Systems"],
  },
  {
    slug: "lanyard",
    name: "Lanyards",
    description: "Energy absorbing lanyards and fall arrest systems",
    seoTitle: "Safety Lanyards Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Energy absorbing lanyards & fall arrest systems in Andhra Pradesh & Telangana. IS certified. Authorized dealer serving all major AP & TS cities.",
    subcategories: ["Energy Absorbing Lanyards", "Fall Arrest Lanyards", "Single Leg Lanyards", "Double Leg Lanyards"],
  },
  {
    slug: "lifeline",
    name: "Lifeline & Height Access Equipment",
    description: "Certified lifeline systems and height access equipment for work at heights",
    seoTitle: "Lifeline & Height Access Equipment Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Certified lifeline systems & height access equipment in Andhra Pradesh & Telangana. Authorized dealer serving refineries, ports & construction sites.",
    subcategories: ["Horizontal Lifelines", "Vertical Lifelines", "Davit Arms", "Rescue Systems"],
  },
  {
    slug: "powertools",
    name: "PowerTools",
    description: "Professional power tools from leading brands for industrial applications",
    seoTitle: "Bosch & DeWalt Power Tools Dealer in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Authorized Bosch & DeWalt dealer in Andhra Pradesh & Telangana. Cordless drills, angle grinders, rotary hammers. Genuine warranty & service.",
    subcategories: ["Cordless Drills", "Angle Grinders", "Rotary Hammers", "Impact Drivers", "Circular Saws"],
  },
  {
    slug: "retractable-block",
    name: "Retractable Block",
    description: "Certified retractable blocks and self-retracting lifelines for fall protection",
    seoTitle: "Retractable Blocks & Self-Retracting Lifelines in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Certified retractable blocks & SRLs in Andhra Pradesh & Telangana. Authorized dealer for height safety equipment across AP & TS.",
    subcategories: ["Personal Retractable Lifelines", "Industrial Retractable Systems", "Spring Blocks", "Rescue Blocks"],
  },
  {
    slug: "work-at-height",
    name: "Work at Height Safety Equipment",
    description: "Comprehensive work at height solutions including harnesses, lanyards, and lifelines",
    seoTitle: "Work at Height Safety Equipment Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Certified work at height solutions in Andhra Pradesh & Telangana. Harnesses, lanyards, lifelines & anchorage. Authorized dealer AP & TS.",
    subcategories: ["Fall Arrest Systems", "Work Positioning", "Rescue Equipment", "Height Access Tools"],
  },
  {
    slug: "confined-space",
    name: "Confined Space Solution",
    description: "Certified confined space entry and rescue equipment",
    seoTitle: "Confined Space Equipment Supplier in Andhra Pradesh & Telangana | PND Industrial Suppliers",
    seoDescription: "Certified confined space solutions in Andhra Pradesh & Telangana. Authorized dealer serving refineries, ports & factories across AP & TS.",
    subcategories: ["Entry Equipment", "Rescue Systems", "Ventilation Equipment", "Monitoring Tools"],
  },
]

// Re-export types
export type { Product, Category }
