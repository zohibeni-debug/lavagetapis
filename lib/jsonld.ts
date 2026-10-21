// Bloc JSON-LD schema.org. Le contenu de la maquette est conservé ; trois nœuds
// ont été ajoutés pour couvrir ce que les outils d'audit signalaient comme
// manquant : WebSite (identité du site), WebPage (avec ses dates de publication
// et de modification) et le contact téléphonique de l'organisation.
const SITE = "https://lavagetapis.fr";
const PUBLIE = "2026-10-08";
const MODIFIE = "2026-10-21";

/** Les 20 arrondissements de Paris, tels qu'ils sont desservis. */
const ARRONDISSEMENTS = [
  "Paris 1er", "Paris 2e", "Paris 3e", "Paris 4e", "Paris 5e",
  "Paris 6e", "Paris 7e", "Paris 8e", "Paris 9e", "Paris 10e",
  "Paris 11e", "Paris 12e", "Paris 13e", "Paris 14e", "Paris 15e",
  "Paris 16e", "Paris 17e", "Paris 18e", "Paris 19e", "Paris 20e",
].map((name) => ({ "@type": "City", name }));

/** Les communes desservies dans les deux départements limitrophes. */
const COMMUNES = [
  "Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret",
  "Issy-les-Moulineaux", "Rueil-Malmaison", "Saint-Cloud",
  "Vincennes", "Saint-Mandé", "Nogent-sur-Marne", "Saint-Maur-des-Fossés",
  "Créteil", "Le Perreux-sur-Marne",
].map((name) => ({ "@type": "City", name }));

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lavagetapis.fr/#org",
      name: "lavagetapis.fr",
      url: "https://lavagetapis.fr/",
      logo: "https://lavagetapis.fr/logo/logo-lavagetapis.svg",
      description: "Professional carpet cleaning and deep care company",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "service client",
        telephone: "+33762870707",
        areaServed: "FR",
        availableLanguage: "fr",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "lavagetapis.fr",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE}/#org` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: "Lavage de tapis à Paris et en Île-de-France · Devis 24 h",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#service` },
      inLanguage: "fr-FR",
      datePublished: PUBLIE,
      dateModified: MODIFIE,
    },
    {
      "@type": "Service",
      "@id": `${SITE}/#service`,
      serviceType: "Lavage de tapis",
      name: "Lavage de tapis en atelier avec enlèvement et livraison",
      provider: { "@id": `${SITE}/#org` },
      // Zone desservie détaillée : les 20 arrondissements de Paris, les douze
      // communes des Hauts-de-Seine et du Val-de-Marne, dans les trois zones.
      areaServed: [
        { "@type": "AdministrativeArea", name: "Paris" },
        ...ARRONDISSEMENTS,
        { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
        ...COMMUNES.slice(0, 6),
        { "@type": "AdministrativeArea", name: "Val-de-Marne" },
        ...COMMUNES.slice(6),
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "15",
        highPrice: "120",
        description: "Prix au m² selon le type de tapis",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte le lavage d'un tapis ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le lavage se facture au m² : 15 à 25 €/m² pour un tapis synthétique, 25 à 45 €/m² pour un berbère ou un kilim, 35 à 60 €/m² pour un tapis persan en laine et 55 à 120 €/m² pour un tapis en soie. Minimum fréquent de 60 € par tapis.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps dure le nettoyage d'un tapis en atelier ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comptez 7 à 10 jours entre l'enlèvement et la livraison, dont 12 à 24 h de séchage pour un tapis en laine. Une formule express en 72 h existe chez certains ateliers.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on laver un tapis persan à l'eau ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. L'eau froide et un savon neutre sont la méthode recommandée pour la laine nouée main, après un test de tenue des couleurs, suivie d'un séchage à plat.",
          },
        },
        {
          "@type": "Question",
          name: "Comment enlever l'odeur d'urine de chat ou de chien d'un tapis ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'urine imprègne la chaîne du tapis. Un lavage complet avec traitement enzymatique est la seule solution durable.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on laver un tapis soi-même avec une machine de location ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour un synthétique, une injecteuse-extracteuse peut rafraîchir la surface. Sur la laine, la soie ou la viscose, le risque de dégorgement, de feutrage et de séchage incomplet est élevé.",
          },
        },
      ],
    },
  ],
};
