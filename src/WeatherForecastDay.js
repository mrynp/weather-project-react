import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <WeatherIcon code="01d" size={40} />
      </div>
      <div className="ForecastTemp">
        <span className="ForecastTemp-max">{maxTemp()}</span>
        <span className="ForecastTemp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
