import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CircleDot, MoveDown } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Reveal from "../components/common/Reveal";
import { findDetailContent } from "../data/exploreContent";
import "./explorePages.css";

const sectionCopy = {
  services: {
    heading: "What we bring together",
    body: "Senior thinking and hands-on execution stay connected from the first workshop through launch and iteration.",
    resultLabel: "The result",
  },
  industries: {
    heading: "Where digital meets your operations",
    body: "We learn the workflows, constraints, and customer expectations that generic delivery teams often miss.",
    resultLabel: "The opportunity",
  },
  solutions: {
    heading: "One outcome, connected capabilities",
    body: "We assemble the right disciplines around the result—without making you coordinate disconnected specialists.",
    resultLabel: "The outcome",
  },
  insights: {
    heading: "What you’ll be able to explore",
    body: "Useful frameworks, clear explanations, and perspectives grounded in the work of building and improving real systems.",
    resultLabel: "Why it matters",
  },
};

const DetailPage = () => {
  const { pathname } = useLocation();
  const page = findDetailContent(pathname);

  if (!page) return <Navigate to="/services" replace />;

  const { section, sectionKey } = page;
  const copy = sectionCopy[sectionKey];
  const related = Object.entries(section.entries)
    .filter(([path]) => path !== pathname)
    .slice(0, 3);

  return (
    <main className={`explore-page detail-page explore-page--${sectionKey}`}>
      <section className="detail-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="detail-glow" aria-hidden="true" />
        <div className="explore-container detail-hero-layout">
          <div className="detail-hero-copy">
            <Link className="detail-back" to={`/${sectionKey}`}><ArrowLeft /> All {section.label}</Link>
            <p className="explore-kicker"><CircleDot /> {section.detailEyebrow}</p>
            <h1>{page.title}</h1>
            <p className="detail-statement">{page.statement}</p>
            <div className="explore-actions">
              <Link className="explore-button explore-button--primary" to="/contact">
                Discuss your project <ArrowUpRight />
              </Link>
              <a className="explore-button explore-button--ghost" href="#capabilities">
                See what’s included <MoveDown />
              </a>
            </div>
          </div>

          <div className="detail-signal" aria-label="Connected QueLogics approach">
            <div className="detail-signal-orbit detail-signal-orbit--outer" />
            <div className="detail-signal-orbit detail-signal-orbit--inner" />
            <div className="detail-signal-core">
              <small>Designed around</small>
              <strong>Your outcome</strong>
            </div>
            {page.capabilities.slice(0, 3).map((item, index) => (
              <span className={`detail-signal-node detail-signal-node--${index + 1}`} key={item}>{index + 1}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-proofbar" aria-label="Our delivery principles">
        <div className="explore-container">
          {section.proof.map((item) => <span key={item}><Check /> {item}</span>)}
        </div>
      </section>

      <section className="detail-capabilities" id="capabilities">
        <div className="explore-container detail-capabilities-layout">
          <Reveal className="detail-capabilities-intro">
            <p className="explore-kicker">Designed end to end</p>
            <h2>{copy.heading}</h2>
            <p>{copy.body}</p>
          </Reveal>
          <div className="detail-capability-grid">
            {page.capabilities.map((capability, index) => (
              <Reveal className="detail-capability" delay={index * 80} key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability}</h3>
                <p>Purposeful planning, collaborative delivery, and clear ownership at every step.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-outcome">
        <div className="explore-container detail-outcome-card">
          <Reveal className="detail-outcome-label">
            <p className="explore-kicker">{copy.resultLabel}</p>
            <span className="detail-outcome-index">Q<span>+</span></span>
          </Reveal>
          <Reveal className="detail-outcome-copy" delay={80}>
            <h2>{page.outcome}</h2>
            <p>We define success with you, make tradeoffs visible, and keep the work connected to the impact it is meant to create.</p>
          </Reveal>
        </div>
      </section>

      <section className="detail-process">
        <div className="explore-container">
          <Reveal className="explore-section-heading">
            <p className="explore-kicker">A clear path forward</p>
            <h2>Momentum without the mystery.</h2>
          </Reveal>
          <div className="detail-process-grid">
            {section.process.map((step, index) => (
              <Reveal className="detail-process-step" delay={index * 85} key={step}>
                <span>0{index + 1}</span>
                <div className="detail-process-line"><i /></div>
                <h3>{step}</h3>
                <p>{[
                  "Align on the real challenge, users, constraints, and success measures.",
                  "Shape the strongest approach and make important decisions tangible early.",
                  "Deliver in visible increments with quality built into the process.",
                  "Measure what changed, learn from use, and improve what matters next.",
                ][index]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-related">
        <div className="explore-container">
          <Reveal className="detail-related-heading">
            <div>
              <p className="explore-kicker">Keep exploring</p>
              <h2>Related {section.label.toLowerCase()}</h2>
            </div>
            <Link to={`/${sectionKey}`}>View all <ArrowRight /></Link>
          </Reveal>
          <div className="detail-related-grid">
            {related.map(([path, item], index) => (
              <Reveal delay={index * 80} key={path}>
                <Link className="detail-related-card" to={path}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.statement}</p>
                  <ArrowUpRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-cta">
        <div className="explore-container explore-cta-card">
          <div>
            <p className="explore-kicker">Your next move</p>
            <h2>Ready to make this real?</h2>
          </div>
          <Link className="explore-button explore-button--primary" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
