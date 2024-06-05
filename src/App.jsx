import React from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app">
      <div className="weather-container">
        <Weather />
      </div>
      <div className="stars"></div>
      <div className="rain"></div>
    </div>
  );
}

export default App;
