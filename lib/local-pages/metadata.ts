import type { Metadata } from "next";

import { SITE_URL } from "./index";

/** Métadonnées d'une page locale : canonical auto-référente, OG et Twitter uniques. */
export function localMetadata({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
}): Metadata {
  const url = `${SITE_URL}/${slug}`;
  const absoluteImage = `${SITE_URL}${image}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "lavagetapis.fr",
      locale: "fr_FR",
      type: "website",
      images: [absoluteImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}