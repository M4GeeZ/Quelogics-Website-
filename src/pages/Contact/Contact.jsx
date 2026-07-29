import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageSquareText,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const contactChannels = [
  {
    label: "New projects",
    value: "hello@quelogics.com",
    href: "mailto:hello@quelogics.com?subject=New%20project%20inquiry",
  },
  {
    label: "Partnerships",
    value: "Start a conversation",
    href: "mailto:hello@quelogics.com?subject=Partnership%20inquiry",
  },
  {
    label: "Working model",
    value: "Remote collaboration · Global delivery",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "We read the context",
    text: "Your message is reviewed for the real problem, urgency, and the kind of expertise the work needs.",
  },
  {
    number: "02",
    title: "We shape the first call",
    text: "The conversation starts with useful questions rather than a generic sales presentation.",
  },
  {
    number: "03",
    title: "We define a clear path",
    text: "You leave with a practical next step, whether that is discovery, a focused engagement, or a better direction.",
  },
];

const Contact = () => {
  const pageRef = useRef(null);
  const processRef = useRef(null);
  const [status, setStatus] = useState("");

  useLayoutEffect(() => {
    const body = document.body;
    body.classList.add("contact-page-active");

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".contact-hero-kicker", {
          y: 16,
          autoAlpha: 0,
          duration: 0.5,
        })
        .from(
          ".contact-title-line > span",
          {
            yPercent: 108,
            duration: 0.82,
            stagger: 0.08,
          },
          "-=0.2",
        )
        .from(
          ".contact-hero-lead, .contact-availability, .contact-channel-list",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.68,
            stagger: 0.1,
          },
          "-=0.56",
        )
        .from(
          ".contact-form-panel",
          {
            y: 34,
            scale: 0.982,
            autoAlpha: 0,
            duration: 0.88,
          },
          "-=0.78",
        )
        .from(
          ".contact-form-topline, .contact-form-row, .contact-message-field, .contact-form-footer",
          {
            y: 18,
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.065,
          },
          "-=0.52",
        );

      gsap.utils.toArray(".contact-reveal").forEach((element) => {
        gsap.from(element, {
          y: 38,
          autoAlpha: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.from(".contact-process-step", {
        y: 32,
        autoAlpha: 0,
        duration: 0.72,
        stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const progress = processRef.current?.querySelector(
        ".contact-process-progress-fill",
      );

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 72%",
              end: "bottom 70%",
              scrub: 0.7,
            },
          },
        );
      }
    }, pageRef);

    return () => {
      context.revert();
      body.classList.remove("contact-page-active");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Project inquiry${company ? ` — ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Project focus: ${service || "Not selected"}`,
        "",
        message,
      ].join("\n"),
    );

    setStatus("Opening your email app with the project details.");
    window.location.href = `mailto:hello@quelogics.com?subject=${subject}&body=${body}`;
  };

  return (
    <main ref={pageRef} className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="contact-hero-kicker">
              <Sparkles aria-hidden="true" />
              Start a conversation
            </span>

            <h1 className="contact-hero-title">
              <span className="contact-title-line">
                <span>LET&apos;S BUILD</span>
              </span>
              <span className="contact-title-line">
                <span>SOMETHING</span>
              </span>
              <span className="contact-title-line contact-title-line-accent">
                <span>USEFUL.</span>
              </span>
            </h1>

            <p className="contact-hero-lead">
              Tell us where the business is stuck, what needs to change, or
              what you are ready to build. We will begin with the problem—not
              a pre-written pitch.
            </p>

            <div className="contact-availability">
              <span className="contact-availability-dot" aria-hidden="true" />
              <div>
                <strong>Open to focused digital work</strong>
                <span>Products, platforms, AI, automation, and growth systems.</span>
              </div>
            </div>

            <div className="contact-channel-list" aria-label="Contact options">
              {contactChannels.map((channel) => {
                const content = (
                  <>
                    <span>{channel.label}</span>
                    <strong>{channel.value}</strong>
                    {channel.href && <ArrowUpRight aria-hidden="true" />}
                  </>
                );

                return channel.href ? (
                  <a key={channel.label} href={channel.href}>
                    {content}
                  </a>
                ) : (
                  <div key={channel.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-topline">
              <div>
                <span>Project brief</span>
                <strong>Give us the useful details.</strong>
              </div>
              <div className="contact-form-status" aria-label="Form availability">
                <span />
                Online
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Full name"
                    required
                  />
                </label>

                <label>
                  <span>Work email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    required
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company or team"
                  />
                </label>

                <label>
                  <span>Project focus</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a focus
                    </option>
                    <option>Software & product development</option>
                    <option>AI & automation</option>
                    <option>Web or mobile experience</option>
                    <option>Growth, SEO or conversion</option>
                    <option>Integration or modernization</option>
                    <option>Something else</option>
                  </select>
                </label>
              </div>

              <label className="contact-message-field">
                <span>What are you trying to move forward?</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Share the challenge, current situation, and the outcome you need."
                  required
                />
              </label>

              <div className="contact-form-footer">
                <p>
                  <Check aria-hidden="true" />
                  Your brief opens in your email app before it is sent.
                </p>
                <button type="submit">
                  Send project brief
                  <Send aria-hidden="true" />
                </button>
              </div>

              <p className="contact-form-feedback" aria-live="polite">
                {status}
              </p>
            </form>

            <div className="contact-form-decoration" aria-hidden="true">
              <span className="contact-form-orbit contact-form-orbit-one" />
              <span className="contact-form-orbit contact-form-orbit-two" />
              <span className="contact-form-moving-dot" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-intro contact-reveal">
        <div className="contact-section-shell contact-intro-grid">
          <div>
            <span className="contact-eyebrow">A better first conversation</span>
            <h2>Clear context creates better decisions.</h2>
          </div>

          <div className="contact-intro-copy">
            <p>
              The strongest projects start when the problem, constraints, and
              desired outcome are visible early. You do not need a finished
              specification. A clear explanation of what is not working is
              enough to begin.
            </p>
            <div className="contact-intro-note">
              <MessageSquareText aria-hidden="true" />
              <span>
                No long proposal form. No unnecessary discovery theatre. Just
                the information needed for a useful next step.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section ref={processRef} className="contact-process">
        <div className="contact-section-shell">
          <div className="contact-process-heading contact-reveal">
            <span className="contact-eyebrow">What happens next</span>
            <h2>A straightforward path from message to momentum.</h2>
          </div>

          <div className="contact-process-progress" aria-hidden="true">
            <span className="contact-process-progress-fill" />
          </div>

          <div className="contact-process-grid">
            {nextSteps.map((step) => (
              <article key={step.number} className="contact-process-step">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-final contact-reveal">
        <div className="contact-section-shell contact-final-inner">
          <div className="contact-final-icon" aria-hidden="true">
            <Workflow />
          </div>
          <div>
            <span className="contact-eyebrow">Prefer a direct email?</span>
            <h2>hello@quelogics.com</h2>
          </div>
          <a href="mailto:hello@quelogics.com">
            Write to the team
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;