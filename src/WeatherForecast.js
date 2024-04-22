import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [daily, setDaily] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function displayForecast(response) {
    setDaily(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let key = "1ee4264117b73d2263eecd562f31ef5c";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(url).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {daily.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
