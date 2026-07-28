import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Common/Reveal";
import { navigationLinks } from "../../data/navigationData";
import { exploreContent } from "../../data/pageContent";
import "./Insights.css";

const content = exploreContent.insights;
const navigation = navigationLinks.find((item) => item.title === "Insights");

const Insights = () => {
  return (
    <main className="explore-page explore-page--insights insights-page">
      <section className="explore-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="explore-orb explore-orb--one" aria-hidden="true" />
        <div className="explore-orb explore-orb--two" aria-hidden="true" />

        <div className="explore-container explore-hero-layout">
          <div className="explore-hero-copy">
            <p className="explore-kicker">
              <Sparkles aria-hidden="true" /> {content.eyebrow}
            </p>
            <h1>{content.title}</h1>
            <p className="explore-lead">{content.intro}</p>
            <div className="explore-actions">
              <Link
                className="explore-button explore-button--primary"
                to="/contact"
              >
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </Link>
              <a
                className="explore-button explore-button--ghost"
                href="#insights-directory"
              >
                Explore insights <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="explore-hero-visual" aria-label="Insights overview">
            <div className="explore-visual-ring" />
            <div className="explore-visual-core">
              <span>QueLogics</span>
              <strong>{content.label}</strong>
              <small>Strategy · Craft · Growth</small>
            </div>
            {content.proof.map((item, index) => (
              <div
                className={`explore-floating-note explore-floating-note--${index + 1}`}
                key={item}
              >
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-directory" id="insights-directory">
        <div className="explore-container">
          <Reveal className="explore-section-heading">
            <p className="explore-kicker">Choose where to begin</p>
            <h2>Expertise connected around your next move.</h2>
            <p>
              Explore a focused topic below. Every resource is shaped to make
              complex digital decisions clearer and more useful.
            </p>
          </Reveal>

          <div className="explore-groups">
            {navigation.groups.map((group, groupIndex) => (
              <Reveal
                className="explore-group"
                delay={groupIndex * 80}
                key={group.title}
              >
                <div className="explore-group-heading">
                  <span>0{groupIndex + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="explore-card-grid">
                  {group.links.map(([label, path], index) => (
                    <Link className="explore-card" to={path} key={path}>
                      <span className="explore-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4>{label}</h4>
                      <p>{content.entries[path].statement}</p>
                      <span className="explore-card-link">
                        Explore <ArrowUpRight aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-principles">
        <div className="explore-container explore-principles-layout">
          <Reveal className="explore-principles-copy">
            <p className="explore-kicker">How we think</p>
            <h2>Clarity before complexity.</h2>
          </Reveal>
          <div className="explore-principle-list">
            {[
              "Start with the gap, not a predefined deliverable.",
              "Make progress visible with short, useful feedback loops.",
              "Build for the people who will use and own the system.",
            ].map((item, index) => (
              <Reveal
                className="explore-principle"
                delay={index * 90}
                key={item}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-cta">
        <div className="explore-container explore-cta-card">
          <div>
            <p className="explore-kicker">Have a challenge in mind?</p>
            <h2>Let&apos;s turn it into a clear next move.</h2>
          </div>
          <Link
            className="explore-button explore-button--primary"
            to="/contact"
          >
            Talk to an expert <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Insights;
