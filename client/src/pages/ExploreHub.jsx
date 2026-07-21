import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/common/Reveal";
import { navigationLinks } from "../data/navbarData";
import { exploreContent } from "../data/exploreContent";
import "./explorePages.css";

const ExploreHub = ({ sectionKey }) => {
  const content = exploreContent[sectionKey];
  const navigation = navigationLinks.find(
    (item) => item.title.toLowerCase() === sectionKey,
  );

  return (
    <main className={`explore-page explore-page--${sectionKey}`}>
      <section className="explore-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="explore-orb explore-orb--one" aria-hidden="true" />
        <div className="explore-orb explore-orb--two" aria-hidden="true" />
        <div className="explore-container explore-hero-layout">
          <div className="explore-hero-copy">
            <p className="explore-kicker"><Sparkles /> {content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="explore-lead">{content.intro}</p>
            <div className="explore-actions">
              <Link className="explore-button explore-button--primary" to="/contact">
                Start a conversation <ArrowUpRight />
              </Link>
              <a className="explore-button explore-button--ghost" href="#explore-directory">
                Explore {content.label.toLowerCase()} <ArrowRight />
              </a>
            </div>
          </div>

          <div className="explore-hero-visual" aria-label={`${content.label} overview`}>
            <div className="explore-visual-ring" />
            <div className="explore-visual-core">
              <span>QueLogics</span>
              <strong>{content.label}</strong>
              <small>Strategy · Craft · Growth</small>
            </div>
            {content.proof.map((item, index) => (
              <div className={`explore-floating-note explore-floating-note--${index + 1}`} key={item}>
                <CheckCircle2 />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-directory" id="explore-directory">
        <div className="explore-container">
          <Reveal className="explore-section-heading">
            <p className="explore-kicker">Choose where to begin</p>
            <h2>Expertise connected around your next move.</h2>
            <p>Explore a focused capability below. Every engagement is shaped around your context, team, and definition of success.</p>
          </Reveal>

          <div className="explore-groups">
            {navigation.groups.map((group, groupIndex) => (
              <Reveal className="explore-group" delay={groupIndex * 80} key={group.title}>
                <div className="explore-group-heading">
                  <span>0{groupIndex + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="explore-card-grid">
                  {group.links.map(([label, path], index) => {
                    const item = content.entries[path];
                    return (
                      <Link className="explore-card" to={path} key={path}>
                        <span className="explore-card-number">{String(index + 1).padStart(2, "0")}</span>
                        <h4>{label}</h4>
                        <p>{item?.statement || "Explore practical ideas and field-tested guidance from QueLogics."}</p>
                        <span className="explore-card-link">Explore <ArrowUpRight /></span>
                      </Link>
                    );
                  })}
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
            {["Start with the gap, not a predefined deliverable.", "Make progress visible with short, useful feedback loops.", "Build for the people who will use and own the system."].map((item, index) => (
              <Reveal className="explore-principle" delay={index * 90} key={item}>
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
            <h2>Let’s turn it into a clear next move.</h2>
          </div>
          <Link className="explore-button explore-button--primary" to="/contact">
            Talk to an expert <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ExploreHub;
