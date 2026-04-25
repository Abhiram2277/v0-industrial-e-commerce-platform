"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

export function CartButton() {
  const { getTotalItems, setIsOpen } = useCart()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative hover:bg-accent hover:text-accent-foreground bg-transparent"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopping-cart-0nYBoMu2kdkdRXlHWUzBQPrvbekGhI.png"
        alt="Shopping Cart"
        width={24}
        height={24}
        className="object-contain"
      />
      <span className="sr-only">Shopping cart</span>
    </Button>
  )
}
