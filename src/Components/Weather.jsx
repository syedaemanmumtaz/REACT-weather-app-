import React, { useState, useRef } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";


const Weather = () => {
  const userCityRef = useRef(null);
  const [weather, setWeather] = useState([]);

  const getCityName = async (event) => {
    event.preventDefault();
    let cityName = userCityRef.current.value.trim();
    if (!cityName) return;
    
    let APIkey = "4629b007e7d6d8f0c0f1b55b739f92df";
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
      );
      setWeather([response.data, ...weather]);
      userCityRef.current.value = ""; // Clear input field
    } catch (e) {
      console.log(e);
      setWeather([]);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather Finder</h1>
      <form className="weather-form" onSubmit={getCityName}>
        <input
          type="text"
          id="userCity"
          ref={userCityRef}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Weather;

