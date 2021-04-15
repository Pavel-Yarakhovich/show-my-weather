import React from 'react';
import { DayCard } from './DayCard/DayCard';
import classes from './Days.module.scss';

export const Days = ({ forecast, weather, temp, tempUnit }) => {
  return (
    <div className={classes.Cards}>
      <input type="button" id="arrowBack" />
      <label htmlFor="arrowBack" className={classes.arrowBack} />
      {forecast.map((day, idx) => (
        <DayCard
          key={idx}
          day={day}
          id={idx}
          weather={weather}
          temp={temp}
          tempUnit={tempUnit}
        />
      ))}
      <input type="button" id="arrowNext" />
      <label htmlFor="arrowNext" className={classes.arrowNext} />
    </div>
  );
};
