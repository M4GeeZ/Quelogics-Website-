import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { serviceShowcaseSlides } from "../../../data/serviceShowcaseSlides";
import "./AIEmergingSection.css";

const AIEmergingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const timerRef = useRef(null);
  const slide = serviceShowcaseSlides[activeIndex];

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const moveSlide = (direction) => {
    if (fadingOut) return;

    const nextIndex =
      (activeIndex + direction + serviceShowcaseSlides.length) % serviceShowcaseSlides.length;

    // Respect OS reduced-motion settings: content updates without waiting.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex(nextIndex);
      return;
    }

    setFadingOut(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setFadingOut(false);
    }, 175);
  };

  return (
    <section
      id="ai-solutions"
      className="ai-emerging-section"
      aria-label="Explore QueLogics services"
    >
      <div className="ai-emerging-inner">
        <div className="ai-emerging-copy">
          <div
            className={`ai-emerging-switchable${fadingOut ? " is-changing" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            
            <h2 id="ai-emerging-title">
              {slide.headline.map((line, index) => (
                <span key={`${slide.id}-${index}`}>
                  {line}
                  {index < slide.headline.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p>{slide.description}</p>
            <Link className="ai-emerging-cta" to={slide.ctaPath}>
              {slide.cta} <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="ai-emerging-side">
          <nav
            className={`ai-emerging-links ai-emerging-switchable${fadingOut ? " is-changing" : ""}`}
            aria-label={`Explore ${slide.kicker}`}
          >
            {slide.links.map(({ title, path, icon: Icon }) => (
              <Link key={path} to={path} className="ai-emerging-link">
                <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
                <span>{title}</span>
              </Link>
            ))}
          </nav>

          <div className="ai-emerging-controls" role="group" aria-label="Switch service category">
            <button
              className="ai-emerging-arrow"
              type="button"
              onClick={() => moveSlide(-1)}
              disabled={fadingOut}
              aria-label="Previous service category"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </button>
            <button
              className="ai-emerging-arrow"
              type="button"
              onClick={() => moveSlide(1)}
              disabled={fadingOut}
              aria-label="Next service category"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEmergingSection;
