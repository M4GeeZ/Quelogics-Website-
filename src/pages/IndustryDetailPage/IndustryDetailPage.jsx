import { useLayoutEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Gauge,
  Layers3,
  MoveDown,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import "./IndustryDetailPage.css";

gsap.registerPlugin(ScrollTrigger);

const industryDetailMeta = {
  "/industries/government": {
    systemLabel: "Public service system",
    signals: ["Citizens", "Cases", "Trust"],
    contextLabels: ["Access", "Accountability", "Continuity"],
    frictions: [
      "People are forced to navigate fragmented services, forms, and channels.",
      "Casework depends on manual handoffs that reduce visibility and slow decisions.",
      "Modernization must improve access without weakening security, auditability, or continuity.",
    ],
    capabilityCopy: [
      "Design inclusive public journeys that make essential services easier to discover and complete.",
      "Digitize casework, approvals, and internal workflows while keeping ownership visible.",
      "Connect new experiences to legacy systems through controlled, dependable integration layers.",
      "Build accessibility, security, records, and audit requirements into the delivery model from day one.",
    ],
    outcomeSupport: "A public digital experience that feels simpler for citizens and more controllable for the teams delivering it.",
  },
  "/industries/healthcare": {
    systemLabel: "Connected care journey",
    signals: ["Patients", "Care teams", "Operations"],
    contextLabels: ["Clarity", "Privacy", "Coordination"],
    frictions: [
      "Patients repeat information and move between disconnected touchpoints.",
      "Administrative work consumes time that should support care and service quality.",
      "Sensitive data must move safely without making everyday workflows harder.",
    ],
    capabilityCopy: [
      "Create patient and provider portals that make appointments, records, and next steps easier to manage.",
      "Automate routine coordination while keeping clinical and operational judgment in the right hands.",
      "Connect healthcare data sources with clear permissions, traceability, and reliable exchange.",
      "Design accessible experiences that protect trust across every patient and practitioner interaction.",
    ],
    outcomeSupport: "A more connected care experience with less administrative friction and clearer movement across the journey.",
  },
  "/industries/finance": {
    systemLabel: "Trusted finance platform",
    signals: ["Customers", "Controls", "Decisions"],
    contextLabels: ["Confidence", "Compliance", "Speed"],
    frictions: [
      "Complex products and unclear journeys create hesitation at critical decision points.",
      "Manual checks and fragmented data slow onboarding, servicing, and internal review.",
      "Every improvement must preserve security, compliance, and complete operational traceability.",
    ],
    capabilityCopy: [
      "Simplify onboarding and service journeys without hiding the information customers need to decide.",
      "Build secure platforms and dashboards that turn complex financial activity into clear action.",
      "Automate repeatable controls and workflows while preserving review, evidence, and accountability.",
      "Connect data and systems through secure interfaces designed for resilience and regulatory scrutiny.",
    ],
    outcomeSupport: "Faster, clearer financial experiences that strengthen trust without compromising the controls the industry requires.",
  },
  "/industries/professional-services": {
    systemLabel: "Expert delivery system",
    signals: ["Clients", "Knowledge", "Capacity"],
    contextLabels: ["Consistency", "Visibility", "Time"],
    frictions: [
      "Experts lose valuable time to repeated intake, coordination, and status work.",
      "Clients receive inconsistent experiences as projects move between teams and tools.",
      "Leadership lacks a reliable view of demand, capacity, delivery health, and commercial progress.",
    ],
    capabilityCopy: [
      "Create client portals that centralize communication, files, approvals, and progress.",
      "Automate proposals, intake, assignment, and routine follow-up without removing human judgment.",
      "Give teams a clearer view of resource demand, delivery risk, and project movement.",
      "Connect CRM, billing, project, and reporting tools into one dependable operating flow.",
    ],
    outcomeSupport: "A more consistent client experience and an operating system that protects expert time for expert work.",
  },
  "/industries/ecommerce-retail": {
    systemLabel: "Connected commerce engine",
    signals: ["Discovery", "Purchase", "Retention"],
    contextLabels: ["Relevance", "Conversion", "Loyalty"],
    frictions: [
      "Customers encounter gaps between discovery, product detail, checkout, and fulfillment.",
      "Inventory, customer, and campaign data remain disconnected across channels.",
      "Teams optimize isolated touchpoints instead of the complete buying relationship.",
    ],
    capabilityCopy: [
      "Design storefront and checkout experiences around confident product discovery and fast action.",
      "Connect catalog, inventory, fulfillment, and customer data across the commerce operation.",
      "Build lifecycle automation that responds to behavior instead of sending the same message to everyone.",
      "Use analytics and experimentation to remove friction and improve the value of every customer visit.",
    ],
    outcomeSupport: "A smoother commerce journey that converts more effectively and creates stronger reasons for customers to return.",
  },
  "/industries/real-estate": {
    systemLabel: "Property journey platform",
    signals: ["Properties", "Prospects", "Teams"],
    contextLabels: ["Discovery", "Response", "Confidence"],
    frictions: [
      "Property discovery is separated from the conversations and actions that follow.",
      "Leads wait too long because routing, qualification, and follow-up depend on manual effort.",
      "Tenants, owners, agents, and operators work from different versions of the same information.",
    ],
    capabilityCopy: [
      "Build property search and listing experiences that help prospects compare and act with confidence.",
      "Automate lead routing, qualification, communication, and CRM updates around clear ownership.",
      "Create tenant and owner experiences that make service, documents, and status easier to access.",
      "Connect listing, CRM, payment, and operational data so every team works from a more complete view.",
    ],
    outcomeSupport: "A connected property experience that moves people from interest to action with fewer delays and manual handoffs.",
  },
  "/industries/hospitality": {
    systemLabel: "Guest experience network",
    signals: ["Guests", "Service", "Operations"],
    contextLabels: ["Convenience", "Personalization", "Flow"],
    frictions: [
      "Booking, ordering, communication, and loyalty feel like separate experiences.",
      "Frontline teams repeat coordination work across channels and systems.",
      "Guest preferences and service history are not available when they could improve the experience.",
    ],
    capabilityCopy: [
      "Create booking, ordering, and service experiences that feel fast and consistent across devices.",
      "Automate confirmations, updates, reminders, and recovery messages around real guest activity.",
      "Connect loyalty and CRM journeys to create more relevant communication and repeat visits.",
      "Integrate POS, booking, delivery, and operational platforms into a clearer flow of information.",
    ],
    outcomeSupport: "A more memorable guest experience supported by calmer, better-connected operations behind the scenes.",
  },
  "/industries/automotive": {
    systemLabel: "Automotive journey system",
    signals: ["Vehicles", "Buyers", "Service"],
    contextLabels: ["Research", "Response", "Relationship"],
    frictions: [
      "Customers move between research, dealership contact, finance, and service without continuity.",
      "Lead quality and ownership become unclear across sources, locations, and teams.",
      "Inventory and customer data are often delayed or inconsistent across the buying journey.",
    ],
    capabilityCopy: [
      "Build vehicle discovery experiences that make inventory, comparison, and next actions easier to understand.",
      "Connect lead capture, routing, CRM activity, and dealer follow-up into one accountable process.",
      "Automate service booking and communication while keeping customers informed at every stage.",
      "Integrate inventory, finance, CRM, and operational systems to create a more consistent customer view.",
    ],
    outcomeSupport: "A faster, more connected automotive journey that turns research into a durable customer relationship.",
  },
  "/industries/manufacturing": {
    systemLabel: "Visible operations layer",
    signals: ["Production", "Quality", "Maintenance"],
    contextLabels: ["Visibility", "Reliability", "Response"],
    frictions: [
      "Operational status is distributed across paper, spreadsheets, machines, and disconnected systems.",
      "Quality and maintenance issues are discovered after they have already affected output.",
      "Teams struggle to turn production data into timely, shared decisions.",
    ],
    capabilityCopy: [
      "Digitize production workflows so work, exceptions, and ownership stay visible in real time.",
      "Create quality and maintenance tools that surface risk earlier and support consistent action.",
      "Connect ERP, equipment, inventory, and specialist systems without disrupting essential operations.",
      "Build dashboards around the decisions teams need to make—not just the data that happens to exist.",
    ],
    outcomeSupport: "More visible, responsive manufacturing operations with fewer blind spots and less repetitive coordination.",
  },
  "/industries/logistics": {
    systemLabel: "Live logistics network",
    signals: ["Shipments", "Partners", "Exceptions"],
    contextLabels: ["Movement", "Visibility", "Recovery"],
    frictions: [
      "Shipment status is delayed across carriers, systems, and manual updates.",
      "Dispatch and exception handling depend on fragmented communication.",
      "Customers and partners chase teams for answers that should already be available.",
    ],
    capabilityCopy: [
      "Build shipment and fleet platforms that make movement, ownership, and next actions visible.",
      "Automate dispatch, alerts, handoffs, and exception workflows while preserving human control.",
      "Create partner and customer portals that provide accurate status without manual chasing.",
      "Connect tracking, ERP, warehouse, and carrier systems into one more dependable data flow.",
    ],
    outcomeSupport: "Better coordination across every moving part, with earlier response to delays and clearer answers for customers.",
  },
  "/industries/saas-technology": {
    systemLabel: "Product growth system",
    signals: ["Roadmap", "Platform", "Adoption"],
    contextLabels: ["Value", "Quality", "Scale"],
    frictions: [
      "Roadmaps grow faster than evidence about what will improve adoption and retention.",
      "Architecture and experience debt make every important product change slower.",
      "Product, billing, support, and growth data are separated from the decisions they should inform.",
    ],
    capabilityCopy: [
      "Use product discovery and UX research to prioritize the improvements most likely to create value.",
      "Engineer platform and feature work with stability, maintainability, and future scale in view.",
      "Connect billing, identity, analytics, support, and product systems around complete customer journeys.",
      "Improve activation and retention through instrumentation, experimentation, and focused iteration.",
    ],
    outcomeSupport: "A more focused product operation that ships valuable improvements faster without weakening the platform underneath.",
  },
  "/industries/startups": {
    systemLabel: "Venture learning loop",
    signals: ["Problem", "Product", "Market"],
    contextLabels: ["Focus", "Evidence", "Runway"],
    frictions: [
      "Teams build too much before proving the most important market assumptions.",
      "Fast delivery creates avoidable product and technical debt when decisions are not focused.",
      "Learning is delayed because analytics, feedback, and experiments are added after launch.",
    ],
    capabilityCopy: [
      "Frame the riskiest assumptions and define the smallest credible product that can test them.",
      "Design and prototype the core journey before committing precious runway to full implementation.",
      "Build scalable foundations where they matter while keeping the first release focused and fast.",
      "Instrument usage and growth experiments so every release produces clearer evidence for the next move.",
    ],
    outcomeSupport: "A stronger learning loop that protects runway, reaches customers sooner, and reduces costly product reversals.",
  },
};

const defaultIndustryMeta = {
  systemLabel: "Industry operating system",
  signals: ["People", "Process", "Data"],
  contextLabels: ["Context", "Control", "Growth"],
  frictions: [
    "Customer experiences and internal workflows are separated by avoidable gaps.",
    "Critical information reaches teams too late to support confident decisions.",
    "Modernization must create value now without limiting the operation that comes next.",
  ],
  capabilityCopy: [],
  outcomeSupport: "A digital system shaped around the realities of the industry, the people using it, and the outcome it needs to create.",
};

const contextIcons = [Users, Workflow, ShieldCheck];

const IndustryDetailContent = ({ page, pathname }) => {
  const rootRef = useRef(null);
  const meta = industryDetailMeta[pathname] || defaultIndustryMeta;
  const relatedItems = Object.entries(page.section.entries)
    .filter(([path]) => path !== pathname)
    .slice(0, 3);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const body = document.body;
    body.classList.add("industry-detail-page-active");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return () => body.classList.remove("industry-detail-page-active");
    }

    const desktopMotion = window.matchMedia("(min-width: 1025px)").matches;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".industry-detail-back, .industry-detail-kicker", {
          autoAlpha: 0,
          y: 18,
          duration: 0.55,
          stagger: 0.08,
        })
        .from(
          ".industry-detail-title-word",
          {
            yPercent: 115,
            rotateX: -16,
            duration: 0.95,
            stagger: 0.08,
            transformOrigin: "center bottom",
          },
          "-=0.25",
        )
        .from(
          ".industry-detail-lead, .industry-detail-actions, .industry-detail-scroll-cue",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.68,
            stagger: 0.1,
          },
          "-=0.55",
        )
        .from(
          ".industry-detail-scene",
          {
            autoAlpha: 0,
            scale: 0.72,
            rotateX: 18,
            duration: 1.25,
          },
          "-=1.05",
        );

      gsap.to(".industry-detail-scene", {
        yPercent: 24,
        scale: 0.9,
        rotateX: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".industry-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.to(".industry-detail-hero-grid", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: ".industry-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".industry-detail-hero-copy", {
        y: -34,
        ease: "none",
        scrollTrigger: {
          trigger: ".industry-detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.from(".industry-detail-proof span", {
        autoAlpha: 0,
        y: 18,
        duration: 0.58,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".industry-detail-proof",
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".industry-context-heading > *", {
        autoAlpha: 0,
        y: 32,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-context-section",
          start: "top 78%",
          once: true,
        },
      });

      const contextCards = gsap.utils.toArray(".industry-context-card");
      const contextDots = gsap.utils.toArray(".industry-context-dot");
      const contextStage = root.querySelector(".industry-context-stage");

      if (desktopMotion && contextStage && contextCards.length) {
        gsap.set(contextCards, {
          autoAlpha: 0,
          yPercent: 115,
          scale: 0.9,
          rotateX: 12,
          z: -180,
          transformPerspective: 1400,
          transformOrigin: "center center",
        });
        gsap.set(contextCards[0], {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          rotateX: 0,
          z: 0,
        });
        gsap.set(contextDots[0], { scale: 1, backgroundColor: "#22ce68" });

        const contextTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".industry-context-stage-wrap",
            start: "top 94px",
            end: `+=${Math.max(1500, contextCards.length * 560)}`,
            pin: contextStage,
            pinSpacing: true,
            scrub: 0.72,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        contextTimeline.to({}, { duration: 0.55 });

        contextCards.forEach((card, index) => {
          if (index === 0) return;
          const previous = contextCards[index - 1];

          contextTimeline
            .to(previous, {
              y: -28,
              scale: 0.92,
              rotateX: -5,
              z: -130,
              autoAlpha: 0.52,
              duration: 0.62,
              ease: "power2.inOut",
            })
            .to(
              card,
              {
                autoAlpha: 1,
                yPercent: 0,
                scale: 1,
                rotateX: 0,
                z: 0,
                duration: 0.86,
                ease: "power3.out",
              },
              "-=0.3",
            )
            .to(
              contextDots[index],
              {
                scale: 1,
                backgroundColor: "#22ce68",
                duration: 0.24,
              },
              "-=0.55",
            )
            .to({}, { duration: 0.52 });
        });
      } else {
        gsap.from(contextCards, {
          autoAlpha: 0,
          y: 54,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-context-card-list",
            start: "top 82%",
            once: true,
          },
        });
      }

      const capabilityCards = gsap.utils.toArray(".industry-capability-card");
      const capabilitySteps = gsap.utils.toArray(".industry-capability-step");
      const capabilityStage = root.querySelector(".industry-capability-stage");

      if (desktopMotion && capabilityStage && capabilityCards.length) {
        gsap.set(capabilityCards, {
          autoAlpha: 0.14,
          scale: 0.82,
          y: 70,
          rotateY: -12,
          z: -120,
          transformPerspective: 1300,
        });
        gsap.set(capabilityCards[0], {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          z: 0,
        });
        gsap.set(capabilitySteps[0], { color: "#22ce68" });

        const capabilityTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".industry-capability-section",
            start: "top 92px",
            end: `+=${Math.max(1700, capabilityCards.length * 520)}`,
            pin: capabilityStage,
            pinSpacing: true,
            scrub: 0.76,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        capabilityTimeline.from(".industry-capability-heading > *", {
          autoAlpha: 0,
          y: 26,
          stagger: 0.08,
          duration: 0.45,
        });

        capabilityCards.forEach((card, index) => {
          if (index === 0) {
            capabilityTimeline.to({}, { duration: 0.55 });
            return;
          }

          capabilityTimeline
            .to(capabilityCards[index - 1], {
              autoAlpha: 0.28,
              scale: 0.88,
              y: -34,
              rotateY: 9,
              z: -110,
              duration: 0.55,
            })
            .to(
              card,
              {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                rotateY: 0,
                z: 0,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.28",
            )
            .to(
              capabilitySteps[index],
              { color: "#22ce68", duration: 0.25 },
              "-=0.52",
            )
            .to(
              ".industry-capability-progress",
              {
                scaleY: (index + 1) / capabilityCards.length,
                duration: 0.58,
                ease: "none",
              },
              "-=0.64",
            )
            .to({}, { duration: 0.48 });
        });
      } else {
        gsap.from(capabilityCards, {
          autoAlpha: 0,
          y: 44,
          duration: 0.72,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-capability-card-list",
            start: "top 82%",
            once: true,
          },
        });
      }

      gsap.from(".industry-outcome-inner", {
        autoAlpha: 0,
        y: 56,
        scale: 0.96,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-outcome-section",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".industry-outcome-inner > *", {
        autoAlpha: 0,
        y: 24,
        duration: 0.62,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".industry-outcome-inner",
          start: "top 76%",
          once: true,
        },
      });

      gsap.fromTo(
        ".industry-process-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".industry-process-section",
            start: "top 72%",
            end: "bottom 62%",
            scrub: 0.55,
          },
        },
      );

      gsap.from(".industry-process-step", {
        autoAlpha: 0,
        y: 40,
        duration: 0.72,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-process-steps",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".industry-related-heading > *", {
        autoAlpha: 0,
        y: 26,
        duration: 0.68,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-related-section",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".industry-related-link", {
        autoAlpha: 0,
        x: -38,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-related-list",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".industry-cta-inner", {
        autoAlpha: 0,
        y: 48,
        scale: 0.975,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-cta-section",
          start: "top 84%",
          once: true,
        },
      });
    }, root);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
      body.classList.remove("industry-detail-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="industry-detail-page">
      <section className="industry-detail-hero">
        <div className="industry-detail-hero-grid" aria-hidden="true" />
        <div className="industry-detail-hero-glow industry-detail-hero-glow--one" aria-hidden="true" />
        <div className="industry-detail-hero-glow industry-detail-hero-glow--two" aria-hidden="true" />

        <div className="industry-detail-scene" aria-hidden="true">
          <div className="industry-detail-sphere">
            <span className="industry-detail-orbit industry-detail-orbit--one" />
            <span className="industry-detail-orbit industry-detail-orbit--two" />
            <span className="industry-detail-orbit industry-detail-orbit--three" />
            <span className="industry-detail-orbit industry-detail-orbit--four" />
            <span className="industry-detail-sphere-core">Q<i /></span>
          </div>
          {meta.signals.map((signal, index) => (
            <span className={`industry-detail-scene-node industry-detail-scene-node--${index + 1}`} key={signal}>
              <i /> {signal}
            </span>
          ))}
          <div className="industry-detail-scene-panel">
            <small>Industry context</small>
            <strong>{meta.systemLabel}</strong>
            <span><i /> live system</span>
          </div>
        </div>

        <div className="industry-detail-container industry-detail-hero-copy">
          <Link className="industry-detail-back" to="/industries">
            <ArrowLeft /> All industries
          </Link>
          <p className="industry-detail-kicker"><Sparkles /> Industry expertise</p>
          <h1 aria-label={page.title}>
            {page.title.split(" ").map((word, index) => (
              <span className="industry-detail-title-mask" key={`${word}-${index}`}>
                <span className="industry-detail-title-word">{word}&nbsp;</span>
              </span>
            ))}
          </h1>
          <p className="industry-detail-lead">{page.statement}</p>
          <div className="industry-detail-actions">
            <Link className="industry-detail-button industry-detail-button--primary" to="/contact">
              Discuss your industry <ArrowUpRight />
            </Link>
            <a className="industry-detail-button industry-detail-button--ghost" href="#industry-context">
              Explore the context <MoveDown />
            </a>
          </div>
          <a className="industry-detail-scroll-cue" href="#industry-context">
            <span>Scroll to explore</span><i />
          </a>
        </div>
      </section>

      <section className="industry-detail-proof" aria-label="QueLogics industry principles">
        <div className="industry-detail-container">
          {page.section.proof.map((item) => <span key={item}><Check /> {item}</span>)}
        </div>
      </section>

      <section className="industry-context-section" id="industry-context">
        <div className="industry-detail-container industry-context-heading">
          <p className="industry-detail-kicker">The operating reality</p>
          <h2>Good technology begins with the context around the work.</h2>
          <p>
            We look beyond the interface to understand the people, constraints, handoffs,
            and risk that shape how value is actually created in {page.title.toLowerCase()}.
          </p>
        </div>

        <div className="industry-context-stage-wrap">
          <div className="industry-detail-container industry-context-stage">
            <div className="industry-context-card-list">
              {meta.frictions.map((friction, index) => {
                const Icon = contextIcons[index] || CircleDot;
                return (
                  <article className="industry-context-card" key={friction}>
                    <div className="industry-context-card-top">
                      <span>0{index + 1}</span>
                      <Icon />
                    </div>
                    <p>{meta.contextLabels[index]}</p>
                    <h3>{friction}</h3>
                    <div className="industry-context-card-signal"><i /> Context mapped</div>
                  </article>
                );
              })}
            </div>
            <div className="industry-context-progress" aria-hidden="true">
              {meta.frictions.map((item, index) => (
                <span className="industry-context-dot" key={item}>0{index + 1}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="industry-capability-section" id="industry-capabilities">
        <div className="industry-capability-stage">
          <div className="industry-detail-container industry-capability-heading">
            <p className="industry-detail-kicker">Built for this environment</p>
            <h2>Four connected moves. One industry-aware system.</h2>
          </div>

          <div className="industry-detail-container industry-capability-layout">
            <div className="industry-capability-visual" aria-hidden="true">
              <div className="industry-capability-core">
                <Layers3 />
                <small>QueLogics</small>
                <strong>{meta.systemLabel}</strong>
              </div>
              <span className="industry-capability-ring industry-capability-ring--one" />
              <span className="industry-capability-ring industry-capability-ring--two" />
              <span className="industry-capability-beam" />
              <span className="industry-capability-particle industry-capability-particle--one" />
              <span className="industry-capability-particle industry-capability-particle--two" />
              <span className="industry-capability-particle industry-capability-particle--three" />
            </div>

            <div className="industry-capability-controls">
              <div className="industry-capability-track" aria-hidden="true">
                <span className="industry-capability-progress" />
              </div>
              {page.capabilities.map((capability, index) => (
                <span className="industry-capability-step" key={capability}>0{index + 1}</span>
              ))}
            </div>

            <div className="industry-capability-card-list">
              {page.capabilities.map((capability, index) => (
                <article className="industry-capability-card" key={capability}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{capability}</h3>
                    <p>
                      {meta.capabilityCopy[index] ||
                        `This capability is adapted to the operating realities of ${page.title.toLowerCase()}, connecting experience, workflow, data, and measurable value.`}
                    </p>
                  </div>
                  <ArrowUpRight />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="industry-outcome-section">
        <div className="industry-detail-container industry-outcome-inner">
          <p className="industry-detail-kicker">The industry outcome</p>
          <h2>{page.outcome}</h2>
          <p>{meta.outcomeSupport}</p>
          <div className="industry-outcome-signals" aria-label="Delivery focus">
            <span><Gauge /> Visible progress</span>
            <span><ShieldCheck /> Responsible control</span>
            <span><Workflow /> Connected operations</span>
          </div>
        </div>
      </section>

      <section className="industry-process-section">
        <div className="industry-detail-container">
          <div className="industry-process-heading">
            <p className="industry-detail-kicker">How we move</p>
            <h2>Understand the environment. Modernize without losing control.</h2>
          </div>
          <div className="industry-process-track" aria-hidden="true">
            <span className="industry-process-progress" />
          </div>
          <div className="industry-process-steps">
            {page.section.process.map((step, index) => (
              <article className="industry-process-step" key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
                <p>{[
                  "Learn the workflows, users, constraints, and risks that define the operating environment.",
                  "Identify the highest-value change and make tradeoffs visible before major effort begins.",
                  "Deliver controlled improvements that connect cleanly to the systems already in use.",
                  "Measure real impact, strengthen the foundation, and expand what works with confidence.",
                ][index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-related-section">
        <div className="industry-detail-container">
          <div className="industry-related-heading">
            <div>
              <p className="industry-detail-kicker">More operating contexts</p>
              <h2>Explore related industries.</h2>
            </div>
            <Link to="/industries">View all industries <ArrowRight /></Link>
          </div>
          <div className="industry-related-list">
            {relatedItems.map(([path, item], index) => (
              <Link className="industry-related-link" to={path} key={path}>
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

      <section className="industry-cta-section">
        <div className="industry-detail-container industry-cta-inner">
          <div>
            <p className="industry-detail-kicker">Bring us the real environment</p>
            <h2>Let’s design the right system around it.</h2>
          </div>
          <Link className="industry-detail-button industry-detail-button--primary" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};


const IndustryDetailPage = () => {
  const { pathname } = useLocation();
  const page = findSectionDetailContent("industries", pathname);

  if (!page) {
    return <Navigate to="/industries" replace />;
  }

  return <IndustryDetailContent page={page} pathname={pathname} />;
};

export default IndustryDetailPage;
