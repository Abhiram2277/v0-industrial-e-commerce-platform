import type { Metadata } from "next"
import { getCanonicalUrl } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Contact Us | PND Industrial Suppliers",
  description: "Get in touch with PND Industrial Suppliers in Nellore. Call, email, or visit us for industrial solutions and PPE.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
