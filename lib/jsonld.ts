// Bloc JSON-LD schema.org de la maquette, conservé à l'identique dans le HTML.
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lavagetapis.fr/#org",
      name: "lavagetapis.fr",
      url: "https://lavagetapis.fr/",
      logo: "https://lavagetapis.fr/logo/logo-lavagetapis.svg",
    },
    {
      "@type": "Service",
      serviceType: "Lavage de tapis",
      name: "Lavage de tapis en atelier avec enlèvement et livraison",
      provider: { "@id": "https://lavagetapis.fr/#org" },
      areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
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
