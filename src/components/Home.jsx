// pages/Home.jsx
import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import SmoothContinuousCarousel from "./SmoothContinuousCarousel";
import SpeakerSection from "./SpeakerSection";
import { useLocation, useNavigate } from "react-router-dom";
import AboutSection from "./AboutSection";
import DeadlineTicker from "./DeadlineTicker";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const scrollToTarget = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          // clear state to avoid repeating scroll
          navigate(location.pathname, { replace: true, state: {} });
        } else {
          // keep checking until element exists (e.g. delayed render)
          setTimeout(scrollToTarget, 100);
        }
      };
      scrollToTarget();
    }
  }, [location, navigate]);

  return (
    <div>
      <main className="flex-1">
        <HeroSection />
      </main>
      <DeadlineTicker></DeadlineTicker>
      <section id="about">
        <AboutSection></AboutSection>
      </section>
      <section id="themes">
        <SmoothContinuousCarousel></SmoothContinuousCarousel>
      </section>
      <section id="events">{/* <Events></Events> */}</section>
      <div id="speakers">
        <SpeakerSection></SpeakerSection>
      </div>
    </div>
  );
};

export default Home;
