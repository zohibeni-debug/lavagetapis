import type { LocalPage } from "./types";
import { REVIEWS } from "./reviews";

const page: LocalPage = {
  slug: "lavage-tapis-saint-mande",
  kind: "ville",
  hubSlug: "lavage-tapis-val-de-marne",
  hubLabel: "Lavage de tapis dans le Val-de-Marne",
  place: "Saint-Mandé",
  dept: "Val-de-Marne",
  postal: ["94160"],
  title: "Lavage de tapis Saint-Mandé (94160) · Enlèvement à domicile",
  description:
    "Lavage de tapis à Saint-Mandé (94160) : enlèvement et livraison à domicile, devis gratuit sous 24 h. Demandez votre devis personnalisé dès aujourd'hui.",
  h1: "Lavage de tapis à Saint-Mandé (94160)",
  hero: {
    lead: [
      "À Saint-Mandé, les tapis d'Orient et les formats de salon accompagnent les appartements résidentiels. Nous organisons leur enlèvement à domicile, de l'avenue du Général-de-Gaulle à la rue de la République.",
      "Votre tapis est confié à un atelier partenaire pour un lavage à l'eau adapté à sa fibre, puis livré à l'adresse convenue. Demandez un devis gratuit sous 24 h.",
    ],
    reassurance: [
      "Devis gratuit sous 24 h",
      "Enlèvement et livraison à domicile",
      "Lavage à l'eau en atelier",
      "Ateliers sélectionnés et assurés",
    ],
    whatsapp: "Bonjour, je souhaite un devis pour le lavage de mon tapis à Saint-Mandé.",
  },
  how: {
    title: "Un enlèvement préparé pour votre adresse à Saint-Mandé",
    paragraphs: [
      "Indiquez les dimensions, la matière connue, le nombre de tapis et leur état. Des photos permettent aussi de repérer une surface marquée, des bords fragiles ou une tache. Lavagetapis.fr vous met ensuite en relation avec un atelier partenaire et organise le rendez-vous à domicile.",
      "Dans les appartements bourgeois et les immeubles résidentiels, précisez l'étage, l'ascenseur, le digicode et les consignes éventuelles du gardien. Donnez également les indications de stationnement et un repère, par exemple la place Charles-Digeon ou le lac de Saint-Mandé, pour préparer le passage.",
      "Comptez 7 à 10 jours entre l'enlèvement et la livraison. Une formule express en 72 h est proposée chez certains ateliers, avec un supplément de 15 à 25 %. La disponibilité de cette formule est confirmée sur devis.",
    ],
    bullets: [
      "Envoyez dimensions, photos et informations d'accès par téléphone ou WhatsApp.",
      "Le devis est établi selon la fibre, la surface, l'état et les options demandées.",
      "Après contrôle et emballage, la livraison est organisée à votre domicile.",
    ],
  },
  types: {
    title: "Quels tapis faire laver à Saint-Mandé ?",
    intro:
      "Dans les salons des appartements saint-mandéens, le diagnostic commence par la structure du tapis. La chaîne et la trame sont ses fils longitudinaux et transversaux ; le velours désigne la surface de poils. Cette lecture aide à définir le traitement avant le lavage.",
    items: [
      {
        name: "Persan et tapis d'Orient noués main",
        text: "Les formats de salon peuvent être noués main et comporter des franges, prolongement des fils de chaîne. Un tapis persan est observé pour sa densité en nœuds/m² et ses lisières, les bords tissés du tapis. Le nœud persan senneh est asymétrique ; le nœud turc ghiordès est symétrique. Un test de dégorgement vérifie le risque de migration des couleurs avant le lavage.",
      },
      {
        name: "Laine et tapis berbère",
        text: "La laine contient de la lanoline, une protection naturelle de la fibre. Sur un berbère ou un Beni Ouarain, le velours peut retenir beaucoup de poussière. Le battage, qui déloge cette poussière, l'aspiration au dos et un séchage maîtrisé évitent de tasser la fibre ou de provoquer un feutrage, un agglomérat de fibres.",
      },
      {
        name: "Kilim et autres tissages plats",
        text: "Un kilim est un tissage plat : il ne possède pas de velours épais. Sa chaîne, sa trame, ses lisières et ses franges sont examinées avant le rinçage. Le séchage à plat aide à préserver sa forme. Une reprise de lisières ou une consolidation des franges est chiffrée à part.",
      },
      {
        name: "Tufté main et laine contemporaine",
        text: "Le tufté main a des mèches implantées dans un dossier de toile collé au latex, un support sensible à l'eau. L'état de ce dossier conditionne le traitement. Pour une laine moderne de salon, le brossage final respecte aussi le sens du velours, c'est-à-dire l'orientation des poils.",
      },
      {
        name: "Viscose et soie",
        text: "La viscose, parfois appelée soie artificielle, peut jaunir, durcir et s'abîmer si elle est frottée mouillée. La soie naturelle exige elle aussi une grande prudence. Ces tapis brillants sont donc évalués au devis avant toute intervention, notamment lorsque les couleurs sont contrastées.",
      },
    ],
  },
  stains: {
    title: "Taches, odeurs et mites dans les tapis de Saint-Mandé",
    intro:
      "Un tapis de séjour reçoit les marques du quotidien, tandis qu'une pièce héritée peut avoir été rangée longtemps avant d'être installée. Signalez l'origine, l'ancienneté et la présence éventuelle d'animaux ou d'humidité.",
    items: [
      {
        name: "Boissons, repas et traces de passage",
        text: "Une tache de boisson, de graisse ou de terre dans un format de salon ne se traite pas de la même façon selon la fibre. Le pré-détachage est une préparation localisée avant le shampooing. Une auréole ancienne peut demander une évaluation distincte, sans garantie de disparition complète.",
      },
      {
        name: "Odeurs et urine",
        text: "Sur un tapis exposé à un animal ou conservé dans une pièce peu aérée, indiquez précisément la zone concernée. Le traitement odeurs et urine est disponible en option à 5–15 €/m². L'atelier adapte son action à la fibre, au support et à l'état de la souillure.",
      },
      {
        name: "Mites, poussière et stockage",
        text: "Les mites sont les larves de la teigne qui mangent la kératine de la laine. Un tapis plié, peu déplacé ou sorti d'un espace de stockage mérite un contrôle. L'option anti-mites et anti-acariens peut être ajoutée pour 0–10 €/m² après diagnostic.",
      },
    ],
  },
  workshop: {
    title: "Comment se déroule le lavage en atelier ?",
    intro:
      "L'atelier partenaire travaille sur devis et adapte la méthode à la matière, aux couleurs et aux fragilités relevées. Le lavage à l'eau suit un enchaînement contrôlé jusqu'à l'emballage.",
    steps: [
      {
        name: "1. Examiner le tapis",
        text: "La fibre, le tissage, les couleurs, les lisières et les franges sont contrôlés. Le diagnostic peut inclure un test de dégorgement pour vérifier la stabilité des teintes.",
      },
      {
        name: "2. Retirer la poussière",
        text: "Un battage déloge les particules installées dans le tapis. Une aspiration réalisée au dos complète cette phase sans brosser inutilement le velours en surface.",
      },
      {
        name: "3. Préparer et shampouiner",
        text: "Les zones signalées reçoivent un pré-détachage. Le tapis est ensuite shampouiné à la brosse rotative avec un produit au pH neutre, choisi pour sa matière.",
      },
      {
        name: "4. Rincer puis racler",
        text: "Le rinçage à grande eau élimine le shampooing et les résidus décollés. Un raclage retire l'eau présente en surface avant l'essorage, afin de limiter l'humidité résiduelle.",
      },
      {
        name: "5. Essorer et sécher à plat",
        text: "Après essorage, le tapis est séché à plat en salle ventilée. Pour la laine, le séchage prend 12 à 24 h. Cette phase contribue à préserver le toucher et la tenue du tapis.",
      },
      {
        name: "6. Finaliser et contrôler",
        text: "Le velours est brossé dans son sens. Les franges sont lavées puis peignées, avant un contrôle et l'emballage. Toute réparation de franges, de lisières ou de velours est chiffrée à part.",
      },
    ],
  },
  prices: {
    title: "Prix du lavage de tapis à Saint-Mandé",
    intro:
      "Le devis tient compte de la surface, de la fibre, de l'état du tapis et des options retenues. Les exemples suivants donnent un repère avant l'examen de votre tapis.",
    examples: [
      { label: "kilim 140 × 200 cm", detail: "2,80 m² × 25–40 €", price: "70–112 €" },
      { label: "persan 200 × 290 cm", detail: "5,80 m² × 35–60 €", price: "203–348 €" },
    ],
    note:
      "Le minimum de facturation est de 60 € par tapis. L'enlèvement et la livraison sont généralement offerts à partir de 6 m² ; sinon, comptez 10 à 30 €. Les options et les réparations de franges, lisières ou velours sont confirmées sur devis ; les réparations sont chiffrées à part.",
  },
  reviews: [REVIEWS[1], REVIEWS[15], REVIEWS[19]],
  areas: {
    title: "Enlèvement dans les secteurs de Saint-Mandé",
    intro:
      "Les rendez-vous sont organisés à domicile dans Saint-Mandé. Lors de votre demande, l'adresse exacte et les conditions d'accès restent les informations utiles ; ces repères géographiques permettent de situer plus facilement votre logement.",
    list: [
      "Le secteur du lac de Saint-Mandé",
      "Les adresses proches du bois de Vincennes",
      "L'avenue du Général-de-Gaulle",
      "La rue de la République",
      "Les abords de la place Charles-Digeon",
      "Les appartements en étage, avec ascenseur, gardien ou digicode",
    ],
    outro:
      "Si un grand tapis doit passer par un escalier, si un ascenseur est étroit ou si le stationnement demande une attention particulière, indiquez-le avant le rendez-vous. Le passage peut alors être préparé avec l'atelier partenaire.",
  },
  faq: [
    {
      q: "Pouvez-vous enlever un tapis dans un appartement près du lac de Saint-Mandé ?",
      a: "Oui. Indiquez l'adresse, l'étage, l'ascenseur, le digicode et les possibilités de stationnement. Le lac de Saint-Mandé est un repère utile pour préparer l'enlèvement à domicile.",
    },
    {
      q: "Comment organiser le passage près de l'avenue du Général-de-Gaulle ?",
      a: "Donnez votre adresse complète ainsi que les consignes d'accès de l'immeuble. Précisez aussi si un gardien doit être prévenu et si le tapis doit emprunter un escalier ou un ascenseur.",
    },
    {
      q: "Intervenez-vous autour de la rue de la République et de la place Charles-Digeon ?",
      a: "Oui, ces repères permettent de localiser votre adresse à Saint-Mandé. L'enlèvement est organisé à domicile avec les modalités que vous indiquez lors de la demande de devis.",
    },
    {
      q: "Un tapis persan de salon peut-il être lavé ?",
      a: "Le diagnostic examine le nouage, les couleurs, les lisières, les franges et l'état du velours. Un test de dégorgement aide à définir le traitement. Les réparations éventuelles sont chiffrées à part.",
    },
    {
      q: "Quel délai faut-il prévoir entre enlèvement et livraison ?",
      a: "Le délai habituel est de 7 à 10 jours. Une formule express en 72 h est disponible chez certains ateliers, avec un supplément de 15 à 25 %, sous réserve de confirmation au devis.",
    },
    {
      q: "Comment demander un devis pour plusieurs tapis ?",
      a: "Envoyez les dimensions, les matières connues, des photos et les taches éventuelles par téléphone au 07 62 87 07 07 ou via WhatsApp. Le devis est gratuit sous 24 h.",
    },
  ],
  didYouKnow:
    "L'abrash est une variation naturelle de teinte visible dans certains tapis, notamment noués main. Il ne s'agit pas d'une tache : le diagnostic le distingue d'une décoloration, d'une auréole ou d'une migration de couleurs avant le lavage.",
  updated: "2026-10-21",
  neighbours: [
    { label: "Vincennes", slug: "lavage-tapis-vincennes", note: "Commune limitrophe, à l'est." },
    { label: "Paris 12e", slug: "lavage-tapis-paris-12e", note: "Arrondissement parisien limitrophe." },
    { label: "Lavage de tapis dans le Val-de-Marne", slug: "lavage-tapis-val-de-marne", note: "Le hub du département." },
  ],
  order: ["types", "stains", "workshop", "reviews", "areas", "faq", "prices"],
};

export default page;
