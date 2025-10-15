import React from "react";

const Footer = () => {
  //    border-t-2 border-black

  return (
    <div>
      <footer
        className="bg-blue-500
  
      
      text-white"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold">
                Bioengineering Conference 2025
              </h3>
              <p className="mt-2 text-sm">NIT Rourkela, Odisha, India</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p className="mt-2 text-sm">Email: contact@bioeng2025.com</p>
              <p className="text-sm">Phone: +91 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a className="text-white hover:text-accent" href="#">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    ></path>
                  </svg>
                </a>
                <a className="text-white hover:text-accent" href="#">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a className="text-white hover:text-accent" href="#">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12.011c0 4.432 2.865 8.169 6.838 9.492.5.092.682-.217.682-.482 0-.237-.009-1.02-.014-1.845-2.782.602-3.369-1.203-3.369-1.203-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.524 2.341 1.084 2.91.829.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.111-4.555-4.931 0-1.088.39-1.979 1.03-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.269 2.75 1.025A9.547 9.547 0 0112 6.835a9.547 9.547 0 012.505.336c1.909-1.294 2.748-1.025 2.748-1.025.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.337 4.678-4.566 4.922.359.308.678.917.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.481A10.002 10.002 0 0022 12.011C22 6.477 17.523 2 12 2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm">
            <p>© 2024 Bioengineering Conference 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
