"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CartButton } from "./cart-button"
import { SearchBar } from "./search-bar"
import { MobileMenu } from "./mobile-menu"
import { WhatsAppHeaderButton } from "./whatsapp-header-button"
import { getAllCategoriesClient } from "@/lib/products-combined-client"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    getAllCategoriesClient()
      .then((allCategories) => {
        setCategories(allCategories || [])
        setError(null)
      })
      .catch((err) => {
        console.error("[v0] Failed to load categories:", err)
        setError("Failed to load categories. Please refresh the page.")
        setCategories([])
      })
      .finally(() => setIsLoading(false))
  }, [isMounted])

  return (
    <header className="z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b py-2 text-base">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              +91 9398644987
            </span>
            <span className="hidden md:inline">pndindustrialsuppliers@gmail.com</span>
          </div>
          <div className="text-sm font-medium text-primary">"Life is Precious" - Your Safety Partner</div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4 gap-4">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 flex-1 md:flex-initial">
            <div className="relative h-20 w-20 md:h-36 md:w-36 flex-shrink-0">
              <Image src="/pnd-logo.png" alt="PND Industrial Suppliers Logo" fill className="object-contain" priority />
            </div>
            <div className="flex md:hidden flex-col">
              <span className="font-bold text-lg leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                PND Industrial
              </span>
              <span className="text-xs text-muted-foreground">Industrial Excellence</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-4xl leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                PND Industrial Suppliers
              </span>
              <span className="text-sm text-muted-foreground">Industrial Excellence Since 2020</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop: Cart Button, Direct Messaging, and Get Quote Button */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <CartButton />
            <WhatsAppHeaderButton />
            <Link href="/quote">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile: Hamburger Menu + Cart */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            <CartButton />
            <MobileMenu categories={categories} isLoading={isLoading} error={error} />
          </div>
        </div>

        {/* Desktop Navigation Menu - Hidden on Mobile */}
        {isMounted && (
          <nav className="hidden md:flex items-center justify-start pb-4 gap-4 flex-wrap">
            <Link href="/" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            )}>
              Home
            </Link>

            <Link href="/about" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            )}>
              About Us
            </Link>

            <Link href="/brands" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            )}>
              Partner Brands
            </Link>

            <Link href="/safety-solutions" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            )}>
              Safety Solutions
            </Link>

            <Link href="/contact" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            )}>
              Contact Us
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className={cn(
                  "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                )}
              >
                Shop by Category
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>

              {showCategories && (
                <div className="absolute left-0 top-full mt-1 bg-background border border-input rounded-md shadow-lg p-4 z-50 max-h-96 overflow-y-auto w-screen sm:w-96 sm:left-0 md:w-[500px] lg:w-[600px]">
                  {error ? (
                    <div className="text-center text-sm text-destructive">{error}</div>
                  ) : isLoading ? (
                    <div className="text-center text-sm text-muted-foreground">Loading categories...</div>
                  ) : categories && categories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/category/${category.slug}`}
                          onClick={() => setShowCategories(false)}
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {category.subcategories?.slice(0, 2).join(", ") || "View products"}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-sm text-muted-foreground">
                      No categories available
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
