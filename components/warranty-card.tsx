"use client"

import { Info } from "lucide-react"

export function WarrantyCard() {
  return (
    <div className="relative">
      <div className="bg-slate-900 rounded-2xl p-8 text-white border-l-4 border-l-accent relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1 h-12 bg-accent/30"></div>
        <div className="absolute bottom-0 left-0 w-1 h-12 bg-accent/30"></div>
        
        <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Warranty Coverage
        </h3>
        
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">1-2 Year Manufacturing Warranty</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">Covers Manufacturing Defects</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">Free Replacement Policy</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">Dedicated Support Team</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">Extended Warranty Available</span>
          </li>
        </ul>
        
        <p className="text-xs opacity-75 italic border-t border-white/10 pt-4">
          Contact support for detailed warranty information
        </p>
      </div>
      
      {/* Label below */}
      <div className="flex flex-col items-center mt-4 gap-2">
        <p className="text-lg font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Warranty
        </p>
        <Info className="h-5 w-5 text-accent" />
      </div>
    </div>
  )
}
