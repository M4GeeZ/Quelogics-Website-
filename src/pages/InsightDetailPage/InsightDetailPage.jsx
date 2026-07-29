import { useLayoutEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CircleDot,
  MoveDown,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import "../Shared/PageStyles.css";
import "./InsightDetailPage.css";

gsap.registerPlugin(ScrollTrigger);

const processCopy = [
  "Start with the question, challenge, or decision that deserves a clearer view.",
  "Compare the practical tradeoffs, patterns, and signals that matter in real delivery.",
  "Turn the strongest ideas into a useful action, experiment, or operating decision.",
  "Review what changed, keep what works, and refine the next move with better evidence.",
];

const InsightDetailContent = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const related = Object.entries(page.section.entries)
    .filter(([path]) => path.startsWith("/insights/") && path !== pathname)
    .slice(0, 3);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const body = document.body;
    body.classList.add("insight-detail-page-active");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return () => body.classList.remove("insight-detail-page-active");
    }

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".insight-detail-page .detail-back, .insight-detail-page .explore-kicker", {
          autoAlpha: 0,
          y: 18,
          duration: 0.5,
          stagger: 0.08,
        })
        .from(".insight-detail-page .detail-hero h1", {
          autoAlpha: 0,
          y: 50,
          duration: 0.85,
        }, "-=0.2")
        .from(".insight-detail-page .detail-statement, .insight-detail-page .explore-actions", {
          autoAlpha: 0,
          y: 26,
          duration: 0.65,
          stagger: 0.1,
        }, "-=0.48")
        .from(".insight-detail-page .insight-detail-visual", {
          autoAlpha: 0,
          scale: 0.78,
          rotateY: -14,
          duration: 1,
        }, "-=0.85");

      gsap.to(".insight-detail-page .insight-detail-visual", {
        yPercent: 18,
        rotateY: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.from(".insight-detail-page .detail-proofbar span", {
        autoAlpha: 0,
        y: 18,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-proofbar",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".insight-detail-page .detail-capabilities-intro > *", {
        autoAlpha: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-capabilities",
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".insight-detail-page .detail-capability", {
        autoAlpha: 0,
        x: 46,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-capability-grid",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".insight-detail-page .detail-outcome-card", {
        autoAlpha: 0,
        y: 50,
        scale: 0.975,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-outcome",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".insight-detail-page .detail-process-step", {
        autoAlpha: 0,
        y: 36,
        duration: 0.68,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-process-grid",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".insight-detail-page .detail-related-card", {
        autoAlpha: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insight-detail-page .detail-related-grid",
          start: "top 84%",
          once: true,
        },
      });
    }, root);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
      body.classList.remove("insight-detail-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="explore-page detail-page explore-page--insights insight-detail-page">
      <section className="detail-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="detail-glow" aria-hidden="true" />
        <div className="explore-container detail-hero-layout">
          <div className="detail-hero-copy">
            <Link className="detail-back" to="/insights">
              <ArrowLeft /> All insights
            </Link>
            <p className="explore-kicker"><CircleDot /> {page.section.detailEyebrow}</p>
            <h1>{page.title}</h1>
            <p className="detail-statement">{page.statement}</p>
            <div className="explore-actions">
              <a className="explore-button explore-button--primary" href="#insight-topics">
                Explore the topic <MoveDown />
              </a>
              <Link className="explore-button explore-button--ghost" to="/contact">
                Talk to an expert <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="insight-detail-visual" aria-label="QueLogics insight framework">
            <div className="insight-detail-orbit insight-detail-orbit--one" />
            <div className="insight-detail-orbit insight-detail-orbit--two" />
            <div className="insight-detail-book">
              <BookOpen />
              <small>QueLogics field note</small>
              <strong>{page.title}</strong>
            </div>
            <span className="insight-detail-signal insight-detail-signal--one">Observe</span>
            <span className="insight-detail-signal insight-detail-signal--two">Apply</span>
            <span className="insight-detail-signal insight-detail-signal--three">Learn</span>
          </div>
        </div>
      </section>

      <section className="detail-proofbar" aria-label="Insight principles">
        <div className="explore-container">
          {page.section.proof.map((item) => <span key={item}><Check /> {item}</span>)}
        </div>
      </section>

      <section className="detail-capabilities" id="insight-topics">
        <div className="explore-container detail-capabilities-layout">
          <div className="detail-capabilities-intro">
            <p className="explore-kicker">Inside this topic</p>
            <h2>Useful perspectives you can turn into better decisions.</h2>
            <p>
              The focus stays practical: understand the pattern, see the tradeoffs,
              and leave with a clearer action for your product, operation, or growth system.
            </p>
          </div>
          <div className="detail-capability-grid">
            {page.capabilities.map((capability, index) => (
              <article className="detail-capability" key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability}</h3>
                <p>Clear language, real delivery context, and a practical lens for applying the idea in your own environment.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-outcome">
        <div className="explore-container detail-outcome-card">
          <div className="detail-outcome-label">
            <p className="explore-kicker">Why it matters</p>
            <span className="detail-outcome-index">Q<span>+</span></span>
          </div>
          <div className="detail-outcome-copy">
            <h2>{page.outcome}</h2>
            <p>
              Use the frameworks as a starting point, adapt them to the realities of
              your team, and measure whether the change is making work or customer experience better.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-process">
        <div className="explore-container">
          <div className="explore-section-heading">
            <p className="explore-kicker">Put the idea to work</p>
            <h2>Move from reading to a useful next step.</h2>
          </div>
          <div className="detail-process-grid">
            {page.section.process.map((step, index) => (
              <article className="detail-process-step" key={step}>
                <span>0{index + 1}</span>
                <div className="detail-process-line"><i /></div>
                <h3>{step}</h3>
                <p>{processCopy[index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-related">
        <div className="explore-container">
          <div className="detail-related-heading">
            <div>
              <p className="explore-kicker">Keep exploring</p>
              <h2>Related insights</h2>
            </div>
            <Link to="/insights">View all <ArrowRight /></Link>
          </div>
          <div className="detail-related-grid">
            {related.map(([path, item], index) => (
              <Link className="detail-related-card" to={path} key={path}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.statement}</p>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-cta">
        <div className="explore-container explore-cta-card">
          <div>
            <p className="explore-kicker">Need a practical view?</p>
            <h2>Bring us the real decision in front of you.</h2>
          </div>
          <Link className="explore-button explore-button--primary" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

const InsightDetailPage = () => {
  const { pathname } = useLocation();
  const page = findSectionDetailContent("insights", pathname);

  if (!page) {
    return <Navigate to="/insights" replace />;
  }

  return <InsightDetailContent page={page} pathname={pathname} />;
};

export default InsightDetailPage;
