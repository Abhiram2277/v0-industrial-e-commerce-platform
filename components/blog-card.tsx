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
    <Card className="group card-hover flex flex-col h-full shadow hover:shadow-lg transition-shadow overflow-hidden">
      {/* Header Section with Badges */}
      <CardHeader className="pb-0 pt-6 px-6">
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge variant="secondary" className="text-xs font-medium px-3 py-1">{regionLabel}</Badge>
          <Badge variant="outline" className="text-xs px-3 py-1">{industryLabel}</Badge>
          <Badge className="text-xs bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1">{contentTypeLabel}</Badge>
        </div>
        
        {/* Title Section */}
        <CardTitle className="heading-h3 group-hover:text-accent transition-colors line-clamp-2 mb-4">
          <Link href={`/blog/${article.slug}`} className="hover:text-accent">
            {article.title}
          </Link>
        </CardTitle>
        
        {/* Excerpt */}
        <CardDescription className="line-clamp-3 leading-relaxed body-small text-muted-foreground mb-6">
          {article.excerpt}
        </CardDescription>
      </CardHeader>

      {/* Content Section with Keywords */}
      <CardContent className="flex-1 px-6 pb-0">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {article.keywords.slice(0, 3).map((keyword) => (
              <span 
                key={keyword} 
                className="inline-block px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-md text-xs font-medium hover:bg-muted transition-colors"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Footer Section */}
      <div className="flex flex-col gap-4 px-6 py-6 border-t mt-4">
        {/* Meta Info */}
        <div className="w-full flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{article.readingTime} min read</span>
          </div>
          <time dateTime={article.publishedAt} className="text-muted-foreground font-medium">
            {new Date(article.publishedAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
        </div>
        
        {/* CTA Button */}
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11 rounded-lg transition-all">
          <Link href={`/blog/${article.slug}`} className="flex items-center justify-center gap-2">
            Read Article <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}
