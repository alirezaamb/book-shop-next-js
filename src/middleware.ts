import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin-dashboard')) {
    const authCookie = req.cookies.get('role')?.value;
    if (authCookie !== 'admin') {
      return NextResponse.redirect(new URL('/auth', req.url));
    }
  }

  if (pathname.startsWith('/auth')) {
    const accessCookie = req.cookies.get('access')?.value;
    if (accessCookie) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-dashboard/:path*', '/auth'],
};
