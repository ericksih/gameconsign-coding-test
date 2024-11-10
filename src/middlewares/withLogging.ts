// middlewares/withHeaders.ts
import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";
import { MiddlewareFactory } from "./types";
import {cookies} from "next/headers";
import {NextMiddlewareResult} from "next/dist/server/web/types";
export const withLogging: MiddlewareFactory = (next: NextMiddleware) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const res = next(request, _next);
        console.log(`logging: ${request.nextUrl.pathname}`);
        return res;
    };
};
