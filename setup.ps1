# Portfolio Setup Script for Windows PowerShell

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Arun's Portfolio Setup Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Node.js installed: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check if MongoDB is running
Write-Host ""
Write-Host "Checking MongoDB..." -ForegroundColor Yellow
$mongoStatus = Get-Service -Name MongoDB -ErrorAction SilentlyContinue
if ($mongoStatus) {
    Write-Host "✓ MongoDB service found: $($mongoStatus.Status)" -ForegroundColor Green
    if ($mongoStatus.Status -ne "Running") {
        Write-Host "  Starting MongoDB..." -ForegroundColor Yellow
        Start-Service -Name MongoDB
    }
} else {
    Write-Host "⚠ MongoDB service not found. You may need to:" -ForegroundColor Yellow
    Write-Host "  1. Install MongoDB locally, or" -ForegroundColor Yellow
    Write-Host "  2. Use MongoDB Atlas (update MONGO_URI in .env)" -ForegroundColor Yellow
}

# Create directories
Write-Host ""
Write-Host "Creating required directories..." -ForegroundColor Yellow

$directories = @(
    "client\public\images",
    "client\public\models"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "✓ Created: $dir" -ForegroundColor Green
    } else {
        Write-Host "✓ Exists: $dir" -ForegroundColor Green
    }
}

# Copy assets
Write-Host ""
Write-Host "Copying assets..." -ForegroundColor Yellow

$profileImage = "arun_profile.jpg"
$blackHole = "black_hole.glb"

if (Test-Path $profileImage) {
    Copy-Item $profileImage -Destination "client\public\images\" -Force
    Write-Host "✓ Copied: $profileImage -> client\public\images\" -ForegroundColor Green
} else {
    Write-Host "⚠ Not found: $profileImage (please copy manually)" -ForegroundColor Yellow
}

if (Test-Path $blackHole) {
    Copy-Item $blackHole -Destination "client\public\models\" -Force
    Write-Host "✓ Copied: $blackHole -> client\public\models\" -ForegroundColor Green
} else {
    Write-Host "⚠ Not found: $blackHole (please copy manually)" -ForegroundColor Yellow
}

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Cyan

Write-Host ""
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location client
npm install
Set-Location ..

Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update .env file with your MongoDB URI and email settings" -ForegroundColor White
Write-Host "2. Run 'npm run dev' to start both frontend and backend" -ForegroundColor White
Write-Host "3. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host ""
Write-Host "For more details, see README.md" -ForegroundColor Cyan
Write-Host ""
