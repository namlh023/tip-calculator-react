import "./assets/scss/main.scss";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="SPLITTER calculator" />
      </header>
      <main className="main">
        <form className="form">
          <label for="bill">Bill</label>
          <input type="number" id="bill" name="bill" />
          <fieldset>
            <legend>Tips:</legend>
            <input type="button" value="5%" />
            <input type="button" value="10%" />
            <input type="button" value="15%" />
            <input type="button" value="25%" />
            <input type="button" value="50%" />
            <input type="button" value="Custom" />
            <input type="number" />
          </fieldset>
          <label for="people">Number of People</label>
          <input type="number" id="people" />
          <div class="output-wrapper">
            <lable for="tip-output">
              Tip Amount <br /> / person
            </lable>
            <output
              id="tip-output"
              name="tip-output"
              for="bill people"
            ></output>
            <lable for="total-output">
              Total Amount <br /> / person
            </lable>
            <output
              id="total-output"
              name="total-output"
              for="bill people"
            ></output>
            <input type="reset" value="RESET" />
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
