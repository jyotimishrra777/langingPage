import React from "react";

const ContactButton = ({ textData }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        <button className="common-btn contact-btn fw-bold px-4 py-2 ">
          {textData}
        </button>
      </div>
    </>
  );
};

export default ContactButton;
