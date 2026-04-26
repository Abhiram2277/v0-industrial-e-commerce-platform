"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 bg-background" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Get in touch with our expert team for all your industrial safety needs
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow hover:border-accent/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Nellore Branch
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Plot no: 23-18-19, Pardhasaradhi Nagar, Krishnapatnam Rd, Near Narayana Medical College, Nellore
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow hover:border-accent/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Kakinada Branch
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        D.No. 2-98/2B, Near Gangalamma Devi Temple, Opp. Indrapasta Apartment, Vakalapudi, Kakinada, AP-533005
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow hover:border-accent/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Email Address
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="mailto:pndindustrialsuppliers@gmail.com"
                          className="hover:text-accent transition-colors break-all"
                        >
                          pndindustrialsuppliers@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow hover:border-accent/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Nellore Branch Phones
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>
                          <a href="tel:+919398644987" className="hover:text-accent transition-colors font-medium">
                            +91 9398644987
                          </a>
                        </p>
                        <p>
                          <a href="tel:+919701110242" className="hover:text-accent transition-colors font-medium">
                            +91 9701110242
                          </a>
                        </p>
                        <p>
                          <a href="tel:+918712268672" className="hover:text-accent transition-colors font-medium">
                            +91 8712268672
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow hover:border-accent/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Kakinada Branch Phones
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>
                          <a href="tel:+917730940410" className="hover:text-accent transition-colors font-medium">
                            +91 77309 40410
                          </a>
                        </p>
                        <p>
                          <a href="tel:+919182156665" className="hover:text-accent transition-colors font-medium">
                            +91 91821 56665
                          </a>
                        </p>
                        <p>
                          <a href="tel:+919948592229" className="hover:text-accent transition-colors font-medium">
                            +91 99485 92229
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6">
                  For general inquiries, partnership opportunities, or support questions—fill out the form below and we'll get back to you within 24 hours.
                </p>
                <p className="text-sm text-accent font-semibold mb-4">
                  💡 Need a product quote? Use the <a href="/quote" className="underline hover:text-accent/80">"Get a Quote"</a> option instead for faster processing.
                </p>
                <ContactForm />
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          Business Hours
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Monday - Friday:</span>
                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Saturday:</span>
                            <span className="font-medium">9:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sunday:</span>
                            <span className="font-medium">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Why Choose PND Industrial Suppliers?
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="leading-relaxed">
                          Authorized channel partner for premium international brands
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="leading-relaxed">6+ years of industry experience in Nellore</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="leading-relaxed">Comprehensive range of PPE and industrial tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="leading-relaxed">Expert guidance and personalized solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="leading-relaxed">Competitive pricing and fast delivery</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <p className="text-2xl font-bold mb-2 text-accent">"Life is Precious"</p>
                    <p className="text-sm leading-relaxed opacity-90">
                      Our guiding philosophy drives us to provide the highest quality safety equipment and tools to
                      protect workers and enhance productivity in every workplace.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Find Us on the Map
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Nellore Branch
                  </h3>
                  <div className="relative">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <iframe
                          src="https://www.google.com/maps?q=PND+INDUSTRIAL+SUPPLIERS,+C2F4%2B6FH,+SH+444,+Nellore,+Andhra+Pradesh+524003&output=embed"
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="PND Industrial Suppliers Location - Nellore"
                        ></iframe>
                      </CardContent>
                    </Card>
                    <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <p className="font-semibold text-sm line-clamp-1">PND Industrial Suppliers...</p>
                          <p className="text-xs text-gray-700 mt-2 leading-relaxed">
                            C2F4+6FH, SH 444, Nellore, Andhra Pradesh 524003
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex gap-0.5 text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-xs">★</span>
                              ))}
                            </div>
                            <span className="text-xs text-gray-700">4.6</span>
                            <a href="https://maps.app.goo.gl/CnL7pq9HzQvQvKYJ7" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs hover:underline">
                              17 reviews
                            </a>
                          </div>
                          <a
                            href="https://maps.app.goo.gl/CnL7pq9HzQvQvKYJ7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-xs font-medium hover:underline mt-2 block"
                          >
                            View larger map
                          </a>
                        </div>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=C2F4+6FH,+SH+444,+Nellore,+Andhra+Pradesh+524003"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 flex-shrink-0 text-sm font-medium"
                          title="Get directions"
                        >
                          Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Kakinada Branch
                  </h3>
                  <div className="relative">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <iframe
                          src="https://www.google.com/maps?q=D.No.+2-98%2F2B,+Gangalamma+Devi+Temple,+Vakalapudi,+Kakinada,+AP-533005&output=embed"
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="PND Industrial Suppliers Location - Kakinada"
                        ></iframe>
                      </CardContent>
                    </Card>
                    <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <p className="font-semibold text-sm line-clamp-1">PND Industrial Suppliers...</p>
                          <p className="text-xs text-gray-700 mt-2 leading-relaxed">
                            D.No. 2-98/2B, Vakalapudi, Kakinada, AP-533005
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex gap-0.5 text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-xs">★</span>
                              ))}
                            </div>
                            <span className="text-xs text-gray-700">5.0</span>
                            <a href="https://maps.app.goo.gl/2wuDnZxifZQMiJWN6" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs hover:underline">
                              9 reviews
                            </a>
                          </div>
                          <a
                            href="https://maps.app.goo.gl/2wuDnZxifZQMiJWN6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-xs font-medium hover:underline mt-2 block"
                          >
                            View on Google Maps
                          </a>
                        </div>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=D.No.+2-98/2B,+Vakalapudi,+Kakinada,+AP-533005"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 flex-shrink-0 text-sm font-medium"
                          title="Get directions"
                        >
                          Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
