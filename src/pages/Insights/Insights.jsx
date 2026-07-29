import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BookOpen,
  Braces,
  ChartNoAxesCombined,
  Clock3,
  Layers3,
  MousePointerClick,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./Insights.css";

gsap.registerPlugin(ScrollTrigger);

const featuredInsights = [
  {
    number: "01",
    category: "AI & automation",
    title: "Where AI creates real operational value—and where it does not.",
    summary:
      "A practical way to separate useful automation opportunities from expensive demonstrations.",
    path: "/insights/ai-automation",
    readTime: "8 min read",
  },
  {
    number: "02",
    category: "Software & product",
    title: "The decisions that make an MVP easier to evolve after launch.",
    summary:
      "How focused scope, clear architecture, and fast learning protect the next version of a product.",
    path: "/insights/software-product",
    readTime: "6 min read",
  },
  {
    number: "03",
    category: "SEO, AEO & growth",
    title: "Search visibility now starts before the customer reaches your website.",
    summary:
      "A clearer model for earning attention across search, answer engines, and high-intent journeys.",
    path: "/insights/seo-growth",
    readTime: "7 min read",
  },
  {
    number: "04",
    category: "UI / UX & conversion",
    title: "Reduce decision friction before redesigning the interface.",
    summary:
      "Why clarity, proof, and sequence often matter more than adding another visual treatment.",
    path: "/insights/design-conversion",
    readTime: "5 min read",
  },
];

const topics = [
  {
    number: "01",
    icon: Bot,
    title: "AI & Automation",
    text: "Opportunity frameworks, agent design, workflow automation, governance, and measurement for practical adoption.",
    path: "/insights/ai-automation",
    signal: "From curiosity to useful systems",
  },
  {
    number: "02",
    icon: Braces,
    title: "Software & Product",
    text: "Product strategy, architecture, modernization, delivery quality, and the tradeoffs behind dependable software.",
    path: "/insights/software-product",
    signal: "Make sharper build decisions",
  },
  {
    number: "03",
    icon: Search,
    title: "SEO, AEO & Growth",
    text: "Demand, authority, discovery, conversion, and measurement systems designed to compound instead of reset.",
    path: "/insights/seo-growth",
    signal: "Turn visibility into momentum",
  },
  {
    number: "04",
    icon: MousePointerClick,
    title: "UI / UX & Conversion",
    text: "Research, interface clarity, trust, experimentation, and customer journeys that make the next step easier.",
    path: "/insights/design-conversion",
    signal: "Design for confident action",
  },
];

const resources = [
  {
    icon: Workflow,
    eyebrow: "Step-by-step",
    title: "Automation Guides",
    text: "Audit workflows, compare tools, plan integrations, and build reliability into automation from the beginning.",
    path: "/insights/automation-guides",
  },
  {
    icon: ChartNoAxesCombined,
    eyebrow: "Repeatable systems",
    title: "Growth Playbooks",
    text: "Frameworks for acquisition, offers, landing pages, nurture, experimentation, and measurable growth discipline.",
    path: "/insights/growth-playbooks",
  },
  {
    icon: Layers3,
    eyebrow: "Technical clarity",
    title: "Development Guides",
    text: "Understand architecture, platform selection, security, performance, and delivery without unnecessary jargon.",
    path: "/insights/development-guides",
  },
];

const signalCards = [
  {
    label: "Signal 01",
    title: "A useful AI opportunity begins with a repeated decision—not a tool.",
    meta: "AI & automation",
  },
  {
    label: "Signal 02",
    title: "The best MVP scope protects one learning loop from distraction.",
    meta: "Software & product",
  },
  {
    label: "Signal 03",
    title: "Growth becomes durable when discovery, proof, and follow-up share one system.",
    meta: "Growth",
  },
];

const Insights = () => {
  const pageRef = useRef(null);
  const signalPanelRef = useRef(null);
  const topicSectionRef = useRef(null);

  useLayoutEffect(() => {
    const body = document.body;
    body.classList.add("insights-page-active");

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".insights-hero-kicker", {
          y: 18,
          autoAlpha: 0,
          duration: 0.5,
        })
        .from(
          ".insights-title-line > span",
          {
            yPercent: 112,
            rotate: 1.2,
            duration: 0.82,
            stagger: 0.08,
          },
          "-=0.24",
        )
        .from(
          ".insights-hero-lead, .insights-hero-actions, .insights-hero-proof",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.64,
            stagger: 0.09,
          },
          "-=0.46",
        )
        .from(
          signalPanelRef.current,
          {
            x: 48,
            scale: 0.965,
            autoAlpha: 0,
            duration: 0.9,
          },
          "-=0.72",
        );

      gsap.to(".insights-orbit-ring.is-outer", {
        rotate: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".insights-orbit-ring.is-inner", {
        rotate: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".insights-orbit-dot", {
        scale: 1.45,
        opacity: 0.42,
        duration: 1.15,
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
        ease: "sine.inOut",
      });

      const signalItems = gsap.utils.toArray(
        ".insights-signal-card",
        signalPanelRef.current,
      );

      if (signalItems.length) {
        gsap.set(signalItems, { autoAlpha: 0, y: 22 });
        gsap.set(signalItems[0], { autoAlpha: 1, y: 0 });

        const signalLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

        signalItems.forEach((item, index) => {
          const next = signalItems[(index + 1) % signalItems.length];

          signalLoop
            .to(item, { duration: 1.65 })
            .to(item, {
              y: -18,
              autoAlpha: 0,
              duration: 0.42,
              ease: "power2.in",
            })
            .fromTo(
              next,
              { y: 22, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: "power3.out",
              },
              "-=0.18",
            );
        });
      }

      gsap.utils.toArray(".insights-reveal").forEach((element) => {
        gsap.from(element, {
          y: 36,
          autoAlpha: 0,
          filter: "blur(7px)",
          duration: 0.76,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".insights-featured-row").forEach((row, index) => {
        gsap.from(row, {
          x: index % 2 === 0 ? 44 : 28,
          autoAlpha: 0,
          duration: 0.68,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      const topicRows = gsap.utils.toArray(
        ".insights-topic-row",
        topicSectionRef.current,
      );

      topicRows.forEach((row, index) => {
        gsap.from(row, {
          x: 72,
          autoAlpha: 0,
          duration: 0.75,
          delay: index * 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.fromTo(
        ".insights-topic-progress > span",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: topicSectionRef.current,
            start: "top 62%",
            end: "bottom 70%",
            scrub: 0.45,
          },
        },
      );

      gsap.to(".insights-marquee-track.is-forward", {
        xPercent: -50,
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".insights-marquee-track.is-reverse", {
        xPercent: 0,
        duration: 36,
        repeat: -1,
        ease: "none",
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, pageRef);

    return () => {
      context.revert();
      body.classList.remove("insights-page-active");
    };
  }, []);

  return (
    <main className="insights-premium" ref={pageRef}>
      <section className="insights-hero">
        <div className="insights-container insights-hero-grid">
          <div className="insights-hero-copy">
            <p className="insights-hero-kicker">
              <Sparkles aria-hidden="true" />
              Ideas you can put to work
            </p>

            <h1 className="insights-hero-title">
              <span className="insights-title-line">
                <span>Clear thinking for</span>
              </span>
              <span className="insights-title-line">
                <span>complex digital</span>
              </span>
              <span className="insights-title-line is-accent">
                <span>decisions.</span>
              </span>
            </h1>

            <p className="insights-hero-lead">
              Practical perspectives on AI, software, product design, and
              growth—shaped by the systems we plan, build, and improve every
              day.
            </p>

            <div className="insights-hero-actions">
              <a className="insights-button insights-button-primary" href="#featured-insights">
                Explore the latest
                <ArrowRight aria-hidden="true" />
              </a>
              <Link className="insights-button insights-button-secondary" to="/case-studies">
                See delivery stories
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>

            <dl className="insights-hero-proof">
              <div>
                <dt>Field-tested</dt>
                <dd>Built from delivery experience</dd>
              </div>
              <div>
                <dt>Plain language</dt>
                <dd>Useful without the jargon</dd>
              </div>
              <div>
                <dt>Actionable</dt>
                <dd>Made for the next decision</dd>
              </div>
            </dl>
          </div>

          <div className="insights-signal-panel" ref={signalPanelRef} aria-label="Animated insight signals">
            <div className="insights-signal-topbar">
              <span>
                <span className="insights-live-dot" />
                Insight signal
              </span>
              <span className="insights-signal-status">Live</span>
            </div>

            <div className="insights-orbit" aria-hidden="true">
              <span className="insights-orbit-ring is-outer" />
              <span className="insights-orbit-ring is-inner" />
              <span className="insights-orbit-dot is-one" />
              <span className="insights-orbit-dot is-two" />
              <span className="insights-orbit-dot is-three" />
            </div>

            <div className="insights-signal-core">
              <BookOpen aria-hidden="true" />
              <span>QueLogics</span>
              <strong>Applied insight</strong>
            </div>

            <div className="insights-signal-feed">
              {signalCards.map((card) => (
                <article className="insights-signal-card" key={card.label}>
                  <span>{card.label}</span>
                  <h2>{card.title}</h2>
                  <p>{card.meta}</p>
                </article>
              ))}
            </div>

            <div className="insights-signal-footer">
              <span>Observe</span>
              <i />
              <span>Understand</span>
              <i />
              <span>Apply</span>
            </div>
          </div>
        </div>
      </section>

      <section className="insights-featured" id="featured-insights">
        <div className="insights-container">
          <header className="insights-section-heading insights-reveal">
            <div>
              <p className="insights-kicker">Featured thinking</p>
              <h2>Useful ideas, without the theatre.</h2>
            </div>
            <p>
              Focused guidance for teams deciding what to build, automate,
              improve, or measure next.
            </p>
          </header>

          <div className="insights-featured-layout">
            <Link className="insights-featured-lead insights-reveal" to={featuredInsights[0].path}>
              <div className="insights-featured-visual" aria-hidden="true">
                <span className="insights-featured-grid" />
                <span className="insights-featured-beam is-one" />
                <span className="insights-featured-beam is-two" />
                <span className="insights-featured-marker">
                  <Bot />
                </span>
                <span className="insights-featured-word">VALUE</span>
              </div>

              <div className="insights-featured-lead-copy">
                <div className="insights-article-meta">
                  <span>{featuredInsights[0].category}</span>
                  <span>
                    <Clock3 aria-hidden="true" />
                    {featuredInsights[0].readTime}
                  </span>
                </div>
                <h3>{featuredInsights[0].title}</h3>
                <p>{featuredInsights[0].summary}</p>
                <span className="insights-text-link">
                  Read the perspective
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </Link>

            <div className="insights-featured-list">
              {featuredInsights.slice(1).map((item) => (
                <Link className="insights-featured-row" to={item.path} key={item.number}>
                  <span className="insights-featured-number">{item.number}</span>
                  <div>
                    <div className="insights-article-meta">
                      <span>{item.category}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="insights-topics" ref={topicSectionRef}>
        <div className="insights-container insights-topics-grid">
          <div className="insights-topics-intro insights-reveal">
            <div className="insights-topics-sticky">
              <p className="insights-kicker is-light">Explore by topic</p>
              <h2>Follow the question that matters now.</h2>
              <p>
                Each topic combines strategic framing with practical guidance,
                so the insight can move beyond discussion and into the work.
              </p>
              <div className="insights-topic-progress" aria-hidden="true">
                <span />
              </div>
            </div>
          </div>

          <div className="insights-topic-list">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <Link className="insights-topic-row" to={topic.path} key={topic.number}>
                  <div className="insights-topic-index">{topic.number}</div>
                  <div className="insights-topic-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="insights-topic-copy">
                    <span>{topic.signal}</span>
                    <h3>{topic.title}</h3>
                    <p>{topic.text}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insights-marquee" aria-label="QueLogics insight themes">
        <div className="insights-marquee-track is-forward">
          {["Product strategy", "Applied AI", "Workflow design", "Conversion", "Search visibility", "Software quality", "Product strategy", "Applied AI", "Workflow design", "Conversion", "Search visibility", "Software quality"].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
        <div className="insights-marquee-track is-reverse">
          {["Architecture", "Experimentation", "Automation", "Experience design", "Growth systems", "Integration", "Architecture", "Experimentation", "Automation", "Experience design", "Growth systems", "Integration"].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </section>

      <section className="insights-resources">
        <div className="insights-container">
          <header className="insights-section-heading insights-reveal">
            <div>
              <p className="insights-kicker">Practical resources</p>
              <h2>Move from reading to doing.</h2>
            </div>
            <p>
              Structured guides and playbooks for decisions that benefit from a
              clearer sequence, stronger checks, and fewer assumptions.
            </p>
          </header>

          <div className="insights-resource-grid">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <Link className="insights-resource-card insights-reveal" to={resource.path} key={resource.title}>
                  <div className="insights-resource-topline">
                    <span>0{index + 1}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <p>{resource.eyebrow}</p>
                  <h3>{resource.title}</h3>
                  <span className="insights-resource-rule" />
                  <p className="insights-resource-description">{resource.text}</p>
                  <span className="insights-text-link">
                    Explore the resource
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insights-cta">
        <div className="insights-container insights-cta-inner insights-reveal">
          <div>
            <p className="insights-kicker">A decision in front of you?</p>
            <h2>Turn the question into a clear next move.</h2>
          </div>
          <Link className="insights-button insights-button-dark" to="/contact">
            Talk to an expert
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Insights;