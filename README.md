# Arun Thanigaimani - Portfolio Website

A fully functional MERN stack portfolio website featuring an interactive 3D black hole background, showcasing IoT and Front-End Development projects.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![3D Graphics](https://img.shields.io/badge/3D-Three.js-orange)

## 🌟 Features

- **Interactive 3D Background**: Black hole model with particle effects using Three.js
- **Responsive Design**: Mobile-first approach with smooth animations
- **Working Contact Form**: MongoDB-backed contact form with email notifications
- **Portfolio Showcase**: Projects, skills, achievements, and experience
- **Modern UI/UX**: Framer Motion animations and gradient effects
- **RESTful API**: Express.js backend with MongoDB database

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM v6
- Three.js & React Three Fiber
- Framer Motion
- Axios
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (email notifications)
- Express Validator
- CORS

## 📁 Project Structure

```
My_portfolio/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── portfolio.js
│   └── server.js
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   └── arun_profile.jpg
│   │   ├── models/
│   │   │   └── black_hole.glb
│   │   ├── index.html
│   │   └── manifest.json
│   └── src/
│       ├── components/
│       │   ├── BlackHoleBackground.js
│       │   ├── Navbar.js
│       │   ├── Footer.js
│       │   ├── Loader.js
│       │   └── ScrollToTop.js
│       ├── pages/
│       │   ├── Home.js
│       │   ├── About.js
│       │   ├── Skills.js
│       │   ├── Projects.js
│       │   └── Contact.js
│       ├── App.js
│       ├── App.css
│       └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Step 1: Clone the Repository

```powershell
cd C:\Users\arunc\Downloads\MERN_STACK_PROJECTs\My_portfolio
```

### Step 2: Install Dependencies

Install all backend and frontend dependencies:

```powershell
npm run install-all
```

Or install separately:

```powershell
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Step 3: Setup Assets

1. **Copy Profile Image**:
   - Copy `arun_profile.jpg` to `client/public/images/arun_profile.jpg`

2. **Copy 3D Model**:
   - Copy `black_hole.glb` to `client/public/models/black_hole.glb`

```powershell
# Create directories if they don't exist
mkdir client\public\images
mkdir client\public\models

# Copy files
copy arun_profile.jpg client\public\images\
copy black_hole.glb client\public\models\
```

### Step 4: Configure Environment Variables

The `.env` file is already created. Update it if needed:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/arun_portfolio
CLIENT_URL=http://localhost:3000

# Optional: Email Configuration for contact form
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
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

## 🌐 Deployment

### Frontend (Vercel/Netlify)

1. Build the client:
```powershell
npm run build --prefix client
```

2. Deploy the `client/build` folder

### Backend (Heroku/Railway)

1. Update `.env` with production values
2. Deploy backend directory
3. Update `CLIENT_URL` to your frontend URL

### Full Stack (Render/Railway)

Deploy as a monorepo with build command:
```bash
npm install && npm install --prefix client && npm run build --prefix client
```

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
