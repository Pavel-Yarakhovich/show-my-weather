import React from 'react';
import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Date}>25 February 2021</h1>
      <input
        type="search"
        placeholder="Enter location..."
        className={classes.Location}
      />
    </header>
  );
};
