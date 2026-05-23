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
  title: "PND Industrial Suppliers | PPE & Safety Equipment — Nellore & Kakinada, AP",
  description:
    "Authorized PPE & industrial safety equipment supplier in Nellore & Kakinada, AP. Channel partner for Udyogi, Hillson, Bosch, DeWalt & Ador Welding. Call for bulk pricing.",
  metadataBase: new URL("https://pndindustrialsuppliers.com"),
  alternates: {
    canonical: "https://pndindustrialsuppliers.com",
  },
  generator: "v0.app",
  keywords: [
    "Industrial Suppliers",
    "PPE",
    "Safety Equipment",
    "Safety Shoes",
    "Welding Equipment",
    "Bosch Tools",
    "DeWalt",
    "Stanley",
    "Industrial Tools",
    "Nellore",
    "Kakinada",
    "Andhra Pradesh",
    "Head Protection",
    "Fall Protection",
    "Hand Protection",
    "Foot Protection",
    "Harness",
    "Workwear",
    "Industrial Safety"
  ],
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
  openGraph: {
    title: "PND Industrial Suppliers | PPE & Safety Equipment — Nellore & Kakinada",
    description: "Authorized PPE & industrial safety equipment supplier in Nellore & Kakinada, AP. Channel partner for Udyogi, Hillson, Bosch, DeWalt & Ador Welding. Call for bulk pricing.",
    url: "https://pndindustrialsuppliers.com",
    siteName: "PND Industrial Suppliers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PND Industrial Suppliers | PPE & Safety Equipment",
    description: "Authorized PPE & industrial safety equipment supplier in Nellore & Kakinada, AP. Channel partner for Udyogi, Hillson, Bosch, DeWalt & Ador Welding. Call for bulk pricing.",
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
        
        {/* LocalBusiness Schema - Nellore Branch */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PND Industrial Suppliers - Nellore",
              "description": "Authorized PPE and industrial safety equipment supplier in Nellore, Andhra Pradesh. Dealer for Udyogi, Hillson, Bosch, DeWalt, Ador Welding.",
              "url": "https://pndindustrialsuppliers.com",
              "telephone": "+919398644987",
              "email": "pndindustrialsuppliers@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No 23-18-19, Pardhasaradhi Nagar, Krishnapatnam Road",
                "addressLocality": "Nellore",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "524004",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "14.4426",
                "longitude": "79.9865"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.indiamart.com/pndindustrialsuppliers/",
                "https://www.justdial.com/Nellore/Pnd-Industrial-Suppliers/9999PX861-X861-251129045314-Y9E4_BZDET"
              ],
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Bank Transfer, UPI"
            })
          }}
        />

        {/* LocalBusiness Schema - Kakinada Branch */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PND Industrial Suppliers - Kakinada",
              "description": "Authorized PPE and industrial safety equipment supplier in Kakinada, Andhra Pradesh. Dealer for Udyogi, Hillson, Bosch, DeWalt, Ador Welding.",
              "url": "https://pndindustrialsuppliers.com",
              "telephone": "+917730940410",
              "email": "pndindustrialsuppliers@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Door No. 2, 98/2, near Gangalamma Devi Temple, Vakalapudi",
                "addressLocality": "Kakinada",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "533005",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "16.9891",
                "longitude": "82.2475"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.indiamart.com/pndindustrialsuppliers/",
                "https://www.justdial.com/Kakinada/Pnd-Industrial-Suppliers/9999PX861-X861-251129045314-Y9E4_BZDET"
              ],
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Bank Transfer, UPI"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PND Industrial Suppliers",
              "url": "https://pndindustrialsuppliers.com",
              "logo": "https://pndindustrialsuppliers.com/pnd-logo.png",
              "description": "Leading industrial solutions provider in Nellore & Kakinada, AP. Authorized channel partner for Udyogi Safety PPE, Bosch Tools, DeWalt, Stanley, and more.",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919398644987",
                "contactType": "Sales",
                "areaServed": ["Nellore", "Kakinada", "Andhra Pradesh"]
              },
              "sameAs": [
                "https://www.facebook.com/pndindustrialsuppliers",
                "https://www.instagram.com/pndindustrialsuppliers"
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Plot no: 23-18-19, Pardhasaradhi Nagar, Krishnapatnam Rd",
                  "addressLocality": "Nellore",
                  "addressRegion": "AP",
                  "postalCode": "524001",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Door No. 2, 98/2, near Gangalamma Devi Temple, Vakalapudi",
                  "addressLocality": "Kakinada",
                  "addressRegion": "AP",
                  "postalCode": "533005",
                  "addressCountry": "IN"
                }
              ]
            })
          }}
        />
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
