import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  const name = ", I'm Savitender Singh, a B.Tech CSE 1st year Student at SGT University";
  const description = "Fluent in Python, C++, C, Java, GUI in Python, Game Dev in Python, HTML5, CSS3. Currently learning JavaScript and React.js.";


  return (
    <div className="App">
      <section className="nav-1">
        <nav>
          <a className="item" href="#nav-1">
            <div className="linktext">Home</div>
          </a>
          <a className="item" href="#nav-1">
            <div className="linktext">About</div>
          </a>
          <a className="item" href="#nav-1">
            <div className="linktext">Portfolio</div>
          </a>
          <a className="item" href="#nav-1">
            <div className="linktext">Contact</div>
          </a>
          <a className="item" href="#nav-1">
            <div className="linktext">Blog</div>
          </a>
        </nav>
      </section>
      <div className="card">
        <header className="App-header">
          <div className="intro">
            <div className="intro-text">
              <h1>Hi{name}</h1>
              <p>{description}</p>
            </div>

          </div>
        </header>
        <main className="card-content">
          <section id="education" className="section">
            <h2>Education</h2>
            <p>B.Tech in Computer Science at SGT University</p>
          </section>
          <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="container">
              {projectData.map((project, index) => (
                <ProjectBox key={index} {...project} />
              ))}
            </div>
          </section>
          <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="container">
              {certificationData.map((certification, index) => (
                <CertificationBox key={index} {...certification} />
              ))}
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="social-buttons">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
          </div>
          <div className="copyright">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

const ProjectBox = ({ title, description, link }) => (
  <div className="box">
    <span></span>
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  </div>
);

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

const projectData = [
  {
    title: 'Library Management System',
    description: 'This project manages books in the library by adding, updating, issuing, etc.',
    link: 'https://github.com/LiveKiller/Library_Management'
  },
  {
    title: 'Kryptos',
    description: 'A project based on the Kryptos sculpture in the CIA HQ, it encrypts and decrypts data into different types.',
    link: 'https://github.com/LiveKiller/Kryptos/tree/master/Kryptos'
  },
  {
    title: 'To-Do List',
    description: 'Users can create to-do lists, track their tasks, delete and update their tasks. All tasks are stored in a MySQL DB.',
    link: 'https://github.com/LiveKiller/CodSoft/tree/main/To-Do-List'
  }
  // Add more projects as needed
];

const certificationData = [
  {
    title: 'Certification 1',
    description: 'Description of Certification 1',
    link: 'https://google.com'
  },
  {
    title: 'Certification 2',
    description: 'Description of Certification 2',
    link: 'https://google.com'
  }
  // Add more certifications as needed
];

const socialLinks = [
  {
    icon: 'facebook',
    link: '#',
    label: 'Facebook'
  },
  {
    icon: 'google',
    link: 'mailto:singhsavitender4031@email.com?subject=MISSED%20CALL%20EZTRADER',
    label: 'Gmail'
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/savitender-singh-86438928a/',
    label: 'LinkedIn'
  },
  {
    icon: 'github',
    link: 'https://github.com/LiveKiller',
    label: 'GitHub'
  },
  {
    icon: 'instagram',
    link: 'https://instagram.com/savi_lk.1',
    label: 'Instagram'
  }
];

export default App;
