import { NextResponse } from 'next/server';
import { getCookie } from '@/utils/cookie'; // Assume you have a utility for getting cookies

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated
  const authCookie = getCookie('auth', { req });

  // List of protected routes
  const protectedRoutes = ['/admin-dashboard', '/products', '/']; // Add your protected routes here

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!authCookie) {
      // If not authenticated, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

// Specify the routes to apply the middleware
export const config = {
  matcher: ['/admin-dashboard/:path*', '/:path*'], // Adjust as needed
};
