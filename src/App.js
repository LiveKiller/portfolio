import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hello, I'm Savitender Singh</p>
      </header>
      <main>
        <section id="education" className="section">
          <h2>Education</h2>
          <p>B.Tech in Computer Science at SGT University</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>

        <section id="certification" className="section">
          <h2>Certifications</h2>
          <p>Certification 1: Course Name</p>
          <p>Certification 2: Course Name</p>
        </section>
      </main>
      <footer className="footer">
        <div class="social-buttons">
          <a href="#" class="social-button social-button--facebook" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-button social-button--mail" aria-label="Gmail">
            <i class="fab fa-mail-m"></i>
          </a>
          <a href="#" class="social-button social-button--linkedin" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a href="#" class="social-button social-button--github" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>

          <a href="#" class="social-button social-button--instagram" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>

      </footer>
    </div>
  );
}

export default App;