"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react"
import { products, type Product } from "./products"

export interface CartItem {
  id: string
  name: string
  brand?: string
  image?: string
  quantity: number
  category: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product | string, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("pnd-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse cart data")
      }
    }
    setIsHydrated(true)
  }, [])

  // Save cart to localStorage whenever it changes (debounced)
  useEffect(() => {
    if (!isHydrated) return
    
    const timer = setTimeout(() => {
      localStorage.setItem("pnd-cart", JSON.stringify(items))
    }, 300)

    return () => clearTimeout(timer)
  }, [items, isHydrated])

  const addItem = (productOrId: Product | string, quantity = 1) => {
    let product: Product | undefined

    if (typeof productOrId === "string") {
      product = products.find((p) => p.id === productOrId)
    } else {
      product = productOrId
    }

    if (!product) return

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product!.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product!.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          brand: product.brand,
          image: product.image,
          quantity,
          category: product.category,
        },
      ]
    })

    // Open cart sidebar when item is added
    setIsOpen(true)
  }

  const removeItem = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setItems((currentItems) => currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        isOpen,
        openCart,
        closeCart,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
