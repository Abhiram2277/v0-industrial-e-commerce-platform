"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function WhatsAppHeaderButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919398644987", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 bg-transparent border-accent text-accent hover:bg-accent/10 hover:text-accent"
      aria-label="Contact us via WhatsApp"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-XU4Ear3w2SHLHM2DO9vJgN3gLUcSaK.png"
        alt="WhatsApp"
        width={18}
        height={18}
        className="object-contain"
      />
      <span className="hidden sm:inline text-sm font-medium">Direct Messaging</span>
    </Button>
  )
}
