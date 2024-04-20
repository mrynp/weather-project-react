import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Weather defaultCity="Manila" />
      <footer>
        This project was coded by Marienne and is{" "}
        <a
          href="https://github.com/mrynp/weather-project-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
