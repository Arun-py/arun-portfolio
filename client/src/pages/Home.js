import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase } from 'react-icons/fa';
import BlackHoleBackground from '../components/BlackHoleBackground';
import './Home.css';

const Home = () => {
  const highlights = [
    { label: '💼 Profession', value: 'IoT & Embedded Systems Engineer, Front-End Developer' },
    { label: '✉️ Email', value: 'aruncdmney@gmail.com / 727723euee010@skcet.ac.in' },
    { label: '🧠 Core Focus', value: 'IoT, Renewable Energy Systems, Smart Automation, Front-End Web Development' },
    { label: '💡 Experience', value: '1+ year of hands-on learning through projects & internships' },
    { label: '🧩 Technical Stack', value: 'MERN, C++, Python, ESP32, Raspberry Pi, MATLAB, Flutter' },
    { label: '🏆 Achievements', value: 'SIH Shortlisted, BSVC Runner-Up, Poster Design Winner' }
  ];

  return (
    <div className="home">
      <BlackHoleBackground />
      
      <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="profile-image-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/images/arun_profile.jpg"
                alt="Arun Thanigaimani"
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="gradient-text">Arun Thanigaimani</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              IoT & Front-End Developer Building the Bridge Between Hardware and Software
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Innovating at the intersection of electronics, automation, and web technology, 
              I create smart systems that connect devices, data, and design — shaping a more 
              intelligent, sustainable future.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/projects" className="btn btn-primary">
                <FaBriefcase /> Explore My Work
              </Link>
              <a
                href="https://drive.google.com/file/d/1nlY4jZSKjeeKXlUyBOWoxtLE5DfOiV_3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.div>
          </motion.div>
      </section>

      <section className="intro-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="intro-content"
          >
            <h2 className="section-title gradient-title">About My Vision</h2>
            <p className="intro-text">
              I'm an IoT and Embedded Systems Engineer currently expanding my expertise in 
              front-end development. My work spans from developing sensor-based automation 
              systems to creating interactive web platforms that visualize and manage real-time data.
            </p>
            <p className="intro-text">
              My vision is simple — to merge hardware precision with software creativity to 
              design smarter, greener, and more connected solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="highlights-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title gradient-title">Quick Highlights</h2>
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-card card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="highlight-label">{item.label}</h3>
                  <p className="highlight-value">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mission-section section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🎯 My Mission</h2>
            <div className="mission-card card">
              <p className="mission-text">
                To develop impactful, sustainable, and intelligent technology by blending 
                engineering depth with user-focused design.
              </p>
              <p className="mission-text">
                I aim to contribute to the global push toward smart renewable automation 
                systems that improve how we live and interact with technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
