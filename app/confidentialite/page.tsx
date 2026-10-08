import type { Metadata } from "next";

import RugSymbol from "@/components/rug-symbol";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteScripts from "@/components/site-scripts";

export const metadata: Metadata = {
  title: "Politique de confidentialité | lavagetapis.fr",
  description:
    "Données collectées par le formulaire de devis de lavagetapis.fr, finalités, destinataires, durée de conservation et exercice de vos droits RGPD.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <>
      <RugSymbol />
      <SiteHeader anchorPrefix="/" />
      <main id="top" className="section">
        <div className="wrap legal-page">
          <span className="eyebrow">Données personnelles</span>
          <h1 style={{ marginTop: ".8rem" }}>Politique de confidentialité</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Dernière mise à jour : octobre 2026.
          </p>

          <h2>Qui traite vos données</h2>
          <p>
            Le responsable du traitement est l&apos;éditeur du site, ALLOSITEWEB (SIREN
            519 416 242), joignable au 07 62 87 07 07. Pour toute question relative à vos données
            personnelles, écrivez à contact@lavagetapis.fr.
          </p>

          <h2>Données collectées</h2>
          <p>
            Le formulaire de devis collecte uniquement les informations nécessaires à
            l&apos;établissement d&apos;un devis de lavage de tapis :
          </p>
          <ul>
            <li>votre prénom et votre nom ;</li>
            <li>votre numéro de téléphone et, si vous le renseignez, votre adresse e-mail ;</li>
            <li>votre code postal et le créneau de rappel souhaité ;</li>
            <li>
              les caractéristiques de votre tapis : type, dimensions, problèmes à traiter,
              précisions et photos que vous joignez ;
            </li>
            <li>
              une empreinte technique calculée à partir de votre adresse IP, utilisée uniquement
              pour limiter les envois automatisés. L&apos;adresse IP n&apos;est jamais conservée en
              clair.
            </li>
          </ul>
          <p>
            Le formulaire destiné aux ateliers collecte le nom de l&apos;atelier, la ville ou les
            codes postaux couverts et un numéro de téléphone.
          </p>

          <h2>Pourquoi ces données sont traitées</h2>
          <p>
            Les données sont traitées pour répondre à votre demande de devis et la transmettre à un
            atelier partenaire de votre secteur, ce qui suppose votre accord explicite, recueilli
            par la case à cocher du formulaire. La limitation des envois automatisés repose sur
            l&apos;intérêt légitime à protéger le service contre le spam.
          </p>

          <h2>Qui reçoit vos données</h2>
          <ul>
            <li>
              <strong>l&apos;atelier partenaire du secteur concerné</strong>, seul destinataire de
              la demande complète, y compris les photos ;
            </li>
            <li>
              <strong>Vercel Inc.</strong> (hébergement du site) et <strong>Neon Inc.</strong>
              (hébergement de la base de données), en qualité de sous-traitants techniques ;
            </li>
            <li>
              <strong>Resend</strong> (acheminement des e-mails de notification vers
              l&apos;éditeur du site).
            </li>
          </ul>
          <p>
            Vos données ne sont ni vendues ni louées. Elles ne sont pas utilisées pour de la
            prospection publicitaire.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les demandes de devis sont conservées trois ans à compter du dernier contact, puis
            supprimées. Les empreintes techniques servant à limiter les envois automatisés sont
            conservées un an.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un
            droit d&apos;accès, de rectification, d&apos;effacement, de limitation et
            d&apos;opposition au traitement de vos données, ainsi que du droit de retirer votre
            consentement à tout moment. Pour exercer ces droits, écrivez à
            contact@lavagetapis.fr ou appelez le 07 62 87 07 07. Vous pouvez également introduire
            une réclamation auprès de la CNIL (cnil.fr).
          </p>

          <h2>Cookies et mesure d&apos;audience</h2>
          <p>
            Le site ne dépose aucun cookie publicitaire. Si un outil de mesure d&apos;audience est
            activé par l&apos;éditeur, il sert uniquement à compter les visites et les demandes de
            devis. Vous pouvez à tout moment refuser ou supprimer les cookies depuis les réglages
            de votre navigateur.
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