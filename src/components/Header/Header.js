import React from 'react';

const header = () => {
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

export default header;
