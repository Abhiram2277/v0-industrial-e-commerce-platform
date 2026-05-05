"use client"

import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function CertificationTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Info className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Certified</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <div className="space-y-1">
            <p className="font-semibold">Product Certifications</p>
            <ul className="text-xs space-y-1">
              <li>✓ ISO 9001:2015 Certified</li>
              <li>✓ IS (Indian Standards) Compliant</li>
              <li>✓ International Safety Standards</li>
              <li>✓ Quality Assured & Tested</li>
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
