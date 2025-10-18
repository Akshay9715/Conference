import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setMenuOpen(false); // close menu after click on mobile
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="General/whitelogo.png" alt="logo" className="w-16" />
            <span className="text-text-light dark:text-text-dark text-xl sm:text-2xl md:text-3xl font-bold break-words text-center block">
              National Bioengineering Conference 2025
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent text-sm font-medium ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
            <button
              onClick={() => scrollToSection("about")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("themes")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Speakers
            </button>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent text-sm font-medium ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Registration
            </NavLink>
            <NavLink
              to="/committee"
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent text-sm font-medium ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Committee
            </NavLink>
            <NavLink
              to="/places"
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent text-sm font-medium ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Places
            </NavLink>
            <NavLink
              to="/accommodation"
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent text-sm font-medium ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Accommodation
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-text-light dark:text-text-dark focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Home
            </NavLink>
            <button
              onClick={() => scrollToSection("about")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("themes")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Speakers
            </button>
            <NavLink
              to="/registration"
              onClick={() => setMenuOpen(false)}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Registration
            </NavLink>
            <NavLink
              to="/committee"
              onClick={() => setMenuOpen(false)}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Committee
            </NavLink>
            <NavLink
              to="/places"
              onClick={() => setMenuOpen(false)}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Places
            </NavLink>
            <NavLink
              to="/accommodation"
              onClick={() => setMenuOpen(false)}
              className="text-text-light dark:text-text-dark hover:text-accent text-sm font-medium"
            >
              Accommodation
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
