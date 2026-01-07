"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<typeof products>([])
  const searchRef = useRef<HTMLDivElement>(null)

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
  }, [searchQuery])

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
    <div ref={searchRef} className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10" />
      <Input
        type="search"
        placeholder="Search products, categories, brands..."
        className="pl-10 pr-10 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => searchQuery.length > 0 && setIsOpen(true)}
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          <div className="p-2">
            <div className="text-xs text-muted-foreground px-3 py-2">
              Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
            </div>
            {searchResults.slice(0, 10).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={() => {
                  setIsOpen(false)
                  setSearchQuery("")
                }}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors"
              >
                <div className="relative w-12 h-12 flex-shrink-0 bg-muted rounded overflow-hidden">
                  {product.image ? (
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {product.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{product.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {product.brand && <span className="font-medium">{product.brand} • </span>}
                    <span className="capitalize">{product.category.replace(/-/g, " ")}</span>
                  </div>
                </div>
              </Link>
            ))}
            {searchResults.length > 10 && (
              <div className="text-xs text-center text-muted-foreground py-2 border-t mt-2">
                +{searchResults.length - 10} more results
              </div>
            )}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery.length > 0 && searchResults.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg z-50">
          <div className="p-6 text-center text-muted-foreground">
            <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <div className="text-sm">No products found for &quot;{searchQuery}&quot;</div>
            <div className="text-xs mt-1">Try different keywords or browse categories</div>
          </div>
        </div>
      )}
    </div>
  )
}
