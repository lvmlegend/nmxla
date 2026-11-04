# 🌸 IMAGEX • 画像処理 - Ứng Dụng Ôn Luyện Xử Lý Ảnh (Anime Edition)

> Hệ thống Web ôn luyện trắc nghiệm môn **Xử Lý Ảnh (Digital Image Processing)** với **400 câu hỏi chuẩn 100%**, tích hợp **hệ thống âm thanh tương tác (Web Audio API Synthesizer)**, **thanh chỉnh âm lượng to/nhỏ**, **trợ lý Anime Yuki-chan** và **hiệu ứng hoa anh đào rơi**.

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-ff758c?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Tính Năng Nổi Bật

- 🌸 **Giao Diện Anime & Kawaii**: Phong cách Visual Novel với trợ lý chibi Yuki-chan đồng hành, biểu cảm phản ứng theo từng câu trả lời.
- 🔊 **Điều Chỉnh Âm Lượng & Âm Thanh Thủ Tục**: Thanh trượt Volume (0% - 100%) tùy chỉnh độ to/nhỏ, âm thanh tạo hoàn toàn bằng Web Audio API (không phụ thuộc file mp3 ngoài, tải tức thì, 0 độ trễ).
- 🗣️ **Hỗ Trợ Giọng Đọc (Text-to-Speech)**: Đọc câu hỏi và các phương án bằng tiếng Việt.
- 🌸 **Hiệu Ứng Hoa Anh Đào (Sakura Falling)**: Cánh hoa anh đào rơi nhẹ nhàng, có thể bật/tắt tùy ý.
- ⚡ **Luyện Tập Tự Do**: Phản hồi đúng/sai tức thì kèm định nghĩa cốt lõi, tự động chuyển câu khi đúng, trộn ngẫu nhiên.
- ⏱️ **Mô Phỏng Thi Thử Tính Giờ**: Các gói đề 20, 40, 50, 60 hoặc toàn bộ 400 câu, đồng hồ đếm ngược, bảng kết quả xếp loại và xem lại câu sai.
- 📚 **Phân Loại 8 Chuyên Đề Chuẩn Giáo Trình**:
  1. *Chương 1*: Tổng quan & Khái niệm cơ bản (Nhiễu ngẫu nhiên, hệ thống, mức xám, pixel...)
  2. *Chương 2*: Thu nhận & Biểu diễn màu, định dạng ảnh (RGB, CMY, HSV, Bayer, 3-CCD, BMP, RAW, TIFF...)
  3. *Chương 3*: Tiền xử lý, lọc ảnh & Histogram (Lọc trung bình, trung vị, Wiener, nhân chập...)
  4. *Chương 4*: Phát hiện biên & Hình thái học (Sobel, Prewitt, Canny, Laplace, Co, Giãn, Mở, Đóng...)
  5. *Chương 5*: Phân vùng ảnh (Segmentation) (Ngưỡng, Đẳng điệu, Tam giác, Texture, Miền...)
  6. *Chương 6*: Nhận dạng ảnh & Phân lớp (K-means, KNN, ISODATA, Hopfield, Kohonen...)
  7. *Chương 7*: Nén ảnh & Chuẩn JPEG (RLE, Huffman, LZW, DCT, Zig-Zag, Fractal...)
  8. *Chuẩn đầu ra học phần*: 10 câu hỏi thái độ & tác phong học tập.
- ⭐ **Kho Ôn Luyện Trọng Tâm**: Lưu câu gắn sao và tự động gom các câu từng làm sai để luyện riêng.
- 🔍 **Tra Cứu Tức Thì**: Tìm kiếm toàn bộ 400 câu hỏi và sổ tay 151 thuật ngữ cốt lõi.

---

## 🚀 Hướng Dẫn Kích Hoạt GitHub Pages

Dự án này là trang web tĩnh thuần túy (`index.html`, `style.css`, `app.js`, `audio.js`, `questions.js`, `glossary.js`), hoàn hảo để lưu trữ miễn phí trên **GitHub Pages**.

### Các Bước Push Lên GitHub & Bật GitHub Pages:

1. **Khởi tạo và commit mã nguồn**:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit for IMAGEX Anime Edition"
   git branch -M main
   ```

2. **Tạo repository mới trên GitHub**:
   - Truy cập: [https://github.com/new](https://github.com/new)
   - Đặt tên Repository (ví dụ: `on-luyen-xu-ly-anh` hoặc `xlanh`).
   - Chọn chế độ **Public**.
   - Bấm **Create repository**.

3. **Liên kết và Push lên GitHub**:
   ```bash
   git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
   *(Thay `<USERNAME>` và `<REPO_NAME>` bằng tên tài khoản và tên repo của bạn)*

4. **Bật GitHub Pages**:
   - Vào tab **Settings** của repository trên GitHub.
   - Chọn mục **Pages** ở menu bên trái.
   - Tại phần **Branch**, chọn nhánh **`main`** (hoặc `master`), thư mục chọn **`/(root)`**.
   - Nhấn **Save**.
   - Sau 1 - 2 phút, GitHub Pages sẽ kích hoạt đường dẫn truy cập trực tiếp:
     👉 `https://<USERNAME>.github.io/<REPO_NAME>/`

---

## ⌨️ Phím Tắt Nhanh

| Phím Tắt | Chức Năng |
| :--- | :--- |
| <kbd>A</kbd>, <kbd>B</kbd>, <kbd>C</kbd>, <kbd>D</kbd> hoặc <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd> | Chọn nhanh phương án trả lời |
| <kbd>→</kbd> hoặc <kbd>Space</kbd> / <kbd>Enter</kbd> | Chuyển sang câu tiếp theo |
| <kbd>←</kbd> | Quay lại câu trước đó |
| <kbd>S</kbd> | Gắn sao / Lưu câu hỏi |
| <kbd>R</kbd> | Bật/Tắt đọc to câu hỏi (Text-to-Speech) |
| <kbd>M</kbd> | Bật / Tắt âm thanh (Mute/Unmute) |
| <kbd>?</kbd> | Mở bảng trợ giúp phím tắt |

---

## 💻 Chạy Trực Tiếp Ở Local (Offline)

Bạn không cần cài đặt bất kỳ server nào:
- Chỉ cần nhấp đúp trực tiếp vào tệp `index.html` trong máy tính để mở trên Chrome, Edge, Firefox, Brave...
- Hoặc mở bằng Python web server:
  ```bash
  python -m http.server 8080
  ```
  Sau đó mở trình duyệt tại: `http://localhost:8080`

---
🌸 *Chúc bạn ôn tập thật tốt và đạt điểm số cao nhất trong kỳ thi môn Xử Lý Ảnh!*
