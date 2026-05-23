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
          "text": "Yes, we supply certified PPE and industrial safety equipment to all cities across Andhra Pradesh including Visakhapatnam, Vijayawada, Tirupati, Guntur, Rajahmundry, Ongole, Kadapa, Kurnool, Anantapur and Srikakulam. Our Kakinada and Nellore branches provide 1-5 day delivery depending on location. Contact us at +91 77309 40410 or +91 9398644987 for bulk orders and project requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply safety equipment in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve Hyderabad's pharma city, IT parks, chemical zones and manufacturing facilities. Our specialized collection covers pharmaceutical cleanroom requirements, HITEC City construction safety and Patancheru industrial compliance. 5-7 day delivery available with competitive bulk pricing. Call +91 9398644987 for Hyderabad orders."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply safety shoes in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we supply IS 15298 certified Hillson and Udyogi safety shoes to Visakhapatnam's steel plants, ports and refinery operations. Oil-resistant DPP soles, chemical-resistant DIP soles and marine-grade options available. 3-5 day delivery from Kakinada branch. Contact +91 77309 40410 for immediate quotes."
        }
      },
      {
        "@type": "Question",
        "name": "Are you an authorized Udyogi dealer in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are an official Udyogi Safety authorized distributor across Andhra Pradesh and Telangana. We stock Udyogi Vista, Fusion and Ultravent helmets, Udyogi safety shoes and complete Udyogi PPE range. Same-day stock available at Kakinada and Nellore branches. Phone +91 77309 40410 or +91 9398644987."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver to Telangana cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver to all major Telangana cities including Hyderabad, Warangal, Karimnagar, Nizamabad, Khammam, Ramagundam, Mahbubnagar and Suryapet. 5-7 day delivery for Telangana orders with bulk pricing available. Contact us for project-specific requirements and delivery timelines."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time to Vijayawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard delivery to Vijayawada is 3-5 days from our Nellore branch. For urgent orders, express delivery available within 2-3 days. Construction project requirements and bulk orders may have accelerated timelines. Call +91 9398644987 for rush delivery options."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply safety helmets in Warangal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we supply IS 2925 certified Udyogi safety helmets to Warangal's steel plants and manufacturing facilities. Standard delivery 5-6 days with ratchet suspension systems, chin straps and ventilation options. Bulk pricing available for industrial facilities. Phone +91 77309 40410 for Warangal orders."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get bulk pricing for factory orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer competitive bulk pricing for factories, construction projects and institutional buyers. Our Kakinada (+91 77309 40410) and Nellore (+91 9398644987) branches provide customized quotes based on product specifications and order quantities. Flexible payment terms and delivery schedules available for long-term partnerships."
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
