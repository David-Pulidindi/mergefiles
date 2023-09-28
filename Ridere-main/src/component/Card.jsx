import React, { Component } from "react";
import "./Card.css"; // Correct the import path

class LandingPgePart extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid " id="maincontainer">
          <div id="matter">
            <h1>Your journeys are simply a click away</h1>
            <p>
              RIDERE turns your travel into an exciting and effortless
              adventure, making your destination even more enjoyable.
            </p>
          </div>

          <div className="row" id="AllBoxes">
            <div className="col-lg-3 col-md-12 col-sm-1" id="box-1">
              <div className="squaredThree">
                <input type="checkbox" id="myCheckbox" name="check" checked />
                <label htmlFor="myCheckbox"> </label>
                <h5>For Efficiency</h5>
              </div>
              <p>RIDERE streamlines rides for swift commutes.</p>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-1" id="box-2">
              <div className="squaredThree">
                <input type="checkbox" id="myCheckbox" name="check" checked />
                <label htmlFor="myCheckbox"> </label>
                <h5>Affordability</h5>
              </div>
              <p>Enjoy cost-effective transportation</p>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-1" id="box-3">
              <div className="squaredThree">
                <input type="checkbox" id="myCheckbox" name="check" checked />
                <label htmlFor="myCheckbox"> </label>
                <h5>Reliability</h5>
              </div>
              <p>Count on punctual, dependable service</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPgePart;
