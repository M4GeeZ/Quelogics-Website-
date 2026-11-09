import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { aiSolutions } from "../../../data/aiSolutionsData";
import "./AIEmergingSection.css";

const AIEmergingSection = () => (
  <section id="ai-solutions" className="ai-emerging-section" aria-labelledby="ai-emerging-title">
    <div className="ai-emerging-inner">
      <div className="ai-emerging-copy">
        <span className="ai-emerging-kicker">
          <BadgeCheck size={13} strokeWidth={2} aria-hidden="true" />
          AI &amp; Emerging Technologies
        </span>
        <h2 id="ai-emerging-title">
          Practical AI<br />
          Solutions for Real<br />
          Business Impact
        </h2>
        <p>
          From Generative AI and Agentic AI to RAG, LLMs, and Voice AI,
          we design and implement AI solutions that solve real business
          challenges, improve productivity, and reduce repetitive work.
        </p>
        <Link className="ai-emerging-cta" to="/portfolio">
          Explore Our Work <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <nav className="ai-emerging-links" aria-label="Explore AI and emerging technologies">
        {aiSolutions.map(({ slug, title, icon: Icon }) => (
          <Link key={slug} to={`/ai/${slug}`} className="ai-emerging-link">
            <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
            <span>{title}</span>
          </Link>
        ))}
      </nav>
    </div>
  </section>
);

export default AIEmergingSection;
