import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
import { serviceTech, serviceLinks } from "./servicesTech";
import "./ServicesSection.css";
import "./ServicesExplorer.css";

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

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".services-explorer-heading > :not(.sx-see-all)", {
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

      gsap.from(".sx-shell", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sx-shell",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const active = services[activeIndex];
  const tech = serviceTech[activeIndex] || [];

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
        <Link to="/services" className="sx-see-all">
          See All Services
        </Link>
      </div>

      <div className="sx-shell">
        <div className="sx-cards" role="tablist" aria-label="Explore our services">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeIndex;

            return (
              <button
                className={`sx-card${isActive ? " is-active" : ""}`}
                id={`service-tab-${index}`}
                type="button"
                role="tab"
                aria-controls="service-detail-panel"
                aria-selected={isActive}
                onClick={() => {
                  setActiveIndex(index);
                  // On stacked (mobile/tablet) layouts the details sit below the cards.
                  if (window.matchMedia("(max-width: 1100px)").matches) {
                    document
                      .getElementById("service-detail-panel")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                key={service.title}
              >
                <span className="sx-card-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="sx-card-title">{service.title}</span>
              </button>
            );
          })}
        </div>

        <div
          className="sx-detail"
          id="service-detail-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${activeIndex}`}
          aria-live="polite"
        >
          <div className="sx-detail-inner" key={activeIndex}>
            <span className="sx-detail-tag">{active.tag}</span>
            <h3>{active.title}</h3>
            <p className="sx-detail-lead">{active.description}</p>

            <ul className="sx-features">
              {active.features.map(([title, detail]) => (
                <li key={title}>
                  <Check aria-hidden="true" />
                  <span>
                    <strong>{title}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>

            <h4>Technologies we use</h4>
            <ul className="sx-chips">
              {tech.map(({ label, Icon, color }) => (
                <li key={label}>
                  <Icon aria-hidden="true" style={{ color }} />
                  {label}
                </li>
              ))}
            </ul>

            <Link to={serviceLinks[activeIndex]} className="sx-learn">
              Learn More
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
