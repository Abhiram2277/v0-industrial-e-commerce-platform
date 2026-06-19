import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware for URL canonicalization
 * Handles:
 * 1. www to non-www redirect
 * 2. Trailing slash normalization
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = url.hostname
  const pathname = url.pathname

  // 1. Redirect www to non-www
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url, { status: 301 })
  }

  // 2. Remove trailing slashes (except for root path)
  // Redirect /path/ to /path (permanent redirect for SEO)
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
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
