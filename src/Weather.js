import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [location, setLocation] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      coord: response.data.coord,
      name: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });

    // console.log(weather.time);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setLocation(event.target.value);
  }

  function search() {
    let key = "1ee4264117b73d2263eecd562f31ef5c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form className="search" onSubmit={handleSubmit}>
          <input
            value={location}
            onChange={updateCity}
            placeholder="Enter location"
            type="search"
          />
        </form>
        <div className="container">
          <div className="top">
            <div className="left">
              <div className="location">
                <p>{weather.name}</p>
              </div>

              <div className="temp">
                <Temperature celsius={weather.temperature} />
              </div>
              <div className="time">
                <FormattedDate date={weather.date} />
              </div>
            </div>
            <div className="right">
              <div className="icon">
                <WeatherIcon code={weather.icon} size={90} />
                {/* <img src={weather.icon} alt={weather.description} /> */}
              </div>
              <p className="details">
                <span className="description text-capitalize">
                  {weather.description}
                </span>
                <br />
                <span className="humidity">
                  Humidity: {weather.humidity}%,{" "}
                </span>
                <span className="humidity">Wind: {weather.wind}km/h</span>
              </p>
            </div>
          </div>

          <WeatherForecast coord={weather.coord} />
        </div>
      </div>
    );
  } else {
    search();
  }
}
