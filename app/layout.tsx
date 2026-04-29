import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "PND Industrial Suppliers | Premium Industrial Solutions & PPE",
  description:
    "Leading industrial solutions provider based in Nellore. Authorized channel partner for Udyogi Safety PPE, Bosch Tools, DeWalt, Stanley, and more. Life is Precious.",
  generator: "v0.app",
  keywords: ["Industrial Suppliers", "PPE", "Safety Equipment", "Bosch Tools", "DeWalt", "Industrial Tools", "Nellore"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon-192x192.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://supabase.co" />
        <link rel="dns-prefetch" href="https://api.supabase.co" />
        {/* Preload critical CSS for mobile - non-blocking */}
        <link rel="preload" href="/critical-mobile.css" as="style" media="(max-width: 768px)" />
        {/* Load full stylesheet after critical path */}
        <link rel="stylesheet" href="/critical-mobile.css" media="(max-width: 768px)" />
      </head>
      <body className={`font-sans antialiased`} style={{ fontFamily: "Roboto, var(--font-sans)" }} suppressHydrationWarning>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
