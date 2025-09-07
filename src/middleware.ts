import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;
  if (token) {
    if (pathname == "/signin" || pathname == "/register")
      return NextResponse.redirect(new URL("/", request.url));

    return NextResponse.next();
  } else {
    if (pathname == "/cart")
      return NextResponse.redirect(new URL("/signin", request.url));
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/cart", "/signin", "/register"],
};
