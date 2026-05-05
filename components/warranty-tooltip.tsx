"use client"

import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WarrantyTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Info className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Warranty</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <div className="space-y-1">
            <p className="font-semibold">Warranty Coverage</p>
            <ul className="text-xs space-y-1">
              <li>• 1-2 Year Manufacturing Warranty</li>
              <li>• Covers Manufacturing Defects</li>
              <li>• Free Replacement Policy</li>
              <li>• Dedicated Support Team</li>
              <li>• Extended Warranty Available</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-2">
              Contact support for detailed warranty information for specific products.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
