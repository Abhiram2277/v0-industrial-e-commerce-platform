"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle, Home } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Product page error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="bg-red-500/10 p-6 rounded-full">
              <AlertTriangle className="h-16 w-16 text-red-600" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Something Went Wrong
          </h1>

          <p className="text-xl text-muted-foreground mb-2">
            We encountered an error loading this product.
          </p>

          <p className="text-base text-muted-foreground mb-8">
            This could be a temporary issue. Please try again or browse our other products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset} 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Try Again
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              If this problem persists, please <Link href="/quote" rel="nofollow" className="text-accent font-semibold hover:underline">contact us</Link> for assistance.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
