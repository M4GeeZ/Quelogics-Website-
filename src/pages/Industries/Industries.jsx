import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CarFront,
  Cloud,
  Factory,
  HeartPulse,
  Landmark,
  Layers3,
  Rocket,
  ShieldCheck,
  Store,
  Truck,
  UtensilsCrossed,
  UsersRound,
  Workflow,
  BriefcaseBusiness,
  Gauge,
  Network,
  Sparkles,
} from "lucide-react";
import "./Industries.css";

gsap.registerPlugin(ScrollTrigger);

const industryGroups = [
  {
    eyebrow: "Enterprise & public",
    number: "01",
    industries: [
      {
        title: "Government & Public Sector",
        shortTitle: "Government",
        path: "/industries/government",
        description: "Citizen services, case workflows, accessibility, and accountable operations.",
        icon: Landmark,
      },
      {
        title: "Healthcare",
        shortTitle: "Healthcare",
        path: "/industries/healthcare",
        description: "Connected journeys for patients, practitioners, and care operations.",
        icon: HeartPulse,
      },
      {
        title: "Finance & Banking",
        shortTitle: "Finance",
        path: "/industries/finance",
        description: "Secure onboarding, clear decisions, and dependable data movement.",
        icon: ShieldCheck,
      },
      {
        title: "Professional Services",
        shortTitle: "Professional services",
        path: "/industries/professional-services",
        description: "Client delivery, resource visibility, and less administrative friction.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    eyebrow: "Commerce & property",
    number: "02",
    industries: [
      {
        title: "eCommerce & Retail",
        shortTitle: "Commerce",
        path: "/industries/ecommerce-retail",
        description: "Discovery, conversion, inventory, and lifecycle experiences that connect.",
        icon: Store,
      },
      {
        title: "Real Estate",
        shortTitle: "Real estate",
        path: "/industries/real-estate",
        description: "Property discovery, lead routing, and better owner and tenant journeys.",
        icon: Building2,
      },
      {
        title: "Restaurants & Hospitality",
        shortTitle: "Hospitality",
        path: "/industries/hospitality",
        description: "Booking, ordering, loyalty, and guest communication made simpler.",
        icon: UtensilsCrossed,
      },
      {
        title: "Automotive",
        shortTitle: "Automotive",
        path: "/industries/automotive",
        description: "Vehicle discovery, dealer operations, and connected service experiences.",
        icon: CarFront,
      },
    ],
  },
  {
    eyebrow: "Operations & technology",
    number: "03",
    industries: [
      {
        title: "Manufacturing",
        shortTitle: "Manufacturing",
        path: "/industries/manufacturing",
        description: "Production visibility, quality workflows, maintenance, and integration.",
        icon: Factory,
      },
      {
        title: "Logistics & Supply Chain",
        shortTitle: "Logistics",
        path: "/industries/logistics",
        description: "Shipment visibility, dispatch, partner portals, and fewer exceptions.",
        icon: Truck,
      },
      {
        title: "SaaS & Technology",
        shortTitle: "SaaS & technology",
        path: "/industries/saas-technology",
        description: "Product strategy, platform engineering, activation, and scale.",
        icon: Cloud,
      },
      {
        title: "Startups & Scaleups",
        shortTitle: "Startups",
        path: "/industries/startups",
        description: "Focused MVP decisions, faster learning, and foundations ready to grow.",
        icon: Rocket,
      },
    ],
  },
];

const industryCells = industryGroups.flatMap((group) => group.industries);

const decisionLenses = [
  {
    number: "01",
    icon: Workflow,
    title: "Workflow reality",
    text: "We map the sequence, exceptions, handoffs, and human judgment behind the process before designing the system around it.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Trust and risk",
    text: "Accessibility, privacy, auditability, reliability, and security are treated as product decisions—not a final checklist.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Adoption and scale",
    text: "The solution must fit the tools, skills, constraints, and pace of change already present inside the organisation.",
  },
];

const capabilities = [
  {
    number: "01",
    icon: UsersRound,
    title: "Customer and citizen platforms",
    text: "Portals, apps, commerce journeys, self-service experiences, and digital products that make the next action clear.",
    path: "/services/custom-software-development",
    link: "Product engineering",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Operational systems",
    text: "Workflow tools, dashboards, approvals, case management, and automation designed around real daily work.",
    path: "/services/workflow-automation",
    link: "Workflow automation",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Applied AI and intelligence",
    text: "Practical AI assistants, search, decision support, and automation where the value and responsibility are both clear.",
    path: "/services/ai-strategy",
    link: "AI strategy",
  },
  {
    number: "04",
    icon: Network,
    title: "Connected data and integrations",
    text: "APIs, CRM, ERP, payments, analytics, and third-party systems connected into one reliable operating flow.",
    path: "/services/api-integrations",
    link: "Systems integration",
  },
];

const Industries = () => {
  const pageRef = useRef(null);
  const signalBoardRef = useRef(null);
  const lensSectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".industries-hero-kicker", {
          y: 18,
          autoAlpha: 0,
          duration: 0.55,
        })
        .from(
          ".industries-hero-title-line > span",
          {
            yPercent: 115,
            rotate: 1.2,
            duration: 0.82,
            stagger: 0.075,
          },
          "-=0.25",
        )
        .from(
          ".industries-hero-lead, .industries-hero-actions, .industries-hero-proof",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.68,
            stagger: 0.09,
          },
          "-=0.48",
        )
        .from(
          signalBoardRef.current,
          {
            x: 38,
            scale: 0.96,
            autoAlpha: 0,
            duration: 0.95,
          },
          "-=0.75",
        );

      const signalCells = gsap.utils.toArray(
        ".industries-signal-cell",
        signalBoardRef.current,
      );

      if (signalCells.length) {
        const signalLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

        signalCells.forEach((cell) => {
          signalLoop
            .to(cell, {
              y: -4,
              color: "#030821",
              backgroundColor: "#22ce68",
              borderColor: "#22ce68",
              boxShadow: "0 16px 38px rgba(34, 206, 104, 0.2)",
              duration: 0.32,
              ease: "power2.out",
            })
            .to(cell, { duration: 0.62 })
            .to(cell, {
              y: 0,
              color: "rgba(236, 242, 250, 0.72)",
              backgroundColor: "rgba(255, 255, 255, 0.035)",
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 0 rgba(34, 206, 104, 0)",
              duration: 0.35,
              ease: "power2.inOut",
            });
        });
      }

      gsap.utils.toArray(".industries-reveal").forEach((element) => {
        gsap.from(element, {
          y: 38,
          autoAlpha: 0,
          filter: "blur(7px)",
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".industries-directory-row").forEach((row, index) => {
        gsap.from(row, {
          x: index % 2 === 0 ? -26 : 26,
          autoAlpha: 0,
          duration: 0.62,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 91%",
            toggleActions: "play none none reverse",
          },
        });
      });

      const lensRows = gsap.utils.toArray(
        ".industries-lens-item",
        lensSectionRef.current,
      );

      lensRows.forEach((row, index) => {
        gsap.from(row, {
          xPercent: index % 2 === 0 ? 8 : -8,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.fromTo(
        ".industries-lens-progress-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lensSectionRef.current,
            start: "top 68%",
            end: "bottom 70%",
            scrub: 0.55,
          },
        },
      );

      gsap.utils.toArray(".industries-capability-row").forEach((row, index) => {
        gsap.from(row, {
          x: index % 2 === 0 ? -34 : 34,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main className="industries-premium" ref={pageRef}>
      <section className="industries-hero" aria-labelledby="industries-title">
        <div className="industries-container industries-hero-grid">
          <div className="industries-hero-copy">
            <p className="industries-hero-kicker">
              <Layers3 aria-hidden="true" />
              Industry intelligence
            </p>

            <h1 id="industries-title" className="industries-hero-title">
              <span className="industries-hero-title-line">
                <span>Build for the world</span>
              </span>
              <span className="industries-hero-title-line">
                <span>your team actually</span>
              </span>
              <span className="industries-hero-title-line is-accent">
                <span>works in.</span>
              </span>
            </h1>

            <p className="industries-hero-lead">
              Strong digital systems do more than use the right technology. They
              understand the workflows, trust requirements, customer behaviour,
              and operational pressure unique to your sector.
            </p>

            <div className="industries-hero-actions">
              <a className="industries-button industries-button-primary" href="#industry-directory">
                Explore industries
                <ArrowRight aria-hidden="true" />
              </a>
              <Link className="industries-button industries-button-secondary" to="/contact">
                Talk to an expert
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>

            <dl className="industries-hero-proof">
              <div>
                <dt>12</dt>
                <dd>sector contexts</dd>
              </div>
              <div>
                <dt>01</dt>
                <dd>connected senior team</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>workflow-first discovery</dd>
              </div>
            </dl>
          </div>

          <div className="industries-signal-board" ref={signalBoardRef} aria-label="Industries served by QueLogics">
            <div className="industries-signal-header">
              <div>
                <span className="industries-signal-live" />
                Operating context
              </div>
              <span>Connected</span>
            </div>

            <div className="industries-signal-grid">
              {industryCells.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Link
                    className="industries-signal-cell"
                    to={industry.path}
                    key={industry.path}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                    <strong>{industry.shortTitle}</strong>
                  </Link>
                );
              })}
            </div>

            <div className="industries-signal-footer">
              <span>Context</span>
              <i />
              <span>Systems</span>
              <i />
              <span>Outcomes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-directory" id="industry-directory">
        <div className="industries-container">
          <header className="industries-section-heading industries-reveal">
            <div>
              <p className="industries-kicker">Sector directory</p>
              <h2>Twelve sectors. One principle: context before code.</h2>
            </div>
            <p>
              Choose your industry to see the platforms, workflows, integrations,
              and digital experiences we shape around its day-to-day reality.
            </p>
          </header>

          <div className="industries-directory-groups">
            {industryGroups.map((group) => (
              <section className="industries-directory-group" key={group.eyebrow}>
                <header className="industries-directory-group-heading industries-reveal">
                  <span>{group.number}</span>
                  <h3>{group.eyebrow}</h3>
                </header>

                <div className="industries-directory-list">
                  {group.industries.map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <Link
                        className="industries-directory-row"
                        to={industry.path}
                        key={industry.path}
                      >
                        <span className="industries-directory-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <strong>{industry.title}</strong>
                        <p>{industry.description}</p>
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-lens" ref={lensSectionRef}>
        <div className="industries-container industries-lens-grid">
          <div className="industries-lens-intro industries-reveal">
            <p className="industries-kicker">The industry lens</p>
            <h2>The same technology behaves differently in every sector.</h2>
            <p>
              Our role is to understand what changes the decision—not simply to
              repeat a familiar solution with different labels.
            </p>
          </div>

          <div className="industries-lens-list">
            <div className="industries-lens-progress" aria-hidden="true">
              <span className="industries-lens-progress-fill" />
            </div>

            {decisionLenses.map((lens) => {
              const Icon = lens.icon;
              return (
                <article className="industries-lens-item" key={lens.number}>
                  <div className="industries-lens-number">{lens.number}</div>
                  <div className="industries-lens-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{lens.title}</h3>
                    <p>{lens.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industries-capabilities">
        <div className="industries-container">
          <header className="industries-section-heading industries-reveal">
            <div>
              <p className="industries-kicker">Cross-industry capability</p>
              <h2>Sector-aware. Capability-complete.</h2>
            </div>
            <p>
              We combine product, engineering, experience, AI, automation, and
              growth expertise around the outcome your industry requires.
            </p>
          </header>

          <div className="industries-capability-list">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article className="industries-capability-row" key={capability.number}>
                  <span className="industries-capability-number">{capability.number}</span>
                  <span className="industries-capability-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                  <Link to={capability.path}>
                    {capability.link}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industries-proof-strip">
        <div className="industries-container industries-proof-strip-grid">
          <p className="industries-reveal">
            We do not ask clients to translate their business into agency language.
          </p>
          <p className="industries-reveal">
            We learn the operation, make the complexity visible, and build from there.
          </p>
        </div>
      </section>

      <section className="industries-cta">
        <div className="industries-container industries-cta-inner industries-reveal">
          <div>
            <p className="industries-kicker">Your sector, understood</p>
            <h2>Bring us the workflow that is hardest to simplify.</h2>
          </div>
          <Link className="industries-button industries-button-primary" to="/contact">
            Start a conversation
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Industries;