import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BarChart3,
  Factory,
  HeartPulse,
  Home,
  Landmark,
  ShoppingBag,
  Truck,
} from "lucide-react";
import "./industryAccordion.css";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Government & Public Sector",
    shortTitle: "Public Sector",
    label: "GOVERNMENT",
    icon: Landmark,
    description:
      "Secure digital platforms that make public services faster, clearer, and easier for every citizen to access.",
    accent: "#2ee56f",
    surface: "linear-gradient(135deg, #071d36 0%, #0b3a45 52%, #12633f 100%)",
  },
  {
    title: "Healthcare",
    shortTitle: "Healthcare",
    label: "HEALTHCARE",
    icon: HeartPulse,
    description:
      "Connected care experiences, clinical workflows, and intelligent systems designed around patients and teams.",
    accent: "#ff5a9a",
    surface: "linear-gradient(135deg, #25133d 0%, #79204f 52%, #d7467e 100%)",
  },
  {
    title: "Finance & Banking",
    shortTitle: "Finance",
    label: "FINANCE",
    icon: BarChart3,
    description:
      "Reliable fintech products and automated operations built for trust, speed, compliance, and sustainable growth.",
    accent: "#f26cb0",
    surface: "linear-gradient(135deg, #24143d 0%, #641d55 48%, #bd3b7c 100%)",
  },
  {
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    label: "MANUFACTURING",
    icon: Factory,
    description:
      "Smart factory software that connects planning, production, quality, and reporting in one dependable flow.",
    accent: "#4ce997",
    surface: "linear-gradient(135deg, #0b2031 0%, #174b4a 52%, #238061 100%)",
  },
  {
    title: "Logistics & Supply Chain",
    shortTitle: "Logistics",
    label: "LOGISTICS",
    icon: Truck,
    description:
      "Real-time tools for fleet, inventory, routing, and delivery teams that keep complex operations moving.",
    accent: "#ff6ca4",
    surface: "linear-gradient(135deg, #22153d 0%, #70234d 50%, #c74471 100%)",
  },
  {
    title: "Real Estate",
    shortTitle: "Real Estate",
    label: "REAL ESTATE",
    icon: Home,
    description:
      "Modern property platforms that simplify discovery, sales, leasing, management, and customer communication.",
    accent: "#bc7bff",
    surface: "linear-gradient(135deg, #171a3e 0%, #4c285e 52%, #92507a 100%)",
  },
  {
    title: "eCommerce & Retail",
    shortTitle: "eCommerce",
    label: "ECOMMERCE",
    icon: ShoppingBag,
    description:
      "High-converting commerce experiences and connected retail systems that turn attention into loyal customers.",
    accent: "#ff799f",
    surface: "linear-gradient(135deg, #2c143b 0%, #7d1f50 50%, #d54a75 100%)",
  },
];

const IndustryAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".industry-accordion-heading > *", {
        y: 54,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.9,
        stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-accordion-heading",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".industry-panels", {
        y: 80,
        opacity: 0,
        scale: 0.985,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-panels",
          start: "top 86%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="industry-accordion-section" ref={sectionRef}>
      <div className="industry-accordion-heading">
        <span className="industry-eyebrow">
          <i aria-hidden="true"></i>
          Industries we serve
        </span>
        <h2>
          Software shaped to your <em>sector.</em>
        </h2>
        <p>
          Hover or tap a sector to explore digital products built around its
          real-world challenges, teams, and customers.
        </p>
      </div>

      <div className="industry-panels" aria-label="Industries we serve">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          const isActive = index === activeIndex;

          return (
            <article
              className={`industry-panel${isActive ? " is-active" : ""}`}
              style={{
                "--industry-accent": industry.accent,
                "--industry-surface": industry.surface,
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              tabIndex="0"
              aria-expanded={isActive}
              key={industry.title}
            >
              <div className="industry-panel-grid" aria-hidden="true"></div>
              <div className="industry-panel-shine" aria-hidden="true"></div>

              <div className="industry-collapsed-content" aria-hidden={isActive}>
                <span className="industry-collapsed-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="industry-vertical-title">
                  {industry.shortTitle}
                </span>
              </div>

              <div className="industry-expanded-content" aria-hidden={!isActive}>
                <span className="industry-pill">
                  <i aria-hidden="true"></i>
                  {industry.label}
                </span>

                <div className="industry-copy">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <a href="/industries" tabIndex={isActive ? 0 : -1}>
                    View work
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>

                <Icon className="industry-watermark" aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default IndustryAccordion;
