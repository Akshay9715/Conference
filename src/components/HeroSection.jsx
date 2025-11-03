// components/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registration");
  };

  return (
    // m-16
    <div
      className="
    relative w-full h-[calc(92vh-4rem)]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhCgsGWurMxVoceSxiyUZE6eriPkKKfyUpW9Dc8AFE--RofpqzD8moNns4CEs8SQIVU4MoiV0_bcDSrzbqArkboIAo2c4EsyNolUnoPTDSwGZ_pzDscrkPZujFbW1PWNtWoh4nVsUv7vKtt1lSQ3EOIDcZ-FvhWOvYPvRoEUUnCrLM0Yw-FIeUnVjWdhkNYftHqJSFCVry71TMwVPFbh05bdYHNN8WPA-HL3qa7Sh3lNt81qiih-INGrwi2ESbRdBBM8ld0C5DSn0")',
        }}
        data-alt="A close-up high-resolution image of a 3D bioprinting scaffold."
      ></div>
      {/* public\General\hero_second.png
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("public/General/hero_second.png")',
        }}
        data-alt="A close-up high-resolution image of a 3D bioprinting scaffold."
      ></div> */}
      {/* Gradient Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,61,145,0.9), rgba(11,61,145,0.5), transparent)",
        }}
      ></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl uppercase">
            National Bioengineering Conference 2025
          </h1>
          <h1 className="mt-6 text-2xl font-semibold md:text-3xl">
            Theme: Translation of Bioengineering Research for Healthcare and
            Society
          </h1>
          <h2 className="mt-4 text-lg font-medium md:text-xl">
            11<sup>th</sup>– 13<sup>th</sup>December 2025 NIT Rourkela
          </h2>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button
              onClick={handleClick}
              className="w-full sm:w-auto flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background-dark transition-colors
             border-2 p-2 bg-blue-900 border-blue-900
            "
            >
              <span className="truncate ">Register Now</span>
            </button>
            <a href="https://forms.gle/A4ddYGF7XpiNUzT49" target="_blank">
              <button className="w-full sm:w-auto flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/20 text-white text-base font-bold leading-normal tracking-wide backdrop-blur-sm hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background-dark transition-colors">
                <span className="truncate">Submit Abstract</span>
              </button>
            </a>

            {/* QR Code */}
            <div
              className=" bg-blue-500w-full sm:w-auto flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background-dark transition-colors
             border-2 p-2 bg-blue-900 border-blue-900 "
            >
              <a
                href="General/NBCBrochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
