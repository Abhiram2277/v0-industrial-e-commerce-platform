import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="relative h-40 w-40 mb-4 bg-white rounded-lg p-2 flex-shrink-0">
              <Image src="/pnd-logo.png" alt="PND Industrial Suppliers Logo" fill className="object-contain" />
            </div>
            <h3 className="font-bold text-2xl md:text-3xl mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              PND Industrial <br className="hidden sm:inline" />Suppliers
            </h3>
            <p className="text-sm text-primary-foreground/85 leading-relaxed mb-4">
              Your Premier Channel Partner for Industrial Excellence. Specializing in high-quality PPE and industrial
              tools.
            </p>
            <p className="text-base font-bold text-accent">"Life is Precious"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg md:text-xl mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-accent transition-colors font-medium">
                  Partner Brands
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-accent transition-colors font-medium">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg md:text-xl mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors font-medium">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/blog?type=technical-guide" className="hover:text-accent transition-colors font-medium">
                  Technical Guides
                </Link>
              </li>
              <li>
                <Link href="/blog?type=product-guide" className="hover:text-accent transition-colors font-medium">
                  Product Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information - Nellore */}
          <div>
            <h3 className="font-bold text-lg md:text-xl mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Nellore Branch
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/85 leading-relaxed">
                  Plot no: 23-18-19, Pardhasaradhi Nagar, Krishnapatnam Rd, Nellore
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+919398644987" className="hover:text-accent transition-colors font-medium">
                    +91 9398644987
                  </a>
                  <a href="tel:+919701110242" className="hover:text-accent transition-colors font-medium">
                    +91 9701110242
                  </a>
                  <a href="tel:+918712268672" className="hover:text-accent transition-colors font-medium">
                    +91 8712268672
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Kakinada */}
          <div>
            <h3 className="font-bold text-lg md:text-xl mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Kakinada Branch
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/85 leading-relaxed">
                  Door No. 2, 98/2, near Gangalamma Devi Temple, Vakalapudi, Kakinada, Andhra Pradesh 533005
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+917730940410" className="hover:text-accent transition-colors font-medium">
                    +91 77309 40410
                  </a>
                  <a href="tel:+919182156665" className="hover:text-accent transition-colors font-medium">
                    +91 91821 56665
                  </a>
                  <a href="tel:+919948592229" className="hover:text-accent transition-colors font-medium">
                    +91 99485 92229
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:pndindustrialsuppliers@gmail.com"
                  className="hover:text-accent transition-colors break-all font-medium text-xs sm:text-sm"
                >
                  pndindustrialsuppliers@gmail.com
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-primary-foreground/20 text-center">
          <p className="text-accent font-bold text-sm md:text-base">© 2026 PND Industrial Suppliers. All Rights Reserved.</p>
          <p className="text-primary-foreground/70 text-xs mt-2">Authorized Channel Partner | Premium Industrial Solutions</p>
        </div>
      </div>
    </footer>
  )
}
