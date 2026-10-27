import { useLayoutEffect, useMemo, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  DatabaseZap,
  Gauge,
  Layers3,
  MoveDown,
  Network,
  PanelsTopLeft,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { findSectionDetailContent } from "../../data/pageContent";
import { solutionPageProfiles } from "../../data/solutionPageData";
import "./SolutionDetailPage.css";

gsap.registerPlugin(ScrollTrigger);

const iconByPath = {
  "/solutions/business-automation": Workflow,
  "/solutions/lead-generation": Target,
  "/solutions/conversion-growth": Gauge,
  "/solutions/system-integration": Network,
  "/solutions/mvp-development": Rocket,
  "/solutions/software-modernization": RefreshCcw,
  "/solutions/customer-portals": PanelsTopLeft,
  "/solutions/quality-assurance": ShieldCheck,
  "/solutions/wordpress": Layers3,
  "/solutions/shopify": ShoppingBag,
  "/solutions/webflow": Sparkles,
  "/solutions/crm-api-integrations": DatabaseZap,
};

const processSteps = [
  {
    number: "01",
    title: "Define the gap",
    text: "Align on the business constraint, the people affected, and the evidence that will prove progress.",
  },
  {
    number: "02",
    title: "Design the system",
    text: "Connect workflow, experience, technology, data, and ownership into one practical delivery plan.",
  },
  {
    number: "03",
    title: "Deliver visibly",
    text: "Build in useful increments, validate in context, and keep decisions, risks, and progress clear.",
  },
  {
    number: "04",
    title: "Measure and improve",
    text: "Use real operational and customer signals to strengthen the solution after launch.",
  },
];

const SolutionDetailContent = ({ page, pathname, profile }) => {
  const rootRef = useRef(null);
  const progressRef = useRef(null);
  const Icon = iconByPath[pathname] || Sparkles;

  const related = useMemo(() => {
    const entries = Object.entries(page.section.entries).filter(([path]) => path !== pathname);
    const sameGroup = entries.filter(([path]) => solutionPageProfiles[path]?.group === profile.group);
    return [...sameGroup, ...entries.filter(([path]) => solutionPageProfiles[path]?.group !== profile.group)].slice(0, 3);
  }, [page.section.entries, pathname, profile.group]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const body = document.body;
    body.classList.add("solution-detail-page-active");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return () => body.classList.remove("solution-detail-page-active");
    }

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTimeline
        .from("[data-solution-back], [data-solution-kicker]", {
          autoAlpha: 0,
          y: 16,
          duration: 0.5,
          stagger: 0.08,
        })
        .from("[data-solution-title] span", {
          yPercent: 112,
          rotate: 1.2,
          duration: 0.85,
          stagger: 0.07,
        }, "-=0.22")
        .from("[data-solution-intro], [data-solution-actions], [data-solution-proof]", {
          autoAlpha: 0,
          y: 24,
          duration: 0.68,
          stagger: 0.09,
        }, "-=0.52")
        .from("[data-solution-visual]", {
          autoAlpha: 0,
          x: 46,
          scale: 0.94,
          duration: 0.95,
        }, "-=0.8");

      gsap.to(".solution-orbit--outer", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".solution-orbit--inner", {
        rotate: -360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to("[data-solution-visual]", {
        yPercent: 12,
        rotate: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".solution-premium-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray(".solution-reveal").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 44,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.from(".solution-metric-card", {
        autoAlpha: 0,
        y: 34,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-metrics-grid",
          start: "top 86%",
          once: true,
        },
      });

      gsap.utils.toArray(".solution-capability-card").forEach((card, index) => {
        gsap.from(card, {
          autoAlpha: 0,
          x: index % 2 === 0 ? 44 : -24,
          y: 32,
          rotateX: 5,
          scale: 0.97,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            once: true,
          },
        });
      });

      if (progressRef.current) {
        gsap.fromTo(progressRef.current, { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".solution-process-grid",
            start: "top 74%",
            end: "bottom 68%",
            scrub: 0.8,
          },
        });
      }

      gsap.from(".solution-process-step", {
        autoAlpha: 0,
        y: 38,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-process-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".solution-benefit", {
        autoAlpha: 0,
        x: -22,
        duration: 0.55,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solution-benefits",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".solution-related-card", {
        autoAlpha: 0,
        y: 32,
        duration: 0.68,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-related-grid",
          start: "top 86%",
          once: true,
        },
      });
    }, root);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
      body.classList.remove("solution-detail-page-active");
    };
  }, [pathname]);

  return (
    <main ref={rootRef} className="solution-premium-page">
      <section className="solution-premium-hero">
        <div className="solution-hero-grid" aria-hidden="true" />
        <div className="solution-hero-glow solution-hero-glow--one" aria-hidden="true" />
        <div className="solution-hero-glow solution-hero-glow--two" aria-hidden="true" />

        <div className="solution-container solution-hero-layout">
          <div className="solution-hero-copy">
            <Link data-solution-back className="solution-back-link" to="/solutions">
              <ArrowLeft /> All solutions
            </Link>

            <p data-solution-kicker className="solution-kicker">
              <CircleDot /> {profile.group} / {profile.eyebrow}
            </p>

            <h1 data-solution-title aria-label={page.title}>
              {page.title.split(" ").map((word, index) => (
                <span className="solution-title-mask" key={`${word}-${index}`}>
                  <span>{word}&nbsp;</span>
                </span>
              ))}
            </h1>

            <p data-solution-intro className="solution-hero-statement">{page.statement}</p>

            <div data-solution-actions className="solution-hero-actions">
              <Link className="solution-button solution-button--primary" to="/contact">
                Discuss this solution <ArrowUpRight />
              </Link>
              <a className="solution-button solution-button--ghost" href="#solution-approach">
                Explore the approach <MoveDown />
              </a>
            </div>

            <div data-solution-proof className="solution-hero-proof">
              {page.section.proof.map((item) => (
                <span key={item}><Check /> {item}</span>
              ))}
            </div>
          </div>

          <div data-solution-visual className="solution-engine" aria-label={`${page.title} solution system`}>
            <div className="solution-orbit solution-orbit--outer">
              <i /><i /><i />
            </div>
            <div className="solution-orbit solution-orbit--inner">
              <i /><i />
            </div>

            <div className="solution-engine-core">
              <span className="solution-engine-icon"><Icon /></span>
              <small>QueLogics solution</small>
              <strong>{profile.visualLabel}</strong>
              <span className="solution-engine-status"><i /> Connected</span>
            </div>

            {page.capabilities.slice(0, 4).map((capability, index) => (
              <span className={`solution-engine-node solution-engine-node--${index + 1}`} key={capability}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <small>{capability}</small>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-metrics">
        <div className="solution-container solution-metrics-grid">
          {profile.metrics.map(([title, text], index) => (
            <article className="solution-metric-card" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="solution-approach" className="solution-approach">
        <div className="solution-container solution-approach-layout">
          <div className="solution-approach-copy solution-reveal">
            <p className="solution-kicker">The business gap</p>
            <h2>Move from disconnected effort to one designed outcome.</h2>
            <div className="solution-approach-text">
              <div>
                <span>Challenge</span>
                <p>{profile.challenge}</p>
              </div>
              <div>
                <span>Our approach</span>
                <p>{profile.approach}</p>
              </div>
            </div>
          </div>

          <div className="solution-capability-list">
            {page.capabilities.map((capability, index) => (
              <article className="solution-capability-card" key={capability}>
                <div className="solution-capability-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <p className="solution-capability-label">Connected capability</p>
                  <h3>{capability}</h3>
                  <p>{profile.capabilityNotes[index]}</p>
                </div>
                <ArrowUpRight />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-process">
        <div className="solution-container">
          <div className="solution-section-heading solution-reveal">
            <p className="solution-kicker">How delivery moves</p>
            <h2>Four clear decisions. One visible path forward.</h2>
            <p>Every stage stays tied to the outcome, so progress is easier to understand and delivery is easier to trust.</p>
          </div>

          <div className="solution-process-grid">
            <div className="solution-process-track" aria-hidden="true">
              <i ref={progressRef} />
            </div>
            {processSteps.map((step) => (
              <article className="solution-process-step" key={step.number}>
                <span>{step.number}</span>
                <i className="solution-process-dot" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-outcome">
        <div className="solution-container solution-outcome-card solution-reveal">
          <div className="solution-outcome-mark" aria-hidden="true">
            <Icon />
            <span>Q+</span>
          </div>
          <div className="solution-outcome-copy">
            <p className="solution-kicker">The result</p>
            <h2>{page.outcome}</h2>
            <p>Success measures are agreed early, trade-offs stay visible, and every workstream remains connected to the business change it is meant to create.</p>
          </div>
          <div className="solution-benefits">
            {profile.benefits.map((benefit) => (
              <div className="solution-benefit" key={benefit}>
                <Check /> <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-related">
        <div className="solution-container">
          <div className="solution-related-heading solution-reveal">
            <div>
              <p className="solution-kicker">Keep exploring</p>
              <h2>Related solutions</h2>
            </div>
            <Link to="/solutions">View all solutions <ArrowRight /></Link>
          </div>

          <div className="solution-related-grid">
            {related.map(([path, item], index) => (
              <Link className="solution-related-card" to={path} key={path}>
                <span>0{index + 1}</span>
                <p>{solutionPageProfiles[path]?.group || "Solutions"}</p>
                <h3>{item.title}</h3>
                <strong>{item.statement}</strong>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-cta">
        <div className="solution-container solution-cta-card solution-reveal">
          <div>
            <p className="solution-kicker">Your next move</p>
            <h2>Ready to make this outcome real?</h2>
          </div>
          <Link className="solution-button solution-button--primary" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

const SolutionDetailPage = () => {
  const { pathname } = useLocation();
  const page = findSectionDetailContent("solutions", pathname);
  const profile = solutionPageProfiles[pathname];

  if (!page || !profile) {
    return <Navigate to="/solutions" replace />;
  }

  return <SolutionDetailContent page={page} pathname={pathname} profile={profile} />;
};

export default SolutionDetailPage;
