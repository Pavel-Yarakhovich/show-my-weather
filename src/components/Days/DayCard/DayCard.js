import React from 'react';
import logo from '../../../assets/sun.svg';
import classes from './DayCard.module.scss';

export const DayCard = (props) => {
  let cardClasses = [classes.Card];
  if (props.id === 'scale') {
    cardClasses.push(classes.Scale);
  }
  return (
    <div className={cardClasses.join(' ')}>
      <h2 className={classes.Day}>Wednesday 25 February</h2>
      <img src={logo}></img>
      <table>
        <tbody>
          <tr>
            <td>Temp</td>
            <td>25 C</td>
          </tr>
          <tr>
            <td>Atm</td>
            <td>748 mm</td>
          </tr>
          <tr>
            <td>Hum</td>
            <td>50%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
