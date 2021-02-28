import React from 'react';

import classes from './Header.module.css';

const header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.Date}>25 February 2021</h1>
      <input
        type="text"
        placeholder="Enter location..."
        className={classes.Location}
      />
    </header>
  );
};

export default header;
