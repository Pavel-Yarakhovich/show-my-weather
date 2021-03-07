import React from 'react';
import classes from './RequestsList.module.scss';

export const RequestsList = ({ requests }) => {
  const ul = document.querySelector('ul');
  let isOverflow = false;
  if (ul) isOverflow = ul?.clientHeight < ul?.scrollHeight;

  return (
    <div className={classes.RequestsList}>
      <span>Last requests:</span>
      <ul className={isOverflow && classes.OpacityCover}>
        {requests?.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
};
