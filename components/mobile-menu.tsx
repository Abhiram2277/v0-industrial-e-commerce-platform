"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  categories: any[]
  isLoading: boolean
  error: string | null
}

export function MobileMenu({ categories, isLoading, error }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleCategory = (categorySlug: string) => {
    setExpandedCategory(expandedCategory === categorySlug ? null : categorySlug)
  }

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

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      />
      
      {/* Mobile Menu Panel */}
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

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Main Navigation */}
            <nav className="border-b">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px] flex items-center"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px] flex items-center border-t"
              >
                About Us
              </Link>

              <Link
                href="/brands"
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px] flex items-center border-t"
              >
                Partner Brands
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px] flex items-center border-t"
              >
                Contact Us
              </Link>
            </nav>

            {/* Shop by Category Section */}
            <div className="py-4">
              <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground">Shop by Category</h3>

              {error ? (
                <div className="px-4 py-2 text-xs text-destructive">{error}</div>
              ) : isLoading ? (
                <div className="px-4 py-2 text-xs text-muted-foreground">Loading categories...</div>
              ) : categories && categories.length > 0 ? (
                <div>
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium hover:bg-accent/10 transition-colors min-h-[44px]"
                      >
                        <span>{category.name}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform flex-shrink-0",
                            expandedCategory === category.slug && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Expanded Category Items */}
                      {expandedCategory === category.slug && (
                        <div className="bg-muted/30 space-y-0">
                          <Link
                            href={`/category/${category.slug}`}
                            onClick={closeMenu}
                            className="block px-6 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors min-h-[40px] flex items-center"
                          >
                            View All {category.name}
                          </Link>
                          {category.subcategories?.map((subcat: string) => (
                            <Link
                              key={subcat}
                              href={`/category/${category.slug}?sub=${encodeURIComponent(subcat)}`}
                              onClick={closeMenu}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[40px] flex items-center"
                            >
                              {subcat}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-2 text-xs text-muted-foreground">
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
