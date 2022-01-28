import "./assets/scss/main.scss";
import logo from "./assets/images/logo.svg";
import icon_dollar from "./assets/images/icon-dollar.svg";
import icon_person from "./assets/images/icon-person.svg";

function App() {
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
              />
            </div>
            <fieldset>
              <legend className="text">Select Tips %:</legend>
              <input
                className="text text--extra-large text--white"
                type="button"
                value="5%"
              />
              <input
                className="text text--extra-large text--white"
                type="button"
                value="10%"
              />
              <input
                className="text text--extra-large text--white"
                type="button"
                value="15%"
              />
              <input
                className="text text--extra-large text--white"
                type="button"
                value="25%"
              />
              <input
                className="text text--extra-large text--white"
                type="button"
                value="50%"
              />
              <input
                className="text text--extra-large text--white input-custom"
                type="button"
                value="Custom"
              />
              <input
                type="number"
                className="text text--cyan text--extra-large"
              />
            </fieldset>
            <label className="text" for="people">
              Number of People
            </label>
            <div className="input-wrapper d-flex ">
              <img src={icon_person} alt="" aria-hidden="true" />
              <input
                className="text--extra-large text--cyan"
                type="number"
                id="people"
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
}

export default App;
