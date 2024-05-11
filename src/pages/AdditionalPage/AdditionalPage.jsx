import "./AdditionalPage.scss";
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
        <h1>Book Supercars</h1>
        <div className="ability">
          <div className="info">
            <img src="#" alt="" className="info__img" />
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
                <img src="#" alt="" className="block__img" />
                <p className="block__text">Dedicated 24/7 Travel Advisor</p>
              </div>
              <div className="block">
                <img src="#" alt="" className="block__img" />
                <p className="block__text">
                  Professional drivers and driver-coaches
                </p>
              </div>
              <div className="block">
                <img src="#" alt="" className="block__img" />
                <p className="block__text">Wide selection of cars</p>
              </div>
              <div className="block">
                <img src="#" alt="" className="block__img" />
                <p className="block__text">Accidental damage protection</p>
              </div>
              <div className="block">
                <img src="#" alt="" className="block__img" />
                <p className="block__text">Dedicated health insurance</p>
              </div>
              <div className="block">
                <img src="#" alt="" className="block__img" />
                <p className="block__text">Package deals</p>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <div className="loc">
                <div className="input">
                  <p className="input__text">Location from</p>
                  <input type="text" className="inp" />
                </div>
                <div className="input">
                  <p className="input__text">to</p>
                  <input type="text" className="inp" />
                </div>
              </div>
              <div className="loc">
                <div className="input">
                  <p className="input__text">Dates from</p>
                  <input type="date" className="inpt" />
                </div>
                <div className="input">
                  <p className="input__text">to </p>
                  <input type="date" className="inpt" />
                </div>
              </div>
              <div className="location">
                <div className="input">
                  <p className="input__text">Model of supercar</p>
                  <input name="variants" list="cities" />
                  <datalist id="cities">
                    <option value="Surprise me" />
                  </datalist>
                </div>
              </div>
              <div className="loc">
                <div className="input">
                  <p className="input__text">Pick up location</p>
                  <input name="variants" list="varients" />
                  <datalist id="varients">
                    <option value="Hotel" />
                    <option value="Airport" />
                    <option value="Border" />
                  </datalist>
                </div>
                <div className="input">
                  <label for="party" className="input__label">
                    Pick up time
                  </label>
                  <input id="party" type="datetime-local" name="partydate" />
                </div>
              </div>
              <div className="loc">
                <div className="input">
                  <p className="input__text">Drop off location</p>
                  <input name="variants" list="drop" />
                  <datalist id="drop">
                    <option value="Hotel" />
                    <option value="Airport" />
                    <option value="Border" />
                  </datalist>
                </div>
                <div className="input">
                  <label for="party" className="input__label">
                    Drop off time
                  </label>
                  <input id="party" type="datetime-local" name="partydate" />
                </div>
              </div>
              <div className="loc">
                <div className="input">
                  <p className="input__text">Number of people</p>
                  <input name="variants" list="people" />
                  <datalist id="people">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="More than 10" />
                  </datalist>
                </div>
                <div className="input__bt">
                  <p className="input__text">Driver</p>
                  <div className="btns">
                    <button className="input__btn">Yes</button>
                    <button className="input__btn">No</button>
                  </div>
                </div>
              </div>
              <div className="location">
                <div className="input">
                  <p className="input__text">Name</p>
                  <input type="text" className="inpr" />
                </div>
              </div>
              <div className="location">
                <div className="input">
                  <p className="input__text">Email</p>
                  <input type="text" className="inpr" />
                </div>
              </div>
              <div className="location">
                <div className="input">
                  <p className="input__text">Special requests</p>
                  <input type="text" className="inpr" />
                </div>
              </div>
              <div className="loc__img">
                <div className="location__img"></div>
              </div>
              <div className="calls">
                <div className="input">
                  <button className="input__call">CALL ME BACK</button>
                </div>
                <div className="input">
                  <button className="input__call">EMAIL ME BACK</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
