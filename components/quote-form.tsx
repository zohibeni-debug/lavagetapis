// Formulaire de devis. Le rendu est identique à la maquette ; seuls des
// attributs `name` et un champ leurre invisible ont été ajoutés pour permettre
// l'envoi réel vers POST /api/devis.
export default function QuoteForm() {
  return (
    <>
      <div className="frieze" aria-hidden="true" />
      <section className="section devis" id="devis">
        <div className="wrap devis-grid">
          <div className="devis-aside">
            <span className="eyebrow">Devis gratuit</span>
            <h2 style={{ marginTop: ".8rem" }}>Votre devis de lavage de tapis sous 24 h</h2>
            <p className="lede" style={{ marginTop: "1rem" }}>
              Gratuit et sans engagement. Avec deux photos, le prix de l&apos;atelier est ferme
              dès le devis.
            </p>
            <img
              src="img/apres.jpg"
              alt="Tapis persan propre après lavage en atelier"
              loading="lazy"
              width="1500"
              height="940"
            />
          </div>
          <form className="form" id="devisForm" noValidate>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                top: "auto",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="fWebsite">
                Ne pas remplir ce champ
                <input
                  type="text"
                  id="fWebsite"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
            <div id="devisFields" style={{ display: "grid", gap: "1rem" }}>
              <div className="recap" id="recap" />
              <div className="row">
                <label htmlFor="fType">
                  Type de tapis{" "}
                  <select id="fType" name="type">
                    <option value="persan">Persan, oriental fait main</option>
                    <option value="berbere">Berbère, Beni Ouarain</option>
                    <option value="kilim">Kilim, tissé plat</option>
                    <option value="shaggy">Shaggy, poils longs</option>
                    <option value="laine">Laine moderne, tufté</option>
                    <option value="soie">Soie, viscose</option>
                    <option value="synthetique">Synthétique</option>
                    <option value="autre">Je ne sais pas</option>
                  </select>
                </label>
                <label htmlFor="fDims">
                  Dimensions (cm)
                  <input
                    id="fDims"
                    name="dims"
                    placeholder="200 × 300"
                    defaultValue="200 × 300"
                  />
                </label>
              </div>
              <fieldset style={{ border: "0", padding: "0", margin: "0", minWidth: "0" }}>
                <legend
                  style={{
                    fontSize: ".88rem",
                    fontWeight: "700",
                    marginBottom: ".5rem",
                    padding: "0",
                  }}
                >
                  Problèmes à traiter
                </legend>
                <div className="chips">
                  <label className="chip">
                    <input type="checkbox" name="pb" value="Taches" />
                    <span>Taches</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" name="pb" value="Urine, odeurs" />
                    <span>Urine, odeurs</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" name="pb" value="Mites" />
                    <span>Mites</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" name="pb" value="Dégât des eaux" />
                    <span>Dégât des eaux</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" name="pb" value="Franges abîmées" />
                    <span>Franges abîmées</span>
                  </label>
                  <label className="chip">
                    <input type="checkbox" name="pb" value="Entretien" />
                    <span>Simple entretien</span>
                  </label>
                </div>
              </fieldset>
              <div className="drop">
                <label htmlFor="fPhotos">Photos du tapis et des taches (facultatif)</label>
                <input type="file" id="fPhotos" name="photos" accept="image/*" multiple />
                <div className="thumbs" id="thumbs" />
              </div>
              <div className="row3">
                <label htmlFor="fName">
                  Prénom et nom
                  <input id="fName" name="name" autoComplete="name" required />
                </label>
                <label htmlFor="fTel">
                  Téléphone
                  <input id="fTel" name="tel" type="tel" autoComplete="tel" required />
                </label>
                <label htmlFor="fCp">
                  Code postal
                  <input
                    id="fCp"
                    name="cp"
                    inputMode="numeric"
                    maxLength={5}
                    autoComplete="postal-code"
                    required
                  />
                </label>
              </div>
              <div className="row">
                <label htmlFor="fMail">
                  E-mail
                  <input id="fMail" name="email" type="email" autoComplete="email" />
                </label>
                <label htmlFor="fWhen">
                  Être rappelé{" "}
                  <select id="fWhen" name="when">
                    <option>Dès que possible</option>
                    <option>En matinée</option>
                    <option>Entre 12 h et 14 h</option>
                    <option>En fin de journée</option>
                  </select>
                </label>
              </div>
              <label htmlFor="fMsg">
                Précisions (étage, accès, urgence)
                <textarea id="fMsg" name="msg" />
              </label>
              <label className="consent" htmlFor="fOk">
                <input type="checkbox" id="fOk" name="consent" value="1" required />
                <span>
                  J&apos;accepte que ma demande soit transmise à un atelier partenaire de mon
                  secteur pour l&apos;établissement du devis.
                </span>
              </label>
              <p className="err" id="fErr" hidden>
                Merci d&apos;indiquer votre nom, un téléphone, votre code postal et
                d&apos;accepter la transmission.
              </p>
              <button className="btn btn-sun" type="submit" style={{ justifySelf: "start" }}>
                Recevoir mon devis gratuit
              </button>
            </div>
            <div className="ok" id="devisOk" hidden>
              <svg viewBox="8 28 384 212" aria-hidden="true">
                <use href="#rug" width="400" height="270" />
              </svg>
              <h3 id="okTitle">Demande enregistrée</h3>
              <p id="okText">
                Un atelier partenaire vous rappelle sous 24 h ouvrées avec un prix ferme et un
                créneau d&apos;enlèvement.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}