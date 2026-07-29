import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChartNoAxesCombined,
  Code2,
  Compass,
  Palette,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import "./Careers.css";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Clarity before activity",
    text: "We understand the problem, the customer, and the outcome before filling a calendar with tasks.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Ownership without ego",
    text: "Strong ideas can come from anywhere. The best answer matters more than who suggested it first.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality that stays useful",
    text: "We care about the details that earn trust: reliability, usability, performance, and thoughtful communication.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Momentum with context",
    text: "We move quickly because decisions are visible, feedback is early, and disciplines work together.",
  },
];

const talentAreas = [
  {
    number: "01",
    icon: Code2,
    title: "Software Engineering",
    text: "Web, mobile, cloud, integrations, architecture, and dependable product delivery.",
    skills: ["Frontend", "Backend", "Cloud"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Product & Experience Design",
    text: "Research, product thinking, interaction design, visual systems, and useful prototypes.",
    skills: ["Product", "UI / UX", "Research"],
  },
  {
    number: "03",
    icon: Bot,
    title: "AI & Automation",
    text: "Practical agents, workflow automation, data connections, and responsible implementation.",
    skills: ["AI systems", "Automation", "Data"],
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Growth & Strategy",
    text: "Positioning, performance marketing, search, conversion, analytics, and growth operations.",
    skills: ["Growth", "SEO / AEO", "Strategy"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "A real conversation",
    text: "We begin with your experience, how you think, and the kind of work you want to own.",
  },
  {
    number: "02",
    title: "A practical working session",
    text: "Instead of theatre, we explore a realistic problem together and discuss your decisions.",
  },
  {
    number: "03",
    title: "Meet the people",
    text: "You speak with the teammates and leaders you would actually collaborate with.",
  },
  {
    number: "04",
    title: "A clear next step",
    text: "You receive direct feedback, transparent expectations, and a straightforward decision.",
  },
];

const Careers = () => {
  const pageRef = useRef(null);
  const processRef = useRef(null);

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
        .from(".careers-hero-kicker", {
          y: 16,
          autoAlpha: 0,
          duration: 0.5,
        })
        .from(
          ".careers-title-line > span",
          {
            yPercent: 112,
            rotate: 1.2,
            duration: 0.82,
            stagger: 0.08,
          },
          "-=0.2",
        )
        .from(
          ".careers-hero-lead, .careers-hero-actions, .careers-hero-facts",
          {
            y: 22,
            autoAlpha: 0,
            duration: 0.65,
            stagger: 0.09,
          },
          "-=0.48",
        )
        .from(
          ".careers-work-map",
          {
            x: 34,
            scale: 0.94,
            autoAlpha: 0,
            duration: 0.9,
          },
          "-=0.8",
        );

      gsap.utils.toArray(".careers-reveal").forEach((element) => {
        gsap.from(element, {
          y: 38,
          autoAlpha: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".careers-principle", {
        y: 34,
        autoAlpha: 0,
        duration: 0.72,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".careers-principles-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".careers-role-row", {
        x: 42,
        autoAlpha: 0,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".careers-role-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      const processFill = processRef.current?.querySelector(
        ".careers-process-progress-fill",
      );

      if (processFill) {
        gsap.fromTo(
          processFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 68%",
              end: "bottom 65%",
              scrub: 0.7,
            },
          },
        );
      }
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} className="careers-page">
      <section className="careers-hero hero-section">
        <div className="careers-hero-grid">
          <div className="careers-hero-copy">
            <span className="careers-hero-kicker">
              <Sparkles aria-hidden="true" />
              Careers at QueLogics
            </span>

            <h1 className="careers-hero-title">
              <span className="careers-title-line">
                <span>Do work that</span>
              </span>
              <span className="careers-title-line">
                <span>stays useful</span>
              </span>
              <span className="careers-title-line careers-title-line-accent">
                <span>after launch.</span>
              </span>
            </h1>

            <p className="careers-hero-lead">
              Join a connected team that turns complex business problems into
              clear products, dependable systems, and measurable progress.
            </p>

            <div className="careers-hero-actions">
              <a className="careers-button careers-button-primary" href="#opportunities">
                Explore opportunities
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="careers-button careers-button-secondary" href="#how-we-work">
                How we work
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="careers-hero-facts" aria-label="Career highlights">
              <div>
                <strong>Small teams</strong>
                <span>Close collaboration</span>
              </div>
              <div>
                <strong>Clear ownership</strong>
                <span>Visible decisions</span>
              </div>
              <div>
                <strong>Useful outcomes</strong>
                <span>Work with purpose</span>
              </div>
            </div>
          </div>

          <div className="careers-work-map" aria-label="How work moves at QueLogics">
            <div className="careers-map-header">
              <span>
                <i /> Work system
              </span>
              <strong>Connected</strong>
            </div>

            <div className="careers-map-stage">
              <div className="careers-map-line" aria-hidden="true">
                <i />
              </div>

              <div className="careers-map-node careers-map-node-one">
                <span>01</span>
                <strong>Understand</strong>
                <small>Find the real constraint</small>
              </div>

              <div className="careers-map-node careers-map-node-two">
                <span>02</span>
                <strong>Build together</strong>
                <small>Share context and ownership</small>
              </div>

              <div className="careers-map-node careers-map-node-three">
                <span>03</span>
                <strong>Improve</strong>
                <small>Learn from real outcomes</small>
              </div>
            </div>

            <div className="careers-map-footer">
              <span>Strategy</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Growth</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="careers-intro">
        <div className="careers-section-shell careers-intro-grid">
          <div className="careers-section-heading careers-reveal">
            <span>How we work</span>
            <h2>Good work happens when people have context, trust, and room to think.</h2>
          </div>

          <div className="careers-intro-copy careers-reveal">
            <p>
              We keep teams close to the customer and close to each other. That
              means fewer hand-offs, more useful conversations, and a stronger
              connection between a decision and its result.
            </p>
            <p>
              You will be expected to ask questions, explain your thinking,
              improve the work around you, and take responsibility without
              waiting for perfect instructions.
            </p>
          </div>
        </div>
      </section>

      <section className="careers-principles">
        <div className="careers-section-shell">
          <div className="careers-section-heading careers-section-heading-light careers-reveal">
            <span>What we value</span>
            <h2>Simple principles that make ambitious work easier to do well.</h2>
          </div>

          <div className="careers-principles-grid">
            {principles.map(({ number, icon: Icon, title, text }) => (
              <article className="careers-principle" key={number}>
                <div className="careers-principle-topline">
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="careers-opportunities">
        <div className="careers-section-shell careers-opportunity-grid">
          <div className="careers-opportunity-intro careers-reveal">
            <span className="careers-eyebrow">Where you can contribute</span>
            <h2>Bring depth in your craft and curiosity beyond it.</h2>
            <p>
              These are the talent areas we regularly build teams around. Share
              your profile even when a perfect title is not listed.
            </p>
            <Link className="careers-text-link" to="/contact">
              Start a conversation
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="careers-role-list">
            {talentAreas.map(({ number, icon: Icon, title, text, skills }) => (
              <article className="careers-role-row" key={number}>
                <span className="careers-role-number">{number}</span>
                <div className="careers-role-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="careers-role-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="careers-role-skills">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
                <Link
                  className="careers-role-action"
                  to="/contact"
                  aria-label={`Discuss opportunities in ${title}`}
                >
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={processRef} className="careers-process">
        <div className="careers-section-shell careers-process-grid">
          <div className="careers-process-intro careers-reveal">
            <span className="careers-eyebrow">The hiring experience</span>
            <h2>A clear process, with useful conversations at every step.</h2>
            <p>
              No unnecessary rounds, hidden expectations, or abstract puzzles.
              We focus on how you think, collaborate, and make decisions.
            </p>
          </div>

          <div className="careers-process-list">
            <div className="careers-process-progress" aria-hidden="true">
              <span className="careers-process-progress-fill" />
            </div>

            {processSteps.map(({ number, title, text }) => (
              <article className="careers-process-step careers-reveal" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-closing">
        <div className="careers-section-shell careers-closing-inner careers-reveal">
          <div>
            <span>Do not see your exact role?</span>
            <h2>Show us the problems you are ready to help solve.</h2>
          </div>

          <Link className="careers-button careers-button-dark" to="/contact">
            Share your profile
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Careers;