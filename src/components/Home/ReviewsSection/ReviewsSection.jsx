import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Quote, Star } from "lucide-react";
import avatarHiba from "../../../assets/client-avatars/hiba-patel.webp";
import avatarBilal from "../../../assets/client-avatars/bilal-ahmed.webp";
import avatarSara from "../../../assets/client-avatars/sara-khalid.webp";
import avatarDaniel from "../../../assets/client-avatars/daniel-roth.webp";
import avatarChris from "../../../assets/client-avatars/chris-morgan.webp";
import "./ReviewsSection.css";

// `quote` is [before, highlighted result, after]; the middle part is shown in green.
const reviews = [
  {
    id: "hiba-patel",
    avatar: avatarHiba, // Demo portrait; replace with approved client photo when available.
    initials: "HP",
    quote: [
      "Our release cycle is now ",
      "3× faster",
      " without compromising quality. The team understood our product quickly and kept us informed at every step.",
    ],
    name: "Hiba Patel",
    role: "Product Director",
    company: "Atlas Health",
    country: "UAE",
  },
  {
    id: "bilal-ahmed",
    avatar: avatarBilal, // Demo portrait; replace with approved client photo when available.
    initials: "BA",
    quote: [
      "Cost per lead is ",
      "down 42%",
      " with the new campaigns. Reporting is finally clear, so we know exactly which channels are driving revenue.",
    ],
    name: "Bilal Ahmed",
    role: "Growth Lead",
    company: "NorthBridge",
    country: "UK",
  },
  {
    id: "sara-khalid",
    avatar: avatarSara, // Demo portrait; replace with approved client photo when available.
    initials: "SK",
    quote: [
      "We had a working prototype ",
      "in weeks, not slides.",
      " The platform paid for itself in five months and our operations team actually enjoys using it.",
    ],
    name: "Sara Khalid",
    role: "Head of Digital",
    company: "Najm Logistics",
    country: "KSA",
  },
  {
    id: "daniel-roth",
    avatar: avatarDaniel, // Demo portrait; replace with approved client photo when available.
    initials: "DR",
    quote: [
      "We moved from spreadsheet chaos to one connected system. ",
      "No vendor lock-in,",
      " exactly as promised, and a handover our team could own.",
    ],
    name: "Daniel Roth",
    role: "Managing Director",
    company: "Roth Estates",
    country: "Czechia",
  },
  {
    id: "chris-morgan",
    avatar: avatarChris, // Demo portrait; replace with approved client photo when available.
    initials: "CM",
    quote: [
      "One connected team helped us move from idea to ",
      "market leader.",
      " Strategy, design, and engineering all spoke the same language.",
    ],
    name: "Chris Morgan",
    role: "Founder",
    company: "Meridian Commerce",
    country: "USA",
  },
];

const highlights = [
  ["Clear communication", "Weekly updates and one point of contact."],
  ["Measurable outcomes", "Every project tied to a business goal."],
  ["Long-term partnership", "Support that continues after launch."],
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const total = reviews.length;

  // Distance between two cards (card width + gap), re-measured on resize.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      const [first, second] = track.children;
      if (first && second) setStep(second.offsetLeft - first.offsetLeft);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const go = (direction) => setIndex((current) => (current + direction + total) % total);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 45) go(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section className="rv-section" aria-labelledby="rv-heading">
      <div className="rv-shell">
        <div className="rv-intro">
          <span className="rv-eyebrow">Client reviews</span>
          <h2 id="rv-heading">
            Highlighting Our <em>Success Stories</em>
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
          <div
            className="rv-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
            aria-label="Client reviews"
          >
            <div
              className="rv-track"
              ref={trackRef}
              style={{ transform: `translate3d(${-index * step}px, 0, 0)` }}
            >
              {reviews.map((review, position) => {
                const isActive = position === index;
                const [before, highlight, after] = review.quote;

                return (
                  <article
                    className={`rv-card${isActive ? " is-active" : ""}`}
                    aria-roledescription="slide"
                    aria-label={`${position + 1} of ${total}`}
                    aria-hidden={!isActive}
                    key={review.id}
                  >
                    <Quote className="rv-card-watermark" aria-hidden="true" />

                    <div className="rv-card-top">
                      <span className="rv-company">
                        <Building2 aria-hidden="true" />
                        {review.company}
                      </span>
                      <span className="rv-stars" aria-label="Rated 5 out of 5">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} aria-hidden="true" />
                        ))}
                      </span>
                    </div>

                    <blockquote>
                      &ldquo;{before}
                      <mark>{highlight}</mark>
                      {after}&rdquo;
                    </blockquote>

                    <footer>
                      <span className="rv-avatar" aria-hidden="true">
                        {review.initials}
                        <img
                          src={review.avatar}
                          alt=""
                          title="Illustrative portrait — replace with the client’s approved photo"
                          width="260"
                          height="260"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <span className="rv-person">
                        <strong>{review.name}</strong>
                        <small>{review.role}, {review.company} · {review.country}</small>
                      </span>
                    </footer>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rv-controls">
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
