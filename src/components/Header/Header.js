import React from 'react';
import moment from 'moment';
import classes from './Header.module.scss';

export const Header = () => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header className={classes.Header}>
      <h1 className={classes.Date}>
        {moment(new Date()).format('DD MMMM yyyy')}
      </h1>
      <input
        type="search"
        ref={inputRef}
        placeholder="Enter location..."
        className={classes.Location}
      />
    </header>
  );
};
