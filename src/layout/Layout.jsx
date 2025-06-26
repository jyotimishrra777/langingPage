import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
