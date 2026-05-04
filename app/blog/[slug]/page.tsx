import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogPostContent } from "@/components/blog-post"
import { getBlogArticleBySlug, getRelatedArticles } from "@/lib/blog-data"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)
  
  if (!article) return {}

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    article: {
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.keywords,
    }
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
            <BlogPostContent article={article} relatedArticles={relatedArticles} />
          </div>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
