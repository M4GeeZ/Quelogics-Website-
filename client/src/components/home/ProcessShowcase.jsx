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
    title: "We find the work your system should handle.",
    description:
      "We map the repeated tasks, disconnected tools, slow approvals, and missed handoffs that quietly drain time and revenue.",
    icon: Compass,
  },
  {
    id: "design",
    label: "Design",
    title: "We connect the path from task to outcome.",
    description:
      "Workflows, data, and interfaces are shaped together so the new system feels obvious to use and easy to adopt.",
    icon: PenTool,
  },
  {
    id: "build",
    label: "Build",
    title: "We turn repeated work into reliable software.",
    description:
      "Our engineers ship in focused increments with quality assurance built in, keeping progress visible and ownership in your hands.",
    icon: Code2,
  },
  {
    id: "launch",
    label: "Launch",
    title: "We make the win measurable from day one.",
    description:
      "Tracking, performance, and growth loops are ready before launch so every improvement can be seen, tested, and scaled.",
    icon: Rocket,
  },
  {
    id: "support",
    label: "Support",
    title: "We improve the system as your business grows.",
    description:
      "No runaround and no dependency traps—just a reliable partner improving automations, integrations, and performance over time.",
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
          <span className="process-showcase-eyebrow">No runaround. Just systems that work.</span>
          <h2>From painful bottleneck to <em>real momentum.</em></h2>
          <p>
            No bloated retainers or vendor lock-in. We find the gap, design the
            right system, build it, launch it, and keep improving what matters.
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
