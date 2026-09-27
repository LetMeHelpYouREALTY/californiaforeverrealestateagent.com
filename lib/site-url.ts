/** Production host (apex primary; www redirects to apex). */
export const SITE_DOMAIN = "californiaforeverrealestateagent.com";

const DEFAULT_SITE_URL = `https://${SITE_DOMAIN}`;

/** Canonical site origin from env (Vercel) with apex fallback. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const raw = fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}
