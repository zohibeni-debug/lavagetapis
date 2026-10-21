import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-rueil-malmaison",
  kind: "ville",
  hubSlug: "lavage-tapis-hauts-de-seine",
  hubLabel: "Lavage de tapis dans les Hauts-de-Seine",
  place: "Rueil-Malmaison",
  dept: "Hauts-de-Seine",
  postal: ["92500"],
  title: "Lavage de tapis Rueil-Malmaison (92500) · À domicile",
  description:
    "Lavage de tapis à Rueil-Malmaison (92500) : enlèvement à domicile, lavage adapté et livraison soignée. Demandez votre devis gratuit sous 24 h.",
  h1: "Lavage de tapis à Rueil-Malmaison (92500)",
  hero: {
    lead: [
      "À Rueil-Malmaison, les tapis des maisons avec jardin et sous-sol peuvent retenir terre, poils d'animaux ou humidité après un stockage prolongé.",
      "Nous organisons l'enlèvement et la livraison à domicile, de Buzenval à Rueil-sur-Seine, avec un devis gratuit sous 24 h.",
    ],
    reassurance: [
      "Devis gratuit sous 24 h",
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier",
      "Ateliers sélectionnés et assurés",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Rueil-Malmaison.",
  },
  how: {
    title: "Un enlèvement à domicile adapté aux accès rueillois",
    paragraphs: [
      "Décrivez le tapis, ses dimensions, sa matière supposée et son état, puis joignez des photos si possible. Pour une maison avec jardin, signalez le portail, les marches, le sous-sol et le chemin d'accès. Dans un immeuble, précisez l'étage, l'ascenseur, le digicode et les consignes éventuelles du gardien.",
      "Les repères tels que l'avenue Paul-Doumer, la rue du Château, Buzenval ou Rueil-sur-Seine permettent de préparer le trajet. Indiquez surtout où un arrêt bref est possible et si le tapis doit être sorti d'une cave. Ces détails facilitent un rendez-vous sans manipulation inutile.",
      "Comptez 7 à 10 jours entre l'enlèvement et la livraison. Une formule express en 72 h est disponible chez certains ateliers, avec un supplément de 15 à 25 %. La disponibilité est confirmée sur devis.",
    ],
    bullets: [
      "Rendez-vous organisé à votre domicile avec les informations d'accès utiles.",
      "Diagnostic préparé à partir des dimensions, de la fibre et des photos transmises.",
      "Lavage à l'eau en atelier, contrôle final, puis livraison à l'adresse convenue.",
    ],
  },
  types: {
    title: "Quels tapis faire laver à Rueil-Malmaison ?",
    intro:
      "Dans une maison où le tapis passe du salon à un sous-sol ou reçoit les allées et venues du jardin, le diagnostic commence par la fibre et la construction. Le velours désigne la surface de poils visible ; son état aide à choisir le lavage et le brossage.",
    items: [
      {
        name: "Berbère et Beni Ouarain",
        text: "Le velours épais d'un berbère retient facilement terre sèche, poussière et poils rapportés depuis le jardin. La laine contient de la lanoline, sa protection naturelle. Battage, aspiration et rinçage sont ajustés pour nettoyer la fibre sans la tasser ni provoquer de feutrage.",
      },
      {
        name: "Kilim et autres tissages plats",
        text: "Un kilim est un tissage plat, donc sans velours épais. Sa chaîne et sa trame sont les fils longitudinaux et transversaux qui tiennent le motif. Après un séjour plié ou roulé dans un sous-sol, l'état des lisières et des franges est vérifié avant le traitement.",
      },
      {
        name: "Persan ou tapis oriental noué main",
        text: "Pour un tapis transmis dans une famille, l'examen porte sur la densité en nœuds/m² et les couleurs. Le nœud persan senneh est asymétrique, alors que le nœud turc ghiordès est symétrique. Un test de dégorgement évalue le risque de migration des teintes avant le lavage.",
      },
      {
        name: "Laine moderne et tufté main",
        text: "Un tapis tufté main est constitué de mèches implantées dans un dossier de toile collé au latex. Ce support est sensible à l'eau : après une humidité de cave ou une tache près d'une baie donnant sur le jardin, son état est contrôlé avant toute intervention. Le séchage reste déterminant.",
      },
      {
        name: "Viscose et soie",
        text: "La viscose, aussi appelée soie artificielle, peut jaunir, durcir et s'abîmer si elle est frottée mouillée. Une soie naturelle demande elle aussi une manipulation mesurée. Pour ces tapis placés dans une pièce de réception, le devis tient compte de la fibre, de la teinte et du sens du velours.",
      },
    ],
  },
  stains: {
    title: "Terre, odeurs et mites : les problèmes à signaler",
    intro:
      "À Rueil-Malmaison, le tapis d'une entrée ou d'un salon donnant sur le jardin peut cumuler poussière, terre et traces de pattes. Un tapis sorti d'un sous-sol doit aussi être signalé, même si la tache ou l'odeur paraît ancienne.",
    items: [
      {
        name: "Terre, traces de pattes et taches du quotidien",
        text: "Indiquez l'origine de la salissure et la zone concernée : terre humide, boisson, graisse ou trace organique. Le pré-détachage est une préparation localisée avant le lavage. Selon le diagnostic, un traitement enzymatique peut être envisagé pour les résidus organiques, sans garantir l'effacement d'une auréole ancienne.",
      },
      {
        name: "Odeurs d'animaux ou de renfermé",
        text: "Les poils et accidents d'animaux nécessitent de signaler la présence d'urine plutôt que de masquer l'odeur. L'option de traitement des odeurs et de l'urine est proposée à 5–15 €/m². Pour un tapis gardé au sous-sol, l'humidité et les éventuelles moisissures sont examinées au diagnostic.",
      },
      {
        name: "Mites après un stockage prolongé",
        text: "Les mites sont les larves de la teigne qui mangent la kératine de la laine. Elles peuvent rester discrètes sur un tapis entreposé, notamment sous un meuble ou dans une cave. Un traitement anti-mites et anti-acariens peut être ajouté pour 0–10 €/m² après examen du tapis.",
      },
    ],
  },
  workshop: {
    title: "Les six opérations du lavage en atelier",
    intro:
      "Les ateliers partenaires interviennent sur devis. Après l'enlèvement à Rueil-Malmaison, chaque tapis suit une succession d'opérations définie selon sa matière, ses couleurs et ses zones fragiles.",
    steps: [
      {
        name: "1. Examiner le tapis",
        text: "L'atelier identifie la fibre, l'état du velours, les franges, les lisières et les zones fragiles. Un contrôle des couleurs recherche un risque de dégorgement avant de mouiller le tapis.",
      },
      {
        name: "2. Retirer la poussière profonde",
        text: "Un battage déloge les particules installées dans le tapis. Une aspiration effectuée sur le dos complète ensuite ce dépoussiérage avant le passage à l'eau.",
      },
      {
        name: "3. Traiter et shampouiner",
        text: "Les taches repérées reçoivent d'abord un pré-détachage. Le tapis est ensuite nettoyé avec un shampooing au pH neutre appliqué à la brosse rotative, selon les précautions liées à sa fibre.",
      },
      {
        name: "4. Rincer puis racler",
        text: "Un rinçage abondant évacue les produits et les salissures décollées. Le raclage retire l'excédent d'eau présent à la surface avant l'essorage.",
      },
      {
        name: "5. Essorer et sécher à plat",
        text: "Le tapis est essoré puis séché à plat dans une salle ventilée. Pour la laine, cette phase de séchage dure 12 à 24 h, selon l'humidité retenue par la fibre.",
      },
      {
        name: "6. Réaliser les finitions",
        text: "Le velours est brossé dans son sens et les franges sont lavées puis peignées. Un contrôle précède l'emballage. Les réparations de franges, lisières ou velours sont chiffrées à part.",
      },
    ],
  },
  prices: {
    title: "Prix du lavage de tapis à Rueil-Malmaison",
    intro:
      "Le devis dépend de la surface, de la fibre, de l'état du tapis et des options nécessaires après un stockage ou une tache. Les exemples ci-dessous illustrent les fourchettes au m² avant diagnostic.",
    examples: [
      { label: "berbère 200 × 300 cm", detail: "6 m² × 25–45 €", price: "150–270 €" },
      { label: "kilim 160 × 260 cm", detail: "4,16 m² × 25–40 €", price: "104–166,40 €" },
    ],
    note:
      "Le minimum de facturation est de 60 € par tapis. L'enlèvement et la livraison sont généralement offerts à partir de 6 m² ; sinon, comptez 10 à 30 €. Les réparations de franges, lisières ou velours sont chiffrées à part.",
  },
  reviews: [REVIEWS[21], REVIEWS[11], REVIEWS[20]],
  areas: {
    title: "Enlèvement de tapis dans les secteurs de Rueil-Malmaison",
    intro:
      "Les rendez-vous sont organisés à votre domicile à Rueil-Malmaison. Ces repères géographiques aident à communiquer les accès, l'étage, le portail, le digicode ou les possibilités d'arrêt lors de votre demande.",
    list: [
      "Château de Malmaison",
      "Rueil-sur-Seine",
      "Buzenval",
      "Avenue Paul-Doumer",
      "Rue du Château",
      "Quartier des Closeaux",
    ],
    outro:
      "Vous êtes près de l'un de ces repères ou dans une maison avec sous-sol ? Indiquez l'adresse exacte et les contraintes d'accès pour préparer l'enlèvement.",
  },
  faq: [
    {
      q: "Comment préparer l'enlèvement d'un tapis dans une maison à Rueil-Malmaison ?",
      a: "Signalez le portail, les marches, le sous-sol, les dimensions du tapis et le passage le plus simple. Des photos de la pièce et du tapis aident à organiser un rendez-vous adapté.",
    },
    {
      q: "Pouvez-vous organiser un rendez-vous à Buzenval ou dans le quartier des Closeaux ?",
      a: "Oui. Ces repères permettent de situer votre adresse à Rueil-Malmaison. Indiquez les modalités d'accès, le stationnement possible et si le tapis est au rez-de-chaussée, à l'étage ou au sous-sol.",
    },
    {
      q: "Comment signaler un accès près de l'avenue Paul-Doumer ou de la rue du Château ?",
      a: "Donnez l'adresse précise, le digicode si nécessaire, l'étage et la possibilité d'un arrêt bref. Ces informations sont prises en compte pour fixer le passage à domicile.",
    },
    {
      q: "Un tapis souillé par la terre ou les animaux du jardin peut-il être traité ?",
      a: "Oui, à condition de décrire la salissure et son ancienneté. Le diagnostic détermine le pré-détachage et, pour l'urine ou les odeurs, l'option à 5–15 €/m². Le résultat dépend de la fibre et de l'état du tapis.",
    },
    {
      q: "Que faire pour un tapis resté longtemps dans un sous-sol ?",
      a: "Signalez l'humidité, l'odeur, les taches et tout indice de mites. L'atelier examine le tapis avant lavage ; un traitement anti-mites et anti-acariens peut être proposé à 0–10 €/m².",
    },
    {
      q: "Quel délai prévoir entre l'enlèvement et la livraison ?",
      a: "Le délai habituel est de 7 à 10 jours. Une formule express en 72 h est proposée chez certains ateliers avec un supplément de 15 à 25 %. Le devis gratuit est envoyé sous 24 h.",
    },
  ],
  didYouKnow:
    "Un tapis en laine stocké longtemps dans un sous-sol peut devenir un abri discret pour les mites. Ces larves de la teigne se nourrissent de la kératine de la laine, surtout lorsque le tapis reste peu manipulé. Signalez tout stockage prolongé et les traces observées afin que l'atelier évalue le besoin d'un traitement anti-mites.",
  updated: "2026-10-21",
  neighbours: [
    { label: "Saint-Cloud", slug: "lavage-tapis-saint-cloud", note: "Commune limitrophe, à l'est." },
    { label: "Boulogne-Billancourt", slug: "lavage-tapis-boulogne-billancourt", note: "Autre commune desservie des Hauts-de-Seine." },
    { label: "Lavage de tapis dans les Hauts-de-Seine", slug: "lavage-tapis-hauts-de-seine", note: "Le hub du département." },
  ],
  order: ["types", "stains", "workshop", "reviews", "prices", "areas", "faq"],
};

export default page;
