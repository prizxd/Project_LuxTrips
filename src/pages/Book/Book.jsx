import React from "react";
import "./book.scss";
export default function Book() {
  return (
    <div className="bookPage">
      <h1>Book with us</h1>
      <div className="container">
        <div className="items">
          <div className="item">
            <img src="/car.png" alt="" />
            <p className="text">
              Machu Picchu is situated above a bow of the Urubamba River, which
              surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <button className="req">
              <img src="/request.png" alt="" />
            </button>
          </div>
          <div className="item marg">
            <img src="/hotels.png" alt="" />
            <p className="text">
              Machu Picchu is situated above a bow of the Urubamba River, which
              surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <button className="req">
              <img src="/request.png" alt="" />
            </button>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src="/vilas.png" alt="" />
            <p className="text">
              Machu Picchu is situated above a bow of the Urubamba River, which
              surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <button className="req">
              <img src="/request.png" alt="" />
            </button>
          </div>
          <div className="item marg">
            <img src="/liner.png" alt="" />
            <p className="text">
              Machu Picchu is situated above a bow of the Urubamba River, which
              surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <button className="req">
              <img src="/request.png" alt="" />
            </button>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src="/helic.png" alt="" />
            <p className="text">
              Machu Picchu is situated above a bow of the Urubamba River, which
              surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <button className="req">
              <img src="/request.png" alt="" />
            </button>
          </div>
          <div className="item marg">
            <img src="/jet.png" alt="" />
            <p className="text">
              Machu Picchu is situated above a bow of the Urubamba River, which
              surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <button className="req">
              <img src="/request.png" alt="" />
            </button>
          </div>
        </div>
        <div className="email">
          <h2 className="inspirit">Get weekly inspiration and expert advice</h2>
          <h4 className="sign">Sign up for our Weekly Newsletter</h4>
          <form action="">
            <input type="text" placeholder="Email address" className="em" />
            <button className="sub">SUBSCRIBE</button>
          </form>
        </div>
      </div>
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
