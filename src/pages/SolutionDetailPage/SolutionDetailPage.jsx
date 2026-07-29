import { useLayoutEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  MoveDown,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import "../Shared/PageStyles.css";
import "./SolutionDetailPage.css";

gsap.registerPlugin(ScrollTrigger);

const processCopy = [
  "Align on the business gap, the people affected, and the measures that define progress.",
  "Connect the right product, automation, data, and growth capabilities around one outcome.",
  "Deliver in visible increments with clear ownership, quality, and communication.",
  "Measure what changed, improve what matters, and extend the solution with confidence.",
];

const SolutionDetailContent = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const related = Object.entries(page.section.entries)
    .filter(([path]) => path !== pathname)
    .slice(0, 3);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const body = document.body;
    body.classList.add("solution-detail-page-active");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return () => body.classList.remove("solution-detail-page-active");
    }

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".solution-detail-page .detail-back, .solution-detail-page .explore-kicker", {
          autoAlpha: 0,
          y: 18,
          duration: 0.5,
          stagger: 0.08,
        })
        .from(".solution-detail-page .detail-hero h1", {
          autoAlpha: 0,
          y: 52,
          duration: 0.85,
        }, "-=0.2")
        .from(".solution-detail-page .detail-statement, .solution-detail-page .explore-actions", {
          autoAlpha: 0,
          y: 26,
          duration: 0.65,
          stagger: 0.1,
        }, "-=0.48")
        .from(".solution-detail-page .detail-signal", {
          autoAlpha: 0,
          scale: 0.72,
          rotate: -8,
          duration: 1,
        }, "-=0.85");

      gsap.to(".solution-detail-page .detail-signal", {
        yPercent: 20,
        rotate: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.from(".solution-detail-page .detail-proofbar span", {
        autoAlpha: 0,
        y: 20,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-proofbar",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".solution-detail-page .detail-capabilities-intro > *", {
        autoAlpha: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-capabilities",
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".solution-detail-page .detail-capability", {
        autoAlpha: 0,
        y: 55,
        rotateX: 7,
        scale: 0.96,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-capability-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".solution-detail-page .detail-outcome-card", {
        autoAlpha: 0,
        y: 55,
        scale: 0.97,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-outcome",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".solution-detail-page .detail-process-step", {
        autoAlpha: 0,
        y: 38,
        duration: 0.68,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-process-grid",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".solution-detail-page .detail-related-card", {
        autoAlpha: 0,
        y: 38,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-detail-page .detail-related-grid",
          start: "top 84%",
          once: true,
        },
      });
    }, root);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
      body.classList.remove("solution-detail-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="explore-page detail-page explore-page--solutions solution-detail-page">
      <section className="detail-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="detail-glow" aria-hidden="true" />
        <div className="explore-container detail-hero-layout">
          <div className="detail-hero-copy">
            <Link className="detail-back" to="/solutions">
              <ArrowLeft /> All solutions
            </Link>
            <p className="explore-kicker"><CircleDot /> {page.section.detailEyebrow}</p>
            <h1>{page.title}</h1>
            <p className="detail-statement">{page.statement}</p>
            <div className="explore-actions">
              <Link className="explore-button explore-button--primary" to="/contact">
                Discuss this outcome <ArrowUpRight />
              </Link>
              <a className="explore-button explore-button--ghost" href="#solution-capabilities">
                See the connected path <MoveDown />
              </a>
            </div>
          </div>

          <div className="detail-signal solution-detail-signal" aria-label="Connected QueLogics solution">
            <div className="detail-signal-orbit detail-signal-orbit--outer" />
            <div className="detail-signal-orbit detail-signal-orbit--inner" />
            <div className="detail-signal-core">
              <small>Designed around</small>
              <strong>Your outcome</strong>
            </div>
            {page.capabilities.slice(0, 3).map((item, index) => (
              <span className={`detail-signal-node detail-signal-node--${index + 1}`} key={item}>
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-proofbar" aria-label="Solution delivery principles">
        <div className="explore-container">
          {page.section.proof.map((item) => <span key={item}><Check /> {item}</span>)}
        </div>
      </section>

      <section className="detail-capabilities" id="solution-capabilities">
        <div className="explore-container detail-capabilities-layout">
          <div className="detail-capabilities-intro">
            <p className="explore-kicker">One connected solution</p>
            <h2>Bring the right capabilities together around the result.</h2>
            <p>
              We assemble the disciplines this outcome needs, without making your team
              coordinate disconnected specialists or competing priorities.
            </p>
          </div>
          <div className="detail-capability-grid">
            {page.capabilities.map((capability, index) => (
              <article className="detail-capability" key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability}</h3>
                <p>Focused planning, connected execution, and clear ownership from decision through measurable change.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-outcome">
        <div className="explore-container detail-outcome-card">
          <div className="detail-outcome-label">
            <p className="explore-kicker">The outcome</p>
            <span className="detail-outcome-index">Q<span>+</span></span>
          </div>
          <div className="detail-outcome-copy">
            <h2>{page.outcome}</h2>
            <p>
              Success measures are agreed early, tradeoffs stay visible, and every
              workstream remains connected to the business change it is meant to create.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-process">
        <div className="explore-container">
          <div className="explore-section-heading">
            <p className="explore-kicker">A clear path forward</p>
            <h2>Outcome first. Capabilities connected. Progress visible.</h2>
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
              <h2>Related solutions</h2>
            </div>
            <Link to="/solutions">View all <ArrowRight /></Link>
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
            <p className="explore-kicker">Your next move</p>
            <h2>Ready to close this gap?</h2>
          </div>
          <Link className="explore-button explore-button--primary" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

const SolutionDetailPage = () => {
  const { pathname } = useLocation();
  const page = findSectionDetailContent("solutions", pathname);

  if (!page) {
    return <Navigate to="/solutions" replace />;
  }

  return <SolutionDetailContent page={page} pathname={pathname} />;
};

export default SolutionDetailPage;
