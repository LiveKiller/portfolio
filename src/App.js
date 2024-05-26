import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  const name = ", I'm Savitender Singh, a B.Tech CSE 1st year Student at SGT University";
  const description = "Fluent in Python, C++, C, Java, GUI in Python, Game Dev in Python, HTML5, CSS3. Currently learning JavaScript and React.js.";

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
            <div className="container">
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Library Management System</h2>
                  <p>This project manages books in library whether by adding them updating issuing etc. To know more check it out by clicking the button</p>
                  <a href="https://github.com/LiveKiller/Library_Management" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Kryptos</h2>
                  <p>A project based on Kryptos sculpture in the CIA HQ, it encrypts and decrypts data into different types.</p>
                  <a href="https://github.com/LiveKiller/Kryptos/tree/master/Kryptos" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>To-Do List</h2>
                  <p>Users can create to-do lists, track their tasks, delete and even update their tasks, all of the tasks are stored in the DB using MySQL.</p>
                  <a href="https://github.com/LiveKiller/CodSoft/tree/main/To-Do-List" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>

              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Library Management System</h2>
                  <p>P4</p>
                  <a href="https://github.com/LiveKiller/Library_Management" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Library Management System</h2>
                  <p>TP5</p>
                  <a href="https://github.com/LiveKiller/Library_Management" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
              
            </div>
            
            
          </section>
          <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="container">
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Certification 1</h2>
                  <p>Description of Certification 1</p>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Certification 2</h2>
                  <p>Description of Certification 2</p>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Certification 2</h2>
                  <p>Description of Certification 2</p>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="social-buttons">
            <SocialIcon icon="facebook" link="#" label="Facebook" />
            <SocialIcon icon="google" link="mailto:singhsavitender4031@email.com?subject=MISSED%20CALL%20EZTRADER" label="Gmail" />
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

// Social Icon component
const SocialIcon = ({ icon, link, label }) => {
  return (
    <a href={link} className={`social-button social-button--${icon}`} aria-label={label} target="_blank" rel="noopener noreferrer">
      <i className={`fab fa-${icon}`}></i>
    </a>
  );
}

export default App;
