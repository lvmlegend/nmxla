// Sổ tay định nghĩa và thuật ngữ cốt lõi Xử Lý Ảnh
window.GLOSSARY_DATA = [
  {
    "concept": "Biên ảnh",
    "definition": "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng"
  },
  {
    "concept": "Biểu diễn trong không gian đặc trưng",
    "definition": "Mô tả mỗi đối tượng bằng một vector nhiều chiều, mỗi chiều là một đặc trưng"
  },
  {
    "concept": "BMP",
    "definition": "Định dạng ảnh bitmap lưu dữ liệu ảnh theo cấu trúc điểm ảnh"
  },
  {
    "concept": "Bó cụm mức xám",
    "definition": "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm"
  },
  {
    "concept": "Bản đồ tự tổ chức",
    "definition": "Bảo toàn tương đối quan hệ lân cận khi ánh xạ các vector đầu vào lên lưới nơron"
  },
  {
    "concept": "Canny",
    "definition": "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn"
  },
  {
    "concept": "Clear Code của LZW",
    "definition": "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần"
  },
  {
    "concept": "CMYK",
    "definition": "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in"
  },
  {
    "concept": "Cân bằng histogram",
    "definition": "Phân bố lại mức xám để cải thiện độ tương phản của ảnh"
  },
  {
    "concept": "Cây Huffman",
    "definition": "Được xây dựng bằng cách lặp ghép hai nút có xác suất nhỏ nhất"
  },
  {
    "concept": "DCT trong JPEG",
    "definition": "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết"
  },
  {
    "concept": "Dãn độ tương phản",
    "definition": "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối"
  },
  {
    "concept": "Dò biên theo quy hoạch động",
    "definition": "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm"
  },
  {
    "concept": "EOI trong LZW",
    "definition": "Mã đặc biệt đánh dấu kết thúc thông tin"
  },
  {
    "concept": "Giảm mẫu màu trong JPEG",
    "definition": "Có thể giảm độ phân giải hai thành phần sắc độ vì mắt người nhạy với độ sáng hơn màu"
  },
  {
    "concept": "Giảm số mức xám",
    "definition": "Nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn"
  },
  {
    "concept": "Giảm độ sáng",
    "definition": "Cộng một hằng số âm vào mức xám làm ảnh tối hơn"
  },
  {
    "concept": "Giới hạn từ điển LZW",
    "definition": "Từ điển trong bài giảng có tối đa 4096 phần tử nên từ mã lớn nhất dài 12 bit"
  },
  {
    "concept": "Gradient",
    "definition": "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám"
  },
  {
    "concept": "Histogram",
    "definition": "Biểu diễn số điểm ảnh tương ứng với từng mức xám"
  },
  {
    "concept": "Histogram hai đỉnh",
    "definition": "Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng"
  },
  {
    "concept": "Huffman thích nghi",
    "definition": "Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý"
  },
  {
    "concept": "Hàm phân lớp",
    "definition": "Hàm hỗ trợ quyết định đối tượng thuộc lớp nào dựa trên giá trị các đặc trưng"
  },
  {
    "concept": "Hệ thống nhận dạng tự động",
    "definition": "Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định"
  },
  {
    "concept": "Học có giám sát",
    "definition": "Sử dụng thư viện mẫu chuẩn đã biết để học và so sánh đối tượng cần nhận dạng"
  },
  {
    "concept": "Học cạnh tranh Kohonen",
    "definition": "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận"
  },
  {
    "concept": "Học không giám sát",
    "definition": "Tự hình thành các lớp và đặc trưng lớp khi không có thư viện mẫu chuẩn"
  },
  {
    "concept": "Hợp vùng",
    "definition": "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất"
  },
  {
    "concept": "ISODATA",
    "definition": "Thuật toán phân cụm lặp có khả năng tách và gộp lớp theo các ngưỡng"
  },
  {
    "concept": "K láng giềng",
    "definition": "Gán lớp theo lớp chiếm đa số trong số K mẫu gần nhất của đối tượng cần nhận dạng"
  },
  {
    "concept": "K-means",
    "definition": "Phân đối tượng vào K cụm bằng cách lặp gán điểm tới tâm gần nhất và cập nhật tâm"
  },
  {
    "concept": "Khoảng cách Euclidean",
    "definition": "Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng"
  },
  {
    "concept": "Khôi phục ảnh",
    "definition": "Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu"
  },
  {
    "concept": "Kim tự tháp ảnh",
    "definition": "Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass"
  },
  {
    "concept": "KNN có trọng số",
    "definition": "Giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách"
  },
  {
    "concept": "Kết cấu texture",
    "definition": "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt"
  },
  {
    "concept": "Laplace",
    "definition": "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập"
  },
  {
    "concept": "LZW",
    "definition": "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh"
  },
  {
    "concept": "Làm trơn histogram",
    "definition": "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng"
  },
  {
    "concept": "Láng giềng 4",
    "definition": "Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét"
  },
  {
    "concept": "Láng giềng 8",
    "definition": "Bao gồm cả bốn hướng chéo ngoài bốn láng giềng trực giao"
  },
  {
    "concept": "Lượng tử hóa",
    "definition": "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ"
  },
  {
    "concept": "Lượng tử hóa JPEG",
    "definition": "Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0"
  },
  {
    "concept": "Lấy mẫu",
    "definition": "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc"
  },
  {
    "concept": "Lọc Bayer",
    "definition": "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"
  },
  {
    "concept": "Lọc giả đảo",
    "definition": "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định"
  },
  {
    "concept": "Lọc trung bình",
    "definition": "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh"
  },
  {
    "concept": "Lọc trung bình theo k giá trị gần nhất",
    "definition": "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét"
  },
  {
    "concept": "Lọc trung vị",
    "definition": "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung"
  },
  {
    "concept": "Lọc Wiener",
    "definition": "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu"
  },
  {
    "concept": "Lọc đảo",
    "definition": "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép"
  },
  {
    "concept": "Mã Huffman",
    "definition": "Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện"
  },
  {
    "concept": "Mã hóa khối",
    "definition": "Biểu diễn các khối dữ liệu bằng các từ mã tương ứng"
  },
  {
    "concept": "Mã hóa loạt dài RLE",
    "definition": "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu"
  },
  {
    "concept": "Mô hình CMY",
    "definition": "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu"
  },
  {
    "concept": "Mô hình HSL",
    "definition": "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng"
  },
  {
    "concept": "Mô hình HSV",
    "definition": "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng"
  },
  {
    "concept": "Mô hình Raster",
    "definition": "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn"
  },
  {
    "concept": "Mô hình suy giảm ảnh",
    "definition": "Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu"
  },
  {
    "concept": "Mô hình Vector",
    "definition": "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình"
  },
  {
    "concept": "Mạng Hopfield",
    "definition": "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu"
  },
  {
    "concept": "Mạng Kohonen",
    "definition": "Bản đồ tự tổ chức ánh xạ các vector gần nhau vào các nơron lân cận"
  },
  {
    "concept": "Mặt phẳng bit cao",
    "definition": "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám"
  },
  {
    "concept": "Mức xám",
    "definition": "Biểu diễn cường độ sáng của điểm ảnh"
  },
  {
    "concept": "Ngưỡng kép Canny",
    "definition": "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên"
  },
  {
    "concept": "Nhiễu Gaussian",
    "definition": "Nhiễu có biên độ tuân theo phân bố Gaussian"
  },
  {
    "concept": "Nhiễu hệ thống",
    "definition": "Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp"
  },
  {
    "concept": "Nhiễu muối tiêu",
    "definition": "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh"
  },
  {
    "concept": "Nhiễu ngẫu nhiên",
    "definition": "Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc"
  },
  {
    "concept": "Nhận dạng cấu trúc",
    "definition": "Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc"
  },
  {
    "concept": "Nhận dạng ảnh",
    "definition": "Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn"
  },
  {
    "concept": "Nén có bảo toàn thông tin",
    "definition": "Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc"
  },
  {
    "concept": "Nén có mất thông tin",
    "definition": "Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn"
  },
  {
    "concept": "Nén Fractal",
    "definition": "Khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa"
  },
  {
    "concept": "Nén không bảo toàn thông tin",
    "definition": "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc"
  },
  {
    "concept": "Nén không gian",
    "definition": "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian"
  },
  {
    "concept": "Nén không mất thông tin",
    "definition": "Sau giải nén có thể khôi phục chính xác dữ liệu gốc"
  },
  {
    "concept": "Nén sử dụng biến đổi",
    "definition": "Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số"
  },
  {
    "concept": "Nén thế hệ thứ hai",
    "definition": "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống"
  },
  {
    "concept": "Nén thế hệ thứ nhất",
    "definition": "Bao gồm các phương pháp mã hóa tương đối trực tiếp như RLE, Huffman và LZW"
  },
  {
    "concept": "Nắn chỉnh biến dạng",
    "definition": "Khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển"
  },
  {
    "concept": "Nội suy màu Bayer",
    "definition": "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận"
  },
  {
    "concept": "Nửa cường độ",
    "definition": "Kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in"
  },
  {
    "concept": "PCX",
    "definition": "Định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh"
  },
  {
    "concept": "Phát hiện biên gián tiếp",
    "definition": "Xác định biên từ ranh giới của các vùng sau khi phân vùng"
  },
  {
    "concept": "Phát hiện biên trực tiếp",
    "definition": "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm"
  },
  {
    "concept": "Phát triển vùng",
    "definition": "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất"
  },
  {
    "concept": "Phân khối JPEG",
    "definition": "JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin"
  },
  {
    "concept": "Phân loại có mẫu",
    "definition": "Mẫu đầu vào được gán vào một lớp đã xác định dựa trên mẫu chuẩn"
  },
  {
    "concept": "Phân loại không có mẫu",
    "definition": "Các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước"
  },
  {
    "concept": "Phân lớp tuyến tính",
    "definition": "Sử dụng hàm phân biệt tuyến tính tạo siêu phẳng giữa các lớp"
  },
  {
    "concept": "Phân vùng cục bộ",
    "definition": "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh"
  },
  {
    "concept": "Phân vùng dựa theo đường biên",
    "definition": "Sử dụng thông tin đường biên để xác định ranh giới các vùng"
  },
  {
    "concept": "Phân vùng theo kết cấu bề mặt",
    "definition": "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau"
  },
  {
    "concept": "Phân vùng theo miền đồng nhất",
    "definition": "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất"
  },
  {
    "concept": "Phân vùng theo ngưỡng",
    "definition": "Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám"
  },
  {
    "concept": "Phân vùng toàn thể",
    "definition": "Dựa trên thông tin của toàn ảnh, ví dụ histogram"
  },
  {
    "concept": "Phân vùng ảnh",
    "definition": "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng"
  },
  {
    "concept": "Phép co ảnh",
    "definition": "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc"
  },
  {
    "concept": "Phép giãn ảnh",
    "definition": "Làm mở rộng vùng đối tượng theo phần tử cấu trúc"
  },
  {
    "concept": "Phép mở",
    "definition": "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc"
  },
  {
    "concept": "Phép nhân chập",
    "definition": "Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra"
  },
  {
    "concept": "Phép đóng",
    "definition": "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc"
  },
  {
    "concept": "Phần tử cấu trúc",
    "definition": "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"
  },
  {
    "concept": "Phối màu cộng",
    "definition": "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB"
  },
  {
    "concept": "Phối màu trừ",
    "definition": "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"
  },
  {
    "concept": "Pixel",
    "definition": "Phần tử ảnh; mỗi pixel gắn với vị trí và thông tin cường độ sáng hoặc màu"
  },
  {
    "concept": "Prewitt",
    "definition": "Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng"
  },
  {
    "concept": "Quét Zig-Zag",
    "definition": "Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa"
  },
  {
    "concept": "RAW",
    "definition": "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ"
  },
  {
    "concept": "RLE cho ảnh nhị phân",
    "definition": "Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0"
  },
  {
    "concept": "RLE theo Gray code",
    "definition": "Có thể tạo nhiều đoạn lặp hơn vì các giá trị gần nhau trong Gray code chỉ khác nhau một bit"
  },
  {
    "concept": "Sobel",
    "definition": "Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ"
  },
  {
    "concept": "tham gia tích cực trong giờ giảng",
    "definition": "chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp"
  },
  {
    "concept": "Thiết bị thu nhận ảnh Raster",
    "definition": "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng"
  },
  {
    "concept": "Thiết bị thu nhận ảnh Vector",
    "definition": "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector"
  },
  {
    "concept": "Three-CCD",
    "definition": "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy"
  },
  {
    "concept": "Thuật toán khoảng cách lớn nhất",
    "definition": "Tạo lớp mới từ phần tử xa nhất khi khoảng cách vượt điều kiện ngưỡng"
  },
  {
    "concept": "Thuật toán tam giác",
    "definition": "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng"
  },
  {
    "concept": "Thuật toán đẳng điệu",
    "definition": "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định"
  },
  {
    "concept": "thực hiện nhiệm vụ được giao",
    "definition": "hoàn thành phần việc đúng phạm vi và thời điểm đã thống nhất"
  },
  {
    "concept": "TIFF",
    "definition": "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu"
  },
  {
    "concept": "Tiêu chuẩn đồng nhất",
    "definition": "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn"
  },
  {
    "concept": "Toán tử la bàn",
    "definition": "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau"
  },
  {
    "concept": "Trích biên hình thái",
    "definition": "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co"
  },
  {
    "concept": "Trích biên trong",
    "definition": "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co"
  },
  {
    "concept": "Trích chọn bit",
    "definition": "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh"
  },
  {
    "concept": "Tách ngưỡng",
    "definition": "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau"
  },
  {
    "concept": "Tách vùng",
    "definition": "Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn"
  },
  {
    "concept": "Tâm cụm K-means",
    "definition": "Là giá trị trung bình của các đối tượng đang được gán vào cụm tương ứng"
  },
  {
    "concept": "Tìm ngưỡng tự động",
    "definition": "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công"
  },
  {
    "concept": "tích lũy và cập nhật kiến thức",
    "definition": "thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh"
  },
  {
    "concept": "Tín hiệu lưỡng cực Hopfield",
    "definition": "Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1"
  },
  {
    "concept": "Tăng số mức xám",
    "definition": "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh"
  },
  {
    "concept": "Tăng độ sáng",
    "definition": "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn"
  },
  {
    "concept": "Từ điển LZW",
    "definition": "Được mở rộng động khi xuất hiện các chuỗi mới trong dữ liệu đầu vào"
  },
  {
    "concept": "tự đánh giá việc học",
    "definition": "kiểm tra lại mức độ hiểu bài và xác định nội dung cần bổ sung"
  },
  {
    "concept": "Tỷ lệ nén",
    "definition": "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén"
  },
  {
    "concept": "Đạo hàm bậc hai",
    "definition": "Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn"
  },
  {
    "concept": "Đạo hàm bậc nhất",
    "definition": "Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai"
  },
  {
    "concept": "Đặc điểm biên",
    "definition": "Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng"
  },
  {
    "concept": "Định lý lấy mẫu",
    "definition": "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh"
  },
  {
    "concept": "Đối xứng nền",
    "definition": "Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền"
  },
  {
    "concept": "Độ dư thừa dữ liệu",
    "definition": "Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén"
  },
  {
    "concept": "Độ phân giải ảnh",
    "definition": "Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian"
  },
  {
    "concept": "Ảnh màu RGB",
    "definition": "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng"
  },
  {
    "concept": "Ảnh mức xám",
    "definition": "Ảnh có nhiều mức cường độ sáng từ tối đến sáng"
  },
  {
    "concept": "Ảnh nhị phân",
    "definition": "Ảnh chỉ có hai mức biểu diễn"
  },
  {
    "concept": "Ảnh số",
    "definition": "Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa"
  },
  {
    "concept": "Ảnh âm bản",
    "definition": "Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám"
  },
  {
    "concept": "Ức chế cực đại không",
    "definition": "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny"
  }
];
