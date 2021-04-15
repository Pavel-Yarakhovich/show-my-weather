import React from 'react';
import styles from './KelvinOrCelsius.module.scss';

const KelvinOrCelsius = (props) => {
  return (
    <div className={styles.KelvinOrCelsius}>
      <span>{props.temp}</span>
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
