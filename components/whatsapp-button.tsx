"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Using the first contact number provided
    window.open("https://wa.me/919398644987", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110 p-0 border-0 bg-transparent"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-XU4Ear3w2SHLHM2DO9vJgN3gLUcSaK.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="object-contain"
      />
    </Button>
  )
}
