import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import carshare from "../../assets/projects-showcase/optimized/carshare.jpg";
import EagleChat from "../../assets/projects-showcase/optimized/EagleChat.jpg";
import GMS from "../../assets/projects-showcase/optimized/GMS.jpg";
import hmb from "../../assets/projects-showcase/optimized/hmb.jpg";
import Jabulani from "../../assets/projects-showcase/optimized/Jabulani.jpg";
import Mindora from "../../assets/projects-showcase/optimized/Mindora.jpg";
import PizzaMama from "../../assets/projects-showcase/optimized/PizzaMama.jpg";
import TMS from "../../assets/projects-showcase/optimized/TMS.jpg";
import "./projectStackShowcase.css";

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

const projectPairs = projects.reduce((pairs, project, index) => {
  if (index % 2 === 0) {
    pairs.push([project]);
  } else {
    pairs[pairs.length - 1].push(project);
  }

  return pairs;
}, []);

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

const ProjectStackShowcase = () => {
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

          gsap.set(pairs, {
            zIndex: (index) => index + 1,
            transformOrigin: "center top",
            force3D: false,
          });

          gsap.set(pairs.slice(1), {
            yPercent: 112,
            scale: 0.985,
          });

          const mobileTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: stageRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          pairs.slice(1).forEach((pair, index) => {
            mobileTimeline.to(
              pair,
              {
                yPercent: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
              },
              index,
            );
          });

          return () => mobileTimeline.kill();
        }

        if (!desktop || reduceMotion) {
          return undefined;
        }

        gsap.set(pairs, {
          zIndex: (index) => index + 1,
          transformOrigin: "center top",
          force3D: false,
        });

        gsap.set(pairs.slice(1), {
          yPercent: 112,
          scale: 0.98,
        });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stageRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });

        pairs.slice(1).forEach((pair, index) => {
          timeline.to(
            pair,
            {
              yPercent: 0,
              scale: 1,
              duration: 1,
            },
            index,
          );
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

      <div className="project-stack-stage" ref={stageRef}>
        <div className="project-stack-sticky">
          <div className="project-stack-aurora aurora-one" aria-hidden="true"></div>
          <div className="project-stack-aurora aurora-two" aria-hidden="true"></div>

          <div className="project-stack-stage-inner project-stack-stage-inner--desktop">
            {projectPairs.map((pair, pairIndex) => (
              <div
                className="project-stack-pair"
                aria-label={`Project pair ${pairIndex + 1} of ${projectPairs.length}`}
                key={pair.map((project) => project.number).join("-")}
              >
                {pair.map((project) => (
                  <ProjectCard project={project} key={project.number} />
                ))}
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

export default ProjectStackShowcase;
