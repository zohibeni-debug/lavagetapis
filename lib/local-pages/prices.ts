// Tarifs indicatifs Île-de-France, repris du brief sans modification.
// Tableau commun aux pages locales : c'est l'un des rares blocs qui peuvent
// être identiques d'une page à l'autre.

export const PRICE_ROWS: { type: string; price: string }[] = [
  { type: "Persan, oriental", price: "35–60 €" },
  { type: "Berbère, Beni Ouarain", price: "25–45 €" },
  { type: "Kilim", price: "25–40 €" },
  { type: "Shaggy", price: "22–35 €" },
  { type: "Laine moderne, tufté", price: "22–35 €" },
  { type: "Soie, viscose", price: "55–120 €" },
  { type: "Synthétique", price: "15–25 €" },
];

export const PRICE_NOTE =
  "Minimum de facturation : 60 € par tapis. Enlèvement et livraison généralement offerts à partir de 6 m², sinon 10 à 30 €. Options : détachage ciblé 30–60 €, traitement odeurs et urine 5–15 €/m², anti-mites et anti-acariens 0–10 €/m², formule express +15 à 25 %. Les réparations (franges, lisières, velours) sont chiffrées à part.";

export function formatFrenchDate(iso: string): string {
  const mois = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
  ];
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return `${day} ${mois[month - 1]} ${year}`;
}