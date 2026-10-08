import type { Metadata } from "next";

import RugSymbol from "@/components/rug-symbol";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteScripts from "@/components/site-scripts";

export const metadata: Metadata = {
  title: "Mentions légales | lavagetapis.fr",
  description:
    "Éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation du service de mise en relation lavagetapis.fr.",
  alternates: { canonical: "/mentions-legales" },
};

// À compléter par l'éditeur si nécessaire : numéro RCS, capital social, adresse
// complète du siège et nom du directeur de la publication.
export default function MentionsLegalesPage() {
  return (
    <>
      <RugSymbol />
      <SiteHeader anchorPrefix="/" />
      <main id="top" className="section">
        <div className="wrap legal-page">
          <span className="eyebrow">Informations légales</span>
          <h1 style={{ marginTop: ".8rem" }}>Mentions légales</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Dernière mise à jour : octobre 2026.
          </p>

          <h2>Éditeur du site</h2>
          <p>
            Le site lavagetapis.fr est édité par <strong>ALLOSITEWEB</strong>, société immatriculée
            sous le numéro SIREN 519 416 242, dont le siège social est situé à Montreuil
            (Seine-Saint-Denis).
          </p>
          <ul>
            <li>Contact téléphonique : 07 62 87 07 07</li>
            <li>Contact par e-mail : contact@lavagetapis.fr</li>
          </ul>

          <h2>Hébergeur</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA
            91789, États-Unis — vercel.com. La base de données est hébergée par Neon Inc. (région
            Francfort, Allemagne).
          </p>

          <h2>Nature du service</h2>
          <p>
            lavagetapis.fr est un service de <strong>mise en relation</strong>. Le site ne réalise
            pas lui-même les prestations de lavage de tapis : il transmet les demandes de devis aux
            ateliers de lavage et pressings spécialisés partenaires du secteur concerné. Le contrat
            de prestation est conclu directement entre le client et l&apos;atelier, qui établit le
            devis, fixe ses prix et exécute la prestation sous sa propre responsabilité.
          </p>

          <h2 id="cgu">Conditions générales d&apos;utilisation</h2>
          <h3>Objet</h3>
          <p>
            L&apos;utilisation du site implique l&apos;acceptation sans réserve des présentes
            conditions. Le service est proposé gratuitement aux personnes qui recherchent un
            prestataire de lavage de tapis et aux ateliers qui souhaitent recevoir des demandes.
          </p>
          <h3>Demandes de devis</h3>
          <p>
            Les informations transmises via le formulaire doivent être exactes et concerner le
            demandeur lui-même. Le demandeur accepte que sa demande soit transmise à un atelier
            partenaire de son secteur. Les prix affichés sur le site sont des estimations
            indicatives constatées en Île-de-France : seul le devis de l&apos;atelier fait foi.
          </p>
          <h3>Engagements des ateliers partenaires</h3>
          <p>
            Les ateliers référencés doivent disposer d&apos;une assurance professionnelle couvrant
            les tapis qui leur sont confiés, respecter les prix et créneaux annoncés dans leur
            devis, et traiter les données transmises uniquement pour l&apos;établissement du devis
            et la réalisation de la prestation.
          </p>
          <h3>Responsabilité</h3>
          <p>
            lavagetapis.fr met en relation les demandeurs et les ateliers, sans intervenir dans
            l&apos;exécution de la prestation. Il ne peut être tenu responsable d&apos;un
            désaccord, d&apos;un retard ou d&apos;un dommage survenu entre un client et un
            atelier. Le site s&apos;efforce d&apos;assurer la disponibilité du service sans
            garantie d&apos;absence d&apos;interruption.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus du site (textes, photographies, illustrations, éléments
            graphiques et vidéos) est protégé par le droit d&apos;auteur. Toute reproduction ou
            représentation, totale ou partielle, sans autorisation écrite préalable est interdite.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le site et les présentes mentions sont soumis au droit français. En cas de
            litige, les tribunaux français sont compétents.
          </p>

          <p className="back">
            <a className="btn btn-ghost" href="/">
              Revenir à l&apos;accueil
            </a>
          </p>
        </div>
      </main>
      <SiteFooter anchorPrefix="/" />
      <SiteScripts />
    </>
  );
}