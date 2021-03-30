import React from 'react';
import styles from './KelvinOrCelsius.module.scss';
import { convertKelvinToCelsius } from '../../utils/index';
const KelvinOrCelsius = (props) => {
  return (
    <div className={styles.KelvinOrCelsius}>
      <span>
        {props.temp ||
          convertKelvinToCelsius(props.weather.current.feels_like).toFixed(1)}
      </span>
      <select id="select-weather-option" onChange={props.changed}>
        <option defaultValue value="celsius">
          &#8451;
        </option>
        <option value="kelvin">&#8490;</option>
      </select>
    </div>
  );
};

export default KelvinOrCelsius;
