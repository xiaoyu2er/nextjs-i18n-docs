import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const headersList = request.headers;
  const host =
    headersList.get('host') || headersList.get('x-forwarded-host') || '';
  const locale = /zh-hans/.test(host) ? 'zh-Hans' : 'en';

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - en (locale)
     * - zh-Hans (locale)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|en|zh-Hans).*)',
  ],
};
