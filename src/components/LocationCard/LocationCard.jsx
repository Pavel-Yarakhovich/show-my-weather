import React from 'react';
import KelvinOrCelsius from '../KelvinOrCelsius/KelvinOrCelsius';
import * as styles from './LocationCard.module.scss';

export const LocationCard = React.memo(({ weather, temp, changed }) => {
  return (
    <div className={styles.container}>
      <div className={styles.temp}>
        <KelvinOrCelsius weather={weather} temp={temp} changed={changed} />
      </div>
      <div data-loc={weather.timezone} className={styles.location}>
        {weather.timezone}
      </div>
    </div>
  );
});

LocationCard.displayName = 'Location Card';
