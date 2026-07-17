import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Code2, LifeBuoy, PenTool, Rocket } from "lucide-react";
import "./processShowcase.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "discovery",
    label: "Discovery",
    title: "We find the signal in the noise.",
    description:
      "We learn how your business works, where momentum is being lost, and what a measurable win looks like.",
    icon: Compass,
  },
  {
    id: "design",
    label: "Design",
    title: "We turn the strategy into a clear experience.",
    description:
      "Flows, systems, and interfaces are shaped together so the final product feels obvious to use.",
    icon: PenTool,
  },
  {
    id: "build",
    label: "Build",
    title: "We build for the next stage, not just launch day.",
    description:
      "Our engineers ship in focused increments, keeping quality high and progress visible at every step.",
    icon: Code2,
  },
  {
    id: "launch",
    label: "Launch",
    title: "We launch with a plan for momentum.",
    description:
      "Tracking, performance, and growth loops are ready before your product meets its first real users.",
    icon: Rocket,
  },
  {
    id: "support",
    label: "Support",
    title: "We stay close after the handoff.",
    description:
      "Your team gets a reliable partner to improve, automate, and keep the system moving forward.",
    icon: LifeBuoy,
  },
];

const DiscoveryVisual = () => (
  <div className="process-stage process-stage-discovery">
    <div className="process-discovery-map">
      <span className="process-map-orbit orbit-one"></span>
      <span className="process-map-orbit orbit-two"></span>
      <span className="process-map-node node-one">01</span>
      <span className="process-map-node node-two">02</span>
      <span className="process-map-node node-three">03</span>
      <span className="process-map-line line-one"></span>
      <span className="process-map-line line-two"></span>
      <span className="process-map-center">Q</span>
    </div>
    <div className="process-stage-caption">
      <span>Signal map</span>
      <strong>Clarity before complexity</strong>
    </div>
  </div>
);

const DesignVisual = () => (
  <div className="process-stage process-stage-design">
    <div className="process-design-browser">
      <div className="process-browser-topbar"><i></i><i></i><i></i><span>product-system / home</span></div>
      <div className="process-design-layout">
        <div className="process-design-sidebar"><b></b><b></b><b></b><b></b></div>
        <div className="process-design-content">
          <span className="process-design-label">SYSTEM OVERVIEW</span>
          <strong>One clear path<br />from idea to impact.</strong>
          <div className="process-design-cards"><i></i><i></i><i></i></div>
        </div>
      </div>
    </div>
    <div className="process-stage-caption">
      <span>Experience design</span>
      <strong>Every detail has a job</strong>
    </div>
  </div>
);

const BuildVisual = () => (
  <div className="process-stage process-stage-build">
    <div className="process-terminal">
      <div className="process-terminal-head"><span>deploy / quelogics</span><b>● live</b></div>
      <div className="process-code-lines">
        <span><i>01</i><em>const</em> system = <b>build</b>(growth);</span>
        <span><i>02</i>system.<b>connect</b>(teams, tools);</span>
        <span><i>03</i>system.<b>measure</b>(outcomes);</span>
        <span><i>04</i><strong>ready</strong> &nbsp; shipped with confidence_</span>
      </div>
      <div className="process-terminal-progress"><span></span></div>
    </div>
    <div className="process-stage-caption">
      <span>Product engineering</span>
      <strong>Built to keep moving</strong>
    </div>
  </div>
);

const LaunchVisual = () => (
  <div className="process-stage process-stage-launch">
    <div className="process-launch-dashboard">
      <div className="process-launch-stats"><span><i>+38%</i><b>qualified leads</b></span><span><i>2.4×</i><b>faster workflow</b></span></div>
      <div className="process-chart"><span></span><span></span><span></span><span></span><span></span><span></span><b></b></div>
      <div className="process-chart-label"><span>Momentum</span><strong>Last 90 days</strong></div>
    </div>
    <div className="process-stage-caption">
      <span>Growth launch</span>
      <strong>Make the win visible</strong>
    </div>
  </div>
);

const SupportVisual = () => (
  <div className="process-stage process-stage-support">
    <div className="process-support-panel">
      <div className="process-support-head"><span>system health</span><b><i></i> all systems good</b></div>
      <div className="process-support-health"><strong>99.98%</strong><span>uptime this month</span><em></em></div>
      <div className="process-support-row"><i></i><span>Automations</span><b>Running</b></div>
      <div className="process-support-row"><i></i><span>Integrations</span><b>Synced</b></div>
    </div>
    <div className="process-stage-caption">
      <span>Continuous partnership</span>
      <strong>Better every iteration</strong>
    </div>
  </div>
);

const stageVisuals = {
  discovery: DiscoveryVisual,
  design: DesignVisual,
  build: BuildVisual,
  launch: LaunchVisual,
  support: SupportVisual,
};

const ProcessShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const activeStep = steps[activeIndex];
  const ActiveVisual = stageVisuals[activeStep.id];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".process-showcase-copy > *", {
        y: 38,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-showcase-section",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".process-showcase-panel", {
        x: 42,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-showcase-panel",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="process-showcase-section" ref={sectionRef}>
      <div className="process-showcase-shell">
        <div className="process-showcase-copy">
          <span className="process-showcase-eyebrow">A better way to move</span>
          <h2>From first question to <em>real momentum.</em></h2>
          <p>
            A focused process keeps the right people in the room and the next
            best decision in view.
          </p>

          <nav className="process-showcase-nav" aria-label="Our process">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  className={`process-showcase-nav-item${isActive ? " is-active" : ""}`}
                  type="button"
                  key={step.id}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="process-nav-icon"><Icon aria-hidden="true" /></span>
                  <span className="process-nav-copy">
                    <strong>{step.label}</strong>
                    <small>{step.id === "support" ? "Keep improving" : `Step 0${index + 1}`}</small>
                  </span>
                  <span className="process-nav-arrow">↗</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className={`process-showcase-panel is-${activeStep.id}`}>
          <div className="process-panel-topline">
            <span><i></i> Quelogics / {activeStep.label}</span>
            <small>0{activeIndex + 1} / 05</small>
          </div>
          <div className="process-panel-visual" key={activeStep.id}>
            <ActiveVisual />
          </div>
          <div className="process-panel-footer">
            <div>
              <span>{activeStep.label}</span>
              <h3>{activeStep.title}</h3>
            </div>
            <p>{activeStep.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;
