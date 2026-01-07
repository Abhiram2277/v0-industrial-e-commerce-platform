"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Package, ShieldCheck, Wrench, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { use } from "react"
import Image from "next/image"

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = products.find((p) => p.id === id)

  const { addItem, openCart } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem(product)
    openCart()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-secondary/30 rounded-xl overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-8xl font-bold text-primary/20 mb-4">
                          {product.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 3)}
                        </div>
                        <p className="text-muted-foreground">Product Image</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {product.brand && <Badge className="bg-accent text-accent-foreground">{product.brand}</Badge>}
                <h1 className="text-4xl font-bold leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>

                {product.subcategory && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>
                      Category: <span className="font-medium text-foreground">{product.subcategory}</span>
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <div className="flex gap-3">
                    <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                      <Link href={`/quote?product=${product.id}`}>Request Quote</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+919398644987">Call Us</a>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <ShieldCheck className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">Certified</p>
                  </div>
                  <div className="text-center">
                    <Package className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">In Stock</p>
                  </div>
                  <div className="text-center">
                    <Wrench className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">Warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "Montserrat, sans-serif" }}>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "Montserrat, sans-serif" }}>Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
