// Pied de page de la maquette. Seule évolution : le texte
// « Mentions légales · Confidentialité · CGU » devient cliquable sans changer
// son apparence (règle .legal a ajoutée à la fin de globals.css).
// `anchorPrefix` vaut "/" sur les pages légales pour ramener à l'accueil.
export default function SiteFooter({ anchorPrefix = "" }: { anchorPrefix?: string }) {
  return (
    <>
      <footer className="foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="brand" href={`${anchorPrefix}#top`}>
                <svg viewBox="8 28 384 212" aria-hidden="true">
                  <use href="#rug" width="400" height="270" />
                </svg>
                <span className="brand-word">
                  lavage<b>tapis</b>
                  <i>.fr</i>
                </span>
              </a>
              <p>
                Service de mise en relation avec des ateliers de lavage de tapis en Île-de-France.
                Les prestations sont réalisées par des ateliers indépendants, sur devis.
              </p>
            </div>
            <div>
              <h4>Lavage par type</h4>
              <ul>
                <li>
                  <a href={`${anchorPrefix}#types`}>Tapis persan</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#types`}>Tapis berbère</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#types`}>Kilim</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#types`}>Tapis en soie</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#types`}>Tapis shaggy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Villes</h4>
              <ul>
                <li>
                  <a href={`${anchorPrefix}#zones`}>Nettoyage tapis Paris</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#zones`}>Lavage tapis Boulogne</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#zones`}>Lavage tapis Montreuil</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#zones`}>Lavage tapis Versailles</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#zones`}>Lavage tapis Vincennes</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>lavagetapis.fr</h4>
              <ul>
                <li>
                  <a href={`${anchorPrefix}#prix`}>Prix au m²</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#faq`}>Questions fréquentes</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#pros`}>Devenir partenaire</a>
                </li>
                <li>
                  <a href={`${anchorPrefix}#devis`}>Demander un devis</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 lavagetapis.fr, édité par ALLOSITEWEB</span>
            <span>
              <a href="/mentions-legales">Mentions légales</a> ·{" "}
              <a href="/confidentialite">Confidentialité</a> ·{" "}
              <a href="/mentions-legales#cgu">CGU</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}