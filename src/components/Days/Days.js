import React from 'react';
import { DayCard } from './DayCard/DayCard';

export const Days = () => {
  return (
    <div className="Cards">
      <input type="button" id="arrowBack" />
      <label htmlFor="arrowBack" className="arrowBack" />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard className="Card ScaleCard" />
      <DayCard />
      <DayCard />
      <DayCard />
      <input type="button" id="arrowNext" />
      <label htmlFor="arrowNext" className="arrowNext" />
    </div>
  );
};
