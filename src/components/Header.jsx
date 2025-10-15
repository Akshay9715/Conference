// components/Header.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      // Already on home: scroll immediately
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home and tell it what to scroll to
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    //fixed
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_330)">
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_330">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
              {/* <img
                src="General/logo.png"
                alt="nitrkl logo"
                className="w-1/16 h-full object-contain"
              /> */}
              <span className="text-text-light dark:text-text-dark text-lg font-bold">
                Bioengineering 2025
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink
              key="home"
              to={`/`}
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent text-sm font-medium hover:text-gray-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              key="about"
              to={`/about`}
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent text-sm font-medium hover:text-gray-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
            <button
              onClick={() => scrollToSection("themes")}
              className={`text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent text-sm font-medium hover:text-gray-300
                `}
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className={`text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent text-sm font-medium hover:text-gray-300
                `}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className={`text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent text-sm font-medium hover:text-gray-300
                `}
            >
              Speakers
            </button>
            <NavLink
              key="registration"
              to={`/registration`}
              className={({ isActive }) =>
                `text-text-light dark:text-text-dark hover:text-accent dark:hover:text-accent text-sm font-medium hover:text-gray-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              Registration
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-text-light dark:text-text-dark">
              <span className="material-symbols-outlined"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
