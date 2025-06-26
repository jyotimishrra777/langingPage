import React from "react";

const images = [
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
  "/images/contactimg.jpg",
];

const Achievement = () => {
  return (
    <div className="achievement-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="services-title fw-bold mb-3">
              Ecode Dash Provides the{" "}
              <span className="services-text">IT Services</span>
            </h2>
            <p className="text-muted">
              TheLoops is Enterprise Grade Ready. We prioritize secure
              technologies, thorough operations, and external audits to ensure
              our systems and processes are at their best.
            </p>
          </div>
        </div>

        {/* Responsive Image Grid */}
        <div className="row g-4 justify-content-center">
          {images.map((src, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 d-flex align-items-center justify-content-center"
            >
              <img
                src={src}
                alt={`Achievement ${index + 1}`}
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
