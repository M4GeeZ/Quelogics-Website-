import { useLayoutEffect, useMemo, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Layers3,
  MoveDown,
  Quote,
  Sparkles,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import "./InsightExplorePage.css";

gsap.registerPlugin(ScrollTrigger);

const explorePaths = new Set([
  "/case-studies",
  "/client-reviews",
  "/portfolio",
]);

const routeMeta = {
  "/case-studies": {
    eyebrow: "Explore real delivery",
    visualLabel: "Case study system",
    stageLabel: "From challenge to working system",
    sectionTitle: "Three views of the work.",
    sectionAccent: "One connected delivery story.",
    itemLabel: "Case-study lens",
  },
  "/client-reviews": {
    eyebrow: "Explore client perspective",
    visualLabel: "Partnership signals",
    stageLabel: "What strong collaboration feels like",
    sectionTitle: "Themes clients value.",
    sectionAccent: "Made visible without the noise.",
    itemLabel: "Feedback theme",
  },
  "/portfolio": {
    eyebrow: "Explore selected work",
    visualLabel: "Portfolio system",
    stageLabel: "Products, platforms, and experiences",
    sectionTitle: "Different challenges.",
    sectionAccent: "The same care in delivery.",
    itemLabel: "Work category",
  },
};

const itemDescriptions = [
  "Understand the context, constraints, and decision that shaped the work before delivery began.",
  "See how strategy, experience, technology, and operations were connected around the result.",
  "Follow the evidence, learning, and quality decisions that kept progress visible throughout delivery.",
  "Read the outcome as a system improvement rather than a disconnected feature or campaign.",
];

const ExploreContent = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const meta = routeMeta[pathname];
  const items = page.capabilities.slice(0, 4);

  const related = useMemo(
    () =>
      Object.entries(page.section.entries)
        .filter(([path]) => path !== pathname && explorePaths.has(path))
        .slice(0, 2),
    [page.section.entries, pathname],
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    document.body.classList.add("insight-explore-page-active");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return () => {
        document.body.classList.remove("insight-explore-page-active");
      };
    }

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".insight-explore-back", {
          autoAlpha: 0,
          x: -22,
          duration: 0.5,
        })
        .from(
          ".insight-explore-kicker",
          { autoAlpha: 0, y: 18, duration: 0.5 },
          "-=0.25",
        )
        .from(
          ".insight-explore-title-line",
          {
            yPercent: 115,
            duration: 0.9,
            stagger: 0.07,
          },
          "-=0.25",
        )
        .from(
          ".insight-explore-lead, .insight-explore-actions",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.65,
            stagger: 0.1,
          },
          "-=0.52",
        )
        .from(
          ".insight-explore-gallery",
          {
            autoAlpha: 0,
            scale: 0.88,
            rotateY: -11,
            duration: 1.02,
          },
          "-=0.82",
        );

      gsap.to(".insight-explore-hero-grid", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-explore-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".insight-explore-gallery", {
        yPercent: 14,
        rotateY: 8,
        rotateX: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-explore-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".insight-explore-proof-item", {
        autoAlpha: 0,
        y: 22,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-explore-proof",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".insight-explore-result-copy > *", {
        autoAlpha: 0,
        y: 34,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-explore-result",
          start: "top 74%",
          once: true,
        },
      });

      gsap.from(".insight-explore-related-card", {
        autoAlpha: 0,
        y: 42,
        scale: 0.96,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-explore-related-grid",
          start: "top 84%",
          once: true,
        },
      });

      mm.add("(min-width: 1025px)", () => {
        const stage = root.querySelector(".insight-explore-story-stage");
        const cards = gsap.utils.toArray(
          ".insight-explore-story-card",
          root,
        );
        const markers = gsap.utils.toArray(
          ".insight-explore-story-marker",
          root,
        );
        const progress = root.querySelector(
          ".insight-explore-story-progress",
        );

        if (!stage || !cards.length || !progress) return undefined;

        gsap.set(cards, {
          y: () => window.innerHeight * 0.68,
          autoAlpha: 0,
          scale: 0.9,
          rotateX: 12,
          z: 0,
          transformOrigin: "50% 100%",
        });

        gsap.set(progress, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top top+=82",
            end: () => `+=${Math.max(2500, cards.length * 850)}`,
            pin: true,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          const at = index * 1.5;

          if (index > 0) {
            timeline.to(
              cards.slice(0, index),
              {
                y: (cardIndex) => -18 * (index - cardIndex),
                z: (cardIndex) => -92 * (index - cardIndex),
                scale: (cardIndex) =>
                  Math.max(0.86, 1 - 0.035 * (index - cardIndex)),
                rotateX: -2,
                filter: (cardIndex) =>
                  `brightness(${Math.max(
                    0.74,
                    1 - 0.08 * (index - cardIndex),
                  )})`,
                duration: 0.78,
                ease: "power2.inOut",
              },
              at,
            );
          }

          timeline
            .to(
              card,
              {
                y: 0,
                z: 0,
                autoAlpha: 1,
                scale: 1,
                rotateX: 0,
                filter: "brightness(1)",
                duration: 0.92,
                ease: "power3.out",
              },
              at,
            )
            .to(
              progress,
              {
                scaleY: (index + 1) / cards.length,
                duration: 0.85,
                ease: "power2.inOut",
              },
              at,
            );

          if (markers[index]) {
            timeline.to(
              markers[index],
              {
                color: "#030821",
                backgroundColor: "#22ce68",
                borderColor: "#22ce68",
                scale: 1.08,
                duration: 0.32,
              },
              at + 0.25,
            );
          }

          timeline.to({}, { duration: 0.42 });
        });

        return undefined;
      });

      mm.add("(max-width: 1024px)", () => {
        gsap.from(".insight-explore-story-card", {
          autoAlpha: 0,
          y: 48,
          scale: 0.96,
          duration: 0.72,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insight-explore-story-cards",
            start: "top 84%",
            once: true,
          },
        });
      });
    }, root);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 180);

    return () => {
      window.clearTimeout(refreshTimer);
      mm.revert();
      ctx.revert();
      document.body.classList.remove("insight-explore-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="insight-explore-page">
      <section className="insight-explore-hero">
        <div className="insight-explore-hero-grid" aria-hidden="true" />
        <div className="insight-explore-hero-glow" aria-hidden="true" />

        <div className="insight-explore-container insight-explore-hero-layout">
          <div className="insight-explore-copy">
            <Link className="insight-explore-back" to="/insights">
              <ArrowLeft /> All insights
            </Link>

            <p className="insight-explore-kicker">
              <Sparkles /> {meta.eyebrow}
            </p>

            <h1 aria-label={page.title}>
              {page.title.split(" ").map((word, index) => (
                <span
                  className="insight-explore-title-mask"
                  key={`${word}-${index}`}
                >
                  <span className="insight-explore-title-line">
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </h1>

            <p className="insight-explore-lead">{page.statement}</p>

            <div className="insight-explore-actions">
              <a
                className="insight-explore-button insight-explore-button--primary"
                href="#explore-story"
              >
                Explore the page <MoveDown />
              </a>
              <Link
                className="insight-explore-button insight-explore-button--secondary"
                to="/contact"
              >
                Start a conversation <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div
            className="insight-explore-gallery"
            aria-label={meta.visualLabel}
          >
            <div className="insight-explore-gallery-head">
              <span>
                <i /> {meta.visualLabel}
              </span>
              <small>Live</small>
            </div>

            <div className="insight-explore-gallery-stage">
              <span className="insight-explore-gallery-grid" />
              <span className="insight-explore-gallery-scan" />

              {items.slice(0, 3).map((item, index) => (
                <article
                  className={`insight-explore-tile insight-explore-tile--${
                    index + 1
                  }`}
                  key={item}
                >
                  <span>0{index + 1}</span>
                  {pathname === "/client-reviews" ? <Quote /> : <Layers3 />}
                  <h3>{item}</h3>
                  <i />
                  <i />
                </article>
              ))}

              <span className="insight-explore-particle insight-explore-particle--one" />
              <span className="insight-explore-particle insight-explore-particle--two" />
              <span className="insight-explore-particle insight-explore-particle--three" />
            </div>
          </div>
        </div>
      </section>

      <section className="insight-explore-proof">
        <div className="insight-explore-container">
          {page.section.proof.map((item) => (
            <span className="insight-explore-proof-item" key={item}>
              <CheckCircle2 /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="insight-explore-story" id="explore-story">
        <div className="insight-explore-story-stage">
          <div className="insight-explore-container">
            <div className="insight-explore-story-heading">
              <p className="insight-explore-kicker">
                <CircleDot /> {meta.stageLabel}
              </p>
              <h2>
                {meta.sectionTitle}
                <span> {meta.sectionAccent}</span>
              </h2>
              <p>
                Move through the page one layer at a time. Each view keeps the
                context, delivery decisions, and intended result connected.
              </p>
            </div>

            <div className="insight-explore-story-layout">
              <div className="insight-explore-story-visual" aria-hidden="true">
                <div className="insight-explore-story-core">
                  <Layers3 />
                  <small>QueLogics</small>
                  <strong>Connected work</strong>
                </div>
                <span className="insight-explore-story-orbit insight-explore-story-orbit--one" />
                <span className="insight-explore-story-orbit insight-explore-story-orbit--two" />
                <span className="insight-explore-story-beam" />
              </div>

              <div className="insight-explore-story-navigation">
                <span className="insight-explore-story-track">
                  <i className="insight-explore-story-progress" />
                </span>
                {items.map((item, index) => (
                  <span className="insight-explore-story-marker" key={item}>
                    0{index + 1}
                  </span>
                ))}
              </div>

              <div className="insight-explore-story-cards">
                {items.map((item, index) => (
                  <article
                    className="insight-explore-story-card"
                    style={{ "--explore-card-index": index }}
                    key={item}
                  >
                    <div className="insight-explore-story-card-head">
                      <span>0{index + 1}</span>
                      <ArrowUpRight />
                    </div>
                    <p>{meta.itemLabel}</p>
                    <h3>{item}</h3>
                    <p>{itemDescriptions[index]}</p>
                    <div className="insight-explore-story-signal">
                      <i /> Context stays connected
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-explore-result">
        <div className="insight-explore-result-grid" aria-hidden="true" />
        <div className="insight-explore-container insight-explore-result-layout">
          <div className="insight-explore-result-copy">
            <p className="insight-explore-kicker">
              <Sparkles /> What becomes visible
            </p>
            <h2>{page.outcome}</h2>
            <p>
              The value is not only in seeing the finished result. It is in
              understanding the decisions, collaboration, and operating system
              that made the result dependable.
            </p>
            <Link to="/contact">
              Discuss a similar challenge <ArrowUpRight />
            </Link>
          </div>

          <div className="insight-explore-result-system" aria-hidden="true">
            <span className="insight-explore-result-ring insight-explore-result-ring--one" />
            <span className="insight-explore-result-ring insight-explore-result-ring--two" />
            <div className="insight-explore-result-core">
              <strong>Q+</strong>
              <small>Visible value</small>
            </div>
            <span className="insight-explore-result-node insight-explore-result-node--one">Context</span>
            <span className="insight-explore-result-node insight-explore-result-node--two">Craft</span>
            <span className="insight-explore-result-node insight-explore-result-node--three">Outcome</span>
          </div>
        </div>
      </section>

      <section className="insight-explore-related">
        <div className="insight-explore-container">
          <div className="insight-explore-related-heading">
            <div>
              <p className="insight-explore-kicker">Continue exploring</p>
              <h2>More from the Explore collection</h2>
            </div>
            <Link to="/insights">
              View all insights <ArrowRight />
            </Link>
          </div>

          <div className="insight-explore-related-grid">
            {related.map(([path, item], index) => (
              <Link
                className="insight-explore-related-card"
                to={path}
                key={path}
              >
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.statement}</p>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const InsightExplorePage = () => {
  const { pathname } = useLocation();

  if (!explorePaths.has(pathname)) {
    return <Navigate to="/insights" replace />;
  }

  const page = findSectionDetailContent("insights", pathname);

  if (!page) {
    return <Navigate to="/insights" replace />;
  }

  return <ExploreContent page={page} pathname={pathname} />;
};

export default InsightExplorePage;
