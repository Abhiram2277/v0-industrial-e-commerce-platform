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
  title: "PND Industrial Suppliers | Premium PPE & Industrial Tools in Nellore, Kakinada",
  description:
    "Leading industrial safety solutions provider in Nellore & Kakinada. Authorized channel partner for Udyogi, Bosch, DeWalt, Hillson. Premium PPE, power tools, welding equipment. 152+ satisfied customers. 6 years industry experience.",
  keywords: [
    "Industrial Suppliers Nellore",
    "PPE Equipment Nellore",
    "Safety Equipment Kakinada",
    "Bosch Tools Supplier",
    "DeWalt Tools Nellore",
    "Industrial Safety Equipment",
    "Personal Protective Equipment",
    "Udyogi PPE",
    "Welding Equipment Supplier",
    "Industrial Power Tools",
  ],
  alternates: {
    canonical: "https://pndindustrialsuppliers.com",
  },
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
  openGraph: {
    type: "business.business",
    url: "https://pndindustrialsuppliers.com",
    title: "PND Industrial Suppliers | Premium PPE & Industrial Solutions",
    description: "Trusted industrial safety solutions provider in Nellore & Kakinada with 152+ customers and authorized partnerships with Udyogi, Bosch, and DeWalt.",
    siteName: "PND Industrial Suppliers",
    images: [
      {
        url: "https://pndindustrialsuppliers.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PND Industrial Suppliers - Premium PPE & Industrial Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PND Industrial Suppliers | Premium PPE & Industrial Solutions",
    description: "Trusted industrial safety provider with 152+ customers. Bosch, DeWalt, Udyogi authorized distributor.",
    images: ["https://pndindustrialsuppliers.com/og-image.png"],
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
        
        {/* Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PND Industrial Suppliers",
              image: "https://pndindustrialsuppliers.com/og-image.png",
              description:
                "Leading industrial safety solutions provider. Authorized channel partner for Udyogi, Bosch, DeWalt, Hillson, and Asian Industrial Paints.",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Nellore",
                  addressLocality: "Nellore",
                  addressRegion: "Andhra Pradesh",
                  postalCode: "524001",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Kakinada",
                  addressLocality: "Kakinada",
                  addressRegion: "Andhra Pradesh",
                  postalCode: "533001",
                  addressCountry: "IN",
                },
              ],
              telephone: "+91-9398644987",
              email: "pndindustrialsuppliers@gmail.com",
              url: "https://pndindustrialsuppliers.com",
              sameAs: [],
              priceRange: "$$",
              foundingDate: "2020",
              numberOfEmployees: "10-50",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "152",
              },
            }),
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PND Industrial Suppliers",
              url: "https://pndindustrialsuppliers.com",
              logo: "https://pndindustrialsuppliers.com/logo.png",
              description: "Authorized channel partner for premium industrial brands",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9398644987",
                contactType: "Customer Service",
              },
            }),
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
