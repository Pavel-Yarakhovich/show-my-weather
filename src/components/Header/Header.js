import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <h1 className="Date">25 February 2021</h1>
      <input
        type="search"
        placeholder="Enter location..."
        className="Location"
      />
    </header>
  );
};
