import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
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
    <Card className="group card-hover flex flex-col h-full shadow hover:shadow-lg transition-shadow">
      <CardHeader className="card-spacing pb-3 md:pb-4">
        <div className="flex flex-wrap card-gap mb-4">
          <Badge variant="secondary" className="text-xs font-medium">{regionLabel}</Badge>
          <Badge variant="outline" className="text-xs">{industryLabel}</Badge>
          <Badge className="text-xs bg-accent/10 text-accent hover:bg-accent/20">{contentTypeLabel}</Badge>
        </div>
        <CardTitle className="heading-h3 group-hover:text-accent transition-colors line-clamp-2">
          <Link href={`/blog/${article.slug}`} className="hover:text-accent">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 leading-relaxed mt-3 body-small">
          {article.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 card-spacing pt-2">
        <div className="space-y-4">
          <div className="flex flex-wrap card-gap text-xs">
            {article.keywords.slice(0, 3).map((keyword) => (
              <span key={keyword} className="inline-block px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">#{keyword}</span>
            ))}
          </div>
        </div>
      </CardContent>
      <div className="flex flex-col card-spacing pt-3 md:pt-4 border-t">
        <div className="w-full flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="icon-tiny" />
            <span>{article.readingTime} min read</span>
          </div>
          <time dateTime={article.publishedAt} className="text-muted-foreground">
            {new Date(article.publishedAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
        </div>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          <Link href={`/blog/${article.slug}`}>
            Read Article <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}
