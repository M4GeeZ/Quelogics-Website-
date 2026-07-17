import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Globe,
  Menu,
  ArrowUpRight,
  X,
} from "lucide-react";

import NavItem from "./NavItem";
import { navigationLinks } from "../../data/navbarData";
import "./navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMenu = (menuTitle) => {
    setActiveMenu(menuTitle);
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);

    setTimeout(() => {
      setActiveMenu(null);
    }, 450);
  };

  return (
    <header
      className="navbar"
      onMouseLeave={closeMenu}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          QUELOGICS
        </Link>

        <nav className="desktop-navigation">
          <ul className="nav-list">
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
            Contact
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="icon-button"
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            className="icon-button"
            aria-label="Language"
          >
            <Globe size={19} />
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((isOpen) => !isOpen)}
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
        onClick={() => setMobileOpen(false)}
      />

      <nav
        className={`mobile-navigation${mobileOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {navigationLinks.map((item) => (
          <Link to={item.path} onClick={() => setMobileOpen(false)} key={item.id}>
            <span>{item.title}</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        ))}
        <div className="mobile-navigation-actions">
          <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact us</Link>
        </div>
      </nav>

      {activeMenu && (
        <div
          className={`mega-menu ${
            menuVisible ? "mega-menu-open" : "mega-menu-close"
          }`}
          onMouseEnter={() => setMenuVisible(true)}
        >
          <div className="mega-menu-inner">
            <div className="mega-menu-content">
              <h2>{activeMenu}</h2>

              <p>
                Mega menu content yahan add hoga.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
