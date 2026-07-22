import { useState } from "react";
import { Code2, PenTool, Search, ShieldCheck, Wrench } from "lucide-react";
import "./processShowcase.css";

const steps = [
  {
    number: "01",
    label: "Discovery",
    description: "We map your workflows and define the success metrics.",
    icon: Search,
  },
  {
    number: "02",
    label: "Design",
    description: "Architecture & wireframes you approve before we build.",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Build",
    description: "We engineer, test, and refine your complete digital system.",
    icon: Code2,
  },
  {
    number: "04",
    label: "Launch & Support",
    description: "Go-live, training, warranty and dependable post-launch support.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    label: "Maintain",
    description: "Continuous monitoring and improvements that keep your system performing.",
    icon: Wrench,
  },
];

const ProcessShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="process-showcase-section">
      <div className="process-showcase-shell">
        <div className="process-showcase-copy">
          <span className="process-showcase-eyebrow"><i /> How we work</span>
          <h2>Our process, start to finish</h2>
          <p>
            A clear, predictable path from your first call to long after launch
            — with you in the loop the whole way.
          </p>

          <nav className="process-showcase-nav" aria-label="Our process">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  className={`process-showcase-nav-item${isActive ? " is-active" : ""}`}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  key={step.label}
                >
                  <span className="process-nav-icon"><Icon aria-hidden="true" /></span>
                  <span className="process-nav-copy">
                    <small>Step {step.number}</small>
                    <strong>{step.label}</strong>
                  </span>
                  <span className="process-nav-number">0{index + 1}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="process-orbit" style={{ "--active-step": activeIndex }}>
          <div className="process-orbit-track" aria-hidden="true" />
          <div className="process-orbit-progress" aria-hidden="true" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <button
                className={`process-orbit-node node-${index + 1}${index === activeIndex ? " is-active" : ""}`}
                type="button"
                aria-label={`Show ${step.label}`}
                onClick={() => setActiveIndex(index)}
                key={step.label}
              >
                <Icon aria-hidden="true" />
              </button>
            );
          })}

          <div className="process-orbit-core">
            <div className="process-core-content" key={activeStep.label}>
              <span className="process-core-icon"><ActiveIcon aria-hidden="true" /></span>
              <small>Step {activeStep.number} / 05</small>
              <h3>{activeStep.label}</h3>
              <p>{activeStep.description}</p>
              <div className="process-core-dots" aria-hidden="true">
                {steps.map((step, index) => <i className={index === activeIndex ? "is-active" : ""} key={step.label} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;
