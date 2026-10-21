import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-paris-7e",
  kind: "arrondissement",
  hubSlug: "lavage-tapis-paris",
  hubLabel: "Lavage de tapis à Paris",
  place: "Paris 7e",
  dept: "Paris",
  postal: ["75007"],
  title: "Lavage de tapis Paris 7e (75007) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Paris 7e (75007) : devis gratuit sous 24 h, enlèvement à domicile et livraison. Demandez votre devis personnalisé dans le 7e.",
  h1: "Lavage de tapis à Paris 7e (75007)",
  hero: {
    lead: [
      "Dans les hôtels particuliers du Faubourg Saint-Germain comme dans les grands appartements des Invalides, vos tapis méritent un lavage adapté à leur fibre et à leur histoire.",
      "Nous organisons l'enlèvement à domicile dans le 7e, y compris pour les tapis persans, les soies fragiles et les pièces anciennes. Recevez un devis gratuit sous 24 h.",
    ],
    reassurance: [
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier",
      "Ateliers sélectionnés et assurés",
      "Devis gratuit sous 24 h",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Paris 7e.",
  },
  how: {
    title: "Un enlèvement organisé dans votre immeuble du 7e",
    paragraphs: [
      "Indiquez-nous l'adresse, le nombre de tapis, leurs dimensions et, si possible, quelques photos. Nous tenons compte des réalités du Faubourg Saint-Germain, des immeubles sur cour et des appartements avec parquets anciens. Un gardien peut faciliter le rendez-vous si vous êtes absent.",
      "Au départ, précisez l'étage, la présence d'un ascenseur, les escaliers de service et la possibilité de stationner brièvement. Dans les rues du quartier des Invalides, du Gros-Caillou ou autour du Champ-de-Mars, le stationnement peut être difficile : ces informations permettent de préparer l'enlèvement sans mauvaise surprise.",
      "Après le lavage à l'eau en atelier, comptez 7 à 10 jours entre l'enlèvement et la livraison. Une formule express en 72 h est proposée chez certains ateliers, avec un supplément de 15 à 25 %.",
    ],
    bullets: [
      "Rendez-vous à domicile, avec consignes d'accès et de protection des sols.",
      "Devis établi après échange sur la fibre, l'état et les dimensions.",
      "Livraison à l'adresse convenue après contrôle, finitions et emballage.",
    ],
  },
  types: {
    title: "Quels tapis laver dans le Paris 7e ?",
    intro:
      "Les pièces de réception, bibliothèques et chambres du 7e réunissent souvent tapis de valeur, tapis hérités et modèles contemporains. Le diagnostic distingue la chaîne et la trame, les fils porteurs du tapis, le velours, sa surface de poils, et les franges, prolongement des fils de chaîne.",
    items: [
      {
        name: "Persan noué main",
        text: "Un Tabriz, Ispahan ou Naïn se lit selon sa densité en nœuds/m². Le nœud persan senneh, asymétrique, et le nœud turc ghiordès, symétrique, ne réagissent pas toujours pareil au lavage. Le dépoussiérage et le test de dégorgement protègent les couleurs et l'abrash, variation de teinte volontaire ou liée au vieillissement.",
      },
      {
        name: "Soie de Qom ou de Kashan",
        text: "La soie très fine demande une manipulation douce, notamment sur les lisières et les franges. Le devis tient compte de sa densité, de son lustre et d'un éventuel risque de dégorgement. Une restauration ou une réparation est chiffrée à part.",
      },
      {
        name: "Viscose",
        text: "La viscose peut jaunir et durcir quand on la frotte mouillée. Elle demande donc un contrôle de l'humidité et une action mesurée, plutôt qu'un brossage énergique. Cette précaution convient aux tapis brillants placés dans une pièce de réception.",
      },
      {
        name: "Kilim",
        text: "Ce tissage plat, sans velours épais, est souvent plus léger mais peut présenter des franges et des lisières sensibles. Le rinçage et le séchage à plat limitent les déformations du motif.",
      },
      {
        name: "Laine moderne",
        text: "Une laine contemporaine conserve parfois de la lanoline, cire naturelle qui protège la fibre. Le lavage doit retirer poussière et salissures sans éliminer inutilement cette protection ni provoquer de feutrage.",
      },
      {
        name: "Tufté main",
        text: "Le tufté main est formé par des mèches implantées puis collées au latex. L'état du dossier et de la colle guide le choix du traitement, car une humidité excessive pourrait fragiliser le support.",
      },
    ],
  },
  stains: {
    title: "Taches, odeurs et mites sur les tapis du 7e",
    intro:
      "Dans une pièce de réception peu aérée, une tache peut rester discrète avant de s'oxyder. Un tapis ancien stocké dans un dressing, une cave ou une chambre doit aussi être examiné pour les odeurs et les insectes.",
    items: [
      {
        name: "Vin, café et traces de réception",
        text: "Sur un tapis persan placé dans un salon ou une salle à manger, signalez l'origine et l'ancienneté de la tache. Le pré-détachage, préparation ciblée avant le lavage, est adapté à la fibre après diagnostic. Une auréole ancienne peut nécessiter un traitement spécifique.",
      },
      {
        name: "Odeurs et urine",
        text: "Les tapis hérités ou conservés dans des pièces fermées peuvent retenir une odeur. Le traitement odeurs et urine est proposé en option à 5–15 €/m². Ne masquez pas la zone avec un parfum : indiquez-la lors du devis.",
      },
      {
        name: "Mites et acariens",
        text: "Les mites sont les larves de la teigne qui mangent la kératine de la laine. Les tapis anciens, les dessous de meubles et les zones peu déplacées sont à surveiller. Un traitement anti-mites et anti-acariens peut être ajouté pour 0–10 €/m².",
      },
    ],
  },
  workshop: {
    title: "Un lavage à l'eau pensé pour les fibres fragiles",
    intro:
      "L'atelier partenaire examine chaque tapis avant d'engager le nettoyage. Les étapes sont adaptées à la fibre, aux couleurs, au dossier et aux réparations éventuelles.",
    steps: [
      { name: "1. Diagnostic", text: "La fibre, les couleurs, les lisières, les franges et les zones fragiles sont examinées. Un test de dégorgement vérifie si une couleur risque de migrer." },
      { name: "2. Dépoussiérage", text: "Le battage déloge la poussière incrustée, puis l'aspiration au dos retire les particules restantes sans agresser le velours." },
      { name: "3. Shampooing", text: "Un shampooing à la brosse rotative, au pH neutre, est associé au pré-détachage des salissures repérées." },
      { name: "4. Rinçage", text: "Le rinçage à grande eau évacue les résidus. Le raclage retire l'eau de surface avant les opérations mécaniques suivantes." },
      { name: "5. Essorage et séchage", text: "Après essorage, le tapis sèche à plat dans une salle ventilée. Pour la laine, il faut compter 12 à 24 h de séchage selon son humidité." },
      { name: "6. Finitions", text: "Le velours est brossé dans son sens, les franges sont lavées puis peignées, et le tapis est contrôlé avant emballage. Les réparations sont chiffrées à part." },
    ],
  },
  prices: {
    title: "Prix d'un lavage de tapis à Paris 7e",
    intro:
      "Le prix dépend du type de tapis, de sa surface, de son état et des options retenues. Voici les fourchettes au m² utilisées pour préparer votre devis.",
    examples: [
      { label: "Persan 200 × 300 cm", detail: "6 m² × 35–60 €/m²", price: "210–360 €" },
      { label: "Soie 150 × 200 cm", detail: "3 m² × 55–120 €/m²", price: "165–360 €" },
    ],
    note: "Persan/oriental : 35–60 €/m² ; berbère, Beni Ouarain : 25–45 €/m² ; kilim : 25–40 €/m² ; shaggy : 22–35 €/m² ; laine moderne, tufté : 22–35 €/m² ; soie, viscose : 55–120 €/m² ; synthétique : 15–25 €/m². Minimum de facturation : 60 € par tapis. Enlèvement et livraison sont généralement offerts à partir de 6 m² ; sinon, comptez 10 à 30 €. Détachage ciblé : 30–60 € ; réparations, franges, lisières et velours : chiffrage séparé.",
  },
  reviews: [REVIEWS[7], REVIEWS[8], REVIEWS[13]],
  areas: {
    title: "Enlèvement dans les quartiers du Paris 7e",
    intro: "Nous organisons les rendez-vous dans les secteurs résidentiels et les axes du 7e, en tenant compte des accès de votre immeuble.",
    list: [
      "Faubourg Saint-Germain et ses hôtels particuliers",
      "Invalides et boulevard de La Tour-Maubourg",
      "Gros-Caillou et rue Saint-Dominique",
      "Champ-de-Mars et avenue Bosquet",
      "Rue Cler et les rues adjacentes",
      "Immeubles sur cour, appartements en étage et résidences avec gardien",
    ],
    outro: "Pour un grand volume de tapis, signalez les contraintes d'accès dès le premier échange. Le devis et le rendez-vous sont ainsi mieux préparés.",
  },
  faq: [
    { q: "L'enlèvement est-il possible dans un hôtel particulier du Faubourg Saint-Germain ?", a: "Oui. Indiquez l'accès, l'étage, l'ascenseur, les escaliers de service et les règles du gardien. Nous préparons le rendez-vous avec ces contraintes." },
    { q: "Comment traiter un tapis persan ancien dans une pièce de réception ?", a: "Le diagnostic vérifie la fibre, les couleurs, les nœuds, les lisières et les franges. Un test de dégorgement précède le lavage à l'eau ; les réparations sont proposées à part." },
    { q: "Pouvez-vous intervenir près des Invalides ou du Champ-de-Mars ?", a: "Oui, ces secteurs font partie des zones desservies dans Paris 7e. Donnez la rue, les modalités d'accès et les possibilités de stationnement bref." },
    { q: "Quel délai prévoir pour un tapis en laine ?", a: "Le délai global est de 7 à 10 jours entre enlèvement et livraison. Le séchage de la laine prend 12 à 24 h en salle ventilée. Une formule express en 72 h existe chez certains ateliers, avec 15 à 25 % de supplément." },
    { q: "La viscose peut-elle être lavée comme un tapis en laine ?", a: "Non. La viscose peut jaunir et durcir quand on la frotte mouillée. Son traitement est choisi après diagnostic et contrôle de l'humidité." },
    { q: "Comment obtenir un devis pour plusieurs tapis hérités ?", a: "Envoyez les dimensions, les fibres connues et des photos par téléphone ou WhatsApp. Le devis est gratuit sous 24 h, puis l'enlèvement et la livraison sont organisés à domicile." },
  ],
  didYouKnow: "La laine peut feutrer lorsque ses écailles se resserrent sous l'effet combiné de l'humidité, de la chaleur et des frottements. C'est pourquoi le lavage, l'essorage et le séchage sont contrôlés séparément.",
  updated: "2026-10-21",
  neighbours: [
    { label: "Paris 6e", slug: "lavage-tapis-paris-6e", note: "Le 6e prolonge les secteurs centraux voisins du 7e, autour de Saint-Germain-des-Prés et du jardin du Luxembourg." },
    { label: "Paris 8e", slug: "lavage-tapis-paris-8e", note: "Le 8e est voisin au nord-ouest, vers les Champs-Élysées et l'avenue Montaigne." },
    { label: "Paris 15e", slug: "lavage-tapis-paris-15e", note: "Le 15e se situe de l'autre côté de la Seine, au sud-ouest du 7e, vers Grenelle et Javel." },
    { label: "Lavage de tapis à Paris", slug: "lavage-tapis-paris", note: "Le hub présente le service parisien et les autres pages consacrées aux arrondissements." },
  ],
  order: ["types", "areas", "stains", "reviews", "workshop", "prices", "faq"],
};

export default page;
