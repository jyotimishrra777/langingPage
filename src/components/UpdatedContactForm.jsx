import React, { useState } from "react";
import * as Yup from "yup";

// Yup schema for required fields only
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Only alphabets are allowed")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Mobile number is required"),
  company: Yup.string().required("Company name is required"),
});

const UpdatedContactForm = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = async (fieldName, value) => {
    try {
      await Yup.reach(validationSchema, fieldName).validate(value);
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [fieldName]: err.message }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let filteredValue = value;

    if (name === "mobile") {
      filteredValue = value.replace(/\D/g, "");
    } else if (name === "fullName") {
      filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormValues((prev) => ({ ...prev, [name]: filteredValue }));

    if (["fullName", "email", "mobile", "company"].includes(name)) {
      validateField(name, filteredValue);
    }
  };

  const handleSubmit = async (e) => {
    setSuccessMsg("");
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});

      console.log("Submitted data:", formValues);
      localStorage.setItem("ContactDetails", JSON.stringify(formValues));
      setSuccessMsg("Form is submitted successfully !");
      setFormValues({
        fullName: "",
        email: "",
        mobile: "",
        company: "",
        message: "",
      });
      setTimeout(() => {
        setSuccessMsg("");
      }, 10000);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      setSuccessMsg("");
    }
  };

  return (
    // <section className="section">
    //   <div className="container application-form">
    //     <h2 className=" fw-bold text-center mb-5 contact-title">Contact Us</h2>

    //     <div className="row gx-4 gy-5 align-items-stretch">
    //       {/* Left content */}
    //       <div className="col-lg-6 px-3">
    //         <div className="contactContent p-4 d-flex justify-content-center flex-column align-items-start h-100">
    //           <h3 className="fw-bold">
    //             Break the Cycle of Costly, Ineffective Support Operations
    //           </h3>
    //           <p className="para">
    //             In this 30-minute call, we’ll first understand the challenges
    //             your team is currently facing and then proceed with the best
    //             course of action.
    //           </p>
    //           <h5>Our experts will:</h5>
    //           <ul>
    //             <li>Listen to your current CX pain points and goals</li>
    //             <li>
    //               Demonstrate how TheLoops can help you overcome specific
    //               challenges by replacing ineffective, manual tasks and
    //               processes
    //             </li>
    //             <li>
    //               Answer any questions you have about our platform, integrations
    //               and capabilities
    //             </li>
    //             <li>
    //               Demonstrate how TheLoops can help you overcome specific
    //               challenges by replacing ineffective, manual tasks and
    //               processes
    //             </li>
    //             <li>
    //               Answer any questions you have about our platform, integrations
    //               and capabilities
    //             </li>
    //           </ul>
    //           <h5>Book a call now to learn more.</h5>
    //         </div>
    //       </div>

    //       {/* Right form */}
    //       <div className="col-lg-6 px-3">
    //         <form
    //           onSubmit={handleSubmit}
    //           noValidate
    //           className="w-100  contact-form-container "
    //         >
    //           {successMsg && (
    //             <div className="alert alert-success w-100 text-center fw-semibold mb-4">
    //               {successMsg}
    //             </div>
    //           )}

    //           {/* Full Name */}
    //           <div className="mb-2">
    //             <label className="form-label">
    //               Full Name <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="fullName"
    //               className={`form-control ${
    //                 errors.fullName ? "is-invalid" : ""
    //               }`}
    //               value={formValues.fullName}
    //               onChange={handleChange}
    //               placeholder="Full name"
    //             />
    //             {errors.fullName && (
    //               <div className="invalid-feedback">{errors.fullName}</div>
    //             )}
    //           </div>

    //           {/* Email */}
    //           <div className="mb-2">
    //             <label className="form-label">
    //               Email Address <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               className={`form-control ${errors.email ? "is-invalid" : ""}`}
    //               value={formValues.email}
    //               onChange={handleChange}
    //               placeholder="Email"
    //             />
    //             {errors.email && (
    //               <div className="invalid-feedback">{errors.email}</div>
    //             )}
    //           </div>

    //           {/* Mobile */}
    //           <div className="mb-2">
    //             <label className="form-label">
    //               Mobile Number <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="mobile"
    //               maxLength={10}
    //               className={`form-control ${
    //                 errors.mobile ? "is-invalid" : ""
    //               }`}
    //               value={formValues.mobile}
    //               onChange={handleChange}
    //               placeholder="Mobile number"
    //             />
    //             {errors.mobile && (
    //               <div className="invalid-feedback">{errors.mobile}</div>
    //             )}
    //           </div>
    //           {/* Company */}
    //           <div className="mb-2">
    //             <label className="form-label">
    //               Company Name <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="company"
    //               className={`form-control ${
    //                 errors.company ? "is-invalid" : ""
    //               }`}
    //               value={formValues.company}
    //               onChange={handleChange}
    //               placeholder="Company name"
    //             />
    //             {errors.company && (
    //               <div className="invalid-feedback">{errors.company}</div>
    //             )}
    //           </div>
    //           {/* Message */}
    //           <div className="mb-2">
    //             <label className="form-label">
    //               Message <span className="text-danger"></span>
    //             </label>
    //             <textarea
    //               rows={3}
    //               type="text"
    //               name="message"
    //               className={`form-control ${
    //                 errors.message ? "is-invalid" : ""
    //               }`}
    //               value={formValues.message}
    //               onChange={handleChange}
    //               placeholder="Enter your message"
    //             />
    //           </div>

    //           {/* Submit Button */}
    //           <button
    //             type="submit"
    //             className="common-btn contact-btn fw-bold px-4 py-2"
    //           >
    //             Send Application
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 left_content">
          <h1 class="h1-title mb-4">
            Break the Cycle of Costly, Ineffective Support Operations
          </h1>
          <div class="content get_a_demo_1">
            <p>
              In this 30-minute call, we’ll first understand the challenges your
              team is currently facing and then proceed with the best course of
              action.
            </p>
            <p>Our experts will:</p>
            <ul>
              <li className="mb-2">
                Listen to your current CX pain points and goals
              </li>
              <li className="mb-2">
                Demonstrate how TheLoops can help you overcome specific
                challenges by replacing ineffective, manual tasks and processes
              </li>
              <li className="mb-2">
                Answer any questions you have about our platform, integrations
                and capabilities
              </li>
              <li className="mb-2">
                Demonstrate how TheLoops can help you overcome specific
                challenges by replacing ineffective, manual tasks and processes
              </li>
            </ul>
            <p>
              <strong>Book a call now to learn more.</strong>
            </p>
          </div>
          <div class="percentage_info"></div>
          <div class="Logos_info">
            <div class="row mar-b-3"></div>
          </div>
        </div>
        <div class="col-12 col-md-6 right_content">
          <div class="form_section">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-100  contact-form-container "
            >
              {successMsg && (
                <div className="alert alert-success w-100 text-center fw-semibold mb-4">
                  {successMsg}
                </div>
              )}

              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className={`form-control ${
                    errors.fullName ? "is-invalid" : ""
                  }`}
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                />
                {errors.fullName && (
                  <div className="invalid-feedback">{errors.fullName}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label className="form-label">
                  Mobile Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="mobile"
                  maxLength={10}
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  value={formValues.mobile}
                  onChange={handleChange}
                  placeholder="Mobile number"
                />
                {errors.mobile && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>
              {/* Company */}
              <div className="mb-3">
                <label className="form-label">
                  Company Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  className={`form-control ${
                    errors.company ? "is-invalid" : ""
                  }`}
                  value={formValues.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
                {errors.company && (
                  <div className="invalid-feedback">{errors.company}</div>
                )}
              </div>
              {/* Message */}
              <div className="mb-3">
                <label className="form-label">
                  Message <span className="text-danger"></span>
                </label>
                <textarea
                  rows={2}
                  type="text"
                  name="message"
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="common-btn contact-btn  w-100 fw-bold fs-5 px-4 py-2 rounded"
              >
                Send Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedContactForm;
