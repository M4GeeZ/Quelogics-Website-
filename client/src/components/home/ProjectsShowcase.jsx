import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import carshare from "../../assets/projects-showcase/carshare.png";
import HoverCarShare from "../../assets/projects-showcase/HoverCarShare.png";
import EagleChat from "../../assets/projects-showcase/EagleChat.png";
import Eaglechathover from "../../assets/projects-showcase/Eaglechathover.png";
import GMSPreview from "../../assets/projects-showcase/optimized/GMS.jpg";
import LMSAPPPreview from "../../assets/projects-showcase/optimized/LMSAPP.jpg";
import PizzaMamaPreview from "../../assets/projects-showcase/optimized/PizzaMama.jpg";
import MindoraPreview from "../../assets/projects-showcase/optimized/Mindora.jpg";
import JabulaniPreview from "../../assets/projects-showcase/optimized/Jabulani.jpg";
import TMSPreview from "../../assets/projects-showcase/optimized/TMS.jpg";
import TrueTruckerPreview from "../../assets/projects-showcase/optimized/ttb.jpg";
import POSPreview from "../../assets/projects-showcase/optimized/POS.jpg";
import RestaurantPreview from "../../assets/projects-showcase/optimized/hmb.jpg";
import "./projectsShowcase.css";

gsap.registerPlugin(ScrollTrigger);

const topCards = [
  {
    title: "Carshare",
    desc: "Smart admin dashboard to manage drivers, routes, bookings, payments, and live ride analytics—all in one place.",
    img: HoverCarShare,
    hoverImg: carshare,
  },
  {
    title: "Gaming Arcade - Play & Earn",
    desc: "A launch-ready gaming ecosystem connecting mini-games, live chat, rewards, and a secure digital wallet.",
    img: Eaglechathover,
    hoverImg: EagleChat,
  },
];

const movingCards = [
  { title: "PizzaMama", type: "Commerce platform", desc: "A fast ordering experience supported by connected store operations, product management and customer journeys.", img: PizzaMamaPreview },
  { title: "Jabulani", type: "Digital experience", desc: "A focused product experience built to make complex customer actions feel direct, simple and dependable.", img: JabulaniPreview },
  { title: "Mindora", type: "Mobile product", desc: "A thoughtfully structured mobile platform connecting users with the tools and information they need every day.", img: MindoraPreview },
  { title: "Transport Management System", type: "Operations platform", desc: "One operational view for planning, dispatch, fleet activity and the decisions that keep logistics moving.", img: TMSPreview },
  { title: "TrueTrucker", type: "Industry marketplace", desc: "A purpose-built digital product that connects transport professionals, opportunities and essential workflows.", img: TrueTruckerPreview },
  { title: "Point of Sale", type: "Retail system", desc: "A reliable sales and inventory system designed to keep everyday retail operations quick and accurate.", img: POSPreview },
  { title: "Restaurant System", type: "Hospitality operations", desc: "Connected ordering, kitchen and management workflows that help hospitality teams deliver consistently.", img: RestaurantPreview },
  { title: "Learning Management System", type: "Education platform", desc: "A clear learning environment for courses, progress, administration and meaningful learner engagement.", img: LMSAPPPreview },
  { title: "Garage Management System", type: "Business operations", desc: "An end-to-end workspace for bookings, jobs, customers, teams and the daily running of a modern garage.", img: GMSPreview },
];

const ProjectsShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const mobileScrollerRef = useRef(null);
  const mobileProjectIndexRef = useRef(0);
  const mobileResetTimerRef = useRef(null);
  const storyFrameRef = useRef(null);
  const activeProjectRef = useRef(0);

  const scrollMobileProjects = useCallback((direction) => {
    const scroller = mobileScrollerRef.current;
    const firstCard = scroller?.querySelector(".mobile-project-card");
    const firstSet = scroller?.querySelector(".mobile-project-set");

    if (!scroller || !firstCard || !firstSet) {
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(firstSet).gap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const total = movingCards.length;
    const currentIndex = mobileProjectIndexRef.current;

    window.clearTimeout(mobileResetTimerRef.current);

    if (direction > 0 && currentIndex === total - 1) {
      scroller.scrollTo({ left: total * step, behavior: "smooth" });
      mobileResetTimerRef.current = window.setTimeout(() => {
        scroller.scrollTo({ left: 0, behavior: "auto" });
        mobileProjectIndexRef.current = 0;
      }, 680);
      return;
    }

    if (direction < 0 && currentIndex === 0) {
      scroller.scrollTo({ left: total * step, behavior: "auto" });
      window.requestAnimationFrame(() => {
        scroller.scrollTo({ left: (total - 1) * step, behavior: "smooth" });
      });
      mobileProjectIndexRef.current = total - 1;
      return;
    }

    const nextIndex = currentIndex + direction;
    mobileProjectIndexRef.current = nextIndex;
    scroller.scrollTo({ left: nextIndex * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const scroller = mobileScrollerRef.current;
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!scroller || !mobileQuery.matches) {
      return undefined;
    }

    const syncIndex = () => {
      const firstCard = scroller.querySelector(".mobile-project-card");
      const firstSet = scroller.querySelector(".mobile-project-set");

      if (!firstCard || !firstSet) {
        return;
      }

      const gap = Number.parseFloat(window.getComputedStyle(firstSet).gap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      mobileProjectIndexRef.current = Math.min(
        movingCards.length - 1,
        Math.max(0, Math.round(scroller.scrollLeft / step)),
      );
    };

    scroller.addEventListener("scroll", syncIndex, { passive: true });

    const autoAdvance = reducedMotionQuery.matches
      ? null
      : window.setInterval(() => scrollMobileProjects(1), 1800);

    return () => {
      scroller.removeEventListener("scroll", syncIndex);
      window.clearInterval(autoAdvance);
      window.clearTimeout(mobileResetTimerRef.current);
    };
  }, [scrollMobileProjects]);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      gsap.fromTo(
        ".n2x-title",
        { y: 80, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".n2x-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.utils.toArray("[data-project-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 80, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      media.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { desktop, mobile, reduceMotion } = conditions;

          if ((!desktop && !mobile) || reduceMotion) {
            return undefined;
          }

          const storyTrigger = ScrollTrigger.create({
            trigger: ".project-story-stage",
            start: "top top",
            end: `+=${movingCards.length * (mobile ? 380 : 620)}`,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                movingCards.length - 1,
                Math.round(self.progress * (movingCards.length - 1)),
              );
              if (nextIndex === activeProjectRef.current) return;
              activeProjectRef.current = nextIndex;
              window.cancelAnimationFrame(storyFrameRef.current);
              storyFrameRef.current = window.requestAnimationFrame(() => {
                setActiveProject(nextIndex);
              });
            },
          });
          return () => {
            window.cancelAnimationFrame(storyFrameRef.current);
            storyTrigger.kill();
          };
        },
      );

    }, sectionRef);

    return () => {
      context.revert();
      media.revert();
    };
  }, []);

  return (
    <section className="n2x-section" ref={sectionRef}>
      <div className="n2x-title">
        <span>Proof, not promises.</span>
        <p>
          Someone else&apos;s app is live while yours is still almost ready.
          These are connected products Quelogics shipped to turn operational
          gaps into measurable progress.
        </p>
      </div>

      <div className="top-cards">
        {topCards.map((card) => (
          <article
            className="premium-card top-card"
            key={card.title}
            data-project-reveal
          >
            <div className="card-inner">
                <img
                  className="base-img"
                  src={card.img}
                  alt={card.title}
                  loading="eager"
                  decoding="async"
                />

              <div className="hover-image-layer" aria-hidden="true">
                <img src={card.hoverImg} alt="" loading="lazy" decoding="async" />
              </div>

              <div className="card-overlay"></div>

              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-story-stage">
        <div className="project-story-inner">
          <div className="project-card-rail" aria-label="Selected projects">
            {movingCards.map((card, index) => {
              const offset = index - activeProject;
              return (
                <article
                  className={`story-card${offset === 0 ? " is-active" : offset < 0 ? " is-before" : " is-after"}`}
                  style={{ "--card-distance": Math.abs(offset) }}
                  aria-hidden={Math.abs(offset) > 2}
                  key={card.title}
                >
                  <img src={card.img} alt={card.title} loading="lazy" decoding="async" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </article>
              );
            })}
          </div>

          <div className="project-story-content" aria-live="polite">
            <span className="project-story-count">{String(activeProject + 1).padStart(2, "0")} / {String(movingCards.length).padStart(2, "0")}</span>
            <p className="project-story-type">{movingCards[activeProject].type}</p>
            <h2 key={`title-${activeProject}`}>{movingCards[activeProject].title}</h2>
            <p className="project-story-description" key={`desc-${activeProject}`}>{movingCards[activeProject].desc}</p>
            <a href="/case-studies">View case study <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </div>

      <div className="mobile-project-carousel">
        <div className="mobile-project-viewport" ref={mobileScrollerRef}>
          <div className="mobile-project-track">
            {[0, 1].map((copyIndex) => (
              <div
                className="mobile-project-set"
                aria-hidden={copyIndex === 1 ? "true" : undefined}
                key={copyIndex}
              >
                {movingCards.map((card) => (
                  <article
                    className="premium-card mobile-project-card"
                    key={`${copyIndex}-${card.title}`}
                  >
                    <div className="card-inner">
                      <img
                        className="base-img"
                        src={card.img}
                        alt={copyIndex === 0 ? card.title : ""}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-overlay"></div>
                      <div className="card-content small">
                        <h2>{card.title}</h2>
                        <p>
                          A connected digital system built to remove bottlenecks and drive growth.
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="moving-carousel-controls" aria-label="Project carousel controls">
          <button
            type="button"
            aria-label="View previous project"
            onClick={() => scrollMobileProjects(-1)}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="View next project"
            onClick={() => scrollMobileProjects(1)}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
