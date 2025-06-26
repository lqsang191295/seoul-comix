import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/test123', request.url))
}

export const config = {
    matcher: '/profile', 
}