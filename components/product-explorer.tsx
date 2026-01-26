"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { getAllProductsClient, getAllCategoriesClient } from "@/lib/products-combined-client"
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

export function ProductExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(() => {
    Promise.all([getAllProductsClient(), getAllCategoriesClient()]).then(([prods, cats]) => {
      setProducts(prods)
      setCategories(cats)
      setLoading(false)
    })
  }, [])

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      addItem(product)
    }
  }

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p>Loading products...</p>
        </div>
      </section>
    )
  }

  const categoryData = categories.map((cat) => ({
    id: cat.slug,
    title: cat.name,
    image: cat.image || `/images/categories/${cat.slug}.jpg`,
    description: cat.description,
  }))

  if (!selectedCategory) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Explore Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a category to view our comprehensive range of safety equipment and industrial tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categoryData.map((category) => {
              const productCount = products.filter((p) => p.category === category.id).length

              return (
                <Card
                  key={category.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 cursor-pointer overflow-hidden"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="relative h-48 w-full overflow-hidden bg-secondary/30">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/0" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {productCount} Products
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{category.description}</p>
                  </CardHeader>
                  <CardFooter className="pt-0 justify-center">
                    <Button
                      variant="ghost"
                      className="text-accent hover:text-accent-foreground hover:bg-accent"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCategoryClick(category.id)
                      }}
                    >
                      View All Products
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  const currentCategory = categoryData.find((cat) => cat.id === selectedCategory)
  if (!currentCategory) return null

  const categoryProducts = products.filter((product) => product.category === currentCategory.id)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={handleBackToCategories}
            className="mb-6 hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {currentCategory.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of {categoryProducts.length} {currentCategory.title.toLowerCase()} products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 flex flex-col h-full"
            >
              <CardHeader>
                <div className="mb-4 h-48 bg-secondary/30 rounded-lg overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  {!product.image && (
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
                  <Badge variant="secondary" className="w-fit mb-2 bg-accent/10 text-accent border-accent/20">
                    {product.brand}
                  </Badge>
                )}
                <CardTitle className="text-lg leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent mt-1 font-bold">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 pt-0">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => handleAddToCart(product.id)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-accent/30 hover:bg-accent/10 hover:border-accent bg-transparent"
                  >
                    <Link href={`/quote?product=${product.id}`}>Quick Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-accent/30 hover:bg-accent/10 hover:border-accent bg-transparent"
                  >
                    <Link href={`/product/${product.id}`}>View Specs</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
