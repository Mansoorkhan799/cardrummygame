import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "@/lib/blogSlugs";

const BASE = "https://cardrummygame.com.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/card-rummy-apk`, lastModified: now, changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE}/card-rummy-login`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/card-rummy-jazzcash`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/minimum-requirements-for-card-rummy`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/how-to-play-and-earn-on-card-rummy`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/download-card-rummy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/deposit-money-in-card-rummy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/withdraw-money-from-card-rummy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/card-rummy-for-pc`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const gameGuideSlugs = new Set([
    "how-to-play-teen-patti",
    "rummy-rules-guide",
    "dragon-vs-tiger-strategy",
    "7-up-down-game-guide",
    "andar-bahar-rules-tricks",
    "mines-game-strategy",
    "teen-patti-variations",
  ]);

  const howToSlugs = new Set([
    "how-to-download-card-rummy-apk",
    "how-to-withdraw-money-card-rummy",
    "how-to-deposit-card-rummy",
    "how-to-register-bind-email-card-rummy",
    "how-to-get-card-rummy-welcome-bonus",
    "card-rummy-update-guide",
  ]);

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: gameGuideSlugs.has(slug) || howToSlugs.has(slug) ? 0.9 : 0.8,
  }));

  return [...mainPages, ...blogPages];
}
