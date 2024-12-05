export const runtime = "edge";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query: string | null = searchParams.get("with");
  if (query) {
    console.log(query);
    const fetchData = await fetch(query, {});
    const response = new NextResponse(fetchData.body, {
      status: fetchData.status,
      headers: fetchData.headers,
    });
    response.headers.set(
      "Cache-Control",
      "public,max-age=31536000,smax-age=31536000,immutable"
    );
    response.headers.set(
      "CDN-Cache-Control",
      "public,max-age=31536000,smax-age=31536000,immutable"
    );
    return response;
  }
  return NextResponse.json(
    { error: "Query parameter 'with' is missing" },
    { status: 400 }
  );
}
