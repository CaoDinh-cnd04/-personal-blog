# 📧 Hướng Dẫn Setup EmailJS

## ✅ Đã Cập Nhật File .env

File `.env` đã được tạo với **Public Key** từ EmailJS dashboard của bạn:
- ✅ `VITE_EMAILJS_PUBLIC_KEY=vmBc8ltgx9NiU5Pfq`

---

## 🔧 Cần Làm Tiếp: Tạo Service & Template

Bạn cần tạo **Email Service** và **Email Template** để lấy Service ID và Template ID.

### Bước 1: Tạo Email Service

1. Vào EmailJS dashboard: https://dashboard.emailjs.com/admin/integration
2. Click **"Add New Service"**
3. Chọn email provider (Gmail, Outlook, hoặc Custom SMTP)
4. Đăng nhập và authorize
5. **Copy Service ID** (sẽ có dạng: `service_xxxxx`)

### Bước 2: Tạo Email Template

1. Vào: https://dashboard.emailjs.com/admin/template
2. Click **"Create New Template"**
3. Đặt tên template (ví dụ: "Contact Form")
4. Cấu hình template:
   - **To Email:** Email của bạn (caonhatdinh04@gmail.com)
   - **Subject:** `New Contact Form Message from {{from_name}}`
   - **Content:**
     ```
     From: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
5. **Copy Template ID** (sẽ có dạng: `template_xxxxx`)

### Bước 3: Cập Nhật File .env

Mở file `.env` và thay thế:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx  # Thay bằng Service ID thật
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx  # Thay bằng Template ID thật
```

---

## 🔄 Cập Nhật Code Contact Form

Sau khi có đầy đủ thông tin, cần uncomment code EmailJS trong `src/pages/Contact.jsx`:

**File: `src/pages/Contact.jsx` (dòng 37-48)**

Thay đổi từ:
```javascript
// Uncomment and configure when you have EmailJS credentials:
/*
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'
)
*/
```

Thành:
```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

Và xóa dòng simulate:
```javascript
// Xóa dòng này:
await new Promise(resolve => setTimeout(resolve, 1500))
```

---

## ✅ Checklist

- [x] File `.env` đã được tạo
- [x] Public Key đã được thêm vào `.env`
- [ ] Đã tạo Email Service và có Service ID
- [ ] Đã tạo Email Template và có Template ID
- [ ] Đã cập nhật Service ID và Template ID vào `.env`
- [ ] Đã uncomment code EmailJS trong `Contact.jsx`
- [ ] Đã test form contact hoạt động

---

## 🧪 Test Contact Form

1. Chạy dev server:
   ```bash
   npm run dev
   ```

2. Vào: http://localhost:5173/contact
3. Điền form và submit
4. Kiểm tra email của bạn (caonhatdinh04@gmail.com)

---

## 🚀 Deploy lên Netlify

Khi deploy, nhớ thêm Environment Variables trong Netlify:

1. Vào **Site settings** → **Environment variables**
2. Thêm các biến:
   ```
   VITE_EMAILJS_PUBLIC_KEY=vmBc8ltgx9NiU5Pfq
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_GITHUB_USERNAME=CaoDinh-cnd04
   VITE_SITE_URL=https://merry-dieffenbachia-b90618.netlify.app
   ```

---

## 📝 Lưu Ý

- ⚠️ File `.env` đã được thêm vào `.gitignore` (không commit lên GitHub)
- ✅ File `.env.example` đã được tạo để làm template
- 🔒 **KHÔNG BAO GIỜ** commit file `.env` lên GitHub (chứa thông tin nhạy cảm)

---

**Sau khi tạo Service và Template, cập nhật file `.env` và test form contact!** 📧

