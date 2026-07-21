import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quelogics/", text: "in" },
  { label: "X", href: "https://x.com/quelogics", text: "X" },
  { label: "Instagram", href: "https://www.instagram.com/quelogics/", text: "◎" },
  { label: "Facebook", href: "https://www.facebook.com/quelogics", text: "f" },
  { label: "YouTube", href: "https://www.youtube.com/@quelogics", text: "▶" },
];

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

  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-columns">
          {footerColumns.map((column) => {
            const isOpen = openColumns.has(column.title);
            const linksId = `footer-links-${column.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;

            return (
            <nav className={`site-footer-column${isOpen ? " is-open" : ""}`} aria-label={column.title} key={column.title}>
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
              {socialLinks.map(({ label, href, text }) => (
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}>
                  <span aria-hidden="true">{text}</span>
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
