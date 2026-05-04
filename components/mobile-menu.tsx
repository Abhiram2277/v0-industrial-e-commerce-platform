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

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-black/50" onClick={closeMenu} />
      )}
      
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 bg-background border-r transition-transform duration-300 md:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="mb-4 ml-auto block"
            onClick={closeMenu}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/brands"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Partner Brands
            </Link>

            <Link
              href="/safety-solutions"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Safety Solutions
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Us
            </Link>

            {/* Categories Section */}
            <div className="border-t border-input pt-4 mt-4">
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                Shop by Category
              </div>

              {error ? (
                <div className="px-4 py-2 text-xs text-destructive">{error}</div>
              ) : isLoading ? (
                <div className="px-4 py-2 text-xs text-muted-foreground">Loading...</div>
              ) : categories && categories.length > 0 ? (
                <div className="space-y-1">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {category.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expandedCategory === category.slug && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Expanded Category */}
                      {expandedCategory === category.slug && (
                        <div className="bg-muted/30 space-y-1 pl-4">
                          <Link
                            href={`/category/${category.slug}`}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            View All
                          </Link>
                          {category.subcategories?.map((subcat: string) => (
                            <Link
                              key={subcat}
                              href={`/category/${category.slug}?sub=${encodeURIComponent(subcat)}`}
                              onClick={closeMenu}
                              className="block px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
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
          </nav>
        </div>
      </div>
    </>
  )
}
