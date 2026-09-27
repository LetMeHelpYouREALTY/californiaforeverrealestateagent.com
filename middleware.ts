import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_DOMAIN } from "@/lib/site-url";

/** www → apex (308), matching heyberkshire-com production redirect pattern. */
function redirectWwwToApex(request: NextRequest): NextResponse | null {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (host !== `www.${SITE_DOMAIN}`) return null;

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = SITE_DOMAIN;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

function resolveContentDomain(host: string): string {
  const bare = host.split(":")[0].toLowerCase().replace(/^www\./, "");
  if (bare === SITE_DOMAIN) return SITE_DOMAIN;
  if (bare.endsWith(".vercel.app") || bare === "localhost" || bare.endsWith(".localhost")) {
    return SITE_DOMAIN;
  }
  return bare;
}

export function middleware(request: NextRequest) {
  const wwwRedirect = redirectWwwToApex(request);
  if (wwwRedirect) return wwwRedirect;

  const hostname = request.headers.get("host") || "";
  const contentDomain = resolveContentDomain(hostname);
  const response = NextResponse.next();
  response.headers.set("x-domain", contentDomain);
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)"],
};
