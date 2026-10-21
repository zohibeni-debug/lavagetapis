// Schéma des pages locales (hubs et pages de lieu).
// Toutes les données factuelles viennent du brief : aucun chiffre n'est inventé ici.

export type LocalReview = {
  n: number;
  author: string;
  date: string;
  text: string;
};

export type LocalItem = { name: string; text: string };

/** Clés des sections dont l'ordre varie d'une page à l'autre. */
export type SectionKey =
  | "types"
  | "stains"
  | "workshop"
  | "prices"
  | "reviews"
  | "areas"
  | "faq";

export type LocalPage = {
  slug: string;
  kind: "arrondissement" | "ville";
  /** Hub de rattachement, pour le fil d'Ariane et le maillage. */
  hubSlug: string;
  hubLabel: string;
  /** "Paris 7e", "Boulogne-Billancourt"… */
  place: string;
  /** "Paris", "Hauts-de-Seine", "Val-de-Marne". */
  dept: string;
  postal: string[];
  title: string;
  description: string;
  h1: string;
  hero: { lead: string[]; reassurance: string[]; whatsapp: string };
  how: { title: string; paragraphs: string[]; bullets: string[] };
  types: { title: string; intro: string; items: LocalItem[] };
  stains: { title: string; intro: string; items: LocalItem[] };
  workshop: { title: string; intro: string; steps: LocalItem[] };
  prices: {
    title: string;
    intro: string;
    examples: { label: string; detail: string; price: string }[];
    note: string;
  };
  areas: { title: string; intro: string; list: string[]; outro?: string };
  faq: { q: string; a: string }[];
  didYouKnow: string;
  updated: string;
  reviews: LocalReview[];
  neighbours: { label: string; slug: string; note: string }[];
  /** Ordre des sections 3 à 9, volontairement différent sur chaque page. */
  order: SectionKey[];
};

export type HubPage = {
  slug: string;
  kind: "hub";
  hubLabel: string;
  place: string;
  title: string;
  description: string;
  h1: string;
  hero: { lead: string[]; reassurance: string[]; whatsapp: string };
  intro: { title: string; paragraphs: string[] };
  how: { title: string; paragraphs: string[]; bullets: string[] };
  prices: { title: string; intro: string; examples: { label: string; detail: string; price: string }[]; note: string };
  faq: { q: string; a: string }[];
  didYouKnow: string;
  updated: string;
  /** Grille des pages du hub. */
  children: { label: string; slug: string; note: string }[];
  reviews: LocalReview[];
  /** Les deux autres hubs. */
  neighbours: { label: string; slug: string; note: string }[];
};