"use client"

import { Info } from "lucide-react"
import { useState } from "react"

export function CertificationTooltip() {
  const [showTooltip, setShowTooltip] = useState(false)

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
            <li>• IS 4151 compliant</li>
            <li>• Quality assured</li>
          </ul>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-foreground rotate-45"></div>
        </div>
      )}
    </div>
  )
}
