import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import carshare from "../../../assets/project-images/optimized/carshare.jpg";
import EagleChat from "../../../assets/project-images/optimized/EagleChat.jpg";
import GMS from "../../../assets/project-images/optimized/GMS.jpg";
import hmb from "../../../assets/project-images/optimized/hmb.jpg";
import Jabulani from "../../../assets/project-images/optimized/Jabulani.jpg";
import Mindora from "../../../assets/project-images/optimized/Mindora.jpg";
import PizzaMama from "../../../assets/project-images/optimized/PizzaMama.jpg";
import TMS from "../../../assets/project-images/optimized/TMS.jpg";
import "./ProjectStackSection.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "001",
    title: "Carshare Platform",
    stack: "SaaS / Fleet Management / Analytics",
    image: carshare,
    description:
      "A connected operations platform for bookings, drivers, payments, live rides, and fleet performance.",
    accent: "#22ce68",
  },
  {
    number: "002",
    title: "EagleChat Arcade",
    stack: "Gaming / Realtime Chat / Digital Wallet",
    image: EagleChat,
    description:
      "A social play-and-earn experience combining mini-games, live community features, rewards, and wallets.",
    accent: "#7ca8ff",
  },
  {
    number: "003",
    title: "PizzaMama Commerce",
    stack: "eCommerce / Ordering / Customer Experience",
    image: PizzaMama,
    description:
      "A conversion-focused restaurant experience that makes discovery, ordering, and repeat purchases effortless.",
    accent: "#ff6d8f",
  },
  {
    number: "004",
    title: "Mindora Health",
    stack: "HealthTech / Product Design / Automation",
    image: Mindora,
    description:
      "A calm digital health product shaped around accessible care journeys, clear guidance, and daily engagement.",
    accent: "#a685ff",
  },
  {
    number: "005",
    title: "Transport Management",
    stack: "Logistics / Dispatch / Live Operations",
    image: TMS,
    description:
      "One operational view for dispatch, fleet status, delivery progress, exceptions, and performance reporting.",
    accent: "#22ce68",
  },
  {
    number: "006",
    title: "Restaurant System",
    stack: "POS / Inventory / Multi-branch Operations",
    image: hmb,
    description:
      "A reliable restaurant operating system connecting orders, stock, staff, reporting, and branch performance.",
    accent: "#ffb55f",
  },
  {
    number: "007",
    title: "Jabulani Experience",
    stack: "Web Platform / UX / Performance",
    image: Jabulani,
    description:
      "A bold, responsive digital experience combining a distinctive visual system with fast, intuitive journeys.",
    accent: "#48d9d2",
  },
  {
    number: "008",
    title: "Garage Management",
    stack: "Workflow / CRM / Business Intelligence",
    image: GMS,
    description:
      "A complete workshop workflow for customers, vehicles, jobs, parts, invoicing, and business visibility.",
    accent: "#7ca8ff",
  },
];

const ProjectCard = ({ project }) => (
  <article
    className="project-stack-card"
    style={{ "--project-accent": project.accent }}
  >
    <div className="project-stack-card-glow" aria-hidden="true"></div>

    <header className="project-stack-card-header">
      <span className="project-stack-card-number">{project.number}</span>
      <div className="project-stack-card-title">
        <h3>{project.title}</h3>
        <p>{project.stack}</p>
      </div>
      <a href="/case-studies" aria-label={`View ${project.title} project`}>
        View project
        <ArrowUpRight aria-hidden="true" />
      </a>
    </header>

    <div className="project-stack-card-media">
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
        decoding="async"
      />
      <span aria-hidden="true">Quelogics / {project.number}</span>
    </div>

    <p className="project-stack-card-description">{project.description}</p>
  </article>
);

const ProjectStackSection = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 901px)",
        mobile: "(max-width: 900px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, mobile, reduceMotion } = context.conditions;
        const pairs = gsap.utils.toArray(
          mobile
            ? ".project-stack-stage-inner--mobile .project-stack-pair"
            : ".project-stack-stage-inner--desktop .project-stack-pair",
          stageRef.current,
        );

        if (mobile) {
          if (reduceMotion) {
            return undefined;
          }

          const stickyPanel = stageRef.current?.querySelector(
            ".project-stack-sticky",
          );

          const getEntryOffset = (pair) => {
            const viewportHeight =
              stickyPanel?.getBoundingClientRect().height || window.innerHeight;
            const pairHeight = pair.getBoundingClientRect().height;

            // Keep each incoming card fully below the sticky viewport until its
            // own scroll step begins, so only the active stack is visible.
            return Math.ceil((viewportHeight + pairHeight) / 2 + 28);
          };

          // Put every mobile card below the sticky viewport before ScrollTrigger
          // reads the current scroll position. This prevents later cards from
          // flashing or becoming the starting card during refresh/layout shifts.
          gsap.set(pairs, {
            zIndex: (index) => index + 1,
            y: (index, pair) => getEntryOffset(pair),
            yPercent: 0,
            scale: 0.94,
            opacity: 1,
            transformOrigin: "center top",
            force3D: true,
          });

          const mobileTimeline = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: stageRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.42,
              fastScrollEnd: false,
              invalidateOnRefresh: true,
              refreshPriority: -10,
            },
          });

          pairs.forEach((pair, index) => {
            const previousPair = pairs[index - 1];
            const stepLabel = `mobile-card-${index}`;

            mobileTimeline.addLabel(stepLabel);

            if (previousPair) {
              mobileTimeline.to(
                previousPair,
                {
                  yPercent: -4,
                  scale: 0.955,
                  opacity: 0.46,
                  duration: 0.82,
                },
                stepLabel,
              );
            }

            mobileTimeline.fromTo(
              pair,
              {
                y: () => getEntryOffset(pair),
                scale: 0.94,
                opacity: 1,
              },
              {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.82,
                immediateRender: false,
              },
              stepLabel,
            );

            // Pause only between cards. Omitting a pause after the final card
            // makes the sticky section release as soon as card 008 settles.
            if (index < pairs.length - 1) {
              mobileTimeline.to({}, { duration: 0.24 });
            }
          });

          let refreshFrame = 0;
          let isActive = true;
          const queueRefresh = () => {
            if (!isActive) return;
            window.cancelAnimationFrame(refreshFrame);
            refreshFrame = window.requestAnimationFrame(() => {
              if (isActive) ScrollTrigger.refresh();
            });
          };

          // Earlier image/font loading can move this section after its first
          // measurement. Refreshing after those assets settle keeps progress at
          // zero when the first card reaches the viewport instead of jumping to
          // card 003 or another later card.
          const pendingImages = Array.from(document.images).filter(
            (image) => !image.complete,
          );
          pendingImages.forEach((image) => {
            image.addEventListener("load", queueRefresh, { once: true });
            image.addEventListener("error", queueRefresh, { once: true });
          });
          window.addEventListener("load", queueRefresh, { once: true });
          if (document.fonts?.ready) {
            document.fonts.ready.then(queueRefresh).catch(() => {});
          }

          const firstRefresh = window.requestAnimationFrame(() => {
            refreshFrame = window.requestAnimationFrame(queueRefresh);
          });
          const settledRefresh = gsap.delayedCall(0.8, queueRefresh);

          return () => {
            isActive = false;
            window.cancelAnimationFrame(firstRefresh);
            window.cancelAnimationFrame(refreshFrame);
            settledRefresh.kill();
            window.removeEventListener("load", queueRefresh);
            pendingImages.forEach((image) => {
              image.removeEventListener("load", queueRefresh);
              image.removeEventListener("error", queueRefresh);
            });
            mobileTimeline.kill();
          };
        }

        if (!desktop || reduceMotion) {
          return undefined;
        }

        gsap.set(pairs, {
          zIndex: (index) => index + 1,
          transformOrigin: "center center",
          force3D: true,
        });

        gsap.set(pairs.slice(1), {
          yPercent: 118,
          scale: 0.94,
          opacity: 1,
        });

        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: stageRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.85,
            fastScrollEnd: false,
            invalidateOnRefresh: true,
          },
        });

        pairs.slice(1).forEach((pair, index) => {
          const previousPair = pairs[index];

          timeline.to(
            previousPair,
            {
              yPercent: -4,
              scale: 0.955,
              opacity: 0.46,
              duration: 0.9,
            },
            index,
          );

          timeline.to(
            pair,
            {
              yPercent: 0,
              scale: 1,
              opacity: 1,
              duration: 0.9,
            },
            index,
          );

          timeline.to({}, { duration: 0.16 });
        });

        return () => timeline.kill();
      },
    );

    const context = gsap.context(() => {
      gsap.from(".project-stack-heading > *", {
        y: 45,
        opacity: 0,
        filter: "blur(7px)",
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-stack-heading",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => {
      context.revert();
      media.revert();
    };
  }, []);

  return (
    <section className="project-stack-section" ref={sectionRef}>
      <div className="project-stack-heading">
        <span>
          <i aria-hidden="true"></i>
          Systems in the real world
        </span>
        <h2>
          Built to close the <em>gap.</em>
        </h2>
        <p>
          Scroll through products that replaced disconnected tools, manual
          work, and stalled ideas with connected experiences built for
          measurable outcomes.
        </p>
      </div>

      <div
        className="project-stack-stage"
        ref={stageRef}
        style={{ "--project-mobile-scroll-distance": `${projects.length * 64}svh` }}
      >
        <div className="project-stack-sticky">
          <div className="project-stack-aurora aurora-one" aria-hidden="true"></div>
          <div className="project-stack-aurora aurora-two" aria-hidden="true"></div>

          <div className="project-stack-stage-inner project-stack-stage-inner--desktop">
            {projects.map((project, projectIndex) => (
              <div
                className="project-stack-pair project-stack-pair--single"
                aria-label={`Project ${projectIndex + 1} of ${projects.length}`}
                key={`desktop-${project.number}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="project-stack-stage-inner project-stack-stage-inner--mobile">
            {projects.map((project, projectIndex) => (
              <div
                className="project-stack-pair project-stack-pair--single"
                aria-label={`Project ${projectIndex + 1} of ${projects.length}`}
                key={`mobile-${project.number}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStackSection;
