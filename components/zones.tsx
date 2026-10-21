import { ZONES } from "@/lib/content";
import { isImplemented } from "@/lib/local-pages";
import { DEPT_HUB_SLUGS, ZONE_SLUGS } from "@/lib/local-pages/zone-slugs";

// La maquette construisait cette liste en JavaScript : elle est ici rendue
// côté serveur pour que les 32 communes soient présentes dans le HTML source.
// Chaque lieu pointe vers sa page locale dès qu'elle existe ; en attendant, le
// lien reste celui de la maquette (#devis), ce qui évite tout lien mort.
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
              Enlèvement et livraison à Paris et dans les départements voisins : Hauts-de-Seine
              et Val-de-Marne. Votre ville n&apos;apparaît pas ? Faites quand même votre demande :
              nous la transmettons à l&apos;atelier le plus proche.
            </p>
          </div>
          <div className="zones" id="zonesList">
            {ZONES.map((zone) => {
              const hubSlug = DEPT_HUB_SLUGS[zone.dept];
              return (
                <div className="zone" key={zone.code}>
                  <h3>
                    {hubSlug && isImplemented(hubSlug) ? (
                      <a href={`/${hubSlug}`}>
                        {zone.dept} <span>{zone.code}</span>
                      </a>
                    ) : (
                      <>
                        {zone.dept} <span>{zone.code}</span>
                      </>
                    )}
                  </h3>
                  <ul>
                    {zone.cities.map((city) => {
                      const slug = ZONE_SLUGS[city];
                      const href = slug && isImplemented(slug) ? `/${slug}` : "#devis";
                      return (
                        <li key={city}>
                          <a href={href} data-cp={zone.code} title={`Lavage de tapis à ${city}`}>
                            {city}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}