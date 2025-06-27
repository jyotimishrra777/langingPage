// ClientsSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  "https://theloops.io/wp-content/uploads/2025/04/New-SauceLab.svg",
  "https://theloops.io/wp-content/uploads/2024/06/GainsightLogo_Loopswebsite.svg",
  "https://theloops.io/wp-content/uploads/2023/09/Tricentis-1.webp",
  "https://theloops.io/wp-content/uploads/2024/10/Alation-Logo-Primary.svg",
  "https://theloops.io/wp-content/uploads/2024/10/koho.svg",
  "https://theloops.io/wp-content/uploads/2024/10/outreach_logo.svg",
  "https://theloops.io/wp-content/uploads/2023/07/Image-20.png",
];

const Testomonial = () => {
  return (
    <section id="clients">
      <div className="clients-container">
        <div class="container ">
          <h2 className="mb-5 fw-bold text-center  contact-title">
            Trusted by the world’s leading IT companies
          </h2>
        </div>
        <div className="clients-slider-container" style={{ padding: "40px 0" }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
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
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
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
    </section>
  );
};

export default Testomonial;
