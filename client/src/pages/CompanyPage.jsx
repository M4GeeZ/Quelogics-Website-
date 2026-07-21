import { ArrowRight, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/common/Reveal";
import "./explorePages.css";

const pages = {
  about: {
    eyebrow: "About QueLogics",
    title: "A digital team built around your progress.",
    intro: "Since 2019, QueLogics has helped ambitious teams turn operational friction, product ideas, and growth opportunities into digital systems that work.",
    heading: "Small enough to care. Experienced enough to deliver.",
    cards: [
      ["Outcome-led", "We keep the work connected to the business change it needs to create."],
      ["Senior and hands-on", "The people shaping the approach stay close to the delivery."],
      ["Clear by default", "Visible progress, direct communication, and no unnecessary mystery."],
    ],
  },
  careers: {
    eyebrow: "Careers at QueLogics",
    title: "Do meaningful work with people who care about the craft.",
    intro: "We are always interested in thoughtful designers, engineers, strategists, and growth specialists who want to solve real problems together.",
    heading: "Bring curiosity. Leave ego at the door.",
    cards: [
      ["Own the outcome", "Understand why the work matters and help shape the strongest answer."],
      ["Keep learning", "Share what you know, ask better questions, and get stronger together."],
      ["Work like a partner", "Be dependable, communicate clearly, and treat every challenge as shared."],
    ],
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "Tell us what is slowing growth down.",
    intro: "Share the challenge, idea, or target on your mind. We will help you make sense of the next move—even if that move is not working with us.",
    heading: "A useful first conversation, not a sales script.",
    cards: [
      ["What to share", "Your goal, what is getting in the way, and any timing we should understand."],
      ["What happens next", "A senior team member reviews the context and responds with useful questions."],
      ["No perfect brief needed", "A rough idea is enough. Finding clarity is part of the work."],
    ],
  },
};

const CompanyPage = ({ kind }) => {
  const page = pages[kind];

  return (
    <main className="explore-page company-page">
      <section className="company-hero">
        <div className="explore-hero-grid" aria-hidden="true" />
        <div className="explore-container company-hero-inner">
          <p className="explore-kicker"><Sparkles /> {page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <div className="explore-actions">
            {kind === "contact" ? (
              <a className="explore-button explore-button--primary" href="mailto:hello@quelogics.com">
                <Mail /> hello@quelogics.com
              </a>
            ) : (
              <Link className="explore-button explore-button--primary" to="/contact">
                {kind === "careers" ? "Introduce yourself" : "Work with us"} <ArrowUpRight />
              </Link>
            )}
            <Link className="explore-button explore-button--ghost" to="/case-studies">
              Explore our work <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="company-values">
        <div className="explore-container">
          <Reveal className="explore-section-heading">
            <p className="explore-kicker">How we work</p>
            <h2>{page.heading}</h2>
          </Reveal>
          <div className="company-card-grid">
            {page.cards.map(([title, body], index) => (
              <Reveal className="company-card" delay={index * 90} key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          {kind === "contact" && (
            <Reveal className="company-contact-note">
              <MapPin />
              <div>
                <strong>Working across time zones</strong>
                <p>QueLogics collaborates remotely with teams around the world.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
