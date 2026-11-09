import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Search,
  Globe,
  Menu,
  ArrowUpRight,
  ChevronDown,
  Check,
  X,
  Bot,
  SearchCode,
  Code2,
  Monitor,
  Smartphone,
  Cloud,
  Palette,
  Settings2,
  ContactRound,
  PlugZap,
  Megaphone,
  BadgeDollarSign,
  ChartNoAxesCombined,
  ShoppingCart,
  Building2,
  UtensilsCrossed,
  Truck,
  Factory,
  Rocket,
  FileText,
  BookOpen,
  BriefcaseBusiness,
  MessagesSquare,
  Layers3,
  HeartPulse,
  Landmark,
  Briefcase,
  Store,
  CarFront,
  TrendingUp,
  Unplug,
  ShieldCheck,
  PanelsTopLeft,
  FileSearch2,
  FolderKanban,
  BookOpenCheck,
  Headset,
  Info,
  Users,
  Mail,
  Banknote,
  RefreshCw,
  LayoutDashboard,
  BookMarked,
  Workflow,
  BrainCircuit,
  Zap,
  UserCog,
  ClipboardList,
  Star,
  House,
  Target,
  Package,
} from "lucide-react";

import { navigationLinks, companyMenu, hireTeamMenu } from "../../data/navigationData";
import { servicePreviewData } from "../../data/servicePreviewData";
import { menuPreviewData } from "../../data/menuPreviewData";
import { brandIcons, accentColors } from "./brandIcons";
import { marketOptions, useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";

const OUR_SERVICES = "Our Services";
const UNIFORM_HIRE_ROLE_ICONS = new Set(["cto", "product manager", "saas developer"]);

const TAB_ICONS = {
  Services: Layers3,
  Industries: Building2,
  Solutions: Rocket,
  Products: Package,
};

// One distinct, meaningful icon per menu label (checked before the keyword fallback below).
const labelIcons = {
  // Services
  "custom software development": Code2,
  "website development": Globe,
  "mobile app development": Smartphone,
  "saas product development": Cloud,
  "ui / ux design": Palette,
  "ai chatbots & agents": Bot,
  "workflow automation": Workflow,
  "crm automation": ContactRound,
  "api & third-party integrations": PlugZap,
  "ai strategy consulting": BrainCircuit,
  "performance marketing": Megaphone,
  "google ads & lead generation": Target,
  "seo & aeo": SearchCode,
  "conversion optimization": ChartNoAxesCombined,
  "marketing automation": Zap,
  // Industries
  "government & public sector": Landmark,
  healthcare: HeartPulse,
  "finance & banking": Banknote,
  "professional services": Briefcase,
  "ecommerce & retail": Store,
  "real estate": House,
  "restaurants & hospitality": UtensilsCrossed,
  automotive: CarFront,
  manufacturing: Factory,
  "logistics & supply chain": Truck,
  "saas & technology": Cloud,
  "startups & scaleups": TrendingUp,
  // Company
  "about us": Info,
  careers: Users,
  "contact us": Mail,
  portfolio: FolderKanban,
  "case studies": FileSearch2,
  "client reviews": Star,
  blogs: FileText,
  "products overview": FolderKanban,
  // Solutions
  "automate manual operations": Workflow,
  "generate qualified leads": Target,
  "improve website conversion": ChartNoAxesCombined,
  "connect disconnected tools": Unplug,
  "launch an mvp": Rocket,
  "modernize legacy software": RefreshCw,
  "build a customer portal": LayoutDashboard,
  "quality assurance & testing": ShieldCheck,
  // Insights
  products: Package,
  "blog & insights": FileText,
  "our work & portfolio": FolderKanban,
  "ai & automation": Bot,
  "software & product": Code2,
  "seo, aeo & growth": TrendingUp,
  "ui / ux & conversion": Palette,
  "automation guides": BookOpenCheck,
  "growth playbooks": BookOpen,
  "development guides": BookMarked,
  "talk to an expert": Headset,
  // Hire by role
  cto: UserCog,
  "product manager": ClipboardList,
  "saas developer": Cloud,
};

const getMenuIcon = (value) => {
  if (labelIcons[value]) return labelIcons[value];
  if (value.includes("about")) return Info;
  if (value.includes("career")) return Users;
  if (value.includes("contact")) return Mail;
  if (value.includes("cto") || value.includes("product manager")) return BriefcaseBusiness;
  // Exact menu-item icons requested for Industries, Solutions and Insights.
  if (value.includes("health care") || value.includes("healthcare")) return HeartPulse;
  if (value.includes("finance and banking") || value.includes("finance") || value.includes("banking")) return Landmark;
  if (value.includes("professional services")) return Briefcase;
  if (value.includes("ecom&retail") || value.includes("ecom & retail") || value.includes("ecommerce & retail") || value.includes("e-commerce & retail")) return Store;
  if (value.includes("automotive")) return CarFront;
  if (value.includes("startups and scaleups") || value.includes("startups & scaleups") || value.includes("startup") || value.includes("scaleup")) return TrendingUp;

  if (value.includes("connect disconnected tools")) return Unplug;
  if (value.includes("quality assurance and testing") || value.includes("quality assurance") || value.includes("testing")) return ShieldCheck;
  if (value === "webflow" || value.includes("webflow development")) return PanelsTopLeft;

  if (value.includes("case study")) return FileSearch2;
  if (value.includes("our work") || value.includes("portfolio")) return FolderKanban;
  if (value.includes("automation guides")) return BookOpenCheck;
  if (value.includes("talk to an expert")) return Headset;

  if (value.includes("ios") || value.includes("android") || value.includes("native")) return Smartphone;
  if (value.includes("aws") || value.includes("azure") || value.includes("gcp")) return Cloud;
  if (value.includes("ai") || value.includes("agent") || value.includes("chatbot") || value.includes("llm") || value.includes("generative")) return Bot;
  if (value.includes("retrieval") || value.includes("search") || value.includes("seo") || value.includes("aeo")) return SearchCode;
  if (value.includes("software") || value.includes("custom") || value.includes("code") || value.includes("development")) return Code2;
  if (value.includes("developer") || value.includes("engineer")) return Code2;
  if (value.includes("website") || value.includes("web") || value.includes("wordpress") || value.includes("webflow")) return Monitor;
  if (value.includes("mobile") || value.includes("app")) return Smartphone;
  if (value.includes("saas") || value.includes("cloud")) return Cloud;
  if (value.includes("ui") || value.includes("ux") || value.includes("design")) return Palette;
  if (value.includes("automation") || value.includes("workflow") || value.includes("automate")) return Settings2;
  if (value.includes("crm")) return ContactRound;
  if (value.includes("api") || value.includes("integration")) return PlugZap;
  if (value.includes("ads") || value.includes("marketing") || value.includes("performance")) return Megaphone;
  if (value.includes("google")) return BadgeDollarSign;
  if (value.includes("conversion") || value.includes("analytics")) return ChartNoAxesCombined;
  if (value.includes("ecommerce") || value.includes("shopify")) return ShoppingCart;
  if (value.includes("real estate") || value.includes("real-estate")) return Building2;
  if (value.includes("restaurant") || value.includes("hospitality")) return UtensilsCrossed;
  if (value.includes("logistics") || value.includes("truck") || value.includes("supply")) return Truck;
  if (value.includes("manufacturing") || value.includes("factory")) return Factory;
  if (value.includes("launch") || value.includes("mvp") || value.includes("rocket")) return Rocket;
  if (value.includes("blog") || value.includes("article")) return FileText;
  if (value.includes("guide") || value.includes("playbook")) return BookOpen;
  if (value.includes("case") || value.includes("portfolio")) return BriefcaseBusiness;
  if (value.includes("review") || value.includes("testimonial")) return MessagesSquare;
  return Layers3;
};

const NavItem = ({
  item,
  openMenu,
  closeMenu,
  isActive,
}) => {
  const handleMouseEnter = () => {
    if (item.hasDropdown) {
      openMenu(item.title);
    } else {
      closeMenu();
    }
  };

  return (
    <li
      className={`nav-item${item.title === "About" ? " nav-about-item" : ""} ${
        isActive ? "nav-item-active" : ""
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <NavLink
        to={item.path}
        className={({ isActive: isRouteActive }) =>
          `nav-link${item.title === "About" ? " nav-about-link" : ""}${isRouteActive && item.matchRoute !== false ? " is-current" : ""}`
        }
        onFocus={handleMouseEnter}
      >
        <span>{item.title}</span>

        {item.hasDropdown && (
          <ChevronDown
            className="nav-arrow"
            size={15}
            strokeWidth={1.8}
          />
        )}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTab, setActiveTab] = useState("Services");
  const [hoveredMenuLink, setHoveredMenuLink] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileTab, setMobileTab] = useState("Services");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [projectStackActive, setProjectStackActive] = useState(false);
  const languageRef = useRef(null);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const closeTimerRef = useRef(null);
  const clearMenuTimerRef = useRef(null);
  const { currentMarket, setLocale, t } = useLanguage();

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (event.key === "Escape" || !languageRef.current?.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeLanguageMenu);
    document.addEventListener("keydown", closeLanguageMenu);
    return () => {
      document.removeEventListener("pointerdown", closeLanguageMenu);
      document.removeEventListener("keydown", closeLanguageMenu);
    };
  }, []);

  useEffect(() => () => {
    window.clearTimeout(closeTimerRef.current);
    window.clearTimeout(clearMenuTimerRef.current);
  }, []);

  useEffect(() => {
    const updateNavbarTheme = () => {
      const hero = document.querySelector(".hero-section");
      const projectStackStage = isHomePage
        ? document.querySelector(".project-stack-stage")
        : null;
      const navbarHeight = document
        .querySelector(".navbar-container")
        ?.getBoundingClientRect().height || 82;

      setScrolledPastHero(hero
        ? hero.getBoundingClientRect().bottom <= 82
        : window.scrollY > 24);

      if (!projectStackStage) {
        setProjectStackActive(false);
        return;
      }

      const stageBounds = projectStackStage.getBoundingClientRect();
      setProjectStackActive(
        stageBounds.top <= navbarHeight && stageBounds.bottom > navbarHeight,
      );
    };

    updateNavbarTheme();
    window.addEventListener("scroll", updateNavbarTheme, { passive: true });
    window.addEventListener("resize", updateNavbarTheme);
    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, [isHomePage, pathname]);

  const tabItems = navigationLinks.filter((item) => item.hasDropdown);
  const desktopNavItems = [
    { id: "our-services", title: OUR_SERVICES, path: "/services", hasDropdown: true },
    { id: companyMenu.id, title: companyMenu.title, path: companyMenu.path, hasDropdown: true },
    // Hire Team shares /contact with the Contact button, so it should not light up as the current page.
    { id: hireTeamMenu.id, title: hireTeamMenu.title, path: hireTeamMenu.path, hasDropdown: true, matchRoute: false },
    { id: "reviews", title: "Reviews", path: "/client-reviews", hasDropdown: false },
  ];
  const showTabs = activeMenu === OUR_SERVICES;
  const activeMenuData = showTabs
    ? tabItems.find((item) => item.title === activeTab) || tabItems[0]
    : activeMenu === companyMenu.title
      ? companyMenu
      : activeMenu === hireTeamMenu.title
        ? hireTeamMenu
        : null;
  const mobileItems = [
    { id: "our-services", title: OUR_SERVICES, path: "/services" },
    companyMenu,
    hireTeamMenu,
  ];
  const activePreview = hoveredMenuLink && (servicePreviewData[hoveredMenuLink] || menuPreviewData[hoveredMenuLink]);
  const menuLayout = showTabs
    ? "tabs"
    : activeMenu === companyMenu.title
      ? "company"
      : "hire";
  const footerCopy = {
    tabs: {
      text: "Not sure what you need?",
      cta: `View all ${activeMenuData?.title.toLowerCase() || "services"}`,
    },
    company: { text: "Have a project in mind?", cta: "More about QueLogics" },
    hire: { text: "Need a full team, not just one role?", cta: "Build your team" },
  }[menuLayout];

  const openMenu = (menuTitle) => {
    if (activeMenu !== menuTitle) {
      setHoveredMenuLink(null);
      setActiveTab("Services");
    }
    window.clearTimeout(closeTimerRef.current);
    window.clearTimeout(clearMenuTimerRef.current);
    setActiveMenu(menuTitle);
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setHoveredMenuLink(null);
    window.clearTimeout(closeTimerRef.current);
    window.clearTimeout(clearMenuTimerRef.current);
    setMenuVisible(false);

    clearMenuTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 450);
  };

  const scheduleCloseMenu = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(closeMenu, 180);
  };

  const keepMenuOpen = () => {
    window.clearTimeout(closeTimerRef.current);
    window.clearTimeout(clearMenuTimerRef.current);
    if (activeMenu) setMenuVisible(true);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header
      className={`navbar${scrolledPastHero ? " is-scrolled" : ""}${projectStackActive ? " is-project-stack-active" : ""}${isHomePage ? "" : " navbar--dark-page"}`}
      onMouseEnter={keepMenuOpen}
      onMouseLeave={scheduleCloseMenu}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="QueLogics home">
          <span className="ql-navbar-brand-assets ql-brand-for-dark" aria-hidden="true">
            <img className="ql-brand-qmark" src="/assets/brand/quelogics-qmark-reversed.png" alt="" width="35" height="35" />
            <img className="ql-brand-wordmark" src="/assets/brand/quelogics-wordmark-reversed.png" alt="" width="136" height="35" />
          </span>
          <span className="ql-navbar-brand-assets ql-brand-for-light" aria-hidden="true">
            <img className="ql-brand-qmark" src="/assets/brand/quelogics-qmark.png" alt="" width="35" height="35" />
            <img className="ql-brand-wordmark" src="/assets/brand/quelogics-wordmark.png" alt="" width="136" height="35" />
          </span>
        </Link>

        <nav className="desktop-navigation">
          <ul className="nav-list">
            <li className="nav-item nav-home-item" onMouseEnter={closeMenu}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link nav-home-link${isActive ? " is-current" : ""}`
                }
                to="/"
                end
              >
                {t("Home")}
              </NavLink>
            </li>
            {desktopNavItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                openMenu={openMenu}
                closeMenu={closeMenu}
                isActive={
                  activeMenu === item.title && menuVisible
                }
              />
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="contact-link">
            <span>Contact</span>
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="icon-button"
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          <div className={`language-selector${languageOpen ? " is-open" : ""}`} ref={languageRef}>
            <button
              type="button"
              className="icon-button language-trigger"
              aria-label={`${t("Language")}: ${currentMarket.native}`}
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((isOpen) => !isOpen)}
            >
              <Globe size={19} />
              <span>{currentMarket.flag}</span>
            </button>

            <div className="language-popover" role="listbox" aria-label={t("Choose your market and language")}>
              <div className="language-popover-heading">
                <span>{t("Market & language")}</span>
                <small>{t("Choose your experience")}</small>
              </div>
              <div className="language-options">
                {marketOptions.map((option) => {
                  const isSelected = option.code === currentMarket.code;
                  return (
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      className={isSelected ? "is-selected" : ""}
                      onClick={() => {
                        setLocale(option.code);
                        setLanguageOpen(false);
                      }}
                      key={option.code}
                    >
                      <span className="language-flag" aria-hidden="true">{option.flag}</span>
                      <span className="language-option-copy">
                        <strong>{option.native}</strong>
                        <small>{option.market}</small>
                      </span>
                      {isSelected && <Check aria-hidden="true" />}
                    </button>
                  );
                })}
              </div>
              <p>{t("Your selection is saved for your next visit.")}</p>
            </div>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((isOpen) => !isOpen);
              setMobileSubmenu(null);
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <button
        className={`mobile-nav-backdrop${mobileOpen ? " is-open" : ""}`}
        type="button"
        aria-label="Close navigation"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={closeMobileMenu}
      />

      <nav
        className={`mobile-navigation${mobileOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <NavLink
          className={({ isActive }) =>
            `mobile-navigation-link mobile-home-link${isActive ? " is-current" : ""}`
          }
          to="/"
          end
          onClick={closeMobileMenu}
        >
          <span>{t("Home")}</span>
          <ArrowUpRight aria-hidden="true" />
        </NavLink>

        {mobileItems.map((item) => {
          const isExpanded = mobileSubmenu === item.title;
          const isOurServices = item.title === OUR_SERVICES;
          const mobileActive = isOurServices
            ? tabItems.find((tab) => tab.title === mobileTab) || tabItems[0]
            : item;

          return (
            <div
              className={`mobile-navigation-group${isExpanded ? " is-expanded" : ""}`}
              key={item.id}
            >
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() =>
                  setMobileSubmenu((current) =>
                    current === item.title ? null : item.title,
                  )
                }
              >
                <span>{item.title}</span>
                <ChevronDown aria-hidden="true" />
              </button>

              <div className="mobile-navigation-submenu">
                <div>
                  {isOurServices && (
                    <div className="mobile-tab-row" role="tablist">
                      {tabItems.map((tab) => (
                        <button
                          type="button"
                          role="tab"
                          aria-selected={tab.title === mobileActive.title}
                          className={`mobile-tab${tab.title === mobileActive.title ? " is-active" : ""}`}
                          onClick={() => setMobileTab(tab.title)}
                          key={tab.id}
                        >
                          {tab.title}
                        </button>
                      ))}
                    </div>
                  )}
                  {mobileActive.groups.map((group) => (
                    <section key={group.title}>
                      <h2>{group.title}</h2>
                      <div className="mobile-link-grid">
                        {group.links.map(([label, path]) => (
                          <Link className="mobile-link" to={path} onClick={closeMobileMenu} key={label}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    </section>
                  ))}
                  <Link
                    className="mobile-navigation-view-all"
                    to={mobileActive.path}
                    onClick={closeMobileMenu}
                  >
                    View all {mobileActive.title}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <NavLink
          className={({ isActive }) =>
            `mobile-navigation-link${isActive ? " is-current" : ""}`
          }
          to="/client-reviews"
          onClick={closeMobileMenu}
        >
          <span>Reviews</span>
          <ArrowUpRight aria-hidden="true" />
        </NavLink>
        <div className="mobile-navigation-actions">
          <Link className="mobile-contact-link" to="/contact" onClick={closeMobileMenu}>
            <span>Contact us</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </nav>

      {activeMenuData && (
        <div
          className={`mega-menu ${
            menuVisible ? "mega-menu-open" : "mega-menu-close"
          }`}
          onMouseEnter={keepMenuOpen}
          onMouseLeave={scheduleCloseMenu}
        >
          <div className="mega-menu-inner">
            <div
              className={`mega-menu-content mega-menu-layout mega-menu-layout--${menuLayout}`}
              key={activeMenu}
            >
              {showTabs && (
                <div className="mega-menu-tabs" role="tablist" aria-orientation="vertical">
                  {tabItems.map((tab) => {
                    const TabIcon = TAB_ICONS[tab.title] || Layers3;
                    const isTabActive = tab.title === activeMenuData.title;
                    const selectTab = () => {
                      setActiveTab(tab.title);
                      setHoveredMenuLink(null);
                    };

                    return (
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isTabActive}
                        className={`mega-menu-tab${isTabActive ? " is-active" : ""}`}
                        onMouseEnter={selectTab}
                        onFocus={selectTab}
                        onClick={selectTab}
                        key={tab.id}
                      >
                        <span className="mega-menu-tab-icon" aria-hidden="true">
                          <TabIcon size={16} strokeWidth={1.9} />
                        </span>
                        <span className="mega-menu-tab-label">{tab.title}</span>
                        <ChevronDown className="mega-menu-tab-arrow" size={15} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              )}

              <div
                className="mega-menu-tab-panel"
                key={activeMenuData.id}
                onMouseLeave={() => setHoveredMenuLink(null)}
              >
                <div
                  className="mega-menu-groups"
                  style={{ "--menu-cols": activeMenuData.groups.length }}
                >
                  {activeMenuData.groups.map((group) => (
                    <section className="mega-menu-group" data-group={group.title} key={group.title}>
                      <h3>{group.title}</h3>
                      <ul>
                        {group.links.map(([label, path]) => {
                          const labelKey = label.toLowerCase();
                          const brand = brandIcons[labelKey];
                          // Keep Hire Team's original technology logos and brand colours intact.
                          // All other mega-menu icons use the single QueLogics green.
                          const isHireTeam = menuLayout === "hire";
                          // Match only these 3 Hire-by-Role tiles; preserve all
                          // actual technology logos and every other Hire Team colour.
                          const accent = isHireTeam
                            ? (UNIFORM_HIRE_ROLE_ICONS.has(labelKey) ? "#10AC4F" : (brand ? brand.color : (accentColors[labelKey] || "#10AC4F")))
                            : "#10AC4F";
                          const MenuIcon = brand ? brand.Icon : getMenuIcon(labelKey);

                          return (
                            <li key={label}>
                              <Link
                                to={path}
                                onClick={closeMenu}
                                onMouseEnter={() => setHoveredMenuLink(path)}
                                onFocus={() => setHoveredMenuLink(path)}
                                className={hoveredMenuLink === path ? "is-service-hovered" : undefined}
                              >
                                <span
                                  className={`mega-menu-icon is-colored${brand && isHireTeam ? " is-brand" : ""}`}
                                  style={{ "--ic": accent, color: accent }}
                                  aria-hidden="true"
                                >
                                  {brand
                                    ? <MenuIcon size={16} />
                                    : <MenuIcon size={15} strokeWidth={1.8} />}
                                </span>
                                <span className="mega-menu-label">{label}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>

              {showTabs && (
                <aside
                  className="mega-menu-service-preview"
                  aria-label={`${activeMenuData.title} preview`}
                  aria-live="polite"
                >
                  {activePreview ? (
                    <div className="mega-menu-preview-content" key={hoveredMenuLink}>
                      <img
                        src={activePreview.image}
                        alt={`${activePreview.title} visual preview`}
                        width="720"
                        height="440"
                      />
                      <h3>{activePreview.title}</h3>
                      <p>{activePreview.description}</p>
                    </div>
                  ) : (
                    <div className="mega-menu-feature" key={activeMenuData.id}>
                      <span className="mega-menu-feature-eyebrow">{activeMenuData.title}</span>
                      <h3>{activeMenuData.menuTitle}</h3>
                      <p>{activeMenuData.description}</p>
                      <Link to={activeMenuData.path} onClick={closeMenu}>
                        Explore {activeMenuData.title.toLowerCase()}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </aside>
              )}

              {menuLayout === "company" && (
                <aside className="mega-menu-feature mega-menu-feature--promo">
                  <span className="mega-menu-feature-eyebrow">Work with QueLogics</span>
                  <h3>Let&apos;s build something useful together.</h3>
                  <p>
                    Tell us where your business is stuck. We&apos;ll start with the
                    problem and shape the right team around it.
                  </p>
                  <Link to="/contact" onClick={closeMenu}>
                    Start a project
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </aside>
              )}

              <div className="mega-menu-footer">
                <p>
                  <span>{footerCopy.text}</span>
                  <Link to="/contact" onClick={closeMenu}>Talk to an expert</Link>
                </p>
                <Link
                  className="mega-menu-services-all"
                  to={activeMenuData.path}
                  onClick={closeMenu}
                >
                  {footerCopy.cta}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;