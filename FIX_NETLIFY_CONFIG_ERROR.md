# 🔧 Sửa Lỗi: "Failed retrieving extensions for site"

## ❌ Lỗi
```
Failed during stage 'Reading and parsing configuration files': 
Failed retrieving extensions for site 9e52bc41-1009-4055-ae8d-3f
Failing build: Failed to parse configuration
```

## 🔍 Nguyên Nhân
Lỗi này xảy ra khi Netlify không thể đọc/parse cấu hình site. Có thể do:
1. **Extensions/Plugins bị lỗi** trong Netlify UI
2. **netlify.toml** có syntax lỗi (nhưng đã fix)
3. **Permissions issue** với extensions

---

## ✅ GIẢI PHÁP

### Bước 1: Kiểm Tra Extensions/Plugins trong Netlify UI

**Đây là bước QUAN TRỌNG NHẤT:**

1. Vào Netlify dashboard: https://app.netlify.com
2. Chọn site: `merry-dieffenbachia-b90618`
3. Vào **Site settings** → **Build & deploy** → **Plugins** (hoặc **Extensions**)
4. **Kiểm tra xem có extensions/plugins nào không:**
   - Nếu có → **XÓA TẤT CẢ** extensions/plugins
   - Nếu không có → Chuyển sang Bước 2

**Cách xóa extension:**
- Click vào extension
- Click nút **"Remove"** hoặc **"Uninstall"**
- Xác nhận xóa

---

### Bước 2: Kiểm Tra netlify.toml

File `netlify.toml` đã được fix và có syntax đúng. Đảm bảo:

1. File đã được commit và push lên GitHub:
   ```bash
   git add netlify.toml
   git commit -m "Fix netlify.toml configuration"
   git push origin main
   ```

2. File nằm ở **root** của repository (không phải trong thư mục con)

---

### Bước 3: Tạo netlify.toml Đơn Giản (Nếu Vẫn Lỗi)

Nếu vẫn lỗi sau khi xóa extensions, thử dùng version đơn giản:

**Tạo file `netlify.toml` mới (đơn giản nhất):**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Commit và push:
```bash
git add netlify.toml
git commit -m "Simplify netlify.toml"
git push origin main
```

---

### Bước 4: Kiểm Tra Repository Connection

1. Vào **Site settings** → **Build & deploy** → **Continuous Deployment**
2. Đảm bảo repository đã được kết nối đúng
3. Branch: `main`
4. Build command: `npm run build`
5. Publish directory: `dist`

---

### Bước 5: Retry Deploy

Sau khi fix:

1. **Option 1:** Click nút **"Retry"** trong deploy failed
2. **Option 2:** Push code mới:
   ```bash
   git add .
   git commit -m "Fix Netlify configuration"
   git push origin main
   ```

---

## 🎯 Checklist

- [ ] Đã xóa TẤT CẢ extensions/plugins trong Netlify UI
- [ ] `netlify.toml` đã được commit và push
- [ ] Repository đã được kết nối đúng
- [ ] Build settings đúng:
  - Build command: `npm run build`
  - Publish directory: `dist`
- [ ] Đã retry deploy

---

## 🆘 Nếu Vẫn Lỗi

### Kiểm Tra Thêm:

1. **Xem deploy log chi tiết:**
   - Click vào deploy failed
   - Scroll xuống xem toàn bộ log
   - Tìm dòng có "Error" hoặc "Failed"

2. **Kiểm Tra Permissions:**
   - Đảm bảo Netlify có quyền truy cập GitHub repository
   - Vào GitHub → Settings → Applications → Authorized OAuth Apps
   - Kiểm tra Netlify đã được authorize

3. **Thử Tạo Site Mới:**
   - Nếu vẫn lỗi, có thể tạo site mới và import lại repository

---

## 📝 File Đã Được Fix

File `netlify.toml` đã được sửa và có syntax đúng. Bạn chỉ cần:

1. **XÓA extensions/plugins** trong Netlify UI (quan trọng nhất!)
2. Commit và push `netlify.toml`:
   ```bash
   git add netlify.toml
   git commit -m "Fix netlify.toml"
   git push origin main
   ```
3. Retry deploy

---

**Bước quan trọng nhất: XÓA TẤT CẢ extensions/plugins trong Netlify UI!** 🎯

