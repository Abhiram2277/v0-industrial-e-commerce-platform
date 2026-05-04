import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getBlogArticles } from "@/lib/blog-data"

const regionInfo = {
  nellore: {
    name: "Nellore",
    title: "Nellore Industrial Safety Blog",
    description: "Safety insights tailored for Nellore industries including Krishnapatnam Port, automotive suppliers, chemical manufacturing, food processing, and engineering sectors.",
    industries: ["Krishnapatnam Port", "Automotive Suppliers", "Chemical Manufacturing", "Food Processing", "Engineering & Fabrication"]
  },
  kakinada: {
    name: "Kakinada",
    title: "Kakinada Petrochemical & Industrial Safety Blog",
    description: "Expert guidance for Kakinada's petrochemical refineries, power plants, pharmaceutical units, fertilizer plants, and port operations.",
    industries: ["Petroleum Refineries", "Petrochemical Plants", "Power Plants", "Pharmaceutical Units", "Port Operations"]
  }
}

interface RegionBlogPageProps {
  params: Promise<{
    region: 'nellore' | 'kakinada'
  }>
}

export async function generateMetadata({ params }: RegionBlogPageProps) {
  const { region } = await params
  const info = regionInfo[region]
  
  return {
    title: `${info.title} | PND Industrial Suppliers`,
    description: info.description,
    keywords: `industrial safety, ${region}, PPE, workplace safety`
  }
}

export default async function RegionBlogPage({ params }: RegionBlogPageProps) {
  const { region } = await params
  const info = regionInfo[region]
  const articles = getBlogArticles({ region: region as any })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-spacing-lg bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:text-primary-foreground/80">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Articles
              </Link>
            </Button>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="heading-h1 text-balance">
                {info.title}
              </h1>
              <p className="body-large text-primary-foreground/90">
                {info.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Industries */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <h2 className="heading-h2 mb-8">Industries We Serve in {info.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {info.industries.map((industry) => (
                <div 
                  key={industry}
                  className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <p className="body-regular font-semibold text-accent">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="heading-h2 mb-8 md:mb-12">
              {articles.length} Articles for {info.name}
            </h2>
            
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
                {articles.map(article => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="body-regular text-muted-foreground mb-4">
                  More articles coming soon for {info.name}
                </p>
                <Button asChild>
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Regional CTA */}
        <section className="section-spacing-lg bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="heading-h2">Need Tailored Safety Solutions for {info.name}?</h2>
              <p className="body-large text-primary-foreground/90">
                Our team in {info.name} understands the unique safety challenges of local industries. Schedule a consultation with our experts.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/quote">Get Safety Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
