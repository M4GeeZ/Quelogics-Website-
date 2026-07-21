import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CalendarDays, UserRound } from "lucide-react";
import "./clientReviews.css";

gsap.registerPlugin(ScrollTrigger);

const AUTO_PLAY_DELAY = 3800;

const reviews = [
  {
    id: "bilal-ahmed",
    tileIndex: 17,
    initials: "BA",
    variant: "initials",
    before: "Cost per lead down ",
    highlight: "42%",
    after: " with the new campaigns.",
    name: "Bilal Ahmed",
    role: "Growth Lead, NorthBridge",
    country: "UK",
    position: { x: 12, y: 34 },
  },
  {
    id: "sara-khalid",
    tileIndex: 2,
    initials: "SK",
    variant: "avatar",
    before: "Working prototype ",
    highlight: "in weeks, not slides.",
    after: " Paid for itself in five months.",
    name: "Sara Khalid",
    role: "Head of Digital, Najm Logistics",
    country: "KSA",
    position: { x: 38, y: 2 },
  },
  {
    id: "daniel-roth",
    tileIndex: 8,
    initials: "DR",
    variant: "avatar",
    before: "From spreadsheet chaos to one system. ",
    highlight: "No vendor lock-in,",
    after: " as promised.",
    name: "Daniel Roth",
    role: "Managing Director, Roth Estates",
    country: "Czechia",
    position: { x: 14, y: 11 },
  },
  {
    id: "hiba-patel",
    tileIndex: 14,
    initials: "HP",
    variant: "initials",
    before: "Our release cycle is now ",
    highlight: "3× faster",
    after: " without compromising quality.",
    name: "Hiba Patel",
    role: "Product Director, Atlas Health",
    country: "UAE",
    position: { x: 31, y: 18 },
  },
  {
    id: "chris-morgan",
    tileIndex: 15,
    initials: "CM",
    variant: "initials",
    before: "One connected team helped us move from idea to ",
    highlight: "market leader.",
    after: "",
    name: "Chris Morgan",
    role: "Founder, Meridian Commerce",
    country: "USA",
    position: { x: 18, y: 33 },
  },
];

const decorativeAvatars = new Set([0, 4, 6, 10, 12, 23, 27]);
const decorativeInitials = new Map([
  [18, "BA"],
  [20, "BA"],
  [21, "BA"],
  [24, "BA"],
  [26, "BA"],
  [29, "BA"],
]);

const ReviewTile = ({ index, activeIndex, onSelect }) => {
  const reviewIndex = reviews.findIndex((review) => review.tileIndex === index);
  const review = reviewIndex >= 0 ? reviews[reviewIndex] : null;
  const decorativeInitial = decorativeInitials.get(index);
  const isAvatar = review?.variant === "avatar" || decorativeAvatars.has(index);
  const isInitials = review?.variant === "initials" || Boolean(decorativeInitial);
  const isActive = reviewIndex === activeIndex;

  const content = isInitials ? (
    <span className="client-review-tile-initials">
      {review?.initials || decorativeInitial}
    </span>
  ) : isAvatar ? (
    <span className="client-review-avatar" aria-hidden="true">
      <i></i>
      <b></b>
    </span>
  ) : (
    <UserRound aria-hidden="true" />
  );

  if (review) {
    return (
      <button
        className={`client-review-tile is-review is-${review.variant}${isActive ? " is-active" : ""}`}
        type="button"
        aria-label={`Show review from ${review.name}`}
        aria-pressed={isActive}
        onClick={() => onSelect(reviewIndex)}
      >
        {content}
      </button>
    );
  }

  return (
    <div
      className={`client-review-tile${isAvatar ? " is-avatar" : ""}${isInitials ? " is-initials" : " is-placeholder"}`}
      aria-hidden="true"
    >
      {content}
    </div>
  );
};

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const activeReview = reviews[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".client-reviews-copy > *", {
        y: 42,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-reviews-section",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".client-review-tile", {
        y: 28,
        opacity: 0,
        scale: 0.88,
        duration: 0.65,
        stagger: {
          amount: 0.7,
          grid: "auto",
          from: "random",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-reviews-visual",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".client-review-floating-card", {
        opacity: 0,
        duration: 0.85,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".client-reviews-visual",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const selectReview = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="client-reviews-section" id="client-reviews" ref={sectionRef}>
      <div className="client-reviews-shell">
        <div className="client-reviews-copy">
          <span className="client-reviews-eyebrow">After Quelogics</span>
          <h2>
            Less busywork. More room for <em>growth.</em>
          </h2>
          <p className="client-reviews-intro">
            Before Quelogics: disconnected tools, slow approvals, and reports
            rebuilt by hand. After Quelogics: one connected system that gives
            teams back the time to sell, serve, and scale.
          </p>

          <div className="client-reviews-actions">
            <div className="client-reviews-action-row">
              <div>
                <h3>Show us the bottleneck</h3>
                <p>
                  Tell us the painful manual task your team repeats every week.
                  We&apos;ll show you how to eliminate it.
                </p>
              </div>
              <a href="/contact">
                Let&apos;s talk
                <CalendarDays aria-hidden="true" />
              </a>
            </div>

            <div className="client-reviews-action-row">
              <div>
                <h3>See systems in production</h3>
                <p>Real products replacing busywork with measurable momentum.</p>
              </div>
              <a href="/case-studies">
                View work
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="client-reviews-visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="client-reviews-grid">
            {Array.from({ length: 32 }, (_, index) => (
              <ReviewTile
                index={index}
                activeIndex={activeIndex}
                onSelect={selectReview}
                key={index}
              />
            ))}
          </div>

          <article
            className="client-review-floating-card"
            style={{
              "--review-card-x": `${activeReview.position.x}%`,
              "--review-card-y": `${activeReview.position.y}%`,
            }}
            aria-live="polite"
          >
            <div className="client-review-floating-inner" key={activeReview.id}>
              <div className="client-review-card-topline">
                <span aria-hidden="true">“</span>
                <div aria-label="5 out of 5 stars">★★★★★</div>
              </div>

              <blockquote>
                “{activeReview.before}
                <strong>{activeReview.highlight}</strong>
                {activeReview.after}”
              </blockquote>

              <footer>
                <span className="client-review-author-avatar">
                  {activeReview.initials}
                </span>
                <span>
                  <strong>{activeReview.name}</strong>
                  <small>
                    {activeReview.role} · {activeReview.country}
                  </small>
                </span>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
