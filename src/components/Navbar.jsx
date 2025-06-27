import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/style1.css";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ContactButton from "./contactButton";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="header sticky-navbar navbar navbar-expand-lg navbar-dark sticky-top w-100">
      <div className="container">
        <span
          className="logo navbar-brand fw-bold text-dark"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.location.href = "/";
            }
          }}
        >
          <img src="/nfc-landingPage/images/ecodelogo.png" alt="Logo" />
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <Link
                to="#"
                className="links nav-link fw-bold"
                onClick={() => {
                  if (isHome) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    window.location.href = "/";
                  }
                }}
              >
                Home
              </Link>
            </li>

            {isHome ? (
              <>
                <li className="nav-item">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="links nav-link fw-bold"
                    role="button"
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="links nav-link fw-bold"
                    role="button"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="links nav-link fw-bold"
                    role="button"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="links nav-link fw-bold" to="/#about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links nav-link fw-bold" to="/#services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links nav-link fw-bold" to="/#contact">
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <ContactButton textData="Contact us" />
      </div>
    </nav>
  );
};

export default Navbar;
