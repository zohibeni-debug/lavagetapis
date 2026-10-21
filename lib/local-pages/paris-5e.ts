import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-paris-5e",
  kind: "arrondissement",
  hubSlug: "lavage-tapis-paris",
  hubLabel: "Lavage de tapis à Paris",
  place: "Paris 5e",
  dept: "Paris",
  postal: ["75005"],
  title: "Lavage de tapis Paris 5e (75005) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Paris 5e (75005) : enlèvement et livraison à domicile, lavage en atelier partenaire. Demandez votre devis gratuit sous 24 h.",
  h1: "Lavage de tapis à Paris 5e (75005)",
  hero: {
    lead: [
      "Dans le Paris 5e, les tapis de famille, les tapis des appartements et ceux des bibliothèques retiennent au fil du temps poussière et particules. Du Quartier latin au jardin des Plantes, nous organisons leur enlèvement à l'adresse qui vous convient.",
      "Chaque tapis est confié à un atelier indépendant partenaire en Île-de-France, après un échange sur sa fibre, ses dimensions et son état. Le lavage est réalisé sur devis ; vous recevez une réponse gratuite sous 24 h.",
    ],
    reassurance: [
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier partenaire",
      "Ateliers indépendants partenaires en Île-de-France",
      "Devis gratuit sous 24 h",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Paris 5e.",
  },
  how: {
    title: "Un enlèvement préparé à votre adresse dans le 5e",
    paragraphs: [
      "Pour demander un devis, indiquez l'adresse, le nombre de tapis, leurs dimensions et, si possible, des photographies. Ces éléments permettent d'identifier la matière apparente, les zones tachées et les contraintes utiles à l'organisation du rendez-vous.",
      "Précisez l'étage, la présence d'un ascenseur, les escaliers, les consignes d'accès et la possibilité de s'arrêter brièvement. Que votre adresse se situe près du Panthéon, de Mouffetard ou du jardin des Plantes, ces informations aident à prévoir un enlèvement adapté à votre immeuble.",
      "Après le lavage à l'eau réalisé par l'atelier partenaire, comptez 7 à 10 jours entre l'enlèvement et la livraison. Une formule express en 72 h peut être proposée par certains ateliers, après vérification de la fibre et de la charge de travail.",
    ],
    bullets: [
      "Rendez-vous défini avec vos consignes d'accès et de manutention.",
      "Devis préparé selon la fibre, la surface, l'état et les options demandées.",
      "Enlèvement, contrôle en atelier, puis livraison à l'adresse convenue.",
    ],
  },
  types: {
    title: "Quels tapis laver à Paris 5e ?",
    intro:
      "Le diagnostic distingue la fibre, le velours, les lisières, les franges et le dossier avant toute opération. Cette première lecture est particulièrement utile pour les tapis de famille conservés dans une pièce de vie ou parmi des livres. Elle permet aussi de signaler séparément une fragilité visible, sans présumer du résultat avant l'examen de l'atelier.",
    items: [
      {
        name: "Berbère en laine",
        text: "Un tapis berbère peut accumuler poussière et débris dans son velours épais. L'atelier vérifie l'état de la laine, des bordures et des éventuelles zones tassées avant de choisir le dépoussiérage, le lavage et le séchage appropriés.",
      },
      {
        name: "Persan ou tapis d'Orient",
        text: "Pour un tapis noué, l'examen porte sur les couleurs, les franges, les lisières et les parties déjà fragiles. Un test de dégorgement peut être nécessaire avant le lavage afin d'évaluer le comportement des teintes au contact de l'eau.",
      },
      {
        name: "Kilim ou tissage plat",
        text: "Un kilim ne possède pas le même velours qu'un tapis en laine épaisse et ses bords demandent une attention précise. Le choix du rinçage, de l'essorage et du séchage tient compte de son tissage et de la tenue de ses motifs.",
      },
      {
        name: "Laine moderne ou tapis tufté",
        text: "La laine moderne et le tufté sont contrôlés sur leur face et leur envers. Pour un modèle tufté, l'état du support et de la colle est pris en compte afin d'éviter une action inadaptée à sa construction.",
      },
    ],
  },
  stains: {
    title: "Poussière, taches et odeurs sur les tapis du 5e",
    intro:
      "Une tache ou une odeur doit être signalée dès la demande de devis, sans produit ajouté à domicile. L'atelier partenaire peut alors apprécier la nature de la fibre et la localisation des salissures avant de proposer le traitement adapté.",
    items: [
      {
        name: "Poussière retenue dans le velours",
        text: "Les tapis de famille et les tapis placés près d'étagères ou de bibliothèques peuvent retenir de la poussière au cœur des fibres. Le dépoussiérage précédant le lavage vise à retirer ces particules avant le nettoyage à l'eau. Décrire depuis combien de temps le tapis n'a pas été lavé aide à préparer le diagnostic.",
      },
      {
        name: "Boissons et traces du quotidien",
        text: "Pour une trace de café, de thé ou d'un aliment, indiquez son origine présumée et son ancienneté. Le pré-détachage est décidé après examen ; frotter ou mouiller largement la zone avant le rendez-vous risque de compliquer l'évaluation.",
      },
      {
        name: "Odeurs, humidité ou accident domestique",
        text: "Une odeur persistante ou une zone ayant été en contact avec de l'humidité mérite d'être décrite avec précision. Le diagnostic vérifie l'état de la fibre et du dossier afin que le devis distingue le lavage des éventuelles options utiles.",
      },
    ],
  },
  workshop: {
    title: "Le parcours d'un tapis en atelier partenaire",
    intro:
      "La prestation est réalisée par un atelier indépendant partenaire en Île-de-France. Les opérations sont adaptées après diagnostic, car la méthode appropriée dépend de la fibre, des couleurs, de l'état des franges et des zones fragiles. Une réparation éventuelle fait l'objet d'un chiffrage distinct du lavage.",
    steps: [
      {
        name: "1. Diagnostic",
        text: "Le tapis est examiné sur ses deux faces : fibre, teintes, lisières, franges et défauts visibles sont relevés. Un test de dégorgement peut être effectué avant de poursuivre.",
      },
      {
        name: "2. Dépoussiérage",
        text: "La poussière et les particules logées dans le velours sont retirées par une opération adaptée au tapis. Cette étape prépare le nettoyage sans confondre poussière incrustée et tache localisée.",
      },
      {
        name: "3. Pré-traitement et lavage",
        text: "Les zones signalées sont évaluées avant un pré-traitement ciblé, puis le tapis est lavé à l'eau avec une méthode compatible avec sa fibre. Le traitement n'est pas identique pour tous les tapis.",
      },
      {
        name: "4. Rinçage et essorage",
        text: "Le rinçage retire les résidus du lavage. L'essorage est réglé selon la nature du tapis afin de préparer un séchage maîtrisé et de limiter les contraintes sur les bordures.",
      },
      {
        name: "5. Séchage et finitions",
        text: "Le tapis est séché dans des conditions adaptées, puis contrôlé avant l'emballage. Les franges, le velours et les lisières sont vérifiés avant que la livraison soit organisée.",
      },
    ],
  },
  prices: {
    title: "Prix d'un lavage de tapis à Paris 5e",
    intro:
      "Le devis dépend du type de tapis, de sa surface, de son état et des options nécessaires. Ces deux exemples donnent un repère avant l'examen du tapis.",
    examples: [
      { label: "berbère 200 × 300 cm", detail: "6,0 m² × 25–45 €", price: "150–270 €" },
      { label: "persan 300 × 400 cm", detail: "12,0 m² × 35–60 €", price: "420–720 €" },
    ],
    note:
      "Les tarifs indicatifs sont de 25–45 €/m² pour un berbère et de 35–60 €/m² pour un persan ; le devis confirme le traitement retenu. Un minimum fréquent de 60 € par tapis s'applique, et l'enlèvement comme la livraison sont offerts à partir de 6 m².",
  },
  reviews: [REVIEWS[6], REVIEWS[15], REVIEWS[24]],
  areas: {
    title: "Enlèvement dans les secteurs du Paris 5e",
    intro:
      "Les rendez-vous sont organisés à votre adresse dans le 5e, avec les informations d'accès communiquées au moment du devis.",
    list: [
      "Quartier latin",
      "Abords du Quartier latin",
      "Panthéon",
      "Abords du Panthéon",
      "Mouffetard",
      "Secteur de Mouffetard",
      "Jardin des Plantes",
      "Abords du jardin des Plantes",
    ],
    outro:
      "Indiquez simplement votre rue, l'étage et les conditions d'accès lors du premier échange. L'enlèvement peut ainsi être préparé en tenant compte de votre adresse, sans présumer des contraintes de l'immeuble. Pour plusieurs tapis, regrouper les dimensions et les photographies facilite l'étude de la demande.",
  },
  faq: [
    {
      q: "Pouvez-vous organiser l'enlèvement d'un tapis dans le Quartier latin ?",
      a: "Oui, le Quartier latin fait partie des secteurs pris en charge à Paris 5e. Donnez l'adresse, l'étage, la présence éventuelle d'un ascenseur et les consignes d'accès afin de préparer le rendez-vous.",
    },
    {
      q: "Comment faire laver un tapis de famille près du Panthéon ?",
      a: "Envoyez les dimensions, des photographies et les informations connues sur la fibre ou l'ancienneté de la tache. L'atelier partenaire examine ensuite les couleurs, les franges et les zones fragiles avant de confirmer le traitement sur devis.",
    },
    {
      q: "Le service intervient-il vers Mouffetard ou le jardin des Plantes ?",
      a: "Oui, les rendez-vous peuvent être organisés dans ces secteurs du Paris 5e. Les modalités d'accès et de stationnement bref sont à signaler au moment de la demande pour faciliter l'enlèvement.",
    },
    {
      q: "Quel délai prévoir entre l'enlèvement et la livraison ?",
      a: "Comptez 7 à 10 jours entre l'enlèvement et la livraison, selon le traitement décidé après diagnostic. Une formule express en 72 h peut être proposée par certains ateliers lorsque la situation le permet.",
    },
    {
      q: "Les acariens et la poussière peuvent-ils justifier un lavage ?",
      a: "Un tapis non lavé depuis plusieurs années peut retenir poussière et acariens dans ses fibres. Signalez cette situation dès le devis afin que le dépoussiérage et le lavage soient prévus selon le type de tapis.",
    },
    {
      q: "Comment obtenir un devis pour plusieurs tapis ?",
      a: "Transmettez le nombre de tapis, leurs dimensions, des photographies et toute information sur les taches ou les odeurs. Le devis est gratuit sous 24 h, puis l'enlèvement et la livraison sont organisés à l'adresse convenue.",
    },
  ],
  didYouKnow:
    "Un tapis non lavé depuis des années peut retenir de la poussière dans son velours et entre ses fibres, y compris dans les zones peu déplacées. Les acariens peuvent aussi y être présents : un diagnostic permet de prévoir un dépoussiérage et un lavage adaptés à la matière du tapis. Les dessous de meubles et les parties rarement soulevées méritent d'être signalés, car ils peuvent concentrer cette poussière.",
  updated: "2026-10-21",
  neighbours: [
    {
      label: "Lavage de tapis à Paris 4e",
      slug: "lavage-tapis-paris-4e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
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
      label: "Lavage de tapis à Paris",
      slug: "lavage-tapis-paris",
      note: "Le hub parisien, qui recense les vingt arrondissements.",
    },
  ],
  order: ["types", "stains", "workshop", "areas", "reviews", "faq", "prices"],
};

export default page;
