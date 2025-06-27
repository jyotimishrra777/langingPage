import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import "../styles/style2.css";

const Footer = () => {
  const achievementImages = [
    "https://www.ecodedash.com/img/footer/cmmilevel3.png",
    "https://www.ecodedash.com/img/footer/iso.png",
    "https://www.ecodedash.com/img/footer/frame-1.png",
    "https://www.ecodedash.com/img/footer/frame-2.png",
  ];

  return (
    <footer className="footer-section  text-dark pt-5">
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
            <p className="mb-0 fs-5">
              Shivalik Satyamev, 601, T Junction, near Vakil Saheb Bridge, South
              Bopal, Ambli, Ahmedabad, Gujarat <br /> 380058
            </p>
            {/* Social Links */}
            <div className="social-icons mt-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark me-4 fs-5"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark me-4 fs-5"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark me-4 fs-5"
              >
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark me-4 fs-5"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark me-4 fs-5"
              >
                <i className="bi bi-github"></i>
              </Link>
              <Link
                href="https://git.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark me-4 fs-5"
              >
                <i className="bi bi-git"></i>
              </Link>
            </div>
          </div>

          {/* Right Section - Achievements */}
          <div className="col-md-8">
            <h2 className="services-title fw-bold mb-3 text-center text-md-start">
              Our Achievements
            </h2>
            <div className="achievement-grid row g-3 justify-content-start">
              {achievementImages.map((img, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-2">
                  <div className="achievement-img-wrapper">
                    <img
                      src={img}
                      alt={`Achievement ${index + 1}`}
                      className="img-fluid "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Bottom copyright */}
        <div className="fs-6 text-center mt-4 pt-3 border-top border-secondary ">
          &copy; {new Date().getFullYear()} Ecode Dash Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
