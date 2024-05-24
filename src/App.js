import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const name = ", I'm Savitender Singh a B.Tech CSE 1st year Student at SGT University";
  const description = "Fluent in Python | C++ | C | Java | GUI in Python | Game Dev in Python | HTML5 | CSS3 || Currently learning js; React.js; ";

  return (
    <div className="App">
      <div className="background-image"></div>
      <nav className="navbar">
        <h1>My Portfolio</h1>
      </nav>
      <div className="card">
        <header className="App-header">
          <div className="intro">
            <div className="intro-text">
              <h1>Hi{name}</h1>
              <p>{description}</p>
            </div>
            <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
          </div>
        </header>
        <main className="card-content">
          <section id="education" className="section">
            <h2>Education</h2>
            <p>B.Tech in Computer Science at SGT University</p>
          </section>
          <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>A brief description of Project 1.</p>
                <img src="project1.jpg" alt="Project 1" className="project-image" />
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>A brief description of Project 2.</p>
                <img src="project2.jpg" alt="Project 2" className="project-image" />
              </div>
            </div>
          </section>
          <section id="certification" className="section">
            <h2>Certifications</h2>
            <CertificationCard name="Certification 1" course="Course Name" />
            <CertificationCard name="Certification 2" course="Course Name" link="https://codered.eccouncil.org/certificate/fdea0a5c-98f4-4f4f-b854-8532ee5ecddd?logged=true" src="/assets/image.png"/>
          </section>
        </main>
        <footer className="footer">
          <div className="social-buttons">
            <SocialIcon icon="facebook" link="#" label="Facebook" />
            <SocialIcon icon="google" link="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=singhsavitender4031@email.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%2C%0A%0AI%20tried%20contacting%20you%20today%20but%20you%20seem%20to%20have%20missed%20my%20call.%20%0A%0APlease%20return%20my%20call%20as%20soon%20as%20you%E2%80%99re%20available.%20%0A%0AIn%20any%20case%2C%20I%20will%20try%20ringing%20you%20at%20a%20later%20time.%0A%0A%0ATy%2C%0A%0A%0A%0A" label="Gmail" />
            <SocialIcon icon="linkedin" link="https://www.linkedin.com/in/savitender-singh-86438928a/" label="LinkedIn" />
            <SocialIcon icon="github" link="https://github.com/LiveKiller" label="GitHub" />
            <SocialIcon icon="instagram" link="https://instagram.com/savi_lk.1" label="Instagram" />
          </div>
          <div className="copyright">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Certification Card component
// Certification Card component
const CertificationCard = ({ name, course, link, src }) => (
  <div className="certification-card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3>{name}</h3>
      <p>{course}</p>
      <img src={src} alt={name} className="certification-image" />
    </a>
  </div>
);


// Social Icon component
const SocialIcon = ({ icon, link, label }) => {
  return (
    <a href={link} className={`social-button social-button--${icon}`} aria-label={label}>
      <i className={`fab fa-${icon}`}></i>
    </a>
  );
}

export default App;
