import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export type PageMetadataOptions = {
  /** Short page title (suffix ` | Dr. Jan Duffy` added unless exactTitle). No BHHS in titles. */
  title: string;
  description: string;
  /** Route path including leading slash, e.g. `/about` */
  path: string;
  keywords?: string[];
  /** Homepage: use full title verbatim (already includes ` | Dr. Jan Duffy`). */
  exactTitle?: boolean;
};

function canonicalForPath(path: string): string {
  const siteUrl = getSiteUrl();
  if (path === "/" || path === "") return siteUrl;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const trimmed =
    normalized.length > 1 && normalized.endsWith("/")
      ? normalized.slice(0, -1)
      : normalized;
  return `${siteUrl}${trimmed}`;
}

/** Strip legacy BHHS branding from imported heyberkshire titles. */
export function cleanPageTitle(raw: string): string {
  let t = raw.trim();
  t = t.replace(/\s*\|\s*Berkshire Hathaway HomeServices.*$/i, "");
  t = t.replace(/^Berkshire Hathaway HomeServices\s*/i, "");
  t = t.replace(/\s*\|\s*BHHS.*$/i, "");
  return t.trim();
}

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const canonical = canonicalForPath(options.path);
  const title = options.exactTitle
    ? options.title
    : `${cleanPageTitle(options.title)} | Dr. Jan Duffy`;

  return {
    title,
    description: options.description,
    ...(options.keywords?.length ? { keywords: options.keywords } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: options.description,
      type: "website",
      url: canonical,
    },
  };
}
