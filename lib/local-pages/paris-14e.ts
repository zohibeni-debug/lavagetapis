import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-paris-14e",
  kind: "arrondissement",
  hubSlug: "lavage-tapis-paris",
  hubLabel: "Lavage de tapis à Paris",
  place: "Paris 14e",
  dept: "Paris",
  postal: ["75014"],
  title: "Lavage de tapis Paris 14e (75014) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Paris 14e (75014) : enlèvement et livraison à domicile, lavage en atelier partenaire. Demandez votre devis gratuit sous 24 h.",
  h1: "Lavage de tapis à Paris 14e (75014)",
  hero: {
    lead: [
      "Dans les villas, les ateliers d'artistes et les rez-de-jardin de Paris 14e, un tapis retient facilement la terre apportée par les passages. Les fibres demandent un nettoyage choisi selon leur nature, leur état et les salissures présentes. Les photos facilitent aussi la préparation du rendez-vous.",
      "Nous organisons l'enlèvement à domicile pour les tapis situés vers Montparnasse, Denfert, Alésia ou Montsouris. Décrivez simplement votre tapis et son accès afin de recevoir un devis gratuit sous 24 h. Cette première description aide à signaler les parties du tapis les plus exposées à la terre, au sable ou aux traces de passage.",
    ],
    reassurance: [
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier partenaire",
      "Ateliers partenaires indépendants et assurés",
      "Devis gratuit sous 24 h",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Paris 14e.",
  },
  how: {
    title: "Un enlèvement organisé à Paris 14e",
    paragraphs: [
      "Indiquez l'adresse, le nombre de tapis, leurs dimensions, la fibre connue et, si possible, des photos. Pour une villa, un atelier d'artiste ou un rez-de-jardin, ces éléments permettent de préparer un rendez-vous adapté à l'accès et au volume à manipuler.",
      "Précisez l'étage, l'ascenseur, les escaliers, les consignes d'entrée et la possibilité de stationner brièvement. Lorsqu'un tapis a reçu de la terre ou du sable, signalez les zones concernées et évitez de les frotter avant l'enlèvement, afin de ne pas faire pénétrer davantage les particules dans le velours.",
      "Le tapis est confié à un atelier indépendant partenaire en Île-de-France, après examen des informations fournies. Comptez 7 à 10 jours entre l'enlèvement et la livraison ; une formule express en 72 h peut être proposée chez certains ateliers.",
    ],
    bullets: [
      "Rendez-vous à domicile préparé avec les indications d'accès et de manutention.",
      "Devis établi après échange sur la fibre, les dimensions, l'état et les taches signalées.",
      "Livraison à l'adresse convenue après lavage, séchage, contrôle et emballage.",
    ],
  },
  types: {
    title: "Quels tapis laver à Paris 14e ?",
    intro:
      "Les tapis installés près d'une entrée, dans une pièce de travail ou au rez-de-jardin n'accumulent pas les mêmes salissures. Le diagnostic distingue la chaîne et la trame, qui forment la structure, du velours, surface de poils qui reçoit les passages et les particules.",
    items: [
      {
        name: "Laine moderne",
        text: "Une laine contemporaine peut retenir poussière et terre dans l'épaisseur de son velours. Le dépoussiérage doit précéder le lavage afin de limiter les frottements inutiles. La fibre, les couleurs, les lisières et les éventuelles zones tassées sont examinées avant de choisir le traitement.",
      },
      {
        name: "Shaggy",
        text: "Les mèches longues d'un shaggy dissimulent facilement le sable, les cheveux et les petites particules. Un nettoyage adapté vise à déloger ces éléments sans tirer les mèches ni emmêler le velours. L'état du dossier et la tenue des fibres participent aussi au diagnostic.",
      },
      {
        name: "Tapis synthétique",
        text: "Un tapis synthétique peut convenir à une zone de passage, mais sa surface doit tout de même être examinée avant lavage. Les taches, l'usure, le support et les bordures guident la préparation. Un entretien approprié aide à retirer les salissures sans traiter toutes les fibres comme de la laine.",
      },
      {
        name: "Kilim",
        text: "Le kilim est un tissage plat dont les lisières et les franges demandent une attention particulière. La terre peut se loger entre les fils plutôt que dans un velours épais. Le rinçage et le séchage sont donc adaptés à cette construction pour préserver la forme du tapis.",
      },
    ],
  },
  stains: {
    title: "Terre, taches et odeurs sur les tapis du 14e",
    intro:
      "La nature d'une trace, son ancienneté et la fibre déterminent le traitement possible. Signalez ce que vous avez observé plutôt que d'essayer plusieurs produits, car une intervention non adaptée peut fixer la salissure ou modifier l'aspect du velours.",
    items: [
      {
        name: "Terre et sable de passage",
        text: "La terre sèche et le sable se glissent à la base des fibres, surtout sur un tapis placé entre l'extérieur et une pièce de vie. Le dépoussiérage retire d'abord les particules libres. Le lavage est ensuite choisi selon la fibre afin de traiter la salissure sans abrasion supplémentaire.",
      },
      {
        name: "Taches de boisson ou de repas",
        text: "Pour une tache récente, absorbez doucement l'excédent avec un linge propre, sans frotter. Indiquez ensuite ce qui a été renversé et depuis quand. Le pré-détachage, préparation ciblée avant le lavage, est décidé après contrôle de la couleur et de la résistance de la fibre.",
      },
      {
        name: "Odeurs, mites et zones peu déplacées",
        text: "Une odeur ou une zone abîmée doit être mentionnée dès la demande de devis. Les mites sont les larves de la teigne qui peuvent s'attaquer à la laine, en particulier dans les parties peu déplacées. L'examen permet d'identifier les précautions à prendre et les options utiles.",
      },
    ],
  },
  workshop: {
    title: "Un lavage à l'eau adapté à chaque tapis",
    intro:
      "L'atelier indépendant partenaire adapte le nettoyage à la fibre, aux couleurs, au support et aux fragilités observées. Le tapis est contrôlé à chaque étape afin que le traitement corresponde à son état réel.",
    steps: [
      {
        name: "1. Diagnostic",
        text: "La fibre, les couleurs, le velours, les lisières, les franges et le dossier sont examinés. Un test de dégorgement vérifie si une couleur risque de migrer pendant le lavage.",
      },
      {
        name: "2. Dépoussiérage",
        text: "Le battage et l'aspiration au dos permettent de retirer la poussière, la terre et les particules logées dans le tapis. Cette préparation limite l'action abrasive des grains au cours des opérations suivantes.",
      },
      {
        name: "3. Shampooing et rinçage",
        text: "Un shampooing au pH neutre et un pré-détachage ciblé sont appliqués lorsque le diagnostic le permet. Le rinçage évacue ensuite les résidus de lavage et les salissures décollées.",
      },
      {
        name: "4. Essorage et séchage",
        text: "L'essorage retire une partie de l'eau avant le séchage à plat dans une salle ventilée. La durée dépend de la fibre, de l'épaisseur et de l'humidité du tapis après rinçage.",
      },
      {
        name: "5. Finitions et contrôle",
        text: "Le velours est remis dans son sens, les franges sont contrôlées et le tapis est vérifié avant emballage. Une réparation de frange, de lisière ou de velours, lorsqu'elle est nécessaire, fait l'objet d'un chiffrage séparé.",
      },
    ],
  },
  prices: {
    title: "Prix d'un lavage de tapis à Paris 14e",
    intro:
      "Le prix est préparé selon le type de tapis, sa surface, son état et les options retenues après diagnostic. Ces deux exemples donnent une base de calcul pour une surface de 6,0 m².",
    examples: [
      { label: "persan 300 × 400 cm", detail: "6,0 m² × 15–25 €", price: "90–150 €" },
      { label: "synthétique 200 × 300 cm", detail: "12,0 m² × 35–60 €", price: "420–720 €" },
    ],
    note: "Les fourchettes au m² sont les suivantes : synthétique 15–25 € ; shaggy et laine moderne 22–35 € ; kilim 25–40 € ; berbère 25–45 € ; persan 35–60 € ; soie 55–120 €. Un minimum fréquent de 60 € par tapis peut s'appliquer ; l'enlèvement et la livraison sont offerts à partir de 6 m².",
  },
  reviews: [REVIEWS[15], REVIEWS[2], REVIEWS[22]],
  areas: {
    title: "Enlèvement dans les secteurs de Paris 14e",
    intro:
      "Les rendez-vous sont organisés à l'adresse indiquée, en tenant compte des accès que vous nous communiquez. Les secteurs suivants servent à situer votre demande, sans changer la préparation du devis ni le traitement du tapis.",
    list: [
      "Montparnasse",
      "Denfert",
      "Alésia",
      "Montsouris",
      "Villas avec accès à préciser",
      "Ateliers d'artistes avec contraintes de manutention signalées",
      "Rez-de-jardin et entrées sur cour",
    ],
    outro: "Pour un tapis lourd, plusieurs pièces ou un accès particulier, décrivez les contraintes dès le premier échange. Le devis et le rendez-vous pourront ainsi être préparés avec les informations nécessaires.",
  },
  faq: [
    {
      q: "Pouvez-vous enlever un tapis dans une villa à Paris 14e ?",
      a: "Oui, sur rendez-vous à l'adresse indiquée. Précisez les accès, les marches éventuelles, le volume du tapis et toute consigne utile afin de préparer l'enlèvement.",
    },
    {
      q: "Comment signaler un tapis situé dans un atelier d'artiste ?",
      a: "Envoyez les dimensions, des photos et les informations d'accès par téléphone ou WhatsApp. Mentionnez les contraintes de manutention et les taches observées pour que le devis soit préparé de façon adaptée.",
    },
    {
      q: "La terre et le sable d'un rez-de-jardin peuvent-ils abîmer le tapis ?",
      a: "Oui, les grains retenus dans le velours peuvent frotter les fibres à chaque passage. Évitez de brosser énergiquement la zone et signalez cette salissure lors de la demande de devis.",
    },
    {
      q: "L'enlèvement est-il possible vers Montparnasse, Denfert, Alésia ou Montsouris ?",
      a: "Oui, ces secteurs font partie des zones desservies à Paris 14e. Donnez l'adresse et les modalités d'accès afin que le rendez-vous soit organisé à domicile.",
    },
    {
      q: "Quel délai prévoir pour le lavage d'un tapis en laine ?",
      a: "Comptez 7 à 10 jours entre l'enlèvement et la livraison. Une formule express en 72 h peut être proposée chez certains ateliers après étude de la demande.",
    },
    {
      q: "Comment obtenir un devis pour un shaggy ou un tapis synthétique ?",
      a: "Transmettez les dimensions, la matière si elle est connue, des photos et les taches éventuelles. Le devis est gratuit sous 24 h, puis l'enlèvement et la livraison sont organisés à domicile.",
    },
  ],
  didYouKnow:
    "La terre et le sable retenus dans un tapis agissent comme des particules abrasives lors des passages. En s'accumulant à la base du velours, ils peuvent user les fibres : un dépoussiérage adapté avant lavage aide à limiter ce phénomène.",
  updated: "2026-10-21",
  neighbours: [
    {
      label: "Lavage de tapis à Paris 6e",
      slug: "lavage-tapis-paris-6e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 13e",
      slug: "lavage-tapis-paris-13e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 15e",
      slug: "lavage-tapis-paris-15e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris",
      slug: "lavage-tapis-paris",
      note: "Le hub parisien, qui recense les vingt arrondissements.",
    },
  ],
  order: ["types", "stains", "workshop", "faq", "areas", "reviews", "prices"],
};

export default page;
