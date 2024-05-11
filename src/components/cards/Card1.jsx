import React from "react";
import pin1 from "../../assets/pin_1.png";
import "./cards.scss";

export default function Card1() {
  return (
    <div className="first-card">
      <img src={pin1} alt="" />
      <h1>Bespoke experience of travelling</h1>
      <p>
        Being expert Luxury Travel Designers, Lux Trips offers bespoke
        experience of travelling.
      </p>
    </div>
  );
}
