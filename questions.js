// Ngân hàng 400 câu hỏi ôn tập môn Xử Lý Ảnh
// Tự động phân loại và giải đáp chính xác 100%
window.QUESTIONS_DATA = [
  {
    "id": 1,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Nhiễu ngẫu nhiên?",
    "options": {
      "A": "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc",
      "B": "Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc",
      "C": "Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng",
      "D": "Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"nhiễu ngẫu nhiên\" có đặc điểm/định nghĩa: \"Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 2,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Tăng số mức xám?",
    "options": {
      "A": "Biểu diễn cường độ sáng của điểm ảnh",
      "B": "Giảm không gian lưu trữ dữ liệu ảnh",
      "C": "Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc",
      "D": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"tăng số mức xám\" có đặc điểm/định nghĩa: \"Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 3,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Ảnh số?",
    "options": {
      "A": "Mẫu đầu vào được gán vào một lớp đã xác định dựa trên mẫu chuẩn",
      "B": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh",
      "C": "Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa",
      "D": "Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"ảnh số\" có đặc điểm/định nghĩa: \"Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 4,
    "question": "Đặc điểm nào sau đây gắn đúng với Nén không bảo toàn thông tin?",
    "options": {
      "A": "Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng",
      "B": "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc",
      "C": "Khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển",
      "D": "Các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"nén không bảo toàn thông tin\" có đặc điểm/định nghĩa: \"Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 5,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Nén không bảo toàn thông tin?",
    "options": {
      "A": "Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng",
      "B": "Biểu diễn cường độ sáng của điểm ảnh",
      "C": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh",
      "D": "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"nén không bảo toàn thông tin\" có đặc điểm/định nghĩa: \"Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 6,
    "question": "Đặc điểm nào sau đây gắn đúng với Ảnh màu RGB?",
    "options": {
      "A": "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng",
      "B": "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn",
      "C": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "D": "Ảnh chỉ có hai mức biểu diễn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"ảnh màu rgb\" có đặc điểm/định nghĩa: \"Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 7,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Ảnh màu RGB?",
    "options": {
      "A": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "B": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "C": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh",
      "D": "Định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"ảnh màu rgb\" có đặc điểm/định nghĩa: \"Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 8,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Mô hình HSV?",
    "options": {
      "A": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn",
      "B": "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng",
      "C": "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu",
      "D": "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"mô hình hsv\" có đặc điểm/định nghĩa: \"Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 9,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với BMP?",
    "options": {
      "A": "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng",
      "B": "Định dạng ảnh bitmap lưu dữ liệu ảnh theo cấu trúc điểm ảnh",
      "C": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh",
      "D": "Kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"bmp\" có đặc điểm/định nghĩa: \"Định dạng ảnh bitmap lưu dữ liệu ảnh theo cấu trúc điểm ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 10,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Phối màu cộng?",
    "options": {
      "A": "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB",
      "B": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu",
      "C": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "D": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phối màu cộng\" có đặc điểm/định nghĩa: \"Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 11,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Phối màu trừ?",
    "options": {
      "A": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "B": "Kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in",
      "C": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn",
      "D": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phối màu trừ\" có đặc điểm/định nghĩa: \"Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 12,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về RAW?",
    "options": {
      "A": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn",
      "B": "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ",
      "C": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh",
      "D": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"raw\" có đặc điểm/định nghĩa: \"Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 13,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Thiết bị thu nhận ảnh Raster?",
    "options": {
      "A": "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng",
      "B": "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn",
      "C": "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ",
      "D": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"thiết bị thu nhận ảnh raster\" có đặc điểm/định nghĩa: \"Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 14,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Lấy mẫu?",
    "options": {
      "A": "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng",
      "B": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "C": "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc",
      "D": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lấy mẫu\" có đặc điểm/định nghĩa: \"Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 15,
    "question": "Đặc điểm nào sau đây gắn đúng với Mô hình Vector?",
    "options": {
      "A": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh",
      "B": "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình",
      "C": "Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian",
      "D": "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"mô hình vector\" có đặc điểm/định nghĩa: \"Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 16,
    "question": "Nội dung nào phản ánh đúng bản chất của Lọc Bayer?",
    "options": {
      "A": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "B": "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng",
      "C": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh",
      "D": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"lọc bayer\" có đặc điểm/định nghĩa: \"Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 17,
    "question": "Đặc điểm nào sau đây gắn đúng với Three-CCD?",
    "options": {
      "A": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in",
      "B": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "C": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "D": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"three-ccd\" có đặc điểm/định nghĩa: \"Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 18,
    "question": "Đặc điểm nào sau đây gắn đúng với Mô hình HSV?",
    "options": {
      "A": "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng",
      "B": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in",
      "C": "Ảnh chỉ có hai mức biểu diễn",
      "D": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"mô hình hsv\" có đặc điểm/định nghĩa: \"Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 19,
    "question": "Đặc điểm nào sau đây gắn đúng với TIFF?",
    "options": {
      "A": "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng",
      "B": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector",
      "C": "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình",
      "D": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"tiff\" có đặc điểm/định nghĩa: \"Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 20,
    "question": "Đặc điểm nào sau đây gắn đúng với Phối màu cộng?",
    "options": {
      "A": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "B": "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB",
      "C": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "D": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"phối màu cộng\" có đặc điểm/định nghĩa: \"Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 21,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Lọc trung bình?",
    "options": {
      "A": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh",
      "B": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung",
      "C": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "D": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lọc trung bình\" có đặc điểm/định nghĩa: \"Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 22,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Khôi phục ảnh?",
    "options": {
      "A": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "B": "Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám",
      "C": "Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu",
      "D": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"khôi phục ảnh\" có đặc điểm/định nghĩa: \"Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 23,
    "question": "Đặc điểm nào sau đây gắn đúng với Mặt phẳng bit cao?",
    "options": {
      "A": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh",
      "B": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "C": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép",
      "D": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"mặt phẳng bit cao\" có đặc điểm/định nghĩa: \"Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 24,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Mặt phẳng bit cao?",
    "options": {
      "A": "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định",
      "B": "Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra",
      "C": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "D": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"mặt phẳng bit cao\" có đặc điểm/định nghĩa: \"Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 25,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Lọc Wiener?",
    "options": {
      "A": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "B": "Biểu diễn số điểm ảnh tương ứng với từng mức xám",
      "C": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "D": "Nhiễu có biên độ tuân theo phân bố Gaussian"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lọc wiener\" có đặc điểm/định nghĩa: \"Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 26,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Tăng độ sáng?",
    "options": {
      "A": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "B": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh",
      "C": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "D": "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tăng độ sáng\" có đặc điểm/định nghĩa: \"Cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 27,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Cân bằng histogram?",
    "options": {
      "A": "Nhiễu có biên độ tuân theo phân bố Gaussian",
      "B": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "C": "Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra",
      "D": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"cân bằng histogram\" có đặc điểm/định nghĩa: \"Phân bố lại mức xám để cải thiện độ tương phản của ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 28,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Dãn độ tương phản?",
    "options": {
      "A": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh",
      "B": "Nhiễu có biên độ tuân theo phân bố Gaussian",
      "C": "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối",
      "D": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"dãn độ tương phản\" có đặc điểm/định nghĩa: \"Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 29,
    "question": "Khi xét Lọc trung bình, phát biểu nào là chính xác?",
    "options": {
      "A": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh",
      "B": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh",
      "C": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công",
      "D": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lọc trung bình\" có đặc điểm/định nghĩa: \"Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 30,
    "question": "Đặc điểm nào sau đây gắn đúng với Lọc trung bình theo k giá trị gần nhất?",
    "options": {
      "A": "Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám",
      "B": "Nhiễu có biên độ tuân theo phân bố Gaussian",
      "C": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "D": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"lọc trung bình theo k giá trị gần nhất\" có đặc điểm/định nghĩa: \"Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 31,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Nhiễu muối tiêu?",
    "options": {
      "A": "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định",
      "B": "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh",
      "C": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "D": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"nhiễu muối tiêu\" có đặc điểm/định nghĩa: \"Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 32,
    "question": "Khi xét Mặt phẳng bit cao, phát biểu nào là chính xác?",
    "options": {
      "A": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "B": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "C": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét",
      "D": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"mặt phẳng bit cao\" có đặc điểm/định nghĩa: \"Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 33,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Lọc đảo?",
    "options": {
      "A": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "B": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "C": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép",
      "D": "Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lọc đảo\" có đặc điểm/định nghĩa: \"Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 34,
    "question": "Đặc điểm nào sau đây gắn đúng với Tăng độ sáng?",
    "options": {
      "A": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "B": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "C": "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh",
      "D": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"tăng độ sáng\" có đặc điểm/định nghĩa: \"Cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 35,
    "question": "Nội dung nào phản ánh đúng bản chất của Cân bằng histogram?",
    "options": {
      "A": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "B": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công",
      "C": "Biểu diễn số điểm ảnh tương ứng với từng mức xám",
      "D": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"histogram\" có đặc điểm/định nghĩa: \"Biểu diễn số điểm ảnh tương ứng với từng mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 36,
    "question": "Đặc điểm nào sau đây gắn đúng với Trích biên hình thái?",
    "options": {
      "A": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc",
      "B": "Bao gồm cả bốn hướng chéo ngoài bốn láng giềng trực giao",
      "C": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "D": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"trích biên hình thái\" có đặc điểm/định nghĩa: \"Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 37,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Trích biên hình thái?",
    "options": {
      "A": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "B": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "C": "Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ",
      "D": "Làm mở rộng vùng đối tượng theo phần tử cấu trúc"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"trích biên hình thái\" có đặc điểm/định nghĩa: \"Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 38,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Ngưỡng kép Canny?",
    "options": {
      "A": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "B": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm",
      "C": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám",
      "D": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"ngưỡng kép canny\" có đặc điểm/định nghĩa: \"Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 39,
    "question": "Đặc điểm nào sau đây gắn đúng với Trích biên trong?",
    "options": {
      "A": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên",
      "B": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "C": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm",
      "D": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"trích biên trong\" có đặc điểm/định nghĩa: \"Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 40,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Phát hiện biên trực tiếp?",
    "options": {
      "A": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm",
      "B": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny",
      "C": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "D": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phát hiện biên trực tiếp\" có đặc điểm/định nghĩa: \"Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 41,
    "question": "Đặc điểm nào sau đây gắn đúng với Prewitt?",
    "options": {
      "A": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập",
      "B": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "C": "Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng",
      "D": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"prewitt\" có đặc điểm/định nghĩa: \"Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 42,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Sobel?",
    "options": {
      "A": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "B": "Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ",
      "C": "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng",
      "D": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"sobel\" có đặc điểm/định nghĩa: \"Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 43,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Canny?",
    "options": {
      "A": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn",
      "B": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm",
      "C": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "D": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"canny\" có đặc điểm/định nghĩa: \"Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 44,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Phép co ảnh?",
    "options": {
      "A": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "B": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "C": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "D": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phép co ảnh\" có đặc điểm/định nghĩa: \"Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 45,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Phép đóng?",
    "options": {
      "A": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm",
      "B": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "C": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "D": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"phép đóng\" có đặc điểm/định nghĩa: \"Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 46,
    "question": "Khi xét Đạo hàm bậc hai, phát biểu nào là chính xác?",
    "options": {
      "A": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám",
      "B": "Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng",
      "C": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm",
      "D": "Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"đạo hàm bậc hai\" có đặc điểm/định nghĩa: \"Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 47,
    "question": "Đặc điểm nào sau đây gắn đúng với Ngưỡng kép Canny?",
    "options": {
      "A": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập",
      "B": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "C": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên",
      "D": "Xác định biên từ ranh giới của các vùng sau khi phân vùng"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"ngưỡng kép canny\" có đặc điểm/định nghĩa: \"Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 48,
    "question": "Khi xét Phần tử cấu trúc, phát biểu nào là chính xác?",
    "options": {
      "A": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh",
      "B": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "C": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "D": "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phần tử cấu trúc\" có đặc điểm/định nghĩa: \"Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 49,
    "question": "Đặc điểm nào sau đây gắn đúng với Phát hiện biên trực tiếp?",
    "options": {
      "A": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "B": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh",
      "C": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc",
      "D": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"phát hiện biên trực tiếp\" có đặc điểm/định nghĩa: \"Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 50,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Gradient?",
    "options": {
      "A": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "B": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám",
      "C": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên",
      "D": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"gradient\" có đặc điểm/định nghĩa: \"Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 51,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Kết cấu texture?",
    "options": {
      "A": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt",
      "B": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng",
      "C": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng",
      "D": "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"kết cấu texture\" có đặc điểm/định nghĩa: \"Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 52,
    "question": "Đặc điểm nào sau đây gắn đúng với Phân vùng theo ngưỡng?",
    "options": {
      "A": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "B": "Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn",
      "C": "Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám",
      "D": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phân vùng theo ngưỡng\" có đặc điểm/định nghĩa: \"Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 53,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Làm trơn histogram?",
    "options": {
      "A": "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất",
      "B": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng",
      "C": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau",
      "D": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"làm trơn histogram\" có đặc điểm/định nghĩa: \"Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 54,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Đối xứng nền?",
    "options": {
      "A": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "B": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau",
      "C": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh",
      "D": "Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"đối xứng nền\" có đặc điểm/định nghĩa: \"Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 55,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Hợp vùng?",
    "options": {
      "A": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh",
      "B": "Dựa trên thông tin của toàn ảnh, ví dụ histogram",
      "C": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất",
      "D": "Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"hợp vùng\" có đặc điểm/định nghĩa: \"Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 56,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Phân vùng theo kết cấu bề mặt?",
    "options": {
      "A": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau",
      "B": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất",
      "C": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng",
      "D": "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phân vùng theo kết cấu bề mặt\" có đặc điểm/định nghĩa: \"Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 57,
    "question": "Đặc điểm nào sau đây gắn đúng với Histogram hai đỉnh?",
    "options": {
      "A": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "B": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất",
      "C": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt",
      "D": "Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"histogram hai đỉnh\" có đặc điểm/định nghĩa: \"Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 58,
    "question": "Khi xét Phân vùng cục bộ, phát biểu nào là chính xác?",
    "options": {
      "A": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng",
      "B": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh",
      "C": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "D": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"phân vùng cục bộ\" có đặc điểm/định nghĩa: \"Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 59,
    "question": "Khi xét Phân vùng theo ngưỡng, phát biểu nào là chính xác?",
    "options": {
      "A": "Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám",
      "B": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt",
      "C": "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định",
      "D": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phân vùng theo ngưỡng\" có đặc điểm/định nghĩa: \"Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 60,
    "question": "Đặc điểm nào sau đây gắn đúng với Thuật toán đẳng điệu?",
    "options": {
      "A": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng",
      "B": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "C": "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định",
      "D": "Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"thuật toán đẳng điệu\" có đặc điểm/định nghĩa: \"Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 61,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Học có giám sát?",
    "options": {
      "A": "Giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách",
      "B": "Sử dụng thư viện mẫu chuẩn đã biết để học và so sánh đối tượng cần nhận dạng",
      "C": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận",
      "D": "Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"học có giám sát\" có đặc điểm/định nghĩa: \"Sử dụng thư viện mẫu chuẩn đã biết để học và so sánh đối tượng cần nhận dạng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 62,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Biểu diễn trong không gian đặc trưng?",
    "options": {
      "A": "Sử dụng hàm phân biệt tuyến tính tạo siêu phẳng giữa các lớp",
      "B": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận",
      "C": "Tạo lớp mới từ phần tử xa nhất khi khoảng cách vượt điều kiện ngưỡng",
      "D": "Mô tả mỗi đối tượng bằng một vector nhiều chiều, mỗi chiều là một đặc trưng"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"biểu diễn trong không gian đặc trưng\" có đặc điểm/định nghĩa: \"Mô tả mỗi đối tượng bằng một vector nhiều chiều, mỗi chiều là một đặc trưng\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 63,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với K-means?",
    "options": {
      "A": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu",
      "B": "Tự hình thành các lớp và đặc trưng lớp khi không có thư viện mẫu chuẩn",
      "C": "Phân đối tượng vào K cụm bằng cách lặp gán điểm tới tâm gần nhất và cập nhật tâm",
      "D": "Sử dụng hàm phân biệt tuyến tính tạo siêu phẳng giữa các lớp"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"k-means\" có đặc điểm/định nghĩa: \"Phân đối tượng vào K cụm bằng cách lặp gán điểm tới tâm gần nhất và cập nhật tâm\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 64,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với K láng giềng?",
    "options": {
      "A": "Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc",
      "B": "Gán lớp theo lớp chiếm đa số trong số K mẫu gần nhất của đối tượng cần nhận dạng",
      "C": "Giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách",
      "D": "Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"k láng giềng\" có đặc điểm/định nghĩa: \"Gán lớp theo lớp chiếm đa số trong số K mẫu gần nhất của đối tượng cần nhận dạng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 65,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Mạng Hopfield?",
    "options": {
      "A": "Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn",
      "B": "Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1",
      "C": "Sử dụng hàm phân biệt tuyến tính tạo siêu phẳng giữa các lớp",
      "D": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"mạng hopfield\" có đặc điểm/định nghĩa: \"Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 66,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Quét Zig-Zag?",
    "options": {
      "A": "Bao gồm các phương pháp mã hóa tương đối trực tiếp như RLE, Huffman và LZW",
      "B": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén",
      "C": "Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa",
      "D": "Biểu diễn các khối dữ liệu bằng các từ mã tương ứng"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"quét zig-zag\" có đặc điểm/định nghĩa: \"Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 67,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Kim tự tháp ảnh?",
    "options": {
      "A": "Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass",
      "B": "Khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa",
      "C": "Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện",
      "D": "JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"kim tự tháp ảnh\" có đặc điểm/định nghĩa: \"Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 68,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Nén có mất thông tin?",
    "options": {
      "A": "Được mở rộng động khi xuất hiện các chuỗi mới trong dữ liệu đầu vào",
      "B": "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh",
      "C": "Biểu diễn các khối dữ liệu bằng các từ mã tương ứng",
      "D": "Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"nén có mất thông tin\" có đặc điểm/định nghĩa: \"Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 69,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Nén sử dụng biến đổi?",
    "options": {
      "A": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống",
      "B": "Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số",
      "C": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết",
      "D": "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"nén sử dụng biến đổi\" có đặc điểm/định nghĩa: \"Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 70,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Cây Huffman?",
    "options": {
      "A": "Được xây dựng bằng cách lặp ghép hai nút có xác suất nhỏ nhất",
      "B": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian",
      "C": "Được mở rộng động khi xuất hiện các chuỗi mới trong dữ liệu đầu vào",
      "D": "Mã đặc biệt đánh dấu kết thúc thông tin"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"cây huffman\" có đặc điểm/định nghĩa: \"Được xây dựng bằng cách lặp ghép hai nút có xác suất nhỏ nhất\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 71,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về LZW?",
    "options": {
      "A": "Mã đặc biệt đánh dấu kết thúc thông tin",
      "B": "Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa",
      "C": "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh",
      "D": "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lzw\" có đặc điểm/định nghĩa: \"Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 72,
    "question": "Theo nội dung bài giảng, phát biểu nào mô tả đúng nhất về Độ dư thừa dữ liệu?",
    "options": {
      "A": "Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0",
      "B": "Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén",
      "C": "Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn",
      "D": "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"độ dư thừa dữ liệu\" có đặc điểm/định nghĩa: \"Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 73,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Nén thế hệ thứ hai?",
    "options": {
      "A": "Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số",
      "B": "Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0",
      "C": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết",
      "D": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"nén thế hệ thứ hai\" có đặc điểm/định nghĩa: \"Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 74,
    "question": "Trong xử lý ảnh số, nhận định nào phù hợp nhất với Huffman thích nghi?",
    "options": {
      "A": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén",
      "B": "Bao gồm các phương pháp mã hóa tương đối trực tiếp như RLE, Huffman và LZW",
      "C": "Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý",
      "D": "Mã đặc biệt đánh dấu kết thúc thông tin"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"huffman thích nghi\" có đặc điểm/định nghĩa: \"Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 75,
    "question": "Đặc điểm nào sau đây gắn đúng với Giới hạn từ điển LZW?",
    "options": {
      "A": "Từ điển trong bài giảng có tối đa 4096 phần tử nên từ mã lớn nhất dài 12 bit",
      "B": "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần",
      "C": "Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện",
      "D": "Biểu diễn các khối dữ liệu bằng các từ mã tương ứng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"giới hạn từ điển lzw\" có đặc điểm/định nghĩa: \"Từ điển trong bài giảng có tối đa 4096 phần tử nên từ mã lớn nhất dài 12 bit\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 76,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Mức xám",
      "B": "Pixel",
      "C": "Hệ thống nhận dạng tự động",
      "D": "Nhiễu ngẫu nhiên"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nhiễu ngẫu nhiên có định nghĩa: \"loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 77,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Nén không bảo toàn thông tin",
      "B": "Tăng số mức xám",
      "C": "Nén có bảo toàn thông tin",
      "D": "Hệ thống nhận dạng tự động"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tăng số mức xám có định nghĩa: \"nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 78,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Pixel",
      "B": "Nén không bảo toàn thông tin",
      "C": "Tăng số mức xám",
      "D": "Phân loại không có mẫu"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân loại không có mẫu có định nghĩa: \"các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 79,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Giảm số mức xám",
      "B": "Pixel",
      "C": "Hệ thống nhận dạng tự động",
      "D": "Nhiễu hệ thống"
    },
    "answer": "C",
    "explanation": "Khái niệm: Hệ thống nhận dạng tự động có định nghĩa: \"gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 80,
    "question": "Khi gặp tình huống có đặc điểm: Biểu diễn cường độ sáng của điểm ảnh, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Mức xám",
      "B": "Tăng số mức xám",
      "C": "Pixel",
      "D": "Phân loại không có mẫu"
    },
    "answer": "A",
    "explanation": "Khái niệm: Mức xám có định nghĩa: \"biểu diễn cường độ sáng của điểm ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 81,
    "question": "Khi gặp tình huống có đặc điểm: Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Pixel",
      "B": "Mức xám",
      "C": "Nén có bảo toàn thông tin",
      "D": "Nhiễu hệ thống"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nhiễu hệ thống có định nghĩa: \"loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 82,
    "question": "Một hệ thống được thiết kế để Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Hệ thống nhận dạng tự động",
      "B": "Nhiễu hệ thống",
      "C": "Phân loại có mẫu",
      "D": "Phân loại không có mẫu"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nhiễu hệ thống có định nghĩa: \"loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 83,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Nén có bảo toàn thông tin",
      "B": "Đặc điểm biên",
      "C": "Nén ảnh",
      "D": "Giảm số mức xám"
    },
    "answer": "D",
    "explanation": "Khái niệm: Giảm số mức xám có định nghĩa: \"nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 84,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Ảnh chỉ có hai mức biểu diễn. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "PCX",
      "B": "RAW",
      "C": "Ảnh nhị phân",
      "D": "CMYK"
    },
    "answer": "C",
    "explanation": "Khái niệm: Ảnh nhị phân có định nghĩa: \"ảnh chỉ có hai mức biểu diễn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 85,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Ảnh màu RGB",
      "B": "Mô hình Raster",
      "C": "TIFF",
      "D": "Mô hình Vector"
    },
    "answer": "A",
    "explanation": "Khái niệm: Ảnh màu RGB có định nghĩa: \"biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 86,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Mô hình màu liên hệ với RGB theo nguyên tắc bù màu. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Three-CCD",
      "B": "Nội suy màu Bayer",
      "C": "Lấy mẫu",
      "D": "Mô hình CMY"
    },
    "answer": "D",
    "explanation": "Khái niệm: Mô hình CMY có định nghĩa: \"mô hình màu liên hệ với rgb theo nguyên tắc bù màu\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 87,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Định lý lấy mẫu",
      "B": "Mô hình HSL",
      "C": "Mô hình Raster",
      "D": "Thiết bị thu nhận ảnh Vector"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mô hình HSL có định nghĩa: \"biểu diễn màu theo sắc độ, độ bão hòa và độ sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 88,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Độ phân giải ảnh",
      "B": "Thiết bị thu nhận ảnh Vector",
      "C": "Thiết bị thu nhận ảnh Raster",
      "D": "Ảnh mức xám"
    },
    "answer": "A",
    "explanation": "Khái niệm: Độ phân giải ảnh có định nghĩa: \"liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 89,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "PCX",
      "B": "Lấy mẫu",
      "C": "Phối màu trừ",
      "D": "TIFF"
    },
    "answer": "C",
    "explanation": "Khái niệm: Phối màu trừ có định nghĩa: \"tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 90,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Độ phân giải ảnh",
      "B": "RAW",
      "C": "Thiết bị thu nhận ảnh Vector",
      "D": "Mô hình Raster"
    },
    "answer": "B",
    "explanation": "Khái niệm: RAW có định nghĩa: \"dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 91,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Thiết bị thu nhận ảnh Vector",
      "B": "Phối màu trừ",
      "C": "Phối màu cộng",
      "D": "Nội suy màu Bayer"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nội suy màu Bayer có định nghĩa: \"ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 92,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "BMP",
      "B": "CMYK",
      "C": "Lấy mẫu",
      "D": "RAW"
    },
    "answer": "C",
    "explanation": "Khái niệm: Lấy mẫu có định nghĩa: \"biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 93,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Định lý lấy mẫu",
      "B": "Nội suy màu Bayer",
      "C": "Thiết bị thu nhận ảnh Raster",
      "D": "Lượng tử hóa"
    },
    "answer": "A",
    "explanation": "Khái niệm: Định lý lấy mẫu có định nghĩa: \"tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 94,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Ảnh chỉ có hai mức biểu diễn. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Thiết bị thu nhận ảnh Vector",
      "B": "RAW",
      "C": "BMP",
      "D": "Ảnh nhị phân"
    },
    "answer": "D",
    "explanation": "Khái niệm: Ảnh nhị phân có định nghĩa: \"ảnh chỉ có hai mức biểu diễn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 95,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Nội suy màu Bayer",
      "B": "Ảnh màu RGB",
      "C": "Thiết bị thu nhận ảnh Raster",
      "D": "Định lý lấy mẫu"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ảnh màu RGB có định nghĩa: \"biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 96,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "TIFF",
      "B": "Phối màu trừ",
      "C": "Lấy mẫu",
      "D": "Three-CCD"
    },
    "answer": "D",
    "explanation": "Khái niệm: Three-CCD có định nghĩa: \"dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 97,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "TIFF",
      "B": "CMYK",
      "C": "Mô hình HSL",
      "D": "Three-CCD"
    },
    "answer": "C",
    "explanation": "Khái niệm: Mô hình HSL có định nghĩa: \"biểu diễn màu theo sắc độ, độ bão hòa và độ sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 98,
    "question": "Mô tả hoạt động sau thuộc về khái niệm nào: Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB?",
    "options": {
      "A": "Phối màu cộng",
      "B": "Nội suy màu Bayer",
      "C": "Thiết bị thu nhận ảnh Raster",
      "D": "Mô hình HSL"
    },
    "answer": "A",
    "explanation": "Khái niệm: Phối màu cộng có định nghĩa: \"tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình rgb\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 99,
    "question": "Một hệ thống được thiết kế để Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "CMYK",
      "B": "RAW",
      "C": "Độ phân giải ảnh",
      "D": "Phối màu trừ"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phối màu trừ có định nghĩa: \"tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 100,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Độ phân giải ảnh",
      "B": "PCX",
      "C": "Phối màu trừ",
      "D": "Lọc Bayer"
    },
    "answer": "B",
    "explanation": "Khái niệm: PCX có định nghĩa: \"định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 101,
    "question": "Một hệ thống được thiết kế để Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Nội suy màu Bayer",
      "B": "Thiết bị thu nhận ảnh Vector",
      "C": "Lấy mẫu",
      "D": "Thiết bị thu nhận ảnh Raster"
    },
    "answer": "A",
    "explanation": "Khái niệm: Nội suy màu Bayer có định nghĩa: \"ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 102,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Mô hình Vector",
      "B": "Định lý lấy mẫu",
      "C": "Thiết bị thu nhận ảnh Vector",
      "D": "RAW"
    },
    "answer": "C",
    "explanation": "Khái niệm: Thiết bị thu nhận ảnh Vector có định nghĩa: \"sensor hoặc bàn số hóa có thể tạo dữ liệu vector\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 103,
    "question": "Một hệ thống được thiết kế để Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Nội suy màu Bayer",
      "B": "Mô hình Raster",
      "C": "Độ phân giải ảnh",
      "D": "Thiết bị thu nhận ảnh Raster"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mô hình Raster có định nghĩa: \"biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 104,
    "question": "Khi gặp tình huống có đặc điểm: Ảnh chỉ có hai mức biểu diễn, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Lấy mẫu",
      "B": "Three-CCD",
      "C": "Mô hình Vector",
      "D": "Ảnh nhị phân"
    },
    "answer": "D",
    "explanation": "Khái niệm: Ảnh nhị phân có định nghĩa: \"ảnh chỉ có hai mức biểu diễn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 105,
    "question": "Khi gặp tình huống có đặc điểm: Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Lấy mẫu",
      "B": "RAW",
      "C": "Lọc Bayer",
      "D": "PCX"
    },
    "answer": "C",
    "explanation": "Khái niệm: Lọc Bayer có định nghĩa: \"dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 106,
    "question": "Khi gặp tình huống có đặc điểm: Mô hình màu liên hệ với RGB theo nguyên tắc bù màu, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Mô hình CMY",
      "B": "Định lý lấy mẫu",
      "C": "BMP",
      "D": "Thiết bị thu nhận ảnh Raster"
    },
    "answer": "A",
    "explanation": "Khái niệm: Mô hình CMY có định nghĩa: \"mô hình màu liên hệ với rgb theo nguyên tắc bù màu\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 107,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Mặt phẳng bit cao",
      "B": "Lọc giả đảo",
      "C": "Tách ngưỡng",
      "D": "Lọc trung bình"
    },
    "answer": "D",
    "explanation": "Khái niệm: Lọc trung bình có định nghĩa: \"thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 108,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Dãn độ tương phản",
      "B": "Nhiễu muối tiêu",
      "C": "Tìm ngưỡng tự động",
      "D": "Mặt phẳng bit cao"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nhiễu muối tiêu có định nghĩa: \"nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 109,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Trích chọn bit",
      "B": "Cân bằng histogram",
      "C": "Tách ngưỡng",
      "D": "Dãn độ tương phản"
    },
    "answer": "A",
    "explanation": "Khái niệm: Trích chọn bit có định nghĩa: \"tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 110,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Tách ngưỡng",
      "B": "Lọc giả đảo",
      "C": "Mặt phẳng bit cao",
      "D": "Khôi phục ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: Mặt phẳng bit cao có định nghĩa: \"thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 111,
    "question": "Một hệ thống được thiết kế để Cộng một hằng số dương vào mức xám làm ảnh sáng hơn. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Nhiễu muối tiêu",
      "B": "Tăng độ sáng",
      "C": "Phép nhân chập",
      "D": "Tìm ngưỡng tự động"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 112,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Cộng một hằng số dương vào mức xám làm ảnh sáng hơn. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Lọc Wiener",
      "B": "Lọc đảo",
      "C": "Trích chọn bit",
      "D": "Tăng độ sáng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 113,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Phân bố lại mức xám để cải thiện độ tương phản của ảnh. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Ảnh âm bản",
      "B": "Nhiễu Gaussian",
      "C": "Cân bằng histogram",
      "D": "Phép nhân chập"
    },
    "answer": "C",
    "explanation": "Khái niệm: Cân bằng histogram có định nghĩa: \"phân bố lại mức xám để cải thiện độ tương phản của ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 114,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Ảnh âm bản",
      "B": "Tìm ngưỡng tự động",
      "C": "Lọc đảo",
      "D": "Phép nhân chập"
    },
    "answer": "A",
    "explanation": "Khái niệm: Ảnh âm bản có định nghĩa: \"biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 115,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Tách ngưỡng",
      "B": "Lọc giả đảo",
      "C": "Tìm ngưỡng tự động",
      "D": "Phép nhân chập"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phép nhân chập có định nghĩa: \"kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 116,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Dãn độ tương phản",
      "B": "Lọc trung bình",
      "C": "Cân bằng histogram",
      "D": "Mô hình suy giảm ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Lọc trung bình có định nghĩa: \"thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 117,
    "question": "Một hệ thống được thiết kế để Nhiễu có biên độ tuân theo phân bố Gaussian. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Nhiễu Gaussian",
      "B": "Tìm ngưỡng tự động",
      "C": "Tách ngưỡng",
      "D": "Lọc trung bình theo k giá trị gần nhất"
    },
    "answer": "A",
    "explanation": "Khái niệm: Nhiễu Gaussian có định nghĩa: \"nhiễu có biên độ tuân theo phân bố gaussian\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 118,
    "question": "Một hệ thống được thiết kế để Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Giảm độ sáng",
      "B": "Lọc giả đảo",
      "C": "Trích chọn bit",
      "D": "Tăng độ sáng"
    },
    "answer": "C",
    "explanation": "Khái niệm: Trích chọn bit có định nghĩa: \"tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 119,
    "question": "Khi gặp tình huống có đặc điểm: Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Lọc giả đảo",
      "B": "Cân bằng histogram",
      "C": "Nhiễu muối tiêu",
      "D": "Histogram"
    },
    "answer": "A",
    "explanation": "Khái niệm: Lọc giả đảo có định nghĩa: \"hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 120,
    "question": "Mô tả hoạt động sau thuộc về khái niệm nào: Cộng một hằng số dương vào mức xám làm ảnh sáng hơn?",
    "options": {
      "A": "Histogram",
      "B": "Ảnh âm bản",
      "C": "Dãn độ tương phản",
      "D": "Tăng độ sáng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 121,
    "question": "Khi gặp tình huống có đặc điểm: Cộng một hằng số dương vào mức xám làm ảnh sáng hơn, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Nhiễu Gaussian",
      "B": "Tăng độ sáng",
      "C": "Lọc trung bình theo k giá trị gần nhất",
      "D": "Mô hình suy giảm ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 122,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Biểu diễn số điểm ảnh tương ứng với từng mức xám. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Histogram",
      "B": "Lọc đảo",
      "C": "Tách ngưỡng",
      "D": "Bó cụm mức xám"
    },
    "answer": "A",
    "explanation": "Khái niệm: Histogram có định nghĩa: \"biểu diễn số điểm ảnh tương ứng với từng mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 123,
    "question": "Khi gặp tình huống có đặc điểm: Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Histogram",
      "B": "Tách ngưỡng",
      "C": "Dãn độ tương phản",
      "D": "Giảm độ sáng"
    },
    "answer": "C",
    "explanation": "Khái niệm: Dãn độ tương phản có định nghĩa: \"mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 124,
    "question": "Khi gặp tình huống có đặc điểm: Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Mô hình suy giảm ảnh",
      "B": "Phép nhân chập",
      "C": "Tìm ngưỡng tự động",
      "D": "Lọc trung bình theo k giá trị gần nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phép nhân chập có định nghĩa: \"kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 125,
    "question": "Một hệ thống được thiết kế để Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Mặt phẳng bit cao",
      "B": "Histogram",
      "C": "Tăng độ sáng",
      "D": "Lọc trung bình"
    },
    "answer": "D",
    "explanation": "Khái niệm: Lọc trung bình có định nghĩa: \"thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 126,
    "question": "Khi gặp tình huống có đặc điểm: Nhiễu có biên độ tuân theo phân bố Gaussian, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Ảnh âm bản",
      "B": "Tăng độ sáng",
      "C": "Nhiễu Gaussian",
      "D": "Giảm độ sáng"
    },
    "answer": "C",
    "explanation": "Khái niệm: Nhiễu Gaussian có định nghĩa: \"nhiễu có biên độ tuân theo phân bố gaussian\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 127,
    "question": "Khi gặp tình huống có đặc điểm: Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Trích chọn bit",
      "B": "Dãn độ tương phản",
      "C": "Lọc giả đảo",
      "D": "Cân bằng histogram"
    },
    "answer": "A",
    "explanation": "Khái niệm: Trích chọn bit có định nghĩa: \"tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 128,
    "question": "Một hệ thống có biểu hiện: Cộng một hằng số dương vào mức xám làm ảnh sáng hơn. Nhận định nào xác định đúng kỹ thuật liên quan?",
    "options": {
      "A": "Histogram",
      "B": "Dãn độ tương phản",
      "C": "Ảnh âm bản",
      "D": "Tăng độ sáng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 129,
    "question": "Để đáp ứng yêu cầu Cộng một hằng số dương vào mức xám làm ảnh sáng hơn, khái niệm hoặc kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Mô hình suy giảm ảnh",
      "B": "Tăng độ sáng",
      "C": "Lọc trung bình theo k giá trị gần nhất",
      "D": "Nhiễu Gaussian"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 130,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Phép mở",
      "B": "Phép co ảnh",
      "C": "Phép giãn ảnh",
      "D": "Sobel"
    },
    "answer": "A",
    "explanation": "Khái niệm: Phép mở có định nghĩa: \"thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 131,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Phép đóng",
      "B": "Phép co ảnh",
      "C": "Trích biên hình thái",
      "D": "Phép mở"
    },
    "answer": "C",
    "explanation": "Khái niệm: Trích biên hình thái có định nghĩa: \"có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 132,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Dò biên theo quy hoạch động",
      "B": "Ức chế cực đại không",
      "C": "Phát hiện biên trực tiếp",
      "D": "Phát hiện biên gián tiếp"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ức chế cực đại không có định nghĩa: \"làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong canny\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 133,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Phát hiện biên trực tiếp",
      "B": "Phép giãn ảnh",
      "C": "Láng giềng 4",
      "D": "Phần tử cấu trúc"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phần tử cấu trúc có định nghĩa: \"mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 134,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Đạo hàm bậc hai",
      "B": "Toán tử la bàn",
      "C": "Phát hiện biên trực tiếp",
      "D": "Canny"
    },
    "answer": "C",
    "explanation": "Khái niệm: Phát hiện biên trực tiếp có định nghĩa: \"phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 135,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Gradient",
      "B": "Canny",
      "C": "Ức chế cực đại không",
      "D": "Phép giãn ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: Gradient có định nghĩa: \"đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 136,
    "question": "Một hệ thống được thiết kế để Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Sobel",
      "B": "Canny",
      "C": "Đạo hàm bậc nhất",
      "D": "Laplace"
    },
    "answer": "D",
    "explanation": "Khái niệm: Laplace có định nghĩa: \"toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 137,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Trích biên hình thái",
      "B": "Laplace",
      "C": "Phép giãn ảnh",
      "D": "Đạo hàm bậc hai"
    },
    "answer": "B",
    "explanation": "Khái niệm: Laplace có định nghĩa: \"toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 138,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Phép co ảnh",
      "B": "Phần tử cấu trúc",
      "C": "Trích biên hình thái",
      "D": "Gradient"
    },
    "answer": "A",
    "explanation": "Khái niệm: Phép co ảnh có định nghĩa: \"làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 139,
    "question": "Khi gặp tình huống có đặc điểm: Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Phép mở",
      "B": "Canny",
      "C": "Phép đóng",
      "D": "Laplace"
    },
    "answer": "C",
    "explanation": "Khái niệm: Phép đóng có định nghĩa: \"thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 140,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Phát hiện biên trực tiếp",
      "B": "Trích biên hình thái",
      "C": "Dò biên theo quy hoạch động",
      "D": "Phát hiện biên gián tiếp"
    },
    "answer": "B",
    "explanation": "Khái niệm: Trích biên hình thái có định nghĩa: \"có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 141,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Phép giãn ảnh",
      "B": "Phép mở",
      "C": "Dò biên theo quy hoạch động",
      "D": "Đạo hàm bậc hai"
    },
    "answer": "D",
    "explanation": "Khái niệm: Đạo hàm bậc hai có định nghĩa: \"làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 142,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Dò biên theo quy hoạch động",
      "B": "Ngưỡng kép Canny",
      "C": "Ức chế cực đại không",
      "D": "Phát hiện biên trực tiếp"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ngưỡng kép Canny có định nghĩa: \"dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 143,
    "question": "Một hệ thống được thiết kế để Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Biên ảnh",
      "B": "Canny",
      "C": "Phép giãn ảnh",
      "D": "Dò biên theo quy hoạch động"
    },
    "answer": "A",
    "explanation": "Khái niệm: Biên ảnh có định nghĩa: \"vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 144,
    "question": "Một hệ thống được thiết kế để Xác định biên từ ranh giới của các vùng sau khi phân vùng. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Láng giềng 4",
      "B": "Phần tử cấu trúc",
      "C": "Phát hiện biên gián tiếp",
      "D": "Phép giãn ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: Phát hiện biên gián tiếp có định nghĩa: \"xác định biên từ ranh giới của các vùng sau khi phân vùng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 145,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Phép đóng",
      "B": "Sobel",
      "C": "Phép mở",
      "D": "Phép giãn ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Sobel có định nghĩa: \"toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 146,
    "question": "Khi gặp tình huống có đặc điểm: Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Phép đóng",
      "B": "Canny",
      "C": "Sobel",
      "D": "Laplace"
    },
    "answer": "D",
    "explanation": "Khái niệm: Laplace có định nghĩa: \"toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 147,
    "question": "Một hệ thống được thiết kế để Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Phép mở",
      "B": "Phép đóng",
      "C": "Láng giềng 4",
      "D": "Gradient"
    },
    "answer": "C",
    "explanation": "Khái niệm: Láng giềng 4 có định nghĩa: \"gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 148,
    "question": "Khi gặp tình huống có đặc điểm: Làm mở rộng vùng đối tượng theo phần tử cấu trúc, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Phép giãn ảnh",
      "B": "Trích biên trong",
      "C": "Phép co ảnh",
      "D": "Trích biên hình thái"
    },
    "answer": "A",
    "explanation": "Khái niệm: Phép giãn ảnh có định nghĩa: \"làm mở rộng vùng đối tượng theo phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 149,
    "question": "Khi gặp tình huống có đặc điểm: Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Sobel",
      "B": "Toán tử la bàn",
      "C": "Phát hiện biên gián tiếp",
      "D": "Trích biên hình thái"
    },
    "answer": "D",
    "explanation": "Khái niệm: Trích biên hình thái có định nghĩa: \"có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 150,
    "question": "Khi gặp tình huống có đặc điểm: Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Ức chế cực đại không",
      "B": "Đạo hàm bậc hai",
      "C": "Phát hiện biên trực tiếp",
      "D": "Trích biên hình thái"
    },
    "answer": "B",
    "explanation": "Khái niệm: Đạo hàm bậc hai có định nghĩa: \"làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 151,
    "question": "Khi gặp tình huống có đặc điểm: Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Phần tử cấu trúc",
      "B": "Phát hiện biên gián tiếp",
      "C": "Phép co ảnh",
      "D": "Trích biên hình thái"
    },
    "answer": "A",
    "explanation": "Khái niệm: Phần tử cấu trúc có định nghĩa: \"mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 152,
    "question": "Một hệ thống được thiết kế để Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Phép co ảnh",
      "B": "Phép đóng",
      "C": "Phần tử cấu trúc",
      "D": "Phép mở"
    },
    "answer": "C",
    "explanation": "Khái niệm: Phần tử cấu trúc có định nghĩa: \"mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 153,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Histogram hai đỉnh",
      "B": "Kết cấu texture",
      "C": "Phân vùng theo miền đồng nhất",
      "D": "Thuật toán tam giác"
    },
    "answer": "B",
    "explanation": "Khái niệm: Kết cấu texture có định nghĩa: \"mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 154,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Dựa trên thông tin của toàn ảnh, ví dụ histogram. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Hợp vùng",
      "B": "Tách vùng",
      "C": "Thuật toán đẳng điệu",
      "D": "Phân vùng toàn thể"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân vùng toàn thể có định nghĩa: \"dựa trên thông tin của toàn ảnh, ví dụ histogram\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 155,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Tách vùng",
      "B": "Phát triển vùng",
      "C": "Thuật toán đẳng điệu",
      "D": "Hợp vùng"
    },
    "answer": "C",
    "explanation": "Khái niệm: Thuật toán đẳng điệu có định nghĩa: \"lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 156,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Thuật toán tam giác",
      "B": "Phân vùng theo miền đồng nhất",
      "C": "Kết cấu texture",
      "D": "Phân vùng theo kết cấu bề mặt"
    },
    "answer": "A",
    "explanation": "Khái niệm: Thuật toán tam giác có định nghĩa: \"xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 157,
    "question": "Mô tả hoạt động sau thuộc về khái niệm nào: Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất?",
    "options": {
      "A": "Phân vùng ảnh",
      "B": "Tách vùng",
      "C": "Phân vùng theo ngưỡng",
      "D": "Phát triển vùng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phát triển vùng có định nghĩa: \"bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 158,
    "question": "Khi gặp tình huống có đặc điểm: Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Phân vùng toàn thể",
      "B": "Phát triển vùng",
      "C": "Phân vùng theo kết cấu bề mặt",
      "D": "Phân vùng dựa theo đường biên"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phát triển vùng có định nghĩa: \"bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 159,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Tiêu chuẩn đồng nhất",
      "B": "Phân vùng toàn thể",
      "C": "Phân vùng theo miền đồng nhất",
      "D": "Phân vùng theo kết cấu bề mặt"
    },
    "answer": "A",
    "explanation": "Khái niệm: Tiêu chuẩn đồng nhất có định nghĩa: \"quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 160,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Hợp vùng",
      "B": "Tách vùng",
      "C": "Phân vùng theo miền đồng nhất",
      "D": "Phân vùng ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân vùng ảnh có định nghĩa: \"chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 161,
    "question": "Một hệ thống được thiết kế để Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Phân vùng theo kết cấu bề mặt",
      "B": "Phân vùng theo ngưỡng",
      "C": "Phân vùng dựa theo đường biên",
      "D": "Phân vùng theo miền đồng nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phân vùng theo ngưỡng có định nghĩa: \"phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 162,
    "question": "Một hệ thống được thiết kế để Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Đối xứng nền",
      "B": "Phân vùng toàn thể",
      "C": "Tách vùng",
      "D": "Phân vùng theo ngưỡng"
    },
    "answer": "A",
    "explanation": "Khái niệm: Đối xứng nền có định nghĩa: \"ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 163,
    "question": "Một hệ thống được thiết kế để Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Tiêu chuẩn đồng nhất",
      "B": "Hợp vùng",
      "C": "Phân vùng theo miền đồng nhất",
      "D": "Phát triển vùng"
    },
    "answer": "C",
    "explanation": "Khái niệm: Phân vùng theo miền đồng nhất có định nghĩa: \"hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 164,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Phát triển vùng",
      "B": "Hợp vùng",
      "C": "Làm trơn histogram",
      "D": "Thuật toán đẳng điệu"
    },
    "answer": "B",
    "explanation": "Khái niệm: Hợp vùng có định nghĩa: \"ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 165,
    "question": "Một kỹ sư cần thực hiện chức năng: Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất. Lựa chọn nào phù hợp?",
    "options": {
      "A": "Thuật toán tam giác",
      "B": "Đối xứng nền",
      "C": "Hợp vùng",
      "D": "Phát triển vùng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phát triển vùng có định nghĩa: \"bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 166,
    "question": "Khi gặp tình huống có đặc điểm: Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Kết cấu texture",
      "B": "Phân vùng ảnh",
      "C": "Histogram hai đỉnh",
      "D": "Đối xứng nền"
    },
    "answer": "C",
    "explanation": "Khái niệm: Histogram hai đỉnh có định nghĩa: \"thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 167,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Phân vùng ảnh",
      "B": "Tách vùng",
      "C": "Histogram hai đỉnh",
      "D": "Phân vùng theo kết cấu bề mặt"
    },
    "answer": "A",
    "explanation": "Khái niệm: Phân vùng ảnh có định nghĩa: \"chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 168,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "K-means",
      "B": "ISODATA",
      "C": "Nhận dạng cấu trúc",
      "D": "Nhận dạng ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nhận dạng ảnh có định nghĩa: \"quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 169,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Tự hình thành các lớp và đặc trưng lớp khi không có thư viện mẫu chuẩn. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Học cạnh tranh Kohonen",
      "B": "Học không giám sát",
      "C": "Tín hiệu lưỡng cực Hopfield",
      "D": "Thuật toán khoảng cách lớn nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Học không giám sát có định nghĩa: \"tự hình thành các lớp và đặc trưng lớp khi không có thư viện mẫu chuẩn\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 170,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Hàm hỗ trợ quyết định đối tượng thuộc lớp nào dựa trên giá trị các đặc trưng. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "ISODATA",
      "B": "Nhận dạng cấu trúc",
      "C": "K-means",
      "D": "Hàm phân lớp"
    },
    "answer": "D",
    "explanation": "Khái niệm: Hàm phân lớp có định nghĩa: \"hàm hỗ trợ quyết định đối tượng thuộc lớp nào dựa trên giá trị các đặc trưng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 171,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Tạo lớp mới từ phần tử xa nhất khi khoảng cách vượt điều kiện ngưỡng. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Hàm phân lớp",
      "B": "Mạng Hopfield",
      "C": "Thuật toán khoảng cách lớn nhất",
      "D": "Nhận dạng ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: Thuật toán khoảng cách lớn nhất có định nghĩa: \"tạo lớp mới từ phần tử xa nhất khi khoảng cách vượt điều kiện ngưỡng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 172,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Nhận dạng cấu trúc",
      "B": "Học cạnh tranh Kohonen",
      "C": "Thuật toán khoảng cách lớn nhất",
      "D": "Hàm phân lớp"
    },
    "answer": "A",
    "explanation": "Khái niệm: Nhận dạng cấu trúc có định nghĩa: \"biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 173,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Bản đồ tự tổ chức ánh xạ các vector gần nhau vào các nơron lân cận. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "ISODATA",
      "B": "Bản đồ tự tổ chức",
      "C": "K-means",
      "D": "Mạng Kohonen"
    },
    "answer": "D",
    "explanation": "Khái niệm: Mạng Kohonen có định nghĩa: \"bản đồ tự tổ chức ánh xạ các vector gần nhau vào các nơron lân cận\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 174,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Tín hiệu lưỡng cực Hopfield",
      "B": "Khoảng cách Euclidean",
      "C": "Thuật toán khoảng cách lớn nhất",
      "D": "Biểu diễn trong không gian đặc trưng"
    },
    "answer": "B",
    "explanation": "Khái niệm: Khoảng cách Euclidean có định nghĩa: \"thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 175,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Biểu diễn trong không gian đặc trưng",
      "B": "Học có giám sát",
      "C": "Bản đồ tự tổ chức",
      "D": "Tín hiệu lưỡng cực Hopfield"
    },
    "answer": "D",
    "explanation": "Khái niệm: Tín hiệu lưỡng cực Hopfield có định nghĩa: \"mạng hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 176,
    "question": "Một bước xử lý cần đạt đặc điểm sau: Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0. Kỹ thuật hoặc khái niệm nào phù hợp nhất?",
    "options": {
      "A": "Cây Huffman",
      "B": "Quét Zig-Zag",
      "C": "Lượng tử hóa JPEG",
      "D": "Nén Fractal"
    },
    "answer": "C",
    "explanation": "Khái niệm: Lượng tử hóa JPEG có định nghĩa: \"chia các hệ số dct cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 177,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Kim tự tháp ảnh",
      "B": "Mã hóa khối",
      "C": "Nén sử dụng biến đổi",
      "D": "RLE cho ảnh nhị phân"
    },
    "answer": "A",
    "explanation": "Khái niệm: Kim tự tháp ảnh có định nghĩa: \"biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 178,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Từ điển LZW",
      "B": "Nén Fractal",
      "C": "Nén không mất thông tin",
      "D": "Nén có mất thông tin"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nén có mất thông tin có định nghĩa: \"sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 179,
    "question": "Khi gặp tình huống có đặc điểm: Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Nén thế hệ thứ nhất",
      "B": "Mã Huffman",
      "C": "RLE cho ảnh nhị phân",
      "D": "Clear Code của LZW"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mã Huffman có định nghĩa: \"gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 180,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Mã Huffman",
      "B": "LZW",
      "C": "Nén thế hệ thứ hai",
      "D": "Quét Zig-Zag"
    },
    "answer": "A",
    "explanation": "Khái niệm: Mã Huffman có định nghĩa: \"gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 181,
    "question": "Khi gặp tình huống có đặc điểm: Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "Nén không gian",
      "B": "Từ điển LZW",
      "C": "Độ dư thừa dữ liệu",
      "D": "Mã Huffman"
    },
    "answer": "C",
    "explanation": "Khái niệm: Độ dư thừa dữ liệu có định nghĩa: \"phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 182,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Nén có mất thông tin",
      "B": "Độ dư thừa dữ liệu",
      "C": "Giới hạn từ điển LZW",
      "D": "Giảm mẫu màu trong JPEG"
    },
    "answer": "B",
    "explanation": "Khái niệm: Độ dư thừa dữ liệu có định nghĩa: \"phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 183,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "RLE cho ảnh nhị phân",
      "B": "Phân khối JPEG",
      "C": "Giảm mẫu màu trong JPEG",
      "D": "Nén không mất thông tin"
    },
    "answer": "A",
    "explanation": "Khái niệm: RLE cho ảnh nhị phân có định nghĩa: \"mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 184,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "DCT trong JPEG",
      "B": "EOI trong LZW",
      "C": "Huffman thích nghi",
      "D": "Tỷ lệ nén"
    },
    "answer": "C",
    "explanation": "Khái niệm: Huffman thích nghi có định nghĩa: \"điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 185,
    "question": "Một hệ thống được thiết kế để JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Nén thế hệ thứ hai",
      "B": "Phân khối JPEG",
      "C": "RLE cho ảnh nhị phân",
      "D": "Giảm mẫu màu trong JPEG"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phân khối JPEG có định nghĩa: \"jpeg thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 186,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "Mã hóa loạt dài RLE",
      "B": "Mã Huffman",
      "C": "Cây Huffman",
      "D": "Phân khối JPEG"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân khối JPEG có định nghĩa: \"jpeg thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 187,
    "question": "Trong một bài toán xử lý ảnh, yêu cầu là: Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa. Lựa chọn nào phù hợp nhất?",
    "options": {
      "A": "LZW",
      "B": "Mã Huffman",
      "C": "Quét Zig-Zag",
      "D": "Tỷ lệ nén"
    },
    "answer": "C",
    "explanation": "Khái niệm: Quét Zig-Zag có định nghĩa: \"sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 188,
    "question": "Một hệ thống được thiết kế để Khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa. Nội dung nào tương ứng đúng nhất?",
    "options": {
      "A": "Nén Fractal",
      "B": "Độ dư thừa dữ liệu",
      "C": "LZW",
      "D": "Mã hóa loạt dài RLE"
    },
    "answer": "A",
    "explanation": "Khái niệm: Nén Fractal có định nghĩa: \"khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 189,
    "question": "Khi gặp tình huống có đặc điểm: Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian, kỹ thuật nào nên được nhận diện?",
    "options": {
      "A": "LZW",
      "B": "Nén Fractal",
      "C": "Mã hóa loạt dài RLE",
      "D": "Nén không gian"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nén không gian có định nghĩa: \"khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 190,
    "question": "Mô tả hoạt động sau thuộc về khái niệm nào: Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện?",
    "options": {
      "A": "Lượng tử hóa JPEG",
      "B": "Mã Huffman",
      "C": "Nén có mất thông tin",
      "D": "Độ dư thừa dữ liệu"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mã Huffman có định nghĩa: \"gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 191,
    "question": "Hành vi nào phản ánh đúng tinh thần tham gia tích cực trong giờ giảng theo chuẩn đầu ra của học phần?",
    "options": {
      "A": "chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp",
      "B": "chỉ sử dụng một nguồn thông tin có sẵn, không đối chiếu với bài học và không xem xét phản hồi của giảng viên hoặc thành viên khác",
      "C": "bỏ qua phần tự học",
      "D": "chờ người khác hoàn thành phần lớn nhiệm vụ rồi mới tham gia và không chủ động tìm hiểu thêm tài liệu để củng cố nội dung chưa rõ"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tham gia tích cực trong giờ giảng\" có đặc điểm/định nghĩa: \"chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 192,
    "question": "Tình huống nào thể hiện phù hợp nhất yêu cầu tích lũy và cập nhật kiến thức trong học phần?",
    "options": {
      "A": "không cần nhận phản hồi",
      "B": "sao chép kết quả có sẵn",
      "C": "thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh",
      "D": "chỉ học trước lúc kiểm tra"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"tích lũy và cập nhật kiến thức\" có đặc điểm/định nghĩa: \"thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 193,
    "question": "Tình huống nào thể hiện phù hợp nhất yêu cầu thực hiện nhiệm vụ được giao trong học phần?",
    "options": {
      "A": "chỉ sử dụng một nguồn thông tin có sẵn, không đối chiếu với bài học và không xem xét phản hồi của giảng viên hoặc thành viên khác",
      "B": "hoàn thành phần việc đúng phạm vi và thời điểm đã thống nhất",
      "C": "chỉ thực hiện khi có yêu cầu trực tiếp, không chủ động kiểm tra, bổ sung hoặc cập nhật kiến thức liên quan sau đó",
      "D": "ưu tiên hoàn thành thật nhanh, không trao đổi tiến độ với nhóm và cũng không kiểm tra lại độ chính xác của kết quả"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"thực hiện nhiệm vụ được giao\" có đặc điểm/định nghĩa: \"hoàn thành phần việc đúng phạm vi và thời điểm đã thống nhất\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 194,
    "question": "Khi thực hiện học phần, lựa chọn nào phù hợp nhất với yêu cầu tự đánh giá việc học?",
    "options": {
      "A": "không trao đổi với nhóm",
      "B": "chỉ học trước lúc kiểm tra",
      "C": "bỏ qua các quy định đã thống nhất nếu chưa có kiểm tra trực tiếp và chỉ tham gia những hoạt động được tính điểm bắt buộc",
      "D": "kiểm tra lại mức độ hiểu bài và xác định nội dung cần bổ sung"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"tự đánh giá việc học\" có đặc điểm/định nghĩa: \"kiểm tra lại mức độ hiểu bài và xác định nội dung cần bổ sung\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 195,
    "question": "Khi thực hiện học phần, lựa chọn nào phù hợp nhất với yêu cầu tham gia tích cực trong giờ giảng?",
    "options": {
      "A": "chỉ làm khi được nhắc",
      "B": "bỏ qua phần tự học",
      "C": "chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp",
      "D": "không cần nhận phản hồi"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"tham gia tích cực trong giờ giảng\" có đặc điểm/định nghĩa: \"chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 196,
    "question": "Hành vi nào phản ánh đúng tinh thần tích lũy và cập nhật kiến thức theo chuẩn đầu ra của học phần?",
    "options": {
      "A": "thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh",
      "B": "chỉ sử dụng một nguồn thông tin có sẵn, không đối chiếu với bài học và không xem xét phản hồi của giảng viên hoặc thành viên khác",
      "C": "chờ người khác hoàn thành phần lớn nhiệm vụ rồi mới tham gia và không chủ động tìm hiểu thêm tài liệu để củng cố nội dung chưa rõ",
      "D": "bỏ qua phần tự học"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tích lũy và cập nhật kiến thức\" có đặc điểm/định nghĩa: \"thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 197,
    "question": "Hành vi nào phản ánh đúng tinh thần thực hiện nhiệm vụ được giao theo chuẩn đầu ra của học phần?",
    "options": {
      "A": "không cần nhận phản hồi",
      "B": "chỉ sử dụng một nguồn thông tin có sẵn, không đối chiếu với bài học và không xem xét phản hồi của giảng viên hoặc thành viên khác",
      "C": "sao chép kết quả có sẵn",
      "D": "hoàn thành phần việc đúng phạm vi và thời điểm đã thống nhất"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"thực hiện nhiệm vụ được giao\" có đặc điểm/định nghĩa: \"hoàn thành phần việc đúng phạm vi và thời điểm đã thống nhất\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 198,
    "question": "Tình huống nào thể hiện phù hợp nhất yêu cầu tự đánh giá việc học trong học phần?",
    "options": {
      "A": "ưu tiên hoàn thành thật nhanh, không trao đổi tiến độ với nhóm và cũng không kiểm tra lại độ chính xác của kết quả",
      "B": "kiểm tra lại mức độ hiểu bài và xác định nội dung cần bổ sung",
      "C": "chỉ sử dụng một nguồn thông tin có sẵn, không đối chiếu với bài học và không xem xét phản hồi của giảng viên hoặc thành viên khác",
      "D": "chỉ thực hiện khi có yêu cầu trực tiếp, không chủ động kiểm tra, bổ sung hoặc cập nhật kiến thức liên quan sau đó"
    },
    "answer": "B",
    "explanation": "Khái niệm: \"tự đánh giá việc học\" có đặc điểm/định nghĩa: \"kiểm tra lại mức độ hiểu bài và xác định nội dung cần bổ sung\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 199,
    "question": "Tình huống nào thể hiện phù hợp nhất yêu cầu tham gia tích cực trong giờ giảng trong học phần?",
    "options": {
      "A": "chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp",
      "B": "chỉ học trước lúc kiểm tra",
      "C": "chỉ thực hiện khi có yêu cầu trực tiếp, không chủ động kiểm tra, bổ sung hoặc cập nhật kiến thức liên quan sau đó",
      "D": "ưu tiên hoàn thành thật nhanh, không trao đổi tiến độ với nhóm và cũng không kiểm tra lại độ chính xác của kết quả"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tham gia tích cực trong giờ giảng\" có đặc điểm/định nghĩa: \"chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 200,
    "question": "Khi thực hiện học phần, lựa chọn nào phù hợp nhất với yêu cầu tích lũy và cập nhật kiến thức?",
    "options": {
      "A": "chỉ làm khi được nhắc",
      "B": "không cần nhận phản hồi",
      "C": "thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh",
      "D": "bỏ qua phần tự học"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"tích lũy và cập nhật kiến thức\" có đặc điểm/định nghĩa: \"thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh\".",
    "chapterId": 8,
    "chapterName": "Chuẩn đầu ra & Tác phong học tập"
  },
  {
    "id": 201,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Nhiễu hệ thống?",
    "options": {
      "A": "Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp",
      "B": "Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc",
      "C": "Biểu diễn cường độ sáng của điểm ảnh",
      "D": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nhiễu hệ thống\" có đặc điểm/định nghĩa: \"Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 202,
    "question": "Một bài toán có yêu cầu Khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Đặc điểm biên",
      "B": "Nắn chỉnh biến dạng",
      "C": "Nén có bảo toàn thông tin",
      "D": "Nén không bảo toàn thông tin"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nắn chỉnh biến dạng có định nghĩa: \"khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 203,
    "question": "Khi ôn tập về Nhiễu hệ thống, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc",
      "B": "Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc",
      "C": "Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp",
      "D": "Phần tử ảnh; mỗi pixel gắn với vị trí và thông tin cường độ sáng hoặc màu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"nhiễu hệ thống\" có đặc điểm/định nghĩa: \"Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 204,
    "question": "Một bài toán có yêu cầu Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Nhiễu hệ thống",
      "B": "Mức xám",
      "C": "Pixel",
      "D": "Nhiễu ngẫu nhiên"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nhiễu ngẫu nhiên có định nghĩa: \"loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 205,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Giảm số mức xám trong môn xử lý ảnh?",
    "options": {
      "A": "Nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn",
      "B": "Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc",
      "C": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh",
      "D": "Giảm không gian lưu trữ dữ liệu ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"giảm số mức xám\" có đặc điểm/định nghĩa: \"Nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 206,
    "question": "Một bài toán có yêu cầu Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Ảnh số",
      "B": "Tăng số mức xám",
      "C": "Nén có bảo toàn thông tin",
      "D": "Hệ thống nhận dạng tự động"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tăng số mức xám có định nghĩa: \"nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 207,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phân loại có mẫu trong môn xử lý ảnh?",
    "options": {
      "A": "Phần tử ảnh; mỗi pixel gắn với vị trí và thông tin cường độ sáng hoặc màu",
      "B": "Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định",
      "C": "Mẫu đầu vào được gán vào một lớp đã xác định dựa trên mẫu chuẩn",
      "D": "Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phân loại có mẫu\" có đặc điểm/định nghĩa: \"Mẫu đầu vào được gán vào một lớp đã xác định dựa trên mẫu chuẩn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 208,
    "question": "Một bài toán có yêu cầu Các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Pixel",
      "B": "Tăng số mức xám",
      "C": "Mức xám",
      "D": "Phân loại không có mẫu"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân loại không có mẫu có định nghĩa: \"các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 209,
    "question": "Khi ôn tập về Ảnh số, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa",
      "B": "Mẫu đầu vào được gán vào một lớp đã xác định dựa trên mẫu chuẩn",
      "C": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh",
      "D": "Khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"ảnh số\" có đặc điểm/định nghĩa: \"Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 210,
    "question": "Tình huống Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng tương ứng với khái niệm nào?",
    "options": {
      "A": "Phân loại không có mẫu",
      "B": "Đặc điểm biên",
      "C": "Ảnh số",
      "D": "Nắn chỉnh biến dạng"
    },
    "answer": "B",
    "explanation": "Khái niệm: Đặc điểm biên có định nghĩa: \"có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc laplace để hỗ trợ nhận dạng\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 211,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Hệ thống nhận dạng tự động trong môn xử lý ảnh?",
    "options": {
      "A": "Khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển",
      "B": "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc",
      "C": "Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định",
      "D": "Các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"hệ thống nhận dạng tự động\" có đặc điểm/định nghĩa: \"Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 212,
    "question": "Nếu hệ thống phải Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Nén ảnh",
      "B": "Mức xám",
      "C": "Ảnh số",
      "D": "Đặc điểm biên"
    },
    "answer": "D",
    "explanation": "Khái niệm: Đặc điểm biên có định nghĩa: \"có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc laplace để hỗ trợ nhận dạng\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 213,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Nén có bảo toàn thông tin trong môn xử lý ảnh?",
    "options": {
      "A": "Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc",
      "B": "Nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn",
      "C": "Giảm không gian lưu trữ dữ liệu ảnh",
      "D": "Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nén có bảo toàn thông tin\" có đặc điểm/định nghĩa: \"Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 214,
    "question": "Tình huống Biểu diễn cường độ sáng của điểm ảnh tương ứng với khái niệm nào?",
    "options": {
      "A": "Nhiễu ngẫu nhiên",
      "B": "Mức xám",
      "C": "Pixel",
      "D": "Nhiễu hệ thống"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mức xám có định nghĩa: \"biểu diễn cường độ sáng của điểm ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 215,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Lấy mẫu trong môn xử lý ảnh?",
    "options": {
      "A": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "B": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "C": "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc",
      "D": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lấy mẫu\" có đặc điểm/định nghĩa: \"Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 216,
    "question": "Một bài toán có yêu cầu Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "RAW",
      "B": "Lọc Bayer",
      "C": "CMYK",
      "D": "Lượng tử hóa"
    },
    "answer": "D",
    "explanation": "Khái niệm: Lượng tử hóa có định nghĩa: \"biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 217,
    "question": "Khi ôn tập về Mô hình Raster, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn",
      "B": "Ảnh có nhiều mức cường độ sáng từ tối đến sáng",
      "C": "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc",
      "D": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"mô hình raster\" có đặc điểm/định nghĩa: \"Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 218,
    "question": "Nếu hệ thống phải Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Thiết bị thu nhận ảnh Raster",
      "B": "Mô hình Raster",
      "C": "Lọc Bayer",
      "D": "Độ phân giải ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mô hình Raster có định nghĩa: \"biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 219,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mô hình Vector trong môn xử lý ảnh?",
    "options": {
      "A": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "B": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "C": "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình",
      "D": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mô hình vector\" có đặc điểm/định nghĩa: \"Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 220,
    "question": "Một bài toán có yêu cầu Ảnh chỉ có hai mức biểu diễn. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "RAW",
      "B": "CMYK",
      "C": "PCX",
      "D": "Ảnh nhị phân"
    },
    "answer": "D",
    "explanation": "Khái niệm: Ảnh nhị phân có định nghĩa: \"ảnh chỉ có hai mức biểu diễn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 221,
    "question": "Khi ôn tập về Ảnh màu RGB, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "B": "Định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh",
      "C": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "D": "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"ảnh màu rgb\" có đặc điểm/định nghĩa: \"Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 222,
    "question": "Nếu hệ thống phải Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Nội suy màu Bayer",
      "B": "Ảnh màu RGB",
      "C": "Thiết bị thu nhận ảnh Raster",
      "D": "Lọc Bayer"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ảnh màu RGB có định nghĩa: \"biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 223,
    "question": "Khi ôn tập về Three-CCD, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ",
      "B": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "C": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "D": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"three-ccd\" có đặc điểm/định nghĩa: \"Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 224,
    "question": "Nếu hệ thống phải Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "TIFF",
      "B": "Lấy mẫu",
      "C": "BMP",
      "D": "Three-CCD"
    },
    "answer": "D",
    "explanation": "Khái niệm: Three-CCD có định nghĩa: \"dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 225,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mô hình CMY trong môn xử lý ảnh?",
    "options": {
      "A": "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu",
      "B": "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB",
      "C": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector",
      "D": "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"mô hình cmy\" có đặc điểm/định nghĩa: \"Mô hình màu liên hệ với RGB theo nguyên tắc bù màu\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 226,
    "question": "Một bài toán có yêu cầu Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Định lý lấy mẫu",
      "B": "Mô hình HSV",
      "C": "Nội suy màu Bayer",
      "D": "Lấy mẫu"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mô hình HSV có định nghĩa: \"biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 227,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mô hình HSL trong môn xử lý ảnh?",
    "options": {
      "A": "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn",
      "B": "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình",
      "C": "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng",
      "D": "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mô hình hsl\" có đặc điểm/định nghĩa: \"Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 228,
    "question": "Tình huống Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian tương ứng với khái niệm nào?",
    "options": {
      "A": "Lọc Bayer",
      "B": "BMP",
      "C": "Nửa cường độ",
      "D": "Độ phân giải ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: Độ phân giải ảnh có định nghĩa: \"liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 229,
    "question": "Phát biểu nào mô tả phù hợp nhất cho TIFF trong môn xử lý ảnh?",
    "options": {
      "A": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu",
      "B": "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng",
      "C": "Ảnh chỉ có hai mức biểu diễn",
      "D": "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tiff\" có đặc điểm/định nghĩa: \"Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 230,
    "question": "Nếu hệ thống phải Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Thiết bị thu nhận ảnh Raster",
      "B": "Độ phân giải ảnh",
      "C": "Ảnh mức xám",
      "D": "Thiết bị thu nhận ảnh Vector"
    },
    "answer": "B",
    "explanation": "Khái niệm: Độ phân giải ảnh có định nghĩa: \"liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 231,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phối màu cộng trong môn xử lý ảnh?",
    "options": {
      "A": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "B": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh",
      "C": "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB",
      "D": "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phối màu cộng\" có đặc điểm/định nghĩa: \"Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 232,
    "question": "Một bài toán có yêu cầu Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Lấy mẫu",
      "B": "TIFF",
      "C": "PCX",
      "D": "Phối màu trừ"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phối màu trừ có định nghĩa: \"tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 233,
    "question": "Phát biểu nào mô tả phù hợp nhất cho CMYK trong môn xử lý ảnh?",
    "options": {
      "A": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in",
      "B": "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng",
      "C": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh",
      "D": "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"cmyk\" có đặc điểm/định nghĩa: \"Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 234,
    "question": "Tình huống Kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in tương ứng với khái niệm nào?",
    "options": {
      "A": "Độ phân giải ảnh",
      "B": "Nửa cường độ",
      "C": "Mô hình Vector",
      "D": "TIFF"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nửa cường độ có định nghĩa: \"kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 235,
    "question": "Phát biểu nào mô tả phù hợp nhất cho RAW trong môn xử lý ảnh?",
    "options": {
      "A": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh",
      "B": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn",
      "C": "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ",
      "D": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"raw\" có đặc điểm/định nghĩa: \"Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 236,
    "question": "Nếu hệ thống phải Kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Lọc Bayer",
      "B": "BMP",
      "C": "TIFF",
      "D": "Nửa cường độ"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nửa cường độ có định nghĩa: \"kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 237,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Nội suy màu Bayer trong môn xử lý ảnh?",
    "options": {
      "A": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "B": "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB",
      "C": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh",
      "D": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nội suy màu bayer\" có đặc điểm/định nghĩa: \"Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 238,
    "question": "Để thực hiện nhiệm vụ Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc, phương án nào phù hợp nhất?",
    "options": {
      "A": "Mô hình Vector",
      "B": "Lấy mẫu",
      "C": "Lượng tử hóa",
      "D": "PCX"
    },
    "answer": "B",
    "explanation": "Khái niệm: Lấy mẫu có định nghĩa: \"biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 239,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Thiết bị thu nhận ảnh Vector trong môn xử lý ảnh?",
    "options": {
      "A": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh",
      "B": "Định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh",
      "C": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector",
      "D": "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"thiết bị thu nhận ảnh vector\" có đặc điểm/định nghĩa: \"Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 240,
    "question": "Tình huống Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc tương ứng với khái niệm nào?",
    "options": {
      "A": "PCX",
      "B": "TIFF",
      "C": "BMP",
      "D": "Lấy mẫu"
    },
    "answer": "D",
    "explanation": "Khái niệm: Lấy mẫu có định nghĩa: \"biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 241,
    "question": "Khi ôn tập về Lượng tử hóa, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "B": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in",
      "C": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "D": "Ảnh có nhiều mức cường độ sáng từ tối đến sáng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lượng tử hóa\" có đặc điểm/định nghĩa: \"Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 242,
    "question": "Một bài toán có yêu cầu Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Lượng tử hóa",
      "B": "Định lý lấy mẫu",
      "C": "Nội suy màu Bayer",
      "D": "Thiết bị thu nhận ảnh Raster"
    },
    "answer": "B",
    "explanation": "Khái niệm: Định lý lấy mẫu có định nghĩa: \"tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 243,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Mô hình Raster?",
    "options": {
      "A": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "B": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn",
      "C": "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn",
      "D": "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mô hình raster\" có đặc điểm/định nghĩa: \"Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 244,
    "question": "Nếu hệ thống phải Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "TIFF",
      "B": "Ảnh mức xám",
      "C": "PCX",
      "D": "Mô hình Vector"
    },
    "answer": "D",
    "explanation": "Khái niệm: Mô hình Vector có định nghĩa: \"biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 245,
    "question": "Ý nghĩa nào sau đây gần nhất với Ảnh màu RGB?",
    "options": {
      "A": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "B": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận",
      "C": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in",
      "D": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"ảnh màu rgb\" có đặc điểm/định nghĩa: \"Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 246,
    "question": "Một bài toán có yêu cầu Ảnh có nhiều mức cường độ sáng từ tối đến sáng. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Thiết bị thu nhận ảnh Vector",
      "B": "Ảnh mức xám",
      "C": "RAW",
      "D": "Độ phân giải ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ảnh mức xám có định nghĩa: \"ảnh có nhiều mức cường độ sáng từ tối đến sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 247,
    "question": "Trong các mô tả sau, mô tả nào đúng với Ảnh màu RGB?",
    "options": {
      "A": "Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian",
      "B": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "C": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng",
      "D": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"ảnh màu rgb\" có đặc điểm/định nghĩa: \"Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 248,
    "question": "Một bài toán có yêu cầu Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Lấy mẫu",
      "B": "RAW",
      "C": "PCX",
      "D": "Lọc Bayer"
    },
    "answer": "D",
    "explanation": "Khái niệm: Lọc Bayer có định nghĩa: \"dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 249,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Three-CCD?",
    "options": {
      "A": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy",
      "B": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in",
      "C": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "D": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"three-ccd\" có đặc điểm/định nghĩa: \"Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 250,
    "question": "Nếu hệ thống phải Mô hình màu liên hệ với RGB theo nguyên tắc bù màu, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Phối màu cộng",
      "B": "Mô hình CMY",
      "C": "Thiết bị thu nhận ảnh Vector",
      "D": "RAW"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mô hình CMY có định nghĩa: \"mô hình màu liên hệ với rgb theo nguyên tắc bù màu\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 251,
    "question": "Khi ôn tập về Mô hình HSV, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian",
      "B": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ",
      "C": "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng",
      "D": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mô hình hsv\" có đặc điểm/định nghĩa: \"Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 252,
    "question": "Nếu hệ thống phải Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "CMYK",
      "B": "Three-CCD",
      "C": "TIFF",
      "D": "Mô hình HSL"
    },
    "answer": "D",
    "explanation": "Khái niệm: Mô hình HSL có định nghĩa: \"biểu diễn màu theo sắc độ, độ bão hòa và độ sáng\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 253,
    "question": "Phát biểu nào mô tả phù hợp nhất cho BMP trong môn xử lý ảnh?",
    "options": {
      "A": "Định dạng ảnh bitmap lưu dữ liệu ảnh theo cấu trúc điểm ảnh",
      "B": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector",
      "C": "Ảnh chỉ có hai mức biểu diễn",
      "D": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"bmp\" có đặc điểm/định nghĩa: \"Định dạng ảnh bitmap lưu dữ liệu ảnh theo cấu trúc điểm ảnh\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 254,
    "question": "Để thực hiện nhiệm vụ Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian, phương án nào phù hợp nhất?",
    "options": {
      "A": "Thiết bị thu nhận ảnh Vector",
      "B": "Độ phân giải ảnh",
      "C": "Nửa cường độ",
      "D": "Thiết bị thu nhận ảnh Raster"
    },
    "answer": "B",
    "explanation": "Khái niệm: Độ phân giải ảnh có định nghĩa: \"liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 255,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Histogram trong môn xử lý ảnh?",
    "options": {
      "A": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau",
      "B": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "C": "Biểu diễn số điểm ảnh tương ứng với từng mức xám",
      "D": "Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"histogram\" có đặc điểm/định nghĩa: \"Biểu diễn số điểm ảnh tương ứng với từng mức xám\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 256,
    "question": "Một bài toán có yêu cầu Phân bố lại mức xám để cải thiện độ tương phản của ảnh. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Giảm độ sáng",
      "B": "Lọc trung bình",
      "C": "Nhiễu Gaussian",
      "D": "Cân bằng histogram"
    },
    "answer": "D",
    "explanation": "Khái niệm: Cân bằng histogram có định nghĩa: \"phân bố lại mức xám để cải thiện độ tương phản của ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 257,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Tìm ngưỡng tự động trong môn xử lý ảnh?",
    "options": {
      "A": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công",
      "B": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn",
      "C": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh",
      "D": "Biểu diễn số điểm ảnh tương ứng với từng mức xám"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tìm ngưỡng tự động\" có đặc điểm/định nghĩa: \"Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 258,
    "question": "Một bài toán có yêu cầu Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Dãn độ tương phản",
      "B": "Ảnh âm bản",
      "C": "Bó cụm mức xám",
      "D": "Lọc đảo"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ảnh âm bản có định nghĩa: \"biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 259,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Dãn độ tương phản trong môn xử lý ảnh?",
    "options": {
      "A": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét",
      "B": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "C": "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối",
      "D": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"dãn độ tương phản\" có đặc điểm/định nghĩa: \"Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 260,
    "question": "Một bài toán có yêu cầu Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Tách ngưỡng",
      "B": "Lọc Wiener",
      "C": "Lọc trung vị",
      "D": "Phép nhân chập"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phép nhân chập có định nghĩa: \"kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 261,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Lọc trung vị trong môn xử lý ảnh?",
    "options": {
      "A": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung",
      "B": "Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu",
      "C": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "D": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lọc trung vị\" có đặc điểm/định nghĩa: \"Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 262,
    "question": "Một bài toán có yêu cầu Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Mặt phẳng bit cao",
      "B": "Lọc trung bình",
      "C": "Tìm ngưỡng tự động",
      "D": "Tách ngưỡng"
    },
    "answer": "B",
    "explanation": "Khái niệm: Lọc trung bình có định nghĩa: \"thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 263,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Lọc trung bình theo k giá trị gần nhất trong môn xử lý ảnh?",
    "options": {
      "A": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép",
      "B": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "C": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét",
      "D": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lọc trung bình theo k giá trị gần nhất\" có đặc điểm/định nghĩa: \"Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 264,
    "question": "Một bài toán có yêu cầu Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Lọc đảo",
      "B": "Histogram",
      "C": "Lọc Wiener",
      "D": "Khôi phục ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: Khôi phục ảnh có định nghĩa: \"ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 265,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Nhiễu muối tiêu trong môn xử lý ảnh?",
    "options": {
      "A": "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh",
      "B": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "C": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau",
      "D": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nhiễu muối tiêu\" có đặc điểm/định nghĩa: \"Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 266,
    "question": "Một bài toán có yêu cầu Nhiễu có biên độ tuân theo phân bố Gaussian. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Tìm ngưỡng tự động",
      "B": "Nhiễu Gaussian",
      "C": "Lọc trung bình theo k giá trị gần nhất",
      "D": "Lọc trung vị"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nhiễu Gaussian có định nghĩa: \"nhiễu có biên độ tuân theo phân bố gaussian\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 267,
    "question": "Khi ôn tập về Trích chọn bit, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép",
      "B": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "C": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh",
      "D": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"trích chọn bit\" có đặc điểm/định nghĩa: \"Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 268,
    "question": "Nếu hệ thống phải Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Tách ngưỡng",
      "B": "Histogram",
      "C": "Tăng độ sáng",
      "D": "Trích chọn bit"
    },
    "answer": "D",
    "explanation": "Khái niệm: Trích chọn bit có định nghĩa: \"tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 269,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mặt phẳng bit cao trong môn xử lý ảnh?",
    "options": {
      "A": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "B": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép",
      "C": "Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu",
      "D": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"mặt phẳng bit cao\" có đặc điểm/định nghĩa: \"Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 270,
    "question": "Nếu hệ thống phải Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Lọc trung bình theo k giá trị gần nhất",
      "B": "Lọc giả đảo",
      "C": "Dãn độ tương phản",
      "D": "Histogram"
    },
    "answer": "B",
    "explanation": "Khái niệm: Lọc giả đảo có định nghĩa: \"hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 271,
    "question": "Khi ôn tập về Lọc giả đảo, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "B": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh",
      "C": "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định",
      "D": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lọc giả đảo\" có đặc điểm/định nghĩa: \"Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 272,
    "question": "Nếu hệ thống phải Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Khôi phục ảnh",
      "B": "Histogram",
      "C": "Lọc trung bình",
      "D": "Mô hình suy giảm ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: Mô hình suy giảm ảnh có định nghĩa: \"biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 273,
    "question": "Khi ôn tập về Mô hình suy giảm ảnh, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu",
      "B": "Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu",
      "C": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau",
      "D": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"mô hình suy giảm ảnh\" có đặc điểm/định nghĩa: \"Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 274,
    "question": "Một bài toán có yêu cầu Cộng một hằng số dương vào mức xám làm ảnh sáng hơn. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Histogram",
      "B": "Tăng độ sáng",
      "C": "Dãn độ tương phản",
      "D": "Cân bằng histogram"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tăng độ sáng có định nghĩa: \"cộng một hằng số dương vào mức xám làm ảnh sáng hơn\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 275,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Giảm độ sáng trong môn xử lý ảnh?",
    "options": {
      "A": "Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám",
      "B": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "C": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "D": "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"giảm độ sáng\" có đặc điểm/định nghĩa: \"Cộng một hằng số âm vào mức xám làm ảnh tối hơn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 276,
    "question": "Để thực hiện nhiệm vụ Phân bố lại mức xám để cải thiện độ tương phản của ảnh, phương án nào phù hợp nhất?",
    "options": {
      "A": "Histogram",
      "B": "Lọc giả đảo",
      "C": "Bó cụm mức xám",
      "D": "Cân bằng histogram"
    },
    "answer": "D",
    "explanation": "Khái niệm: Cân bằng histogram có định nghĩa: \"phân bố lại mức xám để cải thiện độ tương phản của ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 277,
    "question": "Trong các mô tả sau, mô tả nào đúng với Cân bằng histogram?",
    "options": {
      "A": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh",
      "B": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "C": "Nhiễu có biên độ tuân theo phân bố Gaussian",
      "D": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"cân bằng histogram\" có đặc điểm/định nghĩa: \"Phân bố lại mức xám để cải thiện độ tương phản của ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 278,
    "question": "Tình huống Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công tương ứng với khái niệm nào?",
    "options": {
      "A": "Lọc trung bình theo k giá trị gần nhất",
      "B": "Tìm ngưỡng tự động",
      "C": "Lọc trung bình",
      "D": "Mô hình suy giảm ảnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tìm ngưỡng tự động có định nghĩa: \"xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 279,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Tìm ngưỡng tự động?",
    "options": {
      "A": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép",
      "B": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung",
      "C": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công",
      "D": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"tìm ngưỡng tự động\" có đặc điểm/định nghĩa: \"Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 280,
    "question": "Tình huống Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối tương ứng với khái niệm nào?",
    "options": {
      "A": "Tăng độ sáng",
      "B": "Lọc trung vị",
      "C": "Giảm độ sáng",
      "D": "Dãn độ tương phản"
    },
    "answer": "D",
    "explanation": "Khái niệm: Dãn độ tương phản có định nghĩa: \"mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 281,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Dãn độ tương phản?",
    "options": {
      "A": "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối",
      "B": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn",
      "C": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "D": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"dãn độ tương phản\" có đặc điểm/định nghĩa: \"Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 282,
    "question": "Nếu hệ thống phải Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Tách ngưỡng",
      "B": "Phép nhân chập",
      "C": "Tìm ngưỡng tự động",
      "D": "Lọc trung bình theo k giá trị gần nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phép nhân chập có định nghĩa: \"kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 283,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Lọc trung bình?",
    "options": {
      "A": "Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu",
      "B": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "C": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh",
      "D": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"lọc trung bình\" có đặc điểm/định nghĩa: \"Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 284,
    "question": "Tình huống Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh tương ứng với khái niệm nào?",
    "options": {
      "A": "Tăng độ sáng",
      "B": "Histogram",
      "C": "Giảm độ sáng",
      "D": "Lọc trung bình"
    },
    "answer": "D",
    "explanation": "Khái niệm: Lọc trung bình có định nghĩa: \"thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 285,
    "question": "Khi ôn tập về Lọc trung bình theo k giá trị gần nhất, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét",
      "B": "Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra",
      "C": "Biểu diễn số điểm ảnh tương ứng với từng mức xám",
      "D": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lọc trung bình theo k giá trị gần nhất\" có đặc điểm/định nghĩa: \"Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 286,
    "question": "Nếu hệ thống phải Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Histogram",
      "B": "Khôi phục ảnh",
      "C": "Mặt phẳng bit cao",
      "D": "Nhiễu muối tiêu"
    },
    "answer": "B",
    "explanation": "Khái niệm: Khôi phục ảnh có định nghĩa: \"ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 287,
    "question": "Khi ôn tập về Nhiễu muối tiêu, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh",
      "B": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "C": "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh",
      "D": "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"nhiễu muối tiêu\" có đặc điểm/định nghĩa: \"Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 288,
    "question": "Nếu hệ thống phải Nhiễu có biên độ tuân theo phân bố Gaussian, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Lọc giả đảo",
      "B": "Tách ngưỡng",
      "C": "Lọc đảo",
      "D": "Nhiễu Gaussian"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nhiễu Gaussian có định nghĩa: \"nhiễu có biên độ tuân theo phân bố gaussian\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 289,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Bó cụm mức xám trong môn xử lý ảnh?",
    "options": {
      "A": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "B": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét",
      "C": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "D": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"bó cụm mức xám\" có đặc điểm/định nghĩa: \"Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 290,
    "question": "Tình huống Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh tương ứng với khái niệm nào?",
    "options": {
      "A": "Tăng độ sáng",
      "B": "Trích chọn bit",
      "C": "Mô hình suy giảm ảnh",
      "D": "Lọc trung bình theo k giá trị gần nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Trích chọn bit có định nghĩa: \"tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 291,
    "question": "Khi ôn tập về Mặt phẳng bit cao, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu",
      "B": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm",
      "C": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám",
      "D": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mặt phẳng bit cao\" có đặc điểm/định nghĩa: \"Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 292,
    "question": "Khi quan sát thấy yêu cầu Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu, nội dung nào liên quan trực tiếp?",
    "options": {
      "A": "Bó cụm mức xám",
      "B": "Lọc đảo",
      "C": "Giảm độ sáng",
      "D": "Mô hình suy giảm ảnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: Mô hình suy giảm ảnh có định nghĩa: \"biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 293,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Lọc giả đảo?",
    "options": {
      "A": "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định",
      "B": "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh",
      "C": "Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu",
      "D": "Biểu diễn số điểm ảnh tương ứng với từng mức xám"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lọc giả đảo\" có đặc điểm/định nghĩa: \"Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 294,
    "question": "Một bài toán có yêu cầu Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Tăng độ sáng",
      "B": "Lọc Wiener",
      "C": "Lọc đảo",
      "D": "Phép nhân chập"
    },
    "answer": "B",
    "explanation": "Khái niệm: Lọc Wiener có định nghĩa: \"khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu\".",
    "chapterId": 3,
    "chapterName": "Chương 3: Tiền xử lý, Lọc & Nâng cao chất lượng ảnh"
  },
  {
    "id": 295,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Prewitt trong môn xử lý ảnh?",
    "options": {
      "A": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm",
      "B": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny",
      "C": "Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng",
      "D": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"prewitt\" có đặc điểm/định nghĩa: \"Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 296,
    "question": "Nếu hệ thống phải Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Láng giềng 4",
      "B": "Phép co ảnh",
      "C": "Láng giềng 8",
      "D": "Toán tử la bàn"
    },
    "answer": "D",
    "explanation": "Khái niệm: Toán tử la bàn có định nghĩa: \"dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 297,
    "question": "Khi ôn tập về Toán tử la bàn, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "B": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám",
      "C": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "D": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"toán tử la bàn\" có đặc điểm/định nghĩa: \"Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 298,
    "question": "Một bài toán có yêu cầu Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Láng giềng 4",
      "B": "Laplace",
      "C": "Toán tử la bàn",
      "D": "Canny"
    },
    "answer": "B",
    "explanation": "Khái niệm: Laplace có định nghĩa: \"toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 299,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Canny trong môn xử lý ảnh?",
    "options": {
      "A": "Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai",
      "B": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "C": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn",
      "D": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"canny\" có đặc điểm/định nghĩa: \"Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 300,
    "question": "Một bài toán có yêu cầu Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Biên ảnh",
      "B": "Canny",
      "C": "Prewitt",
      "D": "Láng giềng 4"
    },
    "answer": "D",
    "explanation": "Khái niệm: Láng giềng 4 có định nghĩa: \"gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 301,
    "question": "Khi ôn tập về Phép co ảnh, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "B": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc",
      "C": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny",
      "D": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phép co ảnh\" có đặc điểm/định nghĩa: \"Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 302,
    "question": "Nếu hệ thống phải Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Trích biên hình thái",
      "B": "Phép co ảnh",
      "C": "Gradient",
      "D": "Phần tử cấu trúc"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phép co ảnh có định nghĩa: \"làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 303,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phép giãn ảnh trong môn xử lý ảnh?",
    "options": {
      "A": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "B": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc",
      "C": "Làm mở rộng vùng đối tượng theo phần tử cấu trúc",
      "D": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phép giãn ảnh\" có đặc điểm/định nghĩa: \"Làm mở rộng vùng đối tượng theo phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 304,
    "question": "Nếu hệ thống phải Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Prewitt",
      "B": "Laplace",
      "C": "Canny",
      "D": "Phép đóng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phép đóng có định nghĩa: \"thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 305,
    "question": "Khi ôn tập về Trích biên hình thái, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "B": "Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ",
      "C": "Làm mở rộng vùng đối tượng theo phần tử cấu trúc",
      "D": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"trích biên hình thái\" có đặc điểm/định nghĩa: \"Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 306,
    "question": "Nếu hệ thống phải Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Dò biên theo quy hoạch động",
      "B": "Trích biên hình thái",
      "C": "Phép đóng",
      "D": "Phát hiện biên gián tiếp"
    },
    "answer": "B",
    "explanation": "Khái niệm: Trích biên hình thái có định nghĩa: \"có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 307,
    "question": "Khi ôn tập về Đạo hàm bậc hai, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny",
      "B": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "C": "Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn",
      "D": "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"đạo hàm bậc hai\" có đặc điểm/định nghĩa: \"Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 308,
    "question": "Nếu hệ thống phải Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Phép giãn ảnh",
      "B": "Phép đóng",
      "C": "Phép mở",
      "D": "Đạo hàm bậc hai"
    },
    "answer": "D",
    "explanation": "Khái niệm: Đạo hàm bậc hai có định nghĩa: \"làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 309,
    "question": "Khi ôn tập về Ngưỡng kép Canny, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên",
      "B": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm",
      "C": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "D": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"ngưỡng kép canny\" có đặc điểm/định nghĩa: \"Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 310,
    "question": "Nếu hệ thống phải Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Dò biên theo quy hoạch động",
      "B": "Ngưỡng kép Canny",
      "C": "Láng giềng 8",
      "D": "Ức chế cực đại không"
    },
    "answer": "B",
    "explanation": "Khái niệm: Ngưỡng kép Canny có định nghĩa: \"dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 311,
    "question": "Khi ôn tập về Phần tử cấu trúc, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai",
      "B": "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng",
      "C": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh",
      "D": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phần tử cấu trúc\" có đặc điểm/định nghĩa: \"Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 312,
    "question": "Nếu hệ thống phải Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Phép giãn ảnh",
      "B": "Phép mở",
      "C": "Láng giềng 4",
      "D": "Phần tử cấu trúc"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phần tử cấu trúc có định nghĩa: \"mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 313,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Trích biên trong trong môn xử lý ảnh?",
    "options": {
      "A": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "B": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "C": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm",
      "D": "Làm mở rộng vùng đối tượng theo phần tử cấu trúc"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"trích biên trong\" có đặc điểm/định nghĩa: \"Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 314,
    "question": "Một bài toán có yêu cầu Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Canny",
      "B": "Biên ảnh",
      "C": "Phát hiện biên gián tiếp",
      "D": "Đạo hàm bậc nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Biên ảnh có định nghĩa: \"vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 315,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phát hiện biên trực tiếp trong môn xử lý ảnh?",
    "options": {
      "A": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn",
      "B": "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng",
      "C": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm",
      "D": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phát hiện biên trực tiếp\" có đặc điểm/định nghĩa: \"Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 316,
    "question": "Một bài toán có yêu cầu Xác định biên từ ranh giới của các vùng sau khi phân vùng. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Trích biên hình thái",
      "B": "Canny",
      "C": "Trích biên trong",
      "D": "Phát hiện biên gián tiếp"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phát hiện biên gián tiếp có định nghĩa: \"xác định biên từ ranh giới của các vùng sau khi phân vùng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 317,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Prewitt?",
    "options": {
      "A": "Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng",
      "B": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "C": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "D": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"prewitt\" có đặc điểm/định nghĩa: \"Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 318,
    "question": "Tình huống Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng tương ứng với khái niệm nào?",
    "options": {
      "A": "Ngưỡng kép Canny",
      "B": "Prewitt",
      "C": "Phát hiện biên gián tiếp",
      "D": "Sobel"
    },
    "answer": "B",
    "explanation": "Khái niệm: Prewitt có định nghĩa: \"toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 319,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Sobel trong môn xử lý ảnh?",
    "options": {
      "A": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny",
      "B": "Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai",
      "C": "Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ",
      "D": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"sobel\" có đặc điểm/định nghĩa: \"Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 320,
    "question": "Tình huống Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau tương ứng với khái niệm nào?",
    "options": {
      "A": "Prewitt",
      "B": "Canny",
      "C": "Phép co ảnh",
      "D": "Toán tử la bàn"
    },
    "answer": "D",
    "explanation": "Khái niệm: Toán tử la bàn có định nghĩa: \"dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 321,
    "question": "Khi ôn tập về Laplace, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập",
      "B": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc",
      "C": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc",
      "D": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"laplace\" có đặc điểm/định nghĩa: \"Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 322,
    "question": "Tình huống Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét tương ứng với khái niệm nào?",
    "options": {
      "A": "Phát hiện biên trực tiếp",
      "B": "Láng giềng 4",
      "C": "Trích biên hình thái",
      "D": "Gradient"
    },
    "answer": "B",
    "explanation": "Khái niệm: Láng giềng 4 có định nghĩa: \"gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 323,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Láng giềng 4?",
    "options": {
      "A": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn",
      "B": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm",
      "C": "Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét",
      "D": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"láng giềng 4\" có đặc điểm/định nghĩa: \"Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 324,
    "question": "Một bài toán có yêu cầu Bao gồm cả bốn hướng chéo ngoài bốn láng giềng trực giao. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Sobel",
      "B": "Gradient",
      "C": "Laplace",
      "D": "Láng giềng 8"
    },
    "answer": "D",
    "explanation": "Khái niệm: Láng giềng 8 có định nghĩa: \"bao gồm cả bốn hướng chéo ngoài bốn láng giềng trực giao\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 325,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Phép co ảnh?",
    "options": {
      "A": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "B": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny",
      "C": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "D": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phép co ảnh\" có đặc điểm/định nghĩa: \"Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 326,
    "question": "Nếu hệ thống phải Làm mở rộng vùng đối tượng theo phần tử cấu trúc, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Dò biên theo quy hoạch động",
      "B": "Phép giãn ảnh",
      "C": "Gradient",
      "D": "Đạo hàm bậc hai"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phép giãn ảnh có định nghĩa: \"làm mở rộng vùng đối tượng theo phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 327,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phép mở trong môn xử lý ảnh?",
    "options": {
      "A": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "B": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co",
      "C": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc",
      "D": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phép mở\" có đặc điểm/định nghĩa: \"Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 328,
    "question": "Để thực hiện nhiệm vụ Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co, phương án nào phù hợp nhất?",
    "options": {
      "A": "Đạo hàm bậc nhất",
      "B": "Toán tử la bàn",
      "C": "Sobel",
      "D": "Trích biên hình thái"
    },
    "answer": "D",
    "explanation": "Khái niệm: Trích biên hình thái có định nghĩa: \"có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 329,
    "question": "Trong các mô tả sau, mô tả nào đúng với Trích biên hình thái?",
    "options": {
      "A": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co",
      "B": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh",
      "C": "Làm mở rộng vùng đối tượng theo phần tử cấu trúc",
      "D": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"trích biên hình thái\" có đặc điểm/định nghĩa: \"Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 330,
    "question": "Một bài toán có yêu cầu Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Ức chế cực đại không",
      "B": "Đạo hàm bậc nhất",
      "C": "Dò biên theo quy hoạch động",
      "D": "Prewitt"
    },
    "answer": "B",
    "explanation": "Khái niệm: Đạo hàm bậc nhất có định nghĩa: \"nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 331,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Đạo hàm bậc hai?",
    "options": {
      "A": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh",
      "B": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc",
      "C": "Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn",
      "D": "Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"đạo hàm bậc hai\" có đặc điểm/định nghĩa: \"Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 332,
    "question": "Một bài toán có yêu cầu Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Gradient",
      "B": "Ngưỡng kép Canny",
      "C": "Láng giềng 8",
      "D": "Ức chế cực đại không"
    },
    "answer": "D",
    "explanation": "Khái niệm: Ức chế cực đại không có định nghĩa: \"làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong canny\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 333,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Ngưỡng kép Canny?",
    "options": {
      "A": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên",
      "B": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau",
      "C": "Xác định biên từ ranh giới của các vùng sau khi phân vùng",
      "D": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"ngưỡng kép canny\" có đặc điểm/định nghĩa: \"Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 334,
    "question": "Để thực hiện nhiệm vụ Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh, phương án nào phù hợp nhất?",
    "options": {
      "A": "Phát hiện biên gián tiếp",
      "B": "Phần tử cấu trúc",
      "C": "Phép co ảnh",
      "D": "Trích biên hình thái"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phần tử cấu trúc có định nghĩa: \"mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh\".",
    "chapterId": 4,
    "chapterName": "Chương 4: Phát hiện biên & Hình thái học ảnh"
  },
  {
    "id": 335,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Thuật toán đẳng điệu trong môn xử lý ảnh?",
    "options": {
      "A": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất",
      "B": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau",
      "C": "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định",
      "D": "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"thuật toán đẳng điệu\" có đặc điểm/định nghĩa: \"Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 336,
    "question": "Nếu hệ thống phải Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Phân vùng ảnh",
      "B": "Kết cấu texture",
      "C": "Tách vùng",
      "D": "Thuật toán tam giác"
    },
    "answer": "D",
    "explanation": "Khái niệm: Thuật toán tam giác có định nghĩa: \"xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 337,
    "question": "Khi ôn tập về Thuật toán tam giác, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng",
      "B": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất",
      "C": "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn",
      "D": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"thuật toán tam giác\" có đặc điểm/định nghĩa: \"Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 338,
    "question": "Khi quan sát thấy yêu cầu Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất, nội dung nào liên quan trực tiếp?",
    "options": {
      "A": "Histogram hai đỉnh",
      "B": "Phát triển vùng",
      "C": "Đối xứng nền",
      "D": "Thuật toán tam giác"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phát triển vùng có định nghĩa: \"bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 339,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Tách vùng trong môn xử lý ảnh?",
    "options": {
      "A": "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định",
      "B": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng",
      "C": "Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn",
      "D": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"tách vùng\" có đặc điểm/định nghĩa: \"Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 340,
    "question": "Nếu hệ thống phải Sử dụng thông tin đường biên để xác định ranh giới các vùng, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Thuật toán tam giác",
      "B": "Phân vùng theo ngưỡng",
      "C": "Phân vùng cục bộ",
      "D": "Phân vùng dựa theo đường biên"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân vùng dựa theo đường biên có định nghĩa: \"sử dụng thông tin đường biên để xác định ranh giới các vùng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 341,
    "question": "Khi ôn tập về Phân vùng dựa theo đường biên, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "B": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất",
      "C": "Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn",
      "D": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phân vùng dựa theo đường biên\" có đặc điểm/định nghĩa: \"Sử dụng thông tin đường biên để xác định ranh giới các vùng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 342,
    "question": "Tình huống Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất tương ứng với khái niệm nào?",
    "options": {
      "A": "Phân vùng theo miền đồng nhất",
      "B": "Phát triển vùng",
      "C": "Tách vùng",
      "D": "Histogram hai đỉnh"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phát triển vùng có định nghĩa: \"bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 343,
    "question": "Nhận định nào dưới đây phù hợp với khái niệm Phát triển vùng?",
    "options": {
      "A": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng",
      "B": "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn",
      "C": "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất",
      "D": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phát triển vùng\" có đặc điểm/định nghĩa: \"Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 344,
    "question": "Một bài toán có yêu cầu Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Phân vùng toàn thể",
      "B": "Kết cấu texture",
      "C": "Phân vùng cục bộ",
      "D": "Tiêu chuẩn đồng nhất"
    },
    "answer": "D",
    "explanation": "Khái niệm: Tiêu chuẩn đồng nhất có định nghĩa: \"quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 345,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Histogram hai đỉnh trong môn xử lý ảnh?",
    "options": {
      "A": "Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng",
      "B": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng",
      "C": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất",
      "D": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"histogram hai đỉnh\" có đặc điểm/định nghĩa: \"Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 346,
    "question": "Một bài toán có yêu cầu Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Đối xứng nền",
      "B": "Kết cấu texture",
      "C": "Histogram hai đỉnh",
      "D": "Phân vùng theo miền đồng nhất"
    },
    "answer": "B",
    "explanation": "Khái niệm: Kết cấu texture có định nghĩa: \"mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 347,
    "question": "Khi ôn tập về Phân vùng cục bộ, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất",
      "B": "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn",
      "C": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh",
      "D": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phân vùng cục bộ\" có đặc điểm/định nghĩa: \"Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 348,
    "question": "Nếu hệ thống phải Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Hợp vùng",
      "B": "Tách vùng",
      "C": "Đối xứng nền",
      "D": "Phân vùng cục bộ"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân vùng cục bộ có định nghĩa: \"dựa chủ yếu trên thông tin trong lân cận của điểm ảnh\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 349,
    "question": "Khi ôn tập về Phân vùng theo ngưỡng, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám",
      "B": "Dựa trên thông tin của toàn ảnh, ví dụ histogram",
      "C": "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn",
      "D": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"phân vùng theo ngưỡng\" có đặc điểm/định nghĩa: \"Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám\".",
    "chapterId": 1,
    "chapterName": "Chương 1: Tổng quan & Khái niệm cơ bản"
  },
  {
    "id": 350,
    "question": "Nếu hệ thống phải Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Phân vùng theo kết cấu bề mặt",
      "B": "Phân vùng theo ngưỡng",
      "C": "Kết cấu texture",
      "D": "Phân vùng dựa theo đường biên"
    },
    "answer": "B",
    "explanation": "Khái niệm: Phân vùng theo ngưỡng có định nghĩa: \"phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 351,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Làm trơn histogram trong môn xử lý ảnh?",
    "options": {
      "A": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng",
      "B": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất",
      "C": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng",
      "D": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"làm trơn histogram\" có đặc điểm/định nghĩa: \"Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 352,
    "question": "Nếu hệ thống phải Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Tách vùng",
      "B": "Phát triển vùng",
      "C": "Hợp vùng",
      "D": "Thuật toán đẳng điệu"
    },
    "answer": "D",
    "explanation": "Khái niệm: Thuật toán đẳng điệu có định nghĩa: \"lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 353,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Đối xứng nền trong môn xử lý ảnh?",
    "options": {
      "A": "Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền",
      "B": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh",
      "C": "Sử dụng thông tin đường biên để xác định ranh giới các vùng",
      "D": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"đối xứng nền\" có đặc điểm/định nghĩa: \"Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 354,
    "question": "Tình huống Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng tương ứng với khái niệm nào?",
    "options": {
      "A": "Phân vùng theo kết cấu bề mặt",
      "B": "Thuật toán tam giác",
      "C": "Phân vùng dựa theo đường biên",
      "D": "Tách vùng"
    },
    "answer": "B",
    "explanation": "Khái niệm: Thuật toán tam giác có định nghĩa: \"xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 355,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phân vùng theo miền đồng nhất trong môn xử lý ảnh?",
    "options": {
      "A": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng",
      "B": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng",
      "C": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất",
      "D": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phân vùng theo miền đồng nhất\" có đặc điểm/định nghĩa: \"Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 356,
    "question": "Một bước xử lý có chức năng Sử dụng thông tin đường biên để xác định ranh giới các vùng. Đó là kỹ thuật nào?",
    "options": {
      "A": "Hợp vùng",
      "B": "Tách vùng",
      "C": "Làm trơn histogram",
      "D": "Phân vùng dựa theo đường biên"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân vùng dựa theo đường biên có định nghĩa: \"sử dụng thông tin đường biên để xác định ranh giới các vùng\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 357,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Hợp vùng trong môn xử lý ảnh?",
    "options": {
      "A": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất",
      "B": "Dựa trên thông tin của toàn ảnh, ví dụ histogram",
      "C": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh",
      "D": "Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"hợp vùng\" có đặc điểm/định nghĩa: \"Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 358,
    "question": "Một bước xử lý có chức năng Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn. Đó là kỹ thuật nào?",
    "options": {
      "A": "Tách vùng",
      "B": "Tiêu chuẩn đồng nhất",
      "C": "Phân vùng theo miền đồng nhất",
      "D": "Phân vùng theo kết cấu bề mặt"
    },
    "answer": "B",
    "explanation": "Khái niệm: Tiêu chuẩn đồng nhất có định nghĩa: \"quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 359,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Phân vùng theo kết cấu bề mặt trong môn xử lý ảnh?",
    "options": {
      "A": "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn",
      "B": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng",
      "C": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau",
      "D": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"phân vùng theo kết cấu bề mặt\" có đặc điểm/định nghĩa: \"Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 360,
    "question": "Để thực hiện nhiệm vụ Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất, phương án nào phù hợp nhất?",
    "options": {
      "A": "Đối xứng nền",
      "B": "Tách vùng",
      "C": "Hợp vùng",
      "D": "Phát triển vùng"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phát triển vùng có định nghĩa: \"bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất\".",
    "chapterId": 5,
    "chapterName": "Chương 5: Phân vùng ảnh (Segmentation)"
  },
  {
    "id": 361,
    "question": "Phát biểu nào mô tả phù hợp nhất cho K-means trong môn xử lý ảnh?",
    "options": {
      "A": "Phân đối tượng vào K cụm bằng cách lặp gán điểm tới tâm gần nhất và cập nhật tâm",
      "B": "Tạo lớp mới từ phần tử xa nhất khi khoảng cách vượt điều kiện ngưỡng",
      "C": "Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1",
      "D": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"k-means\" có đặc điểm/định nghĩa: \"Phân đối tượng vào K cụm bằng cách lặp gán điểm tới tâm gần nhất và cập nhật tâm\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 362,
    "question": "Tình huống Gán lớp theo lớp chiếm đa số trong số K mẫu gần nhất của đối tượng cần nhận dạng tương ứng với khái niệm nào?",
    "options": {
      "A": "Khoảng cách Euclidean",
      "B": "K láng giềng",
      "C": "ISODATA",
      "D": "Nhận dạng cấu trúc"
    },
    "answer": "B",
    "explanation": "Khái niệm: K láng giềng có định nghĩa: \"gán lớp theo lớp chiếm đa số trong số k mẫu gần nhất của đối tượng cần nhận dạng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 363,
    "question": "Phát biểu nào mô tả phù hợp nhất cho ISODATA trong môn xử lý ảnh?",
    "options": {
      "A": "Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng",
      "B": "Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc",
      "C": "Thuật toán phân cụm lặp có khả năng tách và gộp lớp theo các ngưỡng",
      "D": "Bảo toàn tương đối quan hệ lân cận khi ánh xạ các vector đầu vào lên lưới nơron"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"isodata\" có đặc điểm/định nghĩa: \"Thuật toán phân cụm lặp có khả năng tách và gộp lớp theo các ngưỡng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 364,
    "question": "Nếu hệ thống phải Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "K láng giềng",
      "B": "Hàm phân lớp",
      "C": "K-means",
      "D": "Nhận dạng cấu trúc"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nhận dạng cấu trúc có định nghĩa: \"biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 365,
    "question": "Khi ôn tập về Nhận dạng cấu trúc, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc",
      "B": "Mô tả mỗi đối tượng bằng một vector nhiều chiều, mỗi chiều là một đặc trưng",
      "C": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận",
      "D": "Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nhận dạng cấu trúc\" có đặc điểm/định nghĩa: \"Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 366,
    "question": "Một bài toán có yêu cầu Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Học không giám sát",
      "B": "Mạng Hopfield",
      "C": "KNN có trọng số",
      "D": "K-means"
    },
    "answer": "B",
    "explanation": "Khái niệm: Mạng Hopfield có định nghĩa: \"mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 367,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mạng Kohonen trong môn xử lý ảnh?",
    "options": {
      "A": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận",
      "B": "Bảo toàn tương đối quan hệ lân cận khi ánh xạ các vector đầu vào lên lưới nơron",
      "C": "Bản đồ tự tổ chức ánh xạ các vector gần nhau vào các nơron lân cận",
      "D": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mạng kohonen\" có đặc điểm/định nghĩa: \"Bản đồ tự tổ chức ánh xạ các vector gần nhau vào các nơron lân cận\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 368,
    "question": "Một bài toán có yêu cầu Là giá trị trung bình của các đối tượng đang được gán vào cụm tương ứng. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Mạng Hopfield",
      "B": "K-means",
      "C": "Hàm phân lớp",
      "D": "Tâm cụm K-means"
    },
    "answer": "D",
    "explanation": "Khái niệm: Tâm cụm K-means có định nghĩa: \"là giá trị trung bình của các đối tượng đang được gán vào cụm tương ứng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 369,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Khoảng cách Euclidean trong môn xử lý ảnh?",
    "options": {
      "A": "Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng",
      "B": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu",
      "C": "Hàm hỗ trợ quyết định đối tượng thuộc lớp nào dựa trên giá trị các đặc trưng",
      "D": "Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"khoảng cách euclidean\" có đặc điểm/định nghĩa: \"Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 370,
    "question": "Một bài toán có yêu cầu Giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "K-means",
      "B": "KNN có trọng số",
      "C": "Nhận dạng cấu trúc",
      "D": "Tín hiệu lưỡng cực Hopfield"
    },
    "answer": "B",
    "explanation": "Khái niệm: KNN có trọng số có định nghĩa: \"giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 371,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Tín hiệu lưỡng cực Hopfield trong môn xử lý ảnh?",
    "options": {
      "A": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận",
      "B": "Thuật toán phân cụm lặp có khả năng tách và gộp lớp theo các ngưỡng",
      "C": "Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1",
      "D": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"tín hiệu lưỡng cực hopfield\" có đặc điểm/định nghĩa: \"Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1\".",
    "chapterId": 2,
    "chapterName": "Chương 2: Thu nhận & Biểu diễn màu, Định dạng ảnh"
  },
  {
    "id": 372,
    "question": "Một bài toán có yêu cầu Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Học có giám sát",
      "B": "Nhận dạng ảnh",
      "C": "Học không giám sát",
      "D": "Học cạnh tranh Kohonen"
    },
    "answer": "D",
    "explanation": "Khái niệm: Học cạnh tranh Kohonen có định nghĩa: \"tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 373,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Bản đồ tự tổ chức trong môn xử lý ảnh?",
    "options": {
      "A": "Bảo toàn tương đối quan hệ lân cận khi ánh xạ các vector đầu vào lên lưới nơron",
      "B": "Giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách",
      "C": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu",
      "D": "Thuật toán phân cụm lặp có khả năng tách và gộp lớp theo các ngưỡng"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"bản đồ tự tổ chức\" có đặc điểm/định nghĩa: \"Bảo toàn tương đối quan hệ lân cận khi ánh xạ các vector đầu vào lên lưới nơron\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 374,
    "question": "Một bài toán có yêu cầu Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Học có giám sát",
      "B": "Nhận dạng ảnh",
      "C": "Nhận dạng cấu trúc",
      "D": "K-means"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nhận dạng ảnh có định nghĩa: \"quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 375,
    "question": "Khi ôn tập về Từ điển LZW, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần",
      "B": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian",
      "C": "Được mở rộng động khi xuất hiện các chuỗi mới trong dữ liệu đầu vào",
      "D": "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh"
    },
    "answer": "D",
    "explanation": "Khái niệm: \"lzw\" có đặc điểm/định nghĩa: \"Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 376,
    "question": "Tình huống Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén tương ứng với khái niệm nào?",
    "options": {
      "A": "DCT trong JPEG",
      "B": "Nén không gian",
      "C": "EOI trong LZW",
      "D": "Độ dư thừa dữ liệu"
    },
    "answer": "D",
    "explanation": "Khái niệm: Độ dư thừa dữ liệu có định nghĩa: \"phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 377,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Tỷ lệ nén trong môn xử lý ảnh?",
    "options": {
      "A": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén",
      "B": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian",
      "C": "JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin",
      "D": "Được xây dựng bằng cách lặp ghép hai nút có xác suất nhỏ nhất"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"tỷ lệ nén\" có đặc điểm/định nghĩa: \"Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 378,
    "question": "Nếu hệ thống phải Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "Giảm mẫu màu trong JPEG",
      "B": "Độ dư thừa dữ liệu",
      "C": "Nén có mất thông tin",
      "D": "Mã hóa khối"
    },
    "answer": "B",
    "explanation": "Khái niệm: Độ dư thừa dữ liệu có định nghĩa: \"phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 379,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mã hóa khối trong môn xử lý ảnh?",
    "options": {
      "A": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén",
      "B": "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu",
      "C": "Biểu diễn các khối dữ liệu bằng các từ mã tương ứng",
      "D": "Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mã hóa khối\" có đặc điểm/định nghĩa: \"Biểu diễn các khối dữ liệu bằng các từ mã tương ứng\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 380,
    "question": "Một bài toán có yêu cầu Bao gồm các phương pháp mã hóa tương đối trực tiếp như RLE, Huffman và LZW. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Mã hóa khối",
      "B": "Quét Zig-Zag",
      "C": "LZW",
      "D": "Nén thế hệ thứ nhất"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nén thế hệ thứ nhất có định nghĩa: \"bao gồm các phương pháp mã hóa tương đối trực tiếp như rle, huffman và lzw\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 381,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Nén thế hệ thứ hai trong môn xử lý ảnh?",
    "options": {
      "A": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống",
      "B": "Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass",
      "C": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết",
      "D": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nén thế hệ thứ hai\" có đặc điểm/định nghĩa: \"Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống\".",
    "chapterId": 6,
    "chapterName": "Chương 6: Nhận dạng ảnh & Phân lớp"
  },
  {
    "id": 382,
    "question": "Một bài toán có yêu cầu Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Nén không mất thông tin",
      "B": "RLE cho ảnh nhị phân",
      "C": "Giảm mẫu màu trong JPEG",
      "D": "Quét Zig-Zag"
    },
    "answer": "B",
    "explanation": "Khái niệm: RLE cho ảnh nhị phân có định nghĩa: \"mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 383,
    "question": "Phát biểu nào mô tả phù hợp nhất cho RLE theo Gray code trong môn xử lý ảnh?",
    "options": {
      "A": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống",
      "B": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết",
      "C": "Có thể tạo nhiều đoạn lặp hơn vì các giá trị gần nhau trong Gray code chỉ khác nhau một bit",
      "D": "Khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"rle theo gray code\" có đặc điểm/định nghĩa: \"Có thể tạo nhiều đoạn lặp hơn vì các giá trị gần nhau trong Gray code chỉ khác nhau một bit\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 384,
    "question": "Một bài toán có yêu cầu Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "DCT trong JPEG",
      "B": "Quét Zig-Zag",
      "C": "Từ điển LZW",
      "D": "Huffman thích nghi"
    },
    "answer": "D",
    "explanation": "Khái niệm: Huffman thích nghi có định nghĩa: \"điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 385,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Clear Code của LZW trong môn xử lý ảnh?",
    "options": {
      "A": "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần",
      "B": "Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý",
      "C": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian",
      "D": "Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"clear code của lzw\" có đặc điểm/định nghĩa: \"Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 386,
    "question": "Một bài toán có yêu cầu Mã đặc biệt đánh dấu kết thúc thông tin. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Nén Fractal",
      "B": "EOI trong LZW",
      "C": "Huffman thích nghi",
      "D": "Nén sử dụng biến đổi"
    },
    "answer": "B",
    "explanation": "Khái niệm: EOI trong LZW có định nghĩa: \"mã đặc biệt đánh dấu kết thúc thông tin\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 387,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Giới hạn từ điển LZW trong môn xử lý ảnh?",
    "options": {
      "A": "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu",
      "B": "Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý",
      "C": "Từ điển trong bài giảng có tối đa 4096 phần tử nên từ mã lớn nhất dài 12 bit",
      "D": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"giới hạn từ điển lzw\" có đặc điểm/định nghĩa: \"Từ điển trong bài giảng có tối đa 4096 phần tử nên từ mã lớn nhất dài 12 bit\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 388,
    "question": "Một bài toán có yêu cầu JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "LZW",
      "B": "Mã Huffman",
      "C": "Tỷ lệ nén",
      "D": "Phân khối JPEG"
    },
    "answer": "D",
    "explanation": "Khái niệm: Phân khối JPEG có định nghĩa: \"jpeg thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 389,
    "question": "Khi ôn tập về Lượng tử hóa JPEG, nội dung nào cần được ghi nhớ là đúng?",
    "options": {
      "A": "Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0",
      "B": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống",
      "C": "Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa",
      "D": "Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"lượng tử hóa jpeg\" có đặc điểm/định nghĩa: \"Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 390,
    "question": "Nếu hệ thống phải Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0, lựa chọn nào nên được xem xét trước tiên?",
    "options": {
      "A": "RLE cho ảnh nhị phân",
      "B": "Lượng tử hóa JPEG",
      "C": "Nén thế hệ thứ nhất",
      "D": "Quét Zig-Zag"
    },
    "answer": "B",
    "explanation": "Khái niệm: Lượng tử hóa JPEG có định nghĩa: \"chia các hệ số dct cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 391,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Quét Zig-Zag trong môn xử lý ảnh?",
    "options": {
      "A": "Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0",
      "B": "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh",
      "C": "Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa",
      "D": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"quét zig-zag\" có đặc điểm/định nghĩa: \"Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 392,
    "question": "Một bài toán có yêu cầu Có thể giảm độ phân giải hai thành phần sắc độ vì mắt người nhạy với độ sáng hơn màu. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Độ dư thừa dữ liệu",
      "B": "RLE theo Gray code",
      "C": "Phân khối JPEG",
      "D": "Giảm mẫu màu trong JPEG"
    },
    "answer": "D",
    "explanation": "Khái niệm: Giảm mẫu màu trong JPEG có định nghĩa: \"có thể giảm độ phân giải hai thành phần sắc độ vì mắt người nhạy với độ sáng hơn màu\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 393,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Kim tự tháp ảnh trong môn xử lý ảnh?",
    "options": {
      "A": "Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass",
      "B": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống",
      "C": "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu",
      "D": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"kim tự tháp ảnh\" có đặc điểm/định nghĩa: \"Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 394,
    "question": "Một bài toán có yêu cầu Khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "LZW",
      "B": "Nén Fractal",
      "C": "Phân khối JPEG",
      "D": "Huffman thích nghi"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nén Fractal có định nghĩa: \"khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 395,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Nén không mất thông tin trong môn xử lý ảnh?",
    "options": {
      "A": "Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén",
      "B": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén",
      "C": "Sau giải nén có thể khôi phục chính xác dữ liệu gốc",
      "D": "Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"nén không mất thông tin\" có đặc điểm/định nghĩa: \"Sau giải nén có thể khôi phục chính xác dữ liệu gốc\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 396,
    "question": "Một bài toán có yêu cầu Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Độ dư thừa dữ liệu",
      "B": "Từ điển LZW",
      "C": "Mã Huffman",
      "D": "Nén có mất thông tin"
    },
    "answer": "D",
    "explanation": "Khái niệm: Nén có mất thông tin có định nghĩa: \"sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 397,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Nén không gian trong môn xử lý ảnh?",
    "options": {
      "A": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian",
      "B": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết",
      "C": "Sau giải nén có thể khôi phục chính xác dữ liệu gốc",
      "D": "JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin"
    },
    "answer": "A",
    "explanation": "Khái niệm: \"nén không gian\" có đặc điểm/định nghĩa: \"Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 398,
    "question": "Một bài toán có yêu cầu Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số. Kỹ thuật nào phù hợp nhất?",
    "options": {
      "A": "Nén Fractal",
      "B": "Nén sử dụng biến đổi",
      "C": "Nén không mất thông tin",
      "D": "Giảm mẫu màu trong JPEG"
    },
    "answer": "B",
    "explanation": "Khái niệm: Nén sử dụng biến đổi có định nghĩa: \"biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 399,
    "question": "Phát biểu nào mô tả phù hợp nhất cho Mã hóa loạt dài RLE trong môn xử lý ảnh?",
    "options": {
      "A": "Có thể tạo nhiều đoạn lặp hơn vì các giá trị gần nhau trong Gray code chỉ khác nhau một bit",
      "B": "Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý",
      "C": "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu",
      "D": "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần"
    },
    "answer": "C",
    "explanation": "Khái niệm: \"mã hóa loạt dài rle\" có đặc điểm/định nghĩa: \"Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  },
  {
    "id": 400,
    "question": "Trong thực hành, yêu cầu Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén nên gắn với lựa chọn nào?",
    "options": {
      "A": "EOI trong LZW",
      "B": "Mã hóa khối",
      "C": "Tỷ lệ nén",
      "D": "Độ dư thừa dữ liệu"
    },
    "answer": "D",
    "explanation": "Khái niệm: Độ dư thừa dữ liệu có định nghĩa: \"phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén\".",
    "chapterId": 7,
    "chapterName": "Chương 7: Nén dữ liệu ảnh & Chuẩn JPEG"
  }
];
