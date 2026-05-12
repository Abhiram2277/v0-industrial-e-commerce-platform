import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware for HTTPS and domain canonicalization
 * Enforces HTTPS protocol and www canonicalization in production
 * 
 * Returns 301 permanent redirects for SEO consolidation
 */
export function middleware(request: NextRequest) {
  // Skip middleware for development or local requests
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  
  // Get the protocol
  const protocol = request.headers.get('x-forwarded-proto') || url.protocol
  const hostname = request.headers.get('host') || url.hostname
  
  let shouldRedirect = false
  
  // In production, enforce HTTPS
  if (protocol === 'http:') {
    url.protocol = 'https:'
    shouldRedirect = true
  }
  
  // Enforce www canonicalization
  // Redirect from pndindustrialsuppliers.com to www.pndindustrialsuppliers.com
  if (hostname && !hostname.startsWith('www.') && hostname !== 'localhost') {
    url.hostname = `www.${hostname}`
    shouldRedirect = true
  }
  
  if (shouldRedirect) {
    return NextResponse.redirect(url, { status: 301 })
  }
  
  return NextResponse.next()
}

// Configure which paths should use middleware
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    '/((?!_next/static|_next/image|favicon|robots|sitemap|.well-known).*)',
  ],
}
