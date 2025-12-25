# 🔧 Sửa Lỗi: "412 Gmail_API: Request had insufficient authentication scopes"

## ❌ Lỗi
```
412 Gmail_API: Request had insufficient authentication scopes
```

## 🔍 Nguyên Nhân
Lỗi này xảy ra khi Gmail account chưa cấp đủ quyền (scopes) cho EmailJS để gửi email. Cần phải **disconnect và reconnect** với đầy đủ quyền.

---

## ✅ GIẢI PHÁP

### Bước 1: Disconnect Gmail Hiện Tại

1. Trong dialog "Config Service"
2. Click nút **"Disconnect"** (bên cạnh "Connected as caonhatdinh04@gmail.com")
3. Đợi disconnect hoàn tất

### Bước 2: Reconnect Gmail với Đầy Đủ Quyền

1. Click lại **"Connect"** hoặc **"Connect Gmail"**
2. **Quan trọng:** Khi Google hiện dialog yêu cầu quyền:
   - ✅ **PHẢI TÍCH** vào tất cả các quyền được yêu cầu
   - ✅ Đặc biệt là quyền **"Send email on your behalf"**
   - ✅ Không được bỏ qua bất kỳ quyền nào

3. Click **"Allow"** hoặc **"Cho phép"** để cấp quyền

### Bước 3: Tạo Service Lại

1. Sau khi reconnect thành công
2. **Bỏ tích** checkbox "Send test email to verify configuration" (tạm thời)
3. Click **"Create Service"**

### Bước 4: Test Service (Sau Khi Tạo)

1. Sau khi service được tạo thành công
2. Vào EmailJS dashboard → **Email Services**
3. Click vào service vừa tạo
4. Click **"Send Test Email"** để test

---

## 🆘 Nếu Vẫn Lỗi

### Cách 1: Xóa Service và Tạo Lại

1. Vào EmailJS dashboard: https://dashboard.emailjs.com/admin/integration
2. Xóa service cũ (nếu có)
3. Tạo service mới và reconnect Gmail

### Cách 2: Kiểm Tra Google Account Permissions

1. Vào: https://myaccount.google.com/permissions
2. Tìm **"EmailJS"** hoặc **"Third-party apps"**
3. Xóa EmailJS nếu có
4. Quay lại EmailJS và reconnect lại

### Cách 3: Dùng Email Service Khác (Tạm Thời)

Nếu Gmail vẫn lỗi, có thể dùng:

1. **Outlook/Hotmail:**
   - Vào EmailJS → Add New Service
   - Chọn "Outlook"
   - Đăng nhập và authorize

2. **Custom SMTP:**
   - Nếu bạn có SMTP server riêng
   - Chọn "Custom SMTP" và điền thông tin

---

## ✅ Checklist

- [ ] Đã disconnect Gmail cũ
- [ ] Đã reconnect với đầy đủ quyền
- [ ] Đã tích tất cả permissions khi Google yêu cầu
- [ ] Đã tạo service thành công
- [ ] Đã có Service ID (service_6r1stip)
- [ ] Đã test gửi email thành công

---

## 📝 Lưu Ý

- ⚠️ **Quan trọng:** Phải cấp **TẤT CẢ** quyền mà Google yêu cầu
- ✅ Service ID của bạn: `service_6r1stip` (đã có sẵn)
- 🔄 Nếu vẫn lỗi, thử dùng browser khác hoặc incognito mode

---

## 🎯 Sau Khi Fix Xong

1. **Copy Service ID:** `service_6r1stip`
2. **Cập nhật file `.env`:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_6r1stip
   ```
3. **Tạo Email Template** (bước tiếp theo)
4. **Test contact form**

---

**Lỗi này thường do chưa cấp đủ quyền khi kết nối Gmail. Disconnect và reconnect lại với đầy đủ quyền sẽ fix được!** 🔧

