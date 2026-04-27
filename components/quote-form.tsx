"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle, ShoppingCart, X, Plus, Trash2 } from "lucide-react"
import { getAllProductsClient, getAllCategoriesClient } from "@/lib/products-combined-client"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface QuoteItem {
  id: string
  category: string
  product: string
  quantity: string
}

export function QuoteForm() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("product")
  const { toast } = useToast()
  const { items: cartItems, removeItem } = useCart()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [quoteReference, setQuoteReference] = useState<string>("")
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    { id: crypto.randomUUID(), category: "", product: "", quantity: "1" }
  ])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  useEffect(() => {
    Promise.all([getAllProductsClient(), getAllCategoriesClient()]).then(([prods, cats]) => {
      setProducts(prods)
      setCategories(cats)

      if (productId) {
        const product = prods.find((p) => p.id === productId)
        if (product) {
          setQuoteItems([{
            id: crypto.randomUUID(),
            category: product.category,
            product: product.name,
            quantity: "1"
          }])
        }
      }
    })
  }, [productId])

  const addQuoteItem = () => {
    setQuoteItems([...quoteItems, { id: crypto.randomUUID(), category: "", product: "", quantity: "1" }])
  }

  const removeQuoteItem = (id: string) => {
    if (quoteItems.length > 1) {
      setQuoteItems(quoteItems.filter(item => item.id !== id))
    }
  }

  const updateQuoteItem = (id: string, field: keyof QuoteItem, value: string, resetProduct = false) => {
    setQuoteItems(quoteItems.map(item => {
      if (item.id === id) {
        const updates: Partial<QuoteItem> = { [field]: value }
        if (resetProduct) {
          updates.product = ""
        }
        return { ...item, ...updates }
      }
      return item
    }))
  }

  const getProductsForCategory = (categorySlug: string) => {
    return products.filter(p => p.category === categorySlug)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate that at least one item is selected (either from cart or quote items)
    const hasCartItems = cartItems.length > 0
    const hasValidQuoteItems = quoteItems.some(item => item.category && item.product)

    if (!hasCartItems && !hasValidQuoteItems) {
      toast({
        title: "No items selected",
        description: "Please add items to your cart or select products for the quote.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        quoteItems: quoteItems.filter(item => item.category && item.product).map(item => ({
          category: item.category,
          product: item.product,
          quantity: item.quantity,
        })),
        cartItems: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          brand: item.brand,
          quantity: item.quantity,
        })),
      }

      console.log("[v0] Submitting quote request:", submissionData)

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit quote")
      }

      console.log("[v0] Quote saved successfully:", result.data)

      setQuoteReference(result.data.quoteReference || "")
      setIsSubmitted(true)

      toast({
        title: "Quote request submitted!",
        description: `Reference: ${result.data.quoteReference}. Our team will contact you within 24 hours.`,
      })

      setTimeout(() => {
        setIsSubmitted(false)
        setQuoteReference("")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
        setQuoteItems([{ id: crypto.randomUUID(), category: "", product: "", quantity: "1" }])
      }, 3000)
    } catch (error) {
      console.error("[v0] Error submitting quote:", error)
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="border-accent/50">
        <CardContent className="pt-12 pb-12">
          <div className="text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Quote Request Received!
            </h3>
            {quoteReference && (
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 my-4">
                <p className="text-sm text-muted-foreground mb-1">Reference Number</p>
                <p className="text-xl font-mono font-bold text-accent">{quoteReference}</p>
              </div>
            )}
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              Thank you for your interest. A confirmation email has been sent to your email address. Our sales team will review your request and contact you within 24 hours.
            </p>
            <p className="text-sm text-muted-foreground italic pt-2">
              Keep your reference number for your records when contacting our sales team.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {cartItems.length > 0 && (
        <Card className="border-accent/30 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <ShoppingCart className="h-5 w-5" />
              Items in Your Cart ({cartItems.length})
            </CardTitle>
            <CardDescription>These products will be included in your quote request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden bg-secondary/30 flex-shrink-0">
                    {item.image ? (
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-xl font-bold text-primary/20">
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
                    <h4 className="font-semibold text-sm leading-tight">{item.name}</h4>
                    {item.brand && (
                      <Badge variant="secondary" className="text-xs mt-1 bg-accent/10 text-accent border-accent/20">
                        {item.brand}
                      </Badge>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">Quantity: {item.quantity}</p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Get Your Custom Quote
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Fill out the form below and our team will provide you with competitive pricing and expert recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              </div>

            {/* Multi-Product Selector */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold">Products Required</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addQuoteItem}
                  className="bg-transparent"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Product
                </Button>
              </div>
              
              <div className="space-y-3">
                {quoteItems.map((item, index) => (
                  <div key={item.id} className="p-4 border rounded-lg bg-secondary/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Product {index + 1}</span>
                      {quoteItems.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeQuoteItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                      <div className="space-y-2 sm:col-span-1 lg:col-span-4">
                        <Label className="text-xs font-medium">Category</Label>
                        <Select 
                          value={item.category} 
                          onValueChange={(value) => {
                            updateQuoteItem(item.id, "category", value, true)
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.slug} value={cat.slug}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2 sm:col-span-1 lg:col-span-5">
                        <Label className="text-xs font-medium">Product</Label>
                        <Select 
                          value={item.product} 
                          onValueChange={(value) => updateQuoteItem(item.id, "product", value)}
                          disabled={!item.category}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={item.category ? "Select product" : "Select category first"} />
                          </SelectTrigger>
                          <SelectContent>
                            {getProductsForCategory(item.category).map((prod) => (
                              <SelectItem key={prod.id} value={prod.name}>
                                {prod.name}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">Other (Specify in message)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                        <Label className="text-xs font-medium">Quantity</Label>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuoteItem(item.id, "quantity", e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="resize-none"
              />
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                By submitting this form, you agree to be contacted by our sales team. We respect your privacy and will
                never share your information with third parties.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Quote Request
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
