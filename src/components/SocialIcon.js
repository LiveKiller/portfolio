import React from 'react';
import '../styles/SocialIcon.css'; // Make sure to create and style this CSS file

const SocialIcon = ({ icon, link, label }) => (
  <a
    href={link}
    className={`social-button social-button--${icon}`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

export default SocialIcon;
