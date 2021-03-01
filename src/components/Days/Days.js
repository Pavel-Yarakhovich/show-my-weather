import React from 'react';
import { DayCard } from './DayCard/DayCard';
import classes from './Days.module.scss';

export const Days = () => {
  return (
    <div className={classes.Cards}>
      <input type="button" id="arrowBack" />
      <label htmlFor="arrowBack" className={classes.arrowBack} />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard id="scale" />
      <DayCard />
      <DayCard />
      <DayCard />
      <input type="button" id="arrowNext" />
      <label htmlFor="arrowNext" className={classes.arrowNext} />
    </div>
  );
};
