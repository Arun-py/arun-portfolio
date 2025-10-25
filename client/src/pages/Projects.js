import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';
import BlackHoleBackground from '../components/BlackHoleBackground';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Force use of local projects data with updated links
    setProjects(localProjects);
  }, []);

  const localProjects = [
    {
      id: 1,
      title: 'Renewable Energy Monitoring System',
      description: 'A team-driven IoT system for real-time renewable energy analysis using Raspberry Pi 5 and integrated ML models for trend prediction. Monitors voltage, current, and efficiency of renewable energy units with live web-based dashboard visualization.',
      impact: 'Optimizes renewable resource utilization by identifying losses and overuse.',
      techStack: ['Python', 'Machine Learning', 'React', 'API Visualization', 'Raspberry Pi 5'],
      category: 'IoT & ML',
      links: [
        { label: 'Team Website', url: 'https://team-prometheus-website.vercel.app/' },
        { label: 'Presentation', url: 'https://drive.google.com/file/d/1Im6EN7KSZG30ByE-zzjtNrqxWtYWkKj0/view?usp=sharing' },
        { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=Cu67_BxlkpE' }
      ]
    },
    {
      id: 2,
      title: 'HR Leave Tracking System',
      description: 'An efficient HR web platform for leave management implementing role-based access and automated alerts. Calculates remaining leaves, penalties, and holidays automatically with user-friendly dashboards.',
      impact: 'Streamlines HR operations and employee leave management.',
      techStack: ['MERN Stack', 'REST APIs', 'Authentication'],
      category: 'Full Stack',
      links: [
        { label: 'Live Website', url: 'https://hr-leave-tracker-frontend.vercel.app/' }
      ]
    },
    {
      id: 3,
      title: 'Air Quality & Gas Detection System',
      description: 'An intelligent safety system designed to monitor AQI, LPG leakage, and toxic gases. Built on ESP32 with multiple sensor modules (MQ2, MQ135), real-time alert generation and data logging with web interface.',
      impact: 'Promotes safer industrial and domestic environments.',
      techStack: ['Embedded C++', 'React', 'ESP32', 'Sensor Integration'],
      category: 'IoT & Safety',
      status: 'Ongoing'
    },
    {
      id: 4,
      title: "Bull's Eye — Stock Market Screener",
      description: 'A personalized web app for stock performance monitoring with real-time stock data, search and comparison functions using external APIs and responsive visualizations.',
      impact: 'Enables informed investment decisions through data visualization.',
      techStack: ['React', 'JavaScript', 'Chart.js', 'REST API'],
      category: 'Web Application',
      status: 'Ongoing'
    }
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon (SIH) 2025',
      description: 'College-level shortlisted participant',
      year: 2025,
      icon: '🏅'
    },
    {
      title: 'BSVC (Team Gandiva)',
      description: 'Endurance Runner-Up; collaborated on embedded racing tech',
      year: 2024,
      icon: '🏆'
    },
    {
      title: 'ITI TN Poster Design Competition',
      description: 'Winner for innovative design presentation',
      year: 2023,
      icon: '🎨'
    },
    {
      title: 'GKDC Technical Event',
      description: 'Volunteered in marshalling and technical coordination',
      year: 2024,
      icon: '🤝'
    }
  ];

  const displayProjects = projects.length > 0 ? projects : localProjects;

  return (
    <div className="projects">
      <BlackHoleBackground />

      <section className="projects-intro section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title gradient-title">Projects & Achievements</h1>
            <p className="section-subtitle">
              Showcasing innovative solutions that blend hardware and software
            </p>
          </motion.div>
        </div>
      </section>

      <section className="featured-projects section">
        <div className="container">
          <h2 className="section-title">🧩 Featured Projects</h2>
          <div className="projects-container">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>

                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <div className="tech-tags">
                    {project.techStack.map((tech, tIndex) => (
                      <span key={tIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.links ? (
                    project.links.map((link, lIndex) => {
                      let icon = <FaExternalLinkAlt />;
                      if (link.label.toLowerCase().includes('presentation') || link.label.toLowerCase().includes('ppt')) {
                        icon = <FaFilePowerpoint />;
                      } else if (link.label.toLowerCase().includes('demo') || link.label.toLowerCase().includes('video') || link.label.toLowerCase().includes('youtube')) {
                        icon = <FaYoutube />;
                      }
                      return (
                        <a key={lIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                          {icon} {link.label}
                        </a>
                      );
                    })
                  ) : project.status === 'Ongoing' ? (
                    <span className="ongoing-badge">🚧 Ongoing</span>
                  ) : (
                    <a href="https://github.com/Arun-py" target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🏆 Achievements & Recognitions</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
