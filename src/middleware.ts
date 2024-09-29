/** @format */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { cookies } from "next/headers";
import verifyToken from "./libs/verifyToken";

export async function middleware(req: NextRequest) {
  const tokenByCookie = `Bearer ${cookies().get("token")?.value}`;
  const token = req.headers.get("authorization") || tokenByCookie;
  const { pathname } = req.nextUrl;
  const paths = pathname.split("/") || [];
  const splittedToken = token?.split(" ") || [];

  if (
    !splittedToken[0]?.toLowerCase()?.includes("bearer") ||
    !splittedToken[1]
  ) {
    return Response.redirect(`${req.nextUrl.origin}/login`);
  }

  const isValidToken = await verifyToken(
    splittedToken[1],
    process.env.JWT_SECRET_KEY as string
  );

  if (!isValidToken) {
    return Response.redirect(`${req.nextUrl.origin}/login`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/login|api/logout|login|register|_next/static|_next/image|favicon.ico|login|images/logo.png).*)",
  ],
};
