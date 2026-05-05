"use client"

import { Info } from "lucide-react"
import { useState } from "react"

export function WarrantyTooltip() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        className="flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
        aria-label="Warranty information"
      >
        <p className="text-sm font-medium">Warranty</p>
        <Info className="h-4 w-4 text-accent" />
      </button>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-foreground text-background rounded-lg p-3 text-xs shadow-lg z-10">
          <p className="font-semibold mb-2">Warranty Coverage</p>
          <ul className="space-y-1">
            <li>• 1-2 Year Manufacturing Warranty</li>
            <li>• Covers Manufacturing Defects</li>
            <li>• Free Replacement Policy</li>
            <li>• Dedicated Support Team</li>
            <li>• Extended Warranty Available</li>
          </ul>
          <p className="text-xs opacity-80 pt-2 mt-2 border-t border-background/20">
            Contact support for detailed warranty information
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-foreground rotate-45"></div>
        </div>
      )}
    </div>
  )
}
