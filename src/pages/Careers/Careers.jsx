import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Common/Reveal";
import "./Careers.css";

const careerValues = [
  [
    "Own the outcome",
    "Understand why the work matters and help shape the strongest answer.",
  ],
  [
    "Keep learning",
    "Share what you know, ask better questions, and get stronger together.",
  ],
  [
    "Work like a partner",
    "Be dependable, communicate clearly, and treat every challenge as shared.",
  ],
];

const Careers = () => {
  return (
    <main className="explore-page company-page careers-page">
      <section className="company-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="explore-container company-hero-inner">
          <p className="explore-kicker">
            <Sparkles aria-hidden="true" /> Careers at QueLogics
          </p>
          <h1>Do meaningful work with people who care about the craft.</h1>
          <p>
            We are always interested in thoughtful designers, engineers,
            strategists, and growth specialists who want to solve real problems
            together.
          </p>
          <div className="explore-actions">
            <Link
              className="explore-button explore-button--primary"
              to="/contact"
            >
              Introduce yourself <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link
              className="explore-button explore-button--ghost"
              to="/case-studies"
            >
              Explore our work <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="company-values">
        <div className="explore-container">
          <Reveal className="explore-section-heading">
            <p className="explore-kicker">How we work</p>
            <h2>Bring curiosity. Leave ego at the door.</h2>
          </Reveal>

          <div className="company-card-grid">
            {careerValues.map(([title, body], index) => (
              <Reveal
                className="company-card"
                delay={index * 90}
                key={title}
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
