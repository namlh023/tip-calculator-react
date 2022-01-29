import React, { useState, useRef, useEffect } from "react";
import "./assets/scss/main.scss";
import logo from "./assets/images/logo.svg";
import icon_dollar from "./assets/images/icon-dollar.svg";
import icon_person from "./assets/images/icon-person.svg";

function App() {
  // States
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [tipActive, setTipActive] = useState(0);
  const [tipValue, setTipValue] = useState(0);

  // Refs
  const customTipRef = useRef();

  // Effects
  useEffect(() => {
    customTipRef.current.focus();
  }, [isOnFocus]);

  // Variables
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="SPLITTER calculator" />
      </header>

      <main className="main">
        <form className="form">
          <div className="inputs-wrapper">
            <label className="text" for="bill">
              Bill
            </label>
            <div className="input-wrapper d-flex">
              <img src={icon_dollar} alt="" aria-hidden="true" />
              <input
                className="text--extra-large text--cyan"
                type="number"
                id="bill"
                name="bill"
                placeholder="0"
              />
            </div>
            <fieldset>
              <legend className="text">Select Tips %:</legend>
              {tips.map((tip) => {
                return (
                  <input
                    className={`text text--extra-large text--white ${
                      tipActive === tip ? "tip-active" : null
                    }`}
                    type="button"
                    value={`${tip}%`}
                    onClick={() => {
                      setStateTipValue(tip);
                      setTipActive(tip);
                    }}
                  />
                );
              })}
              <input
                className={`text text--extra-large text--white input-custom ${
                  isOnFocus ? "d-none" : ""
                }`}
                type="button"
                value="Custom"
                onClick={() => {
                  setStateIsOnFocus(true);
                }}
              />
              <input
                type="number"
                className={`text text--cyan text--extra-large ${
                  isOnFocus ? "d-inline-block" : "d-none"
                }`}
                autofocus="true"
                ref={customTipRef}
              />
            </fieldset>
            <label className="text" for="people">
              Number of People
            </label>
            <div className="input-wrapper input-wrapper--bottom d-flex ">
              <img src={icon_person} alt="" aria-hidden="true" />
              <input
                className="text--extra-large text--cyan"
                type="number"
                id="people"
                placeholder="0"
              />
            </div>
          </div>
          <div className="output-wrapper">
            <lable className="text text--white" for="tip-output">
              Tip Amount <br /> <small className="text--small">/ person</small>
            </lable>
            <output
              className="text--xxl text--cyan-1"
              id="tip-output"
              name="tip-output"
              for="bill people"
            >
              $4.2
            </output>
            <lable className="text text--white" for="total-output">
              Total Amount <br />{" "}
              <small className="text--small">/ person</small>
            </lable>
            <output
              className="text--xxl text--cyan-1"
              id="total-output"
              name="total-output"
              for="bill people"
            >
              $4.2
            </output>
            <input
              className="text--cyan text--large"
              type="reset"
              value="RESET"
            />
          </div>
        </form>
      </main>
    </div>
  );

  // Functions
  function setStateIsOnFocus(isOnFocus = true) {
    setIsOnFocus(isOnFocus);
  }

  function setStateTipValue(tip) {
    setTipValue(tip);
  }
}

export default App;
