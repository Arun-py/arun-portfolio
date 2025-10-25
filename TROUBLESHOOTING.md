# 🔧 Troubleshooting Guide

Common issues and their solutions for the MERN Portfolio project.

## 🚨 Common Errors & Solutions

### 1. MongoDB Connection Errors

#### Error: `MongooseError: connect ECONNREFUSED 127.0.0.1:27017`

**Cause**: MongoDB is not running locally.

**Solutions**:

**Option A - Start Local MongoDB**
```powershell
# Windows (as Administrator)
net start MongoDB

# Or check MongoDB Compass and start it there
```

**Option B - Use MongoDB Atlas (Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy connection string
6. Update `.env` file:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/arun_portfolio?retryWrites=true&w=majority
```

#### Error: `MongoServerError: Authentication failed`

**Solution**: Check your MongoDB Atlas credentials in the connection string.

---

### 2. Port Already in Use

#### Error: `EADDRINUSE: address already in use :::5000`

**Cause**: Another application is using port 5000 or 3000.

**Solutions**:

**Option A - Change Port**
Edit `.env` file:
```env
PORT=5001
```

**Option B - Kill Process**
```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

---

### 3. 3D Model Not Loading

#### Error: Black screen or no 3D background visible

**Causes & Solutions**:

1. **File not in correct location**
   ```powershell
   # Verify file exists
   Test-Path "client\public\models\black_hole.glb"
   ```
   Should return `True`. If not, copy the file:
   ```powershell
   copy black_hole.glb client\public\models\
   ```

2. **Browser console shows 404**
   - Check that path in code matches: `/models/black_hole.glb`
   - Clear browser cache (Ctrl + Shift + Delete)
   - Hard refresh (Ctrl + F5)

3. **WebGL not supported**
   - Update your browser
   - Enable hardware acceleration in browser settings

---

### 4. Profile Image Not Showing

#### Error: Broken image icon or missing profile picture

**Solution**:
```powershell
# Verify file exists
Test-Path "client\public\images\arun_profile.jpg"

# If false, copy it:
copy arun_profile.jpg client\public\images\
```

**Then**:
- Clear browser cache
- Hard refresh page (Ctrl + F5)

---

### 5. npm Install Errors

#### Error: `npm ERR! code ENOENT` or dependency issues

**Solutions**:

**Option A - Clear cache and reinstall**
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force client\node_modules

# Delete package locks
Remove-Item package-lock.json
Remove-Item client\package-lock.json

# Reinstall
npm install
cd client
npm install
cd ..
```

**Option B - Use different registry**
```powershell
npm config set registry https://registry.npmjs.org/
npm install
```

---

### 6. Contact Form Not Working

#### Error: Form submits but no response

**Checks**:

1. **Backend running?**
   ```powershell
   # Check if server is running on port 5000
   curl http://localhost:5000/api/health
   ```
   Should return: `{"status":"Server is running"}`

2. **MongoDB connected?**
   Check terminal output for:
   ```
   ✅ MongoDB Connected Successfully
   ```

3. **CORS issues?**
   Check browser console for CORS errors. If found, verify `.env`:
   ```env
   CLIENT_URL=http://localhost:3000
   ```

4. **Check API endpoint**
   ```powershell
   # Test contact endpoint
   curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d '{\"name\":\"Test\",\"email\":\"test@test.com\",\"subject\":\"Test\",\"message\":\"Test message\"}'
   ```

---

### 7. Email Notifications Not Sending

#### Error: Contact form works but no emails received

**This is normal** - Email is optional. To enable:

1. **Setup Gmail App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Generate new app password
   - Copy the 16-character password

2. **Update .env**
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   ```

3. **Restart server**
   ```powershell
   # Stop server (Ctrl+C)
   # Start again
   npm run server
   ```

**Note**: Remove spaces from app password in `.env` file.

---

### 8. React Compilation Errors

#### Error: Compilation failed or syntax errors

**Common fixes**:

1. **Clear cache**
   ```powershell
   cd client
   Remove-Item -Recurse -Force node_modules\.cache
   npm start
   ```

2. **Check Node version**
   ```powershell
   node --version
   ```
   Should be v14 or higher. If not, update Node.js.

3. **Reinstall dependencies**
   ```powershell
   cd client
   Remove-Item -Recurse -Force node_modules
   npm install
   ```

---

### 9. Framer Motion Errors

#### Error: Animation not working or TypeErrors

**Solution**: Ensure correct import
```javascript
import { motion } from 'framer-motion';
```

If errors persist:
```powershell
cd client
npm install framer-motion@latest
```

---

### 10. Three.js / WebGL Errors

#### Error: `THREE is not defined` or WebGL context lost

**Solutions**:

1. **Update Three.js**
   ```powershell
   cd client
   npm install three@latest @react-three/fiber@latest @react-three/drei@latest
   ```

2. **Enable WebGL in browser**
   - Chrome: chrome://flags → Enable WebGL
   - Firefox: about:config → webgl.force-enabled = true

3. **Update graphics drivers**

---

### 11. ESLint Warnings

#### Warning: Various ESLint warnings in console

**These are just warnings**, not errors. To suppress:

Add to `client/package.json`:
```json
"eslintConfig": {
  "extends": ["react-app"],
  "rules": {
    "no-unused-vars": "warn"
  }
}
```

---

### 12. Axios Network Errors

#### Error: `Network Error` or `ERR_CONNECTION_REFUSED`

**Checks**:

1. **Backend running?**
   ```powershell
   curl http://localhost:5000/api/health
   ```

2. **Check proxy in client/package.json**
   Should have:
   ```json
   "proxy": "http://localhost:5000"
   ```

3. **Firewall blocking?**
   - Allow Node.js through Windows Firewall
   - Check antivirus settings

---

### 13. Deployment Issues

#### Build errors during deployment

**Solutions**:

1. **Increase memory limit**
   ```json
   // In client/package.json
   "build": "NODE_OPTIONS=--max_old_space_size=4096 react-scripts build"
   ```

2. **Check environment variables**
   - Set all production env vars in hosting platform
   - Update MONGO_URI to production database
   - Update CLIENT_URL to production URL

---

### 14. Slow Performance

#### Website loading slowly

**Optimizations**:

1. **Reduce 3D complexity**
   - Lower particle count in BlackHoleBackground.js
   - Reduce autoRotateSpeed

2. **Optimize images**
   ```powershell
   # Compress arun_profile.jpg before using
   # Recommended: <500KB
   ```

3. **Lazy load more components**
   ```javascript
   const SomeComponent = lazy(() => import('./SomeComponent'));
   ```

---

### 15. Windows PowerShell Execution Policy

#### Error: `cannot be loaded because running scripts is disabled`

**Solution**:
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 🔍 Debugging Tips

### Check if Backend is Running
```powershell
curl http://localhost:5000/api/health
```
Should return: `{"status":"Server is running"}`

### Check if Frontend is Running
```powershell
curl http://localhost:3000
```
Should return HTML

### View Backend Logs
Look at terminal where you ran `npm run server`

### View Frontend Errors
Open browser console (F12) → Console tab

### View Network Requests
Browser console (F12) → Network tab

---

## 📞 Still Having Issues?

### Steps to Get Help:

1. **Check error message** in terminal or browser console
2. **Search error** in this guide
3. **Check README.md** for additional info
4. **Review code** for typos or missing imports
5. **Restart everything**:
   ```powershell
   # Stop all (Ctrl+C)
   # Clear cache
   npm cache clean --force
   # Restart
   npm run dev
   ```

### Collect Information:
- Error message (full text)
- Which command caused error
- Node.js version (`node --version`)
- npm version (`npm --version`)
- Operating system

---

## ✅ Prevention Checklist

Before running project:
- [ ] Node.js installed (v14+)
- [ ] MongoDB running or Atlas configured
- [ ] `.env` file configured
- [ ] Assets in correct folders
- [ ] Dependencies installed
- [ ] No other apps using ports 3000 or 5000

---

## 🔄 Complete Reset (Last Resort)

If nothing works, start fresh:

```powershell
# 1. Stop all processes (Ctrl+C)

# 2. Delete generated files
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force client\node_modules
Remove-Item -Recurse -Force client\build
Remove-Item package-lock.json
Remove-Item client\package-lock.json

# 3. Clear npm cache
npm cache clean --force

# 4. Reinstall everything
npm install
cd client
npm install
cd ..

# 5. Verify assets
Test-Path client\public\images\arun_profile.jpg
Test-Path client\public\models\black_hole.glb

# 6. Run setup again
powershell -ExecutionPolicy Bypass -File setup.ps1

# 7. Start fresh
npm run dev
```

---

**Need more help?** Check the `README.md` for full documentation.

*Last Updated: 2025*
