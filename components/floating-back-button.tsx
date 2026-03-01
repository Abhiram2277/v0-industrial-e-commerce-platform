"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export function FloatingBackButton() {
  const router = useRouter()
  const pathname = usePathname()
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    // Check if there's browser history to go back to
    setCanGoBack(window.history.length > 1)
  }, [])

  const handleBack = () => {
    // Determine safe back navigation based on current path
    if (pathname?.includes("/category/")) {
      // From category page, go to home or shop
      router.push("/")
    } else if (pathname?.includes("/product/")) {
      // From product detail, go back to category or home
      router.back()
    } else if (canGoBack) {
      // Try browser back if available
      router.back()
    } else {
      // Default to home
      router.push("/")
    }
  }

  return (
    <div className="fixed bottom-24 left-4 z-40">
      <Button
        onClick={handleBack}
        size="lg"
        className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-full h-12 px-4 flex items-center justify-center cursor-pointer"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Button>
    </div>
  )
}
