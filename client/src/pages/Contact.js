import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import BlackHoleBackground from '../components/BlackHoleBackground';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'aruncdmney@gmail.com',
      link: 'mailto:aruncdmney@gmail.com'
    },
    {
      icon: <FaEnvelope />,
      title: 'Academic Email',
      value: '727723euee010@skcet.ac.in',
      link: 'mailto:727723euee010@skcet.ac.in'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'BK Pudur, Kuniyamuthur, Coimbatore – 641008',
      link: 'https://maps.app.goo.gl/VpeqJWNkJY4r6PRw7'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/Arun-py',
      link: 'https://github.com/Arun-py'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Arun Thanigaimani',
      link: 'https://www.linkedin.com/in/arun-thanigaimani-128156365'
    }
  ];

  const hobbies = [
    { icon: '🎮', title: 'Gaming', description: 'Exploring interactive environments that inspire design ideas' },
    { icon: '📚', title: 'Reading Novels', description: 'Especially tech, sci-fi, and innovation-related themes' },
    { icon: '🎨', title: 'Designing Posters', description: 'Using tools like Photoshop and Canva' },
    { icon: '🎬', title: 'Video Editing', description: 'Storytelling through visuals using DaVinci Resolve' }
  ];

  return (
    <div className="contact">
      <BlackHoleBackground />

      <section className="contact-intro section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title gradient-title">Get In Touch</h1>
            <p className="section-subtitle">
              Let's collaborate on innovative projects and create something amazing together
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card">
                <h2 className="form-title">Send a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-card card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4 className="info-title">{info.title}</h4>
                      <p className="info-value">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="hobbies-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🧭 Personal Interests</h2>
            <p className="section-subtitle">
              Beyond circuits and code, I love immersing myself in:
            </p>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  className="hobby-card card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="hobby-icon">{hobby.icon}</div>
                  <h3 className="hobby-title">{hobby.title}</h3>
                  <p className="hobby-description">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="philosophy-section section">
        <div className="container">
          <motion.div
            className="philosophy-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🧩 Working Philosophy</h2>
            <div className="philosophy-card card">
              <blockquote className="philosophy-quote">
                "Technology should make life simpler, not more complex. Every circuit, every line 
                of code, and every interface I design should serve a purpose — making human interaction 
                with technology more meaningful and efficient."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
