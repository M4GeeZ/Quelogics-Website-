import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
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
  { title: "PizzaMama", img: PizzaMamaPreview },
  { title: "Jabulani", img: JabulaniPreview },
  { title: "Mindora", img: MindoraPreview },
  { title: "TMS", img: TMSPreview },
  { title: "TrueTrucker", img: TrueTruckerPreview },
  { title: "POS", img: POSPreview },
  { title: "Resturent System", img: RestaurantPreview },
  { title: "L M S", img: LMSAPPPreview },
  { title: "Garage Management System", img: GMSPreview },
];

const ProjectsShowcase = () => {
  const sectionRef = useRef(null);
  const mobileScrollerRef = useRef(null);
  const mobileProjectIndexRef = useRef(0);
  const mobileResetTimerRef = useRef(null);

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

      const orbitCards = gsap.utils.toArray(".orbit-card");
      const finalCards = gsap.utils.toArray(".primary-set .moving-card");
      const duplicateCards = gsap.utils.toArray(".clone-set .moving-card");

      media.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { desktop, mobile, reduceMotion } = conditions;

          if (mobile) {
            gsap.set(".orbit-wrap", { display: "none" });
            gsap.set([...finalCards, ...duplicateCards], {
              autoAlpha: 1,
              y: 0,
              scale: 1,
            });

            if (reduceMotion) {
              return undefined;
            }

            const mobileReveal = gsap.from(
              [...finalCards, ...duplicateCards],
              {
                y: 42,
                opacity: 0,
                duration: 0.65,
                stagger: 0.045,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".moving-wrapper",
                  start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              },
            );

            return () => mobileReveal.kill();
          }

          if (!desktop || reduceMotion) {
            gsap.set(".orbit-wrap", { display: "none" });
            gsap.set([...finalCards, ...duplicateCards], {
              autoAlpha: 1,
              y: 0,
              scale: 1,
            });
            return undefined;
          }

          gsap.set(".orbit-wrap", { display: "block", autoAlpha: 1, scale: 1 });
          gsap.set([...finalCards, ...duplicateCards], {
            autoAlpha: 0,
            y: 120,
            scale: 0.85,
          });

          const orbitSpin = gsap.to(".orbit-ring", {
            rotate: 360,
            duration: 18,
            repeat: -1,
            ease: "none",
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".moving-wrapper",
              start: "top top",
              end: "+=1800",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          movingCards.forEach((_, index) => {
            timeline.to(
              orbitCards[index],
              {
                autoAlpha: 0,
                scale: 0.2,
                duration: 0.4,
                ease: "power2.inOut",
              },
              index * 0.16,
            );

            timeline.to(
              [finalCards[index], duplicateCards[index]],
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                ease: "power3.out",
              },
              index * 0.16 + 0.08,
            );
          });

          timeline.to(".orbit-wrap", {
            autoAlpha: 0,
            scale: 0.65,
            duration: 0.5,
            ease: "power2.out",
          });

          return () => {
            orbitSpin.kill();
            timeline.kill();
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

      <div className="moving-wrapper">
        <div className="orbit-wrap">
          <div className="orbit-ring">
            {movingCards.map((card, index) => (
              <div
                className="orbit-card"
                key={card.title}
                style={{
                  "--i": index,
                  "--total": movingCards.length,
                }}
              >
                <img src={card.img} alt={card.title} loading="lazy" decoding="async" />
                <span>{card.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="moving-row">
          {["primary-set", "clone-set"].map((setName) => (
            <div
              className={`moving-set ${setName}`}
              aria-hidden={setName === "clone-set" ? "true" : undefined}
              key={setName}
            >
              {movingCards.map((card) => (
                <article className="premium-card moving-card" key={card.title}>
                  <div className="card-inner">
                    <img
                      className="base-img"
                      src={card.img}
                      alt={setName === "primary-set" ? card.title : ""}
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
