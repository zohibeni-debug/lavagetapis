// Registre des pages locales réellement écrites.
// Les liens de maillage ne sont rendus cliquables que si la page existe :
// les lots suivants n'auront qu'à ajouter leur fichier ici.

import boulogneBillancourt from "./boulogne-billancourt";
import creteil from "./creteil";
import hautsDeSeine from "./hauts-de-seine";
import issyLesMoulineaux from "./issy-les-moulineaux";
import lePerreuxSurMarne from "./le-perreux-sur-marne";
import levalloisPerret from "./levallois-perret";
import neuillySurSeine from "./neuilly-sur-seine";
import nogentSurMarne from "./nogent-sur-marne";
import paris from "./paris";
import paris7e from "./paris-7e";
import rueilMalmaison from "./rueil-malmaison";
import saintCloud from "./saint-cloud";
import saintMande from "./saint-mande";
import saintMaurDesFosses from "./saint-maur-des-fosses";
import valDeMarne from "./val-de-marne";
import vincennes from "./vincennes";
import type { HubPage, LocalPage } from "./types";

export const SITE_URL = "https://lavagetapis.fr";

export const HUBS: HubPage[] = [paris, hautsDeSeine, valDeMarne];

export const PLACES: LocalPage[] = [
  paris7e,
  boulogneBillancourt,
  neuillySurSeine,
  levalloisPerret,
  issyLesMoulineaux,
  rueilMalmaison,
  saintCloud,
  vincennes,
  saintMande,
  nogentSurMarne,
  saintMaurDesFosses,
  creteil,
  lePerreuxSurMarne,
];

const hubBySlug = new Map(HUBS.map((hub) => [hub.slug, hub]));
const placeBySlug = new Map(PLACES.map((place) => [place.slug, place]));

export function findHub(slug: string): HubPage | undefined {
  return hubBySlug.get(slug);
}

export function requireHub(slug: string): HubPage {
  const hub = hubBySlug.get(slug);
  if (!hub) throw new Error(`Contenu du hub introuvable : ${slug}`);
  return hub;
}

export function requirePlace(slug: string): LocalPage {
  const place = placeBySlug.get(slug);
  if (!place) throw new Error(`Contenu de la page locale introuvable : ${slug}`);
  return place;
}

export function findPlace(slug: string): LocalPage | undefined {
  return placeBySlug.get(slug);
}

/** Vrai si la page correspondante est déjà écrite (sinon : texte simple). */
export function isImplemented(slug: string): boolean {
  return hubBySlug.has(slug) || placeBySlug.has(slug);
}

export type { HubPage, LocalPage } from "./types";