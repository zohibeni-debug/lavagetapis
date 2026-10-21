import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-paris-2e",
  kind: "arrondissement",
  hubSlug: "lavage-tapis-paris",
  hubLabel: "Lavage de tapis à Paris",
  place: "Paris 2e",
  dept: "Paris",
  postal: ["75002"],
  title: "Lavage de tapis Paris 2e (75002) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Paris 2e (75002) : enlèvement et livraison à domicile, lavage en atelier partenaire. Demandez votre devis gratuit sous 24 h.",
  h1: "Lavage de tapis à Paris 2e (75002)",
  hero: {
    lead: [
      "Dans le Paris 2e, les petits appartements et les escaliers étroits demandent une organisation attentive pour faire nettoyer un tapis de couloir ou un petit format. Indiquez la taille du tapis et les conditions d'accès afin de préparer l'enlèvement à domicile.",
      "Le service met en relation avec des ateliers indépendants partenaires en Île-de-France, qui adaptent le lavage à la fibre et à l'état du tapis. Vous recevez un devis gratuit sous 24 h avant toute prestation.",
    ],
    reassurance: [
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier partenaire",
      "Ateliers indépendants partenaires en Île-de-France",
      "Devis gratuit sous 24 h",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Paris 2e.",
  },
  how: {
    title: "Un enlèvement adapté aux petits logements du Paris 2e",
    paragraphs: [
      "Pour demander un devis, envoyez les dimensions du tapis, sa matière si vous la connaissez et des photos prises à plat. Pour un tapis de couloir, une photo de l'ensemble et une autre d'une éventuelle tache aident à préciser le besoin sans déplacer le tapis avant le rendez-vous.",
      "Précisez l'étage, l'ascenseur lorsqu'il existe, la largeur des escaliers et les modalités d'entrée dans l'immeuble. Autour de Bourse, du Sentier, de Montorgueil ou des passages couverts, ces informations permettent d'organiser un créneau compatible avec l'accès communiqué.",
      "Le tapis est confié à un atelier indépendant partenaire en Île-de-France après l'enlèvement. Comptez 7 à 10 jours entre l'enlèvement et la livraison ; une formule express en 72 h est disponible chez certains ateliers, sur devis.",
    ],
    bullets: [
      "Prise de rendez-vous selon les accès et les consignes indiqués.",
      "Devis fondé sur les dimensions, la fibre, l'état et les options nécessaires.",
      "Retour à l'adresse convenue après lavage, séchage et contrôle.",
    ],
  },
  types: {
    title: "Quels tapis faire laver à Paris 2e ?",
    intro:
      "Les tapis de couloir et les petits formats sont souvent soumis à des passages répétés et à la poussière déposée près des entrées. Le diagnostic distingue la fibre, le velours, les franges, les lisières et le dossier avant de définir un traitement adapté. Leur taille ne dispense pas du diagnostic, car la matière et l'état des bordures restent déterminants.",
    items: [
      {
        name: "Tapis de couloir en laine",
        text: "Un tapis de couloir en laine peut retenir la poussière dans son velours, surtout s'il est posé sur un axe de passage. Le diagnostic vérifie l'état des bords et des franges, puis le lavage est choisi pour nettoyer la fibre sans provoquer de feutrage. Sa longueur et sa largeur doivent être communiquées précisément pour le devis. Si le tapis est posé près d'une porte, signalez les zones de frottement ou les marques qui persistent.",
      },
      {
        name: "Petit tapis shaggy",
        text: "Les mèches longues d'un shaggy cachent facilement poussières, miettes et petites salissures. Le dépoussiérage est important avant le lavage, car il retire les particules retenues entre les fibres. L'état du dossier est également observé afin de choisir une méthode cohérente avec sa construction. Une photo prise de profil peut aussi montrer si les mèches sont tassées ou irrégulières.",
      },
      {
        name: "Laine moderne",
        text: "Un tapis en laine moderne placé dans une pièce de vie peut avoir besoin d'un nettoyage régulier lorsque sa surface devient terne. La laine est examinée pour repérer les zones tassées, les marques d'usage et les traces localisées. Le lavage à l'eau est adapté après contrôle des couleurs et de la stabilité de la fibre. Si un bord se relève ou si des franges se défont, cette information est indiquée avant le traitement.",
      },
      {
        name: "Petit tapis synthétique",
        text: "Un petit tapis synthétique est courant près d'une entrée, d'un lit ou d'une table basse. Même si sa fibre est différente de la laine, ses bords, son envers et les taches visibles sont contrôlés avant intervention. Les dimensions permettent de déterminer la surface prise en compte pour le devis. Le diagnostic vérifie aussi qu'aucune zone du support ne présente de fragilité visible.",
      },
    ],
  },
  stains: {
    title: "Taches et salissures des tapis du Paris 2e",
    intro:
      "Sur un petit format, une tache est vite visible et les zones de passage se marquent plus vite. Signalez toujours la nature connue de la salissure ainsi que son ancienneté : cela permet de prévoir le diagnostic et le prétraitement éventuel. Une photographie datée, lorsqu'elle est disponible, aide aussi à décrire l'évolution de la trace.",
    items: [
      {
        name: "Traces de passage",
        text: "Les passages répétés peuvent griser un tapis de couloir et tasser son velours. Un dépoussiérage approfondi retire une partie des particules accumulées avant le lavage. Le contrôle final permet de vérifier l'aspect des zones qui étaient les plus sollicitées.",
      },
      {
        name: "Café, boisson ou aliments",
        text: "Ne frottez pas intensément une tache récente, car le frottement peut l'étendre ou la faire pénétrer dans les fibres. Épongez délicatement l'excédent et indiquez ce qui a été renversé lors de la demande de devis. L'atelier évalue ensuite la fibre et le risque de migration des couleurs.",
      },
      {
        name: "Odeurs et humidité",
        text: "Une odeur peut persister dans un tapis rangé, peu aéré ou exposé à l'humidité. Décrivez la zone concernée et évitez de la masquer avec un parfum. Cette indication aide à évaluer le traitement à prévoir après examen du tapis.",
      },
    ],
  },
  workshop: {
    title: "Le traitement en atelier partenaire",
    intro:
      "Le tapis est traité par un atelier indépendant partenaire en Île-de-France. Les opérations sont ajustées après examen de la fibre, des couleurs, des bords et de l'état général de la pièce. Pour les petits formats, le contrôle des bordures évite de négliger une usure localisée, parfois plus visible après dépoussiérage.",
    steps: [
      {
        name: "1. Diagnostic",
        text: "L'atelier examine la matière, les couleurs, les franges, les lisières et les zones marquées. Un test de dégorgement peut être réalisé lorsque les couleurs paraissent sensibles.",
      },
      {
        name: "2. Dépoussiérage",
        text: "La poussière et les particules retenues dans le velours ou au dos du tapis sont retirées avec une action adaptée. Cette étape est particulièrement utile pour les tapis de couloir très sollicités.",
      },
      {
        name: "3. Lavage et prétraitement",
        text: "Le lavage à l'eau et le prétraitement des taches sont définis selon la fibre et les observations faites au diagnostic. Les zones tachées sont traitées avec mesure, sans promettre l'effacement d'une marque ancienne.",
      },
      {
        name: "4. Rinçage et essorage",
        text: "Le rinçage retire les résidus du lavage. L'essorage enlève ensuite une partie de l'eau avant le séchage, tout en tenant compte de la construction du tapis.",
      },
      {
        name: "5. Séchage et contrôle",
        text: "Le tapis sèche dans des conditions adaptées à sa fibre, puis son aspect, ses bords et ses franges sont contrôlés. Il est préparé pour la livraison à l'adresse convenue.",
      },
    ],
  },
  prices: {
    title: "Prix du lavage de tapis à Paris 2e",
    intro:
      "Le devis prend en compte la surface, la fibre, l'état du tapis et les opérations nécessaires. Les exemples ci-dessous reprennent les fourchettes appliquées au mètre carré. La surface est calculée à partir des dimensions communiquées.",
    examples: [
      { label: "shaggy 160 × 230 cm", detail: "3,68 m² × 22–35 €", price: "80,96–128,80 €" },
      { label: "laine moderne 200 × 300 cm", detail: "6,0 m² × 22–35 €", price: "132–210 €" },
    ],
    note:
      "Le minimum fréquent est de 60 € par tapis. L'enlèvement et la livraison sont offerts à partir de 6 m².",
  },
  reviews: [REVIEWS[2], REVIEWS[10], REVIEWS[19]],
  areas: {
    title: "Enlèvement à domicile dans le Paris 2e",
    intro:
      "Les rendez-vous sont organisés à l'adresse indiquée, avec les informations utiles pour entrer dans l'immeuble et transporter le tapis en sécurité.",
    list: [
      "Bourse, selon l'adresse et les consignes d'accès communiquées",
      "Sentier, avec indication de l'étage et de l'ascenseur le cas échéant",
      "Montorgueil, pour les petits formats et tapis de couloir à enlever",
      "Passages couverts, lorsque l'adresse de retrait est précisée",
      "Petits appartements avec tapis de couloir ou formats compacts",
      "Immeubles avec escaliers étroits et accès à signaler avant le rendez-vous",
    ],
    outro:
      "Si le tapis doit être porté dans un escalier étroit, indiquez sa longueur et les contraintes connues dès le premier échange. Le rendez-vous peut ainsi être préparé avec les informations adaptées à votre adresse.",
  },
  faq: [
    {
      q: "L'enlèvement est-il possible pour un petit tapis près de Bourse ?",
      a: "Oui, l'enlèvement peut être organisé à l'adresse indiquée près de Bourse. Transmettez les dimensions du tapis, l'étage et les modalités d'entrée afin de préparer le rendez-vous.",
    },
    {
      q: "Comment faire enlever un tapis de couloir dans un immeuble du Sentier ?",
      a: "Indiquez la longueur du tapis de couloir, l'étage, l'existence d'un ascenseur et la largeur des escaliers si elle pose une contrainte. Ces précisions permettent d'organiser le retrait dans de bonnes conditions.",
    },
    {
      q: "Un tapis taché dans un petit appartement vers Montorgueil peut-il être traité ?",
      a: "Oui, envoyez des photos du tapis entier et de la zone tachée, avec ses dimensions et la matière connue. L'atelier évalue la fibre et la tache avant de proposer le traitement sur devis.",
    },
    {
      q: "Que faut-il préciser pour une adresse proche des passages couverts ?",
      a: "Communiquez l'adresse complète, le code ou les consignes d'accès si nécessaire, ainsi que l'étage. Signalez aussi les escaliers étroits ou tout élément utile au transport du tapis.",
    },
    {
      q: "Quel délai prévoir entre l'enlèvement et la livraison ?",
      a: "Comptez 7 à 10 jours entre l'enlèvement et la livraison. Une formule express en 72 h est proposée chez certains ateliers, sur devis.",
    },
    {
      q: "Comment obtenir un devis pour plusieurs petits tapis ?",
      a: "Envoyez les dimensions de chaque tapis, des photos et les informations connues sur les fibres ou les taches. Le devis est gratuit sous 24 h et permet de prévoir l'enlèvement à domicile.",
    },
  ],
  didYouKnow:
    "Les petits formats et les tapis de couloir accumulent souvent la poussière sur une surface réduite et dans les zones de passage. Mesurer leur longueur et leur largeur, puis signaler les franges ou bords fragiles, aide l'atelier à préparer un lavage adapté.",
  updated: "2026-10-21",
  neighbours: [
    {
      label: "Lavage de tapis à Paris 1er",
      slug: "lavage-tapis-paris-1er",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 3e",
      slug: "lavage-tapis-paris-3e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 9e",
      slug: "lavage-tapis-paris-9e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 10e",
      slug: "lavage-tapis-paris-10e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris",
      slug: "lavage-tapis-paris",
      note: "Le hub parisien, qui recense les vingt arrondissements.",
    },
  ],
  order: ["types", "stains", "workshop", "prices", "areas", "reviews", "faq"],
};

export default page;
