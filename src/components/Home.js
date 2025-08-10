import React from 'react';
import './Home.css';
import profileImg from '../assets/images/vaibhav1.jpeg'; // Better path structure

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="intro-text">
            <h1 className="name">Full Stack Web Developer✌️</h1>
            {/* <h2 className="title">Software Developer</h2> */}
            <p className="description">
              Hi👋, Vaibhav Kesharwani. A passionate Full Stack Web Developer based in Punjab, India❤️.
            </p>
          </div>
          
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToProjects}>View My Work</button>
            <button className="btn-secondary" onClick={scrollToContact}>Get In Touch</button>
          </div>
          
          <div className="tech-stack">
            <div className="tech-item">
              <i className="fab fa-html5"></i>
              <span>HTML</span>
            </div>
            <div className="tech-item">
              <i className="fab fa-css3-alt"></i>
              <span>CSS</span>
            </div>
            <div className="tech-item">
              <i className="fab fa-js-square"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="tech-item">
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-leaf"></i>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
        
        <div className="home-visual">
          <div className="bubble-container">
            <div className="water-bubble">
              <div className="bubble-reflection"></div>
              <div className="bubble-highlight"></div>
              <div className="profile-image">
                <img 
                  src={profileImg} 
                  alt="Vaibhav Kesharwani" 
                  className="profile-img"
                  onLoad={(e) => {
                    e.target.nextSibling.style.display = 'none';
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="placeholder-avatar">VK</div>
              </div>
              <div className="floating-particles">
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div> */}
    </section>
  );
};

export default Home;
