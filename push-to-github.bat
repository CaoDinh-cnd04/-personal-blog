@echo off
chcp 65001 >nul
echo ============================================
echo   PUSH CODE LÊN GITHUB
echo   Blog: Cao Nhất Đỉnh
echo ============================================
echo.

echo [INFO] Code đã được commit local.
echo.
echo ============================================
echo   BƯỚC 1: TẠO REPOSITORY TRÊN GITHUB
echo ============================================
echo.
echo 1. Mở trình duyệt và đăng nhập GitHub
echo 2. Vào: https://github.com/new
echo 3. Điền thông tin:
echo    - Repository name: personal-blog
echo    - Description: Blog cá nhân Cao Nhất Đỉnh
echo    - Chọn: Public
echo    - KHÔNG tích: Add README, .gitignore, license
echo 4. Click "Create repository"
echo.
echo Đang mở trang tạo repo...
start https://github.com/new
echo.
pause
echo.

echo ============================================
echo   BƯỚC 2: NHẬP URL REPOSITORY
echo ============================================
echo.
echo Sau khi tạo xong repo, GitHub sẽ cho bạn URL.
echo URL thường có dạng:
echo https://github.com/CaoDinh-cnd04/personal-blog.git
echo.
set /p repo_url="Nhập URL repository (hoặc Enter để dùng mặc định): "
if "%repo_url%"=="" set repo_url=https://github.com/CaoDinh-cnd04/personal-blog.git

echo.
echo Đang kiểm tra remote...
git remote remove origin 2>nul
git remote add origin %repo_url%

echo.
echo ============================================
echo   BƯỚC 3: PUSH CODE LÊN GITHUB
echo ============================================
echo.
echo Đang push code... (có thể yêu cầu đăng nhập)
echo.
echo Nếu yêu cầu password, dùng Personal Access Token:
echo 1. Vào: https://github.com/settings/tokens
echo 2. Generate new token (classic)
echo 3. Chọn scope: repo, workflow
echo 4. Copy token và dùng làm password
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo   ✅ THÀNH CÔNG!
    echo ============================================
    echo.
    echo Code đã được push lên GitHub!
    echo.
    echo 🌐 Xem tại: %repo_url:.git=%
    echo.
    echo ============================================
    echo   BƯỚC TIẾP THEO: DEPLOY LÊN NETLIFY
    echo ============================================
    echo.
    echo 1. Vào: https://app.netlify.com
    echo 2. Click "Add new site" ^> "Import from Git"
    echo 3. Chọn GitHub ^> Chọn repo "personal-blog"
    echo 4. Deploy settings tự động ^> Click "Deploy"
    echo.
    echo Đang mở Netlify...
    timeout /t 3 >nul
    start https://app.netlify.com
) else (
    echo.
    echo ============================================
    echo   ❌ LỖI KHI PUSH
    echo ============================================
    echo.
    echo Có thể do:
    echo 1. Chưa tạo repository trên GitHub
    echo 2. URL repository sai
    echo 3. Chưa có quyền truy cập
    echo 4. Cần Personal Access Token
    echo.
    echo Hướng dẫn chi tiết trong file: GITHUB_SETUP.md
    echo.
)

echo.
pause

