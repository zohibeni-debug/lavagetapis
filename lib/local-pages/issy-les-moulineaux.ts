import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-issy-les-moulineaux",
  kind: "ville",
  hubSlug: "lavage-tapis-hauts-de-seine",
  hubLabel: "Lavage de tapis dans les Hauts-de-Seine",
  place: "Issy-les-Moulineaux",
  dept: "Hauts-de-Seine",
  postal: ["92130"],
  title: "Lavage de tapis Issy-les-Moulineaux (92130) · À domicile",
  description:
    "Lavage de tapis à Issy-les-Moulineaux (92130) : enlèvement et livraison à domicile, devis gratuit sous 24 h. Préservez vos tapis, demandez votre devis.",
  h1: "Lavage de tapis à Issy-les-Moulineaux (92130)",
  hero: {
    lead: [
      "À Issy-les-Moulineaux, les tapis de logements familiaux et les tapis de bureaux des immeubles récents du Fort d'Issy ou du Val de Seine demandent une organisation d'enlèvement adaptée.",
      "Indiquez leur matière, leurs dimensions et les conditions d'accès : un atelier partenaire organise le lavage à l'eau sur devis, puis la livraison à l'adresse convenue.",
    ],
    reassurance: [
      "Devis gratuit sous 24 h",
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier",
      "Ateliers sélectionnés et assurés",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Issy-les-Moulineaux.",
  },
  how: {
    title: "Un enlèvement adapté aux accès d'Issy-les-Moulineaux",
    paragraphs: [
      "Envoyez les dimensions, la matière connue et des photos de chaque tapis. Pour un logement familial ou des tapis de bureaux, précisez dès la demande l'étage, l'ascenseur, le digicode et, le cas échéant, le gardien ou l'accueil. Ces indications préparent le rendez-vous sans supposer que tous les accès se ressemblent.",
      "Au Fort d'Issy comme au Val de Seine, un hall, un sas, un badge ou un créneau d'accueil peuvent être à prendre en compte. Près de Corentin-Celton, de la rue Ernest-Renan, de l'avenue de la République ou du boulevard des Frères-Voisin, indiquez aussi la possibilité de stationner brièvement et toute consigne pour protéger les parties communes.",
      "Le délai habituel est de 7 à 10 jours entre l'enlèvement et la livraison. Certains ateliers proposent une formule express en 72 h, avec un supplément de 15 à 25 %, à confirmer au devis.",
    ],
    bullets: [
      "Rendez-vous préparé selon l'adresse, l'accès et le volume de tapis.",
      "Devis gratuit sous 24 h après l'échange sur la fibre et l'état.",
      "Enlèvement, lavage en atelier, contrôle et livraison à domicile.",
    ],
  },
  types: {
    title: "Tapis de logement et de bureaux à faire laver à Issy-les-Moulineaux",
    intro:
      "Le diagnostic commence par la fibre, le tissage et l'état du support. Dans les appartements familiaux comme pour les tapis de bureaux, la destination et les contraintes d'accès sont à préciser au devis.",
    items: [
      {
        name: "Tapis synthétique de bureau",
        text: "Le polypropylène ou le polyester se retrouvent sur des tapis tissés machine, fabriqués mécaniquement plutôt que noués main. Leur usage dans un espace de travail impose de signaler les traces localisées et l'accès aux locaux avant l'enlèvement.",
      },
      {
        name: "Laine moderne de salon",
        text: "Le velours est la surface de poils visible du tapis. Sur une laine moderne placée dans un séjour familial, le traitement cherche à retirer les salissures sans provoquer de feutrage, tandis que le brossage final respecte le sens du velours.",
      },
      {
        name: "Berbère ou Beni Ouarain",
        text: "Le velours épais d'un berbère peut retenir miettes et poussière. La laine contient naturellement de la lanoline, une protection grasse de la fibre ; battage, lavage et séchage sont adaptés après examen de l'état et des couleurs.",
      },
      {
        name: "Tufté main",
        text: "Un tapis tufté main possède des mèches implantées dans un dossier en toile, collé au latex. Ce support est sensible à l'eau : son état doit être vérifié avant de retenir un traitement et un séchage appropriés.",
      },
      {
        name: "Kilim et tissage plat",
        text: "Le kilim est un tissage plat, sans épaisseur de velours. Ses lisières, les bords latéraux du tapis, et son surjet, la couture de finition du bord, demandent une vérification avant le lavage, tout comme ses franges, prolongement des fils de chaîne.",
      },
      {
        name: "Viscose et tapis oriental",
        text: "La viscose, souvent appelée soie artificielle, peut jaunir, durcir et s'abîmer lorsqu'elle est frottée mouillée. Pour un tapis oriental noué main ou une viscose brillante, le test de dégorgement vérifie le risque de migration des couleurs avant toute intervention.",
      },
    ],
  },
  stains: {
    title: "Taches, odeurs et mites : les signaler avant l'enlèvement",
    intro:
      "Le rythme d'un foyer avec enfants, la présence d'un animal ou les passages dans des bureaux peuvent laisser des marques très différentes. Décrivez leur origine et leur ancienneté afin que l'atelier adapte le diagnostic.",
    items: [
      {
        name: "Traces dans les logements familiaux",
        text: "Boisson, graisse, terre ou résidus de repas ne s'abordent pas de la même façon sur une laine, un tapis synthétique ou une viscose. Le pré-détachage est une préparation ciblée avant le shampooing ; un traitement enzymatique peut être envisagé pour certains résidus organiques.",
      },
      {
        name: "Tapis de bureaux et odeurs",
        text: "Sur un tapis de bureau, indiquez la zone concernée, le revêtement et les contraintes d'accès aux locaux. Pour les odeurs et l'urine, une option est proposée à 5–15 €/m² ; le résultat dépend de la fibre, du support et de l'ancienneté de la souillure.",
      },
      {
        name: "Laine stockée, mites et acariens",
        text: "Un tapis en laine resté longtemps sans être déplacé peut nécessiter une inspection. Les mites sont les larves de la teigne qui mangent la kératine de la laine. Le traitement anti-mites et anti-acariens est une option à 0–10 €/m².",
      },
    ],
  },
  workshop: {
    title: "Les étapes du lavage à l'eau en atelier",
    intro:
      "Les ateliers partenaires interviennent sur devis. Chaque opération est définie après examen du tapis, de ses couleurs et de ses zones fragiles.",
    steps: [
      {
        name: "1. Identifier les précautions",
        text: "La fibre, le tissage, les franges, les lisières et les défauts visibles sont contrôlés. Un test vérifie qu'une teinte ne risque pas de dégorger.",
      },
      {
        name: "2. Retirer la poussière",
        text: "Le battage décolle les particules prises dans le tapis. Une aspiration au dos complète cette phase avant le lavage.",
      },
      {
        name: "3. Laver et prétraiter",
        text: "Les zones signalées reçoivent un pré-détachage, puis le tapis reçoit un shampooing à la brosse rotative avec un produit au pH neutre.",
      },
      {
        name: "4. Évacuer les résidus",
        text: "Un rinçage à grande eau enlève shampooing et salissures dissoutes. Le raclage retire ensuite l'eau restée à la surface.",
      },
      {
        name: "5. Sécher sous contrôle",
        text: "Après essorage, le tapis est séché à plat dans une salle ventilée. Pour la laine, le séchage prend 12 à 24 h.",
      },
      {
        name: "6. Finaliser avant livraison",
        text: "Le velours est brossé dans son sens ; les franges sont lavées puis peignées. Contrôle et emballage précèdent la livraison. Les réparations sont chiffrées à part.",
      },
    ],
  },
  prices: {
    title: "Prix du lavage de tapis à Issy-les-Moulineaux",
    intro:
      "La fourchette dépend de la fibre, de la surface, de l'état et des options retenues. Le devis permet aussi de préparer l'enlèvement d'un tapis de logement ou de bureaux.",
    examples: [
      { label: "synthétique 200 × 300 cm", detail: "6 m² × 15–25 €", price: "90–150 €" },
      { label: "tapis en laine moderne 200 × 300 cm", detail: "6 m² × 22–35 €", price: "132–210 €" },
    ],
    note:
      "Le minimum de facturation est de 60 € par tapis. L'enlèvement et la livraison sont généralement offerts à partir de 6 m² ; sinon, ils coûtent 10 à 30 €. Un détachage ciblé est proposé à 30–60 €, et l'express ajoute 15 à 25 %. Les réparations de franges, lisières ou velours sont chiffrées à part.",
  },
  faq: [
    {
      q: "Comment préparer un enlèvement au Fort d'Issy ?",
      a: "Communiquez l'adresse, l'étage, l'ascenseur, le digicode et les éventuelles règles d'accès. Signalez aussi un hall, un sas ou toute indication utile pour organiser le rendez-vous.",
    },
    {
      q: "Un tapis de bureau au Val de Seine peut-il être pris en charge ?",
      a: "Oui, l'organisation est définie sur devis. Précisez le nombre de tapis, leurs dimensions, leur fibre, l'accès aux locaux et les créneaux possibles afin de préparer l'enlèvement.",
    },
    {
      q: "Que faut-il indiquer pour une adresse près du boulevard des Frères-Voisin ?",
      a: "Donnez l'adresse complète, les consignes d'entrée, le niveau du tapis et la possibilité de stationner brièvement. Ces éléments servent uniquement à préparer le passage à domicile ou dans les locaux.",
    },
    {
      q: "L'enlèvement est-il possible près de Corentin-Celton sans ascenseur ?",
      a: "Oui, à condition de le signaler dès la demande. L'étage, la largeur des accès et les escaliers permettent d'organiser le rendez-vous en tenant compte de la manutention.",
    },
    {
      q: "Pourquoi un tapis en polypropylène doit-il tout de même être diagnostiqué ?",
      a: "Cette fibre synthétique ne boit pas l'eau, mais la méthode dépend aussi des teintes, du tissage, des taches et de l'état général. Des photos et les dimensions permettent d'établir le devis.",
    },
    {
      q: "Quel délai faut-il prévoir pour un tapis en laine ?",
      a: "Comptez 7 à 10 jours entre l'enlèvement et la livraison. La laine sèche à plat en salle ventilée durant 12 à 24 h. Certains ateliers proposent l'express en 72 h avec un supplément de 15 à 25 %.",
    },
  ],
  areas: {
    title: "Enlèvement à Issy-les-Moulineaux et repères utiles",
    intro:
      "Les rendez-vous sont organisés selon votre adresse et les conditions d'accès communiquées. Ces repères aident à préparer le passage dans Issy-les-Moulineaux.",
    list: [
      "Fort d'Issy",
      "Val de Seine",
      "Corentin-Celton",
      "Le repère de l'île Saint-Germain",
      "Rue Ernest-Renan",
      "Avenue de la République",
      "Boulevard des Frères-Voisin",
    ],
    outro:
      "Si votre adresse est proche de l'un de ces repères, indiquez-la avec l'étage, l'ascenseur, le digicode et les modalités de stationnement dès la demande de devis.",
  },
  reviews: [REVIEWS[4], REVIEWS[10], REVIEWS[18]],
  didYouKnow:
    "Les fibres synthétiques comme le polypropylène ne boivent pas l'eau. Cette caractéristique ne remplace pas le diagnostic : teintes, tissage, taches et support restent vérifiés avant de définir le traitement.",
  updated: "2026-10-21",
  neighbours: [
    { label: "Boulogne-Billancourt", slug: "lavage-tapis-boulogne-billancourt", note: "Commune limitrophe, au nord." },
    { label: "Saint-Cloud", slug: "lavage-tapis-saint-cloud", note: "Commune voisine, à l'ouest." },
    { label: "Paris 15e", slug: "lavage-tapis-paris-15e", note: "Arrondissement parisien limitrophe." },
    { label: "Lavage de tapis dans les Hauts-de-Seine", slug: "lavage-tapis-hauts-de-seine", note: "Le hub du département." },
  ],
  order: ["types", "stains", "workshop", "prices", "faq", "areas", "reviews"],
};

export default page;
