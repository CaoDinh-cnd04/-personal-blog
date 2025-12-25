# 📦 Hướng Dẫn Push Code Lên GitHub

## Bước 1: Tạo Repository Trên GitHub

### Cách 1: Qua Web Browser (Dễ nhất)

1. **Đăng nhập GitHub**: https://github.com/login
   - Username: CaoDinh-cnd04
   - Password: (password của bạn)

2. **Tạo Repository Mới**:
   - Vào: https://github.com/new
   - Hoặc click dấu **+** ở góc phải → **"New repository"**

3. **Cấu hình Repository**:
   ```
   Repository name: personal-blog
   Description: Blog cá nhân của Cao Nhất Đỉnh - Full-Stack Developer
   Visibility: ✅ Public (để mọi người xem được)
   
   ❌ KHÔNG tích vào:
   - Add a README file
   - Add .gitignore
   - Choose a license
   ```

4. **Click "Create repository"**

5. **Copy URL** của repo (sẽ dạng):
   ```
   https://github.com/CaoDinh-cnd04/personal-blog.git
   ```

---

## Bước 2: Push Code Từ Máy Tính

### A. Kiểm Tra Git Đã Cài Chưa

Mở PowerShell/Command Prompt và chạy:
```bash
git --version
```

Nếu chưa có, tải Git tại: https://git-scm.com/download/win

### B. Configure Git (Lần đầu tiên)

```bash
git config --global user.name "Cao Nhất Đỉnh"
git config --global user.email "caonhatdinh04@gmail.com"
```

### C. Push Code Lên GitHub

**Chạy từng lệnh này trong terminal:**

```bash
# 1. Di chuyển vào thư mục project
cd D:\Blog

# 2. Khởi tạo Git repository
git init

# 3. Add tất cả files
git add .

# 4. Commit với message
git commit -m "Initial commit: Blog cá nhân Cao Nhất Đỉnh"

# 5. Đổi branch thành main
git branch -M main

# 6. Link với GitHub repository (thay URL nếu khác)
git remote add origin https://github.com/CaoDinh-cnd04/personal-blog.git

# 7. Push code lên GitHub
git push -u origin main
```

**Nếu yêu cầu đăng nhập:**
- Username: `CaoDinh-cnd04`
- Password: Dùng **Personal Access Token** (không phải password)

---

## Bước 3: Tạo Personal Access Token (Nếu Cần)

Nếu git yêu cầu token:

1. Vào: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Note: `Personal Blog Deploy`
4. Expiration: `No expiration` (hoặc 90 days)
5. Chọn scopes:
   - ✅ `repo` (tất cả)
   - ✅ `workflow`
6. Click **"Generate token"**
7. **COPY token ngay** (chỉ hiện 1 lần!)
8. Dùng token này làm password khi git yêu cầu

---

## Bước 4: Verify Trên GitHub

1. Vào repo: https://github.com/CaoDinh-cnd04/personal-blog
2. Refresh page
3. Bạn sẽ thấy tất cả code đã được push!

---

## 🔄 Update Code Sau Này

Mỗi khi thay đổi code:

```bash
# 1. Add files đã thay đổi
git add .

# 2. Commit với message mô tả
git commit -m "Update blog posts"

# 3. Push lên GitHub
git push
```

**Hoặc dùng script tôi tạo:**
```bash
# Double-click file: github-deploy.bat
```

---

## 🚀 Tiếp Theo: Deploy Với Netlify

Sau khi code đã trên GitHub:

1. **Đăng nhập Netlify**: https://app.netlify.com
2. **Import from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify
   - Select repo: `personal-blog`
3. **Build settings** (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Environment variables**:
   - Add: `VITE_GITHUB_USERNAME` = `CaoDinh-cnd04`
5. **Deploy!**

---

## 🎯 Lợi Ích Khi Dùng GitHub + Netlify

✅ **Automatic Deployment**: Chỉ cần `git push` là tự động deploy
✅ **Version Control**: Lưu lại lịch sử thay đổi
✅ **Collaboration**: Làm việc nhóm dễ dàng
✅ **Backup**: Code an toàn trên cloud
✅ **Portfolio**: Showcase code cho nhà tuyển dụng

---

## 🆘 Troubleshooting

### Lỗi: "remote: Repository not found"
→ Chưa tạo repo trên GitHub hoặc URL sai
→ Check lại: https://github.com/CaoDinh-cnd04/personal-blog

### Lỗi: "Permission denied"
→ Cần Personal Access Token thay vì password
→ Follow Bước 3 phía trên

### Lỗi: "fatal: not a git repository"
→ Chưa chạy `git init`
→ Chạy: `cd D:\Blog && git init`

### Lỗi: Files quá lớn
→ Có thể do `node_modules`
→ File `.gitignore` đã có sẵn để ignore

---

## ✅ Checklist

- [ ] Tạo repository trên GitHub
- [ ] Git config user name & email
- [ ] `git init` trong thư mục D:\Blog
- [ ] `git add .` để add files
- [ ] `git commit -m "message"`
- [ ] `git remote add origin URL`
- [ ] `git push -u origin main`
- [ ] Verify trên GitHub
- [ ] Connect Netlify (optional)

---

## 📞 Cần Giúp?

Nếu gặp lỗi:
1. Copy error message
2. Google: "git [error message]"
3. Hoặc hỏi tôi!

**Chúc bạn thành công! 🎉**

