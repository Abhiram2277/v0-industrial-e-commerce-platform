import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogPostContent } from "@/components/blog-post"
import { getBlogArticleBySlug, getRelatedArticles, blogArticles } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { getBlogCanonicalUrl } from "@/lib/seo-helpers"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts to enable prerendering
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
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
        "item": "https://pndindustrialsuppliers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://pndindustrialsuppliers.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": canonicalUrl
      }
    ]
  }

  // FAQ Schema for AP/Telangana guide
  const faqSchema = article.slug === 'industrial-safety-equipment-supplier-andhra-pradesh-telangana' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you supply PPE across Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PND Industrial Suppliers is an authorized PPE supplier serving all major cities in Andhra Pradesh including Visakhapatnam, Vijayawada, Kakinada, Nellore, Guntur, Tirupati and Rajahmundry from our Kakinada and Nellore branches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply safety equipment in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we supply certified PPE and industrial safety equipment to Hyderabad and across Telangana. Delivery within 5-7 business days. Call +91 9398644987."
        }
      },
      {
        "@type": "Question",
        "name": "Are you an authorized Udyogi dealer in AP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PND Industrial Suppliers is an authorized Udyogi Safety channel partner serving Andhra Pradesh and Telangana from branches in Kakinada and Nellore."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply safety shoes in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver IS 15298 certified Hillson and Udyogi safety shoes to Visakhapatnam within 3-5 business days from our Kakinada branch. Call +91 77309 40410."
        }
      },
      {
        "@type": "Question",
        "name": "What is delivery time to Vijayawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver PPE and safety equipment to Vijayawada within 3-5 business days from our Nellore branch. Call +91 9398644987 for bulk orders and same-week delivery options."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bulk pricing for factory orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PND Industrial Suppliers offers competitive wholesale pricing for bulk PPE orders. Contact our Kakinada branch at +91 77309 40410 or Nellore branch at +91 9398644987 for bulk pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply safety helmets in Warangal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we supply IS 2925 certified safety helmets to Warangal and across Telangana within 5-7 business days. Call for bulk pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver to Telangana cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PND Industrial Suppliers delivers certified PPE and industrial safety equipment to all major Telangana cities including Hyderabad, Warangal, Karimnagar, Nizamabad and Khammam."
        }
      }
    ]
  } : null

  return (
    <div className="flex min-h-screen flex-col">
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />
      )}
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
