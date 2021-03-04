import React from 'react';
import logo from '../../../assets/sun.svg';

export const DayCard = () => {
  return (
    <div className="Card">
      <h2 className="Day">Wednesday 25 February</h2>
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
