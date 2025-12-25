@echo off
echo ========================================
echo   PUSH TO GITHUB - CAO NHAT DINH
echo ========================================
echo.

echo [Step 1] Checking git status...
git status

echo.
echo [Step 2] Adding all files...
git add .

echo.
echo [Step 3] Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update blog content

git commit -m "%commit_msg%"

echo.
echo [Step 4] Pushing to GitHub...
git push

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Push failed!
    echo.
    echo If this is first time, run these commands:
    echo.
    echo git remote add origin https://github.com/CaoDinh-cnd04/personal-blog.git
    echo git branch -M main
    echo git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS!
echo ========================================
echo.
echo Code pushed to GitHub successfully!
echo.
echo If you connected Netlify to GitHub,
echo your site will auto-deploy in 1-2 minutes.
echo.
echo Check: https://app.netlify.com
echo.
pause

