import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, User } from "lucide-react"
import type { BlogArticle } from "@/lib/blog-data"

interface BlogCardProps {
  article: BlogArticle
}

export function BlogCard({ article }: BlogCardProps) {
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
    <Card className="group card-hover flex flex-col h-full shadow">
      <CardHeader className="card-spacing pb-3 md:pb-4">
        <div className="flex card-gap mb-3">
          <Badge variant="secondary">{regionLabel}</Badge>
          <Badge variant="outline">{industryLabel}</Badge>
        </div>
        <CardTitle className="heading-h3 group-hover:text-accent transition-colors">
          <Link href={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 leading-relaxed mt-2 body-small">
          {article.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 card-spacing pt-0">
        <div className="space-y-4">
          <p className="body-small text-muted-foreground">{article.content.substring(0, 150)}...</p>
          <div className="flex flex-wrap card-gap text-xs">
            {article.keywords.slice(0, 3).map((keyword) => (
              <span key={keyword} className="text-accent font-medium">#{keyword}</span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col card-spacing pt-3 md:pt-4 border-t">
        <div className="w-full flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="icon-tiny" />
            <span>{article.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="icon-tiny" />
            <span>{article.author}</span>
          </div>
        </div>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          <Link href={`/blog/${article.slug}`}>
            Read Article <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface BlogCardFooterProps {
  article: BlogArticle
}

export function BlogCardFooter({ article }: BlogCardFooterProps) {
  return (
    <div className="flex items-center justify-between text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <Clock className="icon-tiny" />
        <span>{article.readingTime} min</span>
      </div>
      <time dateTime={article.publishedAt} className="text-muted-foreground">
        {new Date(article.publishedAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })}
      </time>
    </div>
  )
}
