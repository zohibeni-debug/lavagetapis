import { TYPES, TYPE_KEYS } from "@/lib/content";

// Les puces de type de tapis étaient générées en JavaScript dans la maquette :
// elles sont ici rendues côté serveur. La logique de calcul reste dans
// components/site-scripts.tsx et s'accroche aux mêmes identifiants.
export default function Simulator() {
  return (
    <>
      <section className="section" id="prix">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Prix du lavage de tapis</span>
            <h2>Estimez le prix de votre tapis en 30 secondes</h2>
            <p className="lede">
              Le lavage se facture au m². Choisissez le type, les dimensions et les options :
              vous obtenez la fourchette pratiquée par les ateliers d&apos;Île-de-France.
            </p>
          </div>
          <div className="sim-grid">
            <form className="sim" id="sim" aria-label="Simulateur de prix">
              <fieldset>
                <legend>1. Type de tapis</legend>
                <div className="chips" id="simTypes">
                  {TYPE_KEYS.map((key) => (
                    <label className="chip" key={key}>
                      <input
                        type="radio"
                        name="sType"
                        id={`sType-${key}`}
                        value={key}
                        defaultChecked={key === "persan"}
                      />
                      <span>
                        {TYPES[key].label} <small>
                          {TYPES[key].lo}–{TYPES[key].hi} €/m²
                        </small>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend>2. Dimensions</legend>
                <div className="dims">
                  <label htmlFor="sL">
                    Longueur (cm)
                    <input type="number" id="sL" min="30" max="1200" step="10" defaultValue="300" />
                  </label>
                  <span className="x">×</span>
                  <label htmlFor="sW">
                    Largeur (cm)
                    <input type="number" id="sW" min="30" max="1200" step="10" defaultValue="200" />
                  </label>
                  <div />
                </div>
                <div className="presets" id="presets">
                  <button type="button" data-d="90,60">
                    60 × 90
                  </button>
                  <button type="button" data-d="170,120">
                    120 × 170
                  </button>
                  <button type="button" data-d="230,160">
                    160 × 230
                  </button>
                  <button type="button" data-d="300,200">
                    200 × 300
                  </button>
                  <button type="button" data-d="350,250">
                    250 × 350
                  </button>
                  <button type="button" data-d="300,80">
                    Passage 80 × 300
                  </button>
                </div>
              </fieldset>
              <fieldset>
                <legend>3. Nombre de tapis</legend>
                <div className="qty">
                  <button type="button" id="qMinus" aria-label="Un tapis de moins">
                    −
                  </button>
                  <output id="qOut" aria-live="polite">
                    1
                  </output>
                  <button type="button" id="qPlus" aria-label="Un tapis de plus">
                    +
                  </button>
                </div>
              </fieldset>
              <fieldset>
                <legend>4. Options</legend>
                <div className="opts">
                  <label className="opt" htmlFor="oSpot">
                    <input type="checkbox" id="oSpot" />
                    <span>Détachage ciblé (vin, café, encre)</span>
                    <small>30 à 60 €</small>
                  </label>
                  <label className="opt" htmlFor="oOdor">
                    <input type="checkbox" id="oOdor" />
                    <span>Traitement odeurs et urine d&apos;animaux</span>
                    <small>5 à 15 €/m²</small>
                  </label>
                  <label className="opt" htmlFor="oMite">
                    <input type="checkbox" id="oMite" />
                    <span>Traitement anti-mites et anti-acariens</span>
                    <small>0 à 10 €/m²</small>
                  </label>
                  <label className="opt" htmlFor="oExpress">
                    <input type="checkbox" id="oExpress" />
                    <span>Express, retour en 72 h</span>
                    <small>+15 à 25 %</small>
                  </label>
                </div>
              </fieldset>
            </form>
            <aside className="result" aria-live="polite">
              <span className="label">Estimation</span>
              <div className="big" id="rTotal">
                210 € – 360 €
              </div>
              <dl>
                <dt>Surface</dt>
                <dd id="rSurf">6,0 m²</dd>
                <dt>Lavage</dt>
                <dd id="rWash">210 € – 360 €</dd>
                <dt>Options</dt>
                <dd id="rOpts">—</dd>
                <dt>Enlèvement et livraison</dt>
                <dd id="rDel">offerts</dd>
              </dl>
              <p className="note" id="rNote">
                Prix indicatifs constatés en Île-de-France en 2026, minimum de facturation de
                60 € par tapis. Le prix ferme figure sur le devis de l&apos;atelier, après
                photos ou visite.
              </p>
              <a className="btn btn-sun" href="#devis" id="toDevis">
                Recevoir mon devis exact
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}