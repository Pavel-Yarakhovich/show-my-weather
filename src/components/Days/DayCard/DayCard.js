import React from 'react';
import moment from 'moment';
import logo from '../../../assets/sun.svg';
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
      <img src={logo}></img>
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
