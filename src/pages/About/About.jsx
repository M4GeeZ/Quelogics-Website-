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
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import carshare from "../../assets/project-images/optimized/carshare.jpg";
import EagleChat from "../../assets/project-images/optimized/EagleChat.jpg";
import Mindora from "../../assets/project-images/optimized/Mindora.jpg";
import TMS from "../../assets/project-images/optimized/TMS.jpg";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    number: "01",
    kicker: "Discover",
    title: "Find the real constraint before writing code.",
    body: "We start with the business reality: the people, workflows, risks, and outcomes behind the brief. That gives the work a clear reason to exist and keeps every decision grounded.",
    detail: "Research · Product strategy · Opportunity mapping",
    image: carshare,
    imageAlt: "Carshare digital platform interface",
  },
  {
    number: "02",
    kicker: "Shape",
    title: "Turn complexity into a product direction people can see.",
    body: "Ideas become flows, prototypes, and a focused delivery plan. We simplify without flattening the problem, so teams can align early and move with confidence.",
    detail: "Experience design · Prototyping · Technical planning",
    image: Mindora,
    imageAlt: "Mindora health product interface",
  },
  {
    number: "03",
    kicker: "Build",
    title: "Engineer for real operations, not polished demos.",
    body: "Design and engineering stay connected from the first sprint. We build reliable systems around real users, edge cases, integrations, performance, and the way your business actually works.",
    detail: "Web and mobile · Cloud systems · Integrations",
    image: TMS,
    imageAlt: "Transport management system interface",
  },
  {
    number: "04",
    kicker: "Evolve",
    title: "Launch, learn, and keep improving what matters.",
    body: "A launch is a starting point. We use evidence, customer signals, and operational feedback to strengthen the product and help it grow without losing clarity or quality.",
    detail: "Optimisation · Product growth · Ongoing support",
    image: EagleChat,
    imageAlt: "EagleChat digital product interface",
  },
];

const partnershipCards = [
  {
    icon: Compass,
    title: "Senior attention",
    body: "The people shaping the approach stay close to the work and the decisions that matter.",
  },
  {
    icon: UsersRound,
    title: "One connected team",
    body: "Strategy, design, engineering, and growth work as one system rather than separate hand-offs.",
  },
  {
    icon: MessagesSquare,
    title: "Clear progress",
    body: "You always know what is moving, what needs a decision, and what happens next.",
  },
  {
    icon: BrainCircuit,
    title: "Practical thinking",
    body: "We challenge assumptions, reduce noise, and choose the path that best serves the outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Quality with purpose",
    body: "Craft matters because trust, usability, performance, and maintainability matter to the business.",
  },
  {
    icon: Workflow,
    title: "Built for reality",
    body: "Products are designed around real workflows, real constraints, and the people using them every day.",
  },
  {
    icon: Gauge,
    title: "Momentum without chaos",
    body: "Fast feedback and disciplined delivery keep the work moving without trading away quality.",
  },
  {
    icon: Globe2,
    title: "Long-term partnership",
    body: "We build context, share ownership, and stay useful beyond the first release.",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity over theatre.",
    body: "Direct communication, visible decisions, and useful progress beat impressive-sounding process every time.",
  },
  {
    number: "02",
    title: "Ownership over hand-offs.",
    body: "We stay responsible for the outcome across disciplines, instead of protecting narrow scopes or passing problems along.",
  },
  {
    number: "03",
    title: "Momentum with quality.",
    body: "We move deliberately, test early, and keep standards high where they create trust and lasting value.",
  },
];

const About = () => {
  const pageRef = useRef(null);
  const storySectionRef = useRef(null);
  const storyPinRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalPinRef = useRef(null);
  const horizontalViewportRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  useLayoutEffect(() => {
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
          .from(".about-hero-kicker", {
            y: 18,
            autoAlpha: 0,
            duration: 0.55,
          })
          .from(
            ".about-hero-title-line > span",
            {
              yPercent: 110,
              rotate: 1.5,
              duration: 0.9,
              stagger: 0.09,
            },
            "-=0.28",
          )
          .from(
            ".about-hero-lead, .about-hero-actions, .about-hero-facts",
            {
              y: 26,
              autoAlpha: 0,
              duration: 0.72,
              stagger: 0.1,
            },
            "-=0.55",
          )
          .from(
            ".about-system-map",
            {
              scale: 0.9,
              rotate: 4,
              autoAlpha: 0,
              duration: 1.1,
            },
            "-=0.9",
          );

        gsap.utils.toArray(".about-reveal").forEach((element) => {
          gsap.from(element, {
            y: 44,
            autoAlpha: 0,
            filter: "blur(8px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, pageRef);

    media.add(
      "(min-width: 961px) and (prefers-reduced-motion: no-preference)",
      () => {
        const copyPanels = gsap.utils.toArray(
          ".about-story-copy",
          storyPinRef.current,
        );
        const visualCards = gsap.utils.toArray(
          ".about-story-visual-card",
          storyPinRef.current,
        );
        const progressFill = storyPinRef.current?.querySelector(
          ".about-story-progress-fill",
        );

        if (!copyPanels.length || !visualCards.length) return undefined;

        const visualState = (cardIndex, activeIndex) => {
          const distance = cardIndex - activeIndex;
          const depth = Math.min(Math.abs(distance), 3);

          return {
            yPercent: distance * 76,
            x: distance > 0 ? depth * 20 : depth * -12,
            scale: 1 - depth * 0.075,
            autoAlpha: distance === 0 ? 1 : Math.max(0.14, 0.48 - depth * 0.1),
            zIndex: storySteps.length - depth,
          };
        };

        gsap.set(copyPanels, { autoAlpha: 0, y: 34 });
        gsap.set(copyPanels[0], { autoAlpha: 1, y: 0 });
        visualCards.forEach((card, index) => {
          gsap.set(card, visualState(index, 0));
        });
        if (progressFill) {
          gsap.set(progressFill, {
            scaleY: 1 / storySteps.length,
            transformOrigin: "top center",
          });
        }

        const storyTimeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: storySectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * (storySteps.length - 0.35)}`,
            pin: storyPinRef.current,
            pinSpacing: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        storySteps.slice(1).forEach((_, stepIndex) => {
          const activeIndex = stepIndex + 1;
          const label = `story-step-${activeIndex}`;

          storyTimeline.addLabel(label);
          storyTimeline.to(
            copyPanels[activeIndex - 1],
            {
              y: -30,
              autoAlpha: 0,
              duration: 0.32,
            },
            label,
          );
          storyTimeline.fromTo(
            copyPanels[activeIndex],
            { y: 34, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.42 },
            `${label}+=0.11`,
          );

          visualCards.forEach((card, cardIndex) => {
            storyTimeline.to(
              card,
              {
                ...visualState(cardIndex, activeIndex),
                duration: 0.78,
              },
              label,
            );
          });

          if (progressFill) {
            storyTimeline.to(
              progressFill,
              {
                scaleY: (activeIndex + 1) / storySteps.length,
                duration: 0.78,
              },
              label,
            );
          }

          storyTimeline.to({}, { duration: 0.2 });
        });

        return () => storyTimeline.kill();
      },
    );

    media.add(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = horizontalTrackRef.current;
        const viewport = horizontalViewportRef.current;
        const pin = horizontalPinRef.current;
        const section = horizontalSectionRef.current;

        if (!track || !viewport || !pin || !section) return undefined;

        const cards = gsap.utils.toArray(
          ".about-partnership-card",
          horizontalTrackRef.current,
        );
        const getDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        const horizontalTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(getDistance() * 1.25, window.innerHeight)}`,
            pin,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        horizontalTimeline.to(
          track,
          {
            x: () => -getDistance(),
            ease: "none",
          },
          0,
        );
        horizontalTimeline.to(
          cards,
          {
            y: (index) => (index % 2 === 0 ? -16 : 16),
            rotate: (index) => (index % 2 === 0 ? -0.5 : 0.5),
            ease: "none",
          },
          0,
        );

        return () => horizontalTimeline.kill();
      },
    );

    const refresh = () => ScrollTrigger.refresh();
    const pendingImages = Array.from(
      pageRef.current?.querySelectorAll("img") ?? [],
    ).filter((image) => !image.complete);

    pendingImages.forEach((image) => {
      image.addEventListener("load", refresh, { once: true });
      image.addEventListener("error", refresh, { once: true });
    });

    const refreshFrame = window.requestAnimationFrame(refresh);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      pendingImages.forEach((image) => {
        image.removeEventListener("load", refresh);
        image.removeEventListener("error", refresh);
      });
      context.revert();
      media.revert();
    };
  }, []);

  return (
    <main className="about-premium" ref={pageRef}>
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />
        <div className="about-hero-orb about-hero-orb--one" aria-hidden="true" />
        <div className="about-hero-orb about-hero-orb--two" aria-hidden="true" />

        <div className="about-container about-hero-layout">
          <div className="about-hero-copy">
            <p className="about-hero-kicker">
              <Sparkles aria-hidden="true" /> About QueLogics
            </p>
            <h1>
              <span className="about-hero-title-line">
                <span>We build digital</span>
              </span>
              <span className="about-hero-title-line">
                <span>systems that move</span>
              </span>
              <span className="about-hero-title-line about-hero-title-line--accent">
                <span>businesses forward.</span>
              </span>
            </h1>
            <p className="about-hero-lead">
              QueLogics brings product thinking, design, engineering, and growth
              together to turn complex ideas and operational friction into clear,
              useful digital experiences.
            </p>
            <div className="about-hero-actions">
              <Link className="about-button about-button--primary" to="/contact">
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link className="about-button about-button--ghost" to="/case-studies">
                See our work <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <dl className="about-hero-facts" aria-label="QueLogics at a glance">
              <div>
                <dt>Since</dt>
                <dd>2019</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>Senior-led</dd>
              </div>
              <div>
                <dt>Collaboration</dt>
                <dd>Global</dd>
              </div>
            </dl>
          </div>

          <div className="about-system-map" aria-hidden="true">
            <div className="about-system-ring about-system-ring--outer" />
            <div className="about-system-ring about-system-ring--middle" />
            <div className="about-system-ring about-system-ring--inner" />
            <div className="about-system-core">
              <span>Q</span>
              <small>One connected system</small>
            </div>
            <span className="about-system-node about-system-node--strategy">
              <Compass /> Strategy
            </span>
            <span className="about-system-node about-system-node--design">
              <Layers3 /> Design
            </span>
            <span className="about-system-node about-system-node--build">
              <Code2 /> Engineering
            </span>
            <span className="about-system-node about-system-node--growth">
              <Gauge /> Growth
            </span>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container about-intro-layout">
          <div className="about-reveal">
            <p className="about-kicker">Built around progress</p>
            <h2>A practical digital partner for work that cannot afford to stall.</h2>
          </div>
          <div className="about-intro-copy about-reveal">
            <p>
              We work with teams navigating change: a product that needs to become
              real, a workflow that has outgrown manual tools, or an experience that
              is holding growth back.
            </p>
            <p>
              Our role is to create clarity, connect the right disciplines, and keep
              the work moving from first question to a dependable product in the
              hands of real users.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story-scroll" ref={storySectionRef}>
        <div className="about-story-pin" ref={storyPinRef}>
          <div className="about-container">
            <header className="about-story-heading">
              <p className="about-kicker">How the work moves</p>
              <h2>From first question to lasting product.</h2>
            </header>

            <div className="about-story-layout">
              <div className="about-story-copy-stage">
                <div className="about-story-progress" aria-hidden="true">
                  <span className="about-story-progress-fill" />
                </div>
                {storySteps.map((step) => (
                  <article className="about-story-copy" key={step.number}>
                    <span className="about-story-step-number">{step.number}</span>
                    <p className="about-story-step-kicker">{step.kicker}</p>
                    <h3>{step.title}</h3>
                    <p className="about-story-step-body">{step.body}</p>
                    <p className="about-story-step-detail">{step.detail}</p>
                  </article>
                ))}
              </div>

              <div className="about-story-visual-stage" aria-hidden="true">
                <div className="about-story-visual-guide" />
                {storySteps.map((step) => (
                  <article className="about-story-visual-card" key={step.number}>
                    <div className="about-story-visual-meta">
                      <span>{step.number}</span>
                      <p>{step.kicker}</p>
                    </div>
                    <div className="about-story-visual-image">
                      <img src={step.image} alt="" loading="lazy" decoding="async" />
                    </div>
                    <footer>
                      <strong>{step.title}</strong>
                      <CheckCircle2 />
                    </footer>
                  </article>
                ))}
              </div>
            </div>

            <div className="about-story-mobile">
              {storySteps.map((step) => (
                <article className="about-story-mobile-step about-reveal" key={step.number}>
                  <div className="about-story-mobile-copy">
                    <span className="about-story-step-number">{step.number}</span>
                    <p className="about-story-step-kicker">{step.kicker}</p>
                    <h3>{step.title}</h3>
                    <p className="about-story-step-body">{step.body}</p>
                    <p className="about-story-step-detail">{step.detail}</p>
                  </div>
                  <div className="about-story-mobile-image">
                    <img src={step.image} alt={step.imageAlt} loading="lazy" decoding="async" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-container">
          <header className="about-principles-heading about-reveal">
            <p className="about-kicker">How we show up</p>
            <h2>Good work feels clear while it is happening.</h2>
          </header>
          <div className="about-principles-list">
            {principles.map((principle) => (
              <article className="about-principle about-reveal" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-horizontal" ref={horizontalSectionRef}>
        <div className="about-horizontal-pin" ref={horizontalPinRef}>
          <div className="about-container about-horizontal-heading">
            <p className="about-kicker">The partnership</p>
            <h2>What working together should feel like.</h2>
            <p>
              Scroll through the qualities we protect across every engagement.
            </p>
          </div>
          <div className="about-horizontal-viewport" ref={horizontalViewportRef}>
            <div className="about-horizontal-track" ref={horizontalTrackRef}>
              {partnershipCards.map(({ icon: Icon, title, body }, index) => (
                <article className="about-partnership-card" key={title}>
                  <header>
                    <span>0{index + 1}</span>
                    <Icon aria-hidden="true" />
                  </header>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <span className="about-partnership-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
          <p className="about-horizontal-hint">
            Scroll to move <ArrowRight aria-hidden="true" />
          </p>
        </div>
      </section>

      <section className="about-proof">
        <div className="about-container">
          <header className="about-proof-heading about-reveal">
            <p className="about-kicker">A focused model</p>
            <h2>Enough structure to be dependable. Enough flexibility to stay useful.</h2>
          </header>
          <dl className="about-proof-list">
            <div className="about-reveal">
              <dt>2019</dt>
              <dd>Building practical digital products since</dd>
            </div>
            <div className="about-reveal">
              <dt>Senior-led</dt>
              <dd>Strategy and delivery stay closely connected</dd>
            </div>
            <div className="about-reveal">
              <dt>End-to-end</dt>
              <dd>From product direction to launch and evolution</dd>
            </div>
            <div className="about-reveal">
              <dt>Global</dt>
              <dd>Remote collaboration across teams and time zones</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-grid" aria-hidden="true" />
        <div className="about-container about-cta-layout">
          <div className="about-reveal">
            <p className="about-kicker">Let&apos;s make progress</p>
            <h2>Bring us the challenge that keeps getting pushed to tomorrow.</h2>
          </div>
          <div className="about-cta-action about-reveal">
            <p>
              A rough idea is enough. We will help you find the useful next step.
            </p>
            <Link className="about-button about-button--primary" to="/contact">
              Talk to QueLogics <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;