const express = require('express');
const router = express.Router();

// Portfolio data
const portfolioData = {
  personal: {
    name: "Arun Thanigaimani",
    title: "IoT & Front-End Developer",
    subtitle: "Building the Bridge Between Hardware and Software",
    description: "Innovating at the intersection of electronics, automation, and web technology, I create smart systems that connect devices, data, and design — shaping a more intelligent, sustainable future.",
    location: "BK Pudur, Kuniyamuthur, Coimbatore – 641008",
    email: "aruncdmney@gmail.com",
    academicEmail: "727723euee010@skcet.ac.in",
    github: "https://github.com/Arun-py",
    linkedin: "https://www.linkedin.com/in/arun-thanigaimani-128156365",
    resume: "https://drive.google.com/file/d/1nlY4jZSKjeeKXlUyBOWoxtLE5DfOiV_3/view?usp=sharing",
    locationMap: "https://maps.app.goo.gl/VpeqJWNkJY4r6PRw7"
  },

  highlights: {
    profession: "IoT & Embedded Systems Engineer, Front-End Developer",
    location: "BK Pudur, Kuniyamuthur, Coimbatore – 641008",
    emails: ["aruncdmney@gmail.com", "727723euee010@skcet.ac.in"],
    coreFocus: "IoT, Renewable Energy Systems, Smart Automation, Front-End Web Development",
    experience: "1+ year of hands-on learning through projects & internships",
    techStack: "MERN, C++, Python, ESP32, Raspberry Pi, MATLAB, Flutter",
    achievements: "SIH Shortlisted, BSVC Runner-Up, Poster Design Winner"
  },

  skills: {
    programming: ["C++", "Java", "Python"],
    fullStack: ["MongoDB", "Express", "React", "Node.js"],
    webTech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS"],
    hardware: ["ESP32", "Raspberry Pi 5"],
    iot: ["Arduino", "Sensor Integration", "MQTT"],
    ml: ["TensorFlow Lite", "Python Data Handling"],
    tools: ["MATLAB", "Fusion 360", "DaVinci Resolve", "Photoshop", "Canva", "Flutter"],
    versionControl: ["Git", "GitHub"],
    focusAreas: ["IoT Systems", "Renewable Monitoring", "Smart Automation", "Web–Hardware Integration"]
  },

  projects: [
    {
      id: 1,
      title: "Renewable Energy Monitoring System",
      description: "A team-driven IoT system for real-time renewable energy analysis using Raspberry Pi 5 and integrated ML models for trend prediction. Monitors voltage, current, and efficiency of renewable energy units with live web-based dashboard visualization.",
      impact: "Optimizes renewable resource utilization by identifying losses and overuse.",
      techStack: ["Python", "Machine Learning", "React", "API Visualization", "Raspberry Pi 5"],
      category: "IoT & ML"
    },
    {
      id: 2,
      title: "Air Quality & Gas Detection System",
      description: "An intelligent safety system designed to monitor AQI, LPG leakage, and toxic gases. Built on ESP32 with multiple sensor modules (MQ2, MQ135), real-time alert generation and data logging with web interface.",
      impact: "Promotes safer industrial and domestic environments.",
      techStack: ["Embedded C++", "React", "ESP32", "Sensor Integration"],
      category: "IoT & Safety"
    },
    {
      id: 3,
      title: "Bull's Eye — Stock Market Screener",
      description: "A personalized web app for stock performance monitoring with real-time stock data, search and comparison functions using external APIs and responsive visualizations.",
      impact: "Enables informed investment decisions through data visualization.",
      techStack: ["React", "JavaScript", "Chart.js", "REST API"],
      category: "Web Application"
    },
    {
      id: 4,
      title: "HR Leave Tracking System",
      description: "An efficient HR web platform for leave management implementing role-based access and automated alerts. Calculates remaining leaves, penalties, and holidays automatically with user-friendly dashboards.",
      impact: "Streamlines HR operations and employee leave management.",
      techStack: ["MERN Stack", "REST APIs", "Authentication"],
      category: "Full Stack"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon (SIH) 2025",
      description: "College-level shortlisted participant",
      year: 2025
    },
    {
      title: "BSVC (Team Gandiva)",
      description: "Endurance Runner-Up; collaborated on embedded racing tech",
      year: 2024
    },
    {
      title: "ITI TN Poster Design Competition",
      description: "Winner for innovative design presentation",
      year: 2024
    },
    {
      title: "GKDC Technical Event",
      description: "Volunteered in marshalling and technical coordination",
      year: 2024
    }
  ],

  internships: [
    {
      company: "Salzer Electronics Ltd.",
      period: "Dec 2024 – Jan 2025",
      highlights: [
        "Assisted in the assembly and testing of transformers",
        "Learned switchgear wiring, panel design, and component layout",
        "Understood the core principles of industrial safety and precision wiring",
        "Gained exposure to real-world manufacturing workflows and industrial-grade automation"
      ],
      certificate: "https://drive.google.com/file/d/14C52Er_qCrM05PzXWJkzzpdSZvNihCvt/view?usp=drive_link"
    },
    {
      company: "Geethanjali Electricals",
      period: "May – June 2025",
      highlights: [
        "Performed cabinet fabrication, cutting, drilling, and wiring",
        "Assembled control panels according to custom client requirements",
        "Completed independent panel wiring tasks, improving precision and confidence",
        "Contributed to lighting wiring and on-site control installation"
      ],
      certificate: "https://drive.google.com/file/d/1W9RXNbDuiF1zkepwUYEn9tvgt3EkhYrl/view?usp=drive_link"
    }
  ],

  hobbies: [
    { icon: "🎮", title: "Gaming", description: "Exploring interactive environments that inspire design ideas" },
    { icon: "📚", title: "Reading Novels", description: "Especially tech, sci-fi, and innovation-related themes" },
    { icon: "🎨", title: "Designing Posters", description: "Using tools like Photoshop and Canva" },
    { icon: "🎬", title: "Video Editing", description: "Storytelling through visuals using DaVinci Resolve" },
    { icon: "🌿", title: "Sustainability Projects", description: "Conceptualizing automation for clean energy systems" }
  ]
};

// @route   GET /api/portfolio
// @desc    Get all portfolio data
// @access  Public
router.get('/', (req, res) => {
  res.json({ success: true, data: portfolioData });
});

// @route   GET /api/portfolio/projects
// @desc    Get projects
// @access  Public
router.get('/projects', (req, res) => {
  res.json({ success: true, data: portfolioData.projects });
});

// @route   GET /api/portfolio/skills
// @desc    Get skills
// @access  Public
router.get('/skills', (req, res) => {
  res.json({ success: true, data: portfolioData.skills });
});

module.exports = router;
