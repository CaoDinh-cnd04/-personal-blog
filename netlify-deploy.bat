@echo off
echo ========================================
echo   DEPLOY TO NETLIFY - CAO NHAT DINH
echo ========================================
echo.

echo [1/3] Building project...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Build failed!
    echo Please fix errors and try again.
    pause
    exit /b 1
)

echo.
echo [2/3] Build successful!
echo.
echo [3/3] Next steps:
echo.
echo 1. Open browser: https://app.netlify.com/drop
echo 2. Drag and drop the 'dist' folder
echo 3. Wait for deployment (30 seconds)
echo 4. Get your URL!
echo.
echo Your 'dist' folder is at: %CD%\dist
echo.
echo Opening dist folder...
start explorer "%CD%\dist"

echo.
echo Opening Netlify Drop in browser...
start https://app.netlify.com/drop

echo.
echo ========================================
echo   READY TO DEPLOY!
echo ========================================
echo.
echo Just drag the 'dist' folder to Netlify Drop!
echo.
pause

