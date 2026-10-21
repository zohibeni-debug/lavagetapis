import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-paris-20e",
  kind: "arrondissement",
  hubSlug: "lavage-tapis-paris",
  hubLabel: "Lavage de tapis à Paris",
  place: "Paris 20e",
  dept: "Paris",
  postal: ["75020"],
  title: "Lavage de tapis Paris 20e (75020) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Paris 20e (75020) : enlèvement et livraison à domicile, lavage en atelier partenaire. Demandez votre devis gratuit sous 24 h.",
  h1: "Lavage de tapis à Paris 20e (75020)",
  hero: {
    lead: [
      "À Paris 20e, les rues en pente et les immeubles sans ascenseur demandent une préparation attentive lorsque vient le moment d'enlever un tapis. Kilim, berbère ou tapis de laine, chaque pièce est décrite avant le rendez-vous afin de prévoir une manutention adaptée.",
      "Nous organisons l'enlèvement et la livraison à domicile avec des ateliers indépendants partenaires en Île-de-France. Envoyez les dimensions, quelques photos et les contraintes d'accès : vous recevez un devis gratuit sous 24 h, établi pour votre tapis et son état.",
    ],
    reassurance: [
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier partenaire",
      "Ateliers indépendants partenaires en Île-de-France",
      "Devis gratuit sous 24 h",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Paris 20e.",
  },
  how: {
    title: "Un enlèvement préparé pour les accès du Paris 20e",
    paragraphs: [
      "Pour demander un devis, indiquez l'adresse, le nombre de tapis, leurs dimensions et leur matière si vous la connaissez. Des photos de l'ensemble et des zones marquées aident à identifier une frange fragile, une lisière usée ou une tache à signaler à l'atelier partenaire.",
      "Précisez aussi l'étage, la présence ou l'absence d'ascenseur, la largeur des passages et les éventuelles marches. Dans les rues en pente, ces renseignements permettent d'organiser l'enlèvement avec soin et d'éviter de déplacer un tapis lourd sans avoir prévu les bonnes conditions d'accès.",
      "Après validation du devis, le tapis part vers un atelier indépendant partenaire en Île-de-France pour un lavage adapté à sa fibre. Comptez 7 à 10 jours entre l'enlèvement et la livraison ; une formule express en 72 h est proposée chez certains ateliers.",
    ],
    bullets: [
      "Photos, dimensions et matière connue communiquées avant le devis.",
      "Accès, étage, ascenseur et marches précisés lors de la prise de rendez-vous.",
      "Tapis emballé et transporté vers un atelier partenaire en Île-de-France.",
      "Livraison organisée à l'adresse convenue après contrôle du tapis.",
    ],
  },
  types: {
    title: "Quels tapis laver à Paris 20e ?",
    intro:
      "Les logements du 20e accueillent aussi bien des kilims faciles à déplacer que des berbères plus épais et des tapis en fibres sensibles. Le diagnostic distingue la matière, le tissage, le velours, les franges et le dossier, car ces éléments déterminent la méthode de lavage et de séchage proposée.",
    items: [
      {
        name: "Kilim",
        text: "Le kilim est un tapis tissé à plat, sans velours épais. Ses lisières et ses franges peuvent toutefois être fragiles ; le contrôle avant lavage permet de choisir un rinçage et un séchage qui limitent les déformations du tissage.",
      },
      {
        name: "Berbère",
        text: "Un berbère présente généralement un velours dense où poussière et petites particules peuvent se loger. Le battage, l'aspiration et le lavage sont ajustés après examen de la laine, du fond et des éventuelles zones tassées par le passage.",
      },
      {
        name: "Laine moderne",
        text: "La laine moderne demande un traitement mesuré pour retirer les salissures sans provoquer de feutrage. L'état des fibres, la hauteur du velours et la tenue des couleurs sont vérifiés avant le lavage à l'eau et le séchage à plat.",
      },
      {
        name: "Soie ou viscose",
        text: "La soie comme la viscose exigent un contrôle particulier de l'humidité et des couleurs. Ces fibres ne sont pas traitées comme une laine épaisse : l'atelier évalue leur sensibilité, le risque de dégorgement et la présence de marques avant de proposer l'intervention.",
      },
    ],
  },
  stains: {
    title: "Taches, poussière et odeurs sur les tapis du 20e",
    intro:
      "Une tache récente, une odeur ou un tapis terni ne s'abordent pas de la même manière. Signaler la nature de la marque et son ancienneté dès le devis aide l'atelier partenaire à prévoir le diagnostic et les précautions nécessaires.",
    items: [
      {
        name: "Poussière incrustée",
        text: "La poussière peut s'accumuler au cœur d'un tapis, notamment dans le velours d'un berbère ou entre les fils d'un kilim. Un dépoussiérage avant lavage évite de transformer les particules en boue et prépare le travail sur les fibres.",
      },
      {
        name: "Boisson ou tache alimentaire",
        text: "Pour une trace de café, de thé, de vin ou d'aliment, ne frottez pas vigoureusement la zone. Indiquez la tache sur les photos et, si possible, son origine : le pré-détachage est alors choisi en fonction de la fibre et de la couleur.",
      },
      {
        name: "Odeurs et humidité",
        text: "Une odeur peut provenir d'un incident domestique ou d'un séjour dans un lieu humide. Il est utile de le signaler sans appliquer de parfum sur le tapis, afin que l'atelier examine la zone et propose le traitement adapté au devis.",
      },
      {
        name: "Mites et zones peu déplacées",
        text: "Les zones sous un meuble ou peu déplacées méritent une vérification, surtout sur un tapis en laine. Mentionnez toute perte de matière ou trace observée : l'état du velours, des lisières et du dossier sera contrôlé avant le lavage.",
      },
    ],
  },
  prices: {
    title: "Prix d'un lavage de tapis à Paris 20e",
    intro:
      "Le devis dépend de la surface, de la matière, de l'état du tapis et des besoins signalés au diagnostic. Les deux exemples suivants appliquent les fourchettes au m² prévues pour la soie.",
    examples: [
      { label: "berbère 200 × 300 cm", detail: "6,0 m² × 25–45 €", price: "150–270 €" },
      { label: "synthétique 240 × 340 cm", detail: "8,16 m² × 15–25 €", price: "122,40–204 €" },
    ],
    note:
      "Les fourchettes indicatives sont de 15–25 €/m² pour le synthétique, 22–35 €/m² pour le shaggy et la laine moderne, 25–40 €/m² pour le kilim, 25–45 €/m² pour le berbère, 35–60 €/m² pour le persan et 55–120 €/m² pour la soie. Un minimum de 60 € par tapis est fréquent ; l'enlèvement et la livraison sont offerts à partir de 6 m², et la prestation est réalisée sur devis.",
  },
  workshop: {
    title: "Le parcours du tapis en atelier partenaire",
    intro:
      "Le lavage est réalisé dans un atelier indépendant partenaire en Île-de-France, après un examen adapté à la matière du tapis. Chaque étape est expliquée par le diagnostic et peut être ajustée en présence de fibres fragiles, de franges ou de couleurs sensibles.",
    steps: [
      {
        name: "1. Diagnostic",
        text: "La fibre, le tissage, les lisières, les franges, le velours et les marques signalées sont examinés. Un test de dégorgement permet de vérifier la tenue des couleurs avant le lavage.",
      },
      {
        name: "2. Dépoussiérage",
        text: "Le tapis est battu pour déloger la poussière accumulée dans les fibres, puis les particules extraites sont retirées. Cette préparation est particulièrement utile avant de mouiller un velours dense ou un tissage serré.",
      },
      {
        name: "3. Lavage et rinçage",
        text: "Le lavage à l'eau et le rinçage sont adaptés à la fibre ainsi qu'aux taches identifiées lors du diagnostic. Les zones fragiles font l'objet d'une attention distincte de celle appliquée à un tapis plus résistant.",
      },
      {
        name: "4. Essorage et séchage",
        text: "L'eau est retirée avec précaution avant le séchage à plat dans un espace ventilé. La durée est déterminée par la matière, l'épaisseur et l'humidité résiduelle du tapis.",
      },
      {
        name: "5. Contrôle et livraison",
        text: "Le tapis est contrôlé après séchage, avec vérification du velours, des franges et des lisières. Il est ensuite emballé, puis la livraison à domicile est organisée selon le rendez-vous convenu.",
      },
    ],
  },
  faq: [
    {
      q: "L'enlèvement est-il possible dans un immeuble sans ascenseur à Paris 20e ?",
      a: "Oui, à condition de le signaler dès la demande de devis. L'étage, les escaliers, les passages et les dimensions du tapis permettent de préparer la manutention et le rendez-vous.",
    },
    {
      q: "Que faut-il préciser pour une adresse située dans une rue en pente ?",
      a: "Indiquez les conditions d'accès utiles lors du premier échange, en plus de l'étage et de l'ascenseur éventuel. Ces informations aident à organiser l'enlèvement du tapis dans des conditions adaptées.",
    },
    {
      q: "Pouvez-vous organiser un rendez-vous vers Belleville, Ménilmontant, Père-Lachaise ou Charonne ?",
      a: "Oui, ces repères peuvent être indiqués avec l'adresse complète lors de la demande. Les contraintes d'immeuble et d'accès restent les informations importantes pour fixer le rendez-vous.",
    },
    {
      q: "Un kilim et un tapis berbère suivent-ils le même lavage ?",
      a: "Non, le kilim tissé à plat et le berbère à velours dense ne présentent pas les mêmes contraintes. Le diagnostic vérifie la fibre, le tissage, les lisières et l'état général avant de définir le traitement.",
    },
    {
      q: "Quel délai faut-il prévoir entre l'enlèvement et la livraison ?",
      a: "Comptez 7 à 10 jours entre l'enlèvement et la livraison à domicile. Une formule express en 72 h est proposée chez certains ateliers, selon la prestation et la disponibilité.",
    },
    {
      q: "Comment obtenir un devis pour plusieurs tapis ?",
      a: "Envoyez les dimensions de chaque tapis, leur matière connue, des photos et les éventuelles taches ou fragilités. Le devis est gratuit sous 24 h et permet ensuite d'organiser l'enlèvement à domicile.",
    },
  ],
  didYouKnow:
    "Le battage sert à déloger la poussière accumulée au cœur des fibres avant le lavage. Cette extraction préalable évite que les particules restent mêlées à l'eau et permet d'aborder le nettoyage sur un tapis déjà débarrassé d'une partie de sa poussière.",
  updated: "2026-10-21",
  reviews: [REVIEWS[1], REVIEWS[21], REVIEWS[16]],
  areas: {
    title: "Enlèvement de tapis dans les secteurs du Paris 20e",
    intro:
      "Les rendez-vous sont organisés à domicile dans Paris 20e en tenant compte de la configuration de l'immeuble. Lors de votre demande, les repères de quartier complètent les informations d'accès utiles à l'enlèvement.",
    list: [
      "Belleville, avec les indications d'étage et d'accès à communiquer",
      "Ménilmontant, en précisant ascenseur ou escaliers",
      "Père-Lachaise, avec les contraintes de passage signalées au rendez-vous",
      "Charonne, pour les tapis à enlever et à livrer à domicile",
      "Rues en pente, avec les conditions d'accès décrites avant le déplacement",
      "Immeubles sans ascenseur, en indiquant l'étage et la circulation intérieure",
    ],
    outro:
      "Pour un tapis volumineux ou plusieurs pièces, décrivez simplement les accès et joignez des photos. Le devis puis le rendez-vous peuvent ainsi être préparés avec l'atelier partenaire et adaptés à votre situation.",
  },
  neighbours: [
    {
      label: "Lavage de tapis à Paris 11e",
      slug: "lavage-tapis-paris-11e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 12e",
      slug: "lavage-tapis-paris-12e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris 19e",
      slug: "lavage-tapis-paris-19e",
      note: "Arrondissement limitrophe, même organisation d'enlèvement.",
    },
    {
      label: "Lavage de tapis à Paris",
      slug: "lavage-tapis-paris",
      note: "Le hub parisien, qui recense les vingt arrondissements.",
    },
  ],
  order: ["types", "stains", "prices", "workshop", "faq", "areas", "reviews"],
};

export default page;
