import { Phone, CheckCircle2 } from "lucide-react"

export function AboveFoldCTA() {
  return (
    <div className="bg-accent/10 border-b border-accent/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a
              href="tel:+919398644987"
              className="flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>+91 9398644987 (Nellore)</span>
            </a>
            <a
              href="tel:+917730940410"
              className="flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>+91 77309 40410 (Kakinada)</span>
            </a>
          </div>
          <div className="hidden md:block h-4 w-px bg-border" />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              Same-Day Stock
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              Bulk Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              Authorized Dealer
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
