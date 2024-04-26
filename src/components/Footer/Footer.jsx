import React from "react";
import "./footer.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <img src="/bg_footer.jpg" alt="" className="bg-footer" />
      <div className="logo-div">
        <img src="/logo.svg" alt="" className="logo" />
      </div>
      <div className="Menu">
        <Link to="/" className="LuxuryPackages">
          Luxury packages
        </Link>
        <Link to="/Book" className="BookWithUs">
          Book with us
        </Link>
        <button className="ButtonCallMe">CALL ON ME BACK</button>
        <Link to="/" className="WhyLuxTrips">
          Why Lux Trips
        </Link>
        <Link to="/Contact" className="Contact">
          Contact
        </Link>
      </div>
    </footer>
  );
  // in progress
}
