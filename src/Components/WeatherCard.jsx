import React from "react";

const WeatherCard = (props) => {
  let citiesData = props.weather || [];

  return (
    <div className="weather-container">
      {citiesData.length > 0 ? (
        citiesData.map((weather, index) => (
          <div className="weather-card" key={index}>
            <h3>{weather?.name}</h3>
            <div className="weather-info">
              <img
                src={`http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`}
                alt="Weather Icon"
              />
              <div>
              <p>City Name: {weather?.name}</p>
                <p>Temp: {weather?.main?.temp}°C</p>
                <p>Feels Like: {weather?.main?.feels_like}°C</p>
                <p>Humidity: {weather?.main?.humidity}%</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-data">No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherCard;

