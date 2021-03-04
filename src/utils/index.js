export const convertKelvinToCelsius = (tempInKelvin) => {
  return tempInKelvin - 273.15;
};

export const getWeatherIcon = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};
