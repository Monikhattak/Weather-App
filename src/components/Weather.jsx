import React from "react";
import "./weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

function Weather() {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="Temperature">16°C </p>
      <p className="location">Lodon</p>
      <div className="weather-details">
        <div className="col">
          <img src={humidity_icon} alt="" className="weather-icon" />
          <div>
            <span>80%</span>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" className="weather-icon" />
          <div>
            <span>3.6 km/h</span>
            <p>wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
