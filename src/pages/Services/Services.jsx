import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Layers3,
  Megaphone,
  MessagesSquare,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const serviceGroups = [
  {
    number: "01",
    eyebrow: "Product & engineering",
    title: "Build digital products that are useful from day one.",
    description:
      "From a focused first release to a complex operational platform, we combine product thinking, experience design, and engineering in one delivery system.",
    note: "Designed around real users, real workflows, and long-term ownership.",
    className: "services-page-chapter--product",
    services: [
      {
        title: "Custom Software Development",
        path: "/services/custom-software-development",
        description: "Purpose-built platforms, portals, and internal systems.",
        icon: Code2,
      },
      {
        title: "Website Development",
        path: "/services/custom-website-development",
        description: "Fast, accessible websites designed to convert attention.",
        icon: Globe2,
      },
      {
        title: "Mobile App Development",
        path: "/services/mobile-app-development",
        description: "Dependable mobile experiences for iOS and Android.",
        icon: Smartphone,
      },
      {
        title: "SaaS Product Development",
        path: "/services/saas-development",
        description: "Scalable subscription products built for validation and growth.",
        icon: Layers3,
      },
      {
        title: "UI / UX Design",
        path: "/services/ui-ux-design",
        description: "Clear product journeys that make complex tasks feel simple.",
        icon: Palette,
      },
    ],
  },
  {
    number: "02",
    eyebrow: "AI & automation",
    title: "Remove repetitive work without losing control.",
    description:
      "We connect practical AI, workflow automation, and integrations to reduce manual effort, improve response time, and give teams cleaner information to act on.",
    note: "Automation with guardrails, visibility, and a clear operational purpose.",
    className: "services-page-chapter--automation",
    services: [
      {
        title: "AI Chatbots & Agents",
        path: "/services/ai-chatbots-agents",
        description: "Grounded assistants for support, sales, and internal work.",
        icon: MessagesSquare,
      },
      {
        title: "Workflow Automation",
        path: "/services/workflow-automation",
        description: "Fewer handoffs, errors, reminders, and copy-paste tasks.",
        icon: Workflow,
      },
      {
        title: "CRM Automation",
        path: "/services/crm-automation",
        description: "Cleaner pipelines, smarter routing, and consistent follow-up.",
        icon: Target,
      },
      {
        title: "API & Third-Party Integrations",
        path: "/services/api-integrations",
        description: "Reliable data flow between the tools your business depends on.",
        icon: BrainCircuit,
      },
      {
        title: "AI Strategy Consulting",
        path: "/services/ai-strategy",
        description: "A practical roadmap from opportunity to safe implementation.",
        icon: Compass,
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Marketing & visibility",
    title: "Turn traffic and attention into measurable growth.",
    description:
      "We bring acquisition, search visibility, conversion, and lifecycle automation together so every campaign produces clearer learning and stronger commercial outcomes.",
    note: "Growth decisions connected to evidence, customer intent, and conversion.",
    className: "services-page-chapter--growth",
    services: [
      {
        title: "Performance Marketing",
        path: "/services/performance-marketing",
        description: "Experiment-led paid campaigns across the customer journey.",
        icon: Megaphone,
      },
      {
        title: "Google Ads & Lead Generation",
        path: "/services/google-ads",
        description: "High-intent demand capture with accountable conversion tracking.",
        icon: Target,
      },
      {
        title: "SEO & AEO",
        path: "/services/website-seo",
        description: "Durable visibility across search and answer engines.",
        icon: Search,
      },
      {
        title: "Conversion Optimization",
        path: "/services/conversion-optimization",
        description: "Better journeys, stronger landing pages, and useful experiments.",
        icon: Gauge,
      },
      {
        title: "Marketing Automation",
        path: "/services/marketing-automation",
        description: "Relevant lifecycle communication without repetitive manual work.",
        icon: Workflow,
      },
    ],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand the gap",
    body: "We map the users, workflows, constraints, and business outcome before choosing a deliverable.",
  },
  {
    number: "02",
    title: "Shape the right move",
    body: "We define priorities, prototype the experience, and make technical decisions visible early.",
  },
  {
    number: "03",
    title: "Build with evidence",
    body: "Short delivery loops keep design, engineering, stakeholders, and real feedback connected.",
  },
  {
    number: "04",
    title: "Improve what works",
    body: "After launch, we use performance and customer signals to strengthen the product over time.",
  },
];

const Services = () => {
  const pageRef = useRef(null);
  const chapterSectionRef = useRef(null);
  const processRef = useRef(null);

  useLayoutEffect(() => {
    const body = document.body;
    body.classList.add("services-page-active");

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduceMotion) {
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        heroTimeline
          .from(".services-page-hero-kicker", {
            y: 18,
            autoAlpha: 0,
            duration: 0.5,
          })
          .from(
            ".services-page-title-line > span",
            {
              yPercent: 112,
              rotate: 1.2,
              duration: 0.88,
              stagger: 0.08,
            },
            "-=0.22",
          )
          .from(
            ".services-page-hero-lead, .services-page-hero-actions, .services-page-hero-proof",
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.68,
              stagger: 0.09,
            },
            "-=0.52",
          )
          .from(
            ".services-page-flow-visual",
            {
              scale: 0.91,
              rotate: -3,
              autoAlpha: 0,
              duration: 1,
            },
            "-=0.82",
          );

        gsap.utils.toArray(".services-page-reveal").forEach((element) => {
          gsap.from(element, {
            y: 42,
            autoAlpha: 0,
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
        });

        const processLine = processRef.current?.querySelector(
          ".services-page-process-line-fill",
        );

        if (processLine) {
          gsap.fromTo(
            processLine,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: processRef.current,
                start: "top 62%",
                end: "bottom 72%",
                scrub: 0.5,
              },
            },
          );
        }
      }
    }, pageRef);

    media.add(
      "(min-width: 981px) and (prefers-reduced-motion: no-preference)",
      () => {
        const scene = chapterSectionRef.current?.querySelector(
          ".services-page-chapter-scene",
        );
        const stage = chapterSectionRef.current?.querySelector(
          ".services-page-chapter-stage",
        );
        const chapters = gsap.utils.toArray(
          ".services-page-chapter",
          chapterSectionRef.current,
        );

        if (!scene || !stage || chapters.length < 2) return undefined;

        gsap.set(chapters, {
          zIndex: (index) => index + 1,
          yPercent: 112,
          y: 0,
          z: 0,
          rotateX: 0,
          scale: 1,
          autoAlpha: 0,
          force3D: true,
          transformOrigin: "50% 0%",
        });

        const scrollDistance = () =>
          Math.round(window.innerHeight * (chapters.length * 1.15 + 0.8));

        const stackTimeline = gsap.timeline({
          defaults: {
            overwrite: "auto",
          },
          scrollTrigger: {
            trigger: scene,
            start: "top top+=96",
            end: () => `+=${scrollDistance()}`,
            pin: stage,
            pinSpacing: true,
            scrub: 0.72,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 2,
          },
        });

        // Card 01 rises from below, reaches the middle, and pauses.
        stackTimeline.to(chapters[0], {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        });
        stackTimeline.to({}, { duration: 0.62 });

        chapters.slice(1).forEach((chapter, chapterIndex) => {
          const activeIndex = chapterIndex + 1;
          const label = `services-card-${activeIndex}`;

          stackTimeline.addLabel(label);

          // Cards already on screen move slightly back to create real depth.
          chapters.slice(0, activeIndex).forEach((previous, previousIndex) => {
            const depth = activeIndex - previousIndex;

            stackTimeline.to(
              previous,
              {
                y: -18 * depth,
                z: -92 * depth,
                rotateX: 1.2 * depth,
                scale: 1 - 0.022 * depth,
                autoAlpha: Math.max(0.72, 1 - 0.09 * depth),
                duration: 0.86,
                ease: "power2.inOut",
                force3D: true,
              },
              label,
            );
          });

          // The next card comes from the bottom and settles in front.
          stackTimeline.to(
            chapter,
            {
              yPercent: 0,
              y: 0,
              z: 0,
              rotateX: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              force3D: true,
            },
            label,
          );

          // Keep each completed stack still for a noticeable scroll pause.
          stackTimeline.to({}, { duration: 0.64 });
        });

        // Brief final hold before normal page scrolling continues.
        stackTimeline.to({}, { duration: 0.42 });

        return () => {
          stackTimeline.scrollTrigger?.kill();
          stackTimeline.kill();
          gsap.set(chapters, {
            clearProps:
              "transform,opacity,visibility,zIndex,translate,rotate,scale",
          });
        };
      },
    );

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    let fontsCancelled = false;

    document.fonts?.ready.then(() => {
      if (!fontsCancelled) ScrollTrigger.refresh();
    });

    return () => {
      fontsCancelled = true;
      window.cancelAnimationFrame(refreshFrame);
      context.revert();
      media.revert();
      body.classList.remove("services-page-active");
    };
  }, []);

  return (
    <main className="services-page" ref={pageRef}>
      <section className="services-page-hero">
        <div className="services-page-hero-grid" aria-hidden="true" />
        <div className="services-page-hero-glow services-page-hero-glow--one" aria-hidden="true" />
        <div className="services-page-hero-glow services-page-hero-glow--two" aria-hidden="true" />

        <div className="services-page-container services-page-hero-layout">
          <div className="services-page-hero-copy">
            <p className="services-page-hero-kicker">
              <Sparkles aria-hidden="true" /> QueLogics services
            </p>
            <h1>
              <span className="services-page-title-line">
                <span>Strategy, craft,</span>
              </span>
              <span className="services-page-title-line">
                <span>and technology</span>
              </span>
              <span className="services-page-title-line services-page-title-line--accent">
                <span>working as one.</span>
              </span>
            </h1>
            <p className="services-page-hero-lead">
              Build a new product, modernize operations, apply practical AI, or
              create a stronger growth engine with one connected senior team.
            </p>
            <div className="services-page-hero-actions">
              <a className="services-page-button services-page-button--primary" href="#service-capabilities">
                Explore capabilities <ArrowRight aria-hidden="true" />
              </a>
              <Link className="services-page-button services-page-button--ghost" to="/contact">
                Talk to an expert <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <dl className="services-page-hero-proof" aria-label="Services at a glance">
              <div>
                <dt>Capabilities</dt>
                <dd>15 focused services</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>One connected team</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Measurable outcomes</dd>
              </div>
            </dl>
          </div>

          <div className="services-page-flow-visual" aria-hidden="true">
            <div className="services-page-flow-frame">
              <div className="services-page-flow-heading">
                <span><i /> Live service flow</span>
                <small>One connected delivery system</small>
              </div>

              <div className="services-page-flow-window">
                <div className="services-page-flow-track services-page-flow-track--product">
                  <div className="services-page-flow-strip">
                    <span><Compass /> Product strategy</span>
                    <span><Palette /> Experience design</span>
                    <span><Code2 /> Engineering</span>
                    <span><Compass /> Product strategy</span>
                    <span><Palette /> Experience design</span>
                    <span><Code2 /> Engineering</span>
                  </div>
                </div>

                <div className="services-page-flow-track services-page-flow-track--automation">
                  <div className="services-page-flow-strip">
                    <span><BrainCircuit /> Practical AI</span>
                    <span><Workflow /> Automation</span>
                    <span><Layers3 /> Integrations</span>
                    <span><BrainCircuit /> Practical AI</span>
                    <span><Workflow /> Automation</span>
                    <span><Layers3 /> Integrations</span>
                  </div>
                </div>

                <div className="services-page-flow-track services-page-flow-track--growth">
                  <div className="services-page-flow-strip">
                    <span><Gauge /> Performance</span>
                    <span><Search /> Visibility</span>
                    <span><Target /> Conversion</span>
                    <span><Gauge /> Performance</span>
                    <span><Search /> Visibility</span>
                    <span><Target /> Conversion</span>
                  </div>
                </div>
              </div>

              <div className="services-page-flow-summary">
                <span><b>01</b> Understand</span>
                <span><b>02</b> Build</span>
                <span><b>03</b> Improve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page-intro">
        <div className="services-page-container services-page-intro-layout">
          <div className="services-page-reveal">
            <p className="services-page-kicker">Start with the business gap</p>
            <h2>The right service is rarely a single isolated deliverable.</h2>
          </div>
          <div className="services-page-intro-copy services-page-reveal">
            <p>
              A new platform may also need workflow design. An AI assistant may
              depend on better data and integrations. More traffic only matters
              when the experience converts it.
            </p>
            <p>
              We connect the capabilities around the outcome, while keeping the
              engagement focused, understandable, and easy to move forward.
            </p>
          </div>
        </div>
      </section>

      <section
        className="services-page-capabilities"
        id="service-capabilities"
        ref={chapterSectionRef}
      >
        <div className="services-page-container">
          <header className="services-page-capabilities-heading services-page-reveal">
            <p className="services-page-kicker">Three connected capability areas</p>
            <h2>Choose where the next move begins.</h2>
            <p>
              Each chapter can stand alone or combine with the others around a
              larger business outcome.
            </p>
          </header>

          <div className="services-page-chapter-scene">
            <div className="services-page-chapter-stage">
              <div className="services-page-chapter-list">
                {serviceGroups.map((group, groupIndex) => (
                  <article
                    className={`services-page-chapter ${group.className}`}
                    key={group.number}
                    style={{ "--chapter-index": groupIndex }}
                  >
                <div className="services-page-chapter-copy">
                  <div className="services-page-chapter-meta">
                    <span>{group.number}</span>
                    <p>{group.eyebrow}</p>
                  </div>
                  <h3>{group.title}</h3>
                  <p className="services-page-chapter-description">
                    {group.description}
                  </p>
                  <p className="services-page-chapter-note">
                    <CheckCircle2 aria-hidden="true" /> {group.note}
                  </p>
                </div>

                <div className="services-page-service-list">
                  {group.services.map((service, serviceIndex) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        className="services-page-service-row"
                        to={service.path}
                        key={service.path}
                      >
                        <span className="services-page-service-index">
                          {String(serviceIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="services-page-service-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <span className="services-page-service-copy">
                          <strong>{service.title}</strong>
                          <small>{service.description}</small>
                        </span>
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page-outcomes">
        <div className="services-page-container services-page-outcomes-layout">
          <header className="services-page-outcomes-heading services-page-reveal">
            <p className="services-page-kicker">What stays consistent</p>
            <h2>Every capability is connected by the same standards.</h2>
          </header>
          <div className="services-page-outcome-list">
            <article className="services-page-outcome services-page-reveal">
              <span>01</span>
              <ShieldCheck aria-hidden="true" />
              <h3>Reliable by design</h3>
              <p>Security, accessibility, maintainability, and performance are considered from the start.</p>
            </article>
            <article className="services-page-outcome services-page-reveal">
              <span>02</span>
              <MessagesSquare aria-hidden="true" />
              <h3>Clear while moving</h3>
              <p>Progress, decisions, risks, and priorities remain visible throughout the engagement.</p>
            </article>
            <article className="services-page-outcome services-page-reveal">
              <span>03</span>
              <Gauge aria-hidden="true" />
              <h3>Measured by value</h3>
              <p>We connect delivery to adoption, efficiency, conversion, growth, or another meaningful outcome.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="services-page-process" ref={processRef}>
        <div className="services-page-container services-page-process-layout">
          <header className="services-page-process-heading services-page-reveal">
            <p className="services-page-kicker">A simple delivery rhythm</p>
            <h2>Enough structure to move fast without creating noise.</h2>
            <p>
              The exact activities change with the work, but the logic stays
              practical and visible from first question to ongoing improvement.
            </p>
            <Link className="services-page-text-link" to="/about">
              How we work together <ArrowRight aria-hidden="true" />
            </Link>
          </header>

          <div className="services-page-process-list">
            <span className="services-page-process-line" aria-hidden="true">
              <span className="services-page-process-line-fill" />
            </span>
            {deliverySteps.map((step) => (
              <article className="services-page-process-step services-page-reveal" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-cta">
        <div className="services-page-cta-grid" aria-hidden="true" />
        <div className="services-page-container services-page-cta-layout">
          <div className="services-page-reveal">
            <p className="services-page-kicker">Have a challenge in mind?</p>
            <h2>Let’s find the clearest path from problem to progress.</h2>
          </div>
          <Link className="services-page-button services-page-button--primary" to="/contact">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;