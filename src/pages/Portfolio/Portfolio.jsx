import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  MoveDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Common/Reveal";
import { exploreContent, findDetailContent } from "../../data/pageContent";
import "./Portfolio.css";

const pagePath = "/portfolio";
const page = findDetailContent(pagePath);
const section = exploreContent.insights;
const related = Object.entries(section.entries)
  .filter(([path]) => path !== pagePath)
  .slice(0, 3);

const processDescriptions = [
  "Align on the real challenge, users, constraints, and success measures.",
  "Shape the strongest approach and make important decisions tangible early.",
  "Deliver in visible increments with quality built into the process.",
  "Measure what changed, learn from use, and improve what matters next.",
];

const Portfolio = () => {
  return (
    <main className="explore-page detail-page explore-page--insights portfolio-page">
      <section className="detail-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="detail-glow" aria-hidden="true" />
        <div className="explore-container detail-hero-layout">
          <div className="detail-hero-copy">
            <Link className="detail-back" to="/insights">
              <ArrowLeft aria-hidden="true" /> All insights
            </Link>
            <p className="explore-kicker">
              <CircleDot aria-hidden="true" /> {section.detailEyebrow}
            </p>
            <h1>{page.title}</h1>
            <p className="detail-statement">{page.statement}</p>
            <div className="explore-actions">
              <Link
                className="explore-button explore-button--primary"
                to="/contact"
              >
                Discuss your project <ArrowUpRight aria-hidden="true" />
              </Link>
              <a
                className="explore-button explore-button--ghost"
                href="#portfolio-capabilities"
              >
                See what&apos;s included <MoveDown aria-hidden="true" />
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
              <span
                className={`detail-signal-node detail-signal-node--${index + 1}`}
                key={item}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-proofbar" aria-label="Delivery principles">
        <div className="explore-container">
          {section.proof.map((item) => (
            <span key={item}>
              <Check aria-hidden="true" /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="detail-capabilities" id="portfolio-capabilities">
        <div className="explore-container detail-capabilities-layout">
          <Reveal className="detail-capabilities-intro">
            <p className="explore-kicker">Designed end to end</p>
            <h2>What you&apos;ll be able to explore</h2>
            <p>
              Useful frameworks, clear explanations, and perspectives grounded
              in the work of building and improving real systems.
            </p>
          </Reveal>
          <div className="detail-capability-grid">
            {page.capabilities.map((capability, index) => (
              <Reveal
                className="detail-capability"
                delay={index * 80}
                key={capability}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability}</h3>
                <p>
                  Purposeful planning, collaborative delivery, and clear
                  ownership at every step.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-outcome">
        <div className="explore-container detail-outcome-card">
          <Reveal className="detail-outcome-label">
            <p className="explore-kicker">Why it matters</p>
            <span className="detail-outcome-index">
              Q<span>+</span>
            </span>
          </Reveal>
          <Reveal className="detail-outcome-copy" delay={80}>
            <h2>{page.outcome}</h2>
            <p>
              We define success with you, make tradeoffs visible, and keep the
              work connected to the impact it is meant to create.
            </p>
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
              <Reveal
                className="detail-process-step"
                delay={index * 85}
                key={step}
              >
                <span>0{index + 1}</span>
                <div className="detail-process-line">
                  <i />
                </div>
                <h3>{step}</h3>
                <p>{processDescriptions[index]}</p>
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
              <h2>Related insights</h2>
            </div>
            <Link to="/insights">
              View all <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="detail-related-grid">
            {related.map(([path, item], index) => (
              <Reveal delay={index * 80} key={path}>
                <Link className="detail-related-card" to={path}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.statement}</p>
                  <ArrowUpRight aria-hidden="true" />
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
          <Link
            className="explore-button explore-button--primary"
            to="/contact"
          >
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
