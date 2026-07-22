import { ArrowRight, Check, Play } from "lucide-react";
import ProjectsShowcase from "../components/home/ProjectsShowcase";
import ServiceExplorer from "../components/home/ServiceExplorer";
import IndustryAccordion from "../components/home/IndustryAccordion";
import SelectedWorkMarquee from "../components/home/SelectedWorkMarquee";
import ProjectStackShowcase from "../components/home/ProjectStackShowcase";
import ClientReviews from "../components/home/ClientReviews";
import ProcessShowcase from "../components/home/ProcessShowcase";
import "./home.css";

const clientLogos = Array.from(
  { length: 35 },
  (_, index) =>
    `/assets/client-logos/client-logo-${String(index + 1).padStart(2, "0")}.svg`,
);

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Digital engineering partner</p>
            <h1 className="hero-heading">Software built for the way your business works.</h1>
            <p className="hero-description">
              QueLogics designs and engineers dependable digital products,
              automation and platforms for organisations ready to modernise
              critical operations.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="hero-primary-button">
                Discuss your project <ArrowRight size={18} />
              </a>
              <a href="/case-studies" className="hero-secondary-button">
                <Play size={16} /> View selected work
              </a>
            </div>
            <ul className="hero-assurances" aria-label="Engagement benefits">
              <li><Check aria-hidden="true" /> Senior delivery team</li>
              <li><Check aria-hidden="true" /> Clear scope and reporting</li>
              <li><Check aria-hidden="true" /> Built for long-term scale</li>
            </ul>
          </div>

          <aside className="hero-proof" aria-label="QueLogics at a glance">
            <div className="hero-proof-heading">
              <span>Delivery, not theatre</span>
              <p>From first workshop to production and beyond.</p>
            </div>
            <dl>
              <div><dt>35+</dt><dd>client partnerships</dd></div>
              <div><dt>2019</dt><dd>founded in Lahore</dd></div>
              <div><dt>4</dt><dd>core capability areas</dd></div>
            </dl>
            <a href="/about">How we work <ArrowRight size={16} /></a>
          </aside>
        </div>
      </section>

      <section className="client-logo-marquee" aria-label="Our clients">
        <p className="client-logo-label">Trusted by teams building what&apos;s next</p>
        <div className="client-logo-track">
          {[0, 1].map((copyIndex) => (
            <div
              className="client-logo-group"
              aria-hidden="true"
              key={copyIndex}
            >
              {clientLogos.map((logo) => (
                <div className="client-logo-item" key={`${copyIndex}-${logo}`}>
                  <img src={logo} alt="" draggable="false" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ProjectsShowcase />
      <ServiceExplorer />
      <IndustryAccordion />
      <SelectedWorkMarquee />
      <ProjectStackShowcase />
      <ClientReviews />
      <ProcessShowcase />
    </main>
  );
};

export default Home;
