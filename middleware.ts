import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function  middleware(req: NextRequest)
{
    const ip : any = req.headers.get("x-forwarded-for")?.toString() || req.ip;
    const cookieStore = cookies();
    cookieStore.set({name:"ip",value:ip});
    return NextResponse.next();
}