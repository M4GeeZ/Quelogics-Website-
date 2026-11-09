import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { aiSolutions, getAiSolution } from "../../data/aiSolutionsData";
import "./AISolutionDetailPage.css";

const AISolutionDetailPage = () => {
  const { slug } = useParams();
  const solution = getAiSolution(slug);

  useEffect(() => {
    if (!solution) return undefined;
    const originalTitle = document.title;
    document.title = `${solution.title} Solutions | QueLogics`;
    return () => { document.title = originalTitle; };
  }, [solution]);

  if (!solution) {
    return (
      <main className="ai-detail-page">
        <section className="ai-detail-not-found">
          <h1>AI solution not found</h1>
          <p>Explore our available AI capabilities instead.</p>
          <Link to="/">Back to homepage <ArrowUpRight size={17} /></Link>
        </section>
      </main>
    );
  }

  const Icon = solution.icon;
  const related = aiSolutions.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="ai-detail-page">
      <section className="ai-detail-hero" aria-labelledby="ai-detail-heading">
        <div className="ai-detail-container">
          <nav className="ai-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/#ai-solutions">AI Solutions</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{solution.title}</span>
          </nav>
          <div className="ai-detail-hero-grid">
            <div>
              <span className="ai-detail-eyebrow"><Icon size={17} aria-hidden="true" /> AI &amp; Emerging Technologies</span>
              <h1 id="ai-detail-heading">{solution.title}<span> Solutions.</span></h1>
              <p className="ai-detail-lead">{solution.tagline}</p>
              <p className="ai-detail-description">{solution.description}</p>
              <div className="ai-detail-actions">
                <Link className="ai-detail-button-primary" to={`/contact?service=${encodeURIComponent(solution.title)}`}>
                  Discuss Your Project <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link className="ai-detail-button-secondary" to="/">Explore More AI Services</Link>
              </div>
            </div>
            <div className="ai-detail-visual" aria-hidden="true">
              <div className="ai-detail-visual-inner"><Icon size={112} strokeWidth={.95} /></div>
              <span className="ai-detail-orbit ai-detail-orbit--one" />
              <span className="ai-detail-orbit ai-detail-orbit--two" />
            </div>
          </div>
        </div>
      </section>

      <section className="ai-detail-capabilities" aria-labelledby="ai-detail-capabilities-title">
        <div className="ai-detail-container">
          <span className="ai-detail-section-kicker">What we build</span>
          <h2 id="ai-detail-capabilities-title">Capabilities shaped around <em>real work.</em></h2>
          <div className="ai-detail-capability-grid">
            {solution.capabilities.map(([title, description]) => (
              <article className="ai-detail-capability" key={title}>
                <span className="ai-detail-capability-icon"><Check size={18} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-detail-uses" aria-labelledby="ai-detail-uses-title">
        <div className="ai-detail-container ai-detail-uses-grid">
          <div>
            <span className="ai-detail-section-kicker">Practical applications</span>
            <h2 id="ai-detail-uses-title">Designed for business impact.</h2>
            <p>Start with a real operational problem, choose the right technology and measure what improves.</p>
          </div>
          <div className="ai-detail-use-list">
            {solution.useCases.map((useCase, index) => (
              <div className="ai-detail-use" key={useCase}>
                <span>0{index + 1}</span>
                <strong>{useCase}</strong>
                <ChevronRight size={18} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-detail-outcome">
        <div className="ai-detail-container ai-detail-outcome-grid">
          <div>
            <span className="ai-detail-section-kicker">The outcome</span>
            <h2>Built to make a difference.</h2>
            <p>{solution.outcome}</p>
          </div>
          <Link to={`/contact?service=${encodeURIComponent(solution.title)}`}>
            Start a Conversation <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="ai-detail-related" aria-labelledby="ai-detail-related-title">
        <div className="ai-detail-container">
          <div className="ai-detail-related-header">
            <div><span className="ai-detail-section-kicker">Explore further</span><h2 id="ai-detail-related-title">More AI capabilities</h2></div>
            <Link to="/"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
          </div>
          <div className="ai-detail-related-grid">
            {related.map((item) => {
              const RelatedIcon = item.icon;
              return (
                <Link className="ai-detail-related-card" key={item.slug} to={`/ai/${item.slug}`}>
                  <RelatedIcon size={27} strokeWidth={1.6} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                  <span>Explore solution <ArrowUpRight size={16} aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AISolutionDetailPage;
