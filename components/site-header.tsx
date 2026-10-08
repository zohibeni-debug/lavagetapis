// En-tête de la maquette. `anchorPrefix` reste vide sur l'accueil (les liens
// gardent leur valeur d'origine) et vaut "/" sur les pages légales pour que les
// ancres ramènent bien à la page d'accueil.
export default function SiteHeader({ anchorPrefix = "" }: { anchorPrefix?: string }) {
  return (
    <>
      <header className="top">
        <div className="wrap">
          <a className="brand" href={`${anchorPrefix}#top`} aria-label="lavagetapis.fr, accueil">
            <span className="brand-word">lavage<b>tapis</b><i>.fr</i></span>
          </a>
          <nav className="nav" id="nav" aria-label="Navigation principale">
            <a href={`${anchorPrefix}#atelier`}>Le lavage</a>
            <a href={`${anchorPrefix}#types`}>Types de tapis</a>
            <a href={`${anchorPrefix}#prix`}>Prix</a>
            <a href={`${anchorPrefix}#zones`}>Zones</a>
            <a href={`${anchorPrefix}#faq`}>FAQ</a>
          </nav>
          <a className="btn btn-sun" href={`${anchorPrefix}#devis`}>Devis gratuit</a>
          <button className="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav" aria-label="Ouvrir le menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
