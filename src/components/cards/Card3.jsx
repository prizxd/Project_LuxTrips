import React from "react";
import pin3 from "../../assets/pin_3.png";
import "./cards.scss";

export default function Card3() {
  return (
    <div className="tried-card">
      <img src={pin3} alt="" />
      <h1>We personalize each trip</h1>
      <p>
        Thanks to our extensive knowledge and operation in the industry, we
        personalize each trip according to the needs and wishes of our clients.{" "}
      </p>
    </div>
  );
}
