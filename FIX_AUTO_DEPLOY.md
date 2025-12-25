# 🔧 Sửa Lỗi: Code Không Tự Động Deploy

## ❌ Vấn Đề
Code mới không tự động deploy lên Netlify mặc dù đã có site live.

## 🔍 Nguyên Nhân
Có thể bạn đã deploy bằng cách **upload thủ công** (drag & drop) thay vì **kết nối với GitHub**. Điều này khiến Netlify không biết khi nào code mới được push lên GitHub.

---

## ✅ GIẢI PHÁP: Kết Nối GitHub với Netlify

### Bước 1: Kiểm Tra Site Hiện Tại
1. Vào https://app.netlify.com
2. Click vào site của bạn: `merry-dieffenbachia-b90618`
3. Vào **Site settings** → **Build & deploy** → **Continuous Deployment**

### Bước 2: Kiểm Tra Repository Connection
- Nếu thấy **"No repository connected"** → Cần kết nối GitHub
- Nếu đã có repository → Kiểm tra branch name (phải là `main`)

### Bước 3: Kết Nối GitHub Repository

**Nếu chưa kết nối:**

1. Vào **Site settings** → **Build & deploy** → **Continuous Deployment**
2. Click **"Link repository"** hoặc **"Connect to Git provider"**
3. Chọn **GitHub** và authorize Netlify
4. Chọn repository: `CaoDinh-cnd04/personal-blog` (hoặc tên repo của bạn)
5. Chọn branch: **`main`**
6. Build settings (tự động detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **"Save"**

### Bước 4: Kiểm Tra Build Settings
Vào **Site settings** → **Build & deploy** → **Build settings**:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ Branch to deploy: `main`

### Bước 5: Thêm Environment Variables (Nếu Chưa)
Vào **Site settings** → **Environment variables** → **Add a variable**:
```
VITE_GITHUB_USERNAME=CaoDinh-cnd04
VITE_SITE_URL=https://merry-dieffenbachia-b90618.netlify.app
```

### Bước 6: Test Auto-Deploy
1. Push code mới lên GitHub:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push origin main
   ```

2. Vào Netlify dashboard → **Deploys** tab
3. Bạn sẽ thấy build **tự động chạy** sau vài giây!
4. Đợi 2-3 phút để build hoàn tất

---

## 🆘 Nếu Vẫn Không Hoạt Động

### Kiểm Tra 1: Repository Có Đúng Không?
- Vào GitHub: https://github.com/CaoDinh-cnd04/personal-blog
- Đảm bảo code mới đã được push lên

### Kiểm Tra 2: Branch Name
- Netlify phải watch branch `main` (không phải `master`)
- Kiểm tra: **Site settings** → **Build & deploy** → **Branch deploys**

### Kiểm Tra 3: Netlify Webhook
- Vào **Site settings** → **Build & deploy** → **Deploy notifications**
- Đảm bảo GitHub webhook đã được setup

### Kiểm Tra 4: Build Logs
- Vào **Deploys** tab
- Click vào deploy mới nhất
- Xem **Deploy log** để tìm lỗi

---

## 🔄 Cách Deploy Thủ Công (Tạm Thời)

Nếu cần deploy ngay mà chưa kết nối GitHub:

1. Build local:
   ```bash
   npm run build
   ```

2. Vào Netlify dashboard → **Deploys** tab
3. Kéo thả thư mục `dist` vào vùng **"Deploy manually"**

**Lưu ý:** Cách này không tự động, chỉ dùng tạm thời!

---

## ✅ Sau Khi Kết Nối Xong

Mỗi lần bạn:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Netlify sẽ **tự động**:
1. Detect code mới
2. Build project
3. Deploy lên production
4. Update website

**Không cần làm gì thêm!** 🎉

---

## 📝 Checklist

- [ ] Đã kết nối GitHub repository với Netlify
- [ ] Branch name là `main`
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Environment variables đã được thêm
- [ ] Đã test push code và thấy auto-deploy hoạt động

---

**Sau khi hoàn thành, code sẽ tự động deploy mỗi khi bạn push lên GitHub!** 🚀

