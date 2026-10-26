import type { MetadataRoute } from "next";
import { getAllCategories, getAllPosts, hasCurrentTranslation } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { LANGS, langPrefix } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const base = siteConfig.url;

  // 한국어 원문만 색인한다. 번역본이 없는 언어 페이지는 중복으로 읽히므로 제외.
  const variants = (path: string): string[] => [`${base}${path}`];

  const postEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    LANGS.filter((lang) => hasCurrentTranslation(post.slug, lang))
      .map((lang) => `${base}${langPrefix(lang)}/p/${post.slug}`).map((url) => ({
      url,
      lastModified: new Date(post.updated || post.date || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  const categoryEntries: MetadataRoute.Sitemap = getAllCategories().flatMap((c) =>
    variants(`/c/${c.slug}`).map((url) => ({
      url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  );

  const homeEntries: MetadataRoute.Sitemap = variants("").map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return [
    ...homeEntries,
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...["/resources", "/services", "/editorial-policy", "/adpolicy"].map((p) => ({url: `${base}${p}`, lastModified: new Date("2026-10-21"), changeFrequency: "monthly" as const, priority: 0.7})),
    ...categoryEntries,
    ...postEntries,
  ];
}
