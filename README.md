# 🌐 Arun Thanigaimani - Personal Portfolio

> **IoT & Embedded Systems Engineer | Front-End Developer**

A modern, responsive portfolio website built with React, featuring a mesmerizing fire video background, glass morphism UI, and comprehensive showcase of my skills, projects, and achievements.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🔥 Dynamic Fire Background**: Immersive video background with smooth playback
- **💎 Glass Morphism UI**: Translucent cards with backdrop blur effects
- **✨ Glow Effects**: Cyan & purple shadow effects on hover interactions
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎨 Framer Motion**: Smooth page transitions and scroll animations
- **📬 Working Contact Form**: MongoDB-backed with email notifications
- **🎓 Education Timeline**: Comprehensive academic qualifications section
- **🚀 Project Showcase**: Dynamic icons for demos, presentations, and live sites
- **⚡ Performance Optimized**: Lazy loading and code splitting

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM v6** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library (Font Awesome)
- **Axios** - HTTP client
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

### Design System
- Glass Morphism UI with `backdrop-filter: blur(20px)`
- Translucent cards: `rgba(255, 255, 255, 0.03)`
- Glow hover effects: Cyan (#00D4FF) & Purple (#A855F7)
- Full white text: `#ffffff`
- Fire video background with cache-busting

## 📁 Project Structure

```
My_portfolio/
├── backend/
│   ├── models/
│   │   └── Contact.js          # Contact form schema
│   ├── routes/
│   │   ├── contact.js          # Contact form API
│   │   └── portfolio.js        # Portfolio data API
│   └── server.js               # Express server
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   └── arun_profile.jpg
│   │   ├── videos/
│   │   │   └── blackhole.mp4   # Fire background video
│   │   ├── index.html
│   │   └── manifest.json
│   └── src/
│       ├── components/
│       │   ├── BlackHoleBackground.js  # Video background
│       │   ├── Navbar.js               # Navigation bar
│       │   ├── Footer.js               # Footer component
│       │   ├── Loader.js               # Loading spinner
│       │   └── ScrollToTop.js          # Auto scroll to top
│       ├── pages/
│       │   ├── Home.js                 # Landing page
│       │   ├── About.js                # About + Education
│       │   ├── Skills.js               # Skills showcase
│       │   ├── Projects.js             # Projects portfolio
│       │   └── Contact.js              # Contact form
│       ├── App.js                      # Main app component
│       ├── App.css                     # Global styles
│       └── index.js                    # Entry point
├── .env                                # Environment variables
├── .gitignore                          # Git ignore rules
├── vercel.json                         # Vercel deployment config
├── package.json                        # Root dependencies
└── README.md                           # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v14+ ([Download](https://nodejs.org/))
- **MongoDB** ([Local](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** ([Download](https://git-scm.com/downloads))

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Arun-py/arun-portfolio.git
cd arun-portfolio
```

2. **Install dependencies**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

3. **Setup environment variables**

Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/arun_portfolio
CLIENT_URL=http://localhost:3000

# Optional: Email configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

5. **Run the application**

Open two terminals:

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

6. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Build

```bash
# Build frontend for production
cd client
npm run build

# The build folder is ready to deploy
```

**For Gmail**, you need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use that App Password in `EMAIL_PASS`

### Step 5: Start MongoDB

Make sure MongoDB is running:

```powershell
# If MongoDB is installed as a service (Windows)
net start MongoDB

# Or use MongoDB Compass to start it
```

Alternatively, use **MongoDB Atlas** (cloud):
1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Update `MONGO_URI` in `.env` with your Atlas connection string

### Step 6: Run the Application

**Development Mode** (runs both frontend and backend):

```powershell
npm run dev
```

**Or run separately**:

```powershell
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### Step 7: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📝 Available Scripts

### Root Directory

- `npm start` - Start backend server
- `npm run server` - Start backend with nodemon (auto-restart)
- `npm run client` - Start frontend
- `npm run dev` - Run both frontend and backend concurrently
- `npm run build` - Build frontend for production
- `npm run install-all` - Install all dependencies

### Client Directory

- `npm start` - Start React development server
- `npm run build` - Create production build
- `npm test` - Run tests

## 🔌 API Endpoints

### Portfolio Routes

- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/skills` - Get skills data

### Contact Routes

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

### Example Contact Form Submission

```javascript
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}
```

## 🎨 Customization

### Changing Colors

Edit `client/src/App.css`:

```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #a855f7;
  --accent-color: #f97316;
  --bg-dark: #0a0a0f;
  --bg-darker: #050508;
}
```

### Modifying Content

Portfolio content is stored in `backend/routes/portfolio.js`. Update the `portfolioData` object to change:
- Personal information
- Projects
- Skills
- Achievements
- Internships

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended for Frontend)

#### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
# Deploy from the client directory
cd client
vercel --prod
```

#### Option 2: Using Vercel Dashboard

1. **Push to GitHub** (Already done ✅)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository: `Arun-py/arun-portfolio`

3. **Configure Build Settings**
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Environment Variables** (if needed)
   - Add any environment variables for API endpoints

5. **Deploy**
   - Click "Deploy" and wait for build to complete
   - Your site will be live at `your-project.vercel.app`

#### Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Deploy Backend (MongoDB Atlas + Render/Railway)

#### Step 1: Setup MongoDB Atlas

1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Whitelist all IPs: `0.0.0.0/0`

#### Step 2: Deploy to Render/Railway

**For Render:**
1. Go to [render.com](https://render.com/)
2. Connect GitHub repository
3. Create "Web Service"
4. Set root directory to `backend`
5. Add environment variables from `.env`
6. Deploy

**For Railway:**
1. Go to [railway.app](https://railway.app/)
2. Deploy from GitHub
3. Add MongoDB plugin
4. Configure environment variables
5. Deploy

### Full Stack Deployment

For a complete deployment:
- **Frontend**: Vercel (Static)
- **Backend**: Render/Railway (Node.js)
- **Database**: MongoDB Atlas (Cloud)
- **File Storage**: Vercel (Static assets)

## 🐛 Troubleshooting

### MongoDB Connection Error

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Make sure MongoDB is running locally or update `MONGO_URI` to MongoDB Atlas

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**: Change `PORT` in `.env` or kill the process using port 5000

### 3D Model Not Loading

**Solution**: Ensure `black_hole.glb` is in `client/public/models/` directory

### Profile Image Not Showing

**Solution**: Ensure `arun_profile.jpg` is in `client/public/images/` directory

## 📧 Contact

- **Email**: aruncdmney@gmail.com
- **Academic**: 727723euee010@skcet.ac.in
- **GitHub**: [github.com/Arun-py](https://github.com/Arun-py)
- **LinkedIn**: [Arun Thanigaimani](https://www.linkedin.com/in/arun-thanigaimani-128156365)

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Three.js for 3D graphics
- React Three Fiber for React integration
- Framer Motion for animations
- MongoDB for database
- Express.js for backend

---

**© 2025 Arun Thanigaimani** - Designed with passion and powered by innovation.
