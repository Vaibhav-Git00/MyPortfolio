import React from 'react';
import './About.css';
import profileImg from '../assets/images/vaibhav1.jpeg'; // Import the image

const About = () => {
  const techPassions = [
    // {
    //   icon: '🚀',
    //   title: 'Frontend Development',
    //   description: 'Creating beautiful, responsive user interfaces with React, JavaScript, and modern CSS'
    // },
    // {
    //   icon: '⚡',
    //   title: 'Performance Optimization',
    //   description: 'Building fast, efficient applications that deliver exceptional user experiences'
    // },
    // {
    //   icon: '🎨',
    //   title: 'UI/UX Design',
    //   description: 'Crafting intuitive designs that bridge the gap between functionality and aesthetics'
    // },
    // {
    //   icon: '🔧',
    //   title: 'Problem Solving',
    //   description: 'Tackling complex challenges with creative solutions and clean, maintainable code'
    // }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me🧑‍💻</h2>
          {/* <p className="section-subtitle">Get to know me better</p> */}
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="bio-section">
              <h3>About Me🤘</h3>
              <h1>A passionate Full Stack Web Developer based in Punjab, India❤️.</h1>
              <p>
                  As a Full Stack Web Developer, my Tech Stack includes impressive skills✨ such as HTML, CSS, JavaScript, React, Node JS, Mongo DB, Express JS, FireBase, API Integration, Figma, WordPress and many more. I excel in designing and maintaining responsive Websites. I am also a UX Designer📱, who excels at providing smooth user experience. My expertise lies in writing clean and optimized codes and utilizing cutting-edge development tools⚙️ and techniques. I am also a team player who thrives in collaborating🤝 with teams to produce outstanding web applications.
              </p>
            </div>

            {/* <div className="stats-section">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
            </div> */}
          </div>

          <div className="about-image">
            <div className="image-container">
              <img 
                src={profileImg} 
                alt="Vaibhav Kesharwani" 
                className="profile-image"
                onLoad={() => console.log('About image loaded successfully')}
                onError={() => console.log('About image failed to load')}
              />
              <div className="placeholder-image">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-passions">
          {/* <h3 className="passions-title">What I'm Passionate About</h3> */}
          <div className="passions-grid">
            {techPassions.map((passion, index) => (
              <div key={index} className="passion-card">
                <div className="passion-icon">{passion.icon}</div>
                <h4 className="passion-title">{passion.title}</h4>
                <p className="passion-description">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
