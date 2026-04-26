import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative h-40 w-40 mb-3 bg-white rounded-lg p-2">
              <Image src="/pnd-logo.png" alt="PND Industrial Suppliers Logo" fill className="object-contain" />
            </div>
            <h3 className="font-bold text-3xl mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              PND Industrial Suppliers
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your Premier Channel Partner for Industrial Excellence. Specializing in high-quality PPE and industrial
              tools.
            </p>
            <p className="mt-4 text-sm font-semibold text-accent">"Life is Precious"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-accent transition-colors">
                  Partner Brands
                </Link>
              </li>
              <li>
                <Link href="/safety-solutions" className="hover:text-accent transition-colors">
                  Safety Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold text-accent mb-2">Nellore Branch</p>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/80 leading-relaxed text-xs">
                    Plot no: 23-18-19, Pardhasaradhi Nagar, Krishnapatnam Rd, Nellore
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <Phone className="h-3 w-3 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919398644987" className="hover:text-accent transition-colors text-xs">
                      +91 9398644987
                    </a>
                    <a href="tel:+919701110242" className="hover:text-accent transition-colors text-xs">
                      +91 9701110242
                    </a>
                    <a href="tel:+918712268672" className="hover:text-accent transition-colors text-xs">
                      +91 8712268672
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <p className="font-semibold text-accent mb-2">Kakinada Branch</p>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/80 leading-relaxed text-xs">
                    D.No. 2-98/2B, Near Gangalamma Devi Temple, Vakalapudi, Kakinada, AP-533005
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <Phone className="h-3 w-3 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+917730940410" className="hover:text-accent transition-colors text-xs">
                      +91 77309 40410
                    </a>
                    <a href="tel:+919182156665" className="hover:text-accent transition-colors text-xs">
                      +91 91821 56665
                    </a>
                    <a href="tel:+919948592229" className="hover:text-accent transition-colors text-xs">
                      +91 99485 92229
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:pndindustrialsuppliers@gmail.com"
                  className="hover:text-accent transition-colors break-all text-xs"
                >
                  pndindustrialsuppliers@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2020-2026 PND Industrial Suppliers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
