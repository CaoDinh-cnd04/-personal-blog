# 🔧 Sửa Lỗi: Deploy Failed trên Netlify

## ❌ Vấn Đề
Deploy fail ở stage **"Initializing"** - đây là lỗi phổ biến khi setup Netlify.

## 🔍 Các Nguyên Nhân Thường Gặp

### 1. Thiếu Environment Variables
### 2. Build Command Sai
### 3. Node Version Không Đúng
### 4. Repository Chưa Được Kết Nối Đúng
### 5. Thiếu Dependencies

---

## ✅ GIẢI PHÁP TỪNG BƯỚC

### Bước 1: Xem Deploy Log Chi Tiết

1. Vào Netlify dashboard
2. Click vào deploy failed
3. Click **"Why did it fail?"** (nút AI) để xem phân tích
4. Hoặc scroll xuống xem **Deploy log** chi tiết
5. Tìm dòng có chữ **"Error"** hoặc **"Failed"**

**Copy toàn bộ error message** để tôi có thể giúp bạn fix chính xác!

---

### Bước 2: Kiểm Tra Build Settings

Vào **Site settings** → **Build & deploy** → **Build settings**:

✅ **Build command:** `npm run build`  
✅ **Publish directory:** `dist`  
✅ **Base directory:** (để trống)  
✅ **Node version:** `18.0.0` (hoặc để Netlify tự detect)

---

### Bước 3: Kiểm Tra Environment Variables

Vào **Site settings** → **Environment variables**:

**Bắt buộc phải có:**
```
VITE_GITHUB_USERNAME=CaoDinh-cnd04
VITE_SITE_URL=https://merry-dieffenbachia-b90618.netlify.app
```

**Tùy chọn (nếu dùng EmailJS):**
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### Bước 4: Kiểm Tra Repository Connection

Vào **Site settings** → **Build & deploy** → **Continuous Deployment**:

- ✅ Repository phải được kết nối
- ✅ Branch: `main`
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`

---

### Bước 5: Fix Các Lỗi Thường Gặp

#### Lỗi 1: "Command failed: npm install"
**Nguyên nhân:** Node version không đúng hoặc package.json có vấn đề

**Fix:**
1. Vào **Site settings** → **Build & deploy** → **Build settings**
2. Thêm **Environment variable:**
   - Key: `NODE_VERSION`
   - Value: `18.0.0`
3. Hoặc sửa `netlify.toml` (đã có sẵn):
   ```toml
   [build.environment]
     NODE_VERSION = "18.0.0"
   ```

#### Lỗi 2: "Build command not found"
**Nguyên nhân:** Build command sai

**Fix:**
- Build command phải là: `npm run build`
- Không phải: `npm build` hoặc `yarn build`

#### Lỗi 3: "Environment variable not found"
**Nguyên nhân:** Thiếu env vars

**Fix:**
- Thêm tất cả env vars cần thiết (xem Bước 3)

#### Lỗi 4: "Cannot find module"
**Nguyên nhân:** Thiếu dependencies trong package.json

**Fix:**
1. Kiểm tra `package.json` có đầy đủ dependencies
2. Đảm bảo `package-lock.json` đã được commit lên GitHub

#### Lỗi 5: "Build directory not found"
**Nguyên nhân:** Publish directory sai

**Fix:**
- Publish directory phải là: `dist`
- Không phải: `build` hoặc `public`

---

### Bước 6: Retry Deploy

Sau khi fix các vấn đề trên:

1. Click nút **"Retry"** trong deploy failed
2. Hoặc push code mới:
   ```bash
   git add .
   git commit -m "Fix deploy settings"
   git push origin main
   ```

---

## 🆘 Nếu Vẫn Fail

### Xem Log Chi Tiết:

1. Click vào deploy failed
2. Scroll xuống phần **"Deploy log"**
3. Click **"Maximize log"** để xem toàn bộ
4. Tìm dòng có:
   - ❌ `Error:`
   - `Failed`
   - ⚠️ `Warning:`

### Copy Error Message:

Copy toàn bộ error message và gửi cho tôi, tôi sẽ giúp fix cụ thể!

---

## ✅ Checklist Trước Khi Deploy

- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Node version: 18.0.0
- [ ] Environment variables đã được thêm
- [ ] Repository đã được kết nối
- [ ] Branch: `main`
- [ ] `package.json` và `package-lock.json` đã commit
- [ ] `netlify.toml` đã có trong repo

---

## 🔄 Quick Fix Commands

Nếu muốn test build local trước:

```bash
# 1. Install dependencies
npm install

# 2. Build project
npm run build

# 3. Kiểm tra thư mục dist đã được tạo
dir dist
```

Nếu build local thành công nhưng Netlify fail → Vấn đề ở cấu hình Netlify.

---

**Gửi cho tôi error message từ deploy log, tôi sẽ giúp fix chính xác!** 🔧

