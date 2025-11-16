import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Read locale from cookie
  const localeCookie =
    request.cookies.get('NEXT_LOCALE')?.value ||
    request.cookies.get('locale')?.value ||
    'en';

  // Validate locale
  const locale =
    localeCookie === 'en' || localeCookie === 'ar' ? localeCookie : 'en';

  // Create response and set locale header for next-intl
  const response = NextResponse.next();
  response.headers.set('x-next-intl-locale', locale);

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
