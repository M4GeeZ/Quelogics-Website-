import { useState } from "react";
import { Bot, Cloud, Handshake, Layers3, Target } from "lucide-react";
import "./WhyChooseSection.css";

// Same logo as the navbar: ring + green handle + green dot, "Que" + green "Logics".
export const QueLogicsLogo = ({ withText = true, className = "" }) => (
  <span className={`ql-brand${className ? ` ${className}` : ""}`} aria-label="QueLogics">
    <span className="ql-brand-mark" aria-hidden="true"><i /></span>
    {withText && (
      <span className="ql-brand-text" aria-hidden="true">
        Que<span>Logics</span>
      </span>
    )}
  </span>
);

// Each reason has a node in the diagram; x / y are percentages of the diagram box.
const reasons = [
  {
    id: "outcome",
    icon: Target,
    node: "Outcome-first",
    title: "Outcome-First Approach",
    text: "We start with the bottleneck, not the tech stack. Every build is tied to a measurable business result your team can see.",
    x: 22,
    y: 16,
    trace: "M300 250 H200 V80 H132",
  },
  {
    id: "team",
    icon: Layers3,
    node: "One team",
    title: "Full-Stack, One Team",
    text: "Strategy, design, engineering, and growth under one roof, so nothing gets lost in hand-offs between agencies.",
    x: 72,
    y: 18,
    trace: "M300 250 V170 H432 V90",
  },
  {
    id: "ai",
    icon: Bot,
    node: "AI-native",
    title: "AI-Native Delivery",
    text: "Practical AI and automation built into your products and workflows, with human checkpoints wherever decisions matter.",
    x: 11,
    y: 56,
    trace: "M300 250 H66 V280",
  },
  {
    id: "scale",
    icon: Cloud,
    node: "Scalable",
    title: "Cloud-Ready & Scalable",
    text: "Clean architecture, secure cloud infrastructure, and performance planned from day one, ready for your next stage of growth.",
    x: 85,
    y: 66,
    trace: "M300 250 H380 V330 H510",
  },
  {
    id: "transparent",
    icon: Handshake,
    node: "Transparent",
    title: "Transparent & Strategic",
    text: "Weekly updates, clear estimates, and full ownership of your code and data. No vendor lock-in, and support that continues after launch.",
    x: 40,
    y: 86,
    trace: "M300 250 V350 H240 V430",
  },
];

// Decorative circuit lines that run off to the edges of the diagram.
const extraTraces = [
  "M132 80 V20",
  "M432 90 H560 V30",
  "M66 280 V410 H10",
  "M510 330 V480",
  "M240 430 H110 V490",
  "M432 170 H590",
  "M200 80 H40",
];

const junctions = [
  [200, 80], [432, 170], [66, 250], [380, 330], [300, 350], [240, 430], [560, 90], [110, 430],
];

const WhyChooseSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="wc-section" aria-labelledby="wc-heading">
      <div className="wc-shell">
        <header className="wc-head">
          <h2 id="wc-heading">
            Why Choose <QueLogicsLogo className="ql-brand--heading" />?
          </h2>
          <p>Startup speed with enterprise discipline, and one team that owns the outcome.</p>
        </header>

        <div className="wc-body">
          <div className="wc-diagram">
            <svg viewBox="0 0 600 500" aria-hidden="true" preserveAspectRatio="none">
              {extraTraces.map((d) => (
                <path className="wc-trace wc-trace--faint" d={d} key={d} />
              ))}
              {reasons.map((reason, index) => (
                <g className={`wc-link${index === active ? " is-active" : ""}`} key={reason.id}>
                  <path className="wc-trace" d={reason.trace} />
                  <path
                    className="wc-pulse"
                    d={reason.trace}
                    pathLength="100"
                    style={{ animationDelay: `${index * -0.7}s` }}
                  />
                </g>
              ))}
              {junctions.map(([cx, cy]) => (
                <circle className="wc-junction" cx={cx} cy={cy} r="4.5" key={`${cx}-${cy}`} />
              ))}
            </svg>

            <div className="wc-core" aria-hidden="true">
              <span className="wc-core-ring" />
              <QueLogicsLogo withText={false} className="ql-brand--core" />
            </div>

            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <button
                  type="button"
                  className={`wc-node${index === active ? " is-active" : ""}`}
                  style={{ left: `${reason.x}%`, top: `${reason.y}%` }}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${reason.title}`}
                  key={reason.id}
                >
                  <span className="wc-node-dot">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="wc-node-label">{reason.node}</span>
                </button>
              );
            })}
          </div>

          <ul className="wc-list">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isOpen = index === active;
              return (
                <li className={`wc-item${isOpen ? " is-open" : ""}`} key={reason.id}>
                  <button
                    type="button"
                    className="wc-item-head"
                    aria-expanded={isOpen}
                    aria-controls={`wc-panel-${reason.id}`}
                    onClick={() => setActive(isOpen ? -1 : index)}
                  >
                    <Icon className="wc-item-icon" aria-hidden="true" />
                    <span className="wc-item-title">{reason.title}</span>
                    <span className="wc-plus" aria-hidden="true" />
                  </button>
                  <div className="wc-item-panel" id={`wc-panel-${reason.id}`} role="region">
                    <div>
                      <p>{reason.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
