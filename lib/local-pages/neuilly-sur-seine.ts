import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-neuilly-sur-seine",
  kind: "ville",
  hubSlug: "lavage-tapis-hauts-de-seine",
  hubLabel: "Lavage de tapis dans les Hauts-de-Seine",
  place: "Neuilly-sur-Seine",
  dept: "Hauts-de-Seine",
  postal: ["92200"],
  title: "Lavage de tapis Neuilly-sur-Seine (92200) · À domicile",
  description:
    "Lavage de tapis à Neuilly-sur-Seine (92200) : enlèvement à domicile, soin adapté aux tapis précieux et livraison. Demandez un devis gratuit sous 24 h.",
  h1: "Lavage de tapis à Neuilly-sur-Seine (92200)",
  hero: {
    lead: [
      "Dans les grands appartements et les hôtels particuliers de Neuilly-sur-Seine, un tapis persan, une soie ou une pièce de famille demande un examen attentif avant lavage.",
      "Nous organisons l'enlèvement à domicile, puis la livraison après traitement en atelier. Recevez un devis gratuit sous 24 h pour préciser fibre, état et réparations.",
    ],
    reassurance: [
      "Devis gratuit sous 24 h",
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier",
      "Ateliers sélectionnés et assurés",
    ],
    whatsapp:
      "Bonjour, je souhaite un devis pour le lavage de mon tapis à Neuilly-sur-Seine.",
  },
  how: {
    title: "Un enlèvement organisé à votre adresse à Neuilly-sur-Seine",
    paragraphs: [
      "Décrivez votre tapis, ses dimensions, sa matière supposée et son état, puis joignez des photos si vous le pouvez. Pour une pièce placée dans un grand appartement ou un hôtel particulier, signalez le nombre de tapis à enlever. Le devis suit cet échange.",
      "Indiquez l'étage, l'ascenseur, les accès à l'immeuble, les consignes du gardien et la possibilité de stationner brièvement. Autour de l'avenue Charles-de-Gaulle, de la rue de Longchamp ou du boulevard du Château, ces informations préparent le passage sans avoir à déplacer le tapis vous-même.",
      "Après l'enlèvement, le délai habituel entre le passage et la livraison est de 7 à 10 jours. Une formule express en 72 h est disponible chez certains ateliers, avec un supplément de 15 à 25 %. Cette formule est confirmée sur devis.",
    ],
    bullets: [
      "Envoyez les dimensions, les photos et les taches connues par téléphone ou WhatsApp.",
      "Précisez l'accès, l'étage, l'ascenseur et les indications utiles pour le rendez-vous.",
      "Retrouvez votre tapis après contrôle, finitions et emballage, à l'adresse convenue.",
    ],
  },
  types: {
    title: "Quels tapis faire laver à Neuilly-sur-Seine ?",
    intro:
      "Le diagnostic commence par la matière et la construction du tapis. La chaîne désigne les fils longitudinaux et la trame les fils qui les croisent ; leur état, comme celui du velours, le poil visible en surface, aide à choisir le traitement adapté.",
    items: [
      {
        name: "Tapis persan noué main",
        text: "Un tapis persan de salon ou transmis dans une famille peut présenter des lisières usées, des franges fragiles ou des couleurs anciennes. Les lisières sont les bords latéraux, parfois renforcés par un surjet, une couture de bord. L'atelier contrôle leur tenue et le risque de migration des couleurs. Une reprise, une consolidation ou un retissage du velours sont chiffrés à part.",
      },
      {
        name: "Soie naturelle",
        text: "Une soie naturelle se reconnaît à sa finesse et à son éclat. Sur un tapis de réception, l'examen porte sur le sens du velours, la stabilité des teintes et les bordures. Cette fibre ne se traite pas comme une laine épaisse : toute restauration est chiffrée à part.",
      },
      {
        name: "Laine et tapis contemporain",
        text: "La laine contient de la lanoline, une protection naturelle de la fibre. Dans une grande pièce de vie, son velours peut retenir la poussière sous un meuble. Le contrôle initial repère zones tassées et auréoles avant le nettoyage.",
      },
      {
        name: "Viscose et tapis à effet soyeux",
        text: "La viscose, parfois appelée soie artificielle, peut jaunir, durcir et s'abîmer lorsqu'elle est frottée mouillée. Un tapis brillant demande une intervention mesurée et un contrôle de l'humidité, pas un brossage énergique.",
      },
      {
        name: "Kilim et tissage plat",
        text: "Le kilim est un tissage plat, sans épaisseur de velours. Sa chaîne, sa trame et ses franges demandent de préserver la tension du tissage. Rinçage et séchage à plat limitent les déformations lorsque le traitement est validé au devis.",
      },
    ],
  },
  stains: {
    title: "Taches, odeurs et mites dans les intérieurs neuilléens",
    intro:
      "Dans un salon de réception, une salle à manger ou une chambre, la nature de la tache et le temps écoulé orientent le diagnostic. Signalez aussi si le tapis a été conservé, peu déplacé ou exposé à un animal : ces éléments comptent autant que son emplacement à Neuilly-sur-Seine.",
    items: [
      {
        name: "Boissons, repas et traces localisées",
        text: "Une tache de vin, de café ou de graisse sur un persan demande d'identifier la fibre et les couleurs. Le pré-détachage est une action localisée avant le lavage. Selon le cas, un traitement enzymatique, destiné aux résidus organiques, peut être envisagé après contrôle. Il ne garantit pas l'effacement d'une tache ancienne.",
      },
      {
        name: "Odeurs et urine",
        text: "Un tapis dans une pièce peu ventilée, une chambre ou un lieu de passage d'un animal peut retenir une odeur. Indiquez précisément la zone et la cause présumée, sans ajouter de parfum. Le traitement odeurs et urine est une option à 5–15 €/m², déterminée en fonction de la fibre, du support et de l'ancienneté de la souillure.",
      },
      {
        name: "Mites, poussière et tapis conservés",
        text: "Les tapis hérités, roulés ou stockés sont examinés avant lavage. Les mites sont les larves de la teigne qui mangent la kératine de la laine ; elles atteignent les zones peu exposées ou sous le mobilier. L'option anti-mites et anti-acariens est proposée à 0–10 €/m² après diagnostic.",
      },
    ],
  },
  workshop: {
    title: "Le lavage à l'eau en atelier, étape par étape",
    intro:
      "Les ateliers partenaires interviennent sur devis. Chaque tapis est observé avant le traitement pour ajuster les gestes à sa fibre, ses couleurs, son tissage et ses bordures.",
    steps: [
      {
        name: "1. Examiner le tapis",
        text: "L'atelier identifie la fibre, le tissage, les teintes, les franges et les fragilités. Un test de dégorgement permet de repérer une couleur susceptible de migrer pendant le lavage.",
      },
      {
        name: "2. Retirer les poussières",
        text: "Le tapis est battu afin de décoller les particules accumulées, puis aspiré au dos. Cette préparation atteint les poussières logées dans la structure avant le passage à l'eau.",
      },
      {
        name: "3. Laver et pré-détacher",
        text: "Le nettoyage associe un shampooing au pH neutre à une brosse rotative. Les taches signalées reçoivent un pré-détachage adapté à leur nature et à la fibre observée.",
      },
      {
        name: "4. Rincer puis racler",
        text: "Un rinçage à grande eau élimine les résidus de lavage. Le raclage évacue ensuite l'eau présente à la surface du tapis avant l'essorage.",
      },
      {
        name: "5. Essorer et sécher à plat",
        text: "Après essorage, le tapis repose à plat dans une salle ventilée. Pour la laine, le séchage demande 12 à 24 h selon son humidité, afin de limiter les risques de déformation.",
      },
      {
        name: "6. Effectuer les finitions",
        text: "Le velours est brossé dans son sens, tandis que les franges sont lavées et peignées. Il est contrôlé et emballé. Les réparations de franges, de lisières ou de velours sont chiffrées à part.",
      },
    ],
  },
  prices: {
    title: "Prix du lavage de tapis à Neuilly-sur-Seine",
    intro:
      "Le prix dépend de la fibre, de la surface, de l'état constaté et des options nécessaires. Pour une soie, un persan ou un tapis demandant une réparation, les photos et le diagnostic aident à préparer un devis cohérent.",
    examples: [
      {
        label: "soie 170 × 240 cm",
        detail: "4,08 m² × 55–120 €",
        price: "224,40–489,60 €",
      },
      {
        label: "persan 300 × 400 cm",
        detail: "12 m² × 35–60 €",
        price: "420–720 €",
      },
    ],
    note:
      "Minimum de facturation : 60 € par tapis. Enlèvement et livraison généralement offerts à partir de 6 m², sinon 10 à 30 €. Détachage ciblé : 30–60 € ; traitement odeurs et urine : 5–15 €/m² ; anti-mites et anti-acariens : 0–10 €/m². La formule express est proposée chez certains ateliers avec un supplément de 15 à 25 %. Les réparations de franges, lisières ou velours sont chiffrées à part.",
  },
  areas: {
    title: "Enlèvement à Neuilly-sur-Seine et repères d'accès",
    intro:
      "Nous organisons les rendez-vous à domicile dans Neuilly-sur-Seine. Lors de votre demande, ces repères et les indications d'accès permettent de préparer l'enlèvement de votre tapis.",
    list: [
      "Les Sablons",
      "Saint-James",
      "L'île de la Jatte",
      "Le boulevard du Château",
      "L'avenue Charles-de-Gaulle",
      "La rue de Longchamp",
      "Les adresses à proximité du bois de Boulogne",
    ],
    outro:
      "Pour un appartement en étage, un hôtel particulier ou une adresse avec gardien, indiquez les accès, l'ascenseur et les possibilités de stationnement bref dès le premier échange.",
  },
  faq: [
    {
      q: "Comment organiser l'enlèvement d'un tapis à Saint-James ?",
      a: "Envoyez les dimensions, des photos et les renseignements d'accès. Pour un grand appartement ou un hôtel particulier, indiquez l'étage, l'ascenseur, le gardien et le stationnement possible afin que le rendez-vous soit préparé.",
    },
    {
      q: "Pouvez-vous prévoir un passage près des Sablons ou de l'avenue Charles-de-Gaulle ?",
      a: "Oui, ces repères aident à situer votre adresse à Neuilly-sur-Seine. Donnez la rue, les consignes d'entrée et les possibilités de stationner brièvement lors de votre demande de devis.",
    },
    {
      q: "Un enlèvement est-il possible vers l'île de la Jatte ?",
      a: "Oui. Précisez simplement les conditions d'accès à votre domicile, l'étage et les indications utiles pour le véhicule. Le rendez-vous est organisé avec ces informations.",
    },
    {
      q: "Comment est traité un tapis persan avec des lisières abîmées ?",
      a: "Le diagnostic examine le tissage, les couleurs, les franges et les lisières avant le lavage. Si une reprise de lisières, une consolidation des franges ou un retissage du velours est nécessaire, la réparation est chiffrée à part.",
    },
    {
      q: "Quel délai prévoir pour une soie ou un tapis en laine ?",
      a: "Comptez 7 à 10 jours entre l'enlèvement et la livraison. Pour la laine, le séchage à plat en salle ventilée prend 12 à 24 h. Une formule express en 72 h est disponible chez certains ateliers avec un supplément de 15 à 25 %.",
    },
    {
      q: "Comment demander un devis pour plusieurs tapis à Neuilly-sur-Seine ?",
      a: "Transmettez leurs dimensions, les matières connues, des photos, les taches éventuelles et les contraintes d'accès par téléphone au 07 62 87 07 07 ou par WhatsApp. Le devis est gratuit sous 24 h.",
    },
  ],
  didYouKnow:
    "La soie naturelle est sensible à la lumière et aux frottements. Sur un tapis, ces facteurs peuvent altérer son aspect : il est donc utile de les signaler lors du diagnostic, en particulier pour une pièce ancienne ou très fine.",
  updated: "2026-10-21",
  reviews: [REVIEWS[8], REVIEWS[15], REVIEWS[25]],
  neighbours: [
    {
      label: "Levallois-Perret",
      slug: "lavage-tapis-levallois-perret",
      note: "Commune limitrophe, au nord-est.",
    },
    {
      label: "Boulogne-Billancourt",
      slug: "lavage-tapis-boulogne-billancourt",
      note: "Commune voisine, sur l'autre rive de la Seine.",
    },
    {
      label: "Paris 16e",
      slug: "lavage-tapis-paris-16e",
      note: "Arrondissement parisien limitrophe.",
    },
    {
      label: "Lavage de tapis dans les Hauts-de-Seine",
      slug: "lavage-tapis-hauts-de-seine",
      note: "Le hub du département.",
    },
  ],
  order: ["types", "stains", "workshop", "prices", "areas", "faq", "reviews"],
};

export default page;
