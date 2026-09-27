import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { SITE_TITLE } from "@/lib/domain-config";
import { getSiteUrl } from "@/lib/site-url";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import GlobalHeroBanner from "@/components/layout/GlobalHeroBanner";

function buildCanonical(pathname: string): string {
  const siteUrl = getSiteUrl();
  if (pathname === "/" || pathname === "") return siteUrl;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${path}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";
  const config = await getPageDomainConfig();
  const canonical = buildCanonical(pathname);
  const title =
    pathname === "/" || pathname === ""
      ? SITE_TITLE
      : `${config.tagline} | Dr. Jan Duffy`;

  return {
    title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pathname === "/" ? config.heroHeadline : title,
      description: config.description,
      type: "website",
      url: canonical,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        <GlobalHeroBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
