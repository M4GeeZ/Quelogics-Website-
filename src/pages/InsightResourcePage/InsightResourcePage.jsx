import { useLayoutEffect, useMemo, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  CheckCircle2,
  CircleDot,
  FileCheck2,
  Layers3,
  MoveDown,
  Workflow,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import "./InsightResourcePage.css";

gsap.registerPlugin(ScrollTrigger);

const resourcePaths = new Set([
  "/insights/automation-guides",
  "/insights/growth-playbooks",
  "/insights/development-guides",
]);

const moduleDescriptions = [
  "Start with a clear audit so effort is directed toward the highest-value decision or workflow.",
  "Compare the available approaches using practical criteria rather than feature lists or hype.",
  "Turn the preferred route into a staged plan with visible ownership, dependencies, and checks.",
  "Use the final checklist to protect quality, measure progress, and know when to improve the system.",
];

const ResourceContent = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const modules = page.capabilities.slice(0, 4);

  const related = useMemo(
    () =>
      Object.entries(page.section.entries)
        .filter(
          ([path]) =>
            path !== pathname && resourcePaths.has(path),
        )
        .slice(0, 2),
    [page.section.entries, pathname],
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    document.body.classList.add("insight-resource-page-active");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return () => {
        document.body.classList.remove("insight-resource-page-active");
      };
    }

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".insight-resource-back", {
          autoAlpha: 0,
          x: -22,
          duration: 0.5,
        })
        .from(
          ".insight-resource-kicker",
          { autoAlpha: 0, y: 18, duration: 0.5 },
          "-=0.25",
        )
        .from(
          ".insight-resource-title-line",
          {
            yPercent: 115,
            duration: 0.9,
            stagger: 0.07,
          },
          "-=0.25",
        )
        .from(
          ".insight-resource-lead, .insight-resource-actions",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.65,
            stagger: 0.1,
          },
          "-=0.52",
        )
        .from(
          ".insight-resource-stack",
          {
            autoAlpha: 0,
            x: 48,
            rotateY: -10,
            scale: 0.9,
            duration: 1.05,
          },
          "-=0.84",
        );

      gsap.to(".insight-resource-hero-grid", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-resource-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".insight-resource-stack", {
        yPercent: 15,
        rotateY: 8,
        rotateX: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-resource-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".insight-resource-proof-item", {
        autoAlpha: 0,
        y: 22,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-resource-proof",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".insight-resource-checklist-copy > *", {
        autoAlpha: 0,
        y: 32,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-resource-checklist",
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".insight-resource-check", {
        autoAlpha: 0,
        x: 35,
        duration: 0.62,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-resource-checks",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".insight-resource-related-card", {
        autoAlpha: 0,
        y: 42,
        scale: 0.96,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-resource-related-grid",
          start: "top 84%",
          once: true,
        },
      });

      mm.add("(min-width: 1025px)", () => {
        const stage = root.querySelector(".insight-resource-module-stage");
        const cards = gsap.utils.toArray(
          ".insight-resource-module-card",
          root,
        );
        const steps = gsap.utils.toArray(
          ".insight-resource-module-step",
          root,
        );
        const progress = root.querySelector(
          ".insight-resource-module-progress",
        );

        if (!stage || !cards.length || !progress) return undefined;

        gsap.set(cards, {
          x: () => window.innerWidth * 0.5,
          autoAlpha: 0,
          rotateY: -10,
          scale: 0.91,
          z: 0,
          transformOrigin: "100% 50%",
        });

        gsap.set(progress, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top top+=82",
            end: () => `+=${Math.max(2500, cards.length * 840)}`,
            pin: true,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          const at = index * 1.48;

          if (index > 0) {
            timeline.to(
              cards.slice(0, index),
              {
                x: (cardIndex) => -18 * (index - cardIndex),
                z: (cardIndex) => -95 * (index - cardIndex),
                scale: (cardIndex) =>
                  Math.max(0.86, 1 - 0.035 * (index - cardIndex)),
                rotateY: 2,
                filter: (cardIndex) =>
                  `brightness(${Math.max(
                    0.75,
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
                x: 0,
                z: 0,
                autoAlpha: 1,
                rotateY: 0,
                scale: 1,
                filter: "brightness(1)",
                duration: 0.92,
                ease: "power3.out",
              },
              at,
            )
            .to(
              progress,
              {
                scaleX: (index + 1) / cards.length,
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
                scale: 1.06,
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
        gsap.from(".insight-resource-module-card", {
          autoAlpha: 0,
          y: 48,
          scale: 0.96,
          duration: 0.72,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insight-resource-module-cards",
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
      document.body.classList.remove("insight-resource-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="insight-resource-page">
      <section className="insight-resource-hero">
        <div className="insight-resource-hero-grid" aria-hidden="true" />
        <div className="insight-resource-hero-glow" aria-hidden="true" />

        <div className="insight-resource-container insight-resource-hero-layout">
          <div className="insight-resource-copy">
            <Link className="insight-resource-back" to="/insights">
              <ArrowLeft /> All insights
            </Link>

            <p className="insight-resource-kicker">
              <BookOpenCheck /> Practical resource
            </p>

            <h1 aria-label={page.title}>
              {page.title.split(" ").map((word, index) => (
                <span
                  className="insight-resource-title-mask"
                  key={`${word}-${index}`}
                >
                  <span className="insight-resource-title-line">
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </h1>

            <p className="insight-resource-lead">{page.statement}</p>

            <div className="insight-resource-actions">
              <a
                className="insight-resource-button insight-resource-button--primary"
                href="#resource-modules"
              >
                Open the framework <MoveDown />
              </a>

              <Link
                className="insight-resource-button insight-resource-button--secondary"
                to="/contact"
              >
                Talk to an expert <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div
            className="insight-resource-stack"
            aria-label={`${page.title} guide stack`}
          >
            <div className="insight-resource-stack-head">
              <span>
                <i /> Resource system
              </span>
              <small>Ready to use</small>
            </div>

            <div className="insight-resource-stack-stage">
              <span className="insight-resource-stack-grid" />
              <span className="insight-resource-stack-scan" />

              {modules.slice(0, 3).map((module, index) => (
                <article
                  className={`insight-resource-sheet insight-resource-sheet--${
                    index + 1
                  }`}
                  key={module}
                >
                  <span>0{index + 1}</span>
                  <FileCheck2 />
                  <h3>{module}</h3>
                  <i />
                  <i />
                  <i />
                </article>
              ))}

              <span className="insight-resource-stack-particle insight-resource-stack-particle--one" />
              <span className="insight-resource-stack-particle insight-resource-stack-particle--two" />
              <span className="insight-resource-stack-particle insight-resource-stack-particle--three" />
            </div>
          </div>
        </div>
      </section>

      <section className="insight-resource-proof">
        <div className="insight-resource-container">
          {page.section.proof.map((item) => (
            <span className="insight-resource-proof-item" key={item}>
              <CheckCircle2 /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="insight-resource-modules" id="resource-modules">
        <div className="insight-resource-module-stage">
          <div className="insight-resource-container">
            <div className="insight-resource-module-heading">
              <p className="insight-resource-kicker">
                <CircleDot /> Four practical modules
              </p>
              <h2>
                Move from reading
                <span> to a usable plan.</span>
              </h2>
              <p>
                The modules are arranged in the order a team typically needs
                them: understand, compare, plan, and protect the result.
              </p>
            </div>

            <div className="insight-resource-module-layout">
              <div className="insight-resource-module-navigation">
                <div className="insight-resource-module-steps">
                  {modules.map((module, index) => (
                    <span
                      className="insight-resource-module-step"
                      key={module}
                    >
                      0{index + 1}
                    </span>
                  ))}
                </div>
                <span className="insight-resource-module-track">
                  <i className="insight-resource-module-progress" />
                </span>
              </div>

              <div className="insight-resource-module-cards">
                {modules.map((module, index) => (
                  <article
                    className="insight-resource-module-card"
                    style={{ "--resource-card-index": index }}
                    key={module}
                  >
                    <div className="insight-resource-module-card-index">
                      <span>0{index + 1}</span>
                      <Layers3 />
                    </div>

                    <div>
                      <p>Guide module</p>
                      <h3>{module}</h3>
                      <p>{moduleDescriptions[index]}</p>

                      <ul>
                        <li>
                          <CheckCircle2 /> Clear decision criteria
                        </li>
                        <li>
                          <CheckCircle2 /> Practical next actions
                        </li>
                        <li>
                          <CheckCircle2 /> Quality and risk checks
                        </li>
                      </ul>
                    </div>

                    <div className="insight-resource-module-visual" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-resource-checklist">
        <div className="insight-resource-checklist-grid" aria-hidden="true" />
        <div className="insight-resource-container insight-resource-checklist-layout">
          <div className="insight-resource-checklist-copy">
            <p className="insight-resource-kicker">
              <Workflow /> Put it to work
            </p>
            <h2>{page.outcome}</h2>
            <p>
              Use the framework as a working session, not a document that sits
              unread. Capture the decision, the owner, the next evidence, and
              the point at which the plan should be reviewed.
            </p>
            <Link to="/contact">
              Apply it with QueLogics <ArrowUpRight />
            </Link>
          </div>

          <div className="insight-resource-checks">
            {[
              "Define the decision and desired result",
              "Identify the people, systems, and constraints",
              "Choose the smallest useful next move",
              "Set evidence and review points",
            ].map((item, index) => (
              <div className="insight-resource-check" key={item}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{item}</strong>
                  <small>Keep it visible and owned.</small>
                </div>
                <CheckCircle2 />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insight-resource-related">
        <div className="insight-resource-container">
          <div className="insight-resource-related-heading">
            <div>
              <p className="insight-resource-kicker">More resources</p>
              <h2>Continue with another playbook</h2>
            </div>
            <Link to="/insights">
              View all insights <ArrowRight />
            </Link>
          </div>

          <div className="insight-resource-related-grid">
            {related.map(([path, item], index) => (
              <Link
                className="insight-resource-related-card"
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

const InsightResourcePage = () => {
  const { pathname } = useLocation();

  if (!resourcePaths.has(pathname)) {
    return <Navigate to="/insights" replace />;
  }

  const page = findSectionDetailContent("insights", pathname);

  if (!page) {
    return <Navigate to="/insights" replace />;
  }

  return <ResourceContent page={page} pathname={pathname} />;
};

export default InsightResourcePage;
