import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Common/Reveal";
import "./Contact.css";

const contactSteps = [
  [
    "What to share",
    "Your goal, what is getting in the way, and any timing we should understand.",
  ],
  [
    "What happens next",
    "A senior team member reviews the context and responds with useful questions.",
  ],
  [
    "No perfect brief needed",
    "A rough idea is enough. Finding clarity is part of the work.",
  ],
];

const Contact = () => {
  return (
    <main className="explore-page company-page contact-page">
      <section className="company-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="explore-container company-hero-inner">
          <p className="explore-kicker">
            <Sparkles aria-hidden="true" /> Start a conversation
          </p>
          <h1>Tell us what is slowing growth down.</h1>
          <p>
            Share the challenge, idea, or target on your mind. We will help you
            make sense of the next move—even if that move is not working with
            us.
          </p>
          <div className="explore-actions">
            <a
              className="explore-button explore-button--primary"
              href="mailto:hello@quelogics.com"
            >
              <Mail aria-hidden="true" /> hello@quelogics.com
            </a>
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
            <h2>A useful first conversation, not a sales script.</h2>
          </Reveal>

          <div className="company-card-grid">
            {contactSteps.map(([title, body], index) => (
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

          <Reveal className="company-contact-note">
            <MapPin aria-hidden="true" />
            <div>
              <strong>Working across time zones</strong>
              <p>
                QueLogics collaborates remotely with teams around the world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
