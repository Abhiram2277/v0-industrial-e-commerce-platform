"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function CartButton() {
  const { getTotalItems, setIsOpen } = useCart()
  const totalItems = getTotalItems()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative hover:bg-accent hover:text-accent-foreground bg-transparent text-base font-light"
      onClick={() => setIsOpen(true)}
    >
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground border-2 border-background"
        >
          {totalItems}
        </Badge>
      )}
      <span className="sr-only">Shopping cart with {totalItems} items</span>
    </Button>
  )
}
