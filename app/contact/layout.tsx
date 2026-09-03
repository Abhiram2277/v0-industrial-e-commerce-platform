import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Visit Our Safety Material Shop | Nellore & Kakinada | PND",
  description: "Visit PND Industrial Suppliers' safety material shop in Nellore or Kakinada. Bulk PPE, tools & safety gear available with expert guidance.",
  alternates: {
    canonical: "https://pndindustrialsuppliers.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
