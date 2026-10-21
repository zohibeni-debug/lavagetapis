import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-saint-cloud",
  kind: "ville",
  hubSlug: "lavage-tapis-hauts-de-seine",
  hubLabel: "Lavage de tapis dans les Hauts-de-Seine",
  place: "Saint-Cloud",
  dept: "Hauts-de-Seine",
  postal: ["92210"],
  title: "Lavage de tapis Saint-Cloud (92210) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Saint-Cloud (92210) : enlèvement et livraison à domicile, lavage en atelier. Devis gratuit sous 24 h, demandez votre devis.",
  h1: "Lavage de tapis à Saint-Cloud (92210)",
  hero: {
    lead: [
      "Dans les maisons de Montretout et des Coteaux, un tapis ancien de famille demande un enlèvement préparé : accès, escalier, pente et stationnement sont précisés avant le rendez-vous.",
      "De l'avenue de Longchamp à la rue Royale, le lavage à l'eau en atelier et la livraison à domicile sont organisés sur devis. Votre devis est gratuit sous 24 h.",
    ],
    reassurance: [
      "Devis gratuit sous 24 h",
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier",
      "Ateliers sélectionnés et assurés",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Saint-Cloud.",
  },
  how: {
    title: "Un enlèvement préparé pour les accès de Saint-Cloud",
    paragraphs: [
      "Indiquez le nombre de tapis, leurs dimensions, leur matière et, si possible, des photos. Dans une maison de Montretout ou des Coteaux, précisez l'entrée, les marches, l'étage, l'ascenseur éventuel et la protection des sols.",
      "Dans les rues en pente, signalez le stationnement bref, le digicode et le portail. L'avenue de Longchamp, la rue Royale, le quai du Point-du-Jour ou le Domaine national peuvent servir de repères géographiques, avec l'adresse complète.",
      "Après l'enlèvement, le tapis est lavé à l'eau en atelier puis livré à l'adresse convenue. Comptez 7 à 10 jours. Une formule express en 72 h est proposée chez certains ateliers, avec un supplément de 15 à 25 % confirmé sur devis.",
    ],
    bullets: [
      "Communiquez les dimensions, la fibre supposée, les photos et les éventuelles taches.",
      "Précisez les contraintes d'accès : pente, portail, escalier, ascenseur, digicode et stationnement bref.",
      "Appelez le 07 62 87 07 07 ou utilisez WhatsApp pour demander votre devis gratuit sous 24 h.",
    ],
  },
  types: {
    title: "Quels tapis faire laver à Saint-Cloud ?",
    intro:
      "Dans les maisons de Saint-Cloud, le diagnostic est utile pour un tapis transmis dans la famille. Il distingue chaîne et trame, les fils qui structurent l'ouvrage, du velours, le poil visible, et des franges, prolongement des fils de chaîne.",
    items: [
      {
        name: "Persan ancien de famille",
        text: "Un persan de Montretout peut présenter franges fragiles ou couleurs irrégulières. Sur un tapis noué main, la densité en nœuds/m² et le type de nœud renseignent sa construction : le senneh est asymétrique, le ghiordès symétrique. Un test de dégorgement vérifie le risque de migration des couleurs.",
      },
      {
        name: "Laine et tapis oriental",
        text: "Dans une pièce fréquentée des Coteaux, la lanoline, protection naturelle de la laine, et le sens du velours sont pris en compte. Un tapis oriental retient de la poussière dans sa trame : battage et aspiration au dos précèdent le nettoyage.",
      },
      {
        name: "Kilim et autres tissages plats",
        text: "Près de la rue Royale, un kilim sans velours épais dépend de son tissage plat et de ses lisières. Les lisières sont les bords longitudinaux ; leur surjet est vérifié. Le séchage à plat préserve tissage et franges.",
      },
      {
        name: "Tufté main et laine moderne",
        text: "Dans un salon de Saint-Cloud, un tufté main a un dossier de toile collé au latex, sensible à l'eau. Pour une laine moderne, le diagnostic recherche aussi le feutrage. Reprise des lisières, consolidation des franges ou retissage du velours sont chiffrés à part.",
      },
      {
        name: "Soie et viscose",
        text: "Dans une pièce de réception près de l'avenue de Longchamp, un tapis brillant peut être en soie ou en viscose. Cette soie artificielle jaunit, durcit et s'abîme si elle est frottée mouillée. Fibre, couleurs et sens du velours orientent le devis.",
      },
      {
        name: "Shaggy et synthétique",
        text: "Dans les maisons où le tapis sert au quotidien, les mèches d'un shaggy retiennent miettes et poils. Un tapis en polypropylène ou polyester demande aussi l'identification de la fibre et des teintures, sans promettre l'effacement d'une marque ancienne.",
      },
    ],
  },
  stains: {
    title: "Taches, odeurs et mites sur les tapis de Saint-Cloud",
    intro:
      "Un tapis de famille peut avoir connu repas, passages répétés ou stockage avant d'être installé à nouveau. À Saint-Cloud, décrivez ce qui lui est arrivé et où il se trouve dans la maison. Le diagnostic évalue la fibre, la salissure et l'état des bords.",
    items: [
      {
        name: "Taches dans les pièces de vie",
        text: "Sur un tapis de salon à Montretout, signalez boisson, graisse ou trace laissée par des enfants. Le pré-détachage est une action ciblée avant le lavage. Un traitement enzymatique peut être envisagé sur un résidu organique, selon la fibre. Une auréole ancienne demande un examen.",
      },
      {
        name: "Odeurs et humidité de stockage",
        text: "Un tapis rangé dans un sous-sol ou une pièce peu ventilée peut garder une odeur ou des auréoles. Signalez urine, renfermé ou humidité au devis. Le traitement odeurs et urine est disponible à 5–15 €/m² selon la fibre et le support, notamment sur un tufté main.",
      },
      {
        name: "Mites dans les tapis hérités",
        text: "Avant de replacer un tapis hérité dans les Coteaux, regardez velours, franges et dessous de meubles. Les mites sont les larves de la teigne qui mangent la kératine de la laine. L'option anti-mites et anti-acariens est proposée à 0–10 €/m², après examen des zones fragilisées.",
      },
    ],
  },
  workshop: {
    title: "Les étapes du lavage à l'eau en atelier",
    intro:
      "L'atelier partenaire adapte le lavage à la matière, aux couleurs et à l'état du tapis enlevé à Saint-Cloud. Les opérations sont séparées pour préserver fibres et finitions.",
    steps: [
      {
        name: "1. Examen avant traitement",
        text: "Fibre, tissage, sens du velours, couleurs, franges et lisières sont observés. Un essai de dégorgement détecte une couleur susceptible de migrer dans l'eau.",
      },
      {
        name: "2. Extraction de la poussière",
        text: "Le battage décolle les poussières accumulées dans la trame. Une aspiration sur le dos complète cette phase avant l'eau et le shampooing.",
      },
      {
        name: "3. Lavage et action ciblée",
        text: "Un shampooing au pH neutre est appliqué avec une brosse rotative. Les zones signalées reçoivent le pré-détachage adapté, sans frotter indistinctement une viscose.",
      },
      {
        name: "4. Évacuation des résidus",
        text: "Le rinçage à grande eau retire shampooing et salissures. Le raclage enlève l'eau de surface avant l'essorage.",
      },
      {
        name: "5. Essorage et séchage contrôlé",
        text: "Après essorage, le tapis reste à plat en salle ventilée. Pour la laine, le séchage dure 12 à 24 h et limite l'humidité retenue dans l'épaisseur.",
      },
      {
        name: "6. Finitions avant retour",
        text: "Le velours est brossé dans son sens, puis les franges sont lavées et peignées. Contrôle et emballage précèdent la livraison. Les réparations sont chiffrées à part.",
      },
    ],
  },
  prices: {
    title: "Prix d'un lavage de tapis à Saint-Cloud",
    intro:
      "Le devis tient compte de la fibre, de la surface, de l'état du tapis et des options souhaitées. Pour un tapis ancien de famille comme pour un modèle plus récent, les dimensions communiquées avant l'enlèvement permettent de préparer une première estimation adaptée à votre demande à Saint-Cloud.",
    examples: [
      {
        label: "persan 180 × 270 cm",
        detail: "4,86 m² × 35–60 €",
        price: "170,10–291,60 €",
      },
      {
        label: "tapis en laine 240 × 340 cm",
        detail: "8,16 m² × 22–35 €",
        price: "179,52–285,60 €",
      },
    ],
    note:
      "Le minimum de facturation est de 60 € par tapis. L'enlèvement et la livraison sont généralement offerts à partir de 6 m² ; sinon, comptez 10 à 30 €. Les réparations sont chiffrées à part.",
  },
  faq: [
    {
      q: "Comment préparer l'enlèvement d'un tapis dans une maison de Montretout ?",
      a: "Indiquez l'entrée à utiliser, les escaliers, l'étage, l'ascenseur s'il y en a un, le portail et les possibilités de stationnement bref. Ces précisions permettent d'organiser le rendez-vous selon l'accès de votre maison.",
    },
    {
      q: "Les rues en pente des Coteaux changent-elles l'organisation du rendez-vous ?",
      a: "Précisez simplement les contraintes d'accès et de stationnement lorsque vous demandez le devis. L'enlèvement est préparé à partir de ces informations, puis la livraison est fixée à l'adresse convenue après le lavage en atelier.",
    },
    {
      q: "Pouvez-vous organiser un passage près du Domaine national ou de la rue Royale ?",
      a: "Oui, ces repères peuvent aider à localiser votre adresse à Saint-Cloud. Donnez l'adresse complète, le digicode ou les consignes d'accès utiles, ainsi que les possibilités de stationnement bref.",
    },
    {
      q: "Comment est traité un tapis persan ancien transmis dans ma famille ?",
      a: "Le diagnostic examine la fibre, les couleurs, les nœuds, le velours, les lisières et les franges. Un test de dégorgement précède le lavage à l'eau. Une reprise de lisière, de frange ou de velours est proposée séparément et chiffrée à part.",
    },
    {
      q: "Quel délai prévoir entre l'enlèvement et la livraison à Saint-Cloud ?",
      a: "Le délai habituel est de 7 à 10 jours. Certains ateliers proposent une formule express en 72 h, avec un supplément de 15 à 25 %. La disponibilité est confirmée sur devis.",
    },
    {
      q: "Comment demander un devis pour plusieurs tapis ?",
      a: "Envoyez les dimensions, les matières connues, des photos et les taches éventuelles par téléphone au 07 62 87 07 07 ou via WhatsApp. Le devis est gratuit sous 24 h ; les ateliers partenaires réalisent les prestations sur devis.",
    },
  ],
  didYouKnow:
    "Le feutrage de la laine apparaît lorsque les écailles des fibres s'accrochent les unes aux autres sous l'effet de l'humidité, de la chaleur et des frottements. Le tapis peut alors devenir plus dense et perdre sa souplesse. Un lavage, un essorage et un séchage maîtrisés limitent ce risque.",
  updated: "2026-10-21",
  reviews: [REVIEWS[8], REVIEWS[14], REVIEWS[23]],
  areas: {
    title: "Enlèvement dans les secteurs de Saint-Cloud",
    intro:
      "Nous organisons les rendez-vous à votre domicile à partir de votre adresse et des informations d'accès. Les repères suivants permettent de situer votre demande dans Saint-Cloud et de préparer l'enlèvement avec vous.",
    list: [
      "Domaine national",
      "Montretout",
      "Les Coteaux",
      "Avenue de Longchamp",
      "Rue Royale",
      "Quai du Point-du-Jour",
    ],
    outro:
      "Depuis ces repères ou une autre adresse à Saint-Cloud, signalez les escaliers, la pente, le digicode, l'ascenseur et le stationnement lors de votre prise de contact.",
  },
  neighbours: [
    {
      label: "Rueil-Malmaison",
      slug: "lavage-tapis-rueil-malmaison",
      note: "Commune limitrophe, à l'ouest.",
    },
    {
      label: "Boulogne-Billancourt",
      slug: "lavage-tapis-boulogne-billancourt",
      note: "Commune voisine, au nord-est.",
    },
    {
      label: "Issy-les-Moulineaux",
      slug: "lavage-tapis-issy-les-moulineaux",
      note: "Commune voisine, à l'est.",
    },
    {
      label: "Lavage de tapis dans les Hauts-de-Seine",
      slug: "lavage-tapis-hauts-de-seine",
      note: "Le hub du département.",
    },
  ],
  order: ["types", "stains", "workshop", "reviews", "prices", "faq", "areas"],
};

export default page;
