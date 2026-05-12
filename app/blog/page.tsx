import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogListing } from "@/components/blog-listing"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getBlogArticles, getAllIndustries, getAllRegions, getAllContentTypes } from "@/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safety Blog & Resources | PND Industrial Suppliers",
  description: "In-depth guides, industry insights, and safety solutions for Nellore and Kakinada industrial sectors. Learn from our experts about workplace safety.",
  keywords: "industrial safety blog, PPE guides, workplace safety, Nellore, Kakinada, Andhra Pradesh",
  openGraph: {
    title: "Safety Blog & Resources | PND Industrial Suppliers",
    description: "Expert insights on workplace safety for Andhra Pradesh industries",
    type: "website"
  },
  alternates: {
    canonical: "https://pndindustrialsuppliers.com/blog",
  },
}

export default function BlogPage() {
  const articles = getBlogArticles()
  const featuredArticle = articles[0]
  const industries = getAllIndustries()
  const regions = getAllRegions()
  const contentTypes = getAllContentTypes()

  // Helper functions to format labels
  const industryLabels: Record<string, string> = {
    'ports-logistics': 'Ports & Logistics',
    'petrochemical': 'Petrochemical',
    'pharma': 'Pharmaceutical',
    'power-plants': 'Power Plants',
    'manufacturing': 'Manufacturing',
    'food-processing': 'Food Processing'
  }

  const regionLabels: Record<string, string> = {
    'nellore': 'Nellore',
    'kakinada': 'Kakinada',
    'ap-wide': 'Andhra Pradesh Wide'
  }

  const contentTypeLabels: Record<string, string> = {
    'technical-guide': 'Technical Guides',
    'event-coverage': 'Event Coverage',
    'product-guide': 'Product Guides',
    'industry-news': 'Industry News'
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-spacing-lg bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="heading-h1 text-balance">
                Industrial Safety Blog & Resources
              </h1>
              <p className="body-large text-primary-foreground/90">
                Expert insights, technical guides, and best practices for workplace safety across Nellore and Kakinada industries. Learn from our team of safety specialists with 6+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row card-button-gap justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="#featured">Browse Latest Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="section-spacing">
            <div className="container mx-auto px-4">
              <h2 className="heading-h2 mb-6 md:mb-12">Featured This Month</h2>
              <div className="grid md:grid-cols-3 card-gap">
                <div className="md:col-span-2">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="heading-h1 hover:text-accent transition-colors">
                          {featuredArticle.title}
                        </h3>
                        <p className="body-large text-muted-foreground leading-relaxed">
                          {featuredArticle.excerpt}
                        </p>
                      </div>
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </Link>
                </div>
                <div className="md:col-span-1">
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <div>
                      <p className="label-text text-muted-foreground mb-1">Reading Time</p>
                      <p className="heading-h3">{featuredArticle.readingTime} min</p>
                    </div>
                    <div>
                      <p className="label-text text-muted-foreground mb-1">Published</p>
                      <p className="body-regular">
                        {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="label-text text-muted-foreground mb-2">Topics</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredArticle.keywords.slice(0, 3).map(keyword => (
                          <span key={keyword} className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Showcase */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-h2 mb-4">Explore by Category</h2>
              <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
                Browse articles organized by industry, location, and content type for easy discovery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Industries */}
              <div className="space-y-4">
                <h3 className="heading-h3 mb-4">By Industry</h3>
                <div className="space-y-2">
                  {industries.map(industry => {
                    const count = articles.filter(a => a.industry === industry).length
                    return (
                      <button
                        key={industry}
                        className="block w-full text-left p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {industryLabels[industry]}
                          </span>
                          <Badge variant="secondary" className="text-xs">{count}</Badge>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Regions */}
              <div className="space-y-4">
                <h3 className="heading-h3 mb-4">By Region</h3>
                <div className="space-y-2">
                  {regions.map(region => {
                    const count = articles.filter(a => a.region === region).length
                    return (
                      <button
                        key={region}
                        className="block w-full text-left p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {regionLabels[region]}
                          </span>
                          <Badge variant="secondary" className="text-xs">{count}</Badge>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Content Types */}
              <div className="space-y-4">
                <h3 className="heading-h3 mb-4">By Type</h3>
                <div className="space-y-2">
                  {contentTypes.map(type => {
                    const count = articles.filter(a => a.contentType === type).length
                    return (
                      <button
                        key={type}
                        className="block w-full text-left p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {contentTypeLabels[type]}
                          </span>
                          <Badge variant="secondary" className="text-xs">{count}</Badge>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="featured" className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="heading-h2 mb-8 md:mb-12">All Articles</h2>
            <BlogListing articles={articles} />
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-spacing-lg bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="heading-h2">Stay Updated with Safety Insights</h2>
              <p className="body-large text-primary-foreground/90">
                Get monthly updates on workplace safety trends, compliance changes, and industry-specific solutions for Andhra Pradesh industries.
              </p>
              <div className="flex flex-col sm:flex-row card-button-gap justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="/contact">Subscribe to Newsletter</Link>
                </Button>
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
