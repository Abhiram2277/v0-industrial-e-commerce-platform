"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingBackButton() {
  return (
    <div className="fixed bottom-20 left-4 z-40">
      <Link href="/">
        <Button
          size="lg"
          className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-full h-12 px-4 flex items-center justify-center"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="hidden sm:inline">Back</span>
        </Button>
      </Link>
    </div>
  )
}
