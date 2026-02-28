import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PND Industrial Suppliers | Premium Industrial Solutions & PPE",
  description:
    "Leading industrial solutions provider based in Nellore. Authorized channel partner for Udyogi Safety PPE, Bosch Tools, DeWalt, Stanley, and more. Life is Precious.",
  generator: "v0.app",
  keywords: ["Industrial Suppliers", "PPE", "Safety Equipment", "Bosch Tools", "DeWalt", "Industrial Tools", "Nellore"],
  icons: {
    icon: "/pnd-logo.ico",
    apple: "/pnd-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={`font-sans antialiased`} style={{ fontFamily: "Roboto, var(--font-sans)" }}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
