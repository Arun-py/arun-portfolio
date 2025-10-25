# Quick Start Guide

## ✅ Setup Complete!

Your portfolio website is now ready to run. Here's what was set up:

### Installed Components:
- ✓ Backend dependencies (Express, MongoDB, etc.)
- ✓ Frontend dependencies (React, Three.js, etc.)
- ✓ Profile image copied to `client/public/images/`
- ✓ Black hole 3D model copied to `client/public/models/`

## 🚀 How to Run

### Option 1: Run Everything (Recommended)
Open PowerShell in the project directory and run:
```powershell
npm run dev
```
This starts both backend (port 5000) and frontend (port 3000) simultaneously.

### Option 2: Run Separately
**Terminal 1 - Backend:**
```powershell
npm run server
```

**Terminal 2 - Frontend:**
```powershell
npm run client
```

## 🌐 Access Your Portfolio

Once running, open your browser:
- **Portfolio Website**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/health

## ⚙️ Before You Start

### 1. MongoDB Setup
You have two options:

**Option A: Local MongoDB**
- Make sure MongoDB is installed and running
- The default connection string is already in `.env`

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `MONGO_URI` in `.env` file with your Atlas connection string

### 2. Email Configuration (Optional)
To enable email notifications for the contact form:

1. Open `.env` file
2. Update these lines:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**For Gmail:**
- Enable 2-factor authentication
- Generate an App Password: https://myaccount.google.com/apppasswords
- Use that App Password (not your regular password)

## 🧪 Testing the Website

1. **Home Page** - View your introduction and highlights
2. **About Page** - See your journey and internships
3. **Skills Page** - Display your technical skills
4. **Projects Page** - Showcase your projects
5. **Contact Page** - Test the contact form

## 📝 Environment Variables

Your `.env` file should look like this:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/arun_portfolio
CLIENT_URL=http://localhost:3000

# Email Configuration (Optional)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```
MongooseError: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: 
- Start MongoDB service: `net start MongoDB`
- Or use MongoDB Atlas

### Port 5000 Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**: 
- Change `PORT=5001` in `.env` file
- Or kill process using port 5000

### React Not Starting
**Solution**:
```powershell
cd client
npm install
npm start
```

## 📁 Project Structure Reference

```
My_portfolio/
├── backend/              # Express server
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
├── client/              # React frontend
│   ├── public/
│   │   ├── images/      # Your profile image
│   │   └── models/      # 3D black hole model
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Page components
│       └── App.js       # Main React app
├── .env                 # Environment variables
├── package.json         # Backend dependencies
└── README.md           # Full documentation
```

## 🎨 Customization Tips

1. **Change Colors**: Edit `client/src/App.css` (`:root` variables)
2. **Update Content**: Edit `backend/routes/portfolio.js`
3. **Modify Pages**: Edit files in `client/src/pages/`
4. **Add Projects**: Update the projects array in `portfolio.js`

## 📚 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Open http://localhost:3000
3. ✅ Test all pages and features
4. ✅ Customize content to your needs
5. ✅ Deploy to production (see README.md)

## 🆘 Need Help?

Check the full `README.md` file for:
- Detailed API documentation
- Deployment instructions
- Advanced customization
- Full troubleshooting guide

---

**Happy Coding! 🚀**

Built with ❤️ using MERN Stack + Three.js
