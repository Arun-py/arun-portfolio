import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Arun Thanigaimani</h3>
            <p className="footer-subtitle">IoT & Front-End Developer</p>
            <p className="footer-philosophy">
              "Technology should make life simpler, not more complex."
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/skills" className="footer-link">Skills</a>
              <a href="/projects" className="footer-link">Projects</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a
                href="https://github.com/Arun-py"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-thanigaimani-128156365"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:aruncdmney@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://maps.app.goo.gl/VpeqJWNkJY4r6PRw7"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Location"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Arun Thanigaimani. Designed with passion and powered by innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
