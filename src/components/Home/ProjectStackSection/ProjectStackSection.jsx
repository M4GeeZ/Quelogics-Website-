import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// 20 High-Resolution Full-Length Live Website Previews
import remotifyPreview from "../../../assets/project-images/live-previews/remotify.webp";
import ecogreenPreview from "../../../assets/project-images/live-previews/ecogreenbuildingsolutions-co-uk-full.webp";
import deccanPreview from "../../../assets/project-images/live-previews/deccan-full.webp";
import klauserPreview from "../../../assets/project-images/live-previews/klauser-full.webp";
import tolandPreview from "../../../assets/project-images/live-previews/toland-law-full.webp";
import starcleansPreview from "../../../assets/project-images/live-previews/starcleans-ca-full.webp";
import luxecleaningsPreview from "../../../assets/project-images/live-previews/luxecleanings-co-uk-full.webp";
import serviceflowPreview from "../../../assets/project-images/live-previews/serviceflow-full.webp";
import allskytravelPreview from "../../../assets/project-images/live-previews/allskytravel-com-full.webp";
import azurisPreview from "../../../assets/project-images/live-previews/azuris-com-full.webp";
import justintimePreview from "../../../assets/project-images/live-previews/justintimecleans-com-full.webp";
import realcleansPreview from "../../../assets/project-images/live-previews/realcleans-co-uk-full.webp";
import dailyquwatPreview from "../../../assets/project-images/live-previews/dailyquwat-com-full.webp";
import customcleanPreview from "../../../assets/project-images/live-previews/customclean-ca-full.webp";
import purelypristinePreview from "../../../assets/project-images/live-previews/purelypristinespaces-com-full.webp";
import swooshPreview from "../../../assets/project-images/live-previews/swooshandshine-co-uk-full.webp";
import spotlesshubPreview from "../../../assets/project-images/live-previews/spotlesshub-co-uk-full.webp";
import brightskyPreview from "../../../assets/project-images/live-previews/brightskycleaners-com-full.webp";
import cleansheenPreview from "../../../assets/project-images/live-previews/cleansheen-co-uk-full.webp";
import signatureshinesPreview from "../../../assets/project-images/live-previews/signatureshines-com-full.webp";

import "./ProjectStackSection.css";

const projects = [
  {
    number: "001",
    title: "LetsRemotify Platform",
    stack: "WordPress · IT & Business · Tech Talent",
    domain: "letsremotify.com",
    url: "https://letsremotify.com",
    image: remotifyPreview,
    description:
      "Global tech marketplace connecting top remote software engineers and dedicated teams with high-growth companies.",
    accent: "#10AC4F",
  },
  {
    number: "002",
    title: "EcoGreen Energy Solutions",
    stack: "CleanTech · Renewable Energy Systems",
    domain: "ecogreenbuildingsolutions.co.uk",
    url: "https://ecogreenbuildingsolutions.co.uk",
    image: ecogreenPreview,
    description:
      "Commercial and residential renewable energy platform showcasing sustainable power installations and solar systems.",
    accent: "#10AC4F",
  },
  {
    number: "003",
    title: "Deccan AI Enterprise",
    stack: "Webflow · Artificial Intelligence · SaaS",
    domain: "deccan.ai",
    url: "https://deccan.ai",
    image: deccanPreview,
    description:
      "Cutting-edge enterprise AI platform designed to automate complex workflows and surface predictive business intelligence.",
    accent: "#10AC4F",
  },
  {
    number: "004",
    title: "Klauser Capital Advisory",
    stack: "Fintech · Private Equity & Investment",
    domain: "klausercapital.io",
    url: "https://klausercapital.io",
    image: klauserPreview,
    description:
      "Institutional private equity and asset management web experience delivering clear financial intelligence.",
    accent: "#10AC4F",
  },
  {
    number: "005",
    title: "Toland Law Firm",
    stack: "LegalTech · Corporate & Trial Defense",
    domain: "toland.law",
    url: "https://toland.law",
    image: tolandPreview,
    description:
      "Distinguished legal practice platform featuring seamless case consultations, practice areas, and responsive intake.",
    accent: "#10AC4F",
  },
  {
    number: "006",
    title: "Luxe Cleanings UK",
    stack: "Commercial & Residential Services",
    domain: "luxecleanings.co.uk",
    url: "https://luxecleanings.co.uk",
    image: luxecleaningsPreview,
    description:
      "Premium cleaning services portal offering instant online booking, customized routine plans, and service guarantees.",
    accent: "#10AC4F",
  },
  {
    number: "007",
    title: "StarCleans Facility Care",
    stack: "Facility Maintenance · On-Demand Booking",
    domain: "starcleans.ca",
    url: "https://starcleans.ca",
    image: starcleansPreview,
    description:
      "Full-scale enterprise and residential sanitization management platform with live scheduling.",
    accent: "#10AC4F",
  },
  {
    number: "008",
    title: "ServiceFlow Suite",
    stack: "SaaS · Dispatch & Business Operations",
    domain: "serviceflowsuite.com",
    url: "https://serviceflowsuite.com",
    image: serviceflowPreview,
    description:
      "All-in-one operations suite bringing scheduling, dispatch, invoicing, and customer engagement into one unified flow.",
    accent: "#10AC4F",
  },
  {
    number: "009",
    title: "AllSky Travel Global",
    stack: "TravelTech · Flight & Holiday Booking",
    domain: "allskytravel.com",
    url: "https://allskytravel.com",
    image: allskytravelPreview,
    description:
      "Comprehensive flight booking and holiday curation portal with real-time rate queries and custom packages.",
    accent: "#10AC4F",
  },
  {
    number: "010",
    title: "Azuris Luxury Living",
    stack: "Webflow · Architecture & High-End Design",
    domain: "azuris.com",
    url: "https://azuris.com",
    image: azurisPreview,
    description:
      "Minimalist architectural portfolio showcasing luxury developments, refined interiors, and spatial engineering.",
    accent: "#10AC4F",
  },
  {
    number: "011",
    title: "Just In Time Cleans",
    stack: "Residential & Commercial Facility Services",
    domain: "justintimecleans.com",
    url: "https://justintimecleans.com",
    image: justintimePreview,
    description:
      "Rapid turnaround domestic and business cleaning platform with automated quotes and online appointments.",
    accent: "#10AC4F",
  },
  {
    number: "012",
    title: "RealCleans UK",
    stack: "Commercial Services · Cleaning Network",
    domain: "realcleans.co.uk",
    url: "https://realcleans.co.uk",
    image: realcleansPreview,
    description:
      "Professional property upkeep and multi-unit sanitization platform serving businesses across the UK.",
    accent: "#10AC4F",
  },
  {
    number: "013",
    title: "Daily Quwat News",
    stack: "Media · Digital Publishing · High Traffic",
    domain: "dailyquwat.com",
    url: "https://dailyquwat.com",
    image: dailyquwatPreview,
    description:
      "High-performance media portal delivering breaking news, editorial features, and interactive digital journalism.",
    accent: "#10AC4F",
  },
  {
    number: "014",
    title: "CustomClean Solutions",
    stack: "Industrial Cleaning · Operations Management",
    domain: "customclean.ca",
    url: "https://customclean.ca",
    image: customcleanPreview,
    description:
      "Tailored sanitization management platform with customized commercial schedules and dedicated account tracking.",
    accent: "#10AC4F",
  },
  {
    number: "015",
    title: "Purely Pristine Spaces",
    stack: "Specialized Sanitization · Living Spaces",
    domain: "purelypristinespaces.com",
    url: "https://purelypristinespaces.com",
    image: purelypristinePreview,
    description:
      "Bespoke eco-friendly residential hygiene service platform with effortless recurring service subscriptions.",
    accent: "#10AC4F",
  },
  {
    number: "016",
    title: "Swoosh & Shine Co.",
    stack: "Eco Cleaning · Booking & Customer Portal",
    domain: "swooshandshine.co.uk",
    url: "https://swooshandshine.co.uk",
    image: swooshPreview,
    description:
      "Vibrant modern cleaning brand delivering friction-free booking and customer satisfaction guarantees.",
    accent: "#10AC4F",
  },
  {
    number: "017",
    title: "SpotlessHub Commercial",
    stack: "Commercial Facility · Property Care",
    domain: "spotlesshub.co.uk",
    url: "https://spotlesshub.co.uk",
    image: spotlesshubPreview,
    description:
      "End-to-end commercial property upkeep with automated recurring shifts and compliance reporting.",
    accent: "#10AC4F",
  },
  {
    number: "018",
    title: "BrightSky Facility Cleaning",
    stack: "Enterprise Care · Specialized Sanitization",
    domain: "brightskycleaners.com",
    url: "https://brightskycleaners.com",
    image: brightskyPreview,
    description:
      "High-grade industrial and commercial maintenance platform built for reliability and real-time crew dispatch.",
    accent: "#10AC4F",
  },
  {
    number: "019",
    title: "CleanSheen Operations",
    stack: "Corporate Cleaning · Online Scheduling",
    domain: "cleansheen.co.uk",
    url: "https://cleansheen.co.uk",
    image: cleansheenPreview,
    description:
      "Streamlined corporate cleaning hub providing bespoke maintenance plans and transparent service auditing.",
    accent: "#10AC4F",
  },
  {
    number: "020",
    title: "Signature Shines Group",
    stack: "Premium Property Care · Residential & Retail",
    domain: "signatureshines.com",
    url: "https://signatureshines.com",
    image: signatureshinesPreview,
    description:
      "Deluxe property care and retail facility maintenance with integrated client management.",
    accent: "#10AC4F",
  },
];

// Top 10 in Row 1, Next 10 in Row 2
const topRow = projects.slice(0, 10);
const bottomRow = projects.slice(10, 20);

const ProjectCard = ({ project, duplicate = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mediaRef = useRef(null);

  const handleImageLoad = (e) => {
    setIsLoaded(true);
    const media = mediaRef.current;
    const img = e.currentTarget;
    if (media && img && img.naturalHeight && img.naturalWidth) {
      const vh = media.clientHeight || 240;
      media.style.setProperty("--sh", `${vh}px`);
      const ratio = img.naturalHeight / img.naturalWidth;
      const dur = Math.min(10, Math.max(4.5, ratio * 1.6)).toFixed(1) + "s";
      media.style.setProperty("--scroll-dur", dur);
    }
  };

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className="project-stack-card"
      style={{ "--project-accent": project.accent }}
    >
      <div
        className="project-stack-card-media is-live-preview"
        ref={mediaRef}
        onClick={handleClick}
        role="button"
        tabIndex={duplicate ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        title={`Click to open ${project.title} live website`}
      >
        {/* Browser Mockup Top Bar */}
        <div className="project-browser-bar">
          <div className="project-browser-dots" aria-hidden="true">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="project-browser-domain">{project.domain}</span>
          <span className="project-live-badge">LIVE</span>
        </div>

        {/* Scrolling Screenshot Window */}
        <div className="project-screenshot-window">
          <img
            className={`project-scroll-img ${isLoaded ? "is-loaded" : ""}`}
            src={project.image}
            alt={`${project.title} live screenshot preview`}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
          />
        </div>

        {/* Hover action pill */}
        <a
          className="project-stack-reveal-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          aria-label={`Visit ${project.title} live website`}
          onClick={(e) => e.stopPropagation()}
        >
          <span>Visit website</span>
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
};

// One scrolling row. The cards are duplicated so the continuous loop is seamless.
const ProjectRow = ({ items, direction, label }) => (
  <div className={`ps-row ps-row--${direction}`} role="group" aria-label={label}>
    <div className="ps-track">
      {[false, true].map((duplicate) => (
        <div
          className="ps-group"
          aria-hidden={duplicate || undefined}
          key={duplicate ? "copy" : "main"}
        >
          {items.map((project) => (
            <div className="ps-item" key={`${duplicate ? "dup-" : ""}${project.number}`}>
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
      <span className="project-stack-eyebrow">
        <i aria-hidden="true" /> Live Client Websites &amp; Work
      </span>
      <h2 id="project-stack-title">
        Proof, not <em>promises.</em>
      </h2>
      <p>
        Real deployed websites, digital platforms, and client systems. Hover over any card
        to scroll through the live page, and click to visit the actual website.
      </p>
    </div>
    <div className="project-stack-stage">
      <div className="ps-rows">
        <ProjectRow items={topRow} direction="left" label="Live websites moving left" />
        <ProjectRow items={bottomRow} direction="right" label="Live websites moving right" />
      </div>
    </div>
  </section>
);

export default ProjectStackSection;
