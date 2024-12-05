export const runtime = "edge";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const data = await getData(query);
  const response = await fetch("https://words.dev-apis.com/word-of-the-day");
  const headers = new Headers(response.headers);
  headers.set(
    "Cache-Control",
    "public,max-age=31536000,smax-age=31536000,immutable"
  );
  headers.set(
    "CDN-Cache-Control",
    "public,max-age=31536000,smax-age=31536000,immutable"
  );
  return NextResponse.json(await response.json(), {
    headers: headers,
  });
}
