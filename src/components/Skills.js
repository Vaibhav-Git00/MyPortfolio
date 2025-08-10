import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills'); // 'skills' or 'education'

  const skillsData = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "Node.js", level: 80, color: "#339933" },
    { name: "MongoDB", level: 75, color: "#47A248" },
    { name: "Express.js", level: 78, color: "#000000" },
    { name: "CSS3", level: 88, color: "#1572B6" }
  ];

  const educationData = {
    schooling: {
      title: "High School Education",
      institution: "ABC Senior Secondary School",
      year: "2018-2020",
      grade: "85.2%",
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    college: {
      title: "Bachelor of Technology (B.Tech)",
      institution: "XYZ University",
      branch: "Computer Science & Engineering",
      year: "2020-2024",
      cgpa: "8.5/10",
      highlights: ["Data Structures & Algorithms", "Web Development", "Database Management", "Software Engineering"]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log("Downloading resume...");
    // Example: window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Resume📜</h2>
          
          {/* Toggle Switch */}
          <div className="toggle-container">
            <div className="toggle-switch">
              <button 
                className={`toggle-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button 
                className={`toggle-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Header based on active tab */}
        <div className="content-header">
          <h3 className="content-title">
            {activeTab === 'education' ? 'Education' : 'Resume'}
          </h3>
        </div>

        {/* Education Content */}
        {activeTab === 'education' && (
          <div className="education-content">
            <div className="education-grid">
              {/* Left Container - Schooling */}
              <div className="education-card">
                <div className="education-icon">🏫</div>
                <h4>{educationData.schooling.title}</h4>
                <h5>{educationData.schooling.institution}</h5>
                <p className="education-year">{educationData.schooling.year}</p>
                <p className="education-grade">Grade: {educationData.schooling.grade}</p>
                <div className="subjects">
                  <h6>Key Subjects:</h6>
                  <ul>
                    {educationData.schooling.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Container - B.Tech */}
              <div className="education-card">
                <div className="education-icon">🎓</div>
                <h4>{educationData.college.title}</h4>
                <h5>{educationData.college.institution}</h5>
                <p className="education-branch">{educationData.college.branch}</p>
                <p className="education-year">{educationData.college.year}</p>
                <p className="education-grade">CGPA: {educationData.college.cgpa}</p>
                <div className="subjects">
                  <h6>Key Areas:</h6>
                  <ul>
                    {educationData.college.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Content */}
        {activeTab === 'skills' && (
          <div className="skills-content">
            <div className="skills-grid">
              {/* Left Container - Summary */}
              <div className="summary-container">
                <div className="summary-card">
                  <h4>About Myself</h4>
                  <p>
                    I'm a passionate Full Stack Web Developer with expertise in modern web technologies. 
                    I love creating innovative solutions and have a strong foundation in both frontend 
                    and backend development. My goal is to build applications that not only function 
                    flawlessly but also provide exceptional user experiences.
                  </p>
                  <p>
                    With a keen eye for detail and a passion for clean code, I'm always eager to learn 
                    new technologies and take on challenging projects that push my skills to the next level.
                  </p>
                  <button className="download-btn" onClick={handleDownloadResume}>
                    <i className="fas fa-download"></i>
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Right Container - Skills */}
              <div className="skills-container-right">
                <h4>Technical Skills</h4>
                <div className="skills-list">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${isVisible ? 'animate' : ''}`}
                          style={{
                            '--skill-level': `${skill.level}%`,
                            '--skill-color': skill.color,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
