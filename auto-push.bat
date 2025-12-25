@echo off
chcp 65001 >nul
cls
echo ╔═══════════════════════════════════════════════════════════╗
echo ║      PUSH CODE LÊN GITHUB - TỰ ĐỘNG                      ║
echo ║      Blog: Cao Nhất Đỉnh                                 ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

cd D:\Blog

echo [1/5] Đang chuẩn bị files...
git add .
git commit -m "Complete blog: Cao Nhat Dinh - Full-Stack Developer" 2>nul

echo.
echo [2/5] QUAN TRỌNG: Tạo Repository Trên GitHub
echo ═══════════════════════════════════════════════════════════
echo.
echo Tôi đang mở trang GitHub để bạn tạo repository...
echo.
echo ⚠️  KHI TẠO REPO, NHẬP CHÍNH XÁC:
echo    Repository name: personal-blog
echo    Description: Blog cá nhân Cao Nhất Đỉnh
echo    Chọn: Public ✓
echo    KHÔNG tích: README, .gitignore, license ✗
echo.
echo Đang mở GitHub...
timeout /t 2 >nul
start https://github.com/new

echo.
echo ═══════════════════════════════════════════════════════════
echo   SAU KHI TẠO XONG REPO, ẤN ENTER ĐỂ TIẾP TỤC
echo ═══════════════════════════════════════════════════════════
pause

echo.
echo [3/5] Đang thiết lập kết nối với GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/CaoDinh-cnd04/personal-blog.git

echo.
echo [4/5] Đang push code lên GitHub...
echo ═══════════════════════════════════════════════════════════
echo.
echo ⚠️  NẾU YÊU CẦU ĐĂNG NHẬP:
echo    Username: CaoDinh-cnd04
echo    Password: Dùng Personal Access Token (không phải mật khẩu)
echo.
echo    👉 Tạo token tại: https://github.com/settings/tokens
echo       - Generate new token (classic)
echo       - Chọn: repo, workflow
echo       - Copy token và paste vào
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ╔═══════════════════════════════════════════════════════════╗
    echo ║                  ✅ THÀNH CÔNG!                           ║
    echo ╚═══════════════════════════════════════════════════════════╝
    echo.
    echo 🎉 Code đã được push lên GitHub!
    echo.
    echo 🌐 Xem tại: https://github.com/CaoDinh-cnd04/personal-blog
    echo.
    echo [5/5] Đang mở repository...
    timeout /t 2 >nul
    start https://github.com/CaoDinh-cnd04/personal-blog
    
    echo.
    echo ═══════════════════════════════════════════════════════════
    echo   BƯỚC TIẾP THEO: DEPLOY LÊN NETLIFY
    echo ═══════════════════════════════════════════════════════════
    echo.
    echo 1. Tôi sẽ mở Netlify cho bạn
    echo 2. Click "Add new site" ^> "Import from Git"
    echo 3. Chọn GitHub ^> Chọn repo "personal-blog"
    echo 4. Click "Deploy site"
    echo 5. Đợi 2 phút ^> Nhận URL!
    echo.
    echo Đang mở Netlify...
    timeout /t 3 >nul
    start https://app.netlify.com
    
    echo.
    echo ✅ HOÀN TẤT! Blog của bạn sẽ online sau 2-3 phút!
    echo.
) else (
    echo.
    echo ╔═══════════════════════════════════════════════════════════╗
    echo ║                  ❌ CÓ LỖI XẢY RA                         ║
    echo ╚═══════════════════════════════════════════════════════════╝
    echo.
    echo Có thể do:
    echo   1. ❌ Chưa tạo repository trên GitHub
    echo   2. ❌ Tên repository không đúng "personal-blog"
    echo   3. ❌ Cần Personal Access Token
    echo.
    echo 🔧 CÁCH FIX:
    echo.
    echo 1. Vào: https://github.com/CaoDinh-cnd04
    echo 2. Kiểm tra có repo "personal-blog" chưa
    echo 3. Nếu chưa, tạo repo với tên CHÍNH XÁC: personal-blog
    echo 4. Chạy lại script này
    echo.
    echo 📝 Hoặc tạo Personal Access Token:
    echo    https://github.com/settings/tokens
    echo.
    start https://github.com/CaoDinh-cnd04
)

echo.
echo ═══════════════════════════════════════════════════════════
pause

