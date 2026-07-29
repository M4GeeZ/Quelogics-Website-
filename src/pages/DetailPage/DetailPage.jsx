import { useLayoutEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MoveDown,
  Sparkles,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findDetailContent } from "../../data/pageContent";
import "../Shared/PageStyles.css";
import "./DetailPage.css";

gsap.registerPlugin(ScrollTrigger);

const serviceDetailMeta = {
  "/services/custom-software-development": {
    category: "Development",
    visualLabel: "Purpose-built system",
    signals: ["Discover", "Engineer", "Evolve"],
    frictions: [
      "Off-the-shelf tools force teams into awkward workarounds.",
      "Critical workflows live across spreadsheets and disconnected platforms.",
      "Legacy software becomes expensive to change and difficult to trust.",
    ],
    capabilityCopy: [
      "We turn business goals, user needs, and technical constraints into a focused delivery roadmap.",
      "Secure applications are designed around the workflows your teams and customers actually use.",
      "APIs, cloud services, and data models are structured for reliability and future change.",
      "After launch, we measure use, improve performance, and extend the system without disrupting operations.",
    ],
  },
  "/services/custom-website-development": {
    category: "Development",
    visualLabel: "High-performance website",
    signals: ["Clarify", "Build", "Convert"],
    frictions: [
      "Visitors cannot quickly understand what makes the business different.",
      "Slow pages and inconsistent layouts weaken trust before a conversation starts.",
      "Marketing teams depend on developers for every routine content update.",
    ],
    capabilityCopy: [
      "We shape the information, messaging, and journeys around the actions that matter most.",
      "Responsive interfaces are engineered for speed, accessibility, and consistent behavior.",
      "Content systems and integrations give internal teams more control without adding fragility.",
      "Technical SEO, analytics, and performance checks are built into delivery—not added at the end.",
    ],
  },
  "/services/mobile-app-development": {
    category: "Development",
    visualLabel: "Mobile product",
    signals: ["Validate", "Launch", "Retain"],
    frictions: [
      "The first release is overloaded before the core customer value is proven.",
      "Mobile journeys feel like compressed websites instead of native experiences.",
      "Unclear analytics make it difficult to learn what users need next.",
    ],
    capabilityCopy: [
      "We define the strongest mobile use case, platform approach, and realistic first-release scope.",
      "Cross-platform engineering balances delivery speed with dependable device-level performance.",
      "Interaction design makes frequent tasks feel natural, fast, and easy to repeat.",
      "Launch instrumentation and iteration planning turn real usage into better product decisions.",
    ],
  },
  "/services/saas-development": {
    category: "Development",
    visualLabel: "Scalable SaaS",
    signals: ["Prove", "Productize", "Scale"],
    frictions: [
      "The roadmap grows faster than evidence about what customers will pay for.",
      "Early technical shortcuts make every new feature slower and riskier.",
      "Billing, permissions, onboarding, and reporting become disconnected experiences.",
    ],
    capabilityCopy: [
      "We prioritize the smallest credible product that can validate value with real customers.",
      "Multi-tenant foundations are planned for security, account separation, and controlled growth.",
      "Subscriptions, access, dashboards, and lifecycle journeys are connected as one product system.",
      "Architecture and delivery practices evolve as adoption, teams, and operational demands increase.",
    ],
  },
  "/services/ui-ux-design": {
    category: "Development",
    visualLabel: "Clear product experience",
    signals: ["Understand", "Simplify", "Test"],
    frictions: [
      "Users struggle to understand where to begin or what to do next.",
      "Inconsistent interface patterns create hesitation and support requests.",
      "Design decisions are approved internally without enough evidence from users.",
    ],
    capabilityCopy: [
      "Research and journey mapping reveal where users hesitate, abandon, or create workarounds.",
      "Wireframes make structure and flow tangible before expensive engineering decisions are locked in.",
      "A coherent visual system improves usability while giving the product a recognizable character.",
      "Prototype testing and design QA protect the intended experience through implementation.",
    ],
  },
  "/services/ai-chatbots-agents": {
    category: "AI & Automation",
    visualLabel: "Grounded AI assistant",
    signals: ["Ground", "Assist", "Improve"],
    frictions: [
      "Teams repeatedly answer the same questions across support and sales channels.",
      "Generic AI responses create risk because they are not grounded in approved knowledge.",
      "Automation is launched without visibility into accuracy, escalation, or business impact.",
    ],
    capabilityCopy: [
      "We identify conversations where an assistant can save time without removing necessary human judgment.",
      "Knowledge retrieval and response rules keep answers connected to trusted business information.",
      "Lead, support, and internal agents are integrated into the systems where work already happens.",
      "Guardrails, analytics, and review loops make quality measurable and continuously improvable.",
    ],
  },
  "/services/workflow-automation": {
    category: "AI & Automation",
    visualLabel: "Connected workflow",
    signals: ["Map", "Automate", "Monitor"],
    frictions: [
      "People spend hours moving information between tools and chasing approvals.",
      "Important tasks depend on memory, inboxes, and manual follow-up.",
      "Small process errors become expensive because they are discovered too late.",
    ],
    capabilityCopy: [
      "A workflow audit exposes bottlenecks, duplicate effort, and the best opportunities to automate.",
      "No-code and custom logic are selected according to complexity, control, and long-term ownership.",
      "Approvals, alerts, documents, and data move automatically while exceptions stay visible.",
      "Monitoring and recovery paths keep the workflow dependable as tools and volumes change.",
    ],
  },
  "/services/crm-automation": {
    category: "AI & Automation",
    visualLabel: "Reliable revenue system",
    signals: ["Capture", "Route", "Follow up"],
    frictions: [
      "Lead records are incomplete, duplicated, or distributed across disconnected sources.",
      "Opportunities wait too long because ownership and next actions are unclear.",
      "Reporting describes activity but does not explain pipeline health or conversion.",
    ],
    capabilityCopy: [
      "We clean the data model and align the CRM around the way your team actually sells and serves.",
      "Routing, tasks, and lifecycle stages keep every qualified opportunity moving with clear ownership.",
      "Dashboards connect pipeline movement to sources, actions, and commercial outcomes.",
      "Marketing, sales, service, and operational tools exchange customer data without repeated entry.",
    ],
  },
  "/services/api-integrations": {
    category: "AI & Automation",
    visualLabel: "Connected data flow",
    signals: ["Connect", "Validate", "Recover"],
    frictions: [
      "Teams re-enter the same information into multiple systems.",
      "Important data arrives late, incomplete, or in conflicting formats.",
      "Integration failures remain invisible until customers or operations are affected.",
    ],
    capabilityCopy: [
      "Custom APIs expose the right business functions with secure, documented interfaces.",
      "Legacy applications and cloud platforms are connected without forcing risky all-at-once replacement.",
      "Payments, CRM, ERP, identity, and specialist tools are orchestrated around complete workflows.",
      "Logging, retries, reconciliation, and alerts make failures visible and recoverable.",
    ],
  },
  "/services/ai-strategy": {
    category: "AI & Automation",
    visualLabel: "Practical AI roadmap",
    signals: ["Assess", "Prioritize", "Govern"],
    frictions: [
      "AI ideas compete for attention without a shared view of value or feasibility.",
      "Teams buy tools before understanding data readiness, ownership, and operating change.",
      "Risk, privacy, and quality questions appear late and slow implementation.",
    ],
    capabilityCopy: [
      "We assess workflows, data, skills, and constraints to establish an honest readiness baseline.",
      "Use cases are ranked by business value, implementation effort, risk, and learning potential.",
      "Prototypes and vendor evaluations turn assumptions into evidence before major investment.",
      "A phased roadmap defines governance, ownership, measures, and the path from pilot to operations.",
    ],
  },
  "/services/performance-marketing": {
    category: "Marketing & Visibility",
    visualLabel: "Measurable demand engine",
    signals: ["Reach", "Learn", "Scale"],
    frictions: [
      "Campaigns produce activity without a clear connection to qualified revenue.",
      "Creative decisions repeat opinions instead of building reusable evidence.",
      "Budgets shift too slowly because reporting is fragmented across channels.",
    ],
    capabilityCopy: [
      "Channel, audience, offer, and funnel strategy are aligned around a measurable commercial goal.",
      "Paid search and social campaigns are managed as one learning system rather than isolated tactics.",
      "Creative testing builds evidence about messages, formats, and customer motivations.",
      "Attribution and reporting turn performance data into clear decisions about where to invest next.",
    ],
  },
  "/services/google-ads": {
    category: "Marketing & Visibility",
    visualLabel: "High-intent acquisition",
    signals: ["Capture", "Qualify", "Optimize"],
    frictions: [
      "Spend is absorbed by broad searches and weak commercial intent.",
      "Ads and landing pages make different promises, reducing trust and conversion.",
      "Calls, forms, and offline outcomes are not connected back to campaign decisions.",
    ],
    capabilityCopy: [
      "Campaign structure and bidding are built around intent, economics, and the actions that create value.",
      "Keyword and competitor research reveal where demand exists and where differentiation matters.",
      "Landing journeys continue the ad promise with clearer proof, relevance, and next steps.",
      "Conversion and call tracking make optimization accountable to qualified business outcomes.",
    ],
  },
  "/services/website-seo": {
    category: "Marketing & Visibility",
    visualLabel: "Compounding visibility",
    signals: ["Discover", "Answer", "Earn trust"],
    frictions: [
      "Search engines cannot reliably understand or access important website content.",
      "Content targets keywords without answering the decisions customers are making.",
      "Visibility depends on isolated posts instead of a connected authority strategy.",
    ],
    capabilityCopy: [
      "Technical and on-page improvements make important pages easier to crawl, understand, and trust.",
      "Answer-engine strategy structures useful content for both traditional and AI-powered discovery.",
      "Topic planning builds depth and authority around the problems your business is qualified to solve.",
      "Measurement connects rankings and visibility to qualified visits, actions, and commercial learning.",
    ],
  },
  "/services/conversion-optimization": {
    category: "Marketing & Visibility",
    visualLabel: "Higher-converting journey",
    signals: ["Observe", "Improve", "Prove"],
    frictions: [
      "Valuable traffic reaches the site but hesitates before taking the next step.",
      "Teams redesign pages without knowing which friction actually affects conversion.",
      "Analytics show outcomes but not enough context about customer behavior.",
    ],
    capabilityCopy: [
      "Behavior, journey, and messaging audits identify the strongest opportunities to reduce hesitation.",
      "Page and flow redesigns make value, proof, and next steps easier to understand.",
      "Experiments are prioritized by expected impact, confidence, and implementation effort.",
      "Funnel measurement turns each test into reusable evidence for future growth decisions.",
    ],
  },
  "/services/marketing-automation": {
    category: "Marketing & Visibility",
    visualLabel: "Connected lifecycle",
    signals: ["Segment", "Nurture", "Measure"],
    frictions: [
      "Every lead receives the same follow-up regardless of intent or stage.",
      "Campaign execution depends on repeated manual lists, sends, and reminders.",
      "Marketing activity is difficult to connect to pipeline movement and customer value.",
    ],
    capabilityCopy: [
      "Lifecycle strategy defines the useful messages and actions for each stage of the relationship.",
      "Email, audience, and task automation creates consistent follow-up without constant manual effort.",
      "Scoring and segmentation adapt journeys according to behavior, fit, and readiness.",
      "Measurement reveals which sequences move customers forward and where the experience needs refinement.",
    ],
  },
};

const defaultServiceMeta = {
  category: "QueLogics service",
  visualLabel: "Connected delivery",
  signals: ["Discover", "Deliver", "Improve"],
  frictions: [
    "The current experience creates unnecessary work for customers and internal teams.",
    "Disconnected decisions make delivery slower and outcomes harder to measure.",
    "The solution needs to improve today without limiting what comes next.",
  ],
  capabilityCopy: [],
};

const ServiceDetailPage = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const meta = serviceDetailMeta[pathname] || defaultServiceMeta;
  const related = Object.entries(page.section.entries)
    .filter(([path]) => path !== pathname)
    .filter(([, item]) => {
      const itemMeta = serviceDetailMeta[Object.keys(page.section.entries).find((key) => page.section.entries[key] === item)];
      return itemMeta?.category === meta.category;
    })
    .slice(0, 3);

  const fallbackRelated = Object.entries(page.section.entries)
    .filter(([path]) => path !== pathname)
    .slice(0, 3);

  const relatedItems = related.length === 3 ? related : fallbackRelated;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const body = document.body;
    body.classList.add("service-detail-page-active");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return () => body.classList.remove("service-detail-page-active");
    }

    const desktopMotion = window.matchMedia("(min-width: 1025px)").matches;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".service-detail-back, .service-detail-kicker", {
          opacity: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.08,
        })
        .from(
          ".service-detail-title-line",
          {
            yPercent: 110,
            duration: 0.9,
            stagger: 0.09,
          },
          "-=0.28",
        )
        .from(
          ".service-detail-lead, .service-detail-actions",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          ".service-detail-system",
          {
            opacity: 0,
            x: 45,
            scale: 0.94,
            duration: 1,
          },
          "-=0.85",
        )
        .from(
          ".service-detail-brand-echo",
          {
            opacity: 0,
            scale: 0.82,
            x: -65,
            duration: 1.15,
          },
          "-=1.05",
        );

      gsap.to(".service-detail-brand-echo", {
        yPercent: 42,
        xPercent: -8,
        opacity: 0.075,
        ease: "none",
        scrollTrigger: {
          trigger: ".service-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.to(".service-detail-system-core", {
        y: -9,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".service-detail-system-head i", {
        scale: 1.35,
        boxShadow: "0 0 0 12px rgba(34, 206, 104, 0.04)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".service-detail-grid", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".service-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".service-detail-glow--one", {
        y: 95,
        rotate: 16,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".service-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".service-detail-system", {
        y: -34,
        rotateX: 2.5,
        transformPerspective: 1100,
        ease: "none",
        scrollTrigger: {
          trigger: ".service-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.from(".service-detail-proof span", {
        autoAlpha: 0,
        y: 18,
        duration: 0.55,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-detail-proof",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".service-detail-section-intro > *", {
        autoAlpha: 0,
        y: 30,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-detail-frictions",
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".service-detail-friction-row", {
        autoAlpha: 0,
        x: 42,
        duration: 0.72,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-detail-friction-list",
          start: "top 80%",
          once: true,
        },
      });

      gsap.utils.toArray(".service-detail-friction-row").forEach((row) => {
        gsap.fromTo(
          row,
          { "--friction-progress": "0%" },
          {
            "--friction-progress": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              end: "bottom 58%",
              scrub: 0.55,
            },
          },
        );
      });

      const capabilityCards = gsap.utils.toArray(".service-detail-capability");
      const capabilityIntro = root.querySelector(".service-detail-capabilities-sticky");

      gsap.from(".service-detail-capabilities-sticky > *", {
        autoAlpha: 0,
        x: -34,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-detail-capabilities",
          start: "top 76%",
          once: true,
        },
      });

      if (desktopMotion && capabilityIntro && capabilityCards.length) {
        gsap.set(capabilityIntro, { position: "relative", top: "auto" });

        ScrollTrigger.create({
          trigger: ".service-detail-capabilities",
          start: "top 112px",
          end: "bottom bottom-=70",
          pin: capabilityIntro,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        capabilityCards.forEach((capability, index) => {
          gsap.fromTo(
            capability,
            {
              autoAlpha: 0.28,
              y: 92,
              scale: 0.94,
              rotateX: 5,
              transformPerspective: 1200,
              transformOrigin: "center top",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              ease: "none",
              scrollTrigger: {
                trigger: capability,
                start: "top 93%",
                end: "top 48%",
                scrub: 0.65,
              },
            },
          );

          if (index < capabilityCards.length - 1) {
            gsap.to(capability, {
              y: -13,
              scale: 0.982,
              autoAlpha: 0.72,
              ease: "none",
              scrollTrigger: {
                trigger: capabilityCards[index + 1],
                start: "top 76%",
                end: "top 48%",
                scrub: 0.65,
              },
            });
          }
        });
      } else {
        capabilityCards.forEach((capability, index) => {
          gsap.from(capability, {
            autoAlpha: 0,
            x: 42,
            duration: 0.75,
            delay: Math.min(index * 0.04, 0.12),
            ease: "power3.out",
            scrollTrigger: {
              trigger: capability,
              start: "top 87%",
              once: true,
            },
          });
        });
      }

      gsap.from(".service-detail-outcome-panel", {
        autoAlpha: 0,
        y: 58,
        scale: 0.965,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-detail-outcome",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".service-detail-outcome-panel > div > *", {
        autoAlpha: 0,
        y: 22,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-detail-outcome-panel",
          start: "top 72%",
          once: true,
        },
      });

      const processSteps = gsap.utils.toArray(".service-detail-process-step");
      const processContainer = root.querySelector(
        ".service-detail-process > .service-detail-container",
      );

      if (desktopMotion && processContainer && processSteps.length) {
        gsap.set(".service-detail-process-progress", {
          scaleX: 0,
          transformOrigin: "left center",
        });
        gsap.set(processSteps, {
          autoAlpha: 0.2,
          y: 58,
          scale: 0.955,
          transformPerspective: 1000,
        });

        const processTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-detail-process",
            start: "top 92px",
            end: `+=${Math.max(1050, processSteps.length * 310)}`,
            pin: processContainer,
            pinSpacing: true,
            scrub: 0.72,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        processTimeline.from(".service-detail-process-heading > *", {
          autoAlpha: 0,
          y: 30,
          stagger: 0.08,
          duration: 0.45,
          ease: "power2.out",
        });

        processSteps.forEach((step, index) => {
          processTimeline
            .to(
              step,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.62,
                ease: "power2.out",
              },
              index === 0 ? ">" : ">-0.05",
            )
            .to(
              ".service-detail-process-progress",
              {
                scaleX: (index + 1) / processSteps.length,
                duration: 0.62,
                ease: "none",
              },
              "<",
            )
            .to(step, {
              boxShadow: "0 18px 42px rgba(7, 16, 47, 0.08)",
              duration: 0.22,
            });
        });

        processTimeline.to({}, { duration: 0.35 });
      } else {
        gsap.from(".service-detail-process-heading > *", {
          autoAlpha: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-detail-process",
            start: "top 76%",
            once: true,
          },
        });

        gsap.fromTo(
          ".service-detail-process-progress",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".service-detail-process",
              start: "top 72%",
              end: "bottom 62%",
              scrub: 0.5,
            },
          },
        );

        gsap.from(processSteps, {
          autoAlpha: 0,
          y: 34,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-detail-process-steps",
            start: "top 80%",
            once: true,
          },
        });
      }

      gsap.from(".service-detail-related-heading > *", {
        autoAlpha: 0,
        y: 28,
        duration: 0.68,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-detail-related",
          start: "top 78%",
          once: true,
        },
      });

      gsap.utils.toArray(".service-detail-related-item").forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          x: -42,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.from(".service-detail-cta-inner", {
        autoAlpha: 0,
        y: 55,
        scale: 0.975,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-detail-cta",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".service-detail-cta-inner > *", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-detail-cta-inner",
          start: "top 76%",
          once: true,
        },
      });
    }, root);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
      body.classList.remove("service-detail-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-grid" aria-hidden="true" />
        <div className="service-detail-glow service-detail-glow--one" aria-hidden="true" />
        <div className="service-detail-glow service-detail-glow--two" aria-hidden="true" />

        <div className="service-detail-brand-echo" aria-hidden="true">
          <div className="service-detail-brand-lockup">
            <span className="service-detail-brand-mark"><i /></span>
            <span className="service-detail-brand-word">
              Que<span>Logics</span>
            </span>
          </div>
        </div>

        <div className="service-detail-container service-detail-hero-layout">
          <div className="service-detail-copy">
            <Link className="service-detail-back" to="/services">
              <ArrowLeft /> All services
            </Link>
            <p className="service-detail-kicker">
              <Sparkles /> {meta.category}
            </p>
            <h1 aria-label={page.title}>
              {page.title.split(" ").map((word, index) => (
                <span className="service-detail-title-mask" key={`${word}-${index}`}>
                  <span className="service-detail-title-line">{word}&nbsp;</span>
                </span>
              ))}
            </h1>
            <p className="service-detail-lead">{page.statement}</p>
            <div className="service-detail-actions">
              <Link className="service-detail-button service-detail-button--primary" to="/contact">
                Discuss your project <ArrowUpRight />
              </Link>
              <a className="service-detail-button service-detail-button--secondary" href="#service-capabilities">
                Explore the approach <MoveDown />
              </a>
            </div>
          </div>

          <div className="service-detail-system" aria-label={`${page.title} delivery system`}>
            <div className="service-detail-system-head">
              <span><i /> QueLogics delivery system</span>
              <small>Live</small>
            </div>
            <div className="service-detail-system-stage">
              <div className="service-detail-ring service-detail-ring--outer" />
              <div className="service-detail-ring service-detail-ring--inner" />
              <div className="service-detail-system-core">
                <span>{meta.category}</span>
                <strong>{meta.visualLabel}</strong>
              </div>
              {meta.signals.map((signal, index) => (
                <div className={`service-detail-system-node service-detail-system-node--${index + 1}`} key={signal}>
                  <span>0{index + 1}</span>
                  <strong>{signal}</strong>
                </div>
              ))}
              <span className="service-detail-pulse service-detail-pulse--one" />
              <span className="service-detail-pulse service-detail-pulse--two" />
              <span className="service-detail-pulse service-detail-pulse--three" />
            </div>
            <div className="service-detail-system-foot">
              <span>Clear ownership</span>
              <span>Visible progress</span>
              <span>Measurable outcome</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-proof" aria-label="QueLogics delivery principles">
        <div className="service-detail-container">
          {page.section.proof.map((item) => (
            <span key={item}><CheckCircle2 /> {item}</span>
          ))}
        </div>
      </section>

      <section className="service-detail-frictions">
        <div className="service-detail-container service-detail-frictions-layout">
          <div className="service-detail-section-intro">
            <p className="service-detail-kicker">Why this work matters</p>
            <h2>Remove the friction before it becomes the way you work.</h2>
            <p>
              We begin with the real operating problem, then connect the right strategy,
              design, technology, and measurement around it.
            </p>
          </div>

          <div className="service-detail-friction-list">
            {meta.frictions.map((friction, index) => (
              <div className="service-detail-friction-row" key={friction}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{friction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-capabilities" id="service-capabilities">
        <div className="service-detail-container service-detail-capabilities-layout">
          <div className="service-detail-capabilities-sticky">
            <p className="service-detail-kicker">What is included</p>
            <h2>A complete path from decision to dependable delivery.</h2>
            <p>
              Each workstream stays connected to the same outcome, so strategy does not
              get separated from execution.
            </p>
            <Link to="/contact">Plan this with us <ArrowUpRight /></Link>
          </div>

          <div className="service-detail-capability-list">
            {page.capabilities.map((capability, index) => (
              <article className="service-detail-capability" key={capability}>
                <div className="service-detail-capability-number">0{index + 1}</div>
                <div>
                  <h3>{capability}</h3>
                  <p>
                    {meta.capabilityCopy[index] ||
                      `This workstream is shaped specifically around ${page.title.toLowerCase()} so every decision supports the wider business outcome.`}
                  </p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-outcome">
        <div className="service-detail-container service-detail-outcome-panel">
          <div>
            <p className="service-detail-kicker">The outcome</p>
            <span className="service-detail-outcome-mark">Q<span>+</span></span>
          </div>
          <div>
            <h2>{page.outcome}</h2>
            <p>
              Success measures are agreed early, delivery choices stay visible, and the
              final system is built to keep creating value after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail-process">
        <div className="service-detail-container">
          <div className="service-detail-process-heading">
            <p className="service-detail-kicker">How we move</p>
            <h2>Structured enough to stay clear. Flexible enough to learn.</h2>
          </div>
          <div className="service-detail-process-track" aria-hidden="true">
            <span className="service-detail-process-progress" />
          </div>
          <div className="service-detail-process-steps">
            {page.section.process.map((step, index) => (
              <article className="service-detail-process-step" key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
                <p>{[
                  "Align on the problem, users, constraints, and the measures that define useful progress.",
                  "Make the experience and technical approach tangible before major effort is committed.",
                  "Deliver in visible increments with quality, communication, and ownership built into the work.",
                  "Measure real use, improve what matters, and extend the system with confidence.",
                ][index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-related">
        <div className="service-detail-container">
          <div className="service-detail-related-heading">
            <div>
              <p className="service-detail-kicker">Related capabilities</p>
              <h2>Keep the whole system connected.</h2>
            </div>
            <Link to="/services">View all services <ArrowRight /></Link>
          </div>
          <div className="service-detail-related-list">
            {relatedItems.map(([path, item], index) => (
              <Link className="service-detail-related-item" to={path} key={path}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.statement}</p>
                </div>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-container service-detail-cta-inner">
          <div>
            <p className="service-detail-kicker">Start with the real challenge</p>
            <h2>Let’s make the next move clear.</h2>
          </div>
          <Link className="service-detail-button service-detail-button--primary" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};


const DetailPage = () => {
  const { pathname } = useLocation();
  const page = findDetailContent(pathname);

  if (!page || page.sectionKey !== "services") {
    return <Navigate to="/services" replace />;
  }

  return <ServiceDetailPage page={page} pathname={pathname} />;
};

export default DetailPage;
