import React from 'react';
import moment from 'moment';
import classes from './Header.module.scss';

export const Header = (props) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  }, [props.clicked]);

  return (
    <header className={classes.Header}>
      <h1 className={classes.Date}>
        {moment(new Date()).format('DD MMMM yyyy')}
      </h1>
      <div className={classes.Controls}>
        <button onClick={props.clicked}>Push</button>
        <input
          type="search"
          ref={inputRef}
          placeholder="Enter location..."
          className={classes.Location}
          onChange={props.changed}
          clicked={props.clicked}
          value={props.value}
          onKeyPress={props.onkey}
        />
      </div>
    </header>
  );
};
