"use client"

import { Info } from "lucide-react"
import { useState } from "react"

interface CertificationTooltipProps {
  category?: string
}

// ISO standards mapping by product category
const ISO_STANDARDS: Record<string, string> = {
  "foot-protection": "IS 15298",
  "head-protection": "IS 2925",
  "fall-protection": "IS 3521",
  "eye-protection": "IS 5983",
  "respiratory": "IS 9623",
  "hand-protection": "IS 4770",
  "high-vis": "IS 15809",
  "workwear": "IS 15809",
}

export function CertificationTooltip({ category = "foot-protection" }: CertificationTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const isoStandard = ISO_STANDARDS[category] || "IS 4151"

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        className="flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
        aria-label="Certification information"
      >
        <p className="text-sm font-medium">Certified</p>
        <Info className="h-4 w-4 text-accent" />
      </button>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-foreground text-background rounded-lg p-3 text-xs shadow-lg z-10">
          <p className="font-semibold mb-2">Industry Certifications</p>
          <ul className="space-y-1">
            <li>• ISO 9001:2015 certified</li>
            <li>• {isoStandard} compliant</li>
            <li>• Quality assured</li>
          </ul>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-foreground rotate-45"></div>
        </div>
      )}
    </div>
  )
}
