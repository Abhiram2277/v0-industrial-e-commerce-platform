import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | PND Industrial Suppliers",
  description: "Get in touch with PND Industrial Suppliers in Nellore. Call, email, or visit us for industrial solutions and PPE.",
  alternates: {
    canonical: "https://www.pndindustrialsuppliers.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
