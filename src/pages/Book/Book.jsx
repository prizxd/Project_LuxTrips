import React from "react";
import "./book.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function Book() {
  return (
    <main>
      <div className="bookPage">
        <img src="/header.png" alt="" className="header-img" />
        <div className="empty-div"></div>

        <div className="center-mid-div">
          <div className="BgMaskMid"></div>
          <div className="wrapper-h3">
            <h3 className="div-3-h3">Book With Us</h3>
          </div>
          <div className="Cards-div-3">
            <div className="left-cards-3">
              <div className="card-item">
                <img src="/1supercars.jpg" alt="" />
                <div className="card-p-button">
                  <p>
                    Machu Picchu is situated above a bow of the Urubamba River,
                    which surrounds the site on three sides, where cliffs drop
                    vertically.
                  </p>
                  <Link to="/Supercars">Make A Request</Link>
                </div>
              </div>
              <div className="card-item">
                <img src="/3villas.jpg" alt="" />
                <div className="card-p-button">
                  <p>
                    Machu Picchu is situated above a bow of the Urubamba River,
                    which surrounds the site on three sides, where cliffs drop
                    vertically.
                  </p>
                  <Link to="/">Make A Request</Link>
                </div>
              </div>
              <div className="card-item">
                <img src="/5privatehelis.jpg" alt="" />
                <div className="card-p-button">
                  <p>
                    Machu Picchu is situated above a bow of the Urubamba River,
                    which surrounds the site on three sides, where cliffs drop
                    vertically.
                  </p>
                  <Link to="/">Make A Request</Link>
                </div>
              </div>
            </div>
            <div className="right-cards-3">
              <div className="card-item">
                <img src="/2hotels.jpg" alt="" />
                <div className="card-p-button">
                  <p>
                    Machu Picchu is situated above a bow of the Urubamba River,
                    which surrounds the site on three sides, where cliffs drop
                    vertically.
                  </p>
                  <Link to="/">Make A Request</Link>
                </div>
              </div>
              <div className="card-item">
                <img src="/4yacts.jpg" alt="" />
                <div className="card-p-button">
                  <p>
                    Machu Picchu is situated above a bow of the Urubamba River,
                    which surrounds the site on three sides, where cliffs drop
                    vertically.
                  </p>
                  <Link to="/">Make A Request</Link>
                </div>
              </div>
              <div className="card-item">
                <img src="/6privatejets.png" alt="" />
                <div className="card-p-button">
                  <p>
                    Machu Picchu is situated above a bow of the Urubamba River,
                    which surrounds the site on three sides, where cliffs drop
                    vertically.
                  </p>
                  <Link to="/">Make A Request</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
