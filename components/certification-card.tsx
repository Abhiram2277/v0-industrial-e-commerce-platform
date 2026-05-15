"use client"

import { Info } from "lucide-react"

export function CertificationCard() {
  return (
    <div className="relative">
      <div className="bg-slate-900 rounded-2xl p-8 text-white border border-accent/50 relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-2xl"></div>
        
        <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Industry Certifications
        </h3>
        
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">ISO 9001:2015 certified</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">IS 4151 compliant</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg leading-none">•</span>
            <span className="text-sm">Quality assured</span>
          </li>
        </ul>
      </div>
      
      {/* Label below */}
      <div className="flex flex-col items-center mt-4 gap-2">
        <p className="text-lg font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Certified
        </p>
        <Info className="h-5 w-5 text-accent" />
      </div>
    </div>
  )
}
