import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2 } from "lucide-react"
import type { BlogArticle } from "@/lib/blog-data"

interface BlogPostProps {
  article: BlogArticle
  relatedArticles?: BlogArticle[]
}

export function BlogPostContent({ article, relatedArticles }: BlogPostProps) {
  const regionLabel = {
    nellore: "Nellore",
    kakinada: "Kakinada",
    "ap-wide": "Andhra Pradesh"
  }[article.region]

  const industryLabel = {
    "ports-logistics": "Ports & Logistics",
    petrochemical: "Petrochemical",
    pharma: "Pharmaceutical",
    "power-plants": "Power Plants",
    manufacturing: "Manufacturing",
    "food-processing": "Food Processing"
  }[article.industry]

  const contentTypeLabel = {
    "technical-guide": "Technical Guide",
    "event-coverage": "Event Coverage",
    "product-guide": "Product Guide",
    "industry-news": "Industry News"
  }[article.contentType]

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header Navigation */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex flex-wrap card-gap mb-4">
          <Badge>{regionLabel}</Badge>
          <Badge variant="outline">{industryLabel}</Badge>
          <Badge variant="secondary">{contentTypeLabel}</Badge>
        </div>
        
        <h1 className="heading-h1 mb-6 text-balance" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {article.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="icon-small" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="icon-small" />
              <span>{article.readingTime} min read</span>
            </div>
          </div>
          <time dateTime={article.publishedAt} className="text-sm text-muted-foreground">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12 body-regular">
        {article.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)[0].length
            const text = paragraph.replace(/^#+\s/, '')
            if (level === 1) return <h1 key={idx} className="heading-h1 mt-8 mb-4">{text}</h1>
            if (level === 2) return <h2 key={idx} className="heading-h2 mt-6 mb-3">{text}</h2>
            if (level === 3) return <h3 key={idx} className="heading-h3 mt-4 mb-2">{text}</h3>
            return null
          }
          if (paragraph.startsWith('-')) {
            const items = paragraph.split('\n').filter(line => line.startsWith('-'))
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                {items.map((item, i) => (
                  <li key={i}>{item.replace(/^-\s/, '')}</li>
                ))}
              </ul>
            )
          }
          if (paragraph.trim()) {
            return <p key={idx} className="mb-4 leading-relaxed text-muted-foreground">{paragraph}</p>
          }
          return null
        })}
      </div>

      {/* Keywords */}
      <div className="mb-12 pb-8 border-b">
        <h3 className="heading-h3 mb-4">Topics Covered</h3>
        <div className="flex flex-wrap card-gap">
          {article.keywords.map((keyword) => (
            <Badge key={keyword} variant="outline">{keyword}</Badge>
          ))}
        </div>
      </div>

      {/* CTAs */}
      {article.cta && article.cta.length > 0 && (
        <div className="mb-12 pb-12 border-b">
          <h3 className="heading-h3 mb-6">Next Steps</h3>
          <div className="grid md:grid-cols-2 card-gap">
            {article.cta.map((cta, idx) => (
              <Button
                key={idx}
                asChild
                size="lg"
                className={cta.type === 'primary' 
                  ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                  : 'bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'}
              >
                <Link href={cta.link}>{cta.text}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Share & Author Info */}
      <div className="bg-muted/30 rounded-lg card-spacing">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b">
          <div className="flex-1">
            <h4 className="heading-h3 mb-1">{article.author}</h4>
            <p className="body-small text-muted-foreground">{article.authorTitle}</p>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
        <p className="body-small text-muted-foreground mb-4">
          {article.author} brings years of expertise in industrial safety and regional compliance requirements for Andhra Pradesh industries.
        </p>
      </div>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mt-16">
          <h3 className="heading-h2 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 card-gap">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                href={`/blog/${relatedArticle.slug}`}
                className="group bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all p-4 hover:-translate-y-1"
              >
                <Badge className="mb-3" variant="secondary">{relatedArticle.region}</Badge>
                <h4 className="heading-h3 line-clamp-2 group-hover:text-accent transition-colors mb-2">
                  {relatedArticle.title}
                </h4>
                <p className="body-small text-muted-foreground line-clamp-2 mb-4">{relatedArticle.excerpt}</p>
                <div className="flex items-center text-accent text-sm font-semibold">
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
