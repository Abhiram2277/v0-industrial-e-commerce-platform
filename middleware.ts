import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware for URL canonicalization
 * Handles:
 * 1. http to https redirect
 * 2. www to non-www redirect
 * 3. Trailing slash normalization
 *
 * All three checks run against a single cloned URL and issue at most one
 * redirect per request, so http://www.example.com/ collapses directly to
 * https://example.com/ instead of bouncing through multiple redirect hops.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = url.hostname
  const pathname = url.pathname

  // Vercel terminates TLS in front of the app, so the original scheme is only
  // available via this forwarded header (request.nextUrl.protocol is always
  // "https:" internally, even for the original http request).
  const forwardedProto = request.headers.get('x-forwarded-proto')
  let didChange = false

  // 1. Force https
  if (forwardedProto === 'http') {
    url.protocol = 'https:'
    didChange = true
  }

  // 2. Redirect www to non-www
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    didChange = true
  }

  // 3. Remove trailing slashes (except for root path)
  // Redirect /path/ to /path (permanent redirect for SEO)
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
    didChange = true
  }

  if (didChange) {
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
