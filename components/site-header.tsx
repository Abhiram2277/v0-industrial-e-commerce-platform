"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { CartButton } from "./cart-button"
import { SearchBar } from "./search-bar"
import { getAllCategoriesClient } from "@/lib/products-combined-client"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAllCategoriesClient()
      .then((allCategories) => {
        setCategories(allCategories)
        setError(null)
      })
      .catch((err) => {
        console.error("[v0] Failed to load categories:", err)
        setError("Failed to load categories. Please refresh the page.")
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <header className="z-50 w-full border-b bg-background">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b py-2 text-sm">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              +91 9398644987
            </span>
            <span className="hidden md:inline">pndindustrialsuppliers@gmail.com</span>
          </div>
          <div className="text-xs font-medium text-primary">"Life is Precious" - Your Safety Partner</div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-36 w-36 flex-shrink-0">
              <Image src="/pnd-logo.png" alt="PND Industrial Suppliers Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-3xl leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                PND Industrial Suppliers
              </span>
              <span className="text-sm text-muted-foreground">Industrial Excellence Since 2020</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Cart Button and Quick Quote Button */}
          <div className="flex items-center gap-3">
            <CartButton />
            <Link href="/quote">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">Quick Quote</Button>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center justify-between pb-4">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/brands"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  Partner Brands
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/safety-solutions"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  Safety Solutions
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop by Category</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-3 gap-3 p-4 max-h-[500px] overflow-y-auto">
                    {error ? (
                      <div className="col-span-3 text-center text-sm text-destructive">{error}</div>
                    ) : isLoading ? (
                      <div className="col-span-3 text-center text-sm text-muted-foreground">Loading categories...</div>
                    ) : categories.length > 0 ? (
                      categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/category/${category.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {category.subcategories?.slice(0, 3).join(", ") || "View all products"}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <div className="col-span-3 text-center text-sm text-muted-foreground">
                        No categories available
                      </div>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  )
}
