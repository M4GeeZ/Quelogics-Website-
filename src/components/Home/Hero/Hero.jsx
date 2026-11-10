import { ArrowRight } from "lucide-react";
import "./Hero.css";

const clientLogos = Array.from(
  { length: 35 },
  (_, index) =>
    `/assets/client-logos/client-logo-${String(index + 1).padStart(2, "0")}.svg`,
);

const Hero = () => {
  return (
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
              <img className="hero-signal-mark ql-original-signal-mark" src="/assets/brand/quelogics-original-qmark-white.png" alt="" />
              <small>QUELOGICS</small>
            </div>
            <span className="hero-visual-label hero-visual-label-one">Products</span>
            <span className="hero-visual-label hero-visual-label-two">Intelligence</span>
            <span className="hero-visual-label hero-visual-label-three">Operations</span>
          </div>

          {/* The client logos now replace the old hero footnote. They are
              part of the hero grid, not an independent section underneath. */}
          <div className="client-logo-marquee" aria-label="Trusted client logos">
            
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
          </div>
        </div>
    </section>
  );
};

export default Hero;
