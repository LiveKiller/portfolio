import React from 'react';
import '../styles/Nav.css';
const Nav = () => (
  <section className="nav-1">
    <nav>
      <a className="item" href="#home"><div className="linktext">Home</div></a>
      <a className="item" href="#nav-1"><div className="linktext">About</div></a>
      <a className="item" href="#projects"><div className="linktext">Projects</div></a>
      <a className="item" href="#certifications"><div className="linktext">Certifications</div></a>
      <a className="item" href="#nav-1"><div className="linktext">Contact</div></a>
    </nav>
  </section>
);

export default Nav;
