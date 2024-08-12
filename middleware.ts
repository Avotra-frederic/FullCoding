import { NextRequest, NextResponse } from "next/server";

export function  middleware(req: NextRequest)
{
    const ip = req.headers.get("x-forwarded-for")?.toString() || req.ip;
    console.log("User IP", ip)
    return NextResponse.next();
}