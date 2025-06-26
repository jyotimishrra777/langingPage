// ClientsSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Services from "./Services";

const clientLogos = [
  "https://theloops.io/wp-content/uploads/2025/04/New-SauceLab.svg",
  "https://theloops.io/wp-content/uploads/2024/06/GainsightLogo_Loopswebsite.svg",
  "https://theloops.io/wp-content/uploads/2023/09/Tricentis-1.webp",
  "https://theloops.io/wp-content/uploads/2024/10/Alation-Logo-Primary.svg",
  "https://theloops.io/wp-content/uploads/2024/10/koho.svg",
  "https://theloops.io/wp-content/uploads/2024/10/outreach_logo.svg",
  "https://theloops.io/wp-content/uploads/2023/07/Image-20.png",
  // Repeat if you want looping effect to look longer
];
const images = [
  {
    src: "/images/contactimg.jpg",
    title: "Hire Dedicated Developers",
    desc: "Our in-house and remote teams are available as per the client's time zone to ensure high-quality deliverables and timely results. ",
  },
  {
    src: "/images/ca.jpg",
    title: "Web Development",
    desc: "Elevate your online presence with our custom web solutions, blending creativity and functionality for a standout website that engages and converts.",
  },
  {
    src: "/images/cb.jpg",
    title: "Mobile App Development",
    desc: "Transform your ideas into user-friendly, scalable mobile applications with our expert team, ensuring a seamless user experience across platforms.",
  },
  {
    src: "/images/cc.jpg",
    title: "Software Development",
    desc: "From concept to deployment, we create robust, scalable software solutions catering to your business needs, ensuring efficiency and growth.",
  },
  {
    src: "/images/ccjpg",
    title: "Machine Learning",
    desc: "Harness the power of AI and machine learning to gain insights, automate processes, and drive innovation in your business operations.",
  },
  {
    src: "/images/cd.jpg",
    title: "Cloud Computing",
    desc: "Embrace the flexibility and scalability of cloud solutions for efficient data management, application hosting, and streamlined operations.",
  },
  {
    src: "/images/ce.jpg",
    title: "SAP Programing",
    desc: "In today’s fast-paced business world, robust systems for managing operations, finances, and resources are essential. As SAP programmers and consultants.",
  },
  {
    src: "/images/cf.jpg",
    title: "Product Development",
    desc: "With our globally recognized product development expertise turn your concepts into industry-leading software products. Benefit from custom, cutting-edge solutions. ",
  },
];

const Testomonial = () => {
  return (
    <section id="clients">
      <div className="clients-container">
        <div class="container ">
          <h2 className=" fw-bold text-center  contact-title">
            Trusted by the world’s leading IT companies
          </h2>
        </div>
        <div className="clients-slider-container" style={{ padding: "40px 0" }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width="130"
                  height="35"
                  style={{
                    display: "block",
                    margin: "auto",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="achievement-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="text-center z-2">
              <h2 className="services-title fw-bold mb-3">
                Ecode Dash Provides the{" "}
                <span className="services-text">IT Services</span>
              </h2>
              <p className="text-dark para">
                Ecode Dash is Enterprise Grade Ready. We prioritize secure
                technologies, thorough operations, and external audits to ensure
                our systems and processes are at their best.
              </p>
            </div>
          </div>

          {/* Responsive Image Grid */}
        </div>
      </div>
      <Services />
    </section>
  );
};

export default Testomonial;
