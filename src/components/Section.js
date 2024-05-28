import React from 'react';
import '../styles/Section.css'; // Make sure to create and style this CSS file

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    <div className="container">
      {children}
    </div>
  </section>
);

export default Section;
