import React from 'react';
import '../styles/Header.css'; // Make sure to create and style this CSS file

const Header = ({ name, description }) => (
  <header className="App-header">
    <div className="intro">
      <div className="intro-text">
        <h1>Hi{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  </header>
);

export default Header;
