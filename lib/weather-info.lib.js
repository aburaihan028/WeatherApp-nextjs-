// weather data
export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
    );

    const data = await response.json();
    return data?.weather[0];
  } catch (error) {
    console.error(error.message);
  }
};

// temperature data
export const getTemperatureData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
    );

    const data = await response.json();
    return data?.main;
  } catch (error) {
    console.error(error.message);
  }
};

// wind data
export const getWindData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
    );

    const data = await response.json();
    return data?.wind;
  } catch (error) {
    console.error(error.message);
  }
};

// Historical air pollution data
export const getAQIData = async (lat, lon) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch AQI data");
    }

    const data = await response.json();

    // console.log(data, "AQI Response");
    // console.log(API_KEY);

    return data?.list[0] || null;
  } catch (error) {
    console.error(error);
  }
};
