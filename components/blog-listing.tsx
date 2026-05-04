'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Search, X } from 'lucide-react'
import { BlogCard } from '@/components/blog-card'
import type { BlogArticle, Region, Industry, ContentType } from '@/lib/blog-data'

interface BlogListingProps {
  articles: BlogArticle[]
  onFilterChange?: (filters: {
    region?: Region
    industry?: Industry
    contentType?: ContentType
    search?: string
  }) => void
}

const regionOptions = [
  { value: 'nellore', label: 'Nellore' },
  { value: 'kakinada', label: 'Kakinada' },
  { value: 'ap-wide', label: 'Andhra Pradesh Wide' }
]

const industryOptions = [
  { value: 'ports-logistics', label: 'Ports & Logistics' },
  { value: 'petrochemical', label: 'Petrochemical' },
  { value: 'pharma', label: 'Pharmaceutical' },
  { value: 'power-plants', label: 'Power Plants' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'food-processing', label: 'Food Processing' }
]

const contentTypeOptions = [
  { value: 'technical-guide', label: 'Technical Guides' },
  { value: 'event-coverage', label: 'Event Coverage' },
  { value: 'product-guide', label: 'Product Guides' },
  { value: 'industry-news', label: 'Industry News' }
]

export function BlogListing({ articles, onFilterChange }: BlogListingProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<Region | ''>('')
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | ''>('')
  const [selectedContentType, setSelectedContentType] = useState<ContentType | ''>('')

  const filteredArticles = useMemo(() => {
    let results = [...articles]

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      results = results.filter(a =>
        a.title.toLowerCase().includes(term) ||
        a.excerpt.toLowerCase().includes(term) ||
        a.keywords.some(k => k.toLowerCase().includes(term))
      )
    }

    // Region filter
    if (selectedRegion) {
      results = results.filter(a => a.region === selectedRegion)
    }

    // Industry filter
    if (selectedIndustry) {
      results = results.filter(a => a.industry === selectedIndustry)
    }

    // Content type filter
    if (selectedContentType) {
      results = results.filter(a => a.contentType === selectedContentType)
    }

    return results
  }, [articles, searchTerm, selectedRegion, selectedIndustry, selectedContentType])

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedRegion('')
    setSelectedIndustry('')
    setSelectedContentType('')
    onFilterChange?.({})
  }

  const isFiltered = searchTerm || selectedRegion || selectedIndustry || selectedContentType

  return (
    <div className="space-y-8">
      {/* Filter Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="heading-h3">Filter Articles</h3>
          {isFiltered && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleClearFilters}
              className="text-accent hover:text-accent/80"
            >
              <X className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search articles by title, keywords..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              onFilterChange?.({
                region: selectedRegion || undefined,
                industry: selectedIndustry || undefined,
                contentType: selectedContentType || undefined,
                search: e.target.value
              })
            }}
            className="pl-10"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="label-text block mb-2">Region</label>
            <Select 
              value={selectedRegion}
              onValueChange={(value) => {
                setSelectedRegion(value as Region | '')
                onFilterChange?.({
                  region: value as Region | undefined,
                  industry: selectedIndustry || undefined,
                  contentType: selectedContentType || undefined,
                  search: searchTerm
                })
              }}
            >
              <option value="">All Regions</option>
              {regionOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </Select>
          </div>

          <div>
            <label className="label-text block mb-2">Industry</label>
            <Select
              value={selectedIndustry}
              onValueChange={(value) => {
                setSelectedIndustry(value as Industry | '')
                onFilterChange?.({
                  region: selectedRegion || undefined,
                  industry: value as Industry | undefined,
                  contentType: selectedContentType || undefined,
                  search: searchTerm
                })
              }}
            >
              <option value="">All Industries</option>
              {industryOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </Select>
          </div>

          <div>
            <label className="label-text block mb-2">Content Type</label>
            <Select
              value={selectedContentType}
              onValueChange={(value) => {
                setSelectedContentType(value as ContentType | '')
                onFilterChange?.({
                  region: selectedRegion || undefined,
                  industry: selectedIndustry || undefined,
                  contentType: value as ContentType | undefined,
                  search: searchTerm
                })
              }}
            >
              <option value="">All Types</option>
              {contentTypeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {isFiltered && (
          <div className="flex flex-wrap gap-2 pt-2">
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-2">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm('')} className="hover:opacity-70">×</button>
              </Badge>
            )}
            {selectedRegion && (
              <Badge variant="secondary" className="flex items-center gap-2">
                {regionOptions.find(o => o.value === selectedRegion)?.label}
                <button onClick={() => setSelectedRegion('')} className="hover:opacity-70">×</button>
              </Badge>
            )}
            {selectedIndustry && (
              <Badge variant="secondary" className="flex items-center gap-2">
                {industryOptions.find(o => o.value === selectedIndustry)?.label}
                <button onClick={() => setSelectedIndustry('')} className="hover:opacity-70">×</button>
              </Badge>
            )}
            {selectedContentType && (
              <Badge variant="secondary" className="flex items-center gap-2">
                {contentTypeOptions.find(o => o.value === selectedContentType)?.label}
                <button onClick={() => setSelectedContentType('')} className="hover:opacity-70">×</button>
              </Badge>
            )}
          </div>
        )}

        {/* Results Count */}
        <p className="body-small text-muted-foreground">
          Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Results */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
          {filteredArticles.map(article => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="heading-h3 mb-2">No articles found</h3>
          <p className="body-regular text-muted-foreground">
            Try adjusting your filters or search terms
          </p>
          <Button 
            onClick={handleClearFilters}
            className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
