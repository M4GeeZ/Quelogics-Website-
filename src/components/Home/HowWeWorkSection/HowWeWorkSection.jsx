import { useEffect, useRef, useState } from "react";
import "./HowWeWorkSection.css";

const steps = [
  {
    number: "01",
    title: "Ideate",
    text: "We start by understanding your business goals and the bottlenecks slowing your team down, then explore the best ideas to solve them.",
  },
  {
    number: "02",
    title: "Design",
    text: "We design user-friendly workflows and a smart system architecture tailored to the way your business actually works.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Our team builds the solution with the right technologies, focusing on quality, security, and speed.",
  },
  {
    number: "04",
    title: "Test",
    text: "We test everything thoroughly to make sure it works well, stays secure, and performs reliably under real use.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Once ready, we deploy the solution and make sure it integrates smoothly into your existing systems and tools.",
  },
  {
    number: "06",
    title: "Support",
    text: "After launch, we provide ongoing support, monitor performance, and keep improving the solution as your needs evolve.",
  },
];

const HowWeWorkSection = () => {
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const [reached, setReached] = useState(0); // how many steps the line has passed

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return undefined;

    let frame = 0;
    let lastReached = -1;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      // The line "head" sits 55% down the screen: it grows as you scroll down
      // and shrinks again when you scroll back up.
      const head = window.innerHeight * 0.55;
      const length = Math.min(Math.max(head - rect.top, 0), rect.height);
      fill.style.height = `${length}px`;

      let count = 0;
      list.querySelectorAll("[data-step]").forEach((node) => {
        const dot = node.querySelector(".hww-node");
        const marker = node.offsetTop + dot.offsetTop + dot.offsetHeight / 2;
        if (length >= marker) count += 1;
      });

      if (count !== lastReached) {
        lastReached = count;
        setReached(count);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hww-section" aria-labelledby="hww-heading">
      <div className="hww-shell">
        <div className="hww-intro">
          
          <h2 id="hww-heading">
            How <em>we work</em>
          </h2>
          <p>
            Take a moment to get familiar with our approach: six clear steps
            from the first conversation to long after launch.
          </p>
        </div>

        <ol className="hww-list" ref={listRef}>
          <span className="hww-line" aria-hidden="true">
            <span className="hww-line-fill" ref={fillRef}>
              <i />
            </span>
          </span>

          {steps.map((step, index) => (
            <li
              className={`hww-step${index < reached ? " is-reached" : ""}`}
              data-step
              key={step.number}
            >
              <span className="hww-node" aria-hidden="true" />
              <span className="hww-number">{step.number}</span>
              <div className="hww-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
