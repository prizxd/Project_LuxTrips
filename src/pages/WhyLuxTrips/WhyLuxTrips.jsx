import React from "react";
import "./whyLuxTrips.scss";
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import Card1 from "../../components/cards/Card1";
import Card2 from "../../components/cards/Card2";
import Card3 from "../../components/cards/Card3";
export default function WhyLuxTrips() {
  return (
    <main>
      <div className="whyLuxTrips">
          <div className='cards'>
          <Card1/>
          <Card2/>
          <Card3/>
        </div>
        <div className='empty'></div>
        <div className="bg-mid"></div>
        <div className="mainHead">
          <h1>Creating a unique experience for each client </h1>
          <p>
            Starting from suggesting destinations to visit in the current
            season, to the selection of the most exquisite locations for a
            special event or a family dinner.
          </p>
        </div>
        <div className="box-wrapper">
          <img className="stats" src="/stats.png" alt="" />
          <h1 className="box">
            In Lux Trips we plan, organize and manage tailor-made itineraries
            for our clients.
          </h1>
          <p className="box1">
            Offering exclusive tours, exceptional accommodations and
            personalized journey-planning.
          </p>
        </div>
        <img src="/bg_book with us.png" alt="" className="bg-main2" />
        <div className="main2">
          <div className="text">
            <img src="/pin_4.png" alt="" />
            <div className="tx">
              <p>
                We provide our clients with access to exclusive events and
                experiences, such as glamping or fishing on private islands,
                private vineyard wine-tasting and tours, or cruising a sea with
                a flock of dolphins, to name just a few.
              </p>
              <p>
                Our location scouting for events and holidays encompasses
                diverse types of villas and chalets, luxury resorts and
                world-class hotels around the world.
              </p>
              <button className="img-but" >LUXURY PACKAGES</button>
            </div>
          </div>
          <div className="wrapper-slider-button">
            <h1 className="text1">
              We customize your journey by selecting the most convenient
              travelling options, including private yachts, jets, charter
              flights and supercars.
            </h1>
            <div className="slider">
              <img src="/1supercars.jpg" alt="" />
              <img src="/2hotels.jpg" alt="" />
            </div>
            <button className="book-now"><Link className="link" to='/BookWithUs'>BOOK NOW</Link></button>
          </div>
        </div>      

         <div className='contact'>
            <p className='content-box first-cont'>As a Luxury Travel Designer, we make it our mission to transform clients’ interests and dreams into one-of-a-kind travel experience through the provision of premium quality services.</p>
            <h1 className='content-box'>Importantly, in Lux Trips we get to know our clients personally, and hence, we get to have a relationship with each of them.</h1>
            <p className='content-box'>We construct long-lasting connections thanks to the unforgettable trips we design, as we believe that travel is all about feelings, and memories are the most precious gifts we want our customer to bring back with them.
            </p>
            <button className='button'><Link className="link" to='/Contact'>CONTACT US</Link></button>
        </div>

        <div className="bg-group620"></div>
        <div className="group-620-div">
          <img src="/Group 620.png" alt="" className="Group_620" />
          <div className="group-620-div-form">
            <h2>Get weekly inspiration and expert advice</h2>
            <p>Sign up for our Weekly Newsletter</p>
            <div className="email-space">
              <input type="text" placeholder="Enter address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
