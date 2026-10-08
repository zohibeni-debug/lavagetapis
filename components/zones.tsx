import { ZONES } from "@/lib/content";

// La maquette construisait cette liste en JavaScript : elle est ici rendue
// côté serveur pour que les 36 communes soient présentes dans le HTML source.
export default function Zones() {
  return (
    <>
      <div className="frieze" aria-hidden="true" />
      <section className="section" id="zones">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Zones d&apos;intervention</span>
            <h2>Lavage de tapis à Paris et en Île-de-France</h2>
            <p className="lede">
              Enlèvement et livraison dans les huit départements franciliens. Votre ville
              n&apos;apparaît pas ? Faites quand même votre demande : nous la transmettons à
              l&apos;atelier le plus proche.
            </p>
          </div>
          <div className="zones" id="zonesList">
            {ZONES.map((zone) => (
              <div className="zone" key={zone.code}>
                <h3>
                  {zone.dept} <span>{zone.code}</span>
                </h3>
                <ul>
                  {zone.cities.map((city) => (
                    <li key={city}>
                      <a
                        href="#devis"
                        data-cp={zone.code}
                        title={`Lavage de tapis à ${city}`}
                      >
                        {city}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}