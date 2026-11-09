import { ArrowUpRight } from "lucide-react";
import carshare from "../../../assets/project-images/optimized/carshare.jpg";
import EagleChat from "../../../assets/project-images/optimized/EagleChat.jpg";
import GMS from "../../../assets/project-images/optimized/GMS.jpg";
import LMSAPP from "../../../assets/project-images/optimized/LMSAPP.jpg";
import ttb from "../../../assets/project-images/optimized/ttb.jpg";
import hmb from "../../../assets/project-images/optimized/hmb.jpg";
import Jabulani from "../../../assets/project-images/optimized/Jabulani.jpg";
import Mindora from "../../../assets/project-images/optimized/Mindora.jpg";
import PizzaMama from "../../../assets/project-images/optimized/PizzaMama.jpg";
import TMS from "../../../assets/project-images/optimized/TMS.jpg";
import "./ProjectStackSection.css";

const projects = [
  {
    number: "001",
    title: "Carshare Platform",
    stack: "SaaS / Fleet Management / Analytics",
    image: carshare,
    description:
      "A connected operations platform for bookings, drivers, payments, live rides, and fleet performance.",
    accent: "#10AC4F",
  },
  {
    number: "002",
    title: "EagleChat Arcade",
    stack: "Gaming / Realtime Chat / Digital Wallet",
    image: EagleChat,
    description:
      "A social play-and-earn experience combining mini-games, live community features, rewards, and wallets.",
    accent: "#10AC4F",
  },
  {
    number: "003",
    title: "PizzaMama Commerce",
    stack: "eCommerce / Ordering / Customer Experience",
    image: PizzaMama,
    description:
      "A conversion-focused restaurant experience that makes discovery, ordering, and repeat purchases effortless.",
    accent: "#10AC4F",
  },
  {
    number: "004",
    title: "Mindora Health",
    stack: "HealthTech / Product Design / Automation",
    image: Mindora,
    description:
      "A calm digital health product shaped around accessible care journeys, clear guidance, and daily engagement.",
    accent: "#10AC4F",
  },
  {
    number: "005",
    title: "Transport Management",
    stack: "Logistics / Dispatch / Live Operations",
    image: TMS,
    description:
      "One operational view for dispatch, fleet status, delivery progress, exceptions, and performance reporting.",
    accent: "#10AC4F",
  },
  {
    number: "006",
    title: "Restaurant System",
    stack: "POS / Inventory / Multi-branch Operations",
    image: hmb,
    description:
      "A reliable restaurant operating system connecting orders, stock, staff, reporting, and branch performance.",
    accent: "#10AC4F",
  },
  {
    number: "007",
    title: "Jabulani Experience",
    stack: "Web Platform / UX / Performance",
    image: Jabulani,
    description:
      "A bold, responsive digital experience combining a distinctive visual system with fast, intuitive journeys.",
    accent: "#10AC4F",
  },
  {
    number: "008",
    title: "Garage Management",
    stack: "Workflow / CRM / Business Intelligence",
    image: GMS,
    description:
      "A complete workshop workflow for customers, vehicles, jobs, parts, invoicing, and business visibility.",
    accent: "#10AC4F",
  },
  {
    number: "009",
    title: "TrueTrucker Marketplace",
    stack: "Marketplace / Transport / Communication",
    image: ttb,
    description:
      "A specialist transport marketplace connecting drivers and operators with relevant opportunities and clear communication.",
    accent: "#10AC4F",
  },
  {
    number: "010",
    title: "Learning Management System",
    stack: "EdTech / Courses / Progress Tracking",
    image: LMSAPP,
    description:
      "A practical learning hub bringing lessons, assignments, progress tracking, and course administration into one clear experience.",
    accent: "#10AC4F",
  },
];

// Top row: projects in order. Bottom row: same 10 projects, starting halfway round,
// so the two rows never show the same card at the same position.
const topRow = projects;
const bottomRow = [...projects.slice(5), ...projects.slice(0, 5)];

const ProjectCard = ({ project, duplicate = false }) => (
  <article className="project-stack-card" style={{ "--project-accent": project.accent }}>
    <div className="project-stack-card-media">
      <img className="project-stack-media-backdrop" src={project.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
        decoding="async"
      />
      <a
        className="project-stack-reveal-link"
        href="/case-studies"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`View ${project.title} project`}
      >
        View project
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
    <div className="project-stack-card-info">
      <p className="project-stack-card-category">{project.stack}</p>
      <h3>{project.title}</h3>
      <p className="project-stack-card-description">{project.description}</p>
    </div>
  </article>
);

// One scrolling row. The cards are rendered twice so the loop is seamless.
const ProjectRow = ({ items, direction, label }) => (
  <div className={`ps-row ps-row--${direction}`} role="group" aria-label={label}>
    <div className="ps-track">
      {[false, true].map((duplicate) => (
        <div className="ps-group" aria-hidden={duplicate || undefined} key={duplicate ? "copy" : "main"}>
          {items.map((project) => (
            <div className="ps-item" key={project.number}>
              <ProjectCard project={project} duplicate={duplicate} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const ProjectStackSection = () => (
  <section className="project-stack-section" aria-labelledby="project-stack-title">
    <div className="project-stack-intro">
      
      <h2 id="project-stack-title">Proof, not <em>promises.</em></h2>
      <p>Real products, practical solutions, and work built to make a difference.</p>
    </div>
    <div className="project-stack-stage">
      <div className="ps-rows">
        <ProjectRow items={topRow} direction="left" label="Projects, moving right to left" />
        <ProjectRow items={bottomRow} direction="right" label="More projects, moving left to right" />
      </div>
    </div>
  </section>
);

export default ProjectStackSection;
