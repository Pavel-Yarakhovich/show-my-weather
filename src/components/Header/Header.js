import React, { useEffect, useRef } from 'react';
import classes from './Header.module.scss';

export const Header = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <header className={classes.Header}>
      <h1 className={classes.Date}>25 February 2021</h1>
      <input
        type="search"
        ref={inputRef}
        placeholder="Enter location..."
        className={classes.Location}
      />
    </header>
  );
};
