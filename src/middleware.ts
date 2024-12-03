import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode("your_secret_key");

export async function middleware(req: NextRequest) {
  // console.log("Cookies received:", req.cookies);
  const token = req.cookies.get("token")?.value;

  // Handle token redirecting to the current page after login
  if (!token) {
    console.log("No token found. Redirecting to login.");
    const loginUrl = new URL("/login/login-page", req.url);
    console.log("Redirecting to:", loginUrl.toString());

    loginUrl.searchParams.set("redirect", req.nextUrl.pathname); // Redirecting back to the current page
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Verify the JWT token
    const { payload } = await jwtVerify(token, SECRET_KEY);
    const { exp } = payload as {
      exp: number;
    };

    // Check token expiration
    if (Date.now() / 1000 > exp) {
      console.log("Token expired. Redirecting to login.");

      return NextResponse.redirect(new URL("/login/login-page", req.url));
    }

    const response = NextResponse.next();

    return response;
  } catch (err) {
    console.log("Token verification failed. Redirecting to login:", err);
    return NextResponse.redirect(new URL("/login/login-page", req.url));
  }
}

// Protect specific routes with the middleware
export const config = {
  matcher: ["/todos/todos-page/:path*", "/calendar/calendar-page/:path*"],
};
