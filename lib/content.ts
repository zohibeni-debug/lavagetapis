// Données de la maquette, rendues côté serveur pour que tout le texte
// (types de tapis, villes desservies) soit présent dans le HTML source.

export type CarpetType = {
  key: string;
  label: string;
  lo: number;
  hi: number;
};

/** Fourchettes de prix au m², identiques au simulateur de la maquette. */
export const TYPES: Record<string, CarpetType> = {
  persan: { key: "persan", label: "Persan, oriental", lo: 35, hi: 60 },
  berbere: { key: "berbere", label: "Berbère", lo: 25, hi: 45 },
  kilim: { key: "kilim", label: "Kilim", lo: 25, hi: 40 },
  shaggy: { key: "shaggy", label: "Shaggy", lo: 22, hi: 35 },
  laine: { key: "laine", label: "Laine moderne", lo: 22, hi: 35 },
  soie: { key: "soie", label: "Soie, viscose", lo: 55, hi: 120 },
  synthetique: { key: "synthetique", label: "Synthétique", lo: 15, hi: 25 },
};

export const TYPE_KEYS = Object.keys(TYPES);

/** Libellés lisibles, utilisés dans les e-mails et l'enregistrement en base. */
export const TYPE_LABELS: Record<string, string> = {
  ...Object.fromEntries(Object.values(TYPES).map((t) => [t.key, t.label])),
  autre: "Je ne sais pas",
};

export type Zone = { dept: string; code: string; cities: string[] };

/** Zones d'intervention : 8 départements, 36 communes. */
export const ZONES: Zone[] = [
  ["Paris", "75", ["Paris 7e", "Paris 8e", "Paris 11e", "Paris 15e", "Paris 16e", "Paris 17e", "Paris 20e"]],
  ["Hauts-de-Seine", "92", ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Issy-les-Moulineaux", "Rueil-Malmaison", "Saint-Cloud"]],
  ["Seine-Saint-Denis", "93", ["Montreuil", "Saint-Denis", "Pantin", "Le Raincy", "Noisy-le-Grand", "Aubervilliers"]],
  ["Val-de-Marne", "94", ["Vincennes", "Saint-Mandé", "Nogent-sur-Marne", "Saint-Maur-des-Fossés", "Créteil", "Le Perreux"]],
  ["Yvelines", "78", ["Versailles", "Saint-Germain-en-Laye", "Le Chesnay", "Maisons-Laffitte"]],
  ["Essonne", "91", ["Massy", "Palaiseau", "Évry-Courcouronnes", "Gif-sur-Yvette"]],
  ["Val-d'Oise", "95", ["Enghien-les-Bains", "Cergy", "Argenteuil", "Montmorency"]],
  ["Seine-et-Marne", "77", ["Meaux", "Chelles", "Fontainebleau", "Melun"]],
].map(([dept, code, cities]) => ({
  dept: dept as string,
  code: code as string,
  cities: cities as string[],
}));

/** Téléphone affiché par la maquette, réutilisé dans les messages d'erreur. */
export const PHONE_DISPLAY = "07 62 87 07 07";
export const PHONE_HREF = "tel:+33762870707";
export const WHATSAPP_HREF =
  "https://wa.me/33762870707?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20le%20lavage%20de%20mon%20tapis.";