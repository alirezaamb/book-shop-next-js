import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin-dashboard')) {
    const authCookie = req.cookies.get('role')?.value;
    if (authCookie !== 'admin') {
      return NextResponse.redirect(new URL('/auth', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-dashboard/:path*'],
};

// Specify the routes to apply the middleware
// export const config = {
//   matcher: ['/admin-dashboard/:path*', '/products/:path*', '/'], // Adjust as needed
// };

// export async function middleware(req:NextRequest) {
//     const { pathname } = req.nextUrl;

//     // Check if the user is authenticated
//     const authCookie = getServerCookie(req, 'auth');

//     // List of protected routes
//     const protectedRoutes = ['/admin-dashboard', '/products', '/'];

//     if (protectedRoutes.some((route) => pathname.startsWith(route))) {
//       if (!authCookie) {
//         // If not authenticated, redirect to login
//         return NextResponse.redirect(new URL('/login', req.url));
//       }
//     }

//     return NextResponse.next();
//   }

//   // Specify the routes to apply the middleware
//   export const config = {
//     matcher: ['/admin-dashboard/:path*', '/products/:path*', '/'], // Adjust as needed
//   };
