# Lucas & Jolin Wedding Website

Trang web đám cưới của Lucas & Jolin.

## Cấu trúc dự án

Dự án đã được tái cấu trúc để triển khai trên Vercel:

```
/
├── index.html          # Trang chính
├── index.js           # JavaScript chính
├── style.css          # CSS chính
├── vercel.json        # Cấu hình Vercel
├── package.json       # Thông tin dự án
├── img/               # Hình ảnh
├── css/               # CSS tùy chỉnh
├── js/                # JavaScript tùy chỉnh
├── assets/            # Tài nguyên khác
├── audios/            # File âm thanh
├── _nuxt/             # Nuxt.js assets
├── boxicons@2.1.1/    # Icon library
├── swiper@8.4.4/      # Swiper library
├── aos@2.3.1/         # AOS animation library
└── ...
```

## Triển khai lên Vercel

### Cách 1: Sử dụng Vercel CLI

1. Cài đặt Vercel CLI:
```bash
npm i -g vercel
```

2. Đăng nhập vào Vercel:
```bash
vercel login
```

3. Triển khai:
```bash
vercel
```

### Cách 2: Sử dụng Git Integration

1. Push code lên GitHub repository
2. Kết nối repository với Vercel tại https://vercel.com
3. Vercel sẽ tự động triển khai khi có commit mới

### Cách 3: Upload trực tiếp

1. Truy cập https://vercel.com/new
2. Chọn "Browse All Templates" hoặc upload project folder
3. Vercel sẽ tự động detect static site và triển khai

## Cấu hình

- `vercel.json`: Cấu hình triển khai, bao gồm headers bảo mật và rewrites
- `package.json`: Metadata dự án và scripts để phát triển local

## Phát triển local

```bash
# Cài đặt dependencies (optional)
npm install

# Chạy local server
npm run dev
```

## Lưu ý

- Tất cả các đường dẫn sử dụng absolute paths (`/img/`, `/css/`, etc.)
- Website hoàn toàn static, không cần server-side processing
- Tối ưu hóa cho hiệu suất và SEO