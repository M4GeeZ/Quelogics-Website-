import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  DatabaseZap,
  Gauge,
  LayoutTemplate,
  MousePointerClick,
  Network,
  PanelsTopLeft,
  PenTool,
  RefreshCcw,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import "./Solutions.css";

gsap.registerPlugin(ScrollTrigger);

const heroSignals = [
  {
    issue: "Manual handoffs",
    action: "Orchestrate",
    result: "Faster flow",
  },
  {
    issue: "Weak conversion",
    action: "Clarify",
    result: "More action",
  },
  {
    issue: "Scattered systems",
    action: "Connect",
    result: "One view",
  },
];

const outcomePanels = [
  {
    number: "01",
    kicker: "Operations",
    title: "Remove the work that slows good teams down.",
    description:
      "We redesign the workflow first, then connect automation, approvals, data, and reporting into one dependable operating rhythm.",
    icon: Workflow,
    path: "/solutions/business-automation",
    link: "Automate manual operations",
    outcomes: ["Shorter cycle times", "Fewer avoidable errors", "Clear ownership"],
    visual: [
      { label: "Handoffs", value: "-46%" },
      { label: "Cycle time", value: "-32%" },
      { label: "Visibility", value: "+1 view" },
    ],
  },
  {
    number: "02",
    kicker: "Demand",
    title: "Turn attention into better-fit conversations.",
    description:
      "Positioning, landing journeys, acquisition, CRM logic, and lead follow-up work as one system—so volume does not hide quality.",
    icon: Target,
    path: "/solutions/lead-generation",
    link: "Generate qualified leads",
    outcomes: ["Sharper targeting", "Cleaner qualification", "Faster follow-up"],
    visual: [
      { label: "Signal quality", value: "High" },
      { label: "Lead routing", value: "Live" },
      { label: "Sales context", value: "Complete" },
    ],
  },
  {
    number: "03",
    kicker: "Conversion",
    title: "Make the next customer decision feel obvious.",
    description:
      "We simplify the message, remove journey friction, improve interface confidence, and build a learning loop around real behaviour.",
    icon: MousePointerClick,
    path: "/solutions/conversion-growth",
    link: "Improve website conversion",
    outcomes: ["Clearer value", "Lower journey friction", "Evidence-led iteration"],
    visual: [
      { label: "Clarity", value: "+28%" },
      { label: "Drop-off", value: "-19%" },
      { label: "Learning", value: "Always on" },
    ],
  },
  {
    number: "04",
    kicker: "Integration",
    title: "Create one reliable flow across every critical tool.",
    description:
      "APIs, CRM, operational platforms, analytics, and customer data become a monitored system instead of a collection of fragile workarounds.",
    icon: Network,
    path: "/solutions/system-integration",
    link: "Connect disconnected tools",
    outcomes: ["Consistent data", "Less duplicated work", "Recoverable integrations"],
    visual: [
      { label: "Systems", value: "Connected" },
      { label: "Sync state", value: "Healthy" },
      { label: "Exceptions", value: "Tracked" },
    ],
  },
];

const solutionFamilies = [
  {
    number: "01",
    eyebrow: "Product solutions",
    title: "Build the right product—and make it ready for what comes next.",
    icon: Rocket,
    links: [
      ["Launch an MVP", "/solutions/mvp-development", Rocket],
      ["Modernize legacy software", "/solutions/software-modernization", RefreshCcw],
      ["Build a customer portal", "/solutions/customer-portals", PanelsTopLeft],
      ["Quality assurance & testing", "/solutions/quality-assurance", ShieldCheck],
    ],
  },
  {
    number: "02",
    eyebrow: "Platform solutions",
    title: "Choose a platform your team can confidently operate and extend.",
    icon: LayoutTemplate,
    links: [
      ["WordPress", "/solutions/wordpress", Braces],
      ["Shopify", "/solutions/shopify", ShoppingBag],
      ["Webflow", "/solutions/webflow", LayoutTemplate],
      ["CRM & API integrations", "/solutions/crm-api-integrations", DatabaseZap],
    ],
  },
  {
    number: "03",
    eyebrow: "Connected delivery",
    title: "Combine strategy, design, engineering, and growth without handoff gaps.",
    icon: Sparkles,
    links: [
      ["Product discovery", "/services/ui-ux-design", Search],
      ["Experience design", "/services/ui-ux-design", PenTool],
      ["Software engineering", "/services/custom-software-development", Code2],
      ["Measurement & optimization", "/services/conversion-optimization", Gauge],
    ],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Frame the gap",
    text: "Define the business constraint, the people affected, and the evidence that proves progress.",
  },
  {
    number: "02",
    title: "Design the system",
    text: "Shape the workflow, experience, architecture, and measurement model as one connected plan.",
  },
  {
    number: "03",
    title: "Build in useful increments",
    text: "Release the highest-value pieces first, validate them in context, and reduce delivery risk early.",
  },
  {
    number: "04",
    title: "Improve what matters",
    text: "Use operational and customer signals to strengthen the solution after launch—not just maintain it.",
  },
];

const motionItems = [
  "Automation",
  "Qualified demand",
  "Customer portals",
  "MVP delivery",
  "System integration",
  "Conversion growth",
  "Software modernization",
  "Platform engineering",
];

const Solutions = () => {
  const pageRef = useRef(null);
  const engineRef = useRef(null);
  const outcomeStageRef = useRef(null);
  const processRef = useRef(null);

  useLayoutEffect(() => {
    document.body.classList.add("solutions-page-active");

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".solutions-hero-kicker", {
          y: 18,
          autoAlpha: 0,
          duration: 0.55,
        })
        .from(
          ".solutions-title-line > span",
          {
            yPercent: 118,
            rotate: 1.5,
            duration: 0.82,
            stagger: 0.07,
          },
          "-=0.22",
        )
        .from(
          ".solutions-hero-copy, .solutions-hero-actions, .solutions-hero-proof",
          {
            y: 26,
            autoAlpha: 0,
            duration: 0.68,
            stagger: 0.09,
          },
          "-=0.48",
        )
        .from(
          engineRef.current,
          {
            x: 44,
            scale: 0.95,
            autoAlpha: 0,
            duration: 0.95,
          },
          "-=0.78",
        );

      gsap.to(".solutions-engine-float", {
        y: -8,
        duration: 2.4,
        stagger: 0.18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.utils.toArray(".solutions-reveal").forEach((element) => {
        gsap.from(element, {
          y: 42,
          autoAlpha: 0,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      const media = gsap.matchMedia();

      media.add("(min-width: 981px)", () => {
        const panels = gsap.utils.toArray(".solutions-outcome-panel");

        if (!outcomeStageRef.current || panels.length < 2) return undefined;

        gsap.set(panels, {
          transformPerspective: 1400,
          transformOrigin: "50% 50%",
        });
        gsap.set(panels[0], { xPercent: 0, autoAlpha: 1, scale: 1, rotateY: 0 });
        gsap.set(panels.slice(1), {
          xPercent: 112,
          autoAlpha: 1,
          scale: 0.96,
          rotateY: -8,
        });

        const stackTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: outcomeStageRef.current,
            start: "top 82px",
            end: () => `+=${window.innerHeight * (panels.length * 1.05)}`,
            pin: true,
            scrub: 0.85,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        stackTimeline.to({}, { duration: 0.45 });

        panels.slice(1).forEach((panel, index) => {
          const previous = panels[index];
          const position = `panel-${index + 1}`;

          stackTimeline
            .addLabel(position)
            .to(
              previous,
              {
                xPercent: -12,
                yPercent: -2,
                scale: 0.91,
                rotateY: 6,
                autoAlpha: 0.42,
                duration: 0.68,
                ease: "power2.inOut",
              },
              position,
            )
            .to(
              panel,
              {
                xPercent: 0,
                yPercent: 0,
                scale: 1,
                rotateY: 0,
                autoAlpha: 1,
                duration: 0.78,
                ease: "power3.out",
              },
              position,
            )
            .to({}, { duration: 0.5 });
        });

        return () => stackTimeline.kill();
      });

      if (processRef.current) {
        gsap.fromTo(
          ".solutions-process-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 70%",
              end: "bottom 72%",
              scrub: 0.6,
            },
          },
        );

        gsap.from(".solutions-process-step", {
          x: 34,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 68%",
            once: true,
          },
        });
      }
    }, pageRef);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(refreshTimer);
      document.body.classList.remove("solutions-page-active");
      context.revert();
    };
  }, []);

  return (
    <main className="solutions-page" ref={pageRef}>
      <section className="hero-section solutions-hero">
        <div className="solutions-hero-grid" aria-hidden="true" />
        <div className="solutions-container solutions-hero-inner">
          <div className="solutions-hero-content">
            <p className="solutions-hero-kicker">
              <Sparkles aria-hidden="true" />
              Solutions built around the outcome
            </p>

            <h1>
              <span className="solutions-title-line">
                <span>Start with the gap.</span>
              </span>
              <span className="solutions-title-line solutions-title-accent">
                <span>Build the system</span>
              </span>
              <span className="solutions-title-line">
                <span>that closes it.</span>
              </span>
            </h1>

            <p className="solutions-hero-copy">
              Product, automation, integration, and growth capabilities come
              together around one measurable business problem—not a list of
              disconnected deliverables.
            </p>

            <div className="solutions-hero-actions">
              <a className="solutions-button solutions-button-primary" href="#solution-outcomes">
                Explore solution paths
                <ArrowRight aria-hidden="true" />
              </a>
              <Link className="solutions-button solutions-button-ghost" to="/contact">
                Talk through the challenge
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>

            <dl className="solutions-hero-proof">
              <div>
                <dt>Problem first</dt>
                <dd>No preset package</dd>
              </div>
              <div>
                <dt>Connected delivery</dt>
                <dd>One accountable team</dd>
              </div>
              <div>
                <dt>Measured progress</dt>
                <dd>Evidence over activity</dd>
              </div>
            </dl>
          </div>

          <div className="solutions-engine" ref={engineRef} aria-label="Animated solution flow from business friction to measurable outcome">
            <div className="solutions-engine-topline">
              <span><i /> Solution engine</span>
              <strong>Live</strong>
            </div>

            <div className="solutions-engine-core solutions-engine-float">
              <div className="solutions-engine-core-mark">
                <Sparkles aria-hidden="true" />
              </div>
              <span>QueLogics</span>
              <strong>Connected solution</strong>
            </div>

            <div className="solutions-engine-streams">
              {heroSignals.map((signal, index) => (
                <div className="solutions-engine-row" key={signal.issue}>
                  <div className="solutions-engine-label">
                    <small>Friction</small>
                    <span>{signal.issue}</span>
                  </div>
                  <div className="solutions-engine-track">
                    <span
                      className="solutions-engine-pulse"
                      style={{ "--pulse-delay": `${index * 0.68}s` }}
                    />
                    <em>{signal.action}</em>
                  </div>
                  <div className="solutions-engine-result solutions-engine-float">
                    <Check aria-hidden="true" />
                    <span>{signal.result}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="solutions-engine-footer">
              <span>Strategy</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Growth</span>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-outcomes-intro" id="solution-outcomes">
        <div className="solutions-container solutions-outcomes-heading solutions-reveal">
          <p className="solutions-kicker">Choose the gap in front of you</p>
          <h2>Four common outcomes. One connected way to deliver them.</h2>
          <p>
            Scroll through the paths below. Each one combines the disciplines
            required to make the result work in the real world.
          </p>
        </div>
      </section>

      <section className="solutions-outcome-stage" ref={outcomeStageRef} aria-label="Solution outcomes">
        <div className="solutions-outcome-stage-grid" aria-hidden="true" />
        <div className="solutions-outcome-rail" aria-hidden="true">
          <span>Outcome paths</span>
          <div>
            {outcomePanels.map((panel) => (
              <i key={panel.number}>{panel.number}</i>
            ))}
          </div>
        </div>

        <div className="solutions-outcome-panels">
          {outcomePanels.map((panel, index) => {
            const Icon = panel.icon;
            return (
              <article
                className={`solutions-outcome-panel solutions-outcome-panel-${index + 1}`}
                key={panel.title}
                style={{ "--panel-order": index }}
                data-number={panel.number}
              >
                <div className="solutions-outcome-copy">
                  <div className="solutions-outcome-meta">
                    <span>{panel.number}</span>
                    <p>{panel.kicker}</p>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{panel.title}</h3>
                  <p>{panel.description}</p>
                  <ul>
                    {panel.outcomes.map((outcome) => (
                      <li key={outcome}>
                        <Check aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link to={panel.path}>
                    {panel.link}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>

                <div className="solutions-outcome-visual" aria-hidden="true">
                  <div className="solutions-outcome-visual-head">
                    <span><i /> Outcome signal</span>
                    <em>{panel.number}</em>
                  </div>
                  <div className="solutions-outcome-bars">
                    {panel.visual.map((item, itemIndex) => (
                      <div key={item.label} style={{ "--bar-index": itemIndex }}>
                        <span>{item.label}</span>
                        <i><b /></i>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="solutions-outcome-wave">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="solutions-motion-band" aria-label="QueLogics solution capabilities">
        <div className="solutions-motion-track">
          {[...motionItems, ...motionItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              <Sparkles aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
        <div className="solutions-motion-track solutions-motion-track-reverse">
          {[...motionItems.slice().reverse(), ...motionItems.slice().reverse()].map((item, index) => (
            <span key={`${item}-reverse-${index}`}>
              <i />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="solutions-families">
        <div className="solutions-container">
          <div className="solutions-section-heading solutions-reveal">
            <p className="solutions-kicker">More ways to move forward</p>
            <h2>From first release to platform scale.</h2>
            <p>
              Pick a specific solution, or let us combine the right paths around
              the challenge you are solving.
            </p>
          </div>

          <div className="solutions-family-grid">
            {solutionFamilies.map((family) => {
              const FamilyIcon = family.icon;
              return (
                <article className="solutions-family solutions-reveal" key={family.number}>
                  <div className="solutions-family-heading">
                    <span>{family.number}</span>
                    <FamilyIcon aria-hidden="true" />
                  </div>
                  <p>{family.eyebrow}</p>
                  <h3>{family.title}</h3>
                  <div className="solutions-family-links">
                    {family.links.map(([label, path, Icon]) => (
                      <Link to={path} key={label}>
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="solutions-process" ref={processRef}>
        <div className="solutions-container solutions-process-layout">
          <div className="solutions-process-intro solutions-reveal">
            <p className="solutions-kicker">How we shape the solution</p>
            <h2>Enough structure to move fast. Enough learning to stay right.</h2>
            <p>
              The plan gets clearer as evidence improves. Decisions stay visible,
              and every phase is tied to the outcome established at the start.
            </p>
            <Link className="solutions-inline-link" to="/about">
              See how QueLogics works
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="solutions-process-list">
            <span className="solutions-process-line" aria-hidden="true">
              <i className="solutions-process-progress" />
            </span>
            {deliverySteps.map((step) => (
              <article className="solutions-process-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-cta">
        <div className="solutions-container solutions-cta-inner solutions-reveal">
          <div>
            <p className="solutions-kicker">Have a business gap to close?</p>
            <h2>Bring us the problem. We will shape the clearest path forward.</h2>
          </div>
          <Link className="solutions-button solutions-button-primary" to="/contact">
            Start a conversation
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Solutions;