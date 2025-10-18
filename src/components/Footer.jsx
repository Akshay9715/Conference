import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-display">
      <div className="container mx-auto px-6 py-12">
        {/* Main grid section */}
        <div className="flex gap-10 text-[14px] sm:flex justify-between sm:px-16 sm:text-[16px]">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Bioengineering Conference 2025
            </h3>
            <p className="text-gray-300">NIT Rourkela, Odisha, India</p>
          </div>

          {/* Middle Section - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:register.nbc.2025@gmail.com"
                className="text-gray-400 hover:text-accent flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-accent text-sky-500">
                  email
                </span>
                <span>register.nbc.2025@gmail.com</span>
              </a>
              <a
                href="mailto:author.nbc.2025@gmail.com"
                className="text-gray-400 hover:text-accent flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-accent text-sky-500">
                  email
                </span>
                <span>author.nbc.2025@gmail.com</span>
              </a>
              <a
                href="tel:+918105648520"
                className="text-gray-400 hover:text-accent flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-accent text-sky-500">
                  call
                </span>
                <span>+91 81056 48520</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 sm:flex justify-between">
          <p>© Bioengineering Conference 2025. All rights reserved.</p>
          {/* Right Section - Developer Info */}
          <div className="md:text-right">
            <div className="flex justify-center mt-2 sm:items-center md:justify-end gap-2 text-gray-100">
              <p className="text-sm">Developed by</p>
              <span className="text-sm">Akshay ❤️</span>
              <a
                href="https://github.com/Akshay9715"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 
                    2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 
                    0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343
                    -.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 
                    1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 
                    2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113
                    -4.555-4.951 0-1.093.39-1.988 1.031-2.688
                    -.103-.253-.446-1.272.098-2.65 0 0 
                    .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
                    c.85.004 1.705.115 2.504.337 
                    1.909-1.296 2.747-1.027 2.747-1.027
                    .546 1.379.203 2.398.1 2.651.64.7 
                    1.03 1.595 1.03 2.688 0 3.848-2.338 
                    4.695-4.566 4.943.359.309.678.92.678 
                    1.855 0 1.338-.012 2.419-.012 2.747 
                    0 .268.18.58.688.482A10.001 10.001 0 
                    0022 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
