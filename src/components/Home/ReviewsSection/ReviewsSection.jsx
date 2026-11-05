import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import "./ReviewsSection.css";

const reviews = [
  {
    id: "hiba-patel",
    initials: "HP",
    quote:
      "Our release cycle is now 3× faster without compromising quality. The team understood our product quickly and kept us informed at every step.",
    name: "Hiba Patel",
    role: "Product Director, Atlas Health",
    country: "UAE",
  },
  {
    id: "bilal-ahmed",
    initials: "BA",
    quote:
      "Cost per lead is down 42% with the new campaigns. Reporting is finally clear, so we know exactly which channels are driving revenue.",
    name: "Bilal Ahmed",
    role: "Growth Lead, NorthBridge",
    country: "UK",
  },
  {
    id: "sara-khalid",
    initials: "SK",
    quote:
      "We had a working prototype in weeks, not slides. The platform paid for itself in five months and our operations team actually enjoys using it.",
    name: "Sara Khalid",
    role: "Head of Digital, Najm Logistics",
    country: "KSA",
  },
  {
    id: "daniel-roth",
    initials: "DR",
    quote:
      "We moved from spreadsheet chaos to one connected system. No vendor lock-in, exactly as promised, and a handover our team could own.",
    name: "Daniel Roth",
    role: "Managing Director, Roth Estates",
    country: "Czechia",
  },
  {
    id: "chris-morgan",
    initials: "CM",
    quote:
      "One connected team helped us move from idea to market leader. Strategy, design, and engineering all spoke the same language.",
    name: "Chris Morgan",
    role: "Founder, Meridian Commerce",
    country: "USA",
  },
];

const highlights = [
  ["Clear communication", "Weekly updates and one point of contact."],
  ["Measurable outcomes", "Every project tied to a business goal."],
  ["Long-term partnership", "Support that continues after launch."],
];

const ReviewsSection = () => {
  const [start, setStart] = useState(0);
  const total = reviews.length;
  const go = (step) => setStart((current) => (current + step + total) % total);

  // Two cards are visible on desktop; the CSS hides the second one on small screens.
  const visible = [reviews[start], reviews[(start + 1) % total]];

  return (
    <section className="rv-section" aria-labelledby="rv-heading">
      <div className="rv-shell">
        <div className="rv-intro">
          <span className="rv-eyebrow">Client reviews</span>
          <h2 id="rv-heading">
            Reviews that <em>speak volumes.</em>
          </h2>
          <p>
            Here is what founders, product leaders, and operators say about
            working with QueLogics.
          </p>

          <ul className="rv-highlights">
            {highlights.map(([title, detail]) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <Link to="/client-reviews" className="rv-all">
            Read all reviews
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="rv-slider">
          <div className="rv-cards" aria-live="polite">
            {visible.map((review, index) => (
              <article className={`rv-card${index === 1 ? " rv-card--second" : ""}`} key={review.id}>
                <div className="rv-card-top">
                  <Quote className="rv-quote-mark" aria-hidden="true" />
                  <span className="rv-stars" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} aria-hidden="true" />
                    ))}
                  </span>
                </div>
                <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
                <footer>
                  <span className="rv-avatar" aria-hidden="true">{review.initials}</span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.role} · {review.country}</small>
                  </span>
                </footer>
              </article>
            ))}
          </div>

          <div className="rv-controls">
            <div className="rv-dots" aria-hidden="true">
              {reviews.map((review, index) => (
                <i className={index === start ? "is-active" : ""} key={review.id} />
              ))}
            </div>
            <div className="rv-arrows">
              <button type="button" onClick={() => go(-1)} aria-label="Previous review">
                <ArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next review">
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
