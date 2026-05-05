"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
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
    <div className="bg-background py-6 md:hidden border-b">
      <div className="container mx-auto px-4">
        <div ref={searchRef} className="relative max-w-2xl mx-auto">
          {/* Search Input Container */}
          <div className="relative flex items-center bg-white border-2 border-accent rounded-full shadow-sm hover:shadow-md transition-shadow">
            {/* Search Icon */}
            <Search className="h-5 w-5 text-muted-foreground ml-5 flex-shrink-0" />
            
            {/* Input Field */}
            <input
              type="search"
              placeholder="Search"
              className="flex-1 px-4 py-3 bg-transparent text-base focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.length > 0 && setIsOpen(true)}
            />
            
            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="text-muted-foreground hover:text-foreground mr-5 flex-shrink-0 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-3 w-full bg-background border border-accent/20 rounded-2xl shadow-lg max-h-[400px] overflow-y-auto z-50">
              {searchResults.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={() => clearSearch()}
                  className="flex items-center gap-4 p-4 hover:bg-accent/5 transition-colors border-b border-border/50 last:border-0"
                >
                  {product.image && (
                    <div className="relative w-14 h-14 flex-shrink-0">
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

          {/* No Results Message */}
          {isOpen && searchResults.length === 0 && searchQuery.trim().length > 0 && (
            <div className="absolute top-full mt-3 w-full bg-background border border-accent/20 rounded-2xl shadow-lg p-6 z-50">
              <p className="text-center text-sm text-muted-foreground">No products found for &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
