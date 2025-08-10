import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory updates and order tracking.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
      githubLink: "https://github.com/vaibhav/ecommerce-platform",
      liveLink: "https://ecommerce-demo.netlify.app",
      image: "🛒",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking dashboard.",
      techStack: ["React", "Firebase", "Material-UI", "React DnD"],
      githubLink: "https://github.com/vaibhav/task-manager",
      liveLink: "https://taskmanager-demo.netlify.app",
      image: "📋",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, 7-day forecasts, and interactive maps. Features location-based weather and favorite cities management.",
      techStack: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      githubLink: "https://github.com/vaibhav/weather-dashboard",
      liveLink: "https://weather-dashboard-demo.netlify.app",
      image: "🌤️",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with content management system, user authentication, commenting system, and SEO optimization. Supports markdown editing and image uploads.",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      githubLink: "https://github.com/vaibhav/blog-platform",
      liveLink: "https://blog-platform-demo.vercel.app",
      image: "📝",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing projects, skills, and experience. Built with modern React practices and optimized for performance and SEO.",
      techStack: ["React", "CSS3", "React Router", "Netlify"],
      githubLink: "https://github.com/vaibhav/portfolio",
      liveLink: "https://vaibhav-portfolio.netlify.app",
      image: "💼",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, private messaging, file sharing, and emoji support. Features online status indicators and message history.",
      techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubLink: "https://github.com/vaibhav/chat-app",
      liveLink: "https://chat-app-demo.herokuapp.com",
      image: "💬",
      category: "Full Stack"
    }
  ];

  const categories = ["All", "Frontend", "Full Stack"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my recent work</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
