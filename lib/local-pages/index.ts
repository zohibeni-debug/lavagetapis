// Registre des pages locales réellement écrites.
// Les liens de maillage ne sont rendus cliquables que si la page existe.

import boulogneBillancourt from "./boulogne-billancourt";
import creteil from "./creteil";
import hautsDeSeine from "./hauts-de-seine";
import issyLesMoulineaux from "./issy-les-moulineaux";
import lePerreuxSurMarne from "./le-perreux-sur-marne";
import levalloisPerret from "./levallois-perret";
import neuillySurSeine from "./neuilly-sur-seine";
import nogentSurMarne from "./nogent-sur-marne";
import paris from "./paris";
import paris10e from "./paris-10e";
import paris11e from "./paris-11e";
import paris12e from "./paris-12e";
import paris13e from "./paris-13e";
import paris14e from "./paris-14e";
import paris15e from "./paris-15e";
import paris16e from "./paris-16e";
import paris17e from "./paris-17e";
import paris18e from "./paris-18e";
import paris19e from "./paris-19e";
import paris1er from "./paris-1er";
import paris20e from "./paris-20e";
import paris2e from "./paris-2e";
import paris3e from "./paris-3e";
import paris4e from "./paris-4e";
import paris5e from "./paris-5e";
import paris6e from "./paris-6e";
import paris7e from "./paris-7e";
import paris8e from "./paris-8e";
import paris9e from "./paris-9e";
import rueilMalmaison from "./rueil-malmaison";
import saintCloud from "./saint-cloud";
import saintMande from "./saint-mande";
import saintMaurDesFosses from "./saint-maur-des-fosses";
import valDeMarne from "./val-de-marne";
import vincennes from "./vincennes";
import type { HubPage, LocalPage } from "./types";

export const SITE_URL = "https://lavagetapis.fr";

export const HUBS: HubPage[] = [paris, hautsDeSeine, valDeMarne];

// Les pages de lieu dans l'ordre des lots : Paris puis la petite couronne.
export const PLACES: LocalPage[] = [
  paris1er,
  paris2e,
  paris3e,
  paris4e,
  paris5e,
  paris6e,
  paris7e,
  paris8e,
  paris9e,
  paris10e,
  paris11e,
  paris12e,
  paris13e,
  paris14e,
  paris15e,
  paris16e,
  paris17e,
  paris18e,
  paris19e,
  paris20e,
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
