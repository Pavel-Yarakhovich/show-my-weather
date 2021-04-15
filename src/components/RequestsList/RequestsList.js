import React from 'react';
import classes from './RequestsList.module.scss';

export const RequestsList = ({ requests }) => {
  let ul = document.querySelector('ul');
  let ulStyle;
  if (ul?.clientHeight < ul?.scrollHeight) {
    ulStyle = classes.OpacityCover;
  }

  return (
    <div className={classes.RequestsList}>
      <span>Last requests:</span>
      <ul className={ulStyle}>
        {requests?.map((r, idx) => {
          if (r.trim().length >= 2) return <li key={idx}>{r}</li>;
        })}
      </ul>
    </div>
  );
};
