// Bloc d'avis de l'atelier partenaire.
// HTML statique : aucun widget tiers, aucune iframe, aucun script externe.
// Aucun balisage schema.org Review ni AggregateRating : les avis proviennent
// de la fiche Google de l'atelier et ne doivent pas être balisés par nos soins.

import {
  GOOGLE_REVIEWS_URL,
  REVIEWS_DISCLAIMER,
  REVIEWS_SUBTITLE,
  REVIEWS_TITLE,
} from "@/lib/local-pages/reviews";
import type { LocalReview } from "@/lib/local-pages/types";

function Stars() {
  return (
    <span className="stars" aria-label="Note de 5 étoiles sur 5">
      <span aria-hidden="true">★★★★★</span>
    </span>
  );
}

export default function ReviewsBlock({ reviews }: { reviews: LocalReview[] }) {
  return (
    <section className="section lp-section reviews" id="avis">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Avis clients</span>
          <h2>{REVIEWS_TITLE}</h2>
          <p className="lede">{REVIEWS_SUBTITLE}</p>
        </div>

        <ul className="review-list">
          {reviews.map((review) => (
            <li className="review" key={review.n}>
              <div className="review-head">
                <b>{review.author}</b>
                <Stars />
                <span className="review-meta">Google · {review.date}</span>
              </div>
              {review.text.split(" / ").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </li>
          ))}
        </ul>

        <p className="review-cta">
          <a className="btn btn-teal" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener">
            Voir tous les avis sur Google
          </a>
        </p>
        <p className="review-note">{REVIEWS_DISCLAIMER}</p>
      </div>
    </section>
  );
}