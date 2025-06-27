import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/style1.css";
import { Link } from "react-router-dom";
import ContactButton from "./contactButton";
const Navbar = () => {
  return (
    <nav className="header sticky-navbar navbar navbar-expand-lg navbar-dark sticky-top  w-100  ">
      <div className="container">
        <Link className="logo navbar-brand fw-bold text-dark" to="/">
          <img src="/langingPage/images/ecodelogo.png" alt="Logo" />
        </Link>

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
              <Link className="links nav-link active   fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="links nav-link fw-bold" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="links nav-link  fw-bold" to="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="links nav-link  fw-bold" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="links nav-link  fw-bold" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="d-none d-lg-block">
          <button className="common-btn contact-btn fw-bold px-4 py-2 ">
            Connect with us
          </button>
        </div> */}
        <ContactButton textData="Contact us" />
      </div>
    </nav>
  );
};

export default Navbar;
