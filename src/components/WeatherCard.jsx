import React from "react";

import {
  StyledWeatherCardContainer,
  StyledWeatherCardHeader,
  StyledWeatherCardBody,
  StyledWeatherCardDetails,
  StyledWeatherCardParameters,
  StyledWeatherCardParamsLabel,
  StyledWeatherCardParamsVal,
  StyledWeatherCardDescription,
  StyledWeatherCardCity,
} from "./WeatherCard.styles";

function WeatherCard({ weather }) {
  return (
    <StyledWeatherCardContainer>
      <StyledWeatherCardHeader>
        <div>
          <StyledWeatherCardCity>
            {weather ? `${weather.name} ${weather.sys.country}` : "-"}
          </StyledWeatherCardCity>
          <StyledWeatherCardDescription>
            {weather ? weather.weather[0].description : "-"}
          </StyledWeatherCardDescription>
        </div>
        <img
          src={
            weather
              ? `icons/${weather.weather[0].icon}.png`
              : `icons/unknown.png`
          }
          alt={`weather`}
        />
      </StyledWeatherCardHeader>
      <StyledWeatherCardBody>
        <h2>{weather ? `${Math.round(weather.main.temp - 273.15)}` : ""}°C</h2>
        <StyledWeatherCardDetails>
          <StyledWeatherCardParameters>
            <StyledWeatherCardParamsLabel>Details</StyledWeatherCardParamsLabel>
          </StyledWeatherCardParameters>
          <StyledWeatherCardParameters>
            <StyledWeatherCardParamsLabel>
              Feels like:
            </StyledWeatherCardParamsLabel>
            <StyledWeatherCardParamsVal>
              {weather
                ? `${Math.round(weather.main.feels_like - 273.15).toFixed(2)}`
                : "-"}
              °C
            </StyledWeatherCardParamsVal>
          </StyledWeatherCardParameters>
          <StyledWeatherCardParameters>
            <StyledWeatherCardParamsLabel>
              Humidity:
            </StyledWeatherCardParamsLabel>
            <StyledWeatherCardParamsVal>
              {weather ? `${weather.main.humidity}` : "-"}%
            </StyledWeatherCardParamsVal>
          </StyledWeatherCardParameters>
          <StyledWeatherCardParameters>
            <StyledWeatherCardParamsLabel>
              Pressure:
            </StyledWeatherCardParamsLabel>
            <StyledWeatherCardParamsVal>
              {weather ? `${weather.main.pressure}` : "-"}hPs
            </StyledWeatherCardParamsVal>
          </StyledWeatherCardParameters>
        </StyledWeatherCardDetails>
      </StyledWeatherCardBody>
    </StyledWeatherCardContainer>
  );
}

export default WeatherCard;
