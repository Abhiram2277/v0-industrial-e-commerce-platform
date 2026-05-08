import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogPostContent } from "@/components/blog-post"
import { getBlogArticleBySlug, getRelatedArticles } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { getBlogCanonicalUrl } from "@/lib/seo-helpers"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)
  
  if (!article) return {}

  const canonicalUrl = getBlogCanonicalUrl(slug)

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    keywords: article.keywords.join(', '),
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      url: canonicalUrl,
      images: [
        {
          url: article.featuredImage || "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [article.featuredImage || "/og-default.jpg"],
    },
    article: {
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.keywords,
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

  return (
    <div className="flex min-h-screen flex-col">
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
                    "url": "https://pndindustrialsuppliers.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PND Industrial Suppliers",
                    "url": "https://pndindustrialsuppliers.com"
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
