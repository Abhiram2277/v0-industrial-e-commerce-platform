import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle, Home, MessageSquare } from "lucide-react"

export const metadata = {
  title: "Page Not Found | PND Industrial Suppliers",
  description: "The page you're looking for doesn't exist. Browse our product categories or contact us for assistance.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="bg-accent/10 p-6 rounded-full">
              <AlertCircle className="h-16 w-16 text-accent" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Page Not Found
          </h1>

          <p className="text-xl text-muted-foreground mb-2">
            We couldn't find the product or page you're looking for.
          </p>

          <p className="text-base text-muted-foreground mb-8">
            The product may have been removed or the URL might be incorrect. Please try browsing our categories or contact us for help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold">
              <Link href="/quote" rel="nofollow" className="inline-flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Request Quote
              </Link>
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-6">Browse our product categories:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { name: "Foot Protection", href: "/category/foot-protection" },
                { name: "Head Protection", href: "/category/head-protection" },
                { name: "Hand Protection", href: "/category/hand-protection" },
                { name: "Eye Protection", href: "/category/eye-protection" },
                { name: "Fall Protection", href: "/category/fall-protection" },
                { name: "Respiratory", href: "/category/respiratory" },
                { name: "High-Vis/Workwear", href: "/category/high-vis" },
              ].map((category) => (
                <Button key={category.href} asChild variant="outline" className="justify-center">
                  <Link href={category.href}>{category.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
