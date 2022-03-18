import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Personal
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Education
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div id="main">
            <div id="labl">
              <h1 id="lef">Name:</h1>
            </div>
            <div id="inp">
              {" "}
              <input id="ip1" placeholder="Enter your name"></input>
            </div>
          </div>
          <br></br>
          <br></br>

          <div id="main">
            <div id="labl">
              <h1 id="lef">Email:</h1>
            </div>
            <div id="inp">
              {" "}
              <input id="ip1" placeholder="Enter your  @Email"></input>
            </div>
          </div>

          <br></br>
          <br></br>

          <div id="main">
            <div id="labl">
              <h1 id="lef">Mobile number:</h1>
            </div>
            <div id="inp">
              {" "}
              <input id="ip1" placeholder="Enter your number"></input>
            </div>
          </div>

          <br></br>
          <br></br>

          <button id="bt">Save</button>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div id="main">
            <div id="labl">
              <h1 id="lef">Qualification:</h1>
            </div>
            <div id="inp">
              {" "}
              <input id="ip1" placeholder="Enter your  highest degree"></input>
            </div>
          </div>
          <br></br>
          <br></br>

          <div id="main">
            <div id="labl">
              <h1 id="lef">Percentage:</h1>
            </div>
            <div id="inp">
              {" "}
              <input id="ip1" placeholder="Enter your Percentage"></input>
            </div>
          </div>
          <br></br>
          <br></br>

          <div id="main">
            <div id="labl">
              <h1 id="lef">Password:</h1>
            </div>
            <div id="inp">
              {" "}
              <input
                id="ip1"
                placeholder="Enter your password "
                type={"password"}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <button type="submit" id="bt">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
