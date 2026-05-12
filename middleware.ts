import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware for HTTPS enforcement
 * Note: Vercel automatically handles HTTPS and domain canonicalization
 * This middleware is minimal to avoid redirect loops
 */
export function middleware(request: NextRequest) {
  // Let Vercel handle redirects - returning NextResponse.next() allows
  // Vercel's infrastructure to handle HTTPS and www canonicalization
  return NextResponse.next()
}

// Configure which paths should use middleware
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    '/((?!_next/static|_next/image|favicon|robots|sitemap|.well-known).*)',
  ],
}
