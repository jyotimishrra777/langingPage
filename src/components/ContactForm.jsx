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
});

const ContactForm = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
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

    if (name === "mobile" || name === "alternateMobile") {
      filteredValue = value.replace(/\D/g, "");
    } else if (name === "fullName") {
      filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormValues((prev) => ({ ...prev, [name]: filteredValue }));

    if (["fullName", "email", "mobile"].includes(name)) {
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
    <section className="section">
      <div className="container application-form">
        <h1 className=" fw-bold text-center mb-5  contact-title">Contact Us</h1>
        <div className="row align-items-stretch mb-3 d-flex">
          <div className="col-md-6 contactImage d-flex align-items-center mt-5">
            <img
              src="/images/contactimg.jpg"
              alt="err"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-6 d-flex  align-items-center mt-5">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-100 p-5 contact-form-container "
            >
              {successMsg && (
                <div className="alert alert-success w-100 text-center fw-semibold mb-4">
                  {successMsg}
                </div>
              )}
              <div className=" mb-3">
                <label className="form-label ">
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
                  placeholder="Full name "
                />
                {errors.fullName && (
                  <div className="invalid-feedback">{errors.fullName}</div>
                )}
              </div>

              <div className=" mb-3">
                <label className="form-label ">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Email "
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className=" mb-3">
                <label className="form-label ">
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

              <button
                type="submit"
                className="common-btn contact-btn fw-bold px-4 py-2"
              >
                Send Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
