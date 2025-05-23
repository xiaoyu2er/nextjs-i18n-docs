import { type NextRequest, NextResponse } from 'next/server';
import { routerTypeCookie } from './lib/const';
import { parseDocId } from './lib/utils';

export default async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const isDocs = url.pathname.startsWith('/docs');
  if (isDocs) {
    const docId = `en${url.pathname}`;
    const { isPages, isApp } = parseDocId(docId);
    if (isPages || isApp) {
      // Set the cookie so we could get this in the server
      request.cookies.set(routerTypeCookie, isPages ? 'pages' : 'app');
    }
  }

  const response = NextResponse.next();

  if (isDocs) {
    const docId = `en${url.pathname}`;
    const { isPages, isApp } = parseDocId(docId);
    if (isPages || isApp) {
      response.cookies.set(routerTypeCookie, isPages ? 'pages' : 'app');
    }
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
