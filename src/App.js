import React from "react";
// import axios from "axios";

function App() {
  return (
    <div className="app">
      <form className="search">
        <input placeholder="Enter location" type="search" />
      </form>
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="location">
              <p>Manila</p>
            </div>
            <div className="temp">
              <p>28°C</p>
            </div>
          </div>
          <div className="right">
            <div className="icon"></div>
            <p className="details">
              <span className="description">Sunny</span>
              <br />
              <span className="humidity">Humidity: 87%, </span>
              <span className="humidity">Wind: 4.5km/h</span>
            </p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
