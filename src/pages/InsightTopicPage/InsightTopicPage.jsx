import { useLayoutEffect, useMemo, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Lightbulb,
  MoveDown,
  Orbit,
  Sparkles,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import "./InsightTopicPage.css";

gsap.registerPlugin(ScrollTrigger);

const topicPaths = new Set([
  "/insights/ai-automation",
  "/insights/software-product",
  "/insights/seo-growth",
  "/insights/design-conversion",
]);

const chapterDescriptions = [
  "Frame the real decision before tools, channels, or tactics enter the conversation.",
  "Read the surrounding system so the recommendation fits the people, workflow, and constraints.",
  "Turn the idea into a practical move that can be tested without creating unnecessary risk.",
  "Use evidence from real behavior to sharpen the next decision and keep momentum useful.",
];

const TopicContent = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const chapters = page.capabilities.slice(0, 4);

  const related = useMemo(
    () =>
      Object.entries(page.section.entries)
        .filter(
          ([path]) =>
            path !== pathname && topicPaths.has(path),
        )
        .slice(0, 3),
    [page.section.entries, pathname],
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    document.body.classList.add("insight-topic-page-active");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return () => {
        document.body.classList.remove("insight-topic-page-active");
      };
    }

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".insight-topic-back", {
          autoAlpha: 0,
          x: -22,
          duration: 0.5,
        })
        .from(
          ".insight-topic-kicker",
          { autoAlpha: 0, y: 18, duration: 0.5 },
          "-=0.25",
        )
        .from(
          ".insight-topic-title-line",
          {
            yPercent: 115,
            duration: 0.9,
            stagger: 0.07,
          },
          "-=0.25",
        )
        .from(
          ".insight-topic-lead, .insight-topic-actions",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.65,
            stagger: 0.1,
          },
          "-=0.52",
        )
        .from(
          ".insight-topic-constellation",
          {
            autoAlpha: 0,
            scale: 0.86,
            rotateY: -12,
            duration: 1,
          },
          "-=0.82",
        );

      gsap.to(".insight-topic-hero-grid", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-topic-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".insight-topic-constellation", {
        yPercent: 14,
        rotateY: 8,
        rotateX: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-topic-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".insight-topic-principle", {
        autoAlpha: 0,
        y: 24,
        duration: 0.62,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-topic-principles",
          start: "top 87%",
          once: true,
        },
      });

      gsap.from(".insight-topic-lab-copy > *", {
        autoAlpha: 0,
        y: 34,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-topic-lab",
          start: "top 73%",
          once: true,
        },
      });

      gsap.from(".insight-topic-related-card", {
        autoAlpha: 0,
        y: 45,
        rotateX: 5,
        scale: 0.96,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-topic-related-grid",
          start: "top 84%",
          once: true,
        },
      });

      mm.add("(min-width: 1025px)", () => {
        const stage = root.querySelector(".insight-topic-chapter-stage");
        const cards = gsap.utils.toArray(
          ".insight-topic-chapter-card",
          root,
        );
        const steps = gsap.utils.toArray(
          ".insight-topic-chapter-step",
          root,
        );
        const progress = root.querySelector(
          ".insight-topic-chapter-progress",
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
            end: () => `+=${Math.max(2500, cards.length * 860)}`,
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
                z: (cardIndex) => -90 * (index - cardIndex),
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

          if (steps[index]) {
            timeline.to(
              steps[index],
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
        gsap.from(".insight-topic-chapter-card", {
          autoAlpha: 0,
          y: 48,
          scale: 0.96,
          duration: 0.72,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insight-topic-chapter-cards",
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
      document.body.classList.remove("insight-topic-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="insight-topic-page">
      <section className="insight-topic-hero">
        <div className="insight-topic-hero-grid" aria-hidden="true" />
        <div className="insight-topic-hero-glow" aria-hidden="true" />

        <div className="insight-topic-container insight-topic-hero-layout">
          <div className="insight-topic-copy">
            <Link className="insight-topic-back" to="/insights">
              <ArrowLeft /> All insights
            </Link>

            <p className="insight-topic-kicker">
              <Sparkles /> Topic insight
            </p>

            <h1 aria-label={page.title}>
              {page.title.split(" ").map((word, index) => (
                <span
                  className="insight-topic-title-mask"
                  key={`${word}-${index}`}
                >
                  <span className="insight-topic-title-line">
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </h1>

            <p className="insight-topic-lead">{page.statement}</p>

            <div className="insight-topic-actions">
              <a
                className="insight-topic-button insight-topic-button--primary"
                href="#topic-chapters"
              >
                Explore the thinking <MoveDown />
              </a>

              <Link
                className="insight-topic-button insight-topic-button--secondary"
                to="/contact"
              >
                Talk to an expert <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div
            className="insight-topic-constellation"
            aria-label={`${page.title} knowledge constellation`}
          >
            <div className="insight-topic-constellation-head">
              <span>
                <i /> Live knowledge map
              </span>
              <small>QueLogics</small>
            </div>

            <div className="insight-topic-constellation-stage">
              <span className="insight-topic-constellation-grid" />
              <span className="insight-topic-constellation-scan" />
              <span className="insight-topic-orbit insight-topic-orbit--one" />
              <span className="insight-topic-orbit insight-topic-orbit--two" />
              <span className="insight-topic-orbit insight-topic-orbit--three" />

              <div className="insight-topic-core">
                <Lightbulb />
                <small>Useful insight</small>
                <strong>Decision clarity</strong>
              </div>

              {chapters.slice(0, 3).map((chapter, index) => (
                <span
                  className={`insight-topic-node insight-topic-node--${
                    index + 1
                  }`}
                  key={chapter}
                >
                  <b>0{index + 1}</b>
                  {chapter}
                </span>
              ))}

              <i className="insight-topic-particle insight-topic-particle--one" />
              <i className="insight-topic-particle insight-topic-particle--two" />
              <i className="insight-topic-particle insight-topic-particle--three" />
            </div>
          </div>
        </div>
      </section>

      <section className="insight-topic-principles">
        <div className="insight-topic-container">
          {page.section.proof.map((item) => (
            <span className="insight-topic-principle" key={item}>
              <CheckCircle2 /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="insight-topic-chapters" id="topic-chapters">
        <div className="insight-topic-chapter-stage">
          <div className="insight-topic-container">
            <div className="insight-topic-chapter-heading">
              <p className="insight-topic-kicker">
                <CircleDot /> Four useful lenses
              </p>
              <h2>
                Read the pattern.
                <span> Make the next decision clearer.</span>
              </h2>
              <p>
                Each chapter isolates one part of the decision, then reconnects
                it to the wider system so the advice stays practical.
              </p>
            </div>

            <div className="insight-topic-chapter-layout">
              <div className="insight-topic-chapter-visual" aria-hidden="true">
                <div className="insight-topic-chapter-core">
                  <Orbit />
                  <small>QueLogics</small>
                  <strong>Insight system</strong>
                </div>
                <span className="insight-topic-chapter-orbit insight-topic-chapter-orbit--one" />
                <span className="insight-topic-chapter-orbit insight-topic-chapter-orbit--two" />
                <span className="insight-topic-chapter-beam" />
              </div>

              <div className="insight-topic-chapter-navigation">
                <span className="insight-topic-chapter-track">
                  <i className="insight-topic-chapter-progress" />
                </span>
                {chapters.map((chapter, index) => (
                  <span
                    className="insight-topic-chapter-step"
                    key={chapter}
                  >
                    0{index + 1}
                  </span>
                ))}
              </div>

              <div className="insight-topic-chapter-cards">
                {chapters.map((chapter, index) => (
                  <article
                    className="insight-topic-chapter-card"
                    style={{ "--topic-card-index": index }}
                    key={chapter}
                  >
                    <div className="insight-topic-chapter-card-head">
                      <span>0{index + 1}</span>
                      <ArrowUpRight />
                    </div>
                    <p>Insight chapter</p>
                    <h3>{chapter}</h3>
                    <p>{chapterDescriptions[index]}</p>
                    <div className="insight-topic-chapter-signal">
                      <i /> Connected to practical action
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-topic-lab">
        <div className="insight-topic-lab-grid" aria-hidden="true" />
        <div className="insight-topic-container insight-topic-lab-layout">
          <div className="insight-topic-lab-copy">
            <p className="insight-topic-kicker">
              <Sparkles /> Evidence lab
            </p>
            <h2>{page.outcome}</h2>
            <p>
              Useful insight does more than describe a trend. It helps a team
              frame the tradeoff, choose a sensible next move, and know what to
              watch after acting.
            </p>
            <Link to="/contact">
              Apply this to your business <ArrowUpRight />
            </Link>
          </div>

          <div className="insight-topic-lab-visual" aria-hidden="true">
            <span className="insight-topic-lab-scan" />
            <svg viewBox="0 0 560 320" role="img" aria-label="Animated evidence curve">
              <path className="insight-topic-chart-grid" d="M40 250H520M40 190H520M40 130H520M40 70H520" />
              <path
                className="insight-topic-chart-line"
                d="M45 250 C110 235 125 180 190 195 S285 115 350 135 S430 58 515 72"
              />
              <circle cx="190" cy="195" r="7" />
              <circle cx="350" cy="135" r="7" />
              <circle cx="515" cy="72" r="7" />
            </svg>
            <span className="insight-topic-lab-label insight-topic-lab-label--one">Observe</span>
            <span className="insight-topic-lab-label insight-topic-lab-label--two">Frame</span>
            <span className="insight-topic-lab-label insight-topic-lab-label--three">Act</span>
          </div>
        </div>
      </section>

      <section className="insight-topic-related">
        <div className="insight-topic-container">
          <div className="insight-topic-related-heading">
            <div>
              <p className="insight-topic-kicker">Keep exploring</p>
              <h2>Related insight topics</h2>
            </div>
            <Link to="/insights">
              View all insights <ArrowRight />
            </Link>
          </div>

          <div className="insight-topic-related-grid">
            {related.map(([path, item], index) => (
              <Link
                className="insight-topic-related-card"
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

const InsightTopicPage = () => {
  const { pathname } = useLocation();

  if (!topicPaths.has(pathname)) {
    return <Navigate to="/insights" replace />;
  }

  const page = findSectionDetailContent("insights", pathname);

  if (!page) {
    return <Navigate to="/insights" replace />;
  }

  return <TopicContent page={page} pathname={pathname} />;
};

export default InsightTopicPage;
