"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getAllProductsClient } from "@/lib/products-combined-client"
import type { Product } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"

export function HeroSearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getAllProductsClient().then(setProducts)
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase()
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.features.some((f) => f.toLowerCase().includes(query)),
      )
      setSearchResults(filtered)
      setIsOpen(true)
    } else {
      setSearchResults([])
      setIsOpen(false)
    }
  }, [searchQuery, products])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
    setIsOpen(false)
  }

  return (
    <div className="bg-background border-b sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div ref={searchRef} className="relative w-full">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10">
            <Search className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <Input
            type="search"
            placeholder="Search products, categories, brands..."
            className="w-full pl-12 pr-10 py-3 md:py-4 text-base md:text-lg rounded-full border-2 border-input hover:border-accent focus:border-accent transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setIsOpen(true)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground z-10 transition-colors"
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          )}

          {/* Search Results Dropdown */}
          {isOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-xl max-h-[400px] overflow-y-auto z-50">
              {searchResults.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={() => clearSearch()}
                  className="flex items-start gap-3 p-3 hover:bg-accent/10 transition-colors border-b last:border-0"
                >
                  {product.image && (
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    {product.brand && <p className="text-xs text-accent font-medium">{product.brand}</p>}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {isOpen && searchResults.length === 0 && searchQuery.trim().length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-xl p-4 z-50">
              <p className="text-center text-sm text-muted-foreground">No products found matching &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
