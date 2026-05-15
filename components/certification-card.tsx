"use client"

import { Info } from "lucide-react"

interface CertificationCardProps {
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

export function CertificationCard({ category = "foot-protection" }: CertificationCardProps) {
  const isoStandard = ISO_STANDARDS[category] || "IS 4151"

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
            <span className="text-sm">{isoStandard} compliant</span>
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
