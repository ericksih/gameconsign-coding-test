// middleware.ts
import { stackMiddlewares } from "@/middlewares/stackMiddlewares";
import {hasCookies} from "@/middlewares/hasCookies";
import {withLogging} from "@/middlewares/withLogging";

const middlewares = [withLogging, hasCookies];
export default stackMiddlewares(middlewares);

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - robots.txt (robots file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)",
    ],
};