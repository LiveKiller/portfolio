import React from 'react';
import '../styles/CertificationBox.css'; // Make sure to create and style this CSS file

const CertificationBox = ({ title, description, link }) => (
  <div className="box">
    <span></span>
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  </div>
);

export default CertificationBox;
