import moment from 'moment';

export const convertKelvinToCelsius = (tempInKelvin) => {
  return tempInKelvin - 273.15;
};

export const momentFormat = (sec, format) => {
  return moment(new Date(sec * 1000)).format(format);
};

export const temperature = (props) => {
  props.temp ||
    convertKelvinToCelsius(props.weather.current.feels_like).toFixed(1);
};
