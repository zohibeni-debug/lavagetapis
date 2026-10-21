// Gabarit d'une page de lieu (arrondissement ou ville).
// Le contenu vient de lib/local-pages ; l'ordre des sections 3 à 9 est propre
// à chaque page (page.order), le hero, le formulaire et les zones voisines
// gardent toujours la même place.

import type { ReactNode } from "react";

import MobileCta from "@/components/mobile-cta";
import QuoteForm from "@/components/quote-form";
import ReviewsBlock from "@/components/reviews-block";
import RugSymbol from "@/components/rug-symbol";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteScripts from "@/components/site-scripts";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";
import { isImplemented, SITE_URL } from "@/lib/local-pages";
import { PRICE_NOTE, PRICE_ROWS, formatFrenchDate } from "@/lib/local-pages/prices";
import type { LocalPage, SectionKey } from "@/lib/local-pages/types";
import { localPageJsonLd } from "@/lib/local-jsonld";

function whatsappHref(message: string) {
  return `https://wa.me/33762870707?text=${encodeURIComponent(message)}`;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section lp-section">
      <div className="wrap">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function LocalPageView({ page }: { page: LocalPage }) {
  const url = `${SITE_URL}/${page.slug}`;

  const sections: Record<SectionKey, ReactNode> = {
    types: (
      <Section key="types" title={page.types.title}>
        <p className="lp-intro">{page.types.intro}</p>
        <ul className="lp-list">
          {page.types.items.map((item) => (
            <li key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    ),
    stains: (
      <Section key="stains" title={page.stains.title}>
        <p className="lp-intro">{page.stains.intro}</p>
        <ul className="lp-list">
          {page.stains.items.map((item) => (
            <li key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    ),
    workshop: (
      <Section key="workshop" title={page.workshop.title}>
        <p className="lp-intro">{page.workshop.intro}</p>
        <ol className="steps">
          {page.workshop.steps.map((step, index) => (
            <li key={step.name}>
              <span className="n" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    ),
    prices: (
      <Section key="prices" title={page.prices.title}>
        <p className="lp-intro">{page.prices.intro}</p>
        <table className="price-table">
          <caption className="visually-hidden">
            Tarifs indicatifs du lavage de tapis à {page.place}, au mètre carré
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
          {page.prices.examples.map((example) => (
            <li key={example.label}>
              <b>{example.label}</b>
              <p className="calc">{example.detail}</p>
              <p className="total">{example.price}</p>
            </li>
          ))}
        </ul>
        <p className="lp-note">{PRICE_NOTE}</p>
        <p className="lp-note">{page.prices.note}</p>
      </Section>
    ),
    reviews: <ReviewsBlock key="reviews" reviews={page.reviews} />,
    areas: (
      <Section key="areas" title={page.areas.title}>
        <p className="lp-intro">{page.areas.intro}</p>
        <ul className="lp-chips">
          {page.areas.list.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        {page.areas.outro ? <p className="lp-note">{page.areas.outro}</p> : null}
      </Section>
    ),
    faq: (
      <Section key="faq" title="Questions fréquentes">
        <div className="faq">
          {page.faq.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <div className="a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>
    ),
  };

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
                <li>
                  {isImplemented(page.hubSlug) ? (
                    <a href={`/${page.hubSlug}`}>{page.hubLabel}</a>
                  ) : (
                    page.hubLabel
                  )}
                </li>
                <li aria-current="page">{page.place}</li>
              </ol>
            </nav>
            <span className="eyebrow">
              {page.kind === "arrondissement" ? "Arrondissement" : "Ville"} · {page.postal.join(" / ")}
            </span>
            <h1>{page.h1}</h1>
            {page.hero.lead.map((paragraph) => (
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
                href={whatsappHref(page.hero.whatsapp)}
                target="_blank"
                rel="noopener"
                data-conversion="whatsapp"
                data-page={page.slug}
              >
                Écrire sur WhatsApp
              </a>
              <a
                className="btn btn-ghost"
                href={PHONE_HREF}
                data-conversion="telephone"
                data-page={page.slug}
              >
                Appeler le {PHONE_DISPLAY}
              </a>
            </p>
            <ul className="facts">
              {page.hero.reassurance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="lp-updated">Mis à jour le {formatFrenchDate(page.updated)}</p>
          </div>
        </section>

        <section className="section lp-section">
          <div className="wrap">
            <h2>{page.how.title}</h2>
            <div className="lp-prose">
              {page.how.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="lp-chips">
              {page.how.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="dyk">
              <b>Le saviez-vous ?</b>
              {page.didYouKnow}
            </p>
          </div>
        </section>

        {page.order.map((key) => sections[key])}

        <QuoteForm defaultPostal={page.postal[0]} origin={page.slug} />

        <section className="section lp-section">
          <div className="wrap">
            <h2>Zones voisines</h2>
            <p className="lp-intro">
              Nous organisons l'enlèvement et la livraison dans les secteurs proches de {page.place}.
            </p>
            <ul className="neighbours">
              {page.neighbours.map((item) => (
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
            <p className="lp-note">
              Pour aller plus loin : consultez{" "}
              <a href="/#prix">les tarifs du lavage au m²</a> et{" "}
              <a href="/#types">les types de tapis</a> traités par les ateliers partenaires.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localPageJsonLd(page)) }}
      />
      <SiteScripts />
    </>
  );
}
