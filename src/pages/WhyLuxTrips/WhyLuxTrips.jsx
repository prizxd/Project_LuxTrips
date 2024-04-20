import React from "react";
import "./whyLuxTrips.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function WhyLuxTrips() {
  return (
    <main>
      <div className="cards">
        <div className="first">
          <img src="/pin_1.png" alt="" />
          <h1>Bespoke experience of travelling</h1>
          <p>
            Being expert Luxury Travel Designers, Lux Trips offers bespoke
            experience of travelling.
          </p>
        </div>
        <div className="second">
          <img src="/pin_2.png" alt="" />
          <h1>Collecting precious moments is our utmost goal.</h1>
          <p>
            Our exclusive network of trusted local partners allows us to
            carefully curate every detail.
          </p>
        </div>
        <div className="tried">
          <img src="/pin_3.png" alt="" />
          <h1>We personalize each trip</h1>
          <p>
            Thanks to our extensive knowledge and operation in the industry, we
            personalize each trip according to the needs and wishes of our
            clients.
          </p>
        </div>
      </div>
      <div className="main1">
        <div className="empty"></div>
        <div className="mainHead">
          <h1>Creating a unique experience for each client </h1>
          <p>
            Starting from suggesting destinations to visit in the current
            season, to the selection of the most exquisite locations for a
            special event or a family dinner.
          </p>
        </div>
        <img className="stats" src={stats} alt="" />
        <h1 className="box">
          In Lux Trips we plan, organize and manage tailor-made itineraries for
          our clients.
        </h1>
        <p className="box1">
          Offering exclusive tours, exceptional accommodations and personalized
          journey-planning.
        </p>
      </div>
      <div className="main2">
        <div className="text">
          <img src={pin4} alt="" />
          <div className="tx">
            <p>
              We provide our clients with access to exclusive events and
              experiences, such as glamping or fishing on private islands,
              private vineyard wine-tasting and tours, or cruising a sea with a
              flock of dolphins, to name just a few.
            </p>
            <p>
              Our location scouting for events and holidays encompasses diverse
              types of villas and chalets, luxury resorts and world-class hotels
              around the world.
            </p>
            <button className="img-but">LUXURY PACKAGES</button>
          </div>
        </div>
        <h1 className="text1">
          We customize your journey by selecting the most convenient travelling
          options, including private yachts, jets, charter flights and
          supercars.
        </h1>
        <button className="button last-item">BOOK NOW</button>
      </div>
      <div className="contact">
        <p className="content-box first-cont">
          As a Luxury Travel Designer, we make it our mission to transform
          clients’ interests and dreams into one-of-a-kind travel experience
          through the provision of premium quality services.
        </p>
        <h1 className="content-box">
          Importantly, in Lux Trips we get to know our clients personally, and
          hence, we get to have a relationship with each of them.
        </h1>
        <p className="content-box">
          We construct long-lasting connections thanks to the unforgettable
          trips we design, as we believe that travel is all about feelings, and
          memories are the most precious gifts we want our customer to bring
          back with them.
        </p>
        <button className="button">CONTACT US</button>
      </div>
    </main>
  );
}
