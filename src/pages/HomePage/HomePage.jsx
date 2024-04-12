import React from "react";
import "./homePage.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="Main">
      <div className="BgTop">
        <div className="BgMask"></div>

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
            <Link to="/" className="WhyLuxTrips">
              Why Lux Trips
            </Link>
            <Link to="/" className="Contact">
              Contact
            </Link>
            <Link to="/" className="ClientArea">
              Client Area
            </Link>
          </div>
          <button className="ButtonCallMe">CALL ON ME BACK</button>
        </div>

        <img className="Sky" src="/sky.png" />
        <img className="first" src="/1.png" />
        <div className="center-div">
          <div className="TheWorldSMost">
            the
            <br />
            world’s
            <br />
            most
          </div>
          <div className="ExtraOrdinary">
            extra
            <br />
            ordinary
          </div>

          <div className="Places">Places</div>
          <img className="second" src="/2.png" />

          <img className="Mountains" src="/mountains.png" />
          <div className="search-block">
            <p className="find-your-journey">find your journey</p>
            <div className="Search">
              <div className="Destination">
                <img src="/icon_destination.svg" alt="" />
                <div className="Destination-2">
                  <h2>Destination</h2>
                  <p>Where are you going?</p>
                </div>
              </div>
              <div className="Destination">
                <img src="/icon_travel.svg" alt="" />
                <div className="Destination-2">
                  <h2>Travel type</h2>
                  <p>Adventure Travel</p>
                </div>
              </div>
              <div className="Destination">
                <img src="/icon_calendar.svg" alt="" />
                <div className="Destination-2">
                  <h2>When</h2>
                  <p>14 Dec 2022</p>
                </div>
              </div>
              <div className="Destination">
                <img src="/icon_travellers.svg" alt="" />
                <div className="Destination-2">
                  <h2>Travellers</h2>
                  <p>2 Persons</p>
                </div>
              </div>
              <button className="find">
                <img src="/icon_search.svg" alt="" />
                Find
              </button>
            </div>
          </div>
        </div>

        <div className="Gradient" />
        <div className="Clouds">
          <img
            className="Rectangle"
            style={{
              width: 1037,
              height: 572,
              left: 0,
              bottom: 117,
              position: "absolute",
            }}
            src="/clouds.png"
          />
          <img
            className="Rectangle"
            style={{
              width: 714,
              height: 382,
              right: 53,
              bottom: 17,
              position: "absolute",
            }}
            src="/clouds2.png"
          />
        </div>
      </div>
      <div className="BgMid">
        <div className="BgMaskMid"></div>
        <div className="center-div-mid">
          <div className="g380">
            <img src="/Group 380.svg" alt="" className="Group_380" />
            <h1>Top Rated Experiences</h1>
          </div>
          <div className="Tabs">
            <div className="Tabs-Menu">
              <div className="World">World</div>
              <div className="Africa">Africa</div>
              <div className="Asia">Asia</div>
              <div className="Europe">Europe</div>
              <div className="North_America">North America</div>
              <div className="South_America">South America</div>
              <div className="Antarctica">Antarctica</div>
              <div className="Australia">Australia</div>
            </div>
          </div>
          <div className="Cards-div">
            <img src="/1winter.png" alt="" className="card" />
            <img src="/2mountain.png" alt="" className="card" />
            <img src="/3beach.png" alt="" className="card" />
          </div>
        </div>
        <div className="GradientMid"></div>
        <div className="center-div-mid">
          <div className="Cards-div-2">
            <div className="left">
              <div className="lux-packages-button">
                <h2>Luxury Packages</h2>
                <button className="view-all">view all</button>
              </div>
              <img src="/3lake-mountain.png" alt="" className="card" />
            </div>
            <div className="center">
              <img src="/1winter-mountain.png" alt="" className="card" />
              <img src="/4mountain-people.png" alt="" className="card" />
            </div>
            <div className="right">
              <img src="/2sea-beach.png" alt="" className="card" />
              <img src="/5lake-winter.png" alt="" className="card" />
            </div>
          </div>
        </div>
        <img src="/bg_book with us.jpg" className="BgBookWithUS" />
        <div className="center-mid-div">
          <div className="wrapper-h3">
            <h3 className="div-3-h3">Book With Us</h3>
          </div>
          <div className="Cards-div-3">
            <div className="left-cards-3">
              <img src="/1supercars.jpg" alt="" />
              <img src="/3villas.jpg" alt="" />
              <img src="/5privatehelis.jpg" alt="" />
            </div>
            <div className="right-cards-3">
              <img src="/2hotels.jpg" alt="" />
              <img src="/4yacts.jpg" alt="" />
              <img src="/6privatejets.png" alt="" />
            </div>
          </div>
        </div>
        <img src="/bg_whyluxtrip.jpg" alt="" className="BgBookWithUS" />
      </div>
    </div>
  );
}
