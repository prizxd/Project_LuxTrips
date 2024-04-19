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
            <Link to="/Contact" className="Contact">
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
        <div className="whyluxtrip-wrapper">
          <div className="Gradient" />
          <img src="/bg_whyluxtrip.png" alt="" className="whyluxtrip" />
        </div>
        <div className="whyluxtrip-div">
          <h2>Why LuxTrips</h2>
          <p>
            As Travel Designer, we know the ins and outs of travel from who to
            work with, where to go, when to book, and which restaurant provides
            the most authentic cuisine.
          </p>
        </div>
        <div className="whyluxtrip-div2">
          <h2>
            Exclusive knowledge to provide the best of the best to clients
          </h2>
          <p>
            Our area of expertise ranges from luxury resorts and villas/chalets
            holiday bookings, private yacht and jet charters, to exclusive tours
            and personalized journey planning.
          </p>
        </div>
        <div className="whyluxtrip-div3">
          <img src="/pin_4.png" alt="" />
          <div className="rigth-div">
            <h2>
              We craft and plan unique itineraries tailored to customers’
              interests and with strong attention to detail.
            </h2>
            <button>help me plan a trip</button>
          </div>
        </div>
        <img className="clouds4" src="/clouds4.png"></img>
        <div className="customise">
          <h2>Customise your trip with us</h2>
          <div className="f-part">
            <img className="left-custom" src="/Group 619.svg" />
            <div className="right-custom">
              <div className="div-custom1">
                <h3>Describe your dream trip</h3>
                <p>
                  Let us know what your perfect vacation is. Destinations,
                  preferences, and personal interests.
                </p>
              </div>
              <div className="div-custom2">
                <h3>Get matched</h3>
                <p>
                  Our team will create perfect travel itinerary for you, based
                  on your personalized needs and wishes.
                </p>
              </div>
              <div className="div-custom3">
                <h3>Book your vacation</h3>
                <p>
                  Confirm your trip only when you are completely satisfied with
                  the proposed travel plan.
                </p>
              </div>
            </div>
          </div>
          <div className="button-p">
            <button>Start a trip request</button>
            <p>It’s Free! - no credit card required</p>
          </div>
        </div>
        <div className="wrapper-img-bot">
          <img src="/bg_strat_trip.png" alt="" className="bg_strat_trip" />
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
      </div>
    </div>
  );
}
