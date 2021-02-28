export const ONE_CALL_API = (latitude, longitude, part) => {
  if (part) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
  } else {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
  }
};
