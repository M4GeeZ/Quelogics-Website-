import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";
import "./selectedWorkMarquee.css";

gsap.registerPlugin(ScrollTrigger);

const marqueeCopies = [0, 1, 2, 3];

const SelectedWorkMarquee = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".selected-work-marquee-label, .selected-work-marquee-note", {
        y: 22,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".selected-work-marquee-section",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="selected-work-marquee-section" ref={sectionRef}>
      <div className="selected-work-marquee-topline">
        <span className="selected-work-marquee-label">
          <i aria-hidden="true"></i>
          Selected work
        </span>
        <span className="selected-work-marquee-note">
          Quelogics / Selected work
          <ArrowDownRight aria-hidden="true" />
        </span>
      </div>

      <div className="selected-work-marquee-window" aria-label="Selected work">
        <div className="selected-work-marquee-track">
          {marqueeCopies.map((copyIndex) => (
            <span
              className="selected-work-marquee-copy"
              aria-hidden={copyIndex > 0 ? "true" : undefined}
              key={copyIndex}
            >
              Selected works <b>—</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkMarquee;
