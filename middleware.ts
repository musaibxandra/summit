import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Simple pass-through middleware
  // Locale is handled entirely via cookies in i18n/request.tsx
  const response = NextResponse.next();
  return response;
}

export const config = {
  // Only match pages, not API routes or static files
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
