import { ArrowRight } from "lucide-react";
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
            <h1 className="hero-heading">
              We engineer the <span>systems</span> behind growth.
            </h1>
            <p className="hero-description">
              Strategy, software and intelligent automation built around how
              your business actually works.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="hero-primary-button">
                Build what&apos;s next <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-orbit hero-orbit-three" />
            <div className="hero-signal-core">
              <span className="hero-signal-mark"><i /></span>
              <small>QUELOGICS</small>
            </div>
            <span className="hero-visual-label hero-visual-label-one">Products</span>
            <span className="hero-visual-label hero-visual-label-two">Intelligence</span>
            <span className="hero-visual-label hero-visual-label-three">Operations</span>
          </div>

          <div className="hero-footnote">
            <span>Independent technology partner</span>
            <a href="/case-studies">Explore our work <ArrowRight aria-hidden="true" /></a>
          </div>
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
