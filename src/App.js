import React, { useState, useRef, useEffect, useCallback } from "react";
import "./assets/scss/main.scss";
import logo from "./assets/images/logo.svg";
import icon_dollar from "./assets/images/icon-dollar.svg";
import icon_person from "./assets/images/icon-person.svg";

function App() {
  // States
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [tipValue, setTipValue] = useState("");
  const [billValue, setBillValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");

  // Refs
  const customTipRef = useRef();
  const tipAmountRef = useRef();
  const totalAmountRef = useRef();

  // useCallback
  const calcAmount = useCallback((target, amount, person) => {
    if (isDefined(Number(amount)) && isDefined(Number(person))) {
      target.value = "$" + (Number(amount) / Number(person)).toFixed(2);
    } else {
      target.value = "$" + 0;
    }
  }, []);

  // Effects
  useEffect(() => {
    customTipRef.current.focus();
  }, [isOnFocus]);

  useEffect(() => {
    let tipPercent = Number(tipValue) / 100;
    calcAmount(tipAmountRef.current, tipPercent, peopleValue);
  }, [calcAmount, tipValue, peopleValue]);

  useEffect(() => {
    calcAmount(totalAmountRef.current, billValue, peopleValue);
  }, [calcAmount, billValue, peopleValue]);

  // Variables
  const tips = [5, 10, 15, 25, 50];

  // Functions
  function controllInput(setState, value) {
    setState(value);
  }

  function isDefined(value) {
    return value ? true : false;
  }

  function isNumber(value) {
    return Number(value) === 0 || Number(value) ? true : false;
  }

  function isInteger(value) {
    const re = /^[0-9\b]+$/;
    return re.test(value) ? true : false;
  }

  function onHandleIntegerChange(setState, value) {
    if (value === "" || isInteger(value)) {
      controllInput(setState, value);
    }
  }

  function onHandleNumberChange(setState, value) {
    if (value === "" || isNumber(value)) {
      controllInput(setState, value);
    }
  }

  // function getNumbericOnly(value, callbackValue) {
  //   const re = /^\d*(\.\d+)?$/;
  //   return String(value).match(re)[0] ? value : callbackValue;
  // }

  // function getPositiveIntegerOnly(value, callbackValue) {
  //   const re = "^[0-9]*$";
  //   return String(value).match(re)[0] ? value : callbackValue;
  // }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="SPLITTER calculator" />
      </header>

      <main className="main">
        <form className="form">
          <div className="inputs-wrapper">
            <label className="text" htmlFor="bill">
              Bill
            </label>
            <div className="input-wrapper d-flex">
              <img src={icon_dollar} alt="" aria-hidden="true" />
              <input
                className="text--extra-large text--cyan"
                id="bill"
                name="bill"
                placeholder="0"
                value={billValue}
                onChange={(e) =>
                  onHandleNumberChange(setBillValue, e.target.value)
                }
              />
            </div>
            <fieldset>
              <legend className="text">Select Tips %:</legend>
              {tips.map((tip) => {
                return (
                  <input
                    key={tip}
                    className={`text text--extra-large text--white ${
                      tipValue === tip ? "tip-active" : null
                    }`}
                    type="button"
                    value={`${tip}%`}
                    onClick={() => {
                      controllInput(setTipValue, tip);
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
                  controllInput(setIsOnFocus, true);
                }}
              />
              <input
                ref={customTipRef}
                value={tipValue}
                onChange={(e) =>
                  onHandleNumberChange(setTipValue, e.target.value)
                }
                className={`input-custom-tip text text--cyan text--extra-large ${
                  isOnFocus ? "d-inline-block" : "d-none"
                }`}
              />
            </fieldset>
            <label className="text" htmlFor="people">
              Number of People
            </label>
            <div className="input-wrapper input-wrapper--bottom d-flex ">
              <img src={icon_person} alt="" aria-hidden="true" />
              <input
                className="text--extra-large text--cyan"
                id="people"
                placeholder="0"
                value={peopleValue}
                onChange={(e) =>
                  onHandleIntegerChange(setPeopleValue, e.target.value)
                }
              />
            </div>
          </div>
          <div className="output-wrapper">
            <lable className="text text--white" htmlFor="tip-output">
              Tip Amount <br /> <small className="text--small">/ person</small>
            </lable>
            <output
              className="text--xxl text--cyan-1"
              id="tip-output"
              name="tip-output"
              htmlFor="bill people"
              ref={tipAmountRef}
            >
              $0
            </output>
            <lable className="text text--white" htmlFor="total-output">
              Total Amount <br />{" "}
              <small className="text--small">/ person</small>
            </lable>
            <output
              className="text--xxl text--cyan-1"
              id="total-output"
              name="total-output"
              htmlFor="bill people"
              ref={totalAmountRef}
            >
              $0
            </output>
            <input
              className="text--cyan text--large"
              type="reset"
              value="RESET"
              onClick={() => {
                controllInput(setBillValue, "");
                controllInput(setTipValue, "");
                controllInput(setPeopleValue, "");
                controllInput(setIsOnFocus, false);
              }}
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
