# Hình ảnh Chứng chỉ

Đặt các hình ảnh chứng chỉ vào thư mục này với tên file như sau:

1. **Networking Basics**: `networking-basics.jpg` (hoặc `.png`)
2. **JavaScript Essentials 1**: `javascript-essentials-1.jpg` (hoặc `.png`)
3. **JavaScript Essentials 2**: `javascript-essentials-2.jpg` (hoặc `.png`)

## Cách thêm hình ảnh:

1. Lưu hình ảnh chứng chỉ với tên file đúng như trên
2. Đặt vào thư mục `public/images/certificates/`
3. Cập nhật link verify trong file `src/pages/About.jsx` (tìm `verifyLink` trong mảng `certificates`)

## Link Verify:

Để lấy link verify từ chứng chỉ:
- Quét QR code trên chứng chỉ
- Hoặc vào trang web của Cisco Networking Academy để verify
- Copy link và cập nhật vào `verifyLink` trong code

