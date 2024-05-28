import React from 'react';
import './styles/App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import ProjectBox from './components/ProjectBox';
import CertificationBox from './components/CertificationBox';
import SocialIcon from './components/SocialIcon';

const App = () => {
  const name = ", I'm Savitender Singh, a B.Tech CSE 1st year Student at SGT University";
  const description = "Fluent in Python, C++, C, Java, GUI in Python, Game Dev in Python, HTML5, CSS3. Currently learning JavaScript and React.js.";
  
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

  return (
    <div className="App">
      <Nav />
      <div className="card">
        <Header name={name} description={description} />
        <main className="card-content">
          <Section id="education" title="Education">
            <p>B.Tech in Computer Science at SGT University</p>
          </Section>
          <Section id="projects" title="Projects">
            {projectData.map((project, index) => (
              <ProjectBox key={index} {...project} />
            ))}
          </Section>
          <Section id="certifications" title="Certifications">
            {certificationData.map((certification, index) => (
              <CertificationBox key={index} {...certification} />
            ))}
          </Section>
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

export default App;
