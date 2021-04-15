import React from 'react';
import classes from './DayInfo.module.scss';
import { momentFormat } from '../../utils/index';

export const DayInfo = ({ weather, temp, tempUnit }) => {
  return (
    <table className={classes.DayInfo}>
      <tbody>
        {/* <tr className={classes.Geolocation}>
          <td>Geolocation</td>
          <td>
            {weather.lat},{weather.lon}
          </td>
        </tr> */}
        <tr>
          <td>Temperature</td>
          <td>{temp + ' ' + tempUnit}</td>
        </tr>
        <tr>
          <td>Atmoshere</td>
          <td>{weather.current.pressure}mm</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{weather.current.humidity}%</td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>{momentFormat(weather.current.sunrise, 'HH:mm')}</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{momentFormat(weather.current.sunset, 'HH:mm')}</td>
        </tr>
      </tbody>
    </table>
  );
};
