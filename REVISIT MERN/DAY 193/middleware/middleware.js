// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.json({ message: 'This is a middleware response' })
//     return NextResponse.redirect(new URL('/home', request.url))
// }

// // export const config = {
// //     matcher: '/about/:path*',
// // }

import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }
}