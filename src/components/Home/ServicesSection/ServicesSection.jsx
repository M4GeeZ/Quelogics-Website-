import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Bot,
  Check,
  Code2,
  Cpu,
  Globe2,
  LayoutDashboard,
  Palette,
  Smartphone,
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

// Keep the detailed source content in one place but group it into a small set
// of homepage choices. Arrows within the details panel navigate sub-services.
const slide = (index, overrides = {}) => ({
  ...services[index],
  tech: serviceTech[index] || [],
  href: serviceLinks[index],
  ...overrides,
});

const serviceGroups = [
  {
    title: "AI & Automation",
    icon: Cpu,
    slides: [
      slide(0, { title: "Artificial Intelligence (AI)" }),
      slide(1, { title: "Generative & Agentic AI" }),
      slide(2, { title: "RAG & Knowledge-Based AI" }),
      slide(3, { title: "Large Language Models (LLMs)" }),
      slide(4, { title: "AI Workflow Automation" }),
    ],
  },
  {
    title: "Software Development",
    icon: Code2,
    slides: [
      slide(5, {
        title: "Desktop & Custom Business Software",
        description: "Purpose-built desktop applications, internal tools, management systems, and business software shaped around your actual operations.",
        features: [
          ["Desktop & internal systems", "tools for inventory, finance, operations, and teams."],
          ["Connected workflows", "secure data, user roles, reporting, and integrations."],
          ["Maintainable engineering", "software that can grow with your business."],
        ],
      }),
      slide(7, {
        title: "Web Application Development",
        description: "Secure, responsive web apps, customer portals, dashboards, and platforms built for your users and workflows.",
        features: [
          ["Modern web apps", "fast, accessible experiences for every screen."],
          ["Business portals", "self-service tools, dashboards, and administration."],
          ["Reliable architecture", "APIs, permissions, and performance built in."],
        ],
      }),
      slide(5, {
        title: "Mobile Apps for iOS & Android",
        tag: "DEV",
        icon: Smartphone,
        href: "/services/mobile-app-development",
        description: "Native and cross-platform mobile applications that feel natural on iPhone and Android, from design through launch.",
        features: [
          ["iOS & Android", "platform-friendly interactions and polished performance."],
          ["Cross-platform delivery", "shared engineering where it makes sense."],
          ["Launch & iteration", "app store readiness, analytics, and future updates."],
        ],
        tech: [
          { label: "React Native", Icon: MonitorSmartphone, color: "#0B7837" },
          { label: "iOS", Icon: Smartphone, color: "#04213A" },
          { label: "Android", Icon: Smartphone, color: "#10AC4F" },
          { label: "APIs", Icon: Plug, color: "#04213A" },
        ],
      }),
      slide(6, { title: "SaaS & Product Development" }),
      slide(8, { title: "Websites & eCommerce" }),
    ],
  },
  {
    title: "CRM & Integrations",
    icon: Plug,
    slides: [
      slide(9, { title: "API & System Integrations" }),
      slide(9, {
        title: "CRM Setup & Automation",
        href: "/services/crm-automation",
        description: "Bring leads, conversations, and customer records into one dependable CRM system with fewer manual handoffs.",
        features: [
          ["CRM implementation", "configure pipelines, roles, and essential data."],
          ["Automated follow-ups", "route leads and keep opportunities moving."],
          ["Connected reporting", "link marketing, sales, and service activity."],
        ],
      }),
      slide(4, { title: "Workflow & Operations Automation", href: "/services/workflow-automation" }),
    ],
  },
  {
    title: "SEO & Search Growth",
    icon: Search,
    slides: [
      slide(12, { title: "Search Engine Optimization (SEO)" }),
      slide(12, {
        title: "AI Search & Answer Engine Optimization",
        href: "/services/aeo",
        description: "Make your content easier for search engines and AI-powered answer experiences to understand, reference, and recommend.",
        features: [
          ["Answer-ready content", "clear explanations structured around real questions."],
          ["Entity & technical signals", "help discovery systems interpret your expertise."],
          ["Measurement", "track valuable visibility and qualified traffic."],
        ],
      }),
      slide(13, { title: "Conversion Rate Optimization" }),
    ],
  },
  {
    title: "Marketing & Lead Generation",
    icon: Megaphone,
    slides: [
      slide(10, { title: "Performance Marketing" }),
      slide(11, { title: "Google Ads & Lead Generation" }),
      slide(14, { title: "Marketing & Lifecycle Automation" }),
    ],
  },
  {
    title: "Design & Creative",
    icon: Palette,
    slides: [
      {
        tag: "DESIGN",
        title: "UI / UX Design",
        href: "/services/ui-ux-design",
        description: "Thoughtful interfaces, user journeys, and digital experiences that feel effortless and help people take action.",
        features: [
          ["Research & strategy", "understand users before drawing screens."],
          ["UI systems", "consistent layouts, components, and interactions."],
          ["Usability testing", "refine experiences with real feedback."],
        ],
        tech: serviceTech[7].filter(({ label }) => ["Figma", "React", "Tailwind CSS"].includes(label)),
      },
      {
        tag: "CREATIVE",
        title: "Video Editing & Reels",
        href: "/services/video-editing",
        description: "Clear, engaging edits for brand videos, social reels, product demos, and short-form campaigns.",
        features: [
          ["Purposeful storytelling", "strong pacing and an easy-to-follow message."],
          ["Platform-ready exports", "formats tailored for each social channel."],
          ["Finishing & polish", "subtitles, audio cleanup, and colour refinement."],
        ],
        tech: [],
      },
      {
        tag: "CREATIVE",
        title: "Graphic Design & Brand Identity",
        href: "/services/graphic-design",
        description: "Consistent graphic design across brand assets, campaigns, presentations, and visual communication.",
        features: [
          ["Brand-led design", "a recognizable visual system across channels."],
          ["Campaign assets", "professional creative for digital and print."],
          ["Reusable templates", "work your team can extend with confidence."],
        ],
        tech: serviceTech[7].filter(({ label }) => label === "Figma"),
      },
    ],
  },
];

const ServicesSection = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".services-explorer-heading > :not(.sx-see-all)", {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-explorer-heading",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".sx-shell", {
        y: 34,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sx-shell",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  const activeGroup = serviceGroups[activeGroupIndex];
  const active = activeGroup.slides[activeSlideIndex];

  const selectGroup = (index, scrollToDetail = false) => {
    if (index !== activeGroupIndex) {
      setActiveGroupIndex(index);
      setActiveSlideIndex(0);
      setSlideDirection("next");
    }
    if (scrollToDetail && window.matchMedia("(max-width: 1100px)").matches) {
      document.getElementById("service-detail-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const changeSlide = (delta) => {
    setSlideDirection(delta < 0 ? "previous" : "next");
    setActiveSlideIndex((current) =>
      (current + delta + activeGroup.slides.length) % activeGroup.slides.length,
    );
  };

  return (
    <section className="services-explorer" ref={sectionRef}>
      <div className="services-explorer-heading">
        <h2>Your team isn&apos;t slow. Your systems are.</h2>
        <p>
          QueLogics replaces disconnected tools, manual approvals, hand-built
          reports, and missed follow-ups with one connected system designed
          around how your business actually works.
        </p>
        <Link to="/services" className="sx-see-all">See All Services</Link>
      </div>

      <div className="sx-shell">
        <div className="sx-cards" role="tablist" aria-label="Explore QueLogics service categories">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;
            const selected = index === activeGroupIndex;
            return (
              <button
                key={group.title}
                type="button"
                id={`service-tab-${index}`}
                role="tab"
                aria-selected={selected}
                aria-controls="service-detail-panel"
                className={`sx-card${selected ? " is-active" : ""}`}
                onClick={() => selectGroup(index, true)}
              >
                <span className="sx-card-icon" aria-hidden="true"><Icon /></span>
                <span className="sx-card-title">{group.title}</span>
              </button>
            );
          })}
        </div>

        <div
          className="sx-detail"
          id="service-detail-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${activeGroupIndex}`}
          aria-live="polite"
        >
          <button
            type="button"
            className="sx-step-nav sx-step-nav--prev"
            aria-label={`Previous ${activeGroup.title} service`}
            onClick={() => changeSlide(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <div
            className={`sx-detail-inner sx-detail-inner--${slideDirection}`}
            key={`${activeGroupIndex}-${activeSlideIndex}`}
          >
            <p className="sx-detail-context">{activeGroup.title}</p>
            <h3>{active.title}</h3>
            <p className="sx-detail-lead">{active.description}</p>

            <ul className="sx-features">
              {active.features.map(([title, detail]) => (
                <li key={title}>
                  <Check aria-hidden="true" />
                  <span><strong>{title}:</strong> {detail}</span>
                </li>
              ))}
            </ul>

            {active.tech?.length > 0 && (
              <>
                <h4>Technologies we use</h4>
                <ul className="sx-chips">
                  {active.tech.map(({ label, Icon, color }) => (
                    <li key={label}>
                      <Icon aria-hidden="true" style={{ color }} />
                      {label}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link to={active.href} className="sx-learn">
              Learn More <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="sx-step-nav sx-step-nav--next"
            aria-label={`Next ${activeGroup.title} service`}
            onClick={() => changeSlide(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
