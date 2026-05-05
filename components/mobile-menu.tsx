"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, Building2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SearchBar } from "./search-bar"
import {
  HardHat,
  Eye,
  Footprints,
  Hand,
  Wind,
  Ear,
  Zap,
  AlertTriangle,
  Anchor,
  ShieldCheck,
  ShieldAlert,
  Flame,
} from "lucide-react"

interface MobileMenuProps {
  categories: any[]
  isLoading: boolean
  error: string | null
}

const categoryIcons: Record<string, any> = {
  "head-protection": HardHat,
  "eye-protection": Eye,
  "face-protection": ShieldCheck,
  "hearing-protection": Ear,
  "hand-protection": Hand,
  "foot-protection": Footprints,
  "respiratory-protection": Wind,
  workwear: ShieldAlert,
  "electrical-safety": Zap,
  "fall-protection": Anchor,
  "arc-heat-protection": Flame,
  "workplace-safety": AlertTriangle,
}

export function MobileMenu({ categories, isLoading, error }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger Icon - Mobile Only */}
      <Button
        variant="outline"
        size="lg"
        className="md:hidden h-12 w-12"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay - Always rendered for hydration consistency */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      />
      
      {/* Mobile Menu Panel - Always rendered for hydration consistency */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-full bg-background transition-transform duration-300 md:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-background z-10">
            <h2 className="text-lg font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 flex-shrink-0"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Bar - Mobile Only */}
          <div className="border-b p-4 sticky top-[68px] bg-background z-10">
            <SearchBar />
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            {/* NAVIGATE Section */}
            <div className="px-4 py-6">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Navigate</h3>
              <nav className="space-y-2">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px]"
                >
                  <Home className="h-5 w-5 flex-shrink-0" />
                  <span>Home</span>
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px]"
                >
                  <Info className="h-5 w-5 flex-shrink-0" />
                  <span>About Us</span>
                </Link>

                <Link
                  href="/brands"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px]"
                >
                  <Building2 className="h-5 w-5 flex-shrink-0" />
                  <span>Partner Brands</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px]"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>Contact Us</span>
                </Link>
              </nav>
            </div>

            {/* SHOP BY CATEGORY Section */}
            <div className="border-t px-4 py-6">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Shop by Category</h3>

              {error ? (
                <div className="py-2 text-xs text-destructive text-center">{error}</div>
              ) : isLoading ? (
                <div className="py-2 text-xs text-muted-foreground text-center">Loading categories...</div>
              ) : categories && categories.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(0, 8).map((category) => {
                    const IconComponent = categoryIcons[category.slug] || AlertTriangle
                    return (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        onClick={closeMenu}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted hover:text-accent transition-colors min-h-[100px]"
                      >
                        <IconComponent className="h-6 w-6 flex-shrink-0" />
                        <span className="text-xs font-medium text-center leading-tight">{category.name}</span>
                      </Link>
                    )
                  })}
                </div>
              ) : (
                <div className="py-2 text-xs text-muted-foreground text-center">
                  No categories available
                </div>
              )}
            </div>
          </div>

          {/* Footer Action */}
          <div className="border-t p-4 space-y-3 bg-background sticky bottom-0">
            <Link href="/quote" onClick={closeMenu} className="w-full block">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[44px]">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
