import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/animation.css";
import UpdatedContactForm from "../components/Contact";
import Testomonial from "../components/Testomonial";
import Services from "../components/Services";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const heroParticlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <>
      {/* HERO SECTION */}
      <Navbar />
      <ScrollToTopButton />

      <div className="hero">
        <Particles
          id="tsparticles-hero"
          init={heroParticlesInit}
          options={{
            preset: "links",
            background: {
              color: { value: "transparent" },
            },
          }}
        />

        <div className="landing-content px-3 text-white container">
          <h1 className="display-4 fw-bold ">
            Your Ultimate IT Outsourcing Partner for Growth Acceleration
          </h1>
          {/* <div className="waviy">
            <span style={{ "--i": "1" }}>E</span>
            <span style={{ "--i": "2" }}>C</span>
            <span style={{ "--i": "3" }}>O</span>
            <span style={{ "--i": "4" }}>D</span>
            <span style={{ "--i": "5" }}>E</span>
            <span style={{ "--i": "6" }}>&nbsp; </span>
            <span style={{ "--i": "7" }}>D</span>
            <span style={{ "--i": "8" }}>A</span>
            <span style={{ "--i": "9" }}>S</span>
            <span style={{ "--i": "10" }}>H</span>
          </div> */}

          <p className=" cursor typewriter-animation fw-bold  mt-3">
            Let's connect with us and Grow Together
          </p>

          <Link to="/">
            <button className="common-btn get-btn fw-bold px-4 py-2">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <section id="about" className="section">
        <Testomonial />
      </section>
      <section id="services" className="section">
        <Services />
      </section>
      <section id="contact" className="contact-form section ">
        <UpdatedContactForm />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
