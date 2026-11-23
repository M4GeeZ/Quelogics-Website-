import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Globe2,
  Smartphone,
  Palette,
  PlugZap,
  Cloud,
  Bot,
  Workflow,
  Search,
  TrendingUp,
  Store,
  Layers3,
  Building2,
  Megaphone,
  Target,
  Mail,
  Video,
  PenTool,
  BarChart3,
  ContactRound,
  Users,
  FileText,
  Gauge,
  MapPin,
  Link2,
  BookOpen,
  BriefcaseBusiness,
  MessageSquare,
  Sparkles,
  Rocket,
  Share2,
  GitBranch,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import "./Footer.css";

const footerColumns = [
  {
    title: "Development",
    Icon: Code2,
    links: [
      ["Custom Software Development", "/services/custom-software-development", Code2],
      ["Custom Website Development", "/services/custom-website-development", Globe2],
      ["Webflow Development", "/services/webflow-development", Layers3],
      ["WordPress Development", "/services/wordpress-development", Globe2],
      ["Shopify Development", "/services/shopify-development", Store],
      ["Mobile App Development", "/services/mobile-app-development", Smartphone],
      ["UI / UX Design", "/services/ui-ux-design", Palette],
      ["API & Third-Party Integrations", "/services/api-integrations", PlugZap],
      ["SaaS Product Development", "/services/saas-development", Cloud],
    ],
  },
  {
    title: "Marketing",
    Icon: Megaphone,
    links: [
      ["Meta Ads Management", "/services/meta-ads", Target],
      ["Google Ads Management", "/services/google-ads", TrendingUp],
      ["CRM Setup & Automation", "/services/crm-automation", ContactRound],
      ["Sales Funnel Development", "/services/sales-funnels", GitBranch],
      ["Email Marketing", "/services/email-marketing", Mail],
      ["Social Media Management", "/services/social-media", Share2],
      ["Video Editing & Reels", "/services/video-editing", Video],
      ["Graphic Design", "/services/graphic-design", PenTool],
      ["Brand Strategy", "/services/brand-strategy", Sparkles],
      ["Performance Reporting", "/services/performance-reporting", BarChart3],
    ],
  },
  {
    title: "AI & Automation",
    Icon: Bot,
    links: [
      ["AI Chatbots & Agents", "/services/ai-chatbots-agents", Bot],
      ["Workflow Automation", "/services/workflow-automation", Workflow],
      ["CRM Automation", "/services/crm-automation", ContactRound],
      ["Lead Qualification Automation", "/services/lead-qualification", Target],
      ["OpenAI & Claude Integration", "/services/ai-integrations", Sparkles],
      ["Make & Zapier Workflows", "/services/make-zapier", PlugZap],
      ["AI Strategy Consulting", "/services/ai-strategy", Rocket],
    ],
  },
  {
    title: "SEO & Visibility",
    Icon: Search,
    links: [
      ["Website SEO", "/services/website-seo", Search],
      ["Local SEO", "/services/local-seo", MapPin],
      ["Ecommerce SEO", "/services/ecommerce-seo", Store],
      ["AI Search Optimization (AEO)", "/services/aeo", Sparkles],
      ["Content Strategy & Writing", "/services/content-strategy", FileText],
      ["Technical SEO Audit", "/services/technical-seo", Gauge],
      ["Link Building", "/services/link-building", Link2],
      ["Conversion Optimization", "/services/conversion-optimization", TrendingUp],
      ["SEO Strategy Consulting", "/services/seo-consulting", Target],
    ],
  },
  {
    title: "Company",
    Icon: Building2,
    links: [
      ["About QueLogics", "/about", Building2],
      ["Our Work & Portfolio", "/portfolio", BriefcaseBusiness],
      ["Case Studies", "/case-studies", BookOpen],
      ["Client Reviews", "/client-reviews", MessageSquare],
      ["Industries We Serve", "/industries", Layers3],
      ["Careers", "/careers", Users],
      ["Contact Us", "/contact", Mail],
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quelogics/", Icon: FaLinkedinIn },
  { label: "X / Twitter", href: "https://x.com/quelogics", Icon: FaXTwitter },
  { label: "WhatsApp", href: "https://wa.me/", Icon: FaWhatsapp },
  { label: "Facebook", href: "https://www.facebook.com/quelogics", Icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/quelogics", Icon: FaInstagram },
  { label: "GitHub", href: "https://github.com/quelogics", Icon: FaGithub },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openColumns, setOpenColumns] = useState(() => new Set());

  const toggleColumn = (title) => {
    setOpenColumns((current) => {
      const next = new Set(current);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <footer className="site-footer ql-footer">
      <div className="ql-footer-container">
        {/* Lead section with QueLogics Logo right above "Build what comes next." */}
        <div className="ql-footer-lead">
          <div className="ql-footer-lead-copy">
            <Link className="ql-footer-brand-logo-link" to="/" aria-label="QueLogics home">
              <img
                src="/assets/brand/quelogics-original-white.png"
                alt="QueLogics — Innovate • Build • Deliver"
                className="ql-footer-lead-brand-img"
                loading="lazy"
              />
            </Link>
            <h2>Build what comes next.</h2>
            <p>
              From the first idea to launch and beyond, we build the software,
              automation, and digital experiences that help businesses move forward.
            </p>
          </div>
          <Link className="ql-footer-main-cta" to="/contact">
            <span>Discuss your project</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>

        {/* Directory links */}
        <div className="ql-footer-directory" aria-label="Explore QueLogics services and company">
          {footerColumns.map(({ title, Icon, links }) => {
            const isOpen = openColumns.has(title);
            const linksId = `ql-footer-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <nav className={`ql-footer-column${isOpen ? " is-open" : ""}`} aria-label={title} key={title}>
                <button
                  className="ql-footer-column-title"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={linksId}
                  onClick={() => toggleColumn(title)}
                >
                  <span className="ql-footer-column-label">
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                    <span>{title}</span>
                  </span>
                  <ChevronDown className="ql-footer-chevron" size={18} aria-hidden="true" />
                </button>
                <div className="ql-footer-links" id={linksId}>
                  <ul>
                    {links.map(([label, href, LinkIcon]) => (
                      <li key={`${label}-${href}`}>
                        <Link to={href}>
                          <LinkIcon className="ql-footer-link-icon" size={15} strokeWidth={1.8} aria-hidden="true" />
                          <span>{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            );
          })}
        </div>

        {/* Bottom bar with enhanced social buttons and legal links */}
        <div className="ql-footer-meta">
          <p className="ql-footer-copyright">
            © {currentYear} QueLogics. All rights reserved.
          </p>
          <nav className="ql-footer-legal" aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </nav>
          <div className="ql-footer-socials" aria-label="QueLogics social media">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                key={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
