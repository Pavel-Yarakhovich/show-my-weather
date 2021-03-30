import React from 'react';
import moment from 'moment';
import logo from '../../../assets/sun.svg';
import classes from './DayCard.module.scss';
import { convertKelvinToCelsius } from '../../../utils/index';

export const DayCard = (props) => {
  const toggleKelvinCelsius = function () {
    return props.temp
      ? props.temp + (props.temp > 100 ? ' K' : ' \u2103')
      : convertKelvinToCelsius(props.weather.current.feels_like).toFixed(1) +
          ' \u2103';
  };
  const cardClasses = [classes.Card];
  if (props.id === 3) {
    cardClasses.push(classes.Scale);
  }
  return (
    <div className={cardClasses.join(' ')}>
      <h2 className={classes.Day}>
        {moment(props.day.dt * 1000).format('dddd, DD MMMM')}
      </h2>
      <img src={logo}></img>
      <table>
        <tbody>
          <tr>
            <td>Temp:</td>
            <td>{toggleKelvinCelsius()}</td>
          </tr>
          <tr>
            <td>Atm:</td>
            <td>{props.day.pressure}mm</td>
          </tr>
          <tr>
            <td>Hum:</td>
            <td>{props.day.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
