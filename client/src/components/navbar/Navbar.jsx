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
} from "lucide-react";

import NavItem from "./NavItem";
import { navigationLinks } from "../../data/navbarData";
import { marketOptions, useLanguage } from "../../i18n/LanguageContext";
import "./navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
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
      setScrolledPastHero(hero
        ? hero.getBoundingClientRect().bottom <= 82
        : window.scrollY > 24);
    };

    updateNavbarTheme();
    window.addEventListener("scroll", updateNavbarTheme, { passive: true });
    window.addEventListener("resize", updateNavbarTheme);
    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  const activeMenuData = navigationLinks.find(
    (item) => item.title === activeMenu,
  );

  const openMenu = (menuTitle) => {
    window.clearTimeout(closeTimerRef.current);
    window.clearTimeout(clearMenuTimerRef.current);
    setActiveMenu(menuTitle);
    setMenuVisible(true);
  };

  const closeMenu = () => {
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
      className={`navbar${scrolledPastHero ? " is-scrolled" : ""}${isHomePage ? "" : " navbar--dark-page"}`}
      onMouseEnter={keepMenuOpen}
      onMouseLeave={scheduleCloseMenu}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="QueLogics home">
          <span className="navbar-logo-mark"><i /></span>
          <span>Que<span>Logics</span></span>
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
            {navigationLinks.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                openMenu={openMenu}
                isActive={
                  activeMenu === item.title && menuVisible
                }
              />
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/careers" className="action-link">
            Careers
          </Link>

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

        {navigationLinks.map((item) => {
          if (!item.hasDropdown) {
            return (
              <NavLink
                className={({ isActive }) => `mobile-navigation-link${item.title === "About" ? " mobile-about-link" : ""}${isActive ? " is-current" : ""}`}
                to={item.path}
                onClick={closeMobileMenu}
                key={item.id}
              >
                <span>{item.title}</span>
                <ArrowUpRight aria-hidden="true" />
              </NavLink>
            );
          }

          const isExpanded = mobileSubmenu === item.title;

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
                  {item.groups.map((group) => (
                    <section key={group.title}>
                      <h2>{group.title}</h2>
                      {group.links.map(([label, path]) => (
                        <Link to={path} onClick={closeMobileMenu} key={label}>
                          {label}
                        </Link>
                      ))}
                    </section>
                  ))}
                  <Link
                    className="mobile-navigation-view-all"
                    to={item.path}
                    onClick={closeMobileMenu}
                  >
                    View all {item.title}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mobile-navigation-actions">
          <Link to="/careers" onClick={closeMobileMenu}>Careers</Link>
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
            <div className="mega-menu-content" key={activeMenuData.id}>
              <div className="mega-menu-overview">
                <span>Explore {activeMenuData.title}</span>
                <h2>{activeMenuData.menuTitle}</h2>
                <p>{activeMenuData.description}</p>
                <Link to={activeMenuData.path} onClick={closeMenu}>
                  View all {activeMenuData.title}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>

              <div className="mega-menu-groups">
                {activeMenuData.groups.map((group) => (
                  <section className="mega-menu-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.links.map(([label, path]) => (
                        <li key={label}>
                          <Link to={path} onClick={closeMenu}>
                            <span>{label}</span>
                            <ArrowUpRight aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
