import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-boulogne-billancourt",
  kind: "ville",
  hubSlug: "lavage-tapis-hauts-de-seine",
  hubLabel: "Lavage de tapis dans les Hauts-de-Seine",
  place: "Boulogne-Billancourt",
  dept: "Hauts-de-Seine",
  postal: ["92100"],
  title: "Lavage de tapis Boulogne-Billancourt (92100) · À domicile",
  description: "Lavage de tapis à Boulogne-Billancourt (92100) : devis gratuit sous 24 h, enlèvement et livraison à domicile. Gagnez du temps, demandez votre devis.",
  h1: "Lavage de tapis à Boulogne-Billancourt (92100)",
  hero: {
    lead: [
      "À Boulogne-Billancourt, vos tapis passent facilement de l’appartement au lavage en atelier : nous organisons l’enlèvement à domicile, puis la livraison après séchage.",
      "Que votre tapis soit dans un salon familial de Silly-Gallieni, une résidence récente du Trapèze ou une maison près du Point-du-Jour, demandez un devis gratuit sous 24 h.",
    ],
    reassurance: [
      "Devis gratuit sous 24 h",
      "Enlèvement et livraison à domicile",
      "Ateliers sélectionnés et assurés",
      "Lavage à l’eau en atelier",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Boulogne-Billancourt.",
  },
  how: {
    title: "Un enlèvement pensé pour les adresses de Boulogne",
    paragraphs: [
      "Vous indiquez le nombre de tapis, leurs dimensions et leur matière. Nous convenons ensuite d’un passage à votre domicile à Boulogne. Dans un immeuble ancien, nous vérifions l’accès par l’escalier ou l’ascenseur ; dans une résidence récente du Trapèze ou des Rives de Seine, nous prenons en compte le hall, le sas et les règles de livraison. Une maison appelle parfois un accès différent.",
      "Le stationnement peut être plus simple ou plus contraint selon la rue de Silly, l’avenue Jean-Baptiste-Clément, le boulevard Jean-Jaurès ou la route de la Reine. Donnez-nous les indications utiles. Les adresses proches des bords de Seine et de l’île Seguin servent aussi de repères pour organiser le trajet, sans changer la prestation.",
      "Après l’enlèvement, comptez 7 à 10 jours entre l’enlèvement et la livraison. Une formule express en 72 h existe chez certains ateliers, avec un supplément de 15 à 25 %. La disponibilité et le prix final sont confirmés sur devis.",
    ],
    bullets: [
      "Décrivez votre tapis et ses contraintes d’accès par téléphone ou WhatsApp.",
      "Téléphone : 07 62 87 07 07.",
      "WhatsApp : demandez votre devis avec une photo et les dimensions.",
      "Enlèvement, lavage à l’eau en atelier, puis livraison à domicile.",
    ],
  },
  types: {
    title: "Quel tapis faire laver à Boulogne ?",
    intro: "Le diagnostic tient compte de la fibre, du tissage, du support et de l’état des couleurs. Voici les cas rencontrés dans les logements de Boulogne.",
    items: [
      { name: "Laine moderne et tufté", text: "Une laine moderne garde son toucher et sa lanoline, sa protection grasse naturelle, avec un lavage maîtrisé. Un tufté main est constitué de mèches piquées puis collées au latex : nous contrôlons le support avant l’eau et le séchage." },
      { name: "Berbère et Beni Ouarain", text: "Les tapis berbères, notamment Beni Ouarain ou Azilal, ont un velours, c’est-à-dire la surface visible des fibres, qui retient poussière et traces. Une aspiration et un rinçage adaptés évitent de tasser la laine." },
      { name: "Kilim", text: "Le kilim est un tissage plat, sans velours épais. Sa chaîne et sa trame, les fils longitudinaux et transversaux, demandent un contrôle des franges, qui sont le prolongement des fils de chaîne, et des éventuels dégorgements." },
      { name: "Shaggy", text: "Les longues mèches d’un shaggy piègent les miettes et les poils d’animaux. Le battage et l’aspiration au dos sont importants avant le shampooing, puis le séchage doit rester régulier." },
      { name: "Synthétique", text: "Un tapis synthétique convient souvent à une entrée ou à un salon très sollicité par les enfants et les animaux. Le traitement est choisi selon la fibre et la solidité des teintes, sans promettre la disparition de chaque tache." },
      { name: "Viscose", text: "La viscose peut jaunir et durcir quand on la frotte mouillée. Nous privilégions donc un test de dégorgement et une intervention douce, avec une attention particulière au sens du velours." },
      { name: "Tapis persan de famille", text: "Un persan de famille, comme un Tabriz ou un Heriz, peut associer laine, soie, franges et nœuds. Le nœud persan senneh est asymétrique, tandis que le nœud turc ghiordès est symétrique : cette construction guide le diagnostic et le lavage." },
    ],
  },
  stains: {
    title: "Taches, odeurs et mites dans les foyers boulonnais",
    intro: "Un tapis d’entrée reçoit les salissures de la rue ; un tapis de salon subit les repas, les jeux et les passages d’animaux. Signalez l’origine de la tache et l’emplacement du tapis.",
    items: [
      { name: "Taches du quotidien", text: "Nous repérons les auréoles, boissons, terre, graisse ou traces laissées par les enfants. Le pré-détachage est une préparation localisée avant le shampooing. Selon la tache, un traitement enzymatique peut aider à dégrader les résidus organiques ; son usage est évalué sur la fibre." },
      { name: "Odeurs et urine", text: "Pour un tapis exposé à un animal de compagnie, indiquez si l’odeur vient de l’urine ou d’une autre souillure. L’option traitement odeurs et urine coûte 5 à 15 €/m². Le résultat dépend de la fibre, du support et de l’ancienneté." },
      { name: "Tapis stocké en sous-sol ou en cave", text: "Un tapis resté en sous-sol ou en cave peut garder une odeur de renfermé et attirer des mites. Les mites sont les larves de la teigne qui mangent la kératine de la laine. L’option anti-mites et anti-acariens coûte 0 à 10 €/m²." },
    ],
  },
  workshop: {
    title: "Les six étapes du lavage en atelier",
    intro: "Les ateliers partenaires travaillent sur devis. Votre tapis est suivi de l’enlèvement au contrôle final, avec une méthode adaptée à sa matière.",
    steps: [
      { name: "1. Diagnostic", text: "La fibre, le tissage, les franges, les couleurs et les zones fragiles sont examinés." },
      { name: "2. Dépoussiérage", text: "Le tapis reçoit un battage, puis une aspiration au dos pour retirer les poussières logées dans la trame." },
      { name: "3. Nettoyage préparé", text: "Un shampooing à la brosse rotative, au pH neutre, est associé au pré-détachage des zones ciblées." },
      { name: "4. Rinçage", text: "Le rinçage à grande eau évacue les résidus ; le raclage retire l’eau en surface avant la suite." },
      { name: "5. Essorage et séchage", text: "Après essorage, le tapis sèche à plat dans une salle ventilée. La laine demande 12 à 24 h de séchage." },
      { name: "6. Finitions et contrôle", text: "Le velours est brossé, les franges sont lavées et peignées, puis le tapis est contrôlé et emballé." },
    ],
  },
  prices: {
    title: "Prix du lavage de tapis à Boulogne-Billancourt",
    intro: "Le prix dépend de la matière, de la surface et des options. Voici les fourchettes au m² avant devis personnalisé.",
    examples: [
      { label: "Berbère de 250 × 350 cm", detail: "8,75 m² × 25 à 45 €/m² ; enlèvement et livraison généralement offerts à partir de 6 m².", price: "219 à 394 €" },
      { label: "Synthétique de 160 × 230 cm", detail: "3,68 m² × 15 à 25 €/m² = 55,20 à 92 € ; le minimum de facturation s’applique.", price: "60 à 92 €" },
    ],
    note: "Persan/oriental : 35–60 €/m² ; berbère, Beni Ouarain : 25–45 €/m² ; kilim : 25–40 €/m² ; shaggy : 22–35 €/m² ; laine moderne, tufté : 22–35 €/m² ; soie, viscose : 55–120 €/m² ; synthétique : 15–25 €/m². Le minimum de facturation est de 60 € par tapis. Enlèvement et livraison sont généralement offerts à partir de 6 m², sinon 10 à 30 €. Détachage ciblé : 30–60 € ; express : +15 à 25 %. Les réparations de franges, lisières ou velours sont chiffrées à part.",
  },
  reviews: [REVIEWS[17], REVIEWS[26], REVIEWS[4]],
  areas: {
    title: "Enlèvement dans Boulogne et ses repères",
    intro: "Nous organisons les passages selon votre adresse et les conditions d’accès de l’immeuble ou de la maison.",
    list: [
      "Silly-Gallieni et la rue de Silly",
      "Point-du-Jour et ses immeubles résidentiels",
      "Le Trapèze et les Rives de Seine",
      "Les bords de Seine et le repère de l’île Seguin",
      "L’avenue Jean-Baptiste-Clément",
      "Le boulevard Jean-Jaurès",
      "La route de la Reine",
    ],
    outro: "Vous habitez Boulogne, utilisez un de ces repères ou êtes près d’un axe voisin ? Indiquez simplement l’adresse et les modalités d’accès lors de la demande.",
  },
  faq: [
    { q: "Comment organiser un enlèvement dans un immeuble du Trapèze ?", a: "Précisez l’accès du hall, l’ascenseur, le sas et les éventuelles consignes de la résidence. Nous convenons d’un créneau adapté avec vous." },
    { q: "Intervenez-vous près des bords de Seine et de l’île Seguin ?", a: "Oui, ces repères nous aident à localiser votre adresse à Boulogne-Billancourt. Le passage reste organisé à domicile, selon l’accès et le stationnement possibles." },
    { q: "Quel délai prévoir pour un tapis en laine dans un appartement boulonnais ?", a: "Le délai habituel est de 7 à 10 jours entre l’enlèvement et la livraison. Le séchage de la laine prend 12 à 24 h ; une formule express en 72 h est proposée chez certains ateliers avec +15 à 25 %." },
    { q: "Un tapis avec une odeur d’animal peut-il être traité ?", a: "Signalez l’odeur et sa cause. Le traitement odeurs et urine est proposé en option à 5–15 €/m², selon le diagnostic et la fibre." },
    { q: "Le lavage convient-il à un tapis stocké en cave ?", a: "Oui, le diagnostic recherche poussière, odeur, humidité et mites avant le lavage. L’option anti-mites et anti-acariens coûte 0–10 €/m²." },
    { q: "Comment obtenir un devis pour plusieurs tapis ?", a: "Envoyez les dimensions, les matières, les photos et les taches de chaque tapis par téléphone au 07 62 87 07 07 ou via WhatsApp. Le devis est gratuit sous 24 h." },
  ],
  didYouKnow: "Un tapis tufté main est maintenu par un envers collé au latex : une humidité mal évacuée peut fragiliser ce support. Le diagnostic et le séchage à plat sont donc essentiels.",
  updated: "2026-10-21",
  neighbours: [
    { label: "Issy-les-Moulineaux", slug: "lavage-tapis-issy-les-moulineaux", note: "La commune voisine au sud, dans le même secteur des Hauts-de-Seine." },
    { label: "Saint-Cloud", slug: "lavage-tapis-saint-cloud", note: "Une commune voisine à l’ouest, accessible depuis Boulogne par les bords de Seine." },
    { label: "Neuilly-sur-Seine", slug: "lavage-tapis-neuilly-sur-seine", note: "Une autre page locale des Hauts-de-Seine, au nord de Boulogne." },
    { label: "Lavage de tapis dans les Hauts-de-Seine", slug: "lavage-tapis-hauts-de-seine", note: "Le hub départemental qui relie les pages locales du 92." },
  ],
  order: ["types", "stains", "workshop", "prices", "reviews", "areas", "faq"],
};

export default page;
