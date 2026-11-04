import sys, re, json

sys.stdout.reconfigure(encoding='utf-8')

# The comprehensive dictionary of concept <-> definition
concept_definitions = [
    # Chương 1 & Tổng quan
    ("Nhiễu ngẫu nhiên", "Loại nhiễu không rõ quy luật và thường được khắc phục bằng các phép lọc"),
    ("Nhiễu hệ thống", "Loại nhiễu có quy luật và có thể khử bằng các phép biến đổi thích hợp"),
    ("Tăng số mức xám", "Nội suy các mức xám trung gian nhằm tăng độ mịn của ảnh"),
    ("Giảm số mức xám", "Nhóm các mức xám gần nhau thành một nhóm để giảm số mức biểu diễn"),
    ("Mức xám", "Biểu diễn cường độ sáng của điểm ảnh"),
    ("Ảnh số", "Ảnh số có thể được biểu diễn bằng một ma trận các điểm ảnh sau quá trình số hóa"),
    ("Nén không bảo toàn thông tin", "Thường cho khả năng nén cao hơn nhưng dữ liệu phục hồi không hoàn toàn giống ảnh gốc"),
    ("Nén có bảo toàn thông tin", "Cho phép phục hồi dữ liệu ảnh sau giải nén mà không làm mất thông tin gốc"),
    ("Phân loại có mẫu", "Mẫu đầu vào được gán vào một lớp đã xác định dựa trên mẫu chuẩn"),
    ("Phân loại không có mẫu", "Các mẫu được nhóm thành lớp theo tiêu chuẩn đồng dạng khi lớp chưa được định danh trước"),
    ("Hệ thống nhận dạng tự động", "Gồm các khâu thu nhận và tiền xử lý, biểu diễn dữ liệu, nhận dạng và ra quyết định"),
    ("Đặc điểm biên", "Có thể được trích chọn bằng các toán tử như gradient, la bàn hoặc Laplace để hỗ trợ nhận dạng"),
    ("Nắn chỉnh biến dạng", "Khắc phục biến dạng do thiết bị quang học và điện tử bằng các phép chiếu dựa trên điểm điều khiển"),
    ("Pixel", "Phần tử ảnh; mỗi pixel gắn với vị trí và thông tin cường độ sáng hoặc màu"),

    # Chương 2: Thu nhận & Biểu diễn ảnh
    ("Ảnh màu RGB", "Biểu diễn màu bằng ba thành phần đỏ, xanh lá và xanh dương theo phối màu cộng"),
    ("Mô hình CMY", "Mô hình màu liên hệ với RGB theo nguyên tắc bù màu"),
    ("CMYK", "Mở rộng mô hình CMY bằng thành phần đen để phù hợp hơn với quá trình in"),
    ("Mô hình HSV", "Biểu diễn màu theo sắc độ, độ bão hòa và giá trị sáng"),
    ("Mô hình HSL", "Biểu diễn màu theo sắc độ, độ bão hòa và độ sáng"),
    ("BMP", "Định dạng ảnh bitmap lưu dữ liệu ảnh theo cấu trúc điểm ảnh"),
    ("PCX", "Định dạng ảnh có sử dụng mã hóa loạt dài trong lưu trữ dữ liệu ảnh"),
    ("TIFF", "Định dạng ảnh hỗ trợ nhiều kiểu mã hóa và nhiều kiểu màu"),
    ("Phối màu cộng", "Tạo màu bằng cách cộng các thành phần ánh sáng và là nguyên lý của mô hình RGB"),
    ("Phối màu trừ", "Tạo màu bằng cách hấp thụ bớt thành phần ánh sáng và được dùng trong các mô hình phục vụ in ấn"),
    ("RAW", "Dữ liệu ảnh thô lưu thông tin thu nhận trực tiếp với mức xử lý tối thiểu trước khi hậu kỳ"),
    ("Thiết bị thu nhận ảnh Raster", "Camera và scanner là các thiết bị thu nhận ảnh Raster thông dụng"),
    ("Thiết bị thu nhận ảnh Vector", "Sensor hoặc bàn số hóa có thể tạo dữ liệu Vector"),
    ("Lấy mẫu", "Biến tín hiệu quang liên tục thành tín hiệu điện được lấy tại các vị trí rời rạc"),
    ("Lượng tử hóa", "Biến giá trị biên độ liên tục sau lấy mẫu thành các mức rời rạc hữu hạn để lưu trữ"),
    ("Định lý lấy mẫu", "Tần số lấy mẫu theo mỗi chiều phải ít nhất gấp đôi tần số cao nhất của tín hiệu để có thể tái tạo ảnh"),
    ("Mô hình Vector", "Biểu diễn bằng các đối tượng hình học và có thể phóng to mà không bị vỡ hình"),
    ("Mô hình Raster", "Biểu diễn ảnh bằng ma trận các điểm ảnh và thuận lợi cho hiển thị, in ấn"),
    ("Lọc Bayer", "Dùng một cảm biến với bộ lọc màu và cần nội suy để khôi phục đủ thông tin màu cho mỗi điểm ảnh"),
    ("Nội suy màu Bayer", "Ước lượng các thành phần màu còn thiếu tại mỗi pixel dựa trên thông tin các pixel lân cận"),
    ("Three-CCD", "Dùng ba cảm biến riêng cho ba thành phần màu để tăng chất lượng và giảm sai số nội suy"),
    ("Độ phân giải ảnh", "Liên quan đến số lượng điểm ảnh dùng để biểu diễn ảnh theo các chiều không gian"),
    ("Nửa cường độ", "Kỹ thuật in tạo cảm giác nhiều mức xám bằng cách thay đổi mật độ các điểm in"),
    ("Ảnh mức xám", "Ảnh có nhiều mức cường độ sáng từ tối đến sáng"),
    ("Ảnh nhị phân", "Ảnh chỉ có hai mức biểu diễn"),

    # Chương 3: Tiền xử lý & Nâng cao chất lượng ảnh
    ("Lọc trung bình", "Thay điểm ảnh bằng giá trị trung bình của vùng lân cận để làm trơn ảnh"),
    ("Lọc trung vị", "Thay điểm ảnh bằng trung vị của các giá trị trong cửa sổ lân cận và phù hợp với nhiễu xung"),
    ("Lọc trung bình theo k giá trị gần nhất", "Tính trung bình trên k giá trị trong lân cận có mức xám gần với điểm đang xét"),
    ("Tăng độ sáng", "Cộng một hằng số dương vào mức xám làm ảnh sáng hơn"),
    ("Giảm độ sáng", "Cộng một hằng số âm vào mức xám làm ảnh tối hơn"),
    ("Ảnh âm bản", "Biến đổi mức xám theo quan hệ nghịch đảo so với thang mức xám"),
    ("Dãn độ tương phản", "Mở rộng dải mức xám để tăng khả năng phân biệt vùng sáng tối"),
    ("Histogram", "Biểu diễn số điểm ảnh tương ứng với từng mức xám"),
    ("Cân bằng histogram", "Phân bố lại mức xám để cải thiện độ tương phản của ảnh"),
    ("Tìm ngưỡng tự động", "Xác định ngưỡng dựa trên đặc trưng phân bố mức xám thay vì chọn hoàn toàn thủ công"),
    ("Tách ngưỡng", "Phân chia giá trị điểm ảnh theo một ngưỡng để tạo các nhóm mức xám khác nhau"),
    ("Bó cụm mức xám", "Nhóm các mức xám gần nhau để giảm số mức biểu diễn hoặc làm nổi bật vùng giá trị quan tâm"),
    ("Trích chọn bit", "Tách các mặt phẳng bit của ảnh để phân tích mức đóng góp của từng bit vào thông tin ảnh"),
    ("Mặt phẳng bit cao", "Thường chứa phần lớn thông tin hình dạng và cấu trúc quan trọng của ảnh mức xám"),
    ("Phép nhân chập", "Kết hợp vùng lân cận của ảnh với một mặt nạ lọc để tạo giá trị đầu ra"),
    ("Nhiễu Gaussian", "Nhiễu có biên độ tuân theo phân bố Gaussian"),
    ("Nhiễu muối tiêu", "Nhiễu xung tạo ra các điểm rất sáng hoặc rất tối rải rác trên ảnh"),
    ("Mô hình suy giảm ảnh", "Biểu diễn ảnh quan sát như kết quả của ảnh gốc qua hệ suy hao kết hợp với nhiễu"),
    ("Khôi phục ảnh", "Ước lượng ảnh gốc từ ảnh bị suy giảm dựa trên mô hình suy hao và nhiễu"),
    ("Lọc đảo", "Khôi phục ảnh bằng cách bù trực tiếp hàm suy hao trong miền tần số khi điều kiện cho phép"),
    ("Lọc Wiener", "Khôi phục ảnh theo tiêu chuẩn giảm sai số trung bình bình phương khi xét cả suy hao và nhiễu"),
    ("Lọc giả đảo", "Hạn chế ảnh hưởng của các thành phần làm phép đảo trở nên không ổn định"),

    # Chương 4: Phát hiện biên & Hình thái học
    ("Biên ảnh", "Vị trí có sự thay đổi đáng kể về mức xám và thường tạo ranh giới giữa các vùng"),
    ("Phát hiện biên trực tiếp", "Phát hiện biên dựa trên biến thiên mức xám, thường thông qua đạo hàm"),
    ("Phát hiện biên gián tiếp", "Xác định biên từ ranh giới của các vùng sau khi phân vùng"),
    ("Gradient", "Đạo hàm bậc nhất dùng để làm nổi bật sự thay đổi mức xám"),
    ("Prewitt", "Toán tử gradient sử dụng các mặt nạ xấp xỉ đạo hàm theo hai hướng"),
    ("Sobel", "Toán tử gradient có trọng số lớn hơn ở hàng hoặc cột giữa của mặt nạ"),
    ("Toán tử la bàn", "Dùng nhiều mặt nạ định hướng để phát hiện biên theo các hướng khác nhau"),
    ("Laplace", "Toán tử đạo hàm bậc hai nhạy với chi tiết mịn và điểm cô lập"),
    ("Đạo hàm bậc hai", "Làm nổi chi tiết mịn và điểm cô lập nhưng thường nhạy với nhiễu hơn"),
    ("Đạo hàm bậc nhất", "Nhạy với bước nhảy mức xám và thường tạo đáp ứng biên dày hơn đạo hàm bậc hai"),
    ("Canny", "Phương pháp phát hiện biên nhiều bước nhằm tạo biên mảnh và liên tục hơn"),
    ("Ức chế cực đại không", "Làm mảnh đáp ứng gradient bằng cách chỉ giữ cực đại cục bộ theo hướng biên trong Canny"),
    ("Ngưỡng kép Canny", "Dùng hai ngưỡng để phân biệt biên mạnh, biên yếu và hỗ trợ nối biên"),
    ("Dò biên theo quy hoạch động", "Tìm đường biên tối ưu dựa trên một hàm chi phí và quan hệ lân cận giữa các điểm"),
    ("Láng giềng 4", "Gồm các điểm lân cận trên, dưới, trái và phải của điểm đang xét"),
    ("Láng giềng 8", "Bao gồm cả bốn hướng chéo ngoài bốn láng giềng trực giao"),
    ("Phần tử cấu trúc", "Mẫu hình học dùng để xác định cách phép toán hình thái tác động lên ảnh"),
    ("Phép co ảnh", "Làm co vùng đối tượng và có thể loại bỏ chi tiết nhỏ so với phần tử cấu trúc"),
    ("Phép giãn ảnh", "Làm mở rộng vùng đối tượng theo phần tử cấu trúc"),
    ("Phép mở", "Thực hiện co ảnh rồi giãn ảnh với cùng phần tử cấu trúc"),
    ("Phép đóng", "Thực hiện giãn ảnh rồi co ảnh với cùng phần tử cấu trúc"),
    ("Trích biên trong", "Có thể xác định bằng hiệu giữa ảnh gốc và ảnh sau phép co"),
    ("Trích biên hình thái", "Có thể xác định biên từ hiệu giữa ảnh đã giãn và ảnh đã co"),

    # Chương 5: Phân vùng ảnh
    ("Phân vùng ảnh", "Chia ảnh thành các vùng sao cho mỗi vùng chứa đối tượng hoặc nhóm đối tượng có tính chất tương đồng"),
    ("Phân vùng theo ngưỡng", "Phân biệt vùng đối tượng và nền dựa trên một hoặc nhiều ngưỡng mức xám"),
    ("Phân vùng toàn thể", "Dựa trên thông tin của toàn ảnh, ví dụ histogram"),
    ("Phân vùng cục bộ", "Dựa chủ yếu trên thông tin trong lân cận của điểm ảnh"),
    ("Histogram hai đỉnh", "Thường gợi ý khả năng tồn tại hai nhóm mức xám tương ứng gần với nền và đối tượng"),
    ("Làm trơn histogram", "Giảm dao động không cần thiết trên histogram trước khi xác định ngưỡng"),
    ("Thuật toán đẳng điệu", "Lặp việc ước lượng hai nhóm mức xám và cập nhật ngưỡng cho đến khi ổn định"),
    ("Thuật toán tam giác", "Xác định ngưỡng dựa trên hình học của histogram và khoảng cách đến đường nối đặc trưng"),
    ("Đối xứng nền", "Ước lượng ngưỡng dựa trên tính đối xứng của phân bố mức xám thuộc nền"),
    ("Phân vùng dựa theo đường biên", "Sử dụng thông tin đường biên để xác định ranh giới các vùng"),
    ("Phân vùng theo miền đồng nhất", "Hình thành vùng từ các điểm có thuộc tính gần nhau theo tiêu chuẩn đồng nhất"),
    ("Phát triển vùng", "Bắt đầu từ các điểm hạt giống rồi bổ sung các điểm lân cận thỏa tiêu chuẩn đồng nhất"),
    ("Tách vùng", "Chia một vùng chưa đồng nhất thành các vùng nhỏ hơn"),
    ("Hợp vùng", "Ghép các vùng lân cận nếu chúng thỏa tiêu chuẩn đồng nhất"),
    ("Tiêu chuẩn đồng nhất", "Quy định khi nào các điểm hoặc vùng có thể được xem là cùng một vùng trong quá trình phân đoạn"),
    ("Kết cấu texture", "Mô tả sự sắp xếp và biến thiên cục bộ của mức xám, hữu ích khi phân vùng các bề mặt"),
    ("Phân vùng theo kết cấu bề mặt", "Dựa vào đặc trưng texture để phân biệt các vùng có cấu trúc bề mặt khác nhau"),

    # Chương 6: Nhận dạng ảnh
    ("Nhận dạng ảnh", "Quá trình gán đối tượng vào một lớp dựa trên mô hình biểu diễn, quy luật và mẫu chuẩn"),
    ("Học có giám sát", "Sử dụng thư viện mẫu chuẩn đã biết để học và so sánh đối tượng cần nhận dạng"),
    ("Học không giám sát", "Tự hình thành các lớp và đặc trưng lớp khi không có thư viện mẫu chuẩn"),
    ("Biểu diễn trong không gian đặc trưng", "Mô tả mỗi đối tượng bằng một vector nhiều chiều, mỗi chiều là một đặc trưng"),
    ("Nhận dạng cấu trúc", "Biểu diễn đối tượng bằng quan hệ hoặc chuỗi ký hiệu và nhận dạng dựa trên quy tắc cấu trúc"),
    ("Hàm phân lớp", "Hàm hỗ trợ quyết định đối tượng thuộc lớp nào dựa trên giá trị các đặc trưng"),
    ("Phân lớp tuyến tính", "Sử dụng hàm phân biệt tuyến tính tạo siêu phẳng giữa các lớp"),
    ("Khoảng cách Euclidean", "Thường được dùng để xác định mẫu hoặc tâm cụm gần nhất trong không gian đặc trưng"),
    ("Thuật toán khoảng cách lớn nhất", "Tạo lớp mới từ phần tử xa nhất khi khoảng cách vượt điều kiện ngưỡng"),
    ("K-means", "Phân đối tượng vào K cụm bằng cách lặp gán điểm tới tâm gần nhất và cập nhật tâm"),
    ("Tâm cụm K-means", "Là giá trị trung bình của các đối tượng đang được gán vào cụm tương ứng"),
    ("ISODATA", "Thuật toán phân cụm lặp có khả năng tách và gộp lớp theo các ngưỡng"),
    ("K láng giềng", "Gán lớp theo lớp chiếm đa số trong số K mẫu gần nhất của đối tượng cần nhận dạng"),
    ("KNN có trọng số", "Giảm ảnh hưởng của các láng giềng ở xa bằng cách gán trọng số phụ thuộc khoảng cách"),
    ("Học cạnh tranh Kohonen", "Tại một thời điểm chọn nơron có vector trọng số gần đầu vào nhất rồi hiệu chỉnh vùng lân cận"),
    ("Mạng Kohonen", "Bản đồ tự tổ chức ánh xạ các vector gần nhau vào các nơron lân cận"),
    ("Bản đồ tự tổ chức", "Bảo toàn tương đối quan hệ lân cận khi ánh xạ các vector đầu vào lên lưới nơron"),
    ("Mạng Hopfield", "Mạng một lớp liên kết đầy đủ dùng cơ chế tự kết hợp để hồi tưởng mẫu"),
    ("Tín hiệu lưỡng cực Hopfield", "Mạng Hopfield trong bài giảng sử dụng các giá trị đầu vào -1 và 1"),

    # Chương 7: Nén ảnh
    ("Độ dư thừa dữ liệu", "Phần thông tin có thể loại bỏ hoặc biểu diễn hiệu quả hơn trong quá trình nén"),
    ("Tỷ lệ nén", "Tỷ số giữa kích thước dữ liệu trước nén và kích thước dữ liệu sau nén"),
    ("Nén không mất thông tin", "Sau giải nén có thể khôi phục chính xác dữ liệu gốc"),
    ("Nén có mất thông tin", "Sau giải nén không thu được hoàn toàn dữ liệu gốc nhưng thường đạt tỷ lệ nén cao hơn"),
    ("Nén không gian", "Khai thác sự lặp lại hoặc tương quan của các mẫu ảnh trong miền không gian"),
    ("Nén thế hệ thứ nhất", "Bao gồm các phương pháp mã hóa tương đối trực tiếp như RLE, Huffman và LZW"),
    ("Nén thế hệ thứ hai", "Khai thác cấu trúc và mô hình ảnh ở mức cao hơn nhằm vượt giới hạn của các phương pháp truyền thống"),
    ("Mã hóa khối", "Biểu diễn các khối dữ liệu bằng các từ mã tương ứng"),
    ("Mã hóa loạt dài RLE", "Thay một chuỗi ký hiệu lặp liên tiếp bằng biểu diễn gồm độ dài loạt và ký hiệu"),
    ("RLE cho ảnh nhị phân", "Mã hóa từng dòng bằng độ dài các chuỗi bit liên tiếp, thường bắt đầu từ số lượng bit 0"),
    ("RLE theo Gray code", "Có thể tạo nhiều đoạn lặp hơn vì các giá trị gần nhau trong Gray code chỉ khác nhau một bit"),
    ("Mã Huffman", "Gán từ mã ngắn cho ký hiệu có xác suất xuất hiện cao và từ mã dài hơn cho ký hiệu ít xuất hiện"),
    ("Cây Huffman", "Được xây dựng bằng cách lặp ghép hai nút có xác suất nhỏ nhất"),
    ("Huffman thích nghi", "Điều chỉnh cách mã hóa theo sự thay đổi của thống kê dữ liệu trong quá trình xử lý"),
    ("LZW", "Xây dựng và mở rộng từ điển các chuỗi trong quá trình mã hóa mà không cần truyền từ điển hoàn chỉnh"),
    ("Từ điển LZW", "Được mở rộng động khi xuất hiện các chuỗi mới trong dữ liệu đầu vào"),
    ("Giới hạn từ điển LZW", "Từ điển trong bài giảng có tối đa 4096 phần tử nên từ mã lớn nhất dài 12 bit"),
    ("Clear Code của LZW", "Mã đặc biệt dùng để kết thúc từ điển hiện tại và bắt đầu lại từ điển mới khi cần"),
    ("EOI trong LZW", "Mã đặc biệt đánh dấu kết thúc thông tin"),
    ("Nén sử dụng biến đổi", "Biến đổi ảnh sang miền khác trước khi lượng tử hoặc mã hóa các hệ số"),
    ("DCT trong JPEG", "Chuyển dữ liệu ảnh từ miền không gian sang miền tần số để tập trung năng lượng và thuận lợi loại bớt chi tiết"),
    ("Phân khối JPEG", "JPEG thường chia ảnh thành các khối 8×8 trước khi biến đổi cosin"),
    ("Giảm mẫu màu trong JPEG", "Có thể giảm độ phân giải hai thành phần sắc độ vì mắt người nhạy với độ sáng hơn màu"),
    ("Lượng tử hóa JPEG", "Chia các hệ số DCT cho ma trận lượng tử và làm tròn, khiến nhiều hệ số tần số cao trở thành 0"),
    ("Quét Zig-Zag", "Sắp xếp các hệ số sau lượng tử theo thứ tự từ tần số thấp đến cao trước khi mã hóa"),
    ("Kim tự tháp ảnh", "Biểu diễn ảnh ở nhiều mức kích thước bằng thành phần low-pass và các phần chi tiết high-pass"),
    ("Nén Fractal", "Khai thác tính tự tương đồng của ảnh nhưng quá trình tìm phép biến đổi thường tốn thời gian mã hóa"),

    # CĐR học phần (Soft skills)
    ("tham gia tích cực trong giờ giảng", "chủ động trao đổi và thực hiện các hoạt động học tập được giao trên lớp"),
    ("tích lũy và cập nhật kiến thức", "thường xuyên bổ sung kiến thức mới liên quan đến nội dung xử lý ảnh"),
    ("thực hiện nhiệm vụ được giao", "hoàn thành phần việc đúng phạm vi và thời điểm đã thống nhất"),
    ("tự đánh giá việc học", "kiểm tra lại mức độ hiểu bài và xác định nội dung cần bổ sung")
]

def norm(s):
    s = s.strip().rstrip('.?').lower()
    s = re.sub(r'\s+', ' ', s)
    return s

concept_to_def = {}
def_to_concept = {}

for c, d in concept_definitions:
    cn = norm(c)
    dn = norm(d)
    concept_to_def[cn] = dn
    def_to_concept[dn] = cn

print(f"Loaded {len(concept_definitions)} concept-definition pairs.")

# Now parse all 400 questions from the file
with open(r'C:\Users\lehiep\.gemini\antigravity\brain\675defa0-c861-4ea4-91e1-6b6b5f2371b2\.user_uploaded\media_1793719596713_ceeeb7dd.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = r'(Câu\s+\d+\..*?)(?=(?:Câu\s+\d+\.|\Z))'
matches = re.findall(pattern, text, re.DOTALL)

solved_questions = []
unresolved_ids = []

for m in matches:
    lines = [l.strip() for l in m.strip().split('\n') if l.strip()]
    q_line = lines[0]
    q_num = int(re.search(r'Câu\s+(\d+)\.', q_line).group(1))
    q_text = re.sub(r'^Câu\s+\d+\.\s*', '', q_line)
    
    options = {}
    current_opt = None
    for l in lines[1:]:
        opt_m = re.match(r'^([A-D])\.\s*(.*)', l)
        if opt_m:
            current_opt = opt_m.group(1)
            options[current_opt] = opt_m.group(2)
        elif current_opt:
            options[current_opt] += ' ' + l

    # Determine answer:
    # 1. Check if q_text contains any concept
    best_opt = None
    explanation = ""

    # Check if this is a definition-to-concept question:
    # Check if any definition matches part of q_text
    found_def_in_q = False
    for dn, cn in def_to_concept.items():
        if dn in norm(q_text):
            # The question asks about this definition, so the answer should be the concept cn
            for opt_k, opt_v in options.items():
                if norm(opt_v) == cn:
                    best_opt = opt_k
                    explanation = f"Khái niệm: {opt_v} có định nghĩa: \"{dn}\"."
                    found_def_in_q = True
                    break
        if found_def_in_q:
            break

    if not found_def_in_q:
        # Check if question mentions a concept
        for cn, dn in concept_to_def.items():
            if cn in norm(q_text):
                # The question asks about concept cn, so the answer should be definition dn
                for opt_k, opt_v in options.items():
                    if norm(opt_v) == dn:
                        best_opt = opt_k
                        explanation = f"Khái niệm: \"{cn}\" có đặc điểm/định nghĩa: \"{opt_v}\"."
                        break
            if best_opt:
                break

    if best_opt:
        solved_questions.append({
            'id': q_num,
            'question': q_text,
            'options': options,
            'answer': best_opt,
            'explanation': explanation
        })
    else:
        unresolved_ids.append((q_num, q_text, options))

print(f"Solved: {len(solved_questions)} / 400")
if unresolved_ids:
    print(f"Unresolved count: {len(unresolved_ids)}")
    for uid, uq, uopt in unresolved_ids[:10]:
        print(f"  Q{uid}: {uq}")
        for k, v in uopt.items():
            print(f"    {k}: {v}")
