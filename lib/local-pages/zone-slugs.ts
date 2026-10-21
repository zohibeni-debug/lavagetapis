// Correspondance entre les libellés de la section #zones de l'accueil
// et les URLs des pages locales. Les liens ne sont rendus cliquables que
// lorsque la page existe (voir isImplemented).

export const ZONE_SLUGS: Record<string, string> = {
  "Paris 1er": "lavage-tapis-paris-1er",
  "Paris 2e": "lavage-tapis-paris-2e",
  "Paris 3e": "lavage-tapis-paris-3e",
  "Paris 4e": "lavage-tapis-paris-4e",
  "Paris 5e": "lavage-tapis-paris-5e",
  "Paris 6e": "lavage-tapis-paris-6e",
  "Paris 7e": "lavage-tapis-paris-7e",
  "Paris 8e": "lavage-tapis-paris-8e",
  "Paris 9e": "lavage-tapis-paris-9e",
  "Paris 10e": "lavage-tapis-paris-10e",
  "Paris 11e": "lavage-tapis-paris-11e",
  "Paris 12e": "lavage-tapis-paris-12e",
  "Paris 13e": "lavage-tapis-paris-13e",
  "Paris 14e": "lavage-tapis-paris-14e",
  "Paris 15e": "lavage-tapis-paris-15e",
  "Paris 16e": "lavage-tapis-paris-16e",
  "Paris 17e": "lavage-tapis-paris-17e",
  "Paris 18e": "lavage-tapis-paris-18e",
  "Paris 19e": "lavage-tapis-paris-19e",
  "Paris 20e": "lavage-tapis-paris-20e",
  "Boulogne-Billancourt": "lavage-tapis-boulogne-billancourt",
  "Neuilly-sur-Seine": "lavage-tapis-neuilly-sur-seine",
  "Levallois-Perret": "lavage-tapis-levallois-perret",
  "Issy-les-Moulineaux": "lavage-tapis-issy-les-moulineaux",
  "Rueil-Malmaison": "lavage-tapis-rueil-malmaison",
  "Saint-Cloud": "lavage-tapis-saint-cloud",
  Vincennes: "lavage-tapis-vincennes",
  "Saint-Mandé": "lavage-tapis-saint-mande",
  "Nogent-sur-Marne": "lavage-tapis-nogent-sur-marne",
  "Saint-Maur-des-Fossés": "lavage-tapis-saint-maur-des-fosses",
  Créteil: "lavage-tapis-creteil",
  "Le Perreux-sur-Marne": "lavage-tapis-le-perreux-sur-marne",
};

/** Slug du hub correspondant à chaque département de la section #zones. */
export const DEPT_HUB_SLUGS: Record<string, string> = {
  Paris: "lavage-tapis-paris",
  "Hauts-de-Seine": "lavage-tapis-hauts-de-seine",
  "Val-de-Marne": "lavage-tapis-val-de-marne",
};