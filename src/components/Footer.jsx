import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import "../styles/style2.css";

const Footer = () => {
  // Dummy achievements image URLs
  const achievementImages = [
    "/langingPage/images/ca.jpg",
    "/langingPage/images/cb.jpg",
    "/langingPage/images/cc.jpg",
    "/langingPage/images/cd.jpg",
    "/langingPage/images/ce.jpg",
  ];

  return (
    <footer className="footer-section  text-white pt-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Section */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="/langingPage/images/ecodelogo.png"
              alt="Company Logo"
              className="footer-logo mb-3"
            />
            <p className="mb-1 fs-5 fw-bold">Ecode Dash Pvt Ltd</p>
            <p className="mb-0 ">
              Shivalik Satyamev, 601, T Junction, near Vakil Saheb Bridge, South
              Bopal, Ambli, Ahmedabad, Gujarat <br /> 380058
            </p>
            {/* Social Links */}
            <div className="social-icons mt-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3 fs-5"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3 fs-5"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3 fs-5"
              >
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-5"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>

          {/* Right Section - Achievements */}
          <div className="col-md-8">
            <h3 className="fw-bold mb-3 text-center text-md-start">
              Our Achievements
            </h3>
            <div className="achievement-grid row g-3 justify-content-start">
              {achievementImages.map((img, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-2">
                  <div className="achievement-img-wrapper">
                    <img
                      src={img}
                      alt={`Achievement ${index + 1}`}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Bottom copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary small">
          &copy; {new Date().getFullYear()} Ecode Dash Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
