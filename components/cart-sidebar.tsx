"use client"

import { useCart } from "@/lib/cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function CartSidebar() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, getTotalItems } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="shrink-0">
          <SheetTitle className="flex items-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <ShoppingCart className="h-5 w-5" />
            Cart ({getTotalItems()} items)
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Your cart is empty
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Add products to your cart to request a quote</p>
            <Button onClick={() => setIsOpen(false)} className="bg-accent hover:bg-accent/90">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-hidden min-h-0">
              <ScrollArea className="h-full">
                <div className="space-y-4 py-4 px-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border rounded-lg p-3 bg-card hover:bg-accent/5 transition-colors"
                    >
                      <div className="relative h-20 w-20 rounded-md overflow-hidden bg-secondary/30 flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-2xl font-bold text-primary/20">
                              {item.name
                                .split(" ")
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm leading-tight mb-1 line-clamp-2">{item.name}</h4>
                        {item.brand && (
                          <Badge variant="secondary" className="text-xs mb-2 bg-accent/10 text-accent border-accent/20">
                            {item.brand}
                          </Badge>
                        )}

                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1 border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10 ml-auto"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <SheetFooter className="shrink-0 border-t pt-4 flex-col gap-3 sm:flex-col">
              <div className="text-center text-sm text-muted-foreground">
                Submit your cart to receive a detailed quote for all items
              </div>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 text-base">
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  Request Quote for {getTotalItems()} Item{getTotalItems() > 1 ? 's' : ''}
                </Link>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
