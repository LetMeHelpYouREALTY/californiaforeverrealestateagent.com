/**
 * Single-site configuration for californiaforeverrealestateagent.com
 * (angles_v2 — Bay Area to Las Vegas relocation).
 */

import { SITE_DOMAIN } from "./site-url";

export interface DomainConfig {
  domain: string;
  neighborhood: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  keywords: string[];
  pageType: "community" | "search" | "lifestyle" | "investment" | "55plus" | "luxury";
  realscoutAgentId: string;
  ctaBadge: string;
  ctaHeadline: string;
  ctaSubheadline: string;
}

const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

export const SITE_TITLE = "Bay Area to Las Vegas Relocation | Dr. Jan Duffy";

export const DOMAIN_CONFIG: DomainConfig = {
  domain: SITE_DOMAIN,
  neighborhood: "Bay Area to Las Vegas",
  tagline: "Bay Area to Las Vegas relocation",
  description:
    "Households moving from the San Francisco Bay Area to Las Vegas or Henderson get relocation planning, Nevada home search, and coordinated Bay Area listing support from Dr. Jan Duffy, REALTOR®. Call (702) 222-1964.",
  heroHeadline: "Moving from the Bay Area to Las Vegas",
  heroSubheadline:
    "Compare Bay Area and Las Vegas housing costs, plan your move timeline, and search Henderson and Las Vegas homes with a Nevada REALTOR® who works with Bay Area sellers and buyers every week.",
  keywords: [
    "Bay Area to Las Vegas relocation",
    "moving from San Francisco to Las Vegas",
    "San Jose to Las Vegas relocation",
    "Bay Area vs Las Vegas cost of living",
    "sell in the Bay Area buy in Las Vegas",
  ],
  pageType: "lifestyle",
  realscoutAgentId: REALSCOUT_AGENT_ID,
  ctaBadge: "Bay Area relocation",
  ctaHeadline: "Plan your Bay Area to Las Vegas move",
  ctaSubheadline:
    "Call or text (702) 222-1964 — sell in the Bay Area, buy in Las Vegas or Henderson, one coordinated plan.",
};

export const DEFAULT_CONFIG: DomainConfig = DOMAIN_CONFIG;

export function getDomainConfig(_hostname: string): DomainConfig {
  return DOMAIN_CONFIG;
}
