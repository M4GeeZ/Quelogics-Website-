import { ArrowUpRight, Phone, Play } from "lucide-react";
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
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Systems that remove bottlenecks and accelerate growth
          </div>

          <h1 className="hero-heading">
            We don&apos;t sell services.
            <span className="hero-highlight">
              We close growth gaps.
              <span className="hero-underline"></span>
            </span>
          </h1>

          <p className="hero-description">
            Every day you wait, someone else is automating what your team still
            does by hand. Quelogics builds <strong>custom software, AI
            automation, mobile products, and growth systems</strong> that make
            sure that someone else is you.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="hero-primary-button">
              <Phone size={18} />
              Close Your Biggest Gap
              <ArrowUpRight size={17} />
            </a>

            <a href="/case-studies" className="hero-secondary-button">
              <Play size={18} fill="currentColor" />
              See Systems in Action
            </a>
          </div>
        </div>
      </section>

      <section className="client-logo-marquee" aria-label="Our clients">
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
