import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMicrochip, FaBrain, FaTools } from 'react-icons/fa';
import BlackHoleBackground from '../components/BlackHoleBackground';
import './Skills.css';

const Skills = () => {
  const skillsCategories = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python'],
      color: '#00d4ff'
    },
    {
      icon: <FaServer />,
      title: 'Full Stack Development',
      skills: ['MongoDB', 'Express', 'React', 'Node.js'],
      color: '#a855f7'
    },
    {
      icon: <FaCode />,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS'],
      color: '#f97316'
    },
    {
      icon: <FaMicrochip />,
      title: 'Hardware Platforms',
      skills: ['ESP32', 'Raspberry Pi 5'],
      color: '#10b981'
    },
    {
      icon: <FaMicrochip />,
      title: 'IoT & Embedded Systems',
      skills: ['Arduino', 'Sensor Integration', 'MQTT'],
      color: '#06b6d4'
    },
    {
      icon: <FaBrain />,
      title: 'Machine Learning',
      skills: ['TensorFlow Lite', 'Python Data Handling'],
      color: '#ec4899'
    },
    {
      icon: <FaTools />,
      title: 'Software & Tools',
      skills: ['MATLAB', 'Fusion 360', 'DaVinci Resolve', 'Photoshop', 'Canva', 'Flutter'],
      color: '#8b5cf6'
    },
    {
      icon: <FaCode />,
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
      color: '#f59e0b'
    }
  ];

  const focusAreas = [
    'IoT Systems',
    'Renewable Monitoring',
    'Smart Automation',
    'Web–Hardware Integration'
  ];

  const strengths = [
    {
      title: 'System Thinking',
      description: 'Seeing both the hardware and software sides of a solution',
      emoji: '🧠'
    },
    {
      title: 'Problem Solving',
      description: 'Structured, analytical, and iterative approach to issues',
      emoji: '🔍'
    },
    {
      title: 'Rapid Learning',
      description: 'Adaptability and self-learning through experimentation',
      emoji: '⚡'
    },
    {
      title: 'Design Orientation',
      description: 'Creating interfaces that feel modern, functional, and intuitive',
      emoji: '🎨'
    }
  ];

  const softSkills = [
    'Communication & Presentation',
    'Logical Reasoning',
    'Research-Oriented Thinking',
    'Creative Visualization',
    'Project Leadership',
    'Technical Writing'
  ];

  return (
    <div className="skills">
      <BlackHoleBackground />

      <section className="skills-intro section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title gradient-title">Skills & Tools</h1>
            <p className="section-subtitle">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </motion.div>
        </div>
      </section>

      <section className="technical-skills section">
        <div className="container">
          <h2 className="section-title">🧠 Core Technical Skills</h2>
          <div className="skills-grid">
            {skillsCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-tags">
                  {category.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skill-tag" style={{ borderColor: category.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-areas section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🎯 Focus Areas</h2>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="focus-item card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="focus-text">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="strengths-section section">
        <div className="container">
          <h2 className="section-title">⚙️ Development Strengths</h2>
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="strength-card card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="strength-emoji">{strength.emoji}</div>
                <h3 className="strength-title">{strength.title}</h3>
                <p className="strength-description">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-skills section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">💼 Soft Skills</h2>
            <div className="soft-skills-container card">
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="soft-skill-item"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="checkmark">✓</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
