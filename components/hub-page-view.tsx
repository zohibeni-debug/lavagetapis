// Gabarit d'un hub (Paris, Hauts-de-Seine, Val-de-Marne).
// Contenu unique long, puis la grille des pages du hub.

import MobileCta from "@/components/mobile-cta";
import QuoteForm from "@/components/quote-form";
import ReviewsBlock from "@/components/reviews-block";
import RugSymbol from "@/components/rug-symbol";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteScripts from "@/components/site-scripts";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";
import { isImplemented } from "@/lib/local-pages";
import { PRICE_NOTE, PRICE_ROWS, formatFrenchDate } from "@/lib/local-pages/prices";
import type { HubPage } from "@/lib/local-pages/types";
import { hubPageJsonLd } from "@/lib/local-jsonld";

function whatsappHref(message: string) {
  return `https://wa.me/33762870707?text=${encodeURIComponent(message)}`;
}

export default function HubPageView({ hub }: { hub: HubPage }) {
  return (
    <>
      <RugSymbol />
      <SiteHeader anchorPrefix="/" />
      <main id="top">

        <section className="section lp-hero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Fil d'Ariane">
  <ol>
                <li>
                  <a href="/">Accueil</a>
                </li>
                <li aria-current="page">{hub.hubLabel}</li>
              </ol>
            </nav>
            <span className="eyebrow">Hub · {hub.place}</span>
            <h1>{hub.h1}</h1>
            {hub.hero.lead.map((paragraph) => (
              <p className="lede" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <p className="lp-cta">
              <a className="btn btn-sun" href="#devis">
                Devis gratuit
              </a>
              <a
                className="btn btn-ghost"
                href={whatsappHref(hub.hero.whatsapp)}
                target="_blank"
                rel="noopener"
                data-conversion="whatsapp"
                data-page={hub.slug}
              >
                Écrire sur WhatsApp
              </a>
              <a className="btn btn-ghost" href={PHONE_HREF} data-conversion="telephone" data-page={hub.slug}>
                Appeler le {PHONE_DISPLAY}
              </a>
            </p>
            <ul className="facts">
              {hub.hero.reassurance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="lp-updated">Mis à jour le {formatFrenchDate(hub.updated)}</p>
          </div>
        </section>

        <section className="section lp-section">
          <div className="wrap">
            <h2>{hub.intro.title}</h2>
            <div className="lp-prose">
              {hub.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="dyk">
              <b>Le saviez-vous ?</b>
              {hub.didYouKnow}
            </p>
          </div>
        </section>

        <section className="section lp-section">
          <div className="wrap">
            <h2>{hub.how.title}</h2>
            <div className="lp-prose">
              {hub.how.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="lp-chips">
              {hub.how.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section lp-section">
          <div className="wrap">
            <h2>{hub.prices.title}</h2>
            <p className="lp-intro">{hub.prices.intro}</p>
            <table className="price-table">
              <caption className="visually-hidden">
                Tarifs indicatifs du lavage de tapis — {hub.place}, au mètre carré
              </caption>
              <thead>
                <tr>
                  <th scope="col">Type de tapis</th>
                  <th scope="col">Prix au m²</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row) => (
                  <tr key={row.type}>
                    <td>{row.type}</td>
                    <td>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="examples">
              {hub.prices.examples.map((example) => (
                <li key={example.label}>
                  <b>{example.label}</b>
                  <p className="calc">{example.detail}</p>
                  <p className="total">{example.price}</p>
                </li>
              ))}
            </ul>
            <p className="lp-note">{PRICE_NOTE}</p>
            <p className="lp-note">{hub.prices.note}</p>
          </div>
        </section>

        <section className="section lp-section" id="zones">
          <div className="wrap">
            <h2>Lavage de tapis à {hub.place} : les secteurs desservis</h2>
            <p className="lp-intro">
              Choisissez votre arrondissement ou votre commune : chaque page détaille l'enlèvement,
              les tapis concernés et les tarifs.
            </p>
            <ul className="grid-links">
              {hub.children.map((child) => (
                <li key={child.slug}>
                  {isImplemented(child.slug) ? (
                    <a href={`/${child.slug}`}>{child.label}</a>
                  ) : (
                    <span className="todo">{child.label}</span>
                  )}
                  <span>{child.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ReviewsBlock reviews={hub.reviews} />

        <section className="section lp-section">
          <div className="wrap">
            <h2>Questions fréquentes</h2>
            <div className="faq">
              {hub.faq.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary>{item.q}</summary>
                  <div className="a">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm origin={hub.slug} />

        <section className="section lp-section">
          <div className="wrap">
            <h2>Autres zones desservies</h2>
            <ul className="neighbours">
              {hub.neighbours.map((item) => (
                <li key={item.slug}>
                  {isImplemented(item.slug) ? (
                    <a href={`/${item.slug}`} title={item.note}>
                      {item.label}
                    </a>
                  ) : (
                    <span title={item.note}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubPageJsonLd(hub)) }}
      />
      <SiteScripts />
    </>
  );
}