import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaCertificate } from 'react-icons/fa';
import BlackHoleBackground from '../components/BlackHoleBackground';
import './About.css';

const About = () => {
  const learningDomains = [
    {
      title: 'Embedded Systems & IoT Design',
      description: 'Developing ESP32-based sensing systems and automation circuits.',
      icon: '🔧'
    },
    {
      title: 'Smart Renewable Monitoring',
      description: 'Creating intelligent dashboards for green energy efficiency.',
      icon: '🌱'
    },
    {
      title: 'Full-Stack Development (MERN)',
      description: 'Building responsive, user-focused web applications.',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and modern interfaces using React and TailwindCSS.',
      icon: '🎨'
    }
  ];

  const internships = [
    {
      company: 'Salzer Electronics Ltd.',
      period: 'Dec 2024 – Jan 2025',
      description: 'A turning point in my practical learning, where I explored the industrial side of electrical manufacturing.',
      highlights: [
        'Assisted in the assembly and testing of transformers',
        'Learned switchgear wiring, panel design, and component layout',
        'Understood the core principles of industrial safety and precision wiring',
        'Gained exposure to real-world manufacturing workflows and industrial-grade automation'
      ],
      certificate: 'https://drive.google.com/file/d/14C52Er_qCrM05PzXWJkzzpdSZvNihCvt/view?usp=drive_link'
    },
    {
      company: 'Geethanjali Electricals',
      period: 'May – June 2025',
      description: 'Focused on control panel fabrication and electrical works, gaining hands-on understanding of industrial electrical design.',
      highlights: [
        'Performed cabinet fabrication, cutting, drilling, and wiring',
        'Assembled control panels according to custom client requirements',
        'Completed independent panel wiring tasks, improving precision and confidence',
        'Contributed to lighting wiring and on-site control installation'
      ],
      certificate: 'https://drive.google.com/file/d/1W9RXNbDuiF1zkepwUYEn9tvgt3EkhYrl/view?usp=drive_link'
    }
  ];

  const education = [
    {
      level: 'Bachelor of Engineering (B.E.)',
      field: 'Electrical and Electronics Engineering',
      institution: 'Sri Krishna College of Engineering and Technology (SKCET), Coimbatore',
      board: 'Anna University',
      duration: '2023 – 2027',
      status: 'Present',
      details: 'Pursuing B.E. with a current CGPA of 8.53. Actively involved in IoT, Embedded Systems, and Smart Automation projects. Participated in Smart India Hackathon (SIH 2025) and several technical competitions.',
      icon: '🎓'
    },
    {
      level: 'Higher Secondary Certificate (HSC)',
      field: '',
      institution: 'Jawahar Matric Higher Secondary School, Kuniyamuthur, Coimbatore',
      board: 'State Board of Tamil Nadu',
      duration: '2022 – 2023',
      status: '',
      details: 'Scored 92.5% in major subjects — Physics, Chemistry, Mathematics, and Computer Science. Developed strong foundations in logic and programming.',
      icon: '📚'
    },
    {
      level: 'Secondary School Leaving Certificate (SSLC)',
      field: '',
      institution: 'Jawahar Matric Higher Secondary School, Kuniyamuthur, Coimbatore',
      board: 'State Board of Tamil Nadu',
      duration: '2020 – 2021',
      status: '',
      details: 'Successfully completed SSLC with All Pass, demonstrating consistency and dedication in academics.',
      icon: '📖'
    }
  ];

  return (
    <div className="about">
      <BlackHoleBackground />

      <section className="about-intro section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title gradient-title">About Me</h1>
            <div className="about-intro-content">
              <p className="about-text">
                I'm <span className="gradient-text">Arun Thanigaimani</span>, an engineering 
                student and self-motivated developer passionate about the fusion of IoT, 
                embedded systems, and software engineering.
              </p>
              <p className="about-text">
                Hailing from Coimbatore, I'm currently focused on mastering the connection 
                between sensors, circuits, and smart interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="journey-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🧭 My Journey</h2>
            <div className="journey-content card">
              <p className="journey-text">
                My technical journey began with an endless curiosity for how systems talk to 
                each other. What started as tinkering with simple circuits evolved into building 
                full-fledged IoT systems integrated with machine learning and web visualization.
              </p>
              <p className="journey-text">
                Over the past year, I've been on a deep learning curve, constantly experimenting 
                with both hardware and software to build projects that balance innovation with practicality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="learning-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">⚙️ My Learning Domains</h2>
            <div className="domains-grid">
              {learningDomains.map((domain, index) => (
                <motion.div
                  key={index}
                  className="domain-card card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="domain-icon">{domain.icon}</div>
                  <h3 className="domain-title">{domain.title}</h3>
                  <p className="domain-description">{domain.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="internships-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🧱 Technical Internships</h2>
            <div className="internships-container">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  className="internship-card card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="internship-header">
                    <div className="internship-title-section">
                      <FaBuilding className="internship-icon" />
                      <h3 className="internship-company">{internship.company}</h3>
                    </div>
                    <div className="internship-period">
                      <FaCalendarAlt className="period-icon" />
                      {internship.period}
                    </div>
                  </div>
                  <p className="internship-description">{internship.description}</p>
                  <div className="internship-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {internship.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={internship.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <FaCertificate /> View Certificate
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="education-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🎓 Educational Qualifications</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="education-header">
                    <div className="education-icon">{edu.icon}</div>
                    <div className="education-title-section">
                      <h3 className="education-level">{edu.level}</h3>
                      {edu.field && <p className="education-field">{edu.field}</p>}
                    </div>
                  </div>
                  
                  <div className="education-institution">
                    <strong>Institution:</strong> {edu.institution}
                  </div>
                  
                  <div className="education-meta">
                    <span className="education-board">
                      <strong>Board/University:</strong> {edu.board}
                    </span>
                    <span className="education-duration">
                      {edu.duration} {edu.status && <span className="status-badge">{edu.status}</span>}
                    </span>
                  </div>
                  
                  <p className="education-details">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="goals-section section">
        <div className="container">
          <motion.div
            className="goals-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">🌱 Goals & Aspirations</h2>
            <div className="goals-card card">
              <p className="goals-text">
                My short-term goal is to continue building prototypes and real-world IoT projects 
                that contribute to renewable systems and smart automation.
              </p>
              <p className="goals-text">
                Long-term, I aim to pursue research and higher studies, combining academic insights 
                with industrial applications.
              </p>
              <p className="goals-text">
                I aspire to work in multinational companies or R&D divisions that innovate in IoT, 
                green tech, or embedded AI systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
