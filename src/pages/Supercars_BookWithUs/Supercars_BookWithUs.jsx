import "./supercars_BookWithUs.scss";
import { useState } from "react";
export default function AdditionalPage() {
  const [button1State, setButton1State] = useState(false);
  const [button2State, setButton2State] = useState(false);

  const handleButton1Click = () => {
    setButton1State(true);
  };

  const handleButton2Click = () => {
    setButton1State(false);
    setButton2State(true);
  };
  return (
    <main>
      <div className="additionsl-page">
        <div className="empty-div"></div>
        <img className="Sky" src="/header.png" />
        <h1>Book Supercars</h1>
        <div className="ability">
          <div className="info">
            <img src="/1supercars.jpg" alt="" className="info__img" />
            <h2 className="info__subtitle">
              Lux Trips gives you access to the most prestigious cars on the
              market.
            </h2>
            <p className="info__text">
              All the latest top-of-the-range models described by elegance,
              class and technology are among our wide range of rentals and
              hiring.
            </p>
            <p className="info__subtext">
              Do you wish to feel like a Formula 1 driver and test the famous
              circuit in Monza? Or do you prefer to sit back and relax while our
              driver brings you across the most picturesque Amalfi coast? All
              you have to do is choose the destination and we will arrange the
              rest!
            </p>
            <div className="blocks">
              <div className="block">
                <img src="/Group 551-1.svg" alt="" className="block__img" />
                <p className="block__text">Dedicated 24/7 Travel Advisor</p>
              </div>
              <div className="block">
                <img src="/icons_trip_4-1.svg" alt="" className="block__img" />
                <p className="block__text">
                  Professional drivers and driver-coaches
                </p>
              </div>
              <div className="block">
                <img src="/Group 574-1.svg" alt="" className="block__img" />
                <p className="block__text">Wide selection of cars</p>
              </div>
              <div className="block">
                <img src="/Group 559-1.svg" alt="" className="block__img" />
                <p className="block__text">Accidental damage protection</p>
              </div>
              <div className="block">
                <img src="/Group 575-1.svg" alt="" className="block__img" />
                <p className="block__text">Dedicated health insurance</p>
              </div>
              <div className="block">
                <img src="/Group 570-1.svg" alt="" className="block__img" />
                <p className="block__text">Package deals</p>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <div className="loc">
                <div className="left-side">
                  <div className="input">
                    <p className="input__text">Location from</p>
                    <select name="location-from">
                      <option hidden value="choose">
                        Choose
                      </option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                    </select>
                  </div>
                  <div className="input">
                    <p className="input__text">Dates from</p>
                    <input type="date" className="date-input" />
                  </div>
                </div>
                <div className="right-side">
                  <div className="input">
                    <p className="input__text">to</p>
                    <select name="location-from">
                      <option hidden value="choose">
                        Choose
                      </option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                    </select>
                  </div>
                  <div className="input">
                    <p className="input__text">to </p>
                    <input type="date" className="date-input" />
                  </div>
                </div>
              </div>
              <div className="supercar">
                <div className="input">
                  <p className="input__text">Model of supercar</p>
                  <select name="location-from">
                    <option value="Surprise">Surprise me</option>
                    <option value="none">none</option>
                    <option value="none">none</option>
                    <option value="none">none</option>
                  </select>
                </div>
              </div>
              <div className="third-block">
                <div className="left-side">
                  <div className="input">
                    <p className="input__text">Pick-up location</p>
                    <select name="location-from">
                      <option hidden value="choose">
                        Choose
                      </option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                    </select>
                  </div>
                  <div className="input">
                    <p className="input__text">Drop off location</p>
                    <select name="location-from">
                      <option hidden value="choose">
                        Choose
                      </option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                    </select>
                  </div>
                </div>
                <div className="right-side">
                  <div className="input">
                    <p className="input__text">Pick up time</p>
                    <input type="time" className="time-input" />
                  </div>
                  <div className="input">
                    <p className="input__text">Drop off time</p>
                    <input type="time" className="time-input" />
                  </div>
                </div>
              </div>
              <div className="loc2">
                <div className="left-side">
                  <div className="input">
                    <p className="input__text">Number of people</p>
                    <select name="location-from">
                      <option hidden value="2">
                        2
                      </option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                      <option value="none">none</option>
                    </select>
                  </div>
                </div>
                <div className="right-side">
                  <div className="input">
                    <p className="input__text">Driver</p>
                    <div class="toggle">
                      <input
                        type="radio"
                        name="sizeBy"
                        value="weight"
                        id="sizeWeight"
                        checked="checked"
                      />
                      <label for="sizeWeight">Yes</label>
                      <input
                        type="radio"
                        name="sizeBy"
                        value="dimensions"
                        id="sizeDimensions"
                      />
                      <label for="sizeDimensions">No</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Name">
                <div className="input">
                  <p className="input__text">Name</p>
                  <input type="text" name="Name" />
                </div>
              </div>
              <div className="Email">
                <div className="input">
                  <p className="input__text">Email</p>
                  <input type="text" name="Email" />
                </div>
              </div>
              <div className="Special_requests">
                <div className="input">
                  <p className="input__text">Special requests</p>
                  <textarea type="text" className="Special_requests_input" />
                </div>
              </div>
              <div className="button-block">
                <button className="request">make a request</button>
                <p>or</p>
                <div className="button-sub-block">
                  <button>call me back</button>
                  <button>email me back </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
