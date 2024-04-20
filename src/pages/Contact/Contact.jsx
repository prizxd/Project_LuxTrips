import React from "react";
import "./contact.scss";
export default function Contact() {
  return (
    <div className="ContactPage">
      <h1 className="contacth1">Don't miss a chance to talk with us</h1>
      <div className="contacts">
        <div className="phone same">
          <h4 className="option">Phone</h4>
          <h2 className="p-number">+41 (078) 205 83 88</h2>
          <h4 className="option extra">OR</h4>
          <button className="call-back">CALL ME BACK</button>
        </div>
        <div className="adress same">
          <h4 className="option">Address</h4>
          <h2 className="adress-h2">Via Peri 17, 6900 Lugano, Switzerland</h2>
          <h4 className="option extra">Email</h4>p
          <h4 className="option">luxtra.travel@gmail.com</h4>
        </div>
      </div>
      <img src="/map.png" alt="" className="map" />
      <div className="footer">
        <img src="/logo.png" alt="" className="logoFoot" />
        <nav>
          <li className="all">LUXURY PACKAGES</li>
          <li className="all">BOOK WITH US</li>
          <li className="all callBack">
            <img src="/call.png" alt="" />
          </li>
          <li className="all">WHY LUX TRIPS</li>
          <li className="all">CONTACT</li>
        </nav>
        <div className="lastItems">
          <h4 className="rights">© 2021 All Rights Reserved | Luxtrips</h4>
          <h4 className="rights">Company Site | Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
}
