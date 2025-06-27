import React from "react";

const ContactButton = ({ textData }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        <button className="common-btn contact-btn  px-4 py-1 ">
          {textData}
        </button>
      </div>
    </>
  );
};

export default ContactButton;
