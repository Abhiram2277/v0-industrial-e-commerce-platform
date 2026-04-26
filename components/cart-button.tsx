"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CartButton() {
  const { getTotalItems, setIsOpen } = useCart()
  const totalItems = getTotalItems()

  return (
    <Button
      variant="outline"
      size="lg"
      className="relative h-12 w-12 hover:bg-accent hover:text-accent-foreground bg-transparent"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopping-cart-0nYBoMu2kdkdRXlHWUzBQPrvbekGhI.png"
        alt="Shopping Cart"
        width={28}
        height={28}
        className="object-contain"
      />
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
