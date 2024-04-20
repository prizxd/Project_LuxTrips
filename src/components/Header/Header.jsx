import React from "react";
import "./header.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function header() {
  return (
    <header>
      <div className="navigation">
        <img src="/logo.svg" alt="" className="Logo" />
        <div className="Menu">
          <Link to="/" className="Home">
            Home
          </Link>
          <Link to="/" className="LuxuryPackages">
            Luxury packages
          </Link>
          <Link to="/Book" className="BookWithUs">
            Book with us
          </Link>
          <Link to="/WhyLuxTrips" className="WhyLuxTrips">
            {/*в процессе переноса*/}
            Why Lux Trips
          </Link>
          <Link to="/Contact" className="Contact">
            Contact
          </Link>
          <Link to="/" className="ClientArea">
            Client Area
          </Link>
        </div>
        <button className="ButtonCallMe">CALL ON ME BACK</button>
      </div>
    </header>
  );
}
