import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import "./siteFooter.css";

const footerColumns = [
  {
    title: "Services",
    links: [
      ["Custom Software Development", "/services/custom-software-development"],
      ["Custom Website Development", "/services/custom-website-development"],
      ["Webflow Development", "/services/webflow-development"],
      ["WordPress Development", "/services/wordpress-development"],
      ["Shopify Development", "/services/shopify-development"],
      ["Mobile App Development", "/services/mobile-app-development"],
      ["UI / UX Design", "/services/ui-ux-design"],
      ["API & Third-Party Integrations", "/services/api-integrations"],
      ["SaaS Product Development", "/services/saas-development"],
    ],
  },
  {
    title: "Marketing",
    links: [
      ["Meta Ads Management", "/services/meta-ads"],
      ["Google Ads Management", "/services/google-ads"],
      ["CRM Setup & Automation", "/services/crm-automation"],
      ["Sales Funnel Development", "/services/sales-funnels"],
      ["Email Marketing", "/services/email-marketing"],
      ["Social Media Management", "/services/social-media"],
      ["Video Editing & Reels", "/services/video-editing"],
      ["Graphic Design", "/services/graphic-design"],
      ["Brand Strategy", "/services/brand-strategy"],
      ["Performance Reporting", "/services/performance-reporting"],
    ],
  },
  {
    title: "AI & Automation",
    links: [
      ["AI Chatbots & Agents", "/services/ai-chatbots-agents"],
      ["Workflow Automation", "/services/workflow-automation"],
      ["CRM Automation", "/services/crm-automation"],
      ["Lead Qualification Automation", "/services/lead-qualification"],
      ["OpenAI & Claude Integration", "/services/ai-integrations"],
      ["Make & Zapier Workflows", "/services/make-zapier"],
      ["AI Strategy Consulting", "/services/ai-strategy"],
    ],
  },
  {
    title: "SEO, AEO & Visibility",
    links: [
      ["Website SEO", "/services/website-seo"],
      ["Local SEO", "/services/local-seo"],
      ["Ecommerce SEO", "/services/ecommerce-seo"],
      ["AI Search Optimization (AEO)", "/services/aeo"],
      ["Content Strategy & Writing", "/services/content-strategy"],
      ["Technical SEO Audit", "/services/technical-seo"],
      ["Link Building", "/services/link-building"],
      ["Conversion Optimization", "/services/conversion-optimization"],
      ["SEO Strategy Consulting", "/services/seo-consulting"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About QueLogics", "/about"],
      ["Our Work & Portfolio", "/portfolio"],
      ["Case Studies", "/case-studies"],
      ["Client Reviews", "/client-reviews"],
      ["Blog & Insights", "/insights"],
      ["Industries We Serve", "/industries"],
      ["Careers", "/careers"],
      ["Contact Us", "/contact"],
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quelogics/", icon: "linkedin" },
  { label: "WhatsApp", href: "https://www.whatsapp.com/", icon: "whatsapp" },
  { label: "Facebook", href: "https://www.facebook.com/quelogics", icon: "facebook" },
];

const SocialIcon = ({ name }) => {
  if (name === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.45 8.31H3.17V18.8h3.28V8.31ZM4.81 3.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM18.83 12.78c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.69V8.31H8.53V18.8h3.28v-5.19c0-1.37.26-2.7 1.96-2.7 1.67 0 1.69 1.56 1.69 2.79v5.1h3.28l.09-6.02Z" /></svg>;
  }

  if (name === "whatsapp") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.49 14.8L2 22l5.32-1.51A9.96 9.96 0 1 0 12.04 2Zm0 17.95a8.02 8.02 0 0 1-4.08-1.12l-.29-.17-3.15.9.91-3.07-.19-.31A7.97 7.97 0 1 1 12.04 19.95Zm4.39-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.22 7.22 0 0 1-1.33-1.65c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46a.88.88 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.72 21v-8.2h2.75l.41-3.2h-3.16V7.56c0-.93.26-1.56 1.59-1.56H17V3.14A22.4 22.4 0 0 0 14.54 3c-2.44 0-4.11 1.49-4.11 4.22V9.6H7.67v3.2h2.76V21h3.29Z" /></svg>;
};

const FooterBrand = () => (
  <Link className="site-footer-brand" to="/" aria-label="QueLogics home">
    <span className="site-footer-brand-mark"><i /></span>
    <span>Que<span>Logics</span></span>
  </Link>
);

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const [openColumns, setOpenColumns] = useState(() => new Set());

  const toggleColumn = (title) => {
    setOpenColumns((current) => {
      const next = new Set(current);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  };

  const moveGlow = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-lead">
          <div>
            <span>Start a conversation</span>
            <h2>Build the system your next stage needs.</h2>
          </div>
          <Link to="/contact">
            Discuss your project
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="site-footer-columns">
          {footerColumns.map((column) => {
            const isOpen = openColumns.has(column.title);
            const linksId = `footer-links-${column.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;

            return (
            <nav className={`site-footer-column${isOpen ? " is-open" : ""}`} aria-label={column.title} onPointerMove={moveGlow} key={column.title}>
              <button
                className="site-footer-column-toggle"
                type="button"
                aria-expanded={isOpen}
                aria-controls={linksId}
                onClick={() => toggleColumn(column.title)}
              >
                <span>{column.title}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div className="site-footer-column-links" id={linksId}>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={`${column.title}-${label}`}>
                    <Link to={href}>{label}</Link>
                  </li>
                ))}
              </ul>
              </div>
            </nav>
            );
          })}
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-bottom-inner">
          <div className="site-footer-identity">
            <FooterBrand />
            <p>
              © 2019 – {currentYear} <span>QueLogics™</span> Driven by Your
              Success. Since 2019. All rights reserved.
            </p>
          </div>

          <div className="site-footer-meta">
            <div className="site-footer-socials" aria-label="QueLogics social media">
              {socialLinks.map(({ label, href, icon }) => (
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}>
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
            <nav className="site-footer-legal" aria-label="Legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
              <Link to="/sitemap">Sitemap</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
