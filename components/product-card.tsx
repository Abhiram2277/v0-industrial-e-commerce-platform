"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, CheckCircle, Lock } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart()

  const handleAddToCart = () => {
    addItem(product)
    openCart()
  }

  return (
    <Card className="group hover:shadow-xl transition-all hover:border-accent/50 hover:-translate-y-1 flex flex-col h-full">
      <CardHeader className="pb-4">
        <div className="mb-6 h-48 bg-secondary/30 rounded-lg overflow-hidden relative">
          {product.image ? (
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-primary/20">
                {product.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)}
              </div>
            </div>
          )}
        </div>
        {product.brand && (
          <Badge variant="secondary" className="w-fit mb-3">
            {product.brand}
          </Badge>
        )}
        <CardTitle className="text-lg leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {product.name}
        </CardTitle>
        <CardDescription className="line-clamp-2 leading-relaxed mt-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-3">Key Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-2.5">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button onClick={handleAddToCart} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <div className="flex gap-2 w-full">
          <Button 
            asChild 
            className="flex-1 bg-accent/10 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-200"
          >
            <Link href={`/quote?product=${product.id}`}>Request Quote</Link>
          </Button>
          <Button 
            asChild 
            className="flex-1 bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-200"
          >
            <Link href={`/product/${product.id}`}>View Details</Link>
          </Button>
        </div>
        {/* Trust Badges */}
        <div className="w-full pt-2 border-t flex items-center justify-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-accent" />
            <span>30-Day Replacement</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-accent" />
            <span>1-Year Warranty</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
