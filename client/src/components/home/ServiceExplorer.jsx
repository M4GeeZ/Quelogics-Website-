import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Code2,
  Cpu,
  Globe2,
  LayoutDashboard,
  Layers3,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Plug,
  Search,
  Target,
  WandSparkles,
  Workflow,
} from "lucide-react";
import "./serviceExplorer.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Artificial Intelligence (AI)",
    tag: "AI",
    icon: Cpu,
    description:
      "We design practical AI systems that fit into your operations, improve decisions, and create measurable business value.",
    features: [
      ["Applied intelligence", "solutions shaped around real workflows."],
      ["Seamless integration", "AI that works with your existing stack."],
      ["Measurable outcomes", "clear gains in speed, quality, and cost."],
    ],
  },
  {
    title: "Generative AI & Agentic AI",
    tag: "AI",
    icon: Bot,
    description:
      "Autonomous agents and generative systems that research, draft, decide, and act while keeping your team in control.",
    features: [
      ["AI agents & copilots", "automate multi-step work end to end."],
      ["Human checkpoints", "approval flows for every critical action."],
      ["Secure orchestration", "controlled tools, data, and permissions."],
    ],
  },
  {
    title: "Retrieval-Augmented Generation",
    tag: "AI",
    icon: Layers3,
    description:
      "Ground your AI in company knowledge so every answer stays accurate, current, and trustworthy.",
    features: [
      ["Private knowledge bases", "secure answers from your documents."],
      ["Vector search", "fast, relevant retrieval at scale."],
      ["Source-aware responses", "traceable answers your team can trust."],
    ],
  },
  {
    title: "Large Language Models (LLMs)",
    tag: "AI",
    icon: MessageSquare,
    description:
      "The right model, tuned and deployed for your exact use case—not a generic chatbot layered onto your business.",
    features: [
      ["Model selection", "matched to your task, risk, and budget."],
      ["Fine-tuning & evals", "quality you can test and measure."],
      ["Production deployment", "reliable systems built for real users."],
    ],
  },
  {
    title: "AI Automation Systems",
    tag: "AI",
    icon: Workflow,
    description:
      "Turn repeatable manual work into dependable AI workflows so your team can stop chasing updates and focus on growth.",
    features: [
      ["Workflow mapping", "find the highest-impact automation points."],
      ["Smart routing", "move work to the right system automatically."],
      ["Monitoring & alerts", "keep every automated process visible."],
    ],
  },
  {
    title: "Custom Software Development",
    tag: "DEV",
    icon: Code2,
    description:
      "Purpose-built software engineered around the way your business actually works, from first prototype to scale.",
    features: [
      ["Product strategy", "a focused roadmap before development starts."],
      ["Modern engineering", "clean, maintainable, and secure code."],
      ["Long-term scalability", "architecture ready for your next stage."],
    ],
  },
  {
    title: "SaaS Development",
    tag: "DEV",
    icon: LayoutDashboard,
    description:
      "Launch reliable SaaS products with thoughtful onboarding, subscriptions, permissions, analytics, and admin tooling.",
    features: [
      ["MVP to platform", "ship fast without creating future bottlenecks."],
      ["Billing & access", "plans, roles, usage, and account controls."],
      ["Product analytics", "see how customers adopt and retain."],
    ],
  },
  {
    title: "Web Development",
    tag: "WEB",
    icon: MonitorSmartphone,
    description:
      "Build a website that converts instead of merely existing, with fast performance, clear journeys, and measurable intent.",
    features: [
      ["Responsive experiences", "consistent quality on every screen."],
      ["Performance first", "fast loading and smooth interaction."],
      ["Conversion-ready UX", "clear journeys built around user intent."],
    ],
  },
  {
    title: "WordPress, Shopify & Webflow",
    tag: "WEB",
    icon: Globe2,
    description:
      "Flexible marketing and commerce experiences your internal team can manage without sacrificing custom design.",
    features: [
      ["Custom implementation", "brand-led layouts beyond templates."],
      ["Easy content control", "simple editing for your day-to-day team."],
      ["Growth integrations", "payments, CRM, analytics, and automation."],
    ],
  },
  {
    title: "API Integrations & CRM Automation",
    tag: "OPS",
    icon: Plug,
    description:
      "Make your tools work as one connected system with reliable APIs, clean data movement, and automated CRM actions.",
    features: [
      ["System integration", "connect the platforms your team relies on."],
      ["CRM workflows", "automate handoffs, follow-ups, and updates."],
      ["Data reliability", "validation, logging, and failure recovery."],
    ],
  },
  {
    title: "Performance Marketing",
    tag: "GROWTH",
    icon: Target,
    description:
      "Performance programs built around profitable acquisition, strong creative testing, and decisions backed by clean data.",
    features: [
      ["Channel strategy", "focus spend where it can compound."],
      ["Creative testing", "learn quickly from structured experiments."],
      ["Revenue reporting", "connect campaign results to business value."],
    ],
  },
  {
    title: "Google Ads & Lead Generation",
    tag: "GROWTH",
    icon: Megaphone,
    description:
      "Replace cold-contact chasing with a qualified lead system built around search intent, focused journeys, and disciplined optimization.",
    features: [
      ["Intent-led campaigns", "reach buyers already searching."],
      ["Lead quality systems", "optimize for customers, not empty forms."],
      ["Ongoing refinement", "improve bids, terms, ads, and pages."],
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    tag: "GROWTH",
    icon: Search,
    description:
      "Build durable organic visibility through technical foundations, search-led content, and authority that compounds.",
    features: [
      ["Technical SEO", "remove the issues holding rankings back."],
      ["Content strategy", "target valuable questions and buying intent."],
      ["Authority growth", "earn trust with relevant quality signals."],
    ],
  },
  {
    title: "Conversion Rate Optimization",
    tag: "GROWTH",
    icon: BarChart3,
    description:
      "Turn more of your existing traffic into customers with research-led changes, focused experiments, and clearer journeys.",
    features: [
      ["Behavior analysis", "find the friction users actually experience."],
      ["Experiment design", "test meaningful improvements with rigor."],
      ["Conversion systems", "make learning an ongoing growth process."],
    ],
  },
  {
    title: "Marketing Automation",
    tag: "GROWTH",
    icon: WandSparkles,
    description:
      "Create timely, personal customer journeys across email, CRM, and sales without adding manual work to your team.",
    features: [
      ["Lifecycle journeys", "guide every lead from interest to loyalty."],
      ["Behavior triggers", "respond automatically to meaningful actions."],
      ["Clean measurement", "understand which journeys drive revenue."],
    ],
  },
];

const ServiceCard = ({ service, depth, isEntering, isTop }) => {
  const ServiceIcon = service.icon;

  return (
    <article
      className={`services-explorer-stack-card${isEntering ? " is-entering" : ""}`}
      aria-hidden={isTop ? undefined : "true"}
      style={{
        "--stack-depth": depth,
        zIndex: depth === 0 ? 20 : 20 - depth,
      }}
    >
      <div className="services-explorer-visual">
        <div className="services-explorer-visual-glow"></div>
        <span className="services-explorer-tag">
          <i></i>
          {service.tag}
        </span>
        <ServiceIcon
          className="services-explorer-watermark"
          aria-hidden="true"
        />
        <span className="services-explorer-spark spark-one"></span>
        <span className="services-explorer-spark spark-two"></span>
      </div>

      <div className="services-explorer-copy">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <h4>What changes for your team</h4>
        <ul>
          {service.features.map(([title, detail]) => (
            <li key={title}>
              <Check aria-hidden="true" />
              <span>
                <strong>{title}:</strong> {detail}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="/services"
          className="services-explorer-link"
          tabIndex={isTop ? 0 : -1}
        >
          Explore this capability
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

const ServiceExplorer = () => {
  const [cardStack, setCardStack] = useState([0]);
  const [enteringIndex, setEnteringIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const navRef = useRef(null);
  const activeIndicatorRef = useRef(null);
  const activeIndex = cardStack[cardStack.length - 1];

  useEffect(() => {
    if (enteringIndex === null) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setEnteringIndex(null), 720);
    return () => window.clearTimeout(timeout);
  }, [enteringIndex]);

  const selectService = (index) => {
    if (index === activeIndex) {
      return;
    }

    setEnteringIndex(index);
    setCardStack((currentStack) => [
      ...currentStack.filter((serviceIndex) => serviceIndex !== index),
      index,
    ]);
  };

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".services-explorer-heading > *", {
        y: 60,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-explorer-heading",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".services-explorer-shell", {
        y: 90,
        opacity: 0,
        scale: 0.985,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-explorer-shell",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".services-explorer-nav-item", {
        x: -24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.035,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-explorer-nav",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const indicator = activeIndicatorRef.current;
    const activeButton = nav?.querySelector(`#service-tab-${activeIndex}`);

    if (!nav || !indicator || !activeButton) {
      return undefined;
    }

    const moveIndicator = () => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        gsap.set(indicator, { autoAlpha: 0 });
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      gsap.to(indicator, {
        x: buttonRect.left - navRect.left,
        y: buttonRect.top - navRect.top,
        width: buttonRect.width,
        height: buttonRect.height,
        autoAlpha: 1,
        duration: 0.56,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    moveIndicator();
    window.addEventListener("resize", moveIndicator);

    return () => {
      window.removeEventListener("resize", moveIndicator);
      gsap.killTweensOf(indicator);
    };
  }, [activeIndex]);

  return (
    <section className="services-explorer" ref={sectionRef}>
      <div className="services-explorer-heading">
        <span>What we close gaps in</span>
        <h2>Your team isn&apos;t slow. Your systems are.</h2>
        <p>
          Quelogics replaces disconnected tools, manual approvals, hand-built
          reports, and missed follow-ups with one connected system designed
          around how your business actually works.
        </p>
      </div>

      <div className="services-explorer-shell">
        <p className="services-explorer-swipe-hint" aria-hidden="true">
          Slide to view more <span>→</span>
        </p>
        <div
          className="services-explorer-nav"
          ref={navRef}
          role="tablist"
          aria-label="Explore our services"
          aria-orientation="vertical"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeIndex;
            const isHovered = index === hoveredIndex;

            return (
              <button
                className={`services-explorer-nav-item${isActive ? " is-active" : ""}${isHovered ? " is-hovered" : ""}`}
                id={`service-tab-${index}`}
                type="button"
                role="tab"
                aria-controls="service-detail-panel"
                aria-selected={isActive}
                onClick={() => selectService(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                key={service.title}
              >
                <Icon aria-hidden="true" />
                <span>{service.title}</span>
              </button>
            );
          })}
          <span
            className="services-explorer-active-indicator"
            ref={activeIndicatorRef}
            aria-hidden="true"
          ></span>
        </div>

        <div
          className="services-explorer-detail"
          id="service-detail-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${activeIndex}`}
          aria-live="polite"
        >
          <div className="services-explorer-card-stack">
            {cardStack.map((serviceIndex, stackPosition) => (
              <ServiceCard
                key={services[serviceIndex].title}
                service={services[serviceIndex]}
                depth={Math.min(cardStack.length - 1 - stackPosition, 6)}
                isEntering={serviceIndex === enteringIndex}
                isTop={stackPosition === cardStack.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExplorer;
