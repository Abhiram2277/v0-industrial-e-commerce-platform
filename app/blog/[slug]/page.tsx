import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogPostContent } from "@/components/blog-post"
import { getBlogArticleBySlug, getRelatedArticles } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { getBlogCanonicalUrl } from "@/lib/seo-helpers"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)
  
  if (!article) {
    return {
      title: "Blog Post Not Found | PND Industrial Suppliers",
      description: "This blog post could not be found.",
    }
  }

  const canonicalUrl = getBlogCanonicalUrl(slug)
  const seoTitle = article.seoTitle || article.title
  const seoDescription = article.seoDescription || article.excerpt

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: article.keywords?.join(', ') || [],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: article.author ? [article.author] : [],
      url: canonicalUrl,
      siteName: "PND Industrial Suppliers",
      images: article.featuredImage 
        ? [
            {
              url: article.featuredImage,
              width: 1200,
              height: 630,
              alt: seoTitle,
              type: "image/jpeg",
            }
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
      creator: article.author ? `@${article.author.replace(/\s+/g, '')}` : "@pndsuppliers",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id, 3)
  const canonicalUrl = getBlogCanonicalUrl(slug)

  // BreadcrumbList schema for Google search results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.pndindustrialsuppliers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.pndindustrialsuppliers.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": canonicalUrl
      }
    ]
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <SiteHeader />
      <main className="flex-1">
        <article className="section-spacing">
          <div className="container mx-auto px-4">
            {/* BlogPosting Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": article.seoTitle || article.title,
                  "description": article.seoDescription || article.excerpt,
                  "image": article.featuredImage,
                  "datePublished": article.publishedAt,
                  "dateModified": article.updatedAt,
                  "author": {
                    "@type": "Organization",
                    "name": article.author,
                    "url": "https://www.pndindustrialsuppliers.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PND Industrial Suppliers",
                    "url": "https://www.pndindustrialsuppliers.com"
                  },
                  "url": getBlogCanonicalUrl(slug),
                  "articleBody": article.content
                })
              }}
            />
            <BlogPostContent article={article} relatedArticles={relatedArticles} />
          </div>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
