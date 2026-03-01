"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function FloatingBackButton() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
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
