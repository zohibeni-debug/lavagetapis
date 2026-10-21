// Données structurées des pages locales : un seul @graph par page.
// Volontairement absents : LocalBusiness avec adresse, Review et AggregateRating
// (les avis affichés proviennent d'une fiche Google tierce et ne doivent pas être balisés).

import { isImplemented, SITE_URL, type HubPage, type LocalPage } from "./local-pages";

type JsonLdNode = Record<string, unknown>;

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "lavagetapis.fr",
  url: SITE_URL,
  telephone: "+33762870707",
};

function breadcrumb(items: { name: string; url: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function service(name: string, area: JsonLdNode, description: string): JsonLdNode {
  return {
    "@type": "Service",
    name,
    serviceType: "Lavage de tapis",
    description,
    url: `${SITE_URL}/`,
    provider: ORGANIZATION,
    areaServed: area,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: 15,
        maxPrice: 120,
        priceCurrency: "EUR",
        unitText: "m²",
      },
    },
  };
}

function faqPage(place: string, items: { q: string; a: string }[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    name: `Questions fréquentes sur le lavage de tapis à ${place}`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** @graph d'une page de lieu (arrondissement ou ville). */
export function localPageJsonLd(page: LocalPage): JsonLdNode {
  const url = `${SITE_URL}/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumb([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: page.hubLabel, url: `${SITE_URL}/${page.hubSlug}` },
        { name: page.place, url },
      ]),
      service(page.h1, {
        "@type": "Place",
        name: page.place,
        address: {
          "@type": "PostalAddress",
          addressLocality: page.place,
          postalCode: page.postal[0],
          addressRegion: page.dept,
          addressCountry: "FR",
        },
      }, page.description),
      faqPage(page.place, page.faq),
    ],
  };
}

/** @graph d'un hub, avec l'ItemList de ses pages. */
export function hubPageJsonLd(hub: HubPage): JsonLdNode {
  const url = `${SITE_URL}/${hub.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumb([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: hub.hubLabel, url },
      ]),
      service(hub.h1, { "@type": "AdministrativeArea", name: hub.place }, hub.description),
      {
        "@type": "ItemList",
        name: `Pages de lavage de tapis — ${hub.place}`,
        numberOfItems: hub.children.filter((child) => isImplemented(child.slug)).length,
        itemListElement: hub.children
          .filter((child) => isImplemented(child.slug))
          .map((child, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: child.label,
            url: `${SITE_URL}/${child.slug}`,
          })),
      },
      faqPage(hub.place, hub.faq),
    ],
  };
}