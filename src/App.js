import React, { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data.name);
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = "8cac06f7ab6c10287cd06a316ff84a57";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setLocation(event.target.value);
  }

  return (
    <div className="app">
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
              <p>
                {weather.temperature}
                <span className="unit">°C</span>
              </p>
            </div>
          </div>
          <div className="right">
            <div className="icon">
              <img src={weather.icon} alt={weather.description} />
            </div>
            <p className="details">
              <span className="description">{weather.description}</span>
              <br />
              <span className="humidity">Humidity: {weather.humidity}%, </span>
              <span className="humidity">Wind: {weather.wind}km/h</span>
            </p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
