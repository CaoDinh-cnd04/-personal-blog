# 🚀 Hướng Dẫn Deploy Lên Vercel

## Cách 1: Deploy Tự Động Qua GitHub (Khuyên Dùng)

### Bước 1: Đăng nhập Vercel
1. Truy cập: https://vercel.com
2. Đăng nhập bằng tài khoản GitHub của bạn
3. Chọn "Add New Project"

### Bước 2: Kết Nối Repository
1. Chọn repository: `CaoDinh-cnd04/-personal-blog`
2. Vercel sẽ tự động phát hiện cấu hình từ `vercel.json`

### Bước 3: Cấu Hình Build
Vercel sẽ tự động nhận diện:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Bước 4: Deploy
1. Click "Deploy"
2. Chờ quá trình build hoàn tất (2-3 phút)
3. Website sẽ được deploy tự động tại URL: `https://your-project.vercel.app`

### Bước 5: Tự Động Deploy (Đã Cấu Hình)
- Mỗi khi bạn push code lên GitHub, Vercel sẽ tự động deploy lại
- Không cần làm gì thêm!

---

## Cách 2: Deploy Bằng Vercel CLI

### Bước 1: Cài Đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Đăng Nhập
```bash
vercel login
```

### Bước 3: Deploy
```bash
# Deploy lần đầu (sẽ hỏi một số câu hỏi)
vercel

# Deploy production
vercel --prod
```

---

## ✅ Kiểm Tra Sau Khi Deploy

1. **Truy cập URL:** `https://your-project.vercel.app`
2. **Kiểm tra các trang:**
   - Home page
   - About page (kiểm tra nút Download CV)
   - Blog page
   - Projects page
   - Contact page

3. **Kiểm tra file PDF:**
   - Truy cập: `https://your-project.vercel.app/CV_CAONHATDINH_EN.pdf`
   - Phải tải được file PDF

---

## 🔧 Cấu Hình Tùy Chỉnh

### Thay Đổi Domain
1. Vào Vercel Dashboard
2. Chọn project
3. Vào Settings > Domains
4. Thêm domain tùy chỉnh của bạn

### Environment Variables
Nếu cần thêm biến môi trường:
1. Vào Settings > Environment Variables
2. Thêm các biến cần thiết (ví dụ: GitHub token, EmailJS keys)

---

## 📝 Lưu Ý

- ✅ Vercel miễn phí cho personal projects
- ✅ Tự động deploy khi push code
- ✅ Hỗ trợ HTTPS tự động
- ✅ CDN toàn cầu
- ✅ Preview deployments cho mỗi PR

---

## 🆘 Xử Lý Lỗi

### Build Failed
- Kiểm tra logs trong Vercel Dashboard
- Đảm bảo Node version >= 18.0.0
- Kiểm tra `package.json` có đúng dependencies

### File PDF Không Tải Được
- Kiểm tra file có trong `public/` folder
- Đảm bảo file đã được commit và push lên GitHub
- Kiểm tra cấu hình trong `vercel.json`

### 404 Errors
- Kiểm tra cấu hình `rewrites` trong `vercel.json`
- Đảm bảo React Router được cấu hình đúng

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:
1. Vercel Dashboard logs
2. GitHub repository settings
3. File `vercel.json` cấu hình

