import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vaibhav',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vaibhav',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vaibhav',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/vaibhav',
      icon: 'fab fa-instagram'
    },
    {
      name: 'Email',
      url: 'mailto:vaibhav@example.com',
      icon: 'fas fa-envelope'
    }
  ];

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Vaibhav Kesharwani</h3>
              <p>Software Developer passionate about creating innovative web solutions</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.section)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <div className="contact-info">
              <p>📧 vaibhav@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 New York, NY</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Vaibhav Kesharwani. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with ❤️ using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
