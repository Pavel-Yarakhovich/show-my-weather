import moment from 'moment';

export const convertKelvinToCelsius = (tempInKelvin) => {
  return tempInKelvin - 273.15;
};

export const getWeatherIcon = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const momentFormat = (sec, format) => {
  return moment(new Date(sec * 1000)).format(format);
};
