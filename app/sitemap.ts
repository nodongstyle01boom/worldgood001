import type { MetadataRoute } from "next";
import { getAllCategories, getAllPosts, hasCurrentTranslation } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { LANGS, langPrefix } from "@/lib/i18n";


export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const base = siteConfig.url;

  // 같은 글의 5개 언어 URL (ko 는 접두사 없음)
  const variants = (path: string): string[] =>
    LANGS.map((lang) => `${base}${langPrefix(lang)}${path}`);

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
    ...["/resources", "/services", "/editorial-policy"].map((p) => ({url: `${base}${p}`, lastModified: new Date("2026-10-05"), changeFrequency: "monthly" as const, priority: 0.7})),
    ...categoryEntries,
    ...postEntries,
  ];
}
