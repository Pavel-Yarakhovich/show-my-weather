import React from 'react';
import { convertKelvinToCelsius, getWeatherIcon } from '../../utils';
import * as styles from './LocationCard.module.scss';

export const LocationCard = React.memo(({ weather }) => {
  return (
    <div className={styles.container}>
      <div className={styles.temp}>
        <span>
          {convertKelvinToCelsius(weather.current.feels_like).toFixed(1)}
        </span>
      </div>
      <img
        className={styles.icon}
        src={getWeatherIcon(weather.current.weather[0]?.icon)}
      />
      <div data-loc={weather.timezone} className={styles.location}>
        {weather.timezone}
      </div>
    </div>
  );
});

LocationCard.displayName = 'Location Card';
