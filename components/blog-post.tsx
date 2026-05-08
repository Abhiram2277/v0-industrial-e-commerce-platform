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
    <article className="max-w-4xl mx-auto px-4 md:px-0">
      {/* Header Navigation */}
      <div className="mb-10">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-12 md:mb-16">
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="px-3 py-1">{regionLabel}</Badge>
          <Badge variant="outline" className="px-3 py-1">{industryLabel}</Badge>
          <Badge variant="secondary" className="px-3 py-1">{contentTypeLabel}</Badge>
        </div>
        
        <h1 className="heading-h1 mb-8 text-balance leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {article.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{article.readingTime} min read</span>
            </div>
          </div>
          <time dateTime={article.publishedAt} className="text-sm text-muted-foreground font-medium">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {/* Table of Contents - Moved before content */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16 border border-border">
        <h3 className="heading-h3 mb-6 flex items-center gap-2">
          <span>📋</span> In This Article
        </h3>
        <ul className="space-y-3 text-sm">
          {article.keywords.map((keyword, idx) => (
            <li key={idx} className="text-foreground/70 hover:text-accent transition-colors ml-4">
              • {keyword}
            </li>
          ))}
        </ul>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-16 body-regular">
        {article.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)[0].length
            const text = paragraph.replace(/^#+\s/, '')
            // Skip H1 tags in content since title is already H1
            if (level === 1) return null
            if (level === 2) return <h2 key={idx} className="heading-h2 mt-12 mb-6 text-foreground">{text}</h2>
            if (level === 3) return <h3 key={idx} className="heading-h3 mt-10 mb-5 text-foreground">{text}</h3>
            return null
          }
          if (paragraph.startsWith('-')) {
            const items = paragraph.split('\n').filter(line => line.startsWith('-'))
            return (
              <ul key={idx} className="list-disc list-inside space-y-4 my-8 pl-4">
                {items.map((item, i) => (
                  <li key={i} className="text-foreground leading-relaxed ml-2 text-base lg:text-lg">{item.replace(/^-\s/, '')}</li>
                ))}
              </ul>
            )
          }
          if (paragraph.trim()) {
            // Check if paragraph contains bold text markers
            const hasBold = paragraph.includes('**')
            let processedText = paragraph
            
            if (hasBold) {
              processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              return (
                <p 
                  key={idx} 
                  className="mb-8 leading-relaxed text-foreground text-base lg:text-lg"
                  dangerouslySetInnerHTML={{ __html: processedText }}
                />
              )
            }
            
            return <p key={idx} className="mb-8 leading-relaxed text-foreground text-base lg:text-lg">{paragraph}</p>
          }
          return null
        })}
      </div>

      {/* CTAs */}
      {article.cta && article.cta.length > 0 && (
        <div className="mb-16 pb-16 border-t pt-12">
          <h3 className="heading-h3 mb-8">Next Steps</h3>
          <div className="grid md:grid-cols-2 gap-6">
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
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg card-spacing border border-primary/20">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <div className="mb-4">
              <h4 className="heading-h3 mb-1 text-foreground">{article.author}</h4>
              <p className="text-sm font-semibold text-accent mb-3">{article.authorTitle}</p>
              <p className="body-regular text-foreground/85 leading-relaxed">
                {article.authorBio}
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="self-start md:self-end">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
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
