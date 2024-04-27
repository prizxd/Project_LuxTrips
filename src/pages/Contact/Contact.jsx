import React from "react";
import "./contact.scss";
export default function Contact() {
  return (
    <main>
      <div className="ContactPage">
        <img src="/header.png" alt="" className="header-img" />{" "}
        <div className="empty-div"></div>
        <div className="contact-h1-div">
          <h1 className="contact-h1">Don't miss a chance to talk with us</h1>
        </div>
        <div className="contacts">
          <div className="phone same">
            <h4 className="option">Phone</h4>
            <h2 className="p-number">+41 (078) 205 83 88</h2>
            <h4 className="or-option">OR</h4>
            <button className="call-back">CALL ME BACK</button>
          </div>
          <div className="address same">
            <h4 className="address-h4">Address</h4>
            <h2 className="address-h2">
              Via Peri 17, 6900 Lugano, Switzerland
            </h2>
            <h4 className="email">Email</h4>
            <h4 className="email-address">luxtra.travel@gmail.com</h4>
          </div>
        </div>
        <div className="map-wrapper">
          <img src="/map.png" alt="" className="map" />
        </div>
        <div className="BgMaskMid"></div>
      </div>
    </main>
  );
}
