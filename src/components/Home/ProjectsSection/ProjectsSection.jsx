import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HoverCarShare from "../../../assets/project-images/HoverCarShare.png";
import EagleChat from "../../../assets/project-images/EagleChat.png";
import GMSPreview from "../../../assets/project-images/optimized/GMS.jpg";
import LMSAPPPreview from "../../../assets/project-images/optimized/LMSAPP.jpg";
import PizzaMamaPreview from "../../../assets/project-images/optimized/PizzaMama.jpg";
import MindoraPreview from "../../../assets/project-images/optimized/Mindora.jpg";
import JabulaniPreview from "../../../assets/project-images/optimized/Jabulani.jpg";
import TMSPreview from "../../../assets/project-images/optimized/TMS.jpg";
import TrueTruckerPreview from "../../../assets/project-images/optimized/ttb.jpg";
import POSPreview from "../../../assets/project-images/optimized/POS.jpg";
import RestaurantPreview from "../../../assets/project-images/optimized/hmb.jpg";
import "./ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

const topCards = [
  {
    title: "Carshare",
    desc: "Smart admin dashboard to manage drivers, routes, bookings, payments, and live ride analytics—all in one place.",
    img: HoverCarShare,
  },
  {
    title: "Gaming Arcade - Play & Earn",
    desc: "A launch-ready gaming ecosystem connecting mini-games, live chat, rewards, and a secure digital wallet.",
    img: EagleChat,
  },
  {
    title: "Carshare",
    desc: "Smart admin dashboard to manage drivers, routes, bookings, payments, and live ride analytics—all in one place.",
    img: HoverCarShare,
  },
  {
    title: "Gaming Arcade - Play & Earn",
    desc: "A launch-ready gaming ecosystem connecting mini-games, live chat, rewards, and a secure digital wallet.",
    img: EagleChat,
  },
  {
    title: "Carshare",
    desc: "Smart admin dashboard to manage drivers, routes, bookings, payments, and live ride analytics—all in one place.",
    img: HoverCarShare,
  },
  {
    title: "Gaming Arcade - Play & Earn",
    desc: "A launch-ready gaming ecosystem connecting mini-games, live chat, rewards, and a secure digital wallet.",
    img: EagleChat,
  },
];

const movingCards = [
  { title: "PizzaMama", type: "Commerce platform", desc: "A responsive ordering platform that brings menu discovery, quick checkout, repeat orders, and connected restaurant operations into one smooth customer journey.", img: PizzaMamaPreview },
  { title: "Jabulani", type: "Digital experience", desc: "A confident digital storefront built around clear product discovery, dependable ordering, frictionless delivery information, and a distinctive experience across devices.", img: JabulaniPreview },
  { title: "Mindora", type: "Mobile product", desc: "A calm, accessible mobile wellness experience that helps people manage everyday health routines with thoughtful guidance, reminders, and easy-to-use tools.", img: MindoraPreview },
  { title: "Transport Management System", type: "Operations platform", desc: "A connected logistics command center for planning, driver and fleet visibility, dispatch coordination, delivery updates, and smarter daily operational decisions.", img: TMSPreview },
  { title: "TrueTrucker", type: "Industry marketplace", desc: "A specialist transport marketplace connecting drivers and operators with relevant opportunities, clear communication, and the essential tools for better coordination.", img: TrueTruckerPreview },
  { title: "Point of Sale", type: "Retail system", desc: "A dependable retail platform that makes checkout simpler while keeping inventory, transactions, reporting, and store operations accurate and easy to oversee.", img: POSPreview },
  { title: "Restaurant System", type: "Hospitality operations", desc: "An integrated restaurant management solution that links ordering, kitchen workflows, stock, staff, and branch reporting so busy teams can work smoothly.", img: RestaurantPreview },
  { title: "Learning Management System", type: "Education platform", desc: "A practical digital learning hub that brings lessons, assignments, progress tracking, course administration, and student engagement into a clear experience.", img: LMSAPPPreview },
  { title: "Garage Management System", type: "Business operations", desc: "A purpose-built workshop platform that simplifies appointments, service jobs, technician workflows, inventory, invoices, and customer updates in one place.", img: GMSPreview },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const mobileScrollerRef = useRef(null);
  const mobileProjectIndexRef = useRef(0);
  const mobileResetTimerRef = useRef(null);
  const activeProjectRef = useRef(0);
  const counterNumberRef = useRef(null);
  const selectedProject = movingCards[activeProject];

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

          const syncSelectedProject = (self) => {
            // One active index powers the front card, title, progress and badge.
            // Apply synchronously instead of a deferred animation frame, which
            // could show a stale card beside a newer counter while scrolling.
            const nextIndex = Math.min(
              movingCards.length - 1,
              Math.max(0, Math.floor(self.progress * movingCards.length)),
            );
            // Keep the visible counter synchronised with GSAP's front card.
            // A direct ref update prevents a stale badge during fast pinned scrolls.
            if (counterNumberRef.current) {
              counterNumberRef.current.textContent = String(nextIndex + 1).padStart(2, "0");
            }
            if (nextIndex !== activeProjectRef.current) {
              activeProjectRef.current = nextIndex;
              setActiveProject(nextIndex);
            }
          };

          const storyTrigger = ScrollTrigger.create({
            trigger: ".project-story-stage",
            start: "top top",
            end: `+=${movingCards.length * (mobile ? 380 : 620)}`,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: syncSelectedProject,
            onRefresh: syncSelectedProject,
          });
          syncSelectedProject(storyTrigger);
          return () => storyTrigger.kill();
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
        {topCards.map((card, index) => (
          <article
            className="premium-card top-card"
            key={`${card.title}-${index}`}
            data-project-reveal
          >
            <div className="card-inner featured-card-media">
              <img className="featured-card-backdrop" src={card.img} alt="" aria-hidden="true" decoding="async" />
              <img
                className="base-img"
                src={card.img}
                alt={`${card.title} project preview`}
                loading="eager"
                decoding="async"
              />
              <span className="featured-card-id" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="featured-card-shade" aria-hidden="true" />
              <div className="featured-card-info">
                <span className="featured-card-kicker">Featured project</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a
                  className="featured-card-link"
                  href="/case-studies"
                  aria-label={`Explore ${card.title} case study`}
                >
                  View project <ArrowRight aria-hidden="true" />
                </a>
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
                  data-project-number={index + 1}
                  key={card.title}
                >
                  <img src={card.img} alt={card.title} loading="lazy" decoding="async" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </article>
              );
            })}
          </div>

          <div className="project-story-content" aria-live="polite">
            <div className="project-story-counter-row">
              <span className="project-story-count" key={`count-${activeProject}`} aria-label={`Project ${activeProject + 1} of ${movingCards.length}`}>
                <span ref={counterNumberRef} className="project-story-active-number">{String(activeProject + 1).padStart(2, "0")}</span>
                <span className="project-story-count-separator">/</span>
                <span className="project-story-count-total">{String(movingCards.length).padStart(2, "0")}</span>
              </span>
              <span className="project-story-count-context">Selected case study</span>
            </div>
            <div className="project-story-progress" role="progressbar" aria-label="Project in sequence" aria-valuemin={1} aria-valuemax={movingCards.length} aria-valuenow={activeProject + 1}>
              <span style={{ width: `${((activeProject + 1) / movingCards.length) * 100}%` }} />
            </div>
            <p className="project-story-type">{selectedProject.type}</p>
            <h2 key={`title-${activeProject}`}>{selectedProject.title}</h2>
            <p className="project-story-description" key={`desc-${activeProject}`}>{selectedProject.desc}</p>
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

export default ProjectsSection;
