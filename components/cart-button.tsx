"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
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
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}
