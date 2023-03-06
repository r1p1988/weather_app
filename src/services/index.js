const apiKey = process.env.REACT_APP_API_KEY;
const URL_GEO = `https://api.openweathermap.org/geo/1.0/direct`;
const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather`;

const fetchWeather = async (city, setError) => {
  try {
    const response = await fetch(URL_GEO + `?q=${city}` + `&appid=${apiKey}`);
    let geoData = await response.json();
    if (geoData.length === 0 || geoData[0].name !== city)
      throw new SyntaxError("City not found");
    const lat = geoData.map((item) => item.lat);
    const lon = geoData.map((item) => item.lon);

    const response2 = await fetch(
      URL_WEATHER + `?lat=${lat}` + `&lon=${lon}` + `&appid=${apiKey}`
    );
    const weatherData = await response2.json();
    setError("");
    return weatherData;
  } catch (error) {
    setError("City not found");
    return error;
  }
};

export default fetchWeather;
