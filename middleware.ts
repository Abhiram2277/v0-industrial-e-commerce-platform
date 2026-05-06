import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware for HTTPS and domain canonicalization
 * Enforces:
 * 1. HTTPS protocol
 * 2. www domain preference (or non-www if configured)
 * 
 * Returns 301 permanent redirects for SEO consolidation
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Get the host header
  const host = request.headers.get('host') || ''
  
  // Check if we need to redirect
  let shouldRedirect = false
  
  // 1. Enforce HTTPS
  if (request.headers.get('x-forwarded-proto') === 'http' || url.protocol === 'http:') {
    url.protocol = 'https:'
    shouldRedirect = true
  }
  
  // 2. Enforce www domain preference
  // Configure which domain variant you prefer (www or non-www)
  const preferredDomain = process.env.NEXT_PUBLIC_SITE_URL || 'https://pndindustrialsuppliers.com'
  const preferredHost = new URL(preferredDomain).host
  
  if (host && host !== preferredHost) {
    // Redirect to preferred domain
    url.host = preferredHost
    shouldRedirect = true
  }
  
  // If we need to redirect, return 301 permanent redirect
  if (shouldRedirect) {
    return NextResponse.redirect(url, { status: 301 })
  }
  
  return NextResponse.next()
}

// Configure which paths should use middleware
// This runs on all paths except those specified
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    '/((?!_next|favicon|robots|sitemap|.well-known).*)',
  ],
}
