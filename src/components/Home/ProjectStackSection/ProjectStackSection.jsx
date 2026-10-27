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
        aria-label={`View ${project.title} project`}
      >
        View project
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
    <div className="project-stack-card-info">
      <span className="project-stack-card-number">{project.number}</span>
      <p className="project-stack-card-category">{project.stack}</p>
      <h3>{project.title}</h3>
      <p className="project-stack-card-description">{project.description}</p>
    </div>
  </article>
);

const ProjectStackSection = () => (
  <section className="project-stack-section">
    <div className="project-stack-heading">
      <span><i aria-hidden="true"></i>Systems in the real world</span>
      <h2>Built to close the <em>gap.</em></h2>
      <p>
        Explore products that replaced disconnected tools, manual work, and
        stalled ideas with connected experiences built for measurable outcomes.
      </p>
    </div>
    <div className="project-stack-stage">
      <div className="project-stack-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </div>
  </section>
);

export default ProjectStackSection;
