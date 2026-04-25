"use client"

import Image from "next/image"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Using the first contact number provided
    window.open("https://wa.me/919398644987", "_blank")
  }

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer transition-all hover:scale-110"
      role="button"
      tabIndex={0}
      aria-label="Contact us on WhatsApp"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleWhatsAppClick()
        }
      }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7HtmiQYwE4ONCkFMMergH26ovRgwuF.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="object-contain"
      />
    </div>
  )
}
