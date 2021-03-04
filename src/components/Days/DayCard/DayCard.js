import React from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../../../utils';
import classes from './DayCard.module.scss';

export const DayCard = (props) => {
  let cardClasses = [classes.Card];
  if (props.id === 'scale') {
    cardClasses.push(classes.Scale);
  }
  return (
    <div className={cardClasses.join(' ')}>
      <h2 className={classes.Day}>
        {moment(props.day.dt * 1000).format('dddd, DD MMMM')}
      </h2>
      {props.day.weather[0]?.icon ? (
        <img src={getWeatherIcon(props.day.weather[0]?.icon)} />
      ) : null}

      <table>
        <tbody>
          <tr>
            <td>Temp</td>
            <td>{props.day.dew_point}</td>
          </tr>
          <tr>
            <td>Atm</td>
            <td>{props.day.pressure}mm</td>
          </tr>
          <tr>
            <td>Hum</td>
            <td>{props.day.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
