import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <p>
        {Math.round(props.celsius)}
        <span className="unit">
          °C
          <a href="/" onClick={displayFahrenheit}>
            {" "}
            | °F
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <p>
        {Math.round(fahrenheit)}
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C |
          </a>{" "}
          °F
        </span>
      </p>
    );
  }
}
