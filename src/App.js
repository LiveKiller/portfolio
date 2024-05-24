import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const name = "Savitender Singh";
  const description = "A passionate developer with a knack for problem-solving.";

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
              <h1>Hi {name}</h1>
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
            <CertificationCard name="Certification 2" course="Course Name" />
          </section>
        </main>
        <footer className="footer">
          <div className="social-buttons">
            <SocialIcon icon="facebook" link="#" label="Facebook" />
            <SocialIcon icon="google" link="#" label="Gmail" />
            <SocialIcon icon="linkedin" link="#" label="LinkedIn" />
            <SocialIcon icon="github" link="#" label="GitHub" />
            <SocialIcon icon="instagram" link="#" label="Instagram" />
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
const CertificationCard = ({ name, course }) => (
  <div className="certification-card">
    <h3>{name}</h3>
    <p>{course}</p>
  </div>
);

// Social Icon component
const SocialIcon = ({ icon, link, label }) => (
  <a href={link} className={`social-button social-button--${icon}`} aria-label={label}>
    <i className={`fab fa-${icon}`}></i>
  </a>
);

export default App;
