import { cookies } from "next/headers"
import { NextResponse } from "next/server";

export const middleware = async(request) => {
    const token = cookies(request).get("next-auth.session-token");
    const pathName = request.nextUrl.pathname;
    if (pathName.includes("api")) {
        return NextResponse.next();
    }
    if (!token) {
        return NextResponse.redirect(new url('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher:[
        "/myBooking/:path*",
        "/services/:path*",
    ]
}