// middlewares/withHeaders.ts
import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";
import { MiddlewareFactory } from "./types";
import {cookies} from "next/headers";
import {NextMiddlewareResult} from "next/dist/server/web/types";
export const hasCookies: MiddlewareFactory = (next: NextMiddleware) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        // ignoring routes that starts with /auth or /api/auth as they are public
        // required for authentication, as a result they have no httpOnly cookie
        if (request.nextUrl.pathname.startsWith('/auth/') || request.nextUrl.pathname.startsWith('/api/auth')) {
            return NextResponse.next();
        }

        if (request.nextUrl.pathname.startsWith('/api')) {
            return handleApiRoutes(request, _next);
        }
        return handlePageRoutes(request, _next);
    };

    function handlePageRoutes(request: NextRequest, _next: NextFetchEvent): NextMiddlewareResult|Promise<NextMiddlewareResult> {
        if (!checkCookie()) {
            return NextResponse.redirect(new URL(`/auth/login?return=${encodeURIComponent(request.url)}`, request.url));
        }
        return next(request, _next);
    }

    function handleApiRoutes(request: NextRequest, _next: NextFetchEvent): NextMiddlewareResult|Promise<NextMiddlewareResult> {
        if (!checkCookie()) {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401});
        }
        return next(request, _next);
    }
};

function checkCookie() {
    const cookie = cookies().get('auth');
    if (!cookie) {
        return false;
    }
    return true;
}
