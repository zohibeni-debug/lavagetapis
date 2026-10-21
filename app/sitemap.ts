import type { MetadataRoute } from "next";
import { HUBS, PLACES } from "@/lib/local-pages";

const siteUrl = "https://lavagetapis.fr";
const lastModified = new Date("2026-10-08T00:00:00.000Z");
const lastModifiedLocal = new Date("2026-10-21T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesLocales: MetadataRoute.Sitemap = [
    ...HUBS.map((hub) => ({
      url: `${siteUrl}/${hub.slug}`,
      lastModified: new Date(`${hub.updated}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PLACES.map((place) => ({
      url: `${siteUrl}/${place.slug}`,
      lastModified: new Date(`${place.updated}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: `${siteUrl}/`,
      lastModified: lastModifiedLocal,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pagesLocales,
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}