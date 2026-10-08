// Bloc « professionnels du tapis ». Le rendu est identique à la maquette ;
// seuls des attributs `name` et un champ leurre invisible ont été ajoutés pour
// permettre l'envoi réel vers POST /api/partenaire.
export default function Pros() {
  return (
    <>
      <section className="section pros" id="pros">
        <div className="wrap pros-grid">
          <div>
            <span className="eyebrow">Professionnels du tapis</span>
            <h2 style={{ marginTop: ".8rem" }}>
              Vous lavez des tapis ? Recevez des demandes de votre secteur
            </h2>
            <p className="lede" style={{ marginTop: "1rem" }}>
              lavagetapis.fr transmet des demandes de devis détaillées aux ateliers de lavage de
              tapis et aux pressings spécialisés.
            </p>
            <ul>
              <li>Demandes complètes : type de tapis, dimensions, taches, photos</li>
              <li>Un secteur défini par codes postaux</li>
              <li>Vos créneaux d&apos;enlèvement, vos prix</li>
              <li>Une fiche atelier avec vos avis clients</li>
            </ul>
          </div>
          <form className="pro-form" id="proForm" noValidate>
            <h3>Devenir atelier partenaire</h3>
            <div id="proFields" style={{ display: "grid", gap: ".8rem" }}>
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
                <label htmlFor="pWebsite">
                  Ne pas remplir ce champ
                  <input
                    type="text"
                    id="pWebsite"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              <label htmlFor="pName">
                Nom de l&apos;atelier
                <input id="pName" name="name" required autoComplete="organization" />
              </label>
              <label htmlFor="pCity">
                Ville ou codes postaux couverts
                <input id="pCity" name="city" required />
              </label>
              <label htmlFor="pTel">
                Téléphone
                <input id="pTel" name="tel" type="tel" required autoComplete="tel" />
              </label>
              <p className="err" id="pErr" hidden>
                Indiquez le nom de l&apos;atelier, votre secteur et un téléphone.
              </p>
              <button className="btn btn-teal" type="submit">
                Être rappelé
              </button>
            </div>
            <p id="proOk" hidden>
              <strong>Demande enregistrée.</strong> Nous vous rappelons pour présenter le
              fonctionnement.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}