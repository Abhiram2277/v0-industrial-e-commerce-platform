const products = [
  {
    slug: "fall-protection",
    name: "Fall Protection",
    description: "Complete fall protection systems including harnesses, lanyards, and lifelines",
    subcategories: ["Harnesses", "Lanyards", "Lifelines", "Retractable Blocks", "Anchorage", "Rescue Kits"],
  },
  {
    slug: "workplace-safety",
    name: "Workplace Safety Solutions",
    description: "LOTO, spill kits, safety cabinets, and general safety products",
    subcategories: [
      "LOTO",
      "Spill Kits",
      "Safety Cabinets",
      "Floor Marking",
      "Safety Signs",
      "Barricade Tape",
      "Safety Cones",
      "Barriers",
    ],
  },
  {
    slug: "confined-space",
    name: "Confined Space & Rescue",
    description: "Tripods, winches, rescue equipment, and confined space entry systems",
    subcategories: ["Entry Systems", "Rescue Stretchers", "Ventilation Blowers"],
  },
  {
    slug: "power-tools",
    name: "Power Tools & Equipment",
    description: "Bosch, DeWalt, and Stanley power tools for industrial use",
    subcategories: ["Angle Grinders", "Hammer Drills", "Screwdrivers", "Circular Saws", "Jigsaws"],
  },
  {
    slug: "welding-equipment",
    name: "Welding Equipment",
    description: "Ador welding products and consumables",
    subcategories: ["Welding Electrodes", "Welding Wires"],
  },
  {
    slug: "emergency-safety",
    name: "Emergency Safety Equipment",
    description: "Emergency showers, eyewash stations, and safety equipment for immediate response",
    subcategories: ["Combination Units", "Eyewash Stations", "Enclosed Showers", "Portable Eyewash"],
  },
  // ... rest of code here ...
]

const categories = products.map((product) => product.name)

export { products, categories }
