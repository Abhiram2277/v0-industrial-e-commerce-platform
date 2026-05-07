import Link from "next/link"

export function BlogResourcesSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
          Blog & Resources
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Explore our comprehensive guides, technical resources, and industry insights for industrial safety and equipment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* All Blog Articles */}
          <Link
            href="/blog"
            className="group p-8 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              All Blog Articles
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Browse all our latest articles, guides, and industry insights
            </p>
            <span className="text-blue-600 font-medium inline-flex items-center gap-2">
              Read Articles <span>→</span>
            </span>
          </Link>

          {/* Technical Guides */}
          <Link
            href="/blog?type=technical-guide"
            className="group p-8 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              Technical Guides
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Detailed technical resources and safety standards information
            </p>
            <span className="text-blue-600 font-medium inline-flex items-center gap-2">
              View Guides <span>→</span>
            </span>
          </Link>

          {/* Product Guides */}
          <Link
            href="/blog?type=product-guide"
            className="group p-8 bg-white rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              Product Guides
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Comprehensive product reviews and buying guides for industrial equipment
            </p>
            <span className="text-blue-600 font-medium inline-flex items-center gap-2">
              Explore Guides <span>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
