import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import fetchWeather from "../services/index";

import {
  StyledWeatherContainer,
  StyledForm,
  StyledWeatherError,
} from "./WeatherContainer.styles";

function WeatherContainer() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    } catch (error) {
      setError("City not found");
    }
  };

  return (
    <StyledWeatherContainer>
      <h1>Weather App</h1>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the city"
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </StyledForm>
      {error ? (
        <StyledWeatherError>{error}</StyledWeatherError>
      ) : (
        <WeatherCard weather={weather} />
      )}
    </StyledWeatherContainer>
  );
}

export default WeatherContainer;
