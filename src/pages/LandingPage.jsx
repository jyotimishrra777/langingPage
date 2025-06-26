import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/animation.css";
import UpdatedContactForm from "../components/UpdatedContactForm";
import Testomonial from "../components/Testomonial";
import Achievement from "../components/Achievement";

const LandingPage = () => {
  const heroParticlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  // const contactParticlesInit = async (engine) => {
  //   await loadFull(engine);
  // };

  return (
    <>
      {/* HERO SECTION */}
      <Navbar />
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

      {/* Contact form with text */}
      <div id="contact">
        <div className="contact-form">
          <UpdatedContactForm />
        </div>
      </div>
      <Testomonial />
      {/* <Achievement /> */}
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
