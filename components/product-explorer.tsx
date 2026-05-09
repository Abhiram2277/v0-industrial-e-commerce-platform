'use client'

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"

interface Category {
  slug: string
  name: string
  description: string
  image?: string
}

interface ProductExplorerProps {
  initialProducts: Product[]
  initialCategories: Category[]
}

export function ProductExplorer({ initialProducts, initialCategories }: ProductExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { addItem } = useCart()

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  const handleAddToCart = (productId: string) => {
    const product = initialProducts.find((p) => p.id === productId)
    if (product) {
      addItem(product)
    }
  }

  const categoryData = initialCategories.map((cat) => ({
    id: cat.slug,
    title: cat.name,
    image: cat.image || `/images/categories/${cat.slug}.jpg`,
    description: cat.description,
  }))

  if (!selectedCategory) {
    return (
      <section className="py-16 md:py-32 md:py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl md:text-5xl font-bold mb-4 md:mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Explore Our Products
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Select a category to view our comprehensive range of safety equipment and industrial tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {categoryData.map((category) => {
              const productCount = initialProducts.filter((p) => p.category === category.id).length

              return (
                <Link href={`/category/${category.id}`} className="block">
                <Card
                  key={category.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-32 sm:h-40 md:h-56 w-full overflow-hidden bg-secondary/30">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      loading="lazy"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/0" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accent text-accent-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      {productCount} {productCount === 1 ? "Product" : "Products"}
                    </div>
                  </div>
                  <CardHeader className="text-center pb-2 sm:pb-4 flex-shrink-0">
                    <CardTitle className="text-lg sm:text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {category.title}
                    </CardTitle>
                    <p className="text-xs sm:text-base text-muted-foreground mt-2 sm:mt-4 leading-relaxed">{category.description}</p>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-2 sm:pt-4 pb-4 sm:pb-8 justify-center">
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full transition-all duration-300"
                    >
                      <span>
                        View All Products
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  const currentCategory = categoryData.find((cat) => cat.id === selectedCategory)
  if (!currentCategory) return null

  const categoryProducts = initialProducts.filter((product) => product.category === currentCategory.id)

  return (
    <section className="py-16 md:py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6 md:px-8">
        <div className="mb-8 md:mb-16">
          <Button
            variant="outline"
            onClick={handleBackToCategories}
            className="mb-6 md:mb-10 hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl md:text-5xl font-bold mb-4 md:mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {currentCategory.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse our selection of {categoryProducts.length} {currentCategory.title.toLowerCase()} products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {categoryProducts.map((product) => {
            const productSchema = {
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              image: product.image || "/placeholder.svg",
              brand: {
                "@type": "Brand",
                name: product.brand || "PND Industrial Suppliers",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "3",
                bestRating: "5",
                worstRating: "1",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
                url: "https://pndindustrialsuppliers.com/quote",
                seller: {
                  "@type": "Organization",
                  name: "PND Industrial Suppliers",
                },
              },
            }
            
            return (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Product Schema Markup */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                suppressHydrationWarning
              />
              <CardHeader className="pb-4">
                <div className="mb-6 h-40 bg-secondary/30 rounded-lg overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl font-bold text-primary/20">
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
                  <Badge variant="secondary" className="w-fit mb-3 bg-accent/10 text-accent border-accent/20">
                    {product.brand}
                  </Badge>
                )}
                <CardTitle className="text-lg leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-primary">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-3">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-accent mt-1 font-bold flex-shrink-0">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-0">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => handleAddToCart(product.id)}
                >
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
              </CardFooter>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
